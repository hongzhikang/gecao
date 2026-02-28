/**
 * SpawnSystem.js - 敌人生成
 * 在指定范围内生成小怪/Boss，可配置
 */

export class SpawnSystem {
  constructor(game) {
    this.game = game;
    this.spawnRadius = 400;
    this.enemyConfigs = new Map();
  }

  registerEnemyType(id, config) {
    this.enemyConfigs.set(id, { ...config, id });
  }

  async spawn(typeId = 'default', position = null) {
    const config = this.enemyConfigs.get(typeId) ?? this._defaultConfig();
    const EnemyClass = config.Boss ? this.game.BossClass : this.game.EnemyClass;
    if (!EnemyClass) return null;

    const pos = position ?? this._randomSpawnPosition();
    const enemy = new EnemyClass(config);
    enemy.setGame(this.game);
    const mesh = await enemy.init(pos, this.game.assetLoader);
    this.game.scene.add(mesh);
    this.game.enemies.push(enemy);
    return enemy;
  }

  _defaultConfig() {
    return {
      speed: 55,
      radius: 20,
      hp: 25,
      damage: 6,
      expDrop: 4,
      spritePath: '/assets/enemies/zombie.png',
    };
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

  async spawnWave(waveConfig) {
    const list = waveConfig.enemies ?? [{ type: 'default', count: 5 }];
    for (const { type = 'default', count = 1 } of list) {
      for (let i = 0; i < count; i++) {
        await this.spawn(type);
      }
    }
  }
}
