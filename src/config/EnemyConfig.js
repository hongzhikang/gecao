/**
 * EnemyConfig.js - 敌人基础数值（整体血量下调20%、攻击力上调10%~15%）
 * maxHealth, attackDamage, moveSpeed, expReward, spawnWeight
 */

export const EnemyConfig = {
  basicZombie: {
    maxHealth: 32,
    attackDamage: 6,
    attackCooldown: 0.6,
    moveSpeed: 0.8,
    expReward: 5,
    spawnWeight: 10,
    radius: 20,
    spritePath: '/assets/enemies/zombie.png',
    attackFrameBase: '/assets/enemies/zombie_attack_frame',
    attackFrameCount: 4,
  },
  fastGhoul: {
    maxHealth: 20,
    attackDamage: 4,
    attackCooldown: 0.45,
    moveSpeed: 1.4,
    expReward: 4,
    spawnWeight: 8,
    radius: 18,
    spritePath: '/assets/enemies/zombie.png',
    attackFrameBase: '/assets/enemies/zombie_attack_frame',
    attackFrameCount: 4,
  },
  tankBrute: {
    maxHealth: 96,
    attackDamage: 12,
    attackCooldown: 0.9,
    moveSpeed: 0.5,
    expReward: 10,
    spawnWeight: 5,
    radius: 26,
    spritePath: '/assets/enemies/zombie.png',
    attackFrameBase: '/assets/enemies/zombie_attack_frame',
    attackFrameCount: 4,
  },
  eliteEnemy: {
    maxHealth: 160,
    attackDamage: 17,
    attackCooldown: 0.55,
    moveSpeed: 1.0,
    expReward: 25,
    spawnWeight: 3,
    radius: 24,
    spritePath: '/assets/enemies/zombie.png',
    attackFrameBase: '/assets/enemies/zombie_attack_frame',
    attackFrameCount: 4,
  },
  slowZombie: {
    maxHealth: 28,
    attackDamage: 4,
    attackCooldown: 0.7,
    moveSpeed: 0.6,
    expReward: 6,
    spawnWeight: 7,
    radius: 20,
    slowOnHit: true,
    slowDuration: 1.5,
    slowFactor: 0.5,
    spritePath: '/assets/enemies/zombie.png',
    attackFrameBase: '/assets/enemies/zombie_attack_frame',
    attackFrameCount: 4,
  },
  shieldEnemy: {
    maxHealth: 40,
    attackDamage: 5,
    attackCooldown: 0.65,
    moveSpeed: 0.7,
    expReward: 8,
    spawnWeight: 5,
    radius: 22,
    shieldAmount: 15,
    spritePath: '/assets/enemies/zombie.png',
    attackFrameBase: '/assets/enemies/zombie_attack_frame',
    attackFrameCount: 4,
  },
  fastRusher: {
    maxHealth: 14,
    attackDamage: 6,
    attackCooldown: 0.35,
    moveSpeed: 1.8,
    expReward: 5,
    spawnWeight: 9,
    radius: 16,
    spritePath: '/assets/enemies/zombie.png',
    attackFrameBase: '/assets/enemies/zombie_attack_frame',
    attackFrameCount: 4,
  },
  boss: {
    maxHealth: 640,
    attackDamage: 29,
    attackCooldown: 1.0,
    moveSpeed: 0.7,
    expReward: 100,
    spawnWeight: 1,
    radius: 48,
    spritePath: '/assets/boss/demon_boss.png',
    attackFrameBase: '/assets/boss/boss_attack_frame',
    attackFrameCount: 6,
    isBoss: true,
  },
};

export const BASE_ENEMY_SPEED = 55;

const TYPE_ALIAS = {
  zombie: 'basicZombie',
  fast_zombie: 'fastGhoul',
  tank_zombie: 'tankBrute',
  default: 'basicZombie',
};

export function resolveEnemyType(type) {
  return TYPE_ALIAS[type] || type;
}

export function getConfig(type) {
  const resolved = resolveEnemyType(type);
  return EnemyConfig[resolved] ?? EnemyConfig.basicZombie;
}
