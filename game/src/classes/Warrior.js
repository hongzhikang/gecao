/**
 * Warrior.js - 战士职业
 * 近战范围、攻速、旋风斩
 */

import { MeleeSkill } from '../skills/MeleeSkill.js';
import { getClassConfig } from '../core/DataLoader.js';

export class Warrior {
  constructor(skillConfigs = {}) {
    const cfg = getClassConfig('warrior') || {};
    this.spritePath = cfg.spritePath ?? '/assets/characters/warrior_idle.png';
    this.frameUrls = Array.isArray(cfg.frameUrls) ? cfg.frameUrls : undefined;
    this.attackSpeedMultiplier = cfg.attackSpeed ?? 1.0;

    const defaultMelee = {
      id: 'warrior_slash',
      name: '斩击',
      cooldown: 0.6,
      cooldownPerLevel: -0.05,
      radius: 70,
      radiusPerLevel: 8,
      damage: 24,
      damagePerLevel: 5,
      maxLevel: 5,
    };

    const defaultWhirlwind = {
      id: 'warrior_whirlwind',
      name: '旋风斩',
      cooldown: 3,
      cooldownPerLevel: -0.2,
      radius: 100,
      radiusPerLevel: 15,
      damage: 28,
      damagePerLevel: 6,
      duration: 0.35,
      maxLevel: 5,
    };

    this.slash = new MeleeSkill(skillConfigs.slash ?? defaultMelee);
    this.whirlwind = new MeleeSkill(skillConfigs.whirlwind ?? defaultWhirlwind);
    this.skills = [this.slash, this.whirlwind];
  }

  applyToPlayer(player) {
    const cfg = getClassConfig('warrior') || {};
    if (cfg.maxHealth != null) {
      player.baseMaxHp = cfg.maxHealth;
      player.maxHp = cfg.maxHealth;
      player.hp = cfg.maxHealth;
    }
    const dr = cfg.damageReduction ?? 0.1;
    player.damageTakenMultiplier = 1 - dr;
    player.critRateBonus = cfg.critChance ?? 0.1;
    player.speedMultiplierFromClass = this.attackSpeedMultiplier;
    player.speed = player.baseSpeed * (player.speedMultiplierFromClass ?? 1);
    this.skills.forEach((s) => s.setOwner(player));
  }

  setGame(game) {
    this.game = game;
    this.slash.setGame(game);
    this.whirlwind.setGame(game);
  }

  update(dt, player) {
    this.skills.forEach((s) => s.update(dt));
    if (this.slash.canCast()) this.slash.cast();
    if (this.whirlwind.canCast()) this.whirlwind.cast();
  }
}
