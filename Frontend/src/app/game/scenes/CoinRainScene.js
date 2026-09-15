import Phaser from "phaser";

export class CoinRainScene extends Phaser.Scene {
  constructor() {
    super({ key: "CoinRainScene" });
  }

  create() {
    this.game.events.on("trigger-coin-rain", this.triggerRain, this);

    this.events.on("shutdown", () => {
      this.game.events.off("trigger-coin-rain", this.triggerRain, this);
    });
  }

  triggerRain(outcome) {
    // outcome: "good", "neutral", or "bad"
    const colorMap = {
      good: 0xffd700, // Gold
      neutral: 0x4fc3f7, // Blue
      bad: 0xff5252, // Red
    };
    const color = colorMap[outcome] || 0xffffff;

    // Use particle emitter for coin rain[citation:5]
    const particles = this.add.particles(0, 0, "coin", {
      x: { min: 0, max: 800 },
      y: -20,
      lifespan: 2000,
      speedY: { min: 200, max: 400 },
      speedX: { min: -50, max: 50 },
      scale: { start: 0.5, end: 0.2 },
      quantity: 2,
      tint: color,
      blendMode: "ADD",
    });

    // Stop after 1.5 seconds
    this.time.delayedCall(1500, () => {
      particles.stop();
      this.time.delayedCall(2000, () => particles.destroy());
    });
  }
}
