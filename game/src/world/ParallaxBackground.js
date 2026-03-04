/**
 * ParallaxBackground.js - 三层视差背景 + 纹理运动 + 去平铺装饰
 * 不创建超大几何体，使用 RepeatWrapping + 纹理 offset 实现视觉无限
 */

import * as THREE from 'three';

const PLANE_SIZE = 1200;
const OFFSET_FACTOR = 0.0005;
const FAR_SPEED = 0.3;
const NEAR_SPEED = 1.2;
const DECOR_SPACING = 600;
const DECOR_POOL_SIZE = 80;
const DECOR_SCALE_MIN = 0.8;
const DECOR_SCALE_MAX = 1.3;

function createSeamlessTileableTexture(size = 4096) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(size, size);
  const d = imgData.data;
  const seed = 12345;
  const rand = (x, y) => {
    const n = (x * 4967 + y * 7919 + seed) % 2147483647;
    return (n & 0xffff) / 65535;
  };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const nx = x / size;
      const ny = y / size;
      const n = rand(x, y) * 0.4 + rand(Math.floor(x / 32) * 32, Math.floor(y / 32) * 32) * 0.6;
      const grass = 0.15 + n * 0.25;
      const dirt = 0.2 + (1 - n) * 0.2;
      const r = Math.floor(40 + grass * 80 + dirt * 60);
      const g = Math.floor(45 + grass * 70 + dirt * 40);
      const b = Math.floor(30 + grass * 40 + dirt * 50);
      d[i] = r;
      d[i + 1] = g;
      d[i + 2] = b;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

export class ParallaxBackground {
  constructor(scene, assetLoader) {
    this.scene = scene;
    this.assetLoader = assetLoader;
    this.layer1 = null;
    this.layer2 = null;
    this.groundTexture = null;
    this.farTexture = null;
    this.decorPool = [];
    this.playerRef = null;
    this._initialized = false;
  }

  setPlayerRef(player) {
    this.playerRef = player;
  }

  async init(groundTexturePath = '/assets/background/bg_main.png') {
    let mainTex = this.assetLoader.getTexture(groundTexturePath);
    if (!mainTex) {
      try {
        mainTex = await this.assetLoader.loadTexture(groundTexturePath);
      } catch (_) {
        mainTex = null;
      }
    }
    if (!mainTex || mainTex.image?.width < 2048) {
      mainTex = createSeamlessTileableTexture(4096);
    } else {
      mainTex = mainTex.clone();
      mainTex.needsUpdate = true;
    }
    mainTex.wrapS = THREE.RepeatWrapping;
    mainTex.wrapT = THREE.RepeatWrapping;
    this.groundTexture = mainTex;

    const farTex = mainTex.clone();
    farTex.wrapS = THREE.RepeatWrapping;
    farTex.wrapT = THREE.RepeatWrapping;
    this.farTexture = farTex;

    const farMat = new THREE.MeshBasicMaterial({
      map: farTex,
      depthWrite: false,
      transparent: true,
      opacity: 0.85,
      color: new THREE.Color(0.7, 0.75, 0.7),
    });
    const farGeo = new THREE.PlaneGeometry(PLANE_SIZE * 1.5, PLANE_SIZE * 1.5);
    this.layer1 = new THREE.Mesh(farGeo, farMat);
    this.layer1.position.z = -60;
    farTex.repeat.set(20, 20);
    this.scene.add(this.layer1);

    const mainMat = new THREE.MeshBasicMaterial({
      map: mainTex,
      depthWrite: false,
      transparent: true,
      opacity: 0.98,
    });
    mainTex.repeat.set(50, 50);
    const mainGeo = new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE);
    this.layer2 = new THREE.Mesh(mainGeo, mainMat);
    this.layer2.position.z = -50;
    this.scene.add(this.layer2);

    this._createDecorPool();
    this._scatterDecor();
    this._initialized = true;
  }

  _createDecorPool() {
    const types = [
      { color: 0x2a2520, w: 6, h: 5 },
      { color: 0x3d352a, w: 5, h: 6 },
      { color: 0x1a2a1a, w: 8, h: 3 },
      { color: 0x252015, w: 4, h: 7 },
      { color: 0x352a20, w: 7, h: 4 },
    ];
    for (let i = 0; i < DECOR_POOL_SIZE; i++) {
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
        alphaTest: 0.15,
        depthTest: true,
      });
      const sprite = new THREE.Sprite(mat);
      const baseS = 8 + Math.random() * 14;
      sprite.scale.set(baseS, baseS, 1);
      this.decorPool.push({
        mesh: sprite,
        baseScale: baseS,
        worldX: 0,
        worldY: 0,
      });
    }
  }

  _scatterDecor() {
    const half = (DECOR_SPACING * 20) / 2;
    const used = new Set();
    this.decorPool.forEach((d, i) => {
      let wx = (Math.random() - 0.5) * half * 2;
      let wy = (Math.random() - 0.5) * half * 2;
      const key = Math.floor(wx / DECOR_SPACING) + ',' + Math.floor(wy / DECOR_SPACING);
      if (used.has(key)) {
        wx += (Math.random() - 0.5) * DECOR_SPACING * 0.8;
        wy += (Math.random() - 0.5) * DECOR_SPACING * 0.8;
      }
      used.add(key);
      d.worldX = wx;
      d.worldY = wy;
      d.mesh.rotation.z = Math.random() * Math.PI * 2;
      const s = DECOR_SCALE_MIN + Math.random() * (DECOR_SCALE_MAX - DECOR_SCALE_MIN);
      d.mesh.scale.set(d.baseScale * s, d.baseScale * s, 1);
      this.scene.add(d.mesh);
    });
  }

  update(cameraPosition) {
    const px = this.playerRef?.position?.x ?? cameraPosition.x;
    const py = this.playerRef?.position?.y ?? cameraPosition.y;

    if (this.layer1) {
      this.layer1.position.x = cameraPosition.x;
      this.layer1.position.y = cameraPosition.y;
      this.farTexture.offset.x = px * OFFSET_FACTOR * FAR_SPEED;
      this.farTexture.offset.y = py * OFFSET_FACTOR * FAR_SPEED;
    }
    if (this.layer2) {
      this.layer2.position.x = cameraPosition.x;
      this.layer2.position.y = cameraPosition.y;
      this.groundTexture.offset.x = px * OFFSET_FACTOR;
      this.groundTexture.offset.y = py * OFFSET_FACTOR;
    }

    this.decorPool.forEach((d) => {
      d.mesh.position.x = d.worldX;
      d.mesh.position.y = d.worldY;
      d.mesh.position.z = -40;
    });
  }

  dispose() {
    [this.layer1, this.layer2].forEach((mesh) => {
      if (mesh) {
        this.scene.remove(mesh);
        mesh.geometry?.dispose();
        mesh.material?.map?.dispose();
        mesh.material?.dispose();
      }
    });
    this.decorPool.forEach((d) => {
      this.scene.remove(d.mesh);
      d.mesh.material?.map?.dispose();
      d.mesh.material?.dispose();
    });
    this.decorPool = [];
    this.groundTexture = null;
    this.farTexture = null;
  }
}
