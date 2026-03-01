/**
 * ProjectileSkill.js - 弹道技能
 * 发射物、爆炸范围、减速等
 */

import { BaseSkill } from './BaseSkill.js';
import * as THREE from 'three';

export class ProjectileSkill extends BaseSkill {
  constructor(config = {}) {
    super(config);
    this.speed = config.speed ?? 400;
    this.damage = config.damage ?? 20;
    this.radius = config.radius ?? 12;
    this.explodeRadius = config.explodeRadius ?? 0;
    this.slowDuration = config.slowDuration ?? 0;
    this.slowFactor = config.slowFactor ?? 0.5;
    this.game = null;
  }

  setGame(game) {
    this.game = game;
  }

  _doCast() {
    if (!this.owner || !this.game) return;
    this.owner.playAttackAnimation?.();
    const dir = this._getAimDirection();
    if (!dir) return;

    const proj = {
      x: this.owner.position.x,
      y: this.owner.position.y,
      vx: dir.x * this.getValue('speed', 400),
      vy: dir.y * this.getValue('speed', 400),
      radius: this.radius,
      damage: this.getValue('damage', 20) * (this.owner?.damageMultiplier ?? 1),
      explodeRadius: this.getValue('explodeRadius', 0),
      slowDuration: this.slowDuration,
      slowFactor: this.slowFactor,
      life: 2,
      hit: new Set(),
    };

    if (this.game.addProjectile) this.game.addProjectile(proj);
  }

  _getAimDirection() {
    const enemies = this.game?.getEnemiesInRadius?.(
      this.owner.position.x,
      this.owner.position.y,
      400
    ) ?? [];
    if (enemies.length === 0) {
      return { x: 1, y: 0 };
    }
    let nearest = null;
    let minD = Infinity;
    for (const e of enemies) {
      if (!e.isAlive()) continue;
      const dx = e.position.x - this.owner.position.x;
      const dy = e.position.y - this.owner.position.y;
      const d = dx * dx + dy * dy;
      if (d < minD) {
        minD = d;
        nearest = e;
      }
    }
    if (!nearest) return { x: 1, y: 0 };
    const dx = nearest.position.x - this.owner.position.x;
    const dy = nearest.position.y - this.owner.position.y;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    return { x: dx / len, y: dy / len };
  }
}
