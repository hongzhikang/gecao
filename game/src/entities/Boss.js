/**
 * Boss.js - Boss 敌人
 * 继承 Enemy 逻辑，更大体型、更多血量、更多经验
 */

import { Enemy } from './Enemy.js';
import * as THREE from 'three';

export class Boss extends Enemy {
  constructor(configOverrides = {}) {
    super('boss', configOverrides);
    this.isBoss = true;
  }

  async init(position, assetLoader) {
    await super.init(position, assetLoader);
    this.sprite.scale.set(96, 96, 1);
    if (this.healthBar) {
      this.mesh.remove(this.healthBar);
      this.healthBar.material?.map?.dispose();
      this.healthBar.material?.dispose();
    }
    this._createHealthBar();
    return this.mesh;
  }

  _createHealthBar() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 8;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, 64, 8);
    ctx.fillStyle = '#f0f';
    ctx.fillRect(0, 0, 64, 8);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    this.healthBar = new THREE.Sprite(mat);
    this.healthBar.scale.set(48, 6, 1);
    this.healthBar.position.y = this.radius + 8;
    this.mesh.add(this.healthBar);
  }

  _updateHealthBar() {
    if (!this.healthBar?.material?.map) return;
    const canvas = this.healthBar.material.map.image;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, 64, 8);
    const pct = this.hp / this.maxHp;
    ctx.fillStyle = pct > 0.5 ? '#f0f' : pct > 0.25 ? '#f80' : '#f00';
    ctx.fillRect(0, 0, 64 * pct, 8);
    this.healthBar.material.map.needsUpdate = true;
  }
}
