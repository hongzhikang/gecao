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

  /**
   * 使用正式 chest.png 贴图渲染宝箱
   * @param {import('../core/AssetLoader.js').AssetLoader} assetLoader
   */
  createMesh(assetLoader) {
    // 优先使用项目统一的 AssetLoader 贴图
    if (assetLoader?.createSpriteMaterial) {
      const mat = assetLoader.createSpriteMaterial('/assets/chest.png', {
        width: 48,
        height: 48,
      });
      // 金色宝箱整体偏亮一点，保持同一贴图、不同色调
      if (this.isGolden && mat.color) {
        mat.color.setHex(0xffe066);
      }
      this.mesh = new THREE.Sprite(mat);
      this.mesh.scale.set(52, 52, 1);
      this.mesh.position.set(this.position.x, this.position.y, 0);
      return this.mesh;
    }

    // 兜底：仍然使用旧的 Canvas 方块（理论上不会再走到这里）
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
