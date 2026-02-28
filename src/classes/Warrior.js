/**
 * Warrior.js - 战士职业
 * 近战范围、攻速、旋风斩
 */

import { MeleeSkill } from '../skills/MeleeSkill.js';

export class Warrior {
  constructor(skillConfigs = {}) {
    this.spritePath = '/assets/characters/warrior_idle.png';
    this.attackSpeedMultiplier = 1.4;

    const defaultMelee = {
      id: 'warrior_slash',
      name: '斩击',
      cooldown: 0.6,
      cooldownPerLevel: -0.05,
      radius: 70,
      radiusPerLevel: 8,
      damage: 18,
      damagePerLevel: 4,
      maxLevel: 5,
    };

    const defaultWhirlwind = {
      id: 'warrior_whirlwind',
      name: '旋风斩',
      cooldown: 3,
      cooldownPerLevel: -0.2,
      radius: 100,
      radiusPerLevel: 15,
      damage: 25,
      damagePerLevel: 6,
      duration: 0.35,
      maxLevel: 5,
    };

    this.slash = new MeleeSkill(skillConfigs.slash ?? defaultMelee);
    this.whirlwind = new MeleeSkill(skillConfigs.whirlwind ?? defaultWhirlwind);
    this.skills = [this.slash, this.whirlwind];
  }

  applyToPlayer(player) {
    player.speed *= this.attackSpeedMultiplier;
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
