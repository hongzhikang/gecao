import { getGameData } from '../core/DataLoader.js';

/**
 * DifficultyConfig.js - 难度数据适配层
 * 所有系数来自 /src/data/difficulty.json。
 */

const RAW_DIFFICULTY = getGameData().difficulty;

export const DifficultyConfig = Object.fromEntries(
  Object.entries(RAW_DIFFICULTY).map(([id, cfg]) => {
    const enemyHealthMultiplier = cfg.enemyHealthMultiplier ?? cfg.enemyHpMultiplier ?? 1;
    const enemyDamageMultiplier = cfg.enemyDamageMultiplier ?? 1;
    const spawnRateMultiplier = cfg.spawnRateMultiplier ?? cfg.spawnMultiplier ?? 1;
    return [
      id,
      {
        ...cfg,
        enemyHealthMultiplier,
        enemyDamageMultiplier,
        spawnRateMultiplier,
      },
    ];
  })
);

const STORAGE_KEY = 'gecao_difficulty';

export function getDifficultyMultiplier(difficultyId) {
  const id = difficultyId === 'nightmare' ? 'hell' : (difficultyId || 'normal');
  return DifficultyConfig[id] ?? DifficultyConfig.normal;
}

export function getStoredDifficulty() {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === 'nightmare') return 'hell';
    return DifficultyConfig[s] ? s : 'normal';
  } catch {
    return 'normal';
  }
}

export function setStoredDifficulty(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id === 'nightmare' ? 'hell' : id);
  } catch (_) {}
}
