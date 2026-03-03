/**
 * DataLoader.js - 统一游戏数据加载层
 * 当前从本地 JSON 读取，未来可无缝替换为后端接口。
 */

import classes from '../data/classes.json';
import enemies from '../data/enemies.json';
import summons from '../data/summons.json';
import difficulty from '../data/difficulty.json';
import rewards from '../data/rewards.json';
import levels from '../data/levels.json';

const TYPE_ALIAS = {
  zombie: 'basicZombie',
  fast_zombie: 'fastGhoul',
  tank_zombie: 'tankBrute',
  default: 'basicZombie',
};

const GAME_DATA = {
  classes,
  enemies,
  summons,
  difficulty,
  rewards,
  levels,
};

export function getGameData() {
  return GAME_DATA;
}

export function getClassConfig(id) {
  return GAME_DATA.classes[id] ?? null;
}

export function getEnemyConfig(type) {
  const key = TYPE_ALIAS[type] || type;
  const cfg = GAME_DATA.enemies[key] ?? GAME_DATA.enemies.basicZombie;
  return cfg;
}

export function getSummonConfigData(type) {
  if (type === 'global') return GAME_DATA.summons.global ?? null;
  return GAME_DATA.summons[type] ?? null;
}

export function getDifficultyConfig(id) {
  const key = id || 'normal';
  return GAME_DATA.difficulty[key] ?? GAME_DATA.difficulty.normal;
}

export function getRewardsConfig() {
  return GAME_DATA.rewards;
}

export function getLevelsConfig() {
  return GAME_DATA.levels;
}

export function getChapterConfig(id) {
  const lv = GAME_DATA.levels;
  if (!lv || !Array.isArray(lv.chapters)) return null;
  return lv.chapters.find((c) => c.id === id) ?? null;
}


