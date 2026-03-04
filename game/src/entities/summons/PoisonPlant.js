/**
 * PoisonPlant.js - 毒藤植物
 * 远程攻击、范围持续伤害
 */

import { BaseSummon } from './BaseSummon.js';
import { getSummonConfig } from '../../config/SummonConfig.js';

export class PoisonPlant extends BaseSummon {
  constructor(config = {}) {
    const base = getSummonConfig('poison_plant');
    super({
      ...base,
      ...config,
      type: 'poison_plant',
      hp: config.hp ?? base.maxHealth ?? 60,
      damage: config.damage ?? base.damage ?? 10,
      attackRange: config.attackRange ?? base.attackRange ?? 95,
      attackCooldown: config.attackCooldown ?? base.attackCooldown ?? 1.1,
      duration: config.duration ?? base.duration ?? 16,
      defense: config.defense ?? base.defense ?? 1,
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
      if (this.slowOnHit && this.targetEnemy.speed != null) {
        const base = (this.targetEnemy.config?.moveSpeed ?? 1) * 55;
        const orig = this.targetEnemy.speed;
        this.targetEnemy.speed = base * this.slowFactor;
        setTimeout(() => { if (this.targetEnemy?.speed != null) this.targetEnemy.speed = base; }, (this.slowDuration || 0.8) * 1000);
      }
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
