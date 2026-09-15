import Phaser from "phaser";

export class CityScene extends Phaser.Scene {
  constructor() {
    super({ key: "CityScene" });
    this.compliance = 50;
  }

  create() {
    // Background gradient
    this.cameras.main.setBackgroundColor("#1a2d3f");

    // Ground
    this.add.rectangle(400, 360, 800, 80, 0x2d4a60).setOrigin(0.5, 0.5);

    // Create buildings container
    this.buildings = [];
    this.trees = [];
    this.stars = [];

    // Stars (for night sky)
    this.createStars();

    // Moon
    this.moon = this.add.circle(680, 60, 20, 0xfff8e1).setAlpha(0.9);

    // Buildings will be generated here
    this.generateCity();

    // Listen for compliance changes from React
    this.game.events.on("set-compliance", this.onComplianceChange, this);

    // Cleanup on scene shutdown[citation:7]
    this.events.on("shutdown", () => {
      this.game.events.off("set-compliance", this.onComplianceChange, this);
    });
  }

  createStars() {
    for (let i = 0; i < 40; i++) {
      const x = Phaser.Math.Between(0, 800);
      const y = Phaser.Math.Between(0, 200);
      const star = this.add
        .circle(x, y, 1.5, 0xffffff)
        .setAlpha(0.3 + Math.random() * 0.7);
      this.stars.push(star);
    }
  }

  generateCity() {
    // Clear existing buildings
    this.buildings.forEach((b) => b.destroy());
    this.buildings = [];
    this.trees.forEach((t) => t.destroy());
    this.trees = [];

    // Determine building count based on compliance
    const buildingCount = this.getBuildingCount(this.compliance);
    const treeCount = this.getTreeCount(this.compliance);
    const hasStreetlights = this.compliance >= 60;

    // Generate buildings
    for (let i = 0; i < buildingCount; i++) {
      const x = 80 + i * (640 / buildingCount);
      const height = Phaser.Math.Between(40, 120);
      const width = Phaser.Math.Between(30, 50);
      const y = 340 - height;

      // Building base
      const building = this.add.rectangle(
        x,
        y + height / 2,
        width,
        height,
        0x3d5a6e,
      );
      building.setOrigin(0.5, 0.5);

      // Windows
      const windowCount = Math.floor(height / 20);
      for (let w = 0; w < windowCount; w++) {
        const wy = y + 15 + w * 18;
        const window = this.add.rectangle(
          x,
          wy,
          6,
          6,
          hasStreetlights ? 0xffd54f : 0x1a2d3f,
        );
        window.setAlpha(hasStreetlights ? 1 : 0.5);
        this.buildings.push(window);
      }

      // Store building for animation
      this.buildings.push(building);

      // Animate building growth
      building.setScale(0, 0);
      this.tweens.add({
        targets: building,
        scaleX: 1,
        scaleY: 1,
        duration: 600,
        delay: i * 50,
        ease: "Back.easeOut",
      });
    }

    // Generate trees
    for (let i = 0; i < treeCount; i++) {
      const x = Phaser.Math.Between(40, 760);
      const y = 330;
      const tree = this.add.circle(x, y, 12, 0x2e7d32);
      const trunk = this.add.rectangle(x, y + 15, 4, 15, 0x5d4037);
      this.trees.push(tree, trunk);

      // Animate tree growth
      tree.setScale(0, 0);
      this.tweens.add({
        targets: tree,
        scaleX: 1,
        scaleY: 1,
        duration: 500,
        delay: 400 + i * 100,
        ease: "Back.easeOut",
      });
    }

    // Streetlights (only if thriving)
    if (hasStreetlights) {
      for (let i = 0; i < 3; i++) {
        const x = 150 + i * 250;
        const pole = this.add.rectangle(x, 320, 3, 40, 0x555555);
        const light = this.add.circle(x, 300, 8, 0xffd54f);
        light.setAlpha(0.9);

        // Glow effect
        const glow = this.add.circle(x, 300, 20, 0xffd54f);
        glow.setAlpha(0.2);
        this.tweens.add({
          targets: glow,
          alpha: 0.4,
          duration: 1500,
          yoyo: true,
          repeat: -1,
        });
      }
    }
  }

  getBuildingCount(compliance) {
    if (compliance <= 30) return 4;
    if (compliance <= 70) return 10;
    return 16;
  }

  getTreeCount(compliance) {
    if (compliance <= 30) return 0;
    if (compliance <= 70) return 4;
    return 8;
  }

  onComplianceChange(compliance) {
    this.compliance = compliance;
    this.generateCity();
  }

  // Expose method for React to call directly
  setCompliance(value) {
    this.onComplianceChange(value);
  }
}
