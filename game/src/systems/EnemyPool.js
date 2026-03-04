/**
 * EnemyPool.js - 敌人对象池
 * 回收死亡敌人，复用 Mesh，禁止重复 new Mesh
 */

export class EnemyPool {
  constructor(game) {
    this.game = game;
    this.pool = [];
    this.active = new Set();
    this.EnemyClass = game.EnemyClass;
    this.BossClass = game.BossClass;
  }

  async get(type, position) {
    const isBoss = type === 'boss';
    const idx = this.pool.findIndex((e) => (e.isBoss && isBoss) || (!e.isBoss && !isBoss));
    let enemy = idx >= 0 ? this.pool.splice(idx, 1)[0] : null;
    if (enemy) {
      enemy.reset(type, position);
      this.active.add(enemy);
      return enemy;
    }
    const ClassCtor = isBoss ? this.BossClass : this.EnemyClass;
    enemy = new ClassCtor(type === 'boss' ? undefined : type);
    enemy.setGame(this.game);
    await enemy.init(position, this.game.assetLoader);
    this.active.add(enemy);
    return enemy;
  }

  release(enemy) {
    this.game.scene.remove(enemy.mesh);
    enemy.reset(enemy.type, { x: 0, y: 0 });
    this.active.delete(enemy);
    this.pool.push(enemy);
  }

  releaseAll() {
    this.active.forEach((e) => {
      this.game.scene.remove(e.mesh);
      this.pool.push(e);
    });
    this.active.clear();
  }
}
