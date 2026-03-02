/**
 * BaseSummon.js - 召唤兽基类
 * HP、血条、可被敌人攻击、攻击逻辑
 */

import * as THREE from 'three';
import { HealthBar } from '../../ui/HealthBar.js';

export class BaseSummon {
  constructor(config = {}) {
    this.type = config.type || 'base';
    this.position = { x: 0, y: 0 };
    this.hp = config.hp ?? 40;
    this.maxHp = this.hp;
    this.damage = config.damage ?? 8;
    this.attackRange = config.attackRange ?? 55;
    this.attackCooldown = config.attackCooldown ?? 1;
    this.attackCooldownRemain = 0;
    this.slowOnHit = config.slowOnHit ?? false;
    this.slowDuration = config.slowDuration ?? 0.8;
    this.slowFactor = config.slowFactor ?? 0.7;
    this.duration = config.duration ?? 18;
    this.spawnTime = 0;
    this.orbitAngle = 0;
    this.orbitRadius = config.orbitRadius ?? 70;
    this.orbitSpeed = 1.2;
    this.state = 'orbit';
    this.targetEnemy = null;
    this.mesh = null;
    this.game = null;
    this.healthBar = new HealthBar(28, 4);
    this.healthBarYOffset = 22;
  }

  setGame(game) {
    this.game = game;
  }

  async createMesh(assetLoader, spritePath) {
    const path = spritePath || '/assets/characters/summoner_idle.png';
    const mat = await assetLoader.createSpriteMaterialAsync(path, { width: 32, height: 32 });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(36, 36, 1);
    this.mesh = new THREE.Group();
    this.mesh.add(sprite);
    this.healthBar.mesh.position.y = this.healthBarYOffset;
    this.mesh.add(this.healthBar.mesh);
    return this.mesh;
  }

  takeDamage(amount) {
    this.hp = Math.max(0, this.hp - amount);
    this.healthBar.update(this.hp, this.maxHp);
  }

  isAlive() {
    return this.hp > 0;
  }

  update(dt) {
    if (!this.isAlive()) return;
    this.attackCooldownRemain -= dt;
    this.healthBar.update(this.hp, this.maxHp);
    if (this.mesh) this.mesh.position.set(this.position.x, this.position.y, 0);
  }

  dispose() {
    this.healthBar?.dispose();
    if (this.mesh) {
      this.mesh.children?.forEach((c) => {
        c.material?.map?.dispose();
        c.material?.dispose();
      });
    }
  }
}
