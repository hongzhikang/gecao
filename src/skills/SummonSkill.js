/**
 * SummonSkill.js - 召唤技能
 * 召唤物继承部分属性，可升级数量
 */

import { BaseSkill } from './BaseSkill.js';

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
    const count = this.getValue('summonCount', 1);
    const unlocked = this.owner.classInstance?.unlockedSummonTypes ?? ['poison_plant'];
    const types = unlocked.length ? unlocked : ['poison_plant'];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)] || types[0] || 'poison_plant';
      const angle = (Math.PI * 2 * i) / Math.max(1, count) + Math.random() * 0.5;
      const dist = 40 + Math.random() * 20;
      const x = this.owner.position.x + Math.cos(angle) * dist;
      const y = this.owner.position.y + Math.sin(angle) * dist;

      const config = {
        hp: this.getValue('summonHp', 35),
        damage: this.getValue('summonDamage', 8),
        duration: this.getValue('summonDuration', 18),
        attackRange: this.getValue('attackRange', 55),
        attackCooldown: this.attackCooldown,
      };
      if (this.game.addSummon) {
        await this.game.addSummon(type, config, { x, y });
      }
    }
  }
}
