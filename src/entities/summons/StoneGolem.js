/**
 * StoneGolem.js - 石魔像
 * 高血量、吸引仇恨（坦克）
 */

import { BaseSummon } from './BaseSummon.js';

const MELEE_RANGE = 38;

export class StoneGolem extends BaseSummon {
  constructor(config = {}) {
    super({
      ...config,
      type: 'stone_golem',
      hp: config.hp ?? 120,
      damage: config.damage ?? 6,
      attackRange: config.attackRange ?? 50,
      attackCooldown: config.attackCooldown ?? 1.1,
      duration: config.duration ?? 20,
    });
    this.tauntRadius = 100;
  }

  async createMesh(assetLoader) {
    return super.createMesh(assetLoader, '/assets/summons/stone_golem.png');
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
        if (this.slowOnHit && this.targetEnemy.speed != null) {
          const base = (this.targetEnemy.config?.moveSpeed ?? 1) * 55;
          this.targetEnemy.speed = base * this.slowFactor;
          setTimeout(() => { if (this.targetEnemy?.speed != null) this.targetEnemy.speed = base; }, (this.slowDuration || 0.8) * 1000);
        }
        this.attackCooldownRemain = this.attackCooldown;
      }
      const moveSpeed = 60;
      this.position.x += (dx / dist) * moveSpeed * dt;
      this.position.y += (dy / dist) * moveSpeed * dt;
      if (dist > this.attackRange * 1.3) {
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
      const moveSpeed = 70;
      this.position.x += (dx / d) * Math.min(moveSpeed * dt, d);
      this.position.y += (dy / d) * Math.min(moveSpeed * dt, d);
    }
  }
}
