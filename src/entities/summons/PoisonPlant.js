/**
 * PoisonPlant.js - 毒藤植物
 * 远程攻击、范围持续伤害
 */

import { BaseSummon } from './BaseSummon.js';

export class PoisonPlant extends BaseSummon {
  constructor(config = {}) {
    super({
      ...config,
      type: 'poison_plant',
      hp: config.hp ?? 35,
      damage: config.damage ?? 5,
      attackRange: config.attackRange ?? 90,
      attackCooldown: config.attackCooldown ?? 1.2,
      duration: config.duration ?? 16,
    });
    this.poisonDuration = 3;
    this.poisonTick = 0.5;
  }

  async createMesh(assetLoader) {
    return super.createMesh(assetLoader, '/assets/summons/poison_plant.png');
  }

  update(dt) {
    super.update(dt);
    if (!this.isAlive() || !this.game) return;

    const targets = this.game.getEnemiesInRadius?.(this.position.x, this.position.y, this.attackRange) ?? [];
    const nearest = targets.find((e) => e.isAlive());
    if (this.state === 'attacking' && (!this.targetEnemy || !this.targetEnemy.isAlive())) {
      this.state = 'orbit';
      this.targetEnemy = null;
    }
    if (nearest && this.state === 'orbit') {
      this.state = 'attacking';
      this.targetEnemy = nearest;
    }
    if (this.state === 'attacking' && this.targetEnemy?.isAlive() && this.attackCooldownRemain <= 0) {
      this.targetEnemy.takeDamage(this.damage);
      if (this.targetEnemy.poisonStack == null) this.targetEnemy.poisonStack = 0;
      this.targetEnemy.poisonStack = Math.min(5, (this.targetEnemy.poisonStack || 0) + 1);
      this.targetEnemy.poisonUntil = (this.game.time || 0) + this.poisonDuration;
      this.attackCooldownRemain = this.attackCooldown;
    }
    if (this.game?.player?.isAlive() && this.state === 'orbit') {
      this.orbitAngle += this.orbitSpeed * dt;
      const tx = this.game.player.position.x + Math.cos(this.orbitAngle) * this.orbitRadius;
      const ty = this.game.player.position.y + Math.sin(this.orbitAngle) * this.orbitRadius;
      const dx = tx - this.position.x;
      const dy = ty - this.position.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const moveSpeed = 80;
      this.position.x += (dx / d) * Math.min(moveSpeed * dt, d);
      this.position.y += (dy / d) * Math.min(moveSpeed * dt, d);
    }
  }
}
