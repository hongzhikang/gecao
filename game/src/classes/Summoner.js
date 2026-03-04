/**
 * Summoner.js - 召唤师职业
 * 远程灵魂箭 + 召唤物持续压制，输出低于法师、生存中等
 */

import { SummonSkill } from '../skills/SummonSkill.js';
import { ProjectileSkill } from '../skills/ProjectileSkill.js';
import { getClassConfig } from '../core/DataLoader.js';

export class Summoner {
  constructor(skillConfigs = {}) {
    this.spritePath = '/assets/characters/summoner_idle.png';
    this.unlockedSummonTypes = ['poison_plant'];
    const cfg = getClassConfig('summoner') || {};
    this.attackSpeedMultiplier = cfg.attackSpeed ?? 0.9;

    const defaultBolt = {
      id: 'summoner_bolt',
      name: '灵魂箭',
      cooldown: 1.05,
      cooldownPerLevel: -0.06,
      speed: 350,
      damage: 14,
      damagePerLevel: 2,
      explodeRadius: 0,
      maxLevel: 5,
    };

    const defaultSummon = {
      id: 'summoner_minion',
      name: '召唤小弟',
      cooldown: 8,
      cooldownPerLevel: -0.5,
      summonCount: 1,
      summonCountPerLevel: 1,
      maxSummonCount: 3,
      summonHp: 35,
      summonHpPerLevel: 8,
      summonDamage: 10,
      summonDamagePerLevel: 2,
      summonRadius: 16,
      summonDuration: 18,
      attackRange: 55,
      attackCooldown: 0.56,
      summonSlowOnHit: true,
      summonSlowDuration: 0.8,
      summonSlowFactor: 0.7,
      maxLevel: 5,
    };

    this.bolt = new ProjectileSkill(skillConfigs.bolt ?? defaultBolt);
    this.summon = new SummonSkill(skillConfigs.summon ?? defaultSummon);
    this.skills = [this.bolt, this.summon];
  }

  applyToPlayer(player) {
    const cfg = getClassConfig('summoner') || {};
    if (cfg.maxHealth != null) {
      player.baseMaxHp = cfg.maxHealth;
      player.maxHp = cfg.maxHealth;
      player.hp = cfg.maxHealth;
    }
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
