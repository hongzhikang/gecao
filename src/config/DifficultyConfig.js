/**
 * DifficultyConfig.js - 难度系数（统一 difficultyMultipliers 管理）
 * 普通 100% / 困难 130% HP、150% 攻、140% 数量、90% 经验 / 地狱 170%、220%、180%、80%
 */

export const DifficultyConfig = {
  easy: {
    id: 'easy',
    name: '简单',
    enemyHealthMultiplier: 0.8,
    enemyDamageMultiplier: 0.8,
    spawnRateMultiplier: 0.8,
    enemyCountMultiplier: 0.8,
    expGainMultiplier: 1.2,
    eliteWeightBonus: 0,
  },
  normal: {
    id: 'normal',
    name: '普通',
    enemyHealthMultiplier: 1,
    enemyDamageMultiplier: 1,
    spawnRateMultiplier: 1,
    enemyCountMultiplier: 1,
    expGainMultiplier: 1,
    eliteWeightBonus: 0,
  },
  hard: {
    id: 'hard',
    name: '困难',
    enemyHealthMultiplier: 1.3,
    enemyDamageMultiplier: 1.5,
    spawnRateMultiplier: 1.4,
    enemyCountMultiplier: 1.4,
    expGainMultiplier: 0.9,
    eliteWeightBonus: 0,
  },
  hell: {
    id: 'hell',
    name: '地狱',
    enemyHealthMultiplier: 1.7,
    enemyDamageMultiplier: 2.2,
    spawnRateMultiplier: 1.8,
    enemyCountMultiplier: 1.8,
    expGainMultiplier: 0.8,
    eliteWeightBonus: 1.5, // 精英怪权重乘数（在原有 weight 上再乘）
  },
  // 兼容旧存档
  nightmare: {
    id: 'nightmare',
    name: '地狱',
    enemyHealthMultiplier: 1.7,
    enemyDamageMultiplier: 2.2,
    spawnRateMultiplier: 1.8,
    enemyCountMultiplier: 1.8,
    expGainMultiplier: 0.8,
    eliteWeightBonus: 1.5,
  },
};

const STORAGE_KEY = 'gecao_difficulty';

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
