/**
 * SpawnSystem.js - Scalable spawn logic with time-based waves and object pooling
 */

import { EnemyConfig, getConfig } from '../config/EnemyConfig.js';

const BASE_SPAWN_RATE = 1.4; // 基础刷新率提升 40%

export class SpawnSystem {
  constructor(game) {
    this.game = game;
    this.spawnRadius = 400;
    this.lastSpawnTime = 0;
    this.spawnAccum = 0;
  }

  _getSpawnRate(elapsedTime) {
    const mult = this.game?.spawnRateMultiplier ?? 1;
    return (BASE_SPAWN_RATE + elapsedTime * 0.05) * mult;
  }

  _getMaxEnemies(elapsedTime) {
    const base = Math.min(180, 56 + elapsedTime * 2.1); // 同屏上限 +50%
    const countMult = this.game?.enemyCountMultiplier ?? 1;
    return Math.max(10, Math.floor(base * countMult));
  }

  _getEligibleTypes(elapsedTime) {
    const waveSys = this.game?.waveSystem;
    if (waveSys?.isSurvivalMode?.()) {
      const w = waveSys.getCurrentWave();
      const types = ['basicZombie'];
      if (w >= 1) types.push('fastGhoul', 'fastRusher');
      if (w >= 2) types.push('slowZombie');
      if (w >= 3) types.push('shieldEnemy');
      if (w >= 4) types.push('tankBrute');
      if (w >= 5) types.push('eliteEnemy');
      return types;
    }
    const types = [];
    if (elapsedTime >= 0) types.push('basicZombie', 'fastRusher', 'slowZombie', 'shieldEnemy');
    if (elapsedTime >= 30) types.push('fastGhoul');
    if (elapsedTime >= 90) types.push('tankBrute');
    if (elapsedTime >= 180) types.push('eliteEnemy');
    if (elapsedTime >= 300) types.push('boss');
    return types;
  }

  _pickType(elapsedTime) {
    const waveSys = this.game?.waveSystem;
    if (waveSys?.isSurvivalMode?.() && waveSys.isBetweenWaves) return null;
    const types = this._getEligibleTypes(elapsedTime);
    if (types.length === 0) return 'basicZombie';
    const eliteBonus = this.game?.eliteWeightBonus ?? 0;
    const weights = types.map((t) => {
      let w = getConfig(t).spawnWeight ?? 1;
      if (t === 'eliteEnemy' && eliteBonus > 0) w *= (1 + eliteBonus);
      return w;
    });
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < types.length; i++) {
      r -= weights[i];
      if (r <= 0) return types[i];
    }
    return types[types.length - 1];
  }

  _randomSpawnPosition() {
    const player = this.game.player;
    const angle = Math.random() * Math.PI * 2;
    const r = this.spawnRadius;
    return {
      x: (player?.position?.x ?? 0) + Math.cos(angle) * r,
      y: (player?.position?.y ?? 0) + Math.sin(angle) * r,
    };
  }

  async trySpawn(time) {
    const waveSys = this.game?.waveSystem;
    // 章节模式下完全由 WaveSystem + spawnWave 控制，不使用时间制刷怪
    if (this.game?.chapterId) return;
    if (waveSys?.isSurvivalMode?.() && waveSys.isBetweenWaves) return;
    const elapsed = time - (waveSys?.waveStartTime ?? time);
    const rate = this._getSpawnRate(elapsed);
    const maxEnemies = this._getMaxEnemies(elapsed);
    if (this.game.enemies.length >= maxEnemies) return;

    this.spawnAccum += rate * (time - this.lastSpawnTime);
    this.lastSpawnTime = time;

    const count = Math.floor(this.spawnAccum);
    this.spawnAccum -= count;

    for (let i = 0; i < count; i++) {
      if (this.game.enemies.length >= maxEnemies) break;
      const type = this._pickType(elapsed);
      if (!type) break;
      const pos = this._randomSpawnPosition();
      const enemy = await this.game.enemyPool.get(type, pos);
      this.game.scene.add(enemy.mesh);
      this.game.enemies.push(enemy);
    }
  }

  async spawnWave(waveConfig) {
    const list = waveConfig?.enemies ?? [{ type: 'basicZombie', count: 5 }];
    for (const { type = 'basicZombie', count = 1 } of list) {
      if (!this.game.enemyPool) return;
      for (let i = 0; i < count; i++) {
        const pos = this._randomSpawnPosition();
        const enemy = await this.game.enemyPool.get(type, pos);
        this.game.scene.add(enemy.mesh);
        this.game.enemies.push(enemy);
      }
    }
  }
}
