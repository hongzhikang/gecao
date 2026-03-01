/**
 * Summoner.js - 召唤师职业
 * 远程灵魂箭 + 召唤物持续压制，输出低于法师、生存中等
 */

import { SummonSkill } from '../skills/SummonSkill.js';
import { ProjectileSkill } from '../skills/ProjectileSkill.js';

export class Summoner {
  constructor(skillConfigs = {}) {
    this.spritePath = '/assets/characters/summoner_idle.png';
    this.unlockedSummonTypes = ['poison_plant'];
    this.attackSpeedMultiplier = 0.85; // 攻速偏慢

    const defaultBolt = {
      id: 'summoner_bolt',
      name: '灵魂箭',
      cooldown: 1.2,
      cooldownPerLevel: -0.08,
      speed: 350,
      damage: 12,
      damagePerLevel: 2,
      explodeRadius: 0,
      maxLevel: 5,
    };

    const defaultSummon = {
      id: 'summoner_minion',
      name: '召唤小弟',
      cooldown: 8,
      cooldownPerLevel: -0.5,
      summonCount: 2,
      summonCountPerLevel: 1,
      maxSummonCount: 3,
      summonHp: 35,
      summonHpPerLevel: 8,
      summonDamage: 8,
      summonDamagePerLevel: 2,
      summonRadius: 16,
      summonDuration: 18,
      attackRange: 55,
      attackCooldown: 0.7,
      maxLevel: 5,
    };

    this.bolt = new ProjectileSkill(skillConfigs.bolt ?? defaultBolt);
    this.summon = new SummonSkill(skillConfigs.summon ?? defaultSummon);
    this.skills = [this.bolt, this.summon];
  }

  applyToPlayer(player) {
    player.baseMaxHp = 85;
    player.maxHp = 85;
    player.hp = 85;
    player.speedMultiplierFromClass = this.attackSpeedMultiplier;
    player.speed = player.baseSpeed * (player.speedMultiplierFromClass ?? 1);
    this.skills.forEach((s) => s.setOwner(player));
  }

  setGame(game) {
    this.game = game;
    this.bolt.setGame(game);
    this.summon.setGame(game);
  }

  update(dt, player) {
    this.skills.forEach((s) => s.update(dt));
    if (this.bolt.canCast()) this.bolt.cast();
    if (this.summon.canCast()) this.summon.cast();
  }
}
