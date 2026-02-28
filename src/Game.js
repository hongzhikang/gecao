/**
 * Game.js - 游戏主类
 * 场景、相机、循环、碰撞、波次、升级、特效
 */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

import { AssetLoader } from './core/AssetLoader.js';
import { InputManager } from './core/InputManager.js';
import { CollisionSystem } from './core/CollisionSystem.js';
import { Player } from './entities/Player.js';
import { Enemy } from './entities/Enemy.js';
import { Boss } from './entities/Boss.js';
import { SpawnSystem } from './systems/SpawnSystem.js';
import { WaveSystem } from './systems/WaveSystem.js';
import { UpgradeSystem } from './systems/UpgradeSystem.js';
import { ParallaxBackground } from './world/ParallaxBackground.js';
import { PoisonPlant, FireWolf, StoneGolem, ThunderBird } from './entities/summons/index.js';
import { Warrior } from './classes/Warrior.js';
import { Mage } from './classes/Mage.js';
import { Summoner } from './classes/Summoner.js';

const SUMMON_CLASS_MAP = {
  poison_plant: PoisonPlant,
  fire_wolf: FireWolf,
  stone_golem: StoneGolem,
  thunder_bird: ThunderBird,
};

const CLASS_MAP = { warrior: Warrior, mage: Mage, summoner: Summoner };

export class Game {
  constructor(container, options = {}) {
    this.container = container;
    this.time = 0;
    this.enemies = [];
    this.projectiles = [];
    this.summons = [];
    this.particles = [];
    this.particlePoints = null;
    this.summonMeshes = new Map();
    this.cameraOffset = { x: 0, y: 0 };
    this.screenShake = 0;
    this.paused = false;

    this.assetLoader = new AssetLoader();
    this.inputManager = new InputManager();
    this.EnemyClass = Enemy;
    this.BossClass = Boss;

    this.player = new Player(options.player ?? {});
    this.player.setGame(this);
    const classId = options.class ?? 'warrior';
    const ClassCtor = CLASS_MAP[classId] ?? Warrior;
    this.player.setClass(new ClassCtor(options.skillConfigs));

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    this.camera.position.z = 100;

    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setClearColor(0x0a0a12, 1);
    container.appendChild(this.renderer.domElement);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.4,
      0.2,
      0.6
    );
    this.composer.addPass(bloomPass);
    this.bloomPass = bloomPass;

    this.spawnSystem = new SpawnSystem(this);
    this.waveSystem = new WaveSystem(this);
    this.upgradeSystem = new UpgradeSystem(this);
    this.SUMMON_CLASS_MAP = SUMMON_CLASS_MAP;

    this.bgMesh = null;
    this.parallaxBackground = null;
    this.playerShadow = null;
    this.vignetteEl = null;
    this._registerEnemies();
    this._bindUI();
  }

  async _preloadAssets() {
    const paths = [
      '/assets/characters/warrior_idle.png',
      '/assets/characters/mage_idle.png',
      '/assets/characters/summoner_idle.png',
      '/assets/enemies/zombie.png',
      '/assets/boss/demon_boss.png',
      '/assets/skills/mage_fireball.png',
      '/assets/background/grass.png',
      '/assets/background/bg_main.png',
      ...Array.from({ length: 5 }, (_, i) => `/assets/characters/warrior_attack_frame${i + 1}.png`),
      ...Array.from({ length: 5 }, (_, i) => `/assets/characters/mage_attack_frame${i + 1}.png`),
      ...Array.from({ length: 5 }, (_, i) => `/assets/characters/summoner_cast_frame${i + 1}.png`),
      ...Array.from({ length: 4 }, (_, i) => `/assets/enemies/zombie_attack_frame${i + 1}.png`),
      ...Array.from({ length: 6 }, (_, i) => `/assets/boss/boss_attack_frame${i + 1}.png`),
      '/assets/summons/poison_plant.png',
      '/assets/summons/fire_wolf.png',
      '/assets/summons/stone_golem.png',
      '/assets/summons/thunder_bird.png',
    ];
    await Promise.all(paths.map((p) => this.assetLoader.loadTexture(p)));
  }

  _setupParticleSystem() {
    const maxParticles = 500;
    const positions = new Float32Array(maxParticles * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleTex = this.assetLoader.getTexture('/assets/skills/mage_fireball.png');
    const mat = new THREE.PointsMaterial({
      size: 6,
      map: particleTex || undefined,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
    });
    if (!particleTex) mat.color = new THREE.Color(0xff8844); // fallback when texture not yet loaded
    this.particlePoints = new THREE.Points(geo, mat);
    this.particlePoints.frustumCulled = false;
    this.scene.add(this.particlePoints);
  }

  async _setupBackground() {
    this.parallaxBackground = new ParallaxBackground(this.scene, this.assetLoader);
    this.parallaxBackground.setPlayerRef(this.player);
    await this.parallaxBackground.init('/assets/background/bg_main.png');
    this._setupPlayerShadow();
    this._setupVignette();
  }

  _setupPlayerShadow() {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(0,0,0,0.35)');
    g.addColorStop(0.6, 'rgba(0,0,0,0.12)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    this.playerShadow = new THREE.Sprite(mat);
    this.playerShadow.scale.set(70, 70, 1);
    this.playerShadow.position.z = -1;
    this.player.mesh.add(this.playerShadow);
  }

  _setupVignette() {
    this.vignetteEl = document.createElement('div');
    this.vignetteEl.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%);';
    this.container.style.position = this.container.style.position || 'relative';
    this.container.appendChild(this.vignetteEl);
  }

  async _setupPlayer() {
    await this.player.createSprite(this.assetLoader);
    this.scene.add(this.player.mesh);
  }

  _registerEnemies() {
    this.spawnSystem.registerEnemyType('default', {
      speed: 55,
      radius: 20,
      hp: 25,
      damage: 6,
      expDrop: 4,
      spritePath: '/assets/enemies/zombie.png',
    });
    this.spawnSystem.registerEnemyType('boss', {
      Boss: true,
      speed: 38,
      radius: 48,
      hp: 220,
      damage: 14,
      expDrop: 55,
      spritePath: '/assets/boss/demon_boss.png',
    });
  }

  _bindUI() {
    const panel = document.getElementById('upgrade-panel');
    const choices = document.getElementById('upgrade-choices');
    if (panel && choices) this.upgradeSystem.setPanel(panel, choices);
  }

  getEnemiesInRadius(x, y, r) {
    return this.enemies.filter((e) => {
      if (!e.isAlive()) return false;
      const dx = e.position.x - x;
      const dy = e.position.y - y;
      return dx * dx + dy * dy <= r * r;
    });
  }

  getSummons() {
    return this.summons;
  }

  addProjectile(proj) {
    if (proj.vx === 0 && proj.vy === 0 && proj.explodeRadius > 0) {
      this._explodeAt(proj.x, proj.y, proj.explodeRadius, proj.damage, proj.slowDuration, proj.slowFactor);
      return;
    }
    const mat = this.assetLoader.createSpriteMaterial('/assets/skills/mage_fireball.png', { width: 24, height: 24 });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(32, 32, 1);
    this.scene.add(sprite);
    proj.mesh = sprite;
    this.projectiles.push(proj);
  }

  async addSummon(SummonClassOrType, config, spawnPosition) {
    const SummonClass = typeof SummonClassOrType === 'string'
      ? SUMMON_CLASS_MAP[SummonClassOrType]
      : SummonClassOrType;
    if (!SummonClass) return;
    const summon = new SummonClass(config);
    summon.setGame(this);
    summon.position.x = spawnPosition.x;
    summon.position.y = spawnPosition.y;
    summon.spawnTime = this.time;
    summon.orbitAngle = Math.random() * Math.PI * 2;
    await summon.createMesh(this.assetLoader);
    this.scene.add(summon.mesh);
    this.summons.push(summon);
  }

  _explodeAt(x, y, radius, damage, slowDuration, slowFactor) {
    const list = this.getEnemiesInRadius(x, y, radius);
    list.forEach((e) => {
      if (e.isAlive()) {
        e.takeDamage(damage);
        if (slowDuration > 0 && e.speed != null) {
          const orig = e.config?.speed ?? e.speed;
          e.speed = orig * (slowFactor ?? 0.5);
          setTimeout(() => { e.speed = orig; }, slowDuration * 1000);
        }
      }
    });
    this._spawnParticles(x, y, 12, 0xff8844);
  }

  _spawnParticles(x, y, count, color) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random();
      const speed = 80 + Math.random() * 120;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0.4,
        maxLife: 0.4,
        color,
        size: 4 + Math.random() * 6,
      });
    }
  }

  onMeleeHit(x, y, radius, damage, duration) {
    this._spawnParticles(x, y, 8, 0xffcc00);
    this.screenShake = Math.min(0.15, this.screenShake + 0.08);
  }

  onPlayerHit() {
    this.screenShake = 0.2;
  }

  onLevelUp(player) {
    this.paused = true;
    this.upgradeSystem.show(player);
  }

  async start() {
    await this._preloadAssets();
    await this._setupBackground();
    this._setupParticleSystem();
    await this._setupPlayer();
    this.inputManager.start();
    this.player.classInstance?.setGame(this);
    this.waveSystem.waveStartTime = this.time;
    this.waveSystem.lastSpawnTime = this.time;
    await this.spawnSystem.spawnWave(this.waveSystem.getWaveConfig());
  }

  update(dt) {
    if (this.paused) return;

    this.time += dt;

    this.player.update(dt, this.inputManager);
    this.enemies.forEach((e) => e.update(dt));
    this.enemies.forEach((e) => {
      if (e.poisonUntil > this.time && (this.time - (e.lastPoisonTick ?? 0)) >= 0.5) {
        e.takeDamage(e.poisonStack ?? 1);
        e.lastPoisonTick = this.time;
      }
    });

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) {
        if (p.explodeRadius > 0) {
          this._explodeAt(p.x, p.y, p.explodeRadius, p.damage, p.slowDuration, p.slowFactor);
        }
        if (p.mesh) {
          this.scene.remove(p.mesh);
          p.mesh.material?.map?.dispose();
          p.mesh.material?.dispose();
        }
        this.projectiles.splice(i, 1);
        continue;
      }
      if (p.mesh) p.mesh.position.set(p.x, p.y, 0);
      const hitList = this.getEnemiesInRadius(p.x, p.y, p.radius);
      hitList.forEach((e) => {
        if (!e.isAlive() || p.hit.has(e)) return;
        p.hit.add(e);
        e.takeDamage(p.damage);
        if (p.explodeRadius > 0) {
          this._explodeAt(p.x, p.y, p.explodeRadius, 0, p.slowDuration, p.slowFactor);
          p.life = 0;
        }
      });
    }

    const gameTime = this.time;
    const player = this.player;
    for (let i = this.summons.length - 1; i >= 0; i--) {
      const s = this.summons[i];
      if (gameTime - s.spawnTime > s.duration || !s.isAlive()) {
        if (s.mesh) this.scene.remove(s.mesh);
        s.dispose?.();
        this.summons.splice(i, 1);
        continue;
      }
      s.update(dt);
    }

    this._enemiesAttackSummons(dt);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) this.particles.splice(i, 1);
    }
    this._updateParticlePoints();

    this._collisionUpdate();
    this.waveSystem.update(this.time);
    this._cameraUpdate(dt);
    this._backgroundUpdate();
    this._updateUI();
  }

  _updateParticlePoints() {
    if (!this.particlePoints) return;
    const pos = this.particlePoints.geometry.attributes.position.array;
    const n = Math.min(this.particles.length, pos.length / 3);
    for (let i = 0; i < n; i++) {
      const p = this.particles[i];
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = 0;
    }
    this.particlePoints.geometry.attributes.position.needsUpdate = true;
    this.particlePoints.geometry.setDrawRange(0, n);
  }

  _collisionUpdate() {
    const pr = this.player.getCollisionRadius();
    const px = this.player.position.x;
    const py = this.player.position.y;

    this.enemies.forEach((e) => {
      if (!e.isAlive()) return;
      const er = e.getCollisionRadius();
      if (CollisionSystem.circleCircle(px, py, pr, e.position.x, e.position.y, er)) {
        this.player.takeDamage(e.damage * 0.016);
      }
    });

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (!e.isAlive()) {
        this.player.addExp(e.expDrop);
        this.scene.remove(e.mesh);
        e.dispose();
        this.enemies.splice(i, 1);
      }
    }
  }

  _cameraUpdate(dt) {
    const targetX = this.player.position.x + this.cameraOffset.x;
    const targetY = this.player.position.y + this.cameraOffset.y;
    const shakeX = this.screenShake > 0 ? (Math.random() - 0.5) * 20 : 0;
    const shakeY = this.screenShake > 0 ? (Math.random() - 0.5) * 20 : 0;
    this.screenShake = Math.max(0, this.screenShake - dt * 2);

    const subtleShakeX = Math.sin(this.time * 8) * 1.2;
    const subtleShakeY = Math.cos(this.time * 6) * 1.2;

    const zoom = 280;
    const halfW = (this.container.clientWidth / this.container.clientHeight) * zoom;
    this.camera.left = -halfW;
    this.camera.right = halfW;
    this.camera.top = zoom;
    this.camera.bottom = -zoom;
    this.camera.updateProjectionMatrix();

    this.camera.position.x += (targetX - this.camera.position.x + shakeX + subtleShakeX) * Math.min(1, dt * 8);
    this.camera.position.y += (targetY - this.camera.position.y + shakeY + subtleShakeY) * Math.min(1, dt * 8);
    this.camera.lookAt(targetX + shakeX + subtleShakeX, targetY + shakeY + subtleShakeY, 0);
  }

  _backgroundUpdate() {
    if (this.parallaxBackground) {
      this.parallaxBackground.update(this.camera.position);
    }
  }

  _enemiesAttackSummons(dt) {
    const meleeRange = 42;
    this.enemies.forEach((e) => {
      if (!e.isAlive()) return;
      let nearest = null;
      let nearestD2 = meleeRange * meleeRange;
      this.summons.forEach((s) => {
        if (!s.isAlive()) return;
        const dx = s.position.x - e.position.x;
        const dy = s.position.y - e.position.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < nearestD2) {
          nearestD2 = d2;
          nearest = s;
        }
      });
      if (nearest && e.attackSummonCooldown == null) e.attackSummonCooldown = 0;
      if (nearest && e.attackSummonCooldown <= 0) {
        nearest.takeDamage((e.damage ?? e.config?.damage ?? 5) * dt * 2);
        e.attackSummonCooldown = 0.5;
      }
      if (e.attackSummonCooldown != null) e.attackSummonCooldown -= dt;
    });
  }

  _updateUI() {
    const hpFill = document.getElementById('hp-fill');
    const xpFill = document.getElementById('xp-fill');
    const levelNum = document.getElementById('level-num');
    if (hpFill) hpFill.style.width = `${(this.player.hp / this.player.maxHp) * 100}%`;
    if (xpFill) xpFill.style.width = `${(this.player.exp / this.player.expToNext) * 100}%`;
    if (levelNum) levelNum.textContent = this.player.level;
  }

  hideUpgradePanel() {
    this.upgradeSystem.hide();
    this.paused = false;
  }

  render() {
    this.composer.render();
  }

  resize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.bloomPass.resolution.set(w, h);
  }

  stop() {
    this.inputManager.stop();
    this.upgradeSystem.hide();
    this.paused = true;
  }

  dispose() {
    this.stop();
    if (this.vignetteEl?.parentNode) this.vignetteEl.parentNode.removeChild(this.vignetteEl);
    this.parallaxBackground?.dispose();
    this.summons.forEach((s) => s.dispose?.());
    this.assetLoader.dispose();
    this.player.dispose();
    this.enemies.forEach((e) => e.dispose());
    this.renderer.dispose();
  }
}
