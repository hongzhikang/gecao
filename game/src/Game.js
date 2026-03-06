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
import { EnemyPool } from './systems/EnemyPool.js';
import { UpgradeSystem } from './systems/UpgradeSystem.js';
import { DifficultyConfig } from './config/DifficultyConfig.js';
import { AudioManager } from './core/AudioManager.js';
import { ParallaxBackground } from './world/ParallaxBackground.js';
import { Chest } from './entities/Chest.js';
import { PoisonPlant, FireWolf, StoneGolem, ThunderBird } from './entities/summons/index.js';
import { Warrior } from './classes/Warrior.js';
import { Mage } from './classes/Mage.js';
import { Summoner } from './classes/Summoner.js';
import { getGameData, getChapterConfig } from './core/DataLoader.js';

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
    this.audio = new AudioManager();
    this.EnemyClass = Enemy;
    this.BossClass = Boss;

    this.player = new Player(options.player ?? {});
    this.player.setGame(this);
    const classId = options.class ?? 'warrior';
    const ClassCtor = CLASS_MAP[classId] ?? Warrior;
    this.player.setClass(new ClassCtor(options.skillConfigs));

    this.chapterId = options.chapterId ?? null;
    this.chapterConfig = this.chapterId ? getChapterConfig(this.chapterId) : null;

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

    this.gameMode = options.mode ?? 'classic';
    const difficultyId = options.difficulty === 'nightmare' ? 'hell' : (options.difficulty ?? 'normal');
    const difficulty = DifficultyConfig[difficultyId] ?? DifficultyConfig.normal;
    this.difficulty = difficultyId;
    this.difficultyMultipliers = {
      enemyHealthMultiplier: difficulty.enemyHealthMultiplier,
      enemyDamageMultiplier: difficulty.enemyDamageMultiplier,
    };
    this.spawnRateMultiplier = difficulty.spawnRateMultiplier;
    this.enemyCountMultiplier = difficulty.enemyCountMultiplier ?? 1;
    this.expGainMultiplier = difficulty.expGainMultiplier;
    this.dropRateMultiplier = difficulty.dropRateMultiplier ?? 1;
    this.eliteWeightBonus = difficulty.eliteWeightBonus ?? 0;

    this.spawnSystem = new SpawnSystem(this);
    this.waveSystem = new WaveSystem(this);
    this.enemyPool = new EnemyPool(this);
    this.upgradeSystem = new UpgradeSystem(this);
    this.SUMMON_CLASS_MAP = SUMMON_CLASS_MAP;

    this.killCount = 0;
    this.gameOver = false;
    this.onGameOver = null;
    this.chests = [];
    this.baseZoom = 280;
    this.bgMesh = null;
    this.parallaxBackground = null;
    this.playerShadow = null;
    this.vignetteEl = null;
    this.hurtFlashEl = null;
    this.floatTextContainer = null;
    this.floatTexts = [];
    this.hurtFlashUntil = 0;
    this.levelUpSlowMotionUntil = 0;
    this.pendingLevelUpPlayer = null;
    this.lastChestDropTime = 0;
    this.chestDropInterval = 55;
    this._bindUI();
    this.warriorRangeIndicator = null;
    if (this.player.classInstance?.constructor?.name === 'Warrior') {
      this._setupWarriorRangeIndicator();
    }
  }

  async _preloadAssets() {
    const paths = [
      '/assets/characters/warrior_idle.png',
      '/assets/characters/mage_idle.png',
      '/assets/characters/summoner_idle.png',
      '/assets/chest.png',
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
    const seen = new Set(paths);
    try {
      const data = getGameData();
      [data.classes, data.enemies, data.summons].forEach((map) => {
        if (!map || typeof map !== 'object') return;
        Object.values(map).forEach((item) => {
          if (item?.spritePath && typeof item.spritePath === 'string' && !seen.has(item.spritePath)) {
            seen.add(item.spritePath);
            paths.push(item.spritePath);
          }
          const urls = item?.frameUrls;
          if (Array.isArray(urls)) urls.forEach((url) => { if (url && !seen.has(url)) { seen.add(url); paths.push(url); } });
        });
      });
    } catch (_) {}
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
    const bgPath = this.chapterConfig?.background ?? '/assets/background/bg_main.png';
    await this.parallaxBackground.init(bgPath);
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

  _setupWarriorRangeIndicator() {
    const warrior = this.player.classInstance;
    const meleeSkill = warrior?.slash;
    const baseRadius = meleeSkill?.config?.radius ?? 70;
    const inner = Math.max(0, baseRadius - 2);
    const geo = new THREE.RingGeometry(inner, baseRadius, 64);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x00ff99,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      depthTest: false,
    });
    const ring = new THREE.Mesh(geo, mat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0, 0, -0.5);
    this.player.mesh.add(ring);
    this.warriorRangeIndicator = ring;
  }

  _setupHurtFlash() {
    this.hurtFlashEl = document.createElement('div');
    this.hurtFlashEl.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:rgba(200,0,0,0.4);opacity:0;transition:opacity 0.06s;';
    this.container.appendChild(this.hurtFlashEl);
  }

  _setupFloatTexts() {
    this.floatTextContainer = document.createElement('div');
    this.floatTextContainer.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;';
    this.container.appendChild(this.floatTextContainer);
  }

  _bindUI() {
    const panel = document.getElementById('upgrade-panel');
    const choices = document.getElementById('upgrade-choices');
    if (panel && choices) this.upgradeSystem.setPanel(panel, choices);
    const pauseBtn = document.getElementById('pause-btn');
    if (pauseBtn) pauseBtn.onclick = () => { this.paused = !this.paused; pauseBtn.textContent = this.paused ? '继续' : '暂停'; };
  }

  getEnemiesInRadius(x, y, r) {
    return this.enemies.filter((e) => {
      if (!e.isAlive()) return false;
      const dx = e.position.x - x;
      const dy = e.position.y - y;
      return dx * dx + dy * dy <= r * r;
    });
  }

  /** 暴击：基础 10%，战士 +10% = 20%，1.5 倍伤害 */
  applyCrit(damage, sourcePlayer) {
    const rate = 0.1 + (sourcePlayer?.critRateBonus ?? 0);
    const isCrit = Math.random() < rate;
    return { damage: isCrit ? damage * 1.5 : damage, isCrit };
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

  async addSummon(SummonClassOrType, config, spawnPosition, { maxSummonLimit } = {}) {
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

    const limit = maxSummonLimit ?? 3;
    if (this.summons.length >= limit) {
      let lowestIdx = 0;
      let lowestHp = Number.POSITIVE_INFINITY;
      for (let i = 0; i < this.summons.length; i++) {
        const s = this.summons[i];
        const hp = s?.hp ?? s?.maxHp ?? 0;
        if (hp < lowestHp) {
          lowestHp = hp;
          lowestIdx = i;
        }
      }
      const old = this.summons[lowestIdx];
      if (old?.mesh) this.scene.remove(old.mesh);
      old?.dispose?.();
      this.summons.splice(lowestIdx, 1);
    }

    this.scene.add(summon.mesh);
    this.summons.push(summon);
  }

  _explodeAt(x, y, radius, damage, slowDuration, slowFactor) {
    const list = this.getEnemiesInRadius(x, y, radius);
    list.forEach((e) => {
      if (e.isAlive()) {
        const { damage: dmg, isCrit } = this.applyCrit(damage, this.player);
        if (this._showDamageFloat) this._showDamageFloat(e.position.x, e.position.y, dmg, isCrit);
        e.takeDamage(dmg, x, y, true);
        if (slowDuration > 0 && e.speed != null) {
          const base = (e.config?.speed ?? 1) * 55;
          e.speed = base * (slowFactor ?? 0.5);
          setTimeout(() => { e.speed = base; }, slowDuration * 1000);
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
    this.screenShake = 0.25;
    this.hurtFlashUntil = this.time + 0.35;
  }

  onLevelUp(player) {
    this.levelUpSlowMotionUntil = performance.now() / 1000 + 0.3;
    this.pendingLevelUpPlayer = player;
  }

  async start() {
    await this._preloadAssets();
    await this._setupBackground();
    this._setupParticleSystem();
    await this._setupPlayer();
    this._setupHurtFlash();
    this._setupFloatTexts();
    this.inputManager.start(this.container);
    this.player.classInstance?.setGame(this);
    this.waveSystem.waveStartTime = this.time;
    this.spawnSystem.lastSpawnTime = this.time;
    this.lastChestDropTime = this.time;
    this.waveSystem.onWaveComplete = (wave) => {
      this.paused = true;
      this.upgradeSystem.showWaveReward(this.player, wave, () => {
        this.paused = false;
        this.waveSystem.advanceWave();
        this.waveSystem.isBetweenWaves = false;
        this.waveSystem.waveStartTime = this.time;
        const cfg = this.waveSystem.getWaveConfig();
        this.spawnSystem.spawnWave(cfg);
      });
    };
    if (this.chapterId) {
      this.waveSystem.advanceWave();
      const cfg = this.waveSystem.getWaveConfig();
      await this.spawnSystem.spawnWave(cfg);
    } else if (this.waveSystem.isSurvivalMode()) {
      this.waveSystem.advanceWave();
      const cfg = this.waveSystem.getWaveConfig();
      await this.spawnSystem.spawnWave(cfg);
    } else {
      const waveConfig = { enemies: [{ type: 'basicZombie', count: 6 }] };
      await this.spawnSystem.spawnWave(waveConfig);
    }
  }

  update(dt) {
    const now = performance.now() / 1000;
    if (this.levelUpSlowMotionUntil && now >= this.levelUpSlowMotionUntil) {
      this.levelUpSlowMotionUntil = null;
      this.paused = true;
      if (this.pendingLevelUpPlayer) {
        this.upgradeSystem.show(this.pendingLevelUpPlayer);
        this.pendingLevelUpPlayer = null;
      }
    }
    if (this.paused) return;

    if (this.levelUpSlowMotionUntil && now < this.levelUpSlowMotionUntil) {
      dt *= 0.3;
    }
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
        const { damage: dmg, isCrit } = this.applyCrit(p.damage, this.player);
        if (this._showDamageFloat) this._showDamageFloat(e.position.x, e.position.y, dmg, isCrit);
        e.takeDamage(dmg, p.x, p.y, true);
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

    this.waveSystem.update(this.time);
    this._collisionUpdate();
    if (!this.player.isAlive() && !this.gameOver) {
      this.gameOver = true;
      this.paused = true;
      this.onGameOver?.();
    }
    this._chestCollision();
    if (this.time - this.lastChestDropTime >= this.chestDropInterval) {
      this.lastChestDropTime = this.time;
      const angle = Math.random() * Math.PI * 2;
      const r = 120 + Math.random() * 80;
      const cx = this.player.position.x + Math.cos(angle) * r;
      const cy = this.player.position.y + Math.sin(angle) * r;
      if (Math.random() < (this.dropRateMultiplier ?? 1)) this._spawnChest(cx, cy, Math.random() < 0.15);
    }
    this.spawnSystem.trySpawn(this.time);
    this._cameraUpdate(dt);
    this._backgroundUpdate();
    this._updateUI(dt);
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
    const gameTime = this.time;

    this.enemies.forEach((e) => {
      if (!e.isAlive()) return;
      const er = e.getCollisionRadius();
      if (!CollisionSystem.circleCircle(px, py, pr, e.position.x, e.position.y, er)) return;
      const cooldown = e.attackCooldown ?? 0.6;
      if (gameTime >= (e.lastAttackTime ?? -1e9) + cooldown) {
        let dmg = e.damage;
        const player = this.player;
        if (player.classInstance?.constructor?.name === 'Warrior') {
          const near = this.getEnemiesInRadius(px, py, 85).length;
          if (near >= 3) dmg *= 0.75;
        }
        player.takeDamage(dmg);
        e.lastAttackTime = gameTime;
        if (e.slowOnHit && this.player.speed) {
          const base = this.player.baseSpeed * (this.player.speedMultiplierFromClass ?? 1);
          this.player.speed = base * (e.slowFactor ?? 0.5);
          const dur = (e.slowDuration ?? 1.5) * 1000;
          setTimeout(() => { if (this.player?.baseSpeed) this.player.speed = this.player.baseSpeed * (this.player.speedMultiplierFromClass ?? 1); }, dur);
        }
      }
    });

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      if (!e.isAlive()) {
        const deadX = e.position.x;
        const deadY = e.position.y;
        const knockDist = 45;
        this.enemies.forEach((other) => {
          if (other === e || !other.isAlive()) return;
          const dx = other.position.x - deadX;
          const dy = other.position.y - deadY;
          const d2 = dx * dx + dy * dy;
          if (d2 > 0 && d2 < knockDist * knockDist) {
            const d = Math.sqrt(d2);
            const push = (knockDist - d) / d;
            other.position.x += (dx / d) * push * 25;
            other.position.y += (dy / d) * push * 25;
            other.mesh.position.set(other.position.x, other.position.y, 0);
          }
        });
        this.killCount++;
        this.player.addExp(e.expDrop);
        if (this.player.classInstance?.constructor?.name === 'Summoner' && this.summons.length > 0 && Math.random() < 0.1) {
          let target = null;
          let lowestHpRatio = Number.POSITIVE_INFINITY;
          this.summons.forEach((s) => {
            const ratio = s && s.maxHp > 0 ? (s.hp ?? s.maxHp) / s.maxHp : 1;
            if (ratio < lowestHpRatio) {
              lowestHpRatio = ratio;
              target = s;
            }
          });
          if (target) {
            target.hp = target.maxHp;
            target.spawnTime = this.time;
            target.healthBar?.update?.(target.hp, target.maxHp);
          }
        }
        const burstCount = (e.type === 'fastRusher' || e.type === 'eliteEnemy') ? 16 : (e.type === 'boss' ? 24 : 10);
        this._spawnParticles(deadX, deadY, burstCount, e.type === 'boss' ? 0xaa2222 : 0x884400);
        this._showExpFloat(deadX, deadY, e.expDrop);
        const dropMult = this.dropRateMultiplier ?? 1;
        if (e.type === 'eliteEnemy' && Math.random() < 0.15 * dropMult) {
          this._spawnChest(deadX, deadY, Math.random() < 0.03 * dropMult);
        }
        this.enemyPool.release(e);
        this.enemies.splice(i, 1);
      }
    }
  }

  _spawnChest(x, y, isGolden) {
    const chest = new Chest(x, y, isGolden);
    chest.createMesh(this.assetLoader);
    this.scene.add(chest.mesh);
    this.chests.push(chest);
  }

  _chestCollision() {
    const pr = this.player.getCollisionRadius();
    const px = this.player.position.x;
    const py = this.player.position.y;
    for (let i = this.chests.length - 1; i >= 0; i--) {
      const c = this.chests[i];
      const dx = c.position.x - px;
      const dy = c.position.y - py;
      const d2 = dx * dx + dy * dy;
      const r = c.getCollisionRadius() + pr;
      if (d2 <= r * r) {
        this.scene.remove(c.mesh);
        c.dispose();
        this.chests.splice(i, 1);
        this.paused = true;
        this.upgradeSystem.showChestReward(this.player, c.isGolden, () => {
          this.paused = false;
        });
      }
    }
  }

  _showExpFloat(wx, wy, exp) {
    const el = document.createElement('div');
    el.textContent = '+' + exp;
    el.style.cssText = 'position:absolute;color:#8f8;font-weight:bold;font-size:18px;text-shadow:0 0 4px #000;white-space:nowrap;';
    this.floatTextContainer.appendChild(el);
    this.floatTexts.push({ wx, wy, life: 0.9, el });
  }

  _showDamageFloat(wx, wy, amount, isCrit = false) {
    const el = document.createElement('div');
    el.textContent = isCrit ? '暴击! ' + Math.floor(amount) : '-' + Math.floor(amount);
    el.style.cssText = 'position:absolute;font-weight:bold;font-size:' + (isCrit ? 18 : 16) + 'px;text-shadow:0 0 4px #000;white-space:nowrap;';
    el.style.color = isCrit ? '#ffaa00' : '#f88';
    this.floatTextContainer.appendChild(el);
    this.floatTexts.push({ wx, wy, life: isCrit ? 0.7 : 0.5, el });
  }

  _cameraUpdate(dt) {
    const targetX = this.player.position.x + this.cameraOffset.x;
    const targetY = this.player.position.y + this.cameraOffset.y;
    const shakeX = this.screenShake > 0 ? (Math.random() - 0.5) * 20 : 0;
    const shakeY = this.screenShake > 0 ? (Math.random() - 0.5) * 20 : 0;
    this.screenShake = Math.max(0, this.screenShake - dt * 2);

    const subtleShakeX = Math.sin(this.time * 8) * 1.2;
    const subtleShakeY = Math.cos(this.time * 6) * 1.2;

    const zoom = this.baseZoom + this.time * 0.04;
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
        const baseDamage = e.damage ?? e.config?.damage ?? 5;
        // 敌人每次攻击对召唤兽造成一段固定伤害，避免被 dt 稀释掉
        nearest.takeDamage(baseDamage * 0.7);
        e.attackSummonCooldown = 0.6;
      }
      if (e.attackSummonCooldown != null) e.attackSummonCooldown -= dt;
    });
  }

  _updateUI(dt) {
    const hpFill = document.getElementById('hp-fill');
    const xpFill = document.getElementById('xp-fill');
    const levelNum = document.getElementById('level-num');
    const killEl = document.getElementById('kill-count');
    const timerEl = document.getElementById('survival-timer');
    if (hpFill) hpFill.style.width = `${(this.player.hp / this.player.maxHp) * 100}%`;
    if (xpFill) xpFill.style.width = `${(this.player.exp / this.player.expToNext) * 100}%`;
    if (levelNum) levelNum.textContent = this.player.level;
    if (killEl) killEl.textContent = this.killCount;
    if (timerEl) {
      const m = Math.floor(this.time / 60);
      const s = Math.floor(this.time % 60);
      timerEl.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    const waveNumEl = document.getElementById('wave-num');
    const waveCountEl = document.getElementById('wave-count');
    if (waveNumEl && waveCountEl && this.waveSystem) {
      const wave = this.waveSystem.getCurrentWave();
      waveNumEl.style.display = '';
      waveCountEl.textContent = wave;
    }

    if (this.hurtFlashEl) {
      this.hurtFlashEl.style.opacity = this.time < this.hurtFlashUntil ? 1 : 0;
    }

    const v = new THREE.Vector3();
    for (let i = this.floatTexts.length - 1; i >= 0; i--) {
      const ft = this.floatTexts[i];
      ft.life -= dt;
      if (ft.life <= 0) {
        ft.el.remove();
        this.floatTexts.splice(i, 1);
        continue;
      }
      v.set(ft.wx, ft.wy, 0);
      v.project(this.camera);
      const cx = (v.x * 0.5 + 0.5) * this.container.clientWidth;
      const cy = (-v.y * 0.5 + 0.5) * this.container.clientHeight;
      ft.el.style.left = cx + 'px';
      ft.el.style.top = cy + 'px';
      ft.el.style.opacity = Math.max(0, ft.life / 0.9);
    }
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
    this.audio?.stop();
    if (this.vignetteEl?.parentNode) this.vignetteEl.parentNode.removeChild(this.vignetteEl);
    if (this.hurtFlashEl?.parentNode) this.hurtFlashEl.parentNode.removeChild(this.hurtFlashEl);
    if (this.floatTextContainer?.parentNode) this.floatTextContainer.parentNode.removeChild(this.floatTextContainer);
    if (this.renderer?.domElement?.parentNode) this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    this.chests.forEach((c) => { this.scene.remove(c.mesh); c.dispose(); });
    this.chests = [];
    this.parallaxBackground?.dispose();
    this.summons.forEach((s) => s.dispose?.());
    this.assetLoader.dispose();
    this.player.dispose();
    this.enemies.forEach((e) => e.dispose());
    this.renderer.dispose();
  }
}
