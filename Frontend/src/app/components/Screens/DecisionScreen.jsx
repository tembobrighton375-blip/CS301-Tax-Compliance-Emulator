import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import PhaserGame from "../PhaserGame";
import { CharacterScene } from "../../game/scenes/CharacterScene";
import { EventBus } from "../../game/EventBus";
import AppShell from "../layout/AppShell";
import Phaser from "phaser";

const gameConfig = {
  width: 800,
  height: 480,
  scene: [CharacterScene],
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

export default function DecisionScreen({ gameState, onChoice, onExit }) {
  const scenarios = gameState.scenarios;
  const scenario = scenarios[gameState.scenarioIndex];
  const [hovered, setHovered] = useState(null);
  const [phoneBounds, setPhoneBounds] = useState(null);

  const gameRef = useRef(null);

  const handleGameReady = (game) => {
    gameRef.current = game;
    EventBus.emit("set-profession", gameState.profession?.id || "yango");
  };

  useEffect(() => {
    const onPhoneReady = (bounds) => setPhoneBounds(bounds);
    EventBus.on("phone-screen-ready", onPhoneReady);
    return () => EventBus.off("phone-screen-ready", onPhoneReady);
  }, []);

  useEffect(() => {
    if (gameRef.current && gameState.profession) {
      EventBus.emit("set-profession", gameState.profession.id || "yango");
    }
  }, [gameState.profession]);

  const renderOverlay = () => {
    if (!phoneBounds) return null;

    return (
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${phoneBounds.percentX * 100}%`,
          top: `${phoneBounds.percentY * 100}%`,
          width: `${phoneBounds.percentWidth * 100}%`,
          height: `${phoneBounds.percentHeight * 100}%`,
          padding: "clamp(10px, 2.4%, 22px)",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            color: "#C9A870",
            fontSize: "clamp(0.75rem, 1.9vmin, 0.95rem)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            marginBottom: "clamp(4px, 1vmin, 12px)",
          }}
        >
          SITUATION
        </div>
        <div
          style={{
            color: "#F5F7FA",
            fontSize: "clamp(1rem, 2.6vmin, 1.35rem)",
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: "clamp(6px, 1.2vmin, 14px)",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {scenario.icon} {scenario.title}
        </div>
        <div
          style={{
            color: "#B8C4CF",
            fontSize: "clamp(0.85rem, 2.3vmin, 1.15rem)",
            lineHeight: 1.55,
            fontFamily: "Inter, sans-serif",
            width: "100%",
            maxWidth: "100%",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          {scenario.situation}
        </div>
      </div>
    );
  };

  return (
    <AppShell accentColor="#C9A870" maxWidth={1400}>
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10">
        <div>
          <div className="text-tax-gold text-[0.68rem] sm:text-xs font-bold tracking-widest">
            SCENARIO {gameState.scenarioIndex + 1} OF {scenarios.length}
          </div>
          <div className="text-foreground font-extrabold text-sm sm:text-base">
            Make Your Choice
          </div>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <span className="text-tax-green font-bold text-sm">
            K{gameState.money.toLocaleString()}
          </span>
          <span className="text-tax-gold font-bold text-sm">
            {gameState.compliance}% ✓
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 lg:gap-6 p-4 sm:p-5 lg:p-6">
        {/* CANVAS */}
        <div
          className="relative w-full rounded-xl overflow-hidden bg-tax-navy"
          style={{ aspectRatio: "800 / 480" }}
        >
          <PhaserGame gameConfig={gameConfig} onGameReady={handleGameReady} />
          {renderOverlay()}
        </div>

        {/* CHOICES */}
        <div className="flex flex-col gap-3">
          <div className="text-muted-foreground text-[0.68rem] sm:text-xs font-bold tracking-widest">
            WHAT DO YOU DO?
          </div>

          {scenario.choices.map((choice, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              onClick={() => onChoice(choice)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="text-left w-full rounded-xl px-4 py-3 sm:py-4 transition-all"
              style={{
                background:
                  hovered === i
                    ? "rgba(255,255,255,0.16)"
                    : "rgba(255,255,255,0.08)",
                border: `2px solid ${
                  hovered === i
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(255,255,255,0.1)"
                }`,
                transform: hovered === i ? "translateX(4px)" : "translateX(0)",
              }}
            >
              <div className="text-foreground font-bold text-sm sm:text-base mb-1">
                {choice.text}
              </div>
              {choice.subtext && (
                <div className="text-muted-foreground text-xs sm:text-sm">
                  {choice.subtext}
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
