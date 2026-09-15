import Phaser from "phaser";
import { CityScene } from "./scenes/CityScene";
import { CoinRainScene } from "./scenes/CoinRainScene";

export const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,
  backgroundColor: "#1a2d3f",
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
  scene: [CityScene, CoinRainScene],
};
