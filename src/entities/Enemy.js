/**
 * Enemy.js - 普通敌人
 * 自动追踪玩家、血量、经验掉落、攻击动画
 */

import * as THREE from 'three';
import { SpriteAnimator } from '../utils/SpriteAnimator.js';

export class Enemy {
  constructor(config = {}) {
    this.config = config;
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.speed = config.speed ?? 60;
    this.radius = config.radius ?? 20;
    this.hp = config.hp ?? 20;
    this.maxHp = this.hp;
    this.damage = config.damage ?? 5;
    this.expDrop = config.expDrop ?? 3;
    this.sprite = null;
    this.mesh = new THREE.Group();
    this.game = null;
    this.healthBar = null;
    this.idleTexture = null;
    this.attackFrames = [];
    this.animator = null;
    this.playingAttack = false;
    this.attackAnimCooldown = 0;
  }

  _getAttackFramePaths() {
    const base = this.config.attackFrameBase ?? '/assets/enemies/zombie_attack_frame';
    const count = this.config.attackFrameCount ?? 4;
    const ext = this.config.attackFrameExt ?? '';
    return Array.from({ length: count }, (_, i) => `${base}${i + 1}${ext}.png`);
  }

  setGame(game) {
    this.game = game;
  }

  async init(position, assetLoader) {
    this.position.x = position.x;
    this.position.y = position.y;
    const path = this.config.spritePath ?? '/assets/enemies/zombie.png';
    const idleTex = await assetLoader.loadTexture(path);
    const attackPaths = this._getAttackFramePaths();
    const attackTexs = attackPaths.length
      ? await Promise.all(attackPaths.map((p) => assetLoader.loadTexture(p)))
      : [];
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
    const pct = this.hp / this.maxHp;
    ctx.fillStyle = pct > 0.5 ? '#0f0' : pct > 0.25 ? '#ff0' : '#f00';
    ctx.fillRect(0, 0, 32 * pct, 4);
    this.healthBar.material.map.needsUpdate = true;
  }

  takeDamage(amount) {
    this.hp = Math.max(0, this.hp - amount);
    this._updateHealthBar();
  }

  update(dt) {
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

    this.attackAnimCooldown -= dt;
    if (dist < 40 && !this.playingAttack && this.attackAnimCooldown <= 0) {
      this.playAttackAnimation();
      this.attackAnimCooldown = 0.6;
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
