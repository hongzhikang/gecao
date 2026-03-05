/**
 * DataLoader.js - 统一游戏数据加载层
 * 通过 uniCloud 云函数 getGameData 获取 JSON 数据。
 * 提供 initGameData() 在游戏开始前初始化一次，后续同步读取。
 */

const TYPE_ALIAS = {
  zombie: 'basicZombie',
  fast_zombie: 'fastGhoul',
  tank_zombie: 'tankBrute',
  default: 'basicZombie',
};

// 注意：将此地址替换为你在 uniCloud 控制台中看到的 getGameData 访问示例
const API_ENDPOINT = 'https://fc-mp-9f563f1a-6c3a-4b50-a88f-3418f67174bd.next.bspapp.com/http/getGameData';

let GAME_DATA = null;
let initPromise = null;

export async function initGameData() {
  if (GAME_DATA) return GAME_DATA;
  if (!initPromise) {
    initPromise = (async () => {
      const res = await fetch(API_ENDPOINT, { method: 'GET' });
      if (!res.ok) {
        throw new Error(`Failed to load game data: HTTP ${res.status}`);
      }
      const body = await res.json();

      // 兼容云函数返回 { code, msg, data }
      const payload = body.data || body;

      GAME_DATA = {
        classes: payload.classes || {},
        enemies: payload.enemies || {},
        summons: payload.summons || {},
        difficulty: payload.difficulty || {},
        rewards: payload.rewards || {},
        levels: payload.levels || {},
      };
      return GAME_DATA;
    })();
  }
  return initPromise;
}

export function getGameData() {
  if (!GAME_DATA) {
    throw new Error('Game data not initialized. Call initGameData() before accessing configs.');
  }
  return GAME_DATA;
}

export function getClassConfig(id) {
  return getGameData().classes[id] ?? null;
}

export function getEnemyConfig(type) {
  const key = TYPE_ALIAS[type] || type;
  const cfg = getGameData().enemies[key] ?? getGameData().enemies.basicZombie;
  return cfg;
}

export function getSummonConfigData(type) {
  if (type === 'global') return getGameData().summons.global ?? null;
  return getGameData().summons[type] ?? null;
}

export function getDifficultyConfig(id) {
  const key = id || 'normal';
  return getGameData().difficulty[key] ?? getGameData().difficulty.normal;
}

export function getRewardsConfig() {
  return getGameData().rewards;
}

export function getLevelsConfig() {
  return getGameData().levels;
}

export function getChapterConfig(id) {
  const lv = getGameData().levels;
  if (!lv || !Array.isArray(lv.chapters)) return null;
  return lv.chapters.find((c) => c.id === id) ?? null;
}

