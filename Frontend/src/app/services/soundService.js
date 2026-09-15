import { Howl, Howler } from "howler";

const SOUNDS = {
  click: {
    src: ["/sounds/click.mp3"],
    volume: 0.4,
  },
  goodChoice: {
    src: ["/sounds/good-choice.mp3"],
    volume: 0.6,
  },
  badChoice: {
    src: ["/sounds/bad-choice.mp3"],
    volume: 0.6,
  },
  neutralChoice: {
    src: ["/sounds/neutral-choice.mp3"],
    volume: 0.5,
  },
  pageTransition: {
    src: ["/sounds/whoosh.mp3"],
    volume: 0.3,
  },
  coinReward: {
    src: ["/sounds/coin.mp3"],
    volume: 0.5,
  },
  error: {
    src: ["/sounds/error.mp3"],
    volume: 0.5,
  },
};

// Lazily-created Howl instances
const howls = {};

// Global mute state (persisted across sessions)
let muted =
  typeof window !== "undefined" &&
  localStorage.getItem("taxTrail_muted") === "true";

// ------------------------------------------------------------------
// Public API
// ------------------------------------------------------------------

export function playSound(key) {
  if (muted) return;
  if (!SOUNDS[key]) {
    console.warn(`[soundService] Unknown sound key: ${key}`);
    return;
  }

  if (!howls[key]) {
    howls[key] = new Howl({
      ...SOUNDS[key],
      preload: true,
    });
  }

  howls[key].play();
}

export function setMuted(value) {
  muted = value;
  if (typeof window !== "undefined") {
    localStorage.setItem("taxTrail_muted", String(muted));
  }
  Howler.mute(muted);
}

export function toggleMute() {
  setMuted(!muted);
  return muted;
}

export function isMuted() {
  return muted;
}

// Optional: preload all sounds on first call (speeds up playback)
export function preloadSounds() {
  Object.keys(SOUNDS).forEach((key) => {
    if (!howls[key]) {
      howls[key] = new Howl({ ...SOUNDS[key], preload: true });
    }
  });
}
