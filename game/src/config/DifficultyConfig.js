import { getGameData } from '../core/DataLoader.js';

/**
 * DifficultyConfig.js - 难度数据适配层
 * 所有系数来自后端返回的 difficulty 配置。
 *
 * 使用方案一：延迟初始化。
 * 在 DataLoader.initGameData() 之后调用 initDifficultyConfig() 来填充 DifficultyConfig。
 */

export let DifficultyConfig = {};

export function initDifficultyConfig() {
  const RAW_DIFFICULTY = getGameData().difficulty || {};

  DifficultyConfig = Object.fromEntries(
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
}

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
