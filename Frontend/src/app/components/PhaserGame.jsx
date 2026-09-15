import { useEffect, useRef } from "react";
import Phaser from "phaser";

export default function PhaserGame({ gameConfig, onGameReady }) {
  const gameRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const game = new Phaser.Game({
      ...gameConfig,
      parent: containerRef.current,
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    });

    gameRef.current = game;

    game.events.once("ready", () => {
      if (onGameReady) onGameReady(game);
    });

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [gameConfig]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
