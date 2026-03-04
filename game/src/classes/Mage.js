/**
 * Mage.js - 法师职业
 * 远程弹道、范围爆炸、冰冻减速
 */

import { ProjectileSkill } from '../skills/ProjectileSkill.js';
import { getClassConfig } from '../core/DataLoader.js';

export class Mage {
  constructor(skillConfigs = {}) {
    this.spritePath = '/assets/characters/mage_idle.png';

    const defaultOrb = {
      id: 'mage_orb',
      name: '魔法弹',
      cooldown: 0.7,
      cooldownPerLevel: -0.05,
      speed: 380,
      damage: 16,
      damagePerLevel: 4,
      explodeRadius: 50,
      explodeRadiusPerLevel: 10,
      slowDuration: 1.5,
      slowFactor: 0.4,
      maxLevel: 5,
    };

    const defaultBlast = {
      id: 'mage_blast',
      name: '范围爆炸',
      cooldown: 2.5,
      cooldownPerLevel: -0.15,
      speed: 0,
      damage: 30,
      damagePerLevel: 8,
      explodeRadius: 90,
      explodeRadiusPerLevel: 12,
      maxLevel: 5,
    };

    this.orb = new ProjectileSkill(skillConfigs.orb ?? defaultOrb);
    this.blast = new ProjectileSkill(skillConfigs.blast ?? defaultBlast);
    this.skills = [this.orb, this.blast];
  }

  applyToPlayer(player) {
    const cfg = getClassConfig('mage') || {};
    if (cfg.maxHealth != null) {
      player.baseMaxHp = cfg.maxHealth;
      player.maxHp = cfg.maxHealth;
      player.hp = cfg.maxHealth;
    }
    this.skills.forEach((s) => s.setOwner(player));
  }

  setGame(game) {
    this.game = game;
    this.orb.setGame(game);
    this.blast.setGame(game);
  }

  update(dt, player) {
    this.skills.forEach((s) => s.update(dt));
    if (this.orb.canCast()) this.orb.cast();
    if (this.blast.canCast()) this.blast.cast();
  }
}
