import { getGameData, getEnemyConfig as getEnemyConfigFromData } from '../core/DataLoader.js';

/**
 * EnemyConfig.js - 敌人数据适配层
 * 所有数值来自 /src/data/enemies.json，由 DataLoader 统一加载。
 */

export const EnemyConfig = getGameData().enemies;

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
  return getEnemyConfigFromData(type);
}
