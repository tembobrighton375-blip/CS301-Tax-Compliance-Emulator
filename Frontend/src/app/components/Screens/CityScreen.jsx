import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import Phaser from "phaser";
import PhaserGame from "../PhaserGame";
import { CityScene } from "../../game/scenes/CityScene";
import { ProgressBar } from "../ProgressBar";
import { ExitButton } from "./export_all_Screens";
import AppShell from "../layout/AppShell";

const gameConfig = {
  width: 800,
  height: 400,
  scene: [CityScene],
  backgroundColor: "#1a2d3f",
  transparent: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  input: {
    mouse: { preventDefaultWheel: false },
    touch: { capture: false },
  },
};

export default function CityScreen({ gameState, onNext, onExit }) {
  const prof = gameState.profession;
  const scenarios = gameState.scenarios;
  const remaining = scenarios.length - gameState.scenarioIndex;

  const gameRef = useRef(null);

  const handleGameReady = (game) => {
    gameRef.current = game;
    game.events.emit("set-compliance", gameState.compliance);
  };

  useEffect(() => {
    if (gameRef.current) {
      gameRef.current.events.emit("set-compliance", gameState.compliance);
    }
  }, [gameState.compliance]);

  const statusMessage =
    gameState.compliance >= 70
      ? "✨ Your city is thriving thanks to tax revenue"
      : gameState.compliance >= 40
        ? "⚡ Your city needs better compliance to grow"
        : "⚠️ Low compliance is hurting your city";

  return (
    <AppShell accentColor="#5EAF6E">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10">
        <div>
          <div className="text-tax-gold text-[0.68rem] sm:text-xs font-bold tracking-widest">
            {prof.emoji} {prof.name.toUpperCase()}
          </div>
          <div className="text-foreground font-extrabold text-sm sm:text-base">
            Your City
          </div>
        </div>
        <div className="flex gap-3 sm:gap-4 items-center">
          <div className="text-right">
            <div className="text-muted-foreground text-[0.6rem] sm:text-[0.68rem]">
              WALLET
            </div>
            <div className="text-tax-green font-extrabold text-sm sm:text-base">
              K{gameState.money.toLocaleString()}
            </div>
          </div>
          <ExitButton onClick={onExit} />
        </div>
      </div>

      {/* CANVAS */}
      <div
        className="relative w-full overflow-hidden bg-tax-navy"
        style={{ aspectRatio: "800 / 400" }}
      >
        <PhaserGame gameConfig={gameConfig} onGameReady={handleGameReady} />

        {/* Status caption */}
        <div
          className="
            absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2
            rounded-lg px-3 py-2 sm:px-4 sm:py-2
            max-w-[90%] text-center
          "
          style={{
            background: "rgba(30,50,75,0.7)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            pointerEvents: "none",
          }}
        >
          <div className="text-muted-foreground text-[0.65rem] sm:text-xs">
            {statusMessage}
          </div>
        </div>
      </div>

      {/* PROGRESS + ACTIONS */}
      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 max-w-3xl mx-auto w-full">
        <div className="rounded-xl p-4 sm:p-5 bg-white/8 border border-white/15">
          <div className="flex flex-col gap-3 sm:gap-4">
            <ProgressBar
              value={gameState.compliance}
              max={100}
              label="Compliance Rating"
              color={
                gameState.compliance >= 60
                  ? "#5EAF6E"
                  : gameState.compliance >= 30
                    ? "#E8834A"
                    : "#D4183D"
              }
            />
            <ProgressBar
              value={gameState.scenarioIndex}
              max={scenarios.length}
              label="Scenarios Completed"
              color="#C9A870"
            />
          </div>
        </div>

        {gameState.lastChoice && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl px-4 py-3 sm:px-5 sm:py-4"
            style={{
              background:
                gameState.lastChoice.outcome === "good"
                  ? "rgba(94,175,110,0.15)"
                  : gameState.lastChoice.outcome === "neutral"
                    ? "rgba(232,131,74,0.15)"
                    : "rgba(212,24,61,0.15)",
              border: `1px solid ${
                gameState.lastChoice.outcome === "good"
                  ? "rgba(94,175,110,0.35)"
                  : gameState.lastChoice.outcome === "neutral"
                    ? "rgba(232,131,74,0.35)"
                    : "rgba(212,24,61,0.35)"
              }`,
            }}
          >
            <div className="text-foreground font-bold text-sm sm:text-base mb-1">
              Last: {gameState.lastChoice.consequenceTitle}
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm">
              {gameState.lastChoice.scoreChange > 0 ? "+" : ""}
              {gameState.lastChoice.scoreChange} compliance •{" "}
              {gameState.lastChoice.moneyChange >= 0 ? "+" : ""}K
              {gameState.lastChoice.moneyChange}
            </div>
          </motion.div>
        )}

        {gameState.scenarioIndex < scenarios.length ? (
          <button
            onClick={onNext}
            className="w-full rounded-xl py-4 font-extrabold text-base transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, #C9A870, #E8C878)",
              color: "#1A1A2E",
              boxShadow: "0 4px 20px rgba(201,168,112,0.35)",
            }}
          >
            Next Scenario ({remaining} remaining) →
          </button>
        ) : (
          <button
            onClick={onNext}
            className="w-full rounded-xl py-4 font-extrabold text-base text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, #5EAF6E, #45956e)",
              boxShadow: "0 4px 20px rgba(94,175,110,0.35)",
            }}
          >
            🏆 View Final Results →
          </button>
        )}
      </div>
    </AppShell>
  );
}