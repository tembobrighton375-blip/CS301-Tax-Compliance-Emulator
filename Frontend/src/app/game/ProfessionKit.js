// ProfessionKit.js
// Universal profession config — adds new professions via colour swaps only.
// Hats and accessories are drawn once as archetypes and recoloured per profession.
import Phaser from "phaser";
import { FreelanceCreative } from "../components/Professions/FreelanceCreative/FreelanceCreative";

const HAT_ARCHETYPES = {
  cap: (g, accent) => {
    // Dark band (fixed colour)
    g.fillStyle(0x1f2937, 1);
    g.fillRoundedRect(-46, -29, 92, 12, 6);
    // Coloured dome
    g.fillStyle(Phaser.Display.Color.HexStringToColor(accent).color, 1);
    g.beginPath();
    g.arc(0, -29, 40, Math.PI, 0, false);
    g.closePath();
    g.fillPath();
  },

  beanie: (g, accent) => {
    // Dome
    g.fillStyle(Phaser.Display.Color.HexStringToColor(accent).color, 1);
    g.fillEllipse(0, -26, 104, 70);
    // Pom-pom (fixed white)
    g.fillStyle(0xffffff, 1);
    g.fillCircle(0, -61, 6);
  },

  band: (g, accent) => {
    g.fillStyle(Phaser.Display.Color.HexStringToColor(accent).color, 1);
    g.fillRoundedRect(-45, -25, 90, 13, 6);
  },

  brim: (g, accent) => {
    const c = Phaser.Display.Color.HexStringToColor(accent).color;
    // Brim
    g.fillStyle(c, 1);
    g.fillEllipse(0, -29, 170, 32);
    // Dome (slightly transparent for depth)
    g.fillStyle(c, 0.85);
    g.fillEllipse(0, -48, 68, 40);
  },

  scarf: (g, accent) => {
    const c = Phaser.Display.Color.HexStringToColor(accent).color;
    // Wrap
    g.fillStyle(c, 1);
    g.fillEllipse(0, -26, 92, 56);
    // Side tail
    g.beginPath();
    g.moveTo(44, -3);
    g.lineTo(60, 17);
    g.lineTo(46, 27);
    g.closePath();
    g.fillPath();
  },

  none: () => {
    // Bare head — nothing to draw
  },
};

// ---------- ACCESSORY ARCHETYPES ----------
// All coordinates relative to an accessory anchor at (0, 0).
// We position a container at the accessory spot, then draw into it.

const ACCESSORY_ARCHETYPES = {
  wheel: (g, accent) => {
    const c = Phaser.Display.Color.HexStringToColor(accent).color;
    g.lineStyle(4, c, 1);
    g.strokeCircle(0, 0, 20);
    // Two spokes through centre
    g.beginPath();
    g.moveTo(-20, 0);
    g.lineTo(20, 0);
    g.moveTo(0, -20);
    g.lineTo(0, 20);
    g.strokePath();
  },

  tablet: (g, accent) => {
    // Body (fixed dark)
    g.fillStyle(0x333333, 1);
    g.fillRoundedRect(-18, -24, 36, 48, 4);
    // Screen (accent)
    g.fillStyle(Phaser.Display.Color.HexStringToColor(accent).color, 1);
    g.fillRoundedRect(-13, -19, 26, 34, 2);
  },

  ledger: (g, accent) => {
    const c = Phaser.Display.Color.HexStringToColor(accent).color;
    // Cover
    g.fillStyle(c, 1);
    g.fillRoundedRect(-16, -20, 32, 40, 3);
    g.lineStyle(1, 0x8a7a4a, 1);
    g.strokeRoundedRect(-16, -20, 32, 40, 3);
    // Page lines
    g.lineStyle(1, 0x8a7a4a, 1);
    for (let i = 0; i < 3; i++) {
      g.beginPath();
      g.moveTo(-10, -8 + i * 8);
      g.lineTo(10, -8 + i * 8);
      g.strokePath();
    }
  },

  basket: (g, accent) => {
    const c = Phaser.Display.Color.HexStringToColor(accent).color;
    // Basket body
    g.fillStyle(c, 1);
    g.beginPath();
    g.moveTo(-20, -4);
    g.lineTo(20, -4);
    g.lineTo(12, 32);
    g.lineTo(-12, 32);
    g.closePath();
    g.fillPath();
    // Weave line
    g.lineStyle(2, 0x7a501f, 1);
    g.beginPath();
    g.moveTo(-18, 8);
    g.lineTo(18, 8);
    g.strokePath();
  },

  tool: (g, accent) => {
    const c = Phaser.Display.Color.HexStringToColor(accent).color;
    // Handle
    g.fillStyle(c, 1);
    g.fillRoundedRect(-4, -30, 8, 50, 3);
    // Head (open circle)
    g.lineStyle(4, c, 1);
    g.strokeCircle(0, -30, 10);
  },

  bag: (g, accent) => {
    const c = Phaser.Display.Color.HexStringToColor(accent).color;
    // Body
    g.fillStyle(c, 1);
    g.fillRoundedRect(-18, -10, 36, 34, 6);
    // Strap
    g.lineStyle(3, 0x5b4b3a, 1);
    g.beginPath();
    g.arc(0, -10, 16, Math.PI, 0, false);
    g.strokePath();
  },

  none: () => {
    // Empty hands
  },
};

// ---------- PROFESSION CONFIG ----------
// Adding a new profession = adding one line here.
// Unless the profession needs a genuinely new silhouette,
// it will use one of the existing hat/accessory archetypes.

export const PROFESSION_KIT = {
  yango: {
    torso: "#E8615B",
    hat: ["cap", "#C0392B"],
    accessory: ["wheel", "#2B2B2B"],
  },
  creative: {
    torso: "#5B4B8A",
    hat: ["beanie", "#5B4B8A"],
    accessory: ["tablet", "#8FD3E8"],
  },
  shopowner: {
    torso: "#2F6B3F",
    hat: ["band", "#2F6B3F"],
    accessory: ["ledger", "#F5E9C8"],
  },
  markettrader: {
    torso: "#A13D3D",
    hat: ["brim", "#D9A441"],
    accessory: ["basket", "#B97A3D"],
  },
};

export function applyProfession(character, key) {
  const cfg = PROFESSION_KIT[key];
  if (!cfg) {
    console.warn(`[ProfessionKit] Unknown profession: ${key}`);
    return;
  }

  const torsoColor = Phaser.Display.Color.HexStringToColor(cfg.torso).color;
  character.torso.setFillStyle(torsoColor);
  if (character.leftArm) character.leftArm.setFillStyle(torsoColor);
  if (character.rightArm) character.rightArm.setFillStyle(torsoColor);

  // Hat
  character.hatSlot.clear();
  const hatFn = HAT_ARCHETYPES[cfg.hat[0]];
  if (hatFn) hatFn(character.hatSlot, cfg.hat[1]);

  // Accessory
  character.accessorySlot.clear();
  const accFn = ACCESSORY_ARCHETYPES[cfg.accessory[0]];
  if (accFn) accFn(character.accessorySlot, cfg.accessory[1]);
}
