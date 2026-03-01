/**
 * Chest.js - Treasure chest, drops from elites, gives upgrade choices
 */

import * as THREE from 'three';

export class Chest {
  constructor(x, y, isGolden = false) {
    this.position = { x, y };
    this.isGolden = isGolden;
    this.mesh = null;
  }

  createMesh() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = this.isGolden ? '#daa520' : '#8b4513';
    ctx.fillRect(0, 0, 32, 32);
    ctx.strokeStyle = this.isGolden ? '#ffd700' : '#654321';
    ctx.lineWidth = 2;
    ctx.strokeRect(2, 2, 28, 28);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      alphaTest: 0.1,
      depthTest: true,
    });
    this.mesh = new THREE.Sprite(mat);
    this.mesh.scale.set(40, 40, 1);
    this.mesh.position.set(this.position.x, this.position.y, 0);
    return this.mesh;
  }

  getCollisionRadius() {
    return 28;
  }

  dispose() {
    if (this.mesh?.material?.map) this.mesh.material.map.dispose();
    if (this.mesh?.material) this.mesh.material.dispose();
  }
}
