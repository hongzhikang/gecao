/**
 * FireWolf.js - 火狼
 * 近战冲刺、高攻速
 */

import { BaseSummon } from './BaseSummon.js';

const MELEE_RANGE = 32;

export class FireWolf extends BaseSummon {
  constructor(config = {}) {
    super({
      ...config,
      type: 'fire_wolf',
      hp: config.hp ?? 30,
      damage: config.damage ?? 12,
      attackRange: config.attackRange ?? 60,
      attackCooldown: config.attackCooldown ?? 0.45,
      duration: config.duration ?? 15,
    });
    this.dashSpeed = 200;
  }

  async createMesh(assetLoader) {
    return super.createMesh(assetLoader, '/assets/summons/fire_wolf.png');
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
    if (this.state === 'attacking' && this.targetEnemy?.isAlive()) {
      const ex = this.targetEnemy.position.x;
      const ey = this.targetEnemy.position.y;
      const dx = ex - this.position.x;
      const dy = ey - this.position.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      if (dist <= MELEE_RANGE && this.attackCooldownRemain <= 0) {
        this.targetEnemy.takeDamage(this.damage);
        this.attackCooldownRemain = this.attackCooldown;
      }
      const moveSpeed = this.dashSpeed;
      this.position.x += (dx / dist) * moveSpeed * dt;
      this.position.y += (dy / dist) * moveSpeed * dt;
      if (dist > this.attackRange * 1.2) {
        this.state = 'orbit';
        this.targetEnemy = null;
      }
    } else if (this.game?.player?.isAlive() && this.state === 'orbit') {
      this.orbitAngle += this.orbitSpeed * dt;
      const tx = this.game.player.position.x + Math.cos(this.orbitAngle) * this.orbitRadius;
      const ty = this.game.player.position.y + Math.sin(this.orbitAngle) * this.orbitRadius;
      const dx = tx - this.position.x;
      const dy = ty - this.position.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const moveSpeed = 140;
      this.position.x += (dx / d) * Math.min(moveSpeed * dt, d);
      this.position.y += (dy / d) * Math.min(moveSpeed * dt, d);
    }
  }
}
