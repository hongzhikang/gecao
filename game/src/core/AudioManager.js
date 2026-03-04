/**
 * AudioManager.js - Background music loop + sound effects
 * Stub: no assets by default; call playMusic/playSound when assets exist.
 */

export class AudioManager {
  constructor() {
    this.musicNode = null;
    this.ctx = null;
    this.initialized = false;
  }

  _init() {
    if (this.initialized) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.initialized = true;
    } catch (_) {}
  }

  playMusic(url, loop = true) {
    if (!url) return;
    this._init();
    if (!this.ctx) return;
  }

  playSound(url) {
    if (!url) return;
    this._init();
    if (!this.ctx) return;
  }

  stop() {
    if (this.musicNode) {
      try {
        this.musicNode.stop();
      } catch (_) {}
      this.musicNode = null;
    }
  }
}
