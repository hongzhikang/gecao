import { getGameData, getEnemyConfig as getEnemyConfigFromData } from '../core/DataLoader.js';

/**
 * EnemyConfig.js - 敌人数据适配层
 * 所有数值来自后端返回的 enemies 配置。
 *
 * 为了避免在模块加载时直接访问未初始化的 GAME_DATA，
 * 使用延迟初始化：在 DataLoader.initGameData() 之后调用 initEnemyConfig()。
 */

export let EnemyConfig = {};

export function initEnemyConfig() {
  EnemyConfig = getGameData().enemies || {};
}

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
