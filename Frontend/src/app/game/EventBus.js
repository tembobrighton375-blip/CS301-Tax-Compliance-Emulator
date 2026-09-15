import Phaser from "phaser";

// Global event bus for React <-> Phaser communication[citation:1]
export const EventBus = new Phaser.Events.EventEmitter();
