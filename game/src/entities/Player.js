/**
 * Player.js - 玩家实体
 * 血量、经验、等级、移动、职业策略、攻击动画
 */

import * as THREE from 'three';
import { SpriteAnimator } from '../utils/SpriteAnimator.js';

export class Player {
  constructor(options = {}) {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.speed = this.baseSpeed ?? 180;
    this.radius = options.radius ?? 24;

    this.baseMaxHp = options.maxHp ?? 100;
    this.baseSpeed = options.speed ?? 180;
    this.maxHp = this.baseMaxHp;
    this.hp = this.maxHp;
    this.exp = 0;
    this.level = 1;
    this.expToNext = this._nextLevelExp(1);
    this.damageMultiplier = 1;
    this.attackSpeedMultiplier = 1;
    this.speedMultiplierFromClass = 1;
    this.damageTakenMultiplier = 1; // 战士 0.7 = 高防御

    this.sprite = null;
    this.mesh = new THREE.Group();
    this.classInstance = null; // 职业实例 Warrior | Mage | Summoner
    this.game = null;

    this.invincibleUntil = 0;
    this.invincibleDuration = 0.08;

    this.idleTexture = null;
    this.attackFrames = [];
    this.animator = null;
    this.playingAttack = false;
  }

  _getAttackFramePaths() {
    const base = '/assets/characters/';
    const map = {
      warrior: { name: 'warrior_attack_frame', count: 5 },
      mage: { name: 'mage_attack_frame', count: 5 },
      summoner: { name: 'summoner_cast_frame', count: 5 },
    };
    const key = this.classInstance?.constructor?.name?.toLowerCase() ?? 'warrior';
    const { name, count } = map[key] ?? map.warrior;
    return Array.from({ length: count }, (_, i) => `${base}${name}${i + 1}.png`);
  }

  /** 若接口返回了帧图 URL 列表则用其路径，否则返回 null 走默认 _getAttackFramePaths */
  _getAttackFrameUrls() {
    const urls = this.classInstance?.frameUrls;
    return Array.isArray(urls) && urls.length > 0 ? urls : null;
  }

  setGame(game) {
    this.game = game;
  }

  setClass(classInstance) {
    this.classInstance = classInstance;
    if (classInstance) classInstance.applyToPlayer(this);
  }

  async createSprite(assetLoader) {
    const idlePath = this.classInstance?.spritePath ?? '/assets/characters/warrior_idle.png';
    const idleTex = await assetLoader.loadTexture(idlePath);
    const apiUrls = this._getAttackFrameUrls();
    let attackTexs;
    if (apiUrls) {
      attackTexs = await Promise.all(apiUrls.map((url) => assetLoader.loadTexture(url)));
    } else {
      const attackPaths = this._getAttackFramePaths();
      attackTexs = attackPaths.length
        ? await Promise.all(attackPaths.map((p) => assetLoader.loadTexture(p)))
        : [];
    }
    const mat = new THREE.SpriteMaterial({
      map: idleTex,
      transparent: true,
      alphaTest: 0.05,
      depthTest: true,
      depthWrite: false,
    });
    this.sprite = new THREE.Sprite(mat);
    this.sprite.scale.set(64, 64, 1);
    this.mesh.add(this.sprite);
    this.idleTexture = idleTex;
    this.attackFrames = attackTexs.length ? attackTexs : [idleTex];
    this.animator = new SpriteAnimator(this.attackFrames, 0.08);
    return this.mesh;
  }

  playAttackAnimation() {
    if (!this.attackFrames?.length || this.attackFrames.length === 1) return;
    this.playingAttack = true;
    this.animator.playOnce(this.attackFrames, () => {
      this.playingAttack = false;
      if (this.sprite?.material && this.idleTexture) this.sprite.material.map = this.idleTexture;
    });
  }

  takeDamage(amount) {
    if (this.game?.time < this.invincibleUntil) return;
    const mult = this.damageTakenMultiplier ?? 1;
    let d = amount * mult;
    const sh = this.shieldHp ?? 0;
    if (sh > 0 && d > 0) {
      const absorb = Math.min(sh, d);
      this.shieldHp = sh - absorb;
      d -= absorb;
    }
    if (d > 0) this.hp = Math.max(0, this.hp - d);
    this.invincibleUntil = (this.game?.time ?? 0) + this.invincibleDuration;
    if (d > 0 && this.game?.onPlayerHit) this.game.onPlayerHit();
  }

  heal(amount) {
    this.hp = Math.min(this.maxHp, this.hp + amount);
  }

  _nextLevelExp(level) {
    return Math.max(1, Math.floor(20 * Math.pow(level, 1.5)));
  }

  _applyLevelScaling() {
    const L = this.level;
    this.maxHp = Math.floor(this.baseMaxHp * (1 + (L - 1) * 0.08));
    this.hp = Math.min(this.hp, this.maxHp);
    this.speed = this.baseSpeed * (1 + (L - 1) * 0.02) * (this.speedMultiplierFromClass ?? 1);
    this.damageMultiplier = 1 + (L - 1) * 0.05;
    this.attackSpeedMultiplier = 1 + (L - 1) * 0.02;
  }

  addExp(value) {
    const mult = this.game?.expGainMultiplier ?? 1;
    this.exp += value * mult;
    while (this.exp >= this.expToNext) {
      this.exp -= this.expToNext;
      this.level++;
      this.expToNext = this._nextLevelExp(this.level);
      this._applyLevelScaling();
      this.hp = Math.min(this.maxHp, this.hp + Math.floor(this.maxHp * 0.2));
      if (this.game?.onLevelUp) this.game.onLevelUp(this);
    }
  }

  update(dt, inputManager) {
    const axis = inputManager.getAxis();
    this.velocity.x = axis.x * this.speed;
    this.velocity.y = axis.y * this.speed;

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;

    this.mesh.position.set(this.position.x, this.position.y, 0);

    if (this.animator && this.playingAttack) {
      this.animator.update(dt, this.sprite.material);
    }

    if (this.classInstance && this.classInstance.update) {
      this.classInstance.update(dt, this);
    }
  }

  getCollisionRadius() {
    return this.radius;
  }

  isAlive() {
    return this.hp > 0;
  }

  dispose() {
    if (this.sprite?.material?.map) this.sprite.material.map.dispose();
    if (this.sprite?.material) this.sprite.material.dispose();
  }
}
