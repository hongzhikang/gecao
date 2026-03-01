/**
 * WaveSystem.js - 波次刷怪
 * 按时间/波次配置生成小怪与 Boss
 */

export class WaveSystem {
  constructor(game) {
    this.game = game;
    this.wave = 0;
    this.waveStartTime = 0;
    this.waveDuration = 45;
    this.bossInterval = 3;
    this.spawnInterval = 2.5;
    this.lastSpawnTime = 0;
    this.lastBossWave = 0;
  }

  getWaveConfig() {
    const w = this.wave;
    const baseCount = 4 + Math.floor(w * 1.5);
    return {
      wave: w,
      enemies: [
        { type: 'default', count: baseCount },
        ...(w > 0 && w % this.bossInterval === 0 ? [{ type: 'boss', count: 1 }] : []),
      ],
    };
  }

  update(time) {
    if (!this.game.player?.isAlive()) return;
    if (time - this.waveStartTime >= this.waveDuration) {
      this.wave++;
      this.waveStartTime = time;
    }
  }

  getCurrentWave() {
    return this.wave;
  }
}
