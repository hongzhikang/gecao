import { getGameData, getSummonConfigData } from '../core/DataLoader.js';

/**
 * SummonConfig.js - 召唤兽数据适配层
 * 所有数值来自后端返回的 summons 配置。
 *
 * 为避免在模块加载时访问未初始化的 GAME_DATA，
 * 使用延迟初始化：在 DataLoader.initGameData() 之后调用 initSummonConfig()。
 */

export let SummonConfig = {};
export let GLOBAL_SUMMON_LIMIT = 3;

export function initSummonConfig() {
  const RAW_SUMMONS = getGameData().summons || {};
  SummonConfig = RAW_SUMMONS;
  GLOBAL_SUMMON_LIMIT = (RAW_SUMMONS.global && RAW_SUMMONS.global.maxSummons) || 3;
}

export function getSummonConfig(type) {
  const raw = getSummonConfigData(type) ?? getSummonConfigData('poison_plant');
  if (!raw) return {};
  return {
    ...raw,
    damage: raw.damage ?? raw.attack,
    attackRange: raw.attackRange ?? raw.range,
  };
}

