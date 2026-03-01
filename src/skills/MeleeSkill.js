/**
 * MeleeSkill.js - 近战范围攻击
 */

import { BaseSkill } from './BaseSkill.js';
import * as THREE from 'three';

export class MeleeSkill extends BaseSkill {
  constructor(config = {}) {
    super(config);
    this.radius = config.radius ?? 80;
    this.damage = config.damage ?? 15;
    this.duration = config.duration ?? 0.2;
    this.game = null;
  }

  setGame(game) {
    this.game = game;
  }

  _doCast() {
    if (!this.owner || !this.game) return;
    this.owner.playAttackAnimation?.();
    const r = this.getValue('radius', 80);
    const rawDmg = this.getValue('damage', 15) * (this.owner?.damageMultiplier ?? 1);
    const { damage: dmg, isCrit } = this.game.applyCrit?.(rawDmg) ?? { damage: rawDmg, isCrit: false };
    const px = this.owner.position.x;
    const py = this.owner.position.y;

    if (this.game.onMeleeHit) {
      this.game.onMeleeHit(px, py, r, dmg, this.duration);
    }

    const enemies = this.game.getEnemiesInRadius?.(px, py, r) ?? [];
    enemies.forEach((e) => {
      if (e.isAlive()) {
        if (this.game._showDamageFloat) this.game._showDamageFloat(e.position.x, e.position.y, dmg, isCrit);
        e.takeDamage(dmg, px, py, true);
      }
    });
  }
}
