/**
 * InfiniteBackground.js - 视觉无限循环大地图
 * RepeatWrapping + 大平面 + 跟随相机 + 随机装饰物对象池
 */

import * as THREE from 'three';

const REPEAT = 50;
const PLANE_SIZE = 20000;

export class InfiniteBackground {
  constructor(scene, assetLoader) {
    this.scene = scene;
    this.assetLoader = assetLoader;
    this.mesh = null;
    this.decorationPool = [];
    this.poolSize = 80;
    this.decorMeshes = [];
    this._initialized = false;
  }

  async init(texturePath = '/assets/background/grass.png') {
    const tex = await this.assetLoader.loadTexture(texturePath);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(REPEAT, REPEAT);

    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      depthWrite: false,
      transparent: true,
      opacity: 0.95,
    });
    const geo = new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.z = -50;
    this.scene.add(this.mesh);

    this._createDecorationPool();
    this._scatterDecorations();
    this._initialized = true;
  }

  _createDecorationPool() {
    const types = [
      { color: 0x444444, w: 8, h: 6 },
      { color: 0x555555, w: 6, h: 8 },
      { color: 0x2a3a1a, w: 10, h: 4 },
      { color: 0x1a2a1a, w: 6, h: 10 },
      { color: 0x3d2a1a, w: 7, h: 7 },
    ];
    for (let i = 0; i < this.poolSize; i++) {
      const t = types[i % types.length];
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(16, t.w * 4);
      canvas.height = Math.max(16, t.h * 4);
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#' + t.color.toString(16).padStart(6, '0');
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const tex = new THREE.CanvasTexture(canvas);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        alphaTest: 0.1,
        depthTest: true,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(12 + Math.random() * 20, 12 + Math.random() * 20, 1);
      this.decorMeshes.push(sprite);
      this.decorationPool.push({
        mesh: sprite,
        baseScaleX: sprite.scale.x,
        baseScaleY: sprite.scale.y,
        x: 0,
        y: 0,
      });
    }
  }

  _scatterDecorations() {
    this.decorationPool.forEach((d) => {
      d.x = (Math.random() - 0.5) * PLANE_SIZE * 0.9;
      d.y = (Math.random() - 0.5) * PLANE_SIZE * 0.9;
      d.mesh.position.set(d.x, d.y, -40);
      d.mesh.rotation.z = Math.random() * Math.PI * 2;
      const s = 0.6 + Math.random() * 0.8;
      d.mesh.scale.set(d.baseScaleX * s, d.baseScaleY * s, 1);
      this.scene.add(d.mesh);
    });
  }

  update(cameraPosition) {
    if (!this.mesh) return;
    this.mesh.position.x = cameraPosition.x;
    this.mesh.position.y = cameraPosition.y;
  }

  dispose() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry?.dispose();
      this.mesh.material?.map?.dispose();
      this.mesh.material?.dispose();
    }
    this.decorationPool.forEach((d) => {
      this.scene.remove(d.mesh);
      d.mesh.material?.map?.dispose();
      d.mesh.material?.dispose();
    });
    this.decorationPool = [];
    this.decorMeshes = [];
  }
}
