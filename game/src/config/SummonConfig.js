import { getGameData, getSummonConfigData } from '../core/DataLoader.js';

/**
 * SummonConfig.js - 召唤兽数据适配层
 * 所有数值来自 /src/data/summons.json。
 */

const RAW_SUMMONS = getGameData().summons;

export const SummonConfig = RAW_SUMMONS;

export const GLOBAL_SUMMON_LIMIT = (RAW_SUMMONS.global && RAW_SUMMONS.global.maxSummons) || 3;

export function getSummonConfig(type) {
  const raw = getSummonConfigData(type) ?? getSummonConfigData('poison_plant');
  if (!raw) return {};
  return {
    ...raw,
    damage: raw.damage ?? raw.attack,
    attackRange: raw.attackRange ?? raw.range,
  };
}

