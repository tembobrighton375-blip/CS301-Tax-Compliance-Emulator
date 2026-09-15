import Phaser from "phaser";
import { applyProfession } from "../ProfessionKit";

export class Character {
  constructor(scene, x, y, professionId = "yangoDriver") {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.professionId = professionId;

    // Container holds all pieces
    this.container = scene.add.container(x, y);

    // Reference points (relative to container origin at feet)
    this.headY = -140;
    this.torsoY = -90;
    this.hipY = -40;
    this.feetY = 0;

    // Head centre for hat anchor
    this.headCentre = { x: 0, y: this.headY };

    // Accessory anchor — near the right hand
    this.accessoryAnchor = { x: 53, y: -160 };

    this.buildBody();
    this.buildSlots();
    this.applyInitialProfession(professionId);
    this.startIdleAnimation();
  }

  // ---------- BODY ----------

  buildBody() {
    const scene = this.scene;

    // Legs
    this.leftLeg = scene.add
      .rectangle(-12, this.hipY + 20, 14, 45, 0x37474f)
      .setOrigin(0.5, 0);
    this.rightLeg = scene.add
      .rectangle(12, this.hipY + 20, 14, 45, 0x37474f)
      .setOrigin(0.5, 0);

    // Feet
    this.leftFoot = scene.add.ellipse(-12, this.feetY + 2, 18, 8, 0x212121);
    this.rightFoot = scene.add.ellipse(12, this.feetY + 2, 18, 8, 0x212121);

    // Torso (colour set by applyProfession)
    this.torso = scene.add
      .rectangle(0, this.torsoY, 60, 80, 0xff5252)
      .setOrigin(0.5, 0.5);

    // Arms
    this.leftArm = scene.add
      .rectangle(-35, this.torsoY + 5, 12, 60, 0xff5252)
      .setOrigin(0.5, 0);
    this.rightArm = scene.add
      .rectangle(35, this.torsoY + 5, 12, 60, 0xff5252)
      .setOrigin(0.5, 0);

    // Neck
    this.neck = scene.add.rectangle(0, this.headY + 45, 14, 12, 0xf5c9a3);

    // Head
    this.head = scene.add.circle(0, this.headY, 28, 0xf5c9a3);

    // Hair
    this.hair = scene.add.ellipse(0, this.headY - 18, 54, 24, 0x2b2b2b);

    // Eyes
    this.leftEye = scene.add.circle(-9, this.headY - 2, 3, 0x1a1a1a);
    this.rightEye = scene.add.circle(9, this.headY - 2, 3, 0x1a1a1a);

    // Mouth
    this.mouth = scene.add.arc(0, this.headY + 12, 8, 0, 180, false, 0x1a1a1a);
    this.mouth.setStrokeStyle(2, 0x1a1a1a);

    // Add to container in back-to-front order
    this.container.add([
      this.leftLeg,
      this.rightLeg,
      this.leftFoot,
      this.rightFoot,
      this.leftArm,
      this.rightArm,
      this.torso,
      this.neck,
      this.head,
      this.hair,
      this.leftEye,
      this.rightEye,
      this.mouth,
    ]);
  }

  // ---------- SLOTS (hat + accessory) ----------

  buildSlots() {
    const scene = this.scene;

    // Hat slot — a Graphics object positioned at head centre
    this.hatSlot = scene.add.graphics();
    this.hatSlot.setPosition(this.headCentre.x, this.headCentre.y);
    this.container.add(this.hatSlot);

    // Accessory slot — a Graphics object positioned at the accessory anchor
    this.accessorySlot = scene.add.graphics();
    this.accessorySlot.setPosition(
      this.accessoryAnchor.x,
      this.accessoryAnchor.y,
    );
    this.container.add(this.accessorySlot);
  }

  // ---------- PROFESSION ----------

  applyInitialProfession(professionId) {
    applyProfession(this, professionId);
    this.professionId = professionId;
  }

  setProfession(professionId) {
    applyProfession(this, professionId);
    this.professionId = professionId;
  }

  // ---------- ANIMATIONS ----------

  startIdleAnimation() {
    const scene = this.scene;

    // Breathing
    scene.tweens.add({
      targets: [
        this.torso,
        this.head,
        this.hair,
        this.leftEye,
        this.rightEye,
        this.mouth,
        this.hatSlot,
      ],
      y: "-=3",
      duration: 1400,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    // Blink
    scene.time.addEvent({
      delay: 3200,
      loop: true,
      callback: () => {
        scene.tweens.add({
          targets: [this.leftEye, this.rightEye],
          scaleY: 0.1,
          duration: 100,
          yoyo: true,
          ease: "Sine.easeInOut",
        });
      },
    });

    // Sway
    scene.tweens.add({
      targets: this.container,
      angle: { from: -1.5, to: 1.5 },
      duration: 2600,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });
  }

  // ---------- PUBLIC API ----------

  setMood(mood) {
    this.currentMood = mood; // reserved for future
  }

  destroy() {
    this.container.destroy();
  }
}
