import Phaser from "phaser";
import { Character } from "../objects/Character";
import { EventBus } from "../EventBus";

export class CharacterScene extends Phaser.Scene {
  constructor() {
    super({ key: "CharacterScene" });
    this.currentProfession = "yangoDriver";
  }

  create() {
    const { width, height } = this.scale;

    // --- City skyline background (reused visual language from CityScene) ---
    this.createCityBackground(width, height);

    // --- Character on the left, feet near the ground line ---
    const characterX = width * 0.28;
    const characterFeetY = height - 40;
    this.character = new Character(
      this,
      characterX,
      characterFeetY,
      this.currentProfession,
    );

    // --- Phone screen on the character's right (facing the viewer) ---
    // Positioned so the phone's screen sits at roughly (width*0.62, height*0.45)
    this.createPhone(width * 0.62, height * 0.5, 380, 460);

    // --- Listen for events from React ---
    EventBus.on("set-profession", this.onSetProfession, this);
    EventBus.on("set-mood", this.onSetMood, this);

    // --- Clean up listeners on scene shutdown ---
    this.events.on("shutdown", () => {
      EventBus.off("set-profession", this.onSetProfession, this);
      EventBus.off("set-mood", this.onSetMood, this);
    });

    // Let React know the scene is ready
    EventBus.emit("character-scene-ready");
  }

  // ---------- BACKGROUND ----------

  createCityBackground(width, height) {
    // Sky gradient
    const sky = this.add.graphics();
    sky.fillGradientStyle(0x1a2d3f, 0x1a2d3f, 0x2d4a60, 0x2d4a60, 1);
    sky.fillRect(0, 0, width, height);

    // Stars
    for (let i = 0; i < 30; i++) {
      const x = Phaser.Math.Between(0, width);
      const y = Phaser.Math.Between(0, height * 0.5);
      this.add.circle(x, y, 1.5, 0xffffff).setAlpha(0.3 + Math.random() * 0.6);
    }

    // Moon
    this.add.circle(width - 80, 60, 22, 0xfff8e1).setAlpha(0.9);

    // Distant buildings (silhouettes)
    const buildingCount = 12;
    const groundY = height - 20;
    for (let i = 0; i < buildingCount; i++) {
      const bWidth = Phaser.Math.Between(40, 70);
      const bHeight = Phaser.Math.Between(80, 200);
      const x = 40 + i * (width / buildingCount);
      const y = groundY - bHeight;

      this.add
        .rectangle(x, y + bHeight / 2, bWidth, bHeight, 0x2a3f52)
        .setOrigin(0.5, 0.5);

      // A few lit windows
      const windows = Phaser.Math.Between(2, 5);
      for (let w = 0; w < windows; w++) {
        const wx = x + Phaser.Math.Between(-bWidth / 3, bWidth / 3);
        const wy = y + Phaser.Math.Between(10, bHeight - 10);
        this.add.rectangle(wx, wy, 4, 6, 0xffd54f).setAlpha(0.7);
      }
    }

    // Ground
    this.add.rectangle(width / 2, groundY + 10, width, 20, 0x1e2c3a);
  }

  // ---------- PHONE ----------

  createPhone(x, y) {
    const phoneWidth = 240;
    const phoneHeight = 340;

    // Outer phone body
    this.phoneBody = this.add
      .rectangle(x, y, phoneWidth, phoneHeight, 0x111820)
      .setStrokeStyle(3, 0xc9a870)
      .setOrigin(0.5, 0.5);

    // Inner screen (the actual display surface)
    this.phoneScreen = this.add
      .rectangle(x, y, phoneWidth - 20, phoneHeight - 20, 0x0d1f33)
      .setOrigin(0.5, 0.5);

    // Top notch
    this.add.rectangle(x, y - phoneHeight / 2 + 14, 60, 6, 0x2a3f52);

    // Subtle screen glow
    this.screenGlow = this.add
      .rectangle(x, y, phoneWidth - 10, phoneHeight - 10, 0xc9a870)
      .setAlpha(0.05)
      .setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: this.screenGlow,
      alpha: 0.12,
      duration: 1800,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    // Store the screen bounds so React can position the overlay text
    // (We broadcast this via EventBus so React knows where to draw)
    const screenBounds = {
      x: x - (phoneWidth - 20) / 2,
      y: y - (phoneHeight - 20) / 2,
      width: phoneWidth - 20,
      height: phoneHeight - 20,
      // Also expose as % of canvas for responsive layout
      percentX: (x - (phoneWidth - 20) / 2) / this.scale.width,
      percentY: (y - (phoneHeight - 20) / 2) / this.scale.height,
      percentWidth: (phoneWidth - 20) / this.scale.width,
      percentHeight: (phoneHeight - 20) / this.scale.height,
    };
    this.screenBounds = screenBounds;
    EventBus.emit("phone-screen-ready", screenBounds);
  }

  // ---------- EVENT HANDLERS ----------

  onSetProfession(professionId) {
    this.currentProfession = professionId;
    if (this.character) {
      this.character.setProfession(professionId);
    }
  }

  onSetMood(mood) {
    if (this.character) {
      this.character.setMood(mood);
    }
  }
}
