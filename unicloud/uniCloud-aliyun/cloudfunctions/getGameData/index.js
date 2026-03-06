'use strict';

exports.main = async (event, context) => {
  const db = uniCloud.database();

  try {
    // 1. 并行读取 6 个集合
    const [
      heroesRes,
      enemiesRes,
      summonsRes,
      difficultiesRes,
      rewardsRes,
      levelsRes
    ] = await Promise.all([
      db.collection('heroes').get(),
      db.collection('enemies').get(),
      db.collection('summons').get(),
      db.collection('difficulties').get(),
      db.collection('rewards').get(),
      db.collection('levels').get()
    ]);

    // 2. 按 code / id 转成字典对象，结构贴近你原来的 JSON

    // 职业 -> classes（含游戏用图：spritePath、帧数、帧图列表）
    const classes = {};
    heroesRes.data.forEach(doc => {
      classes[doc.code] = {
        name: doc.name,
        maxHealth: doc.maxHealth,
        attack: doc.attack,
        attackSpeed: doc.attackSpeed,
        critChance: doc.critChance,
        damageReduction: doc.damageReduction,
        range: doc.range,
        maxSummons: doc.maxSummons,
        spritePath: doc.spritePath,
        frameCount: doc.frameCount,
        frameUrls: Array.isArray(doc.frameUrls) ? doc.frameUrls : undefined
      };
    });

    // 敌人 -> enemies
    const enemies = {};
    enemiesRes.data.forEach(doc => {
      const { _id, ...rest } = doc;
      enemies[doc.code] = rest;
    });

    // 召唤兽 -> summons
    const summons = {};
    summonsRes.data.forEach(doc => {
      const { _id, ...rest } = doc;
      summons[doc.code] = rest;
    });

    // 难度 -> difficulty
    const difficulty = {};
    difficultiesRes.data.forEach(doc => {
      const { _id, ...rest } = doc;
      difficulty[doc.code] = rest;
    });

    // 奖励 -> rewards
    const rewards = {};
    rewardsRes.data.forEach(doc => {
      const { _id, ...rest } = doc;
      rewards[doc.code] = rest;
    });

    // 关卡 -> levels（按照原 levels.json 结构：{ chapters: [...] }）
    const levels = {
      chapters: levelsRes.data.map(doc => {
        const { _id, ...rest } = doc;
        // rest 里已经有 id/name/description/background/difficultyId/waves
        return rest;
      })
    };

    // 3. 返回给前端
    return {
      code: 0,
      msg: 'ok',
      data: {
        classes,
        enemies,
        summons,
        difficulty,
        rewards,
        levels
      }
    };
  } catch (err) {
    console.error('getGameData error:', err);
    return {
      code: 1,
      msg: 'failed to load game data',
      error: String(err)
    };
  }
};