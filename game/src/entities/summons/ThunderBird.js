/**
 * ThunderBird.js - 雷鸟
 * 空中单位、闪电链攻击
 */

import { BaseSummon } from './BaseSummon.js';
import { getSummonConfig } from '../../config/SummonConfig.js';

const CHAIN_COUNT = 3;

export class ThunderBird extends BaseSummon {
  constructor(config = {}) {
    const base = getSummonConfig('thunder_bird');
    super({
      ...base,
      ...config,
      type: 'thunder_bird',
      hp: config.hp ?? base.maxHealth ?? 70,
      damage: config.damage ?? base.damage ?? 9,
      attackRange: config.attackRange ?? base.attackRange ?? 85,
      attackCooldown: config.attackCooldown ?? base.attackCooldown ?? 1,
      duration: config.duration ?? base.duration ?? 16,
      defense: config.defense ?? base.defense ?? 1,
    });
    this.chainDamageFactor = 0.7;
  }

  async createMesh(assetLoader) {
    return super.createMesh(assetLoader, '/assets/summons/thunder_bird.png');
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
      const hit = new Set();
      let current = this.targetEnemy;
      let dmg = this.damage;
      for (let i = 0; i < CHAIN_COUNT && current?.isAlive(); i++) {
        if (hit.has(current)) break;
        hit.add(current);
        current.takeDamage(dmg);
        if (this.slowOnHit && current.speed != null) {
          const base = (current.config?.moveSpeed ?? 1) * 55;
          current.speed = base * this.slowFactor;
          setTimeout(() => { if (current?.speed != null) current.speed = base; }, (this.slowDuration || 0.8) * 1000);
        }
        dmg *= this.chainDamageFactor;
        const next = (this.game.enemies || [])
          .filter((e) => e.isAlive() && !hit.has(e))
          .sort((a, b) => {
            const da = (a.position.x - current.position.x) ** 2 + (a.position.y - current.position.y) ** 2;
            const db = (b.position.x - current.position.x) ** 2 + (b.position.y - current.position.y) ** 2;
            return da - db;
          })[0];
        current = next;
      }
      this.attackCooldownRemain = this.attackCooldown;
    }
    if (this.game?.player?.isAlive() && this.state === 'orbit') {
      this.orbitAngle += this.orbitSpeed * dt;
      const tx = this.game.player.position.x + Math.cos(this.orbitAngle) * this.orbitRadius;
      const ty = this.game.player.position.y + Math.sin(this.orbitAngle) * this.orbitRadius;
      const dx = tx - this.position.x;
      const dy = ty - this.position.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const moveSpeed = 110;
      this.position.x += (dx / d) * Math.min(moveSpeed * dt, d);
      this.position.y += (dy / d) * Math.min(moveSpeed * dt, d);
    }
  }
}
