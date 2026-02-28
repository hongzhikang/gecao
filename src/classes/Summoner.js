/**
 * Summoner.js - 召唤师职业
 * 召唤物自动攻击、继承属性、可升级数量
 */

import { SummonSkill } from '../skills/SummonSkill.js';

export class Summoner {
  constructor(skillConfigs = {}) {
    this.spritePath = '/assets/characters/summoner_idle.png';
    this.unlockedSummonTypes = ['poison_plant'];

    const defaultSummon = {
      id: 'summoner_minion',
      name: '召唤小弟',
      cooldown: 8,
      cooldownPerLevel: -0.5,
      summonCount: 1,
      summonCountPerLevel: 1,
      summonHp: 35,
      summonHpPerLevel: 8,
      summonDamage: 10,
      summonDamagePerLevel: 3,
      summonRadius: 16,
      summonDuration: 18,
      attackRange: 55,
      attackCooldown: 0.7,
      maxLevel: 5,
    };

    this.summon = new SummonSkill(skillConfigs.summon ?? defaultSummon);
    this.skills = [this.summon];
  }

  applyToPlayer(player) {
    this.skills.forEach((s) => s.setOwner(player));
  }

  setGame(game) {
    this.game = game;
    this.summon.setGame(game);
  }

  update(dt, player) {
    this.skills.forEach((s) => s.update(dt));
    if (this.summon.canCast()) this.summon.cast();
  }
}
