/**
 * Enemy.js - 普通敌人
 * 从 EnemyConfig 读取数值，支持受击闪白、击退、死亡粒子
 */

import * as THREE from 'three';
import { SpriteAnimator } from '../utils/SpriteAnimator.js';
import { getConfig, BASE_ENEMY_SPEED } from '../config/EnemyConfig.js';

export class Enemy {
  constructor(type = 'basicZombie', configOverrides = {}) {
    const config = { ...getConfig(type), ...configOverrides };
    this.type = type;
    this.config = config;
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    const moveSpeed = config.moveSpeed ?? config.speed ?? 1;
    this.speed = moveSpeed * BASE_ENEMY_SPEED;
    this.radius = config.radius ?? 20;
    this.maxHp = config.maxHealth ?? config.maxHP ?? 40;
    this.hp = this.maxHp;
    this.damage = config.attackDamage ?? config.attack ?? 5;
    this.attackCooldown = config.attackCooldown ?? 0.6;
    this.lastAttackTime = -1e9;
    this.expDrop = config.expReward ?? config.exp ?? 5;
    this.shieldHp = config.shieldAmount ?? 0;
    this.slowOnHit = config.slowOnHit ?? false;
    this.slowDuration = config.slowDuration ?? 1.5;
    this.slowFactor = config.slowFactor ?? 0.5;
    this.sprite = null;
    this.mesh = new THREE.Group();
    this.game = null;
    this.healthBar = null;
    this.idleTexture = null;
    this.attackFrames = [];
    this.animator = null;
    this.playingAttack = false;
    this.attackAnimCooldown = 0;
    this.attackInterval = 0.6;
    this.hitFlashUntil = 0;
    this.knockbackUntil = 0;
    this.knockbackVx = 0;
    this.knockbackVy = 0;
  }

  _getAttackFramePaths() {
    const base = this.config.attackFrameBase ?? '/assets/enemies/zombie_attack_frame';
    const count = this.config.attackFrameCount ?? 4;
    return Array.from({ length: count }, (_, i) => `${base}${i + 1}.png`);
  }

  setGame(game) {
    this.game = game;
    const m = game?.difficultyMultipliers;
    if (m) {
      this.maxHp = Math.max(1, Math.floor(this.maxHp * m.enemyHealthMultiplier));
      this.hp = this.maxHp;
      this.damage *= m.enemyDamageMultiplier;
    }
    this.shieldHp = this.config.shieldAmount ?? 0;
  }

  async init(position, assetLoader) {
    this.position.x = position.x;
    this.position.y = position.y;
    const frameUrls = this.config.frameUrls;
    const useApiFrames = Array.isArray(frameUrls) && frameUrls.length > 0;
    const idlePath = this.config.spritePath ?? (useApiFrames ? frameUrls[0] : null) ?? '/assets/enemies/zombie.png';
    const idleTex = await assetLoader.loadTexture(idlePath);
    let attackTexs = [];
    if (useApiFrames) {
      attackTexs = await Promise.all(frameUrls.map((url) => assetLoader.loadTexture(url)));
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
    this.sprite.scale.set(48, 48, 1);
    this.mesh.add(this.sprite);
    this.mesh.position.set(this.position.x, this.position.y, 0);
    this.idleTexture = idleTex;
    this.attackFrames = attackTexs.length ? attackTexs : [idleTex];
    this.animator = new SpriteAnimator(this.attackFrames, 0.1);
    this._createHealthBar();
    return this.mesh;
  }

  reset(type, position) {
    this.type = type;
    const config = { ...getConfig(type) };
    this.config = config;
    const moveSpeed = config.moveSpeed ?? config.speed ?? 1;
    this.speed = moveSpeed * BASE_ENEMY_SPEED;
    this.radius = config.radius ?? 20;
    this.maxHp = config.maxHealth ?? config.maxHP ?? 40;
    this.hp = this.maxHp;
    this.damage = config.attackDamage ?? config.attack ?? 5;
    this.attackCooldown = config.attackCooldown ?? 0.6;
    this.lastAttackTime = -1e9;
    this.expDrop = config.expReward ?? config.exp ?? 5;
    this.shieldHp = config.shieldAmount ?? 0;
    this.slowOnHit = config.slowOnHit ?? false;
    this.slowDuration = config.slowDuration ?? 1.5;
    this.slowFactor = config.slowFactor ?? 0.5;
    this.position.x = position.x;
    this.position.y = position.y;
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.hitFlashUntil = 0;
    this.knockbackUntil = 0;
    const m = this.game?.difficultyMultipliers;
    if (m) {
      this.maxHp = Math.max(1, Math.floor(this.maxHp * m.enemyHealthMultiplier));
      this.hp = this.maxHp;
      this.damage *= m.enemyDamageMultiplier;
    }
    this.mesh.position.set(this.position.x, this.position.y, 0);
    this._updateHealthBar();
  }

  playAttackAnimation() {
    if (!this.attackFrames?.length || this.attackFrames.length === 1) return;
    this.playingAttack = true;
    this.animator.playOnce(this.attackFrames, () => {
      this.playingAttack = false;
      if (this.sprite?.material && this.idleTexture) this.sprite.material.map = this.idleTexture;
    });
  }

  _createHealthBar() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 4;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, 32, 4);
    ctx.fillStyle = '#0f0';
    ctx.fillRect(0, 0, 32, 4);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    this.healthBar = new THREE.Sprite(mat);
    this.healthBar.scale.set(24, 3, 1);
    this.healthBar.position.y = this.radius + 4;
    this.mesh.add(this.healthBar);
  }

  _updateHealthBar() {
    if (!this.healthBar?.material?.map) return;
    const canvas = this.healthBar.material.map.image;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, 32, 4);
    const pct = this.maxHp > 0 ? this.hp / this.maxHp : 0;
    ctx.fillStyle = pct > 0.5 ? '#0f0' : pct > 0.25 ? '#ff0' : '#f00';
    ctx.fillRect(0, 0, 32 * pct, 4);
    this.healthBar.material.map.needsUpdate = true;
  }

  takeDamage(amount, sourceX = null, sourceY = null, skipFloat = false) {
    let d = amount;
    if (this.shieldHp > 0 && d > 0) {
      const absorb = Math.min(this.shieldHp, d);
      this.shieldHp -= absorb;
      d -= absorb;
    }
    if (d > 0 && !skipFloat && this.game?._showDamageFloat) this.game._showDamageFloat(this.position.x, this.position.y, d, false);
    this.hp = Math.max(0, this.hp - d);
    this.hitFlashUntil = (this.game?.time ?? 0) + 0.1;
    if (sourceX != null && sourceY != null) {
      const dx = this.position.x - sourceX;
      const dy = this.position.y - sourceY;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const knock = 180;
      this.knockbackVx = (dx / d) * knock;
      this.knockbackVy = (dy / d) * knock;
      this.knockbackUntil = (this.game?.time ?? 0) + 0.1;
    }
    this._updateHealthBar();
  }

  update(dt) {
    const gameTime = this.game?.time ?? 0;
    if (this.hitFlashUntil > gameTime && this.sprite?.material?.color) {
      this.sprite.material.color.setHex(0xff6666);
    } else if (this.sprite?.material?.color) {
      this.sprite.material.color.setHex(0xffffff);
    }

    if (this.knockbackUntil > gameTime) {
      this.position.x += this.knockbackVx * dt;
      this.position.y += this.knockbackVy * dt;
      this.mesh.position.set(this.position.x, this.position.y, 0);
      this._updateHealthBar();
      return;
    }

    const player = this.game?.player;
    if (!player || !player.isAlive()) return;

    const dx = player.position.x - this.position.x;
    const dy = player.position.y - this.position.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    this.velocity.x = (dx / dist) * this.speed;
    this.velocity.y = (dy / dist) * this.speed;

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;

    this.mesh.position.set(this.position.x, this.position.y, 0);

    const interval = this.attackInterval / (player.attackSpeedMultiplier ?? 1);
    this.attackAnimCooldown -= dt;
    if (dist < 40 && !this.playingAttack && this.attackAnimCooldown <= 0) {
      this.playAttackAnimation();
      this.attackAnimCooldown = interval;
    }
    if (this.animator && this.playingAttack) {
      this.animator.update(dt, this.sprite.material);
    }

    this._updateHealthBar();
  }

  getCollisionRadius() {
    return this.radius;
  }

  isAlive() {
    return this.hp > 0;
  }

  dispose() {
    if (this.healthBar?.material?.map) this.healthBar.material.map.dispose();
    if (this.healthBar?.material) this.healthBar.material.dispose();
    if (this.sprite?.material?.map) this.sprite.material.map.dispose();
    if (this.sprite?.material) this.sprite.material.dispose();
  }
}
