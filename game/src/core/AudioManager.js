/**
 * AudioManager.js - Background music loop + sound effects
 * 统一管理 BGM 与音效，基于 Web Audio API 简单实现。
 */

export class AudioManager {
  constructor() {
    this.ctx = null;
    this.initialized = false;

    this.bufferCache = new Map();

    this.musicGain = null;
    this.sfxGain = null;
    this.musicSource = null;
    this.currentMusicUrl = null;

    this.musicVolume = 0.6;
    this.sfxVolume = 1.0;
  }

  _resolveUrl(path) {
    if (!path) return path;
    if (typeof path !== 'string') return path;
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    // 使用 Vite 的 BASE_URL，在本地开发为 '/'，线上为 '/game/' 等
    // 构建后会被替换成字符串常量
    const base =
      (typeof import.meta !== 'undefined' && (import.meta.env && import.meta.env.BASE_URL)) ||
      '/';
    const baseClean = String(base || '/').replace(/\/$/, '');
    const p = path.startsWith('/') ? path : `/${path}`;
    return `${baseClean}${p}`;
  }

  _init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      const musicGain = this.ctx.createGain();
      const sfxGain = this.ctx.createGain();
      musicGain.gain.value = this.musicVolume;
      sfxGain.gain.value = this.sfxVolume;

      musicGain.connect(this.ctx.destination);
      sfxGain.connect(this.ctx.destination);

      this.musicGain = musicGain;
      this.sfxGain = sfxGain;

      this.initialized = true;
    } catch (_) {
      // 浏览器可能不支持或被用户禁用音频，静默失败
    }
  }

  async _ensureContextReady() {
    this._init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
      } catch (_) {
        // 某些浏览器需要用户手势才能 resume
      }
    }
  }

  async _loadBuffer(url) {
    if (!url) return null;
    const resolved = this._resolveUrl(url);
    const cacheKey = resolved;
    if (this.bufferCache.has(cacheKey)) return this.bufferCache.get(cacheKey);
    await this._ensureContextReady();
    if (!this.ctx) return null;
    try {
      const res = await fetch(resolved);
      const arr = await res.arrayBuffer();
      const buffer = await this.ctx.decodeAudioData(arr);
      this.bufferCache.set(cacheKey, buffer);
      return buffer;
    } catch (_) {
      return null;
    }
  }

  setMusicVolume(v) {
    this.musicVolume = Math.max(0, Math.min(1, v));
    if (this.musicGain) this.musicGain.gain.value = this.musicVolume;
  }

  setSfxVolume(v) {
    this.sfxVolume = Math.max(0, Math.min(1, v));
    if (this.sfxGain) this.sfxGain.gain.value = this.sfxVolume;
  }

  /**
   * 播放背景音乐
   * @param {string} url
   * @param {{loop?: boolean, volume?: number, fadeSeconds?: number}} options
   */
  async playMusic(url, options = {}) {
    if (!url) return;
    const { loop = true, volume, fadeSeconds = 0 } = options;

    await this._ensureContextReady();
    if (!this.ctx || !this.musicGain) return;

    if (this.currentMusicUrl === url && this.musicSource) {
      return;
    }

    const buffer = await this._loadBuffer(url);
    if (!buffer) return;

    // 停掉旧的 BGM（简单 fade out）
    if (this.musicSource) {
      try {
        if (fadeSeconds > 0) {
          const now = this.ctx.currentTime;
          const g = this.musicGain.gain;
          const from = g.value;
          g.cancelScheduledValues(now);
          g.setValueAtTime(from, now);
          g.linearRampToValueAtTime(0, now + fadeSeconds);
          this.musicSource.stop(now + fadeSeconds);
        } else {
          this.musicSource.stop();
        }
      } catch (_) {
        // ignore
      }
      this.musicSource = null;
    }

    if (typeof volume === 'number') {
      this.setMusicVolume(volume);
    }

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = !!loop;
    source.connect(this.musicGain);
    source.start();

    this.musicSource = source;
    this.currentMusicUrl = url;
  }

  /**
   * 停止 BGM
   * @param {{fadeSeconds?: number}} options
   */
  stopMusic(options = {}) {
    const { fadeSeconds = 0 } = options;
    if (!this.musicSource || !this.ctx || !this.musicGain) return;
    try {
      const now = this.ctx.currentTime;
      if (fadeSeconds > 0) {
        const g = this.musicGain.gain;
        const from = g.value;
        g.cancelScheduledValues(now);
        g.setValueAtTime(from, now);
        g.linearRampToValueAtTime(0, now + fadeSeconds);
        this.musicSource.stop(now + fadeSeconds);
      } else {
        this.musicSource.stop();
      }
    } catch (_) {
      // ignore
    }
    this.musicSource = null;
    this.currentMusicUrl = null;
  }

  /**
   * 播放一次性音效
   * @param {string} url
   * @param {{volume?: number, playbackRate?: number}} options
   */
  async playSound(url, options = {}) {
    if (!url) return;
    const { volume, playbackRate = 1 } = options;

    await this._ensureContextReady();
    if (!this.ctx || !this.sfxGain) return;

    const buffer = await this._loadBuffer(url);
    if (!buffer) return;

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = playbackRate;

    const gainNode = this.ctx.createGain();
    gainNode.gain.value = typeof volume === 'number' ? volume : this.sfxVolume;

    source.connect(gainNode);
    gainNode.connect(this.sfxGain);

    source.start();
  }

  stopAll() {
    this.stopMusic({ fadeSeconds: 0 });
    // 简单实现：SFX Source 都是一次性播放，不单独追踪，交给 Web Audio 自己回收
  }
}
