/**
 * AssetLoader.js - 统一资源加载管理
 * 使用 /assets 下正式美术资源
 */

import * as THREE from 'three';
import { loadTexture as loadTextureUtil } from '../utils/assetLoader.js';

export class AssetLoader {
  constructor() {
    this.textures = new Map();
    this.promises = new Map();
  }

  loadTexture(path) {
    if (this.textures.has(path)) return Promise.resolve(this.textures.get(path));
    if (this.promises.has(path)) return this.promises.get(path);
    const p = loadTextureUtil(path)
      .then((tex) => {
        this.textures.set(path, tex);
        return tex;
      })
      .catch((err) => {
        console.warn('[AssetLoader] 使用占位图:', path, err);
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 64, 64);
        const tex = new THREE.CanvasTexture(canvas);
        tex.transparent = true;
        this.textures.set(path, tex);
        return tex;
      });
    this.promises.set(path, p);
    return p;
  }

  getTexture(path) {
    return this.textures.get(path) || null;
  }

  async loadTextures(paths) {
    const list = await Promise.all(paths.map((p) => this.loadTexture(p)));
    return Object.fromEntries(paths.map((p, i) => [p, list[i]]));
  }

  createSpriteMaterial(path, opts = {}) {
    const { width, height, ...rest } = opts;
    const map = this.getTexture(path);
    if (!map) {
      const canvas = document.createElement('canvas');
      canvas.width = width || 64;
      canvas.height = height || 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#333';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const placeTex = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({
        map: placeTex,
        transparent: true,
        opacity: 0,
        alphaTest: 0.99,
        depthTest: true,
        depthWrite: false,
        ...rest,
      });
      // 贴图加载完成后替换占位图，灰色方块会变成正常精灵
      this.loadTexture(path).then((tex) => {
        if (material.map === placeTex) {
          material.map = tex;
          placeTex.dispose();
        }
      });
      return material;
    }
    return new THREE.SpriteMaterial({
      map,
      transparent: true,
      alphaTest: 0.05,
      depthTest: true,
      depthWrite: false,
      ...rest,
    });
  }

  async createSpriteMaterialAsync(path, opts = {}) {
    const { width, height, ...rest } = opts;
    const map = await this.loadTexture(path);
    return new THREE.SpriteMaterial({
      map,
      transparent: true,
      alphaTest: 0.05,
      depthTest: true,
      depthWrite: false,
      ...rest,
    });
  }

  dispose() {
    this.textures.forEach((t) => t.dispose && t.dispose());
    this.textures.clear();
    this.promises.clear();
  }
}
