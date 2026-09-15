import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getRandomScenariosForProfession } from "./components/Professions/export_all";
import LoginModal from "./components/LoginModal";
import Toast from "./components/Toast";
import LoadingSpinner from "./components/LoadingSpinner";
import {
  saveProgress,
  loadProgress,
  autoSaveProgress,
  resetProgress,
} from "./services/progressService";
import { getProfessionById } from "./services/professionService";
import authService from "./services/authService";
import storageService from "./services/storageService";
import { gameStateService } from "./services/gameStateService";
import { notificationService } from "./services/notificationService";

import {
  Dashboard,
  StartScreen,
  ProfessionScreen,
  CityScreen,
  DecisionScreen,
  ConsequenceScreen,
  EndScreen,
} from "./components/Screens/export_all_Screens";
import { EventBus } from "./game/EventBus";

const initialGameState = {
  profession: null,
  scenarios: [],
  compliance: 50,
  money: 0,
  scenarioIndex: 0,
  lastChoice: null,
  totalIncome: 0,
  totalTaxPaid: 0,
  completedScenarios: [],
};

export default function App() {
  const [screen, setScreen] = useState("start");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [gameState, setGameState] = useState(initialGameState);
  const [savedGame, setSavedGame] = useState(null);

  // Restore session on page load/refresh (fixes: refresh mid-game
  // dropping the player back to a blank Start+login screen instead of
  // resuming where they were).
  // Restore session on page load/refresh
  useEffect(() => {
    const restoreSession = async () => {
      // Guard 1: no token = no session to restore. Show login modal.
      if (!authService.isAuthenticated()) {
        setIsLoginModalOpen(true);
        return;
      }

      setIsLoading(true);

      try {
        const result = await loadProgress();
        const progress = result?.progress;

        const hasActiveGame =
          progress &&
          progress.professionId &&
          (progress.scenarioIndex ?? 0) < 5;

        if (hasActiveGame) {
          setSavedGame(progress);

          const profession = getProfessionById(progress.professionId);
          if (profession) {
            const scenarios = getRandomScenariosForProfession(profession.id, 5);
            setGameState({
              profession,
              scenarios,
              compliance: progress.compliance ?? 50,
              money: progress.money ?? profession.startingMoney,
              scenarioIndex: progress.scenarioIndex ?? 0,
              lastChoice: null,
              totalIncome: progress.totalIncome ?? 0,
              totalTaxPaid: progress.totalTaxPaid ?? 0,
              completedScenarios: progress.completedScenarios ?? [],
            });
            // Resume directly on the City screen
            setScreen("city");
            console.log(
              "🔄 Session restored — resumed on City screen at scenario",
              progress.scenarioIndex,
            );
          } else {
            console.error(
              "Saved profession not found on restore:",
              progress.professionId,
            );
            setScreen("start");
          }
        } else {
          // Valid token but no active game — go to Start
          setSavedGame(null);
          setScreen("start");
        }

        // ✅ Token is valid and load succeeded — now hide the modal
        setIsLoginModalOpen(false);
      } catch (error) {
        // ❌ Token invalid, expired, or user deleted
        console.warn(
          "Session restore failed — clearing stale token:",
          error.message,
        );

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setSavedGame(null);
        setGameState(initialGameState);
        setScreen("start");

        // reopen the login modal
        setIsLoginModalOpen(true);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  // Auto-save progress (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        authService.isAuthenticated() &&
        screen !== "login" &&
        screen !== "start"
      ) {
        autoSaveProgress(gameState)
          .then((result) => {
            if (result.success === false) {
              console.warn("⚠️ Auto-save failed silently");
            } else {
              console.log("✅ Auto-save successful");
            }
          })
          .catch((err) => console.error("❌ Auto-save error:", err));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [gameState, screen]);

  const handleLogin = async (userData) => {
    console.log("Login successful:", userData);
    setIsLoginModalOpen(false);
    setIsLoading(true);

    try {
      const result = await loadProgress();
      const progress = result.progress;

      // An "active saved game" requires a profession AND < 5 scenarios played
      const hasActiveGame =
        progress && progress.professionId && (progress.scenarioIndex ?? 0) < 5;

      if (hasActiveGame) {
        setSavedGame(progress);
        console.log("✅ Saved game found:", progress.professionId);
      } else {
        setSavedGame(null);
        console.log("ℹ️ No saved game to resume");
      }

      // Always go to StartScreen — let the user choose
      setScreen("start");
    } catch (error) {
      console.error("Error loading progress:", error);
      setSavedGame(null);
      setScreen("start");
    } finally {
      setIsLoading(false);
    }
  };

  // Resume a saved game
  const handleContinueGame = () => {
    if (!savedGame) return;

    const profession = getProfessionById(savedGame.professionId);
    if (!profession) {
      console.error("Saved profession not found:", savedGame.professionId);
      // Graceful fallback: the saved profession id doesn't match any
      // known profession (e.g. corrupted/edited DB record). Don't leave
      // the user stuck with a Continue Game button that silently does
      // nothing — clear the broken saved game and let them start fresh.
      notificationService.showError(
        "Your saved game couldn't be loaded, so it's been cleared. Please start a new game.",
      );
      setSavedGame(null);
      resetProgress().catch((err) =>
        console.error("Error resetting corrupted progress:", err),
      );
      return;
    }

    const scenarios = getRandomScenariosForProfession(profession.id, 5);

    setGameState({
      profession,
      scenarios,
      compliance: savedGame.compliance ?? 50,
      money: savedGame.money ?? profession.startingMoney,
      scenarioIndex: savedGame.scenarioIndex ?? 0,
      lastChoice: null,
      totalIncome: savedGame.totalIncome ?? 0,
      totalTaxPaid: savedGame.totalTaxPaid ?? 0,
      completedScenarios: savedGame.completedScenarios ?? [],
    });

    console.log("▶️ Resuming saved game at scenario", savedGame.scenarioIndex);
    setScreen("city");
  };

  // Start a new game (confirm if a saved game exists)
  const handleStartNewGame = async () => {
    if (savedGame) {
      const confirmed = window.confirm(
        "You have a game in progress. Starting a new game will erase your progress.\n\nContinue?",
      );
      if (!confirmed) return;

      // Reset backend + local saved game
      try {
        await resetProgress();
        console.log("✅ Backend progress reset");
      } catch (error) {
        console.error("Error resetting backend progress:", error);
      }
      setSavedGame(null);
    }

    setGameState(initialGameState);
    setScreen("profession");
  };

  const handleSignUp = (userData) => {
    console.log("Sign up successful:", userData);
    setIsLoginModalOpen(false);
    setGameState(initialGameState);
  };

  const handleLogout = async () => {
    // Save game state before logout (only if in an active game)
    try {
      const hasActiveGame =
        gameState.profession &&
        gameState.scenarioIndex < (gameState.scenarios?.length || 5) &&
        authService.isAuthenticated();

      if (hasActiveGame) {
        console.log("💾 Saving progress before logout...");
        await saveProgress(gameState);
        console.log("✅ Progress saved");
      }
    } catch (error) {
      console.error("Error saving progress on logout:", error);
    }
    authService.logout();
    setIsLoginModalOpen(true);
    setScreen("start");

    // Reset game state
    setGameState(initialGameState);
    setSavedGame(null);
  };

  const handleExit = () => {
    console.warn("🚪 handleExit CALLED — clearing scenarios and scenarioIndex");
    console.trace();
    setGameState((prev) => ({
      ...prev,
      scenarios: [],
      compliance: 50,
      money: prev.profession?.startingMoney || 0,
      scenarioIndex: 0,
      lastChoice: null,
    }));
    setScreen("profession");
  };

  const handleProfessionSelect = (prof) => {
    const chosenScenarios = getRandomScenariosForProfession(prof.id, 5);

    const newState = {
      profession: prof,
      scenarios: chosenScenarios,

      compliance: 50,
      money: prof.startingMoney,
      scenarioIndex: 0,
      lastChoice: null,

      totalIncome: 0,
      totalTaxPaid: 0,
      completedScenarios: [],
    };

    setGameState(newState);

    if (authService.isAuthenticated()) {
      saveProgress(newState).catch(console.error);
    }

    setScreen("city");
  };

  const handleCityNext = () => {
    const scenarios = gameState.scenarios;
    if (gameState.scenarioIndex >= scenarios.length) {
      setScreen("end");
    } else {
      setScreen("decision");
    }
  };

  const handleChoice = (choice) => {
    EventBus.emit("trigger-coin-rain", choice.outcome);

    setGameState((prev) => {
      const newState = gameStateService.applyChoice(prev, choice);

      console.log("🎯 CHOICE APPLIED");
      console.log(
        "   Before → scenarioIndex:",
        prev.scenarioIndex,
        "scenarios:",
        prev.scenarios?.length,
      );
      console.log(
        "   After  → scenarioIndex:",
        newState.scenarioIndex,
        "scenarios:",
        newState.scenarios?.length,
      );

      if (authService.isAuthenticated()) {
        saveProgress(newState).catch(console.error);
      }
      return newState;
    });
    setScreen("consequence");
  };

  return (
    <div style={{ fontFamily: "Nunito, sans-serif", minHeight: "100vh" }}>
      {/* Toast notifications */}
      <Toast />

      {/* Loading Overlay */}
      {isLoading && <LoadingSpinner overlay text="Loading your progress..." />}

      <LoginModal
        isOpen={isLoginModalOpen}
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <AnimatePresence mode="wait">
        {screen === "start" && (
          <motion.div
            key="start"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <StartScreen
              hasSavedGame={!!savedGame}
              onContinue={handleContinueGame}
              onNew={handleStartNewGame}
              onLearn={() => window.open("https://www.zra.org.zm", "_blank")}
              onDashboard={() => setScreen("dashboard")}
            />
          </motion.div>
        )}

        {screen === "dashboard" && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Dashboard
              gameState={gameState}
              onChangeProfession={() => setScreen("profession")}
              onLogout={handleLogout}
              onBackToStart={() => setScreen("start")}
            />
          </motion.div>
        )}

        {screen === "profession" && (
          <motion.div
            key="profession"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <ProfessionScreen
              onSelect={handleProfessionSelect}
              onBack={() => setScreen("start")}
            />
          </motion.div>
        )}

        {screen === "city" && (
          <motion.div
            key="city"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <CityScreen
              gameState={gameState}
              onNext={handleCityNext}
              onExit={handleExit}
            />
          </motion.div>
        )}

        {screen === "decision" && (
          <motion.div
            key={`decision-${gameState.scenarioIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DecisionScreen
              gameState={gameState}
              onChoice={handleChoice}
              onExit={handleExit}
            />
          </motion.div>
        )}

        {screen === "consequence" && (
          <motion.div
            key="consequence"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ConsequenceScreen
              gameState={gameState}
              onContinue={() => setScreen("city")}
              onExit={handleExit}
            />
          </motion.div>
        )}

        {screen === "end" && (
          <motion.div
            key="end"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <EndScreen
              gameState={gameState}
              onPlayAgain={async () => {
                try {
                  await resetProgress();
                  console.log("✅ Backend progress reset");
                } catch (error) {
                  console.error("Error resetting backend progress:", error);
                }
                setGameState(initialGameState);
                setSavedGame(null);
                setScreen("start");
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
