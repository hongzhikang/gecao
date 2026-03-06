/**
 * SummonSkill.js - 召唤技能
 * 召唤物继承部分属性，可升级数量
 */

import { BaseSkill } from './BaseSkill.js';
import { getSummonConfig, GLOBAL_SUMMON_LIMIT } from '../config/SummonConfig.js';

export class SummonSkill extends BaseSkill {
  constructor(config = {}) {
    super(config);
    this.summonCount = config.summonCount ?? 1;
    this.summonHp = config.summonHp ?? 30;
    this.summonDamage = config.summonDamage ?? 8;
    this.summonRadius = config.summonRadius ?? 16;
    this.summonDuration = config.summonDuration ?? 15;
    this.attackRange = config.attackRange ?? 60;
    this.attackCooldown = config.attackCooldown ?? 0.8;
    this.game = null;
  }

  setGame(game) {
    this.game = game;
  }

  async _doCast() {
    if (!this.owner || !this.game) return;
    this.owner.playAttackAnimation?.();
    const maxCap = this.config.maxSummonCount ?? GLOBAL_SUMMON_LIMIT;
    const count = Math.min(maxCap, this.getValue('summonCount', 2));
    const unlocked = this.owner.classInstance?.unlockedSummonTypes ?? ['poison_plant'];
    const types = unlocked.length ? unlocked : ['poison_plant'];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)] || types[0] || 'poison_plant';
      const angle = (Math.PI * 2 * i) / Math.max(1, count) + Math.random() * 0.5;
      const dist = 40 + Math.random() * 20;
      const x = this.owner.position.x + Math.cos(angle) * dist;
      const y = this.owner.position.y + Math.sin(angle) * dist;

      const base = getSummonConfig(type);
      const inheritAttackPercent = this.config.inheritAttackPercent ?? base.inheritAttackPercent ?? 0.2;
      const ownerMult = this.owner?.damageMultiplier ?? 1;
      const baseDamage = this.getValue('summonDamage', base.damage ?? 10);
      const config = {
        hp: this.getValue('summonHp', base.maxHealth ?? 35),
        damage: baseDamage * (1 + inheritAttackPercent) * ownerMult,
        duration: this.getValue('summonDuration', base.duration ?? 18),
        attackRange: this.getValue('attackRange', base.attackRange ?? 55),
        attackCooldown: this.attackCooldown ?? base.attackCooldown ?? 0.8,
        slowOnHit: this.config.summonSlowOnHit ?? base.slowOnHit ?? false,
        slowDuration: this.config.summonSlowDuration ?? base.slowDuration ?? 0.8,
        slowFactor: this.config.summonSlowFactor ?? base.slowFactor ?? 0.7,
        defense: base.defense ?? 0,
        spritePath: base.spritePath,
        frameUrls: Array.isArray(base.frameUrls) ? base.frameUrls : undefined,
      };
      if (this.game.addSummon) {
        await this.game.addSummon(type, config, { x, y }, { maxSummonLimit: GLOBAL_SUMMON_LIMIT });
      }
    }
  }
}
