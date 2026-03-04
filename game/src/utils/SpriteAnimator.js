/**
 * SpriteAnimator.js - 精灵帧动画
 * 支持 idle / attack 等状态切换，播放完成后回调
 */

export class SpriteAnimator {
  constructor(frames, speed = 0.1) {
    this.frames = frames || [];
    this.speed = speed;
    this.currentFrame = 0;
    this.timer = 0;
    this.playing = true;
    this.loop = true;
    this.onComplete = null;
  }

  update(delta, material) {
    if (!material || !this.frames.length) return;
    this.timer += delta;
    if (this.timer >= this.speed) {
      this.currentFrame++;
      if (this.currentFrame >= this.frames.length) {
        if (this.loop) {
          this.currentFrame = 0;
        } else {
          this.currentFrame = this.frames.length - 1;
          this.playing = false;
          if (this.onComplete) this.onComplete();
        }
      }
      if (this.playing && this.frames[this.currentFrame]) {
        material.map = this.frames[this.currentFrame];
      }
      this.timer = 0;
    }
  }

  setFrames(frames) {
    this.frames = frames || [];
    this.currentFrame = 0;
    this.timer = 0;
  }

  playOnce(frames, onComplete) {
    this.setFrames(frames || this.frames);
    this.loop = false;
    this.playing = true;
    this.onComplete = onComplete || null;
  }

  playLoop(frames) {
    this.setFrames(frames || this.frames);
    this.loop = true;
    this.playing = true;
  }
}
