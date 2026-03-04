/**
 * DataLoader.js - 统一游戏数据加载层
 * 通过后端接口 /api/game-data 获取 JSON 数据，并在模块加载时一次性完成。
 */

const TYPE_ALIAS = {
  zombie: 'basicZombie',
  fast_zombie: 'fastGhoul',
  tank_zombie: 'tankBrute',
  default: 'basicZombie',
};

const API_ENDPOINT = '/api/game-data';

const response = await fetch(API_ENDPOINT, { method: 'GET' });
if (!response.ok) {
  throw new Error(`Failed to load game data: ${response.status}`);
}
const json = await response.json();

const GAME_DATA = {
  classes: json.classes || {},
  enemies: json.enemies || {},
  summons: json.summons || {},
  difficulty: json.difficulty || {},
  rewards: json.rewards || {},
  levels: json.levels || {},
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

