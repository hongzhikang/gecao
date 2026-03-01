/**
 * BaseSkill.js - 技能基类
 * 冷却、等级成长、特效扩展
 */

export class BaseSkill {
  constructor(config = {}) {
    this.id = config.id ?? 'skill';
    this.name = config.name ?? 'Skill';
    this.cooldown = config.cooldown ?? 1;
    this.cooldownRemain = 0;
    this.level = config.level ?? 1;
    this.maxLevel = config.maxLevel ?? 5;
    this.config = config;
    this.owner = null;
  }

  setOwner(owner) {
    this.owner = owner;
  }

  getCooldownTotal() {
    const perLevel = this.config.cooldownPerLevel ?? 0;
    const base = this.cooldown - (this.level - 1) * perLevel;
    return Math.max(0.1, base / (this.owner?.attackSpeedMultiplier ?? 1));
  }

  canCast() {
    return this.cooldownRemain <= 0 && this.owner;
  }

  update(dt) {
    if (this.cooldownRemain > 0) {
      this.cooldownRemain -= dt;
    }
  }

  cast() {
    if (!this.canCast()) return false;
    this._doCast();
    this.cooldownRemain = this.getCooldownTotal();
    return true;
  }

  _doCast() {
    // 子类实现
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++;
      return true;
    }
    return false;
  }

  getValue(key, defaultValue = 0) {
    const base = this.config[key] ?? defaultValue;
    const perLevel = this.config[`${key}PerLevel`] ?? 0;
    return base + (this.level - 1) * perLevel;
  }
}
