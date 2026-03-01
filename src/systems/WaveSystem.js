/**
 * WaveSystem.js - 波次逻辑：经典按时间 / 生存模式按波次 + 波间奖励
 * 生存模式：每波敌人递增，每 10 波 Boss，波次间隙触发奖励选择
 */

export class WaveSystem {
  constructor(game) {
    this.game = game;
    this.wave = 0;
    this.waveStartTime = 0;
    this.waveDuration = 45;
    this.betweenWaveDuration = 8;
    this.bossInterval = 10;
    this.lastBossWave = -1;
    this.isBetweenWaves = false;
    this.betweenWaveEndTime = 0;
    this.onWaveComplete = null;
  }

  isSurvivalMode() {
    return this.game?.gameMode === 'survival';
  }

  getWaveConfig() {
    const w = this.wave;
    const baseCount = 4 + Math.floor(w * 1.5);
    const types = [
      { type: 'basicZombie', count: Math.max(2, baseCount - 2) },
      { type: 'fastGhoul', count: w >= 2 ? 1 : 0 },
      { type: 'slowZombie', count: w >= 3 ? 1 : 0 },
      { type: 'shieldEnemy', count: w >= 4 ? 1 : 0 },
      { type: 'fastRusher', count: w >= 5 ? 1 : 0 },
      { type: 'tankBrute', count: w >= 6 ? 1 : 0 },
      { type: 'eliteEnemy', count: w >= 8 && w % 2 === 0 ? 1 : 0 },
    ].filter((e) => e.count > 0);
    const hasBoss = w > 0 && w % this.bossInterval === 0;
    if (hasBoss) types.push({ type: 'boss', count: 1 });
    return { wave: w, enemies: types.length ? types : [{ type: 'basicZombie', count: Math.max(2, baseCount) }] };
  }

  update(time) {
    if (!this.game?.player?.isAlive()) return;
    if (this.isSurvivalMode()) {
      if (this.isBetweenWaves) {
        if (time >= this.betweenWaveEndTime) {
          this.isBetweenWaves = false;
          this.waveStartTime = time;
        }
        return;
      }
      const elapsed = time - this.waveStartTime;
      if (elapsed >= this.waveDuration) {
        this.isBetweenWaves = true;
        this.betweenWaveEndTime = time + this.betweenWaveDuration;
        if (typeof this.onWaveComplete === 'function') this.onWaveComplete(this.wave);
      }
      return;
    }
    if (time - this.waveStartTime >= this.waveDuration) {
      this.wave++;
      this.waveStartTime = time;
    }
  }

  advanceWave() {
    this.wave++;
  }

  getCurrentWave() {
    return this.wave;
  }

  shouldSpawn(time) {
    if (!this.isSurvivalMode()) return true;
    return !this.isBetweenWaves;
  }
}
