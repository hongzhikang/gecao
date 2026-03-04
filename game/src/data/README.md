# 数据驱动说明（Game Data）

本项目的所有「平衡数值」都集中在 `src/data/` 下的 JSON 文件中，并通过 `DataLoader` 统一读取，游戏代码**不直接依赖具体 JSON 路径**。

## 1. 文件一览

- `classes.json`：职业基础数据（战士 / 法师 / 召唤师）
- `enemies.json`：所有敌人（普通、小怪、精英、Boss）
- `summons.json`：所有召唤兽 + 全局召唤上限
- `difficulty.json`：难度系数（简单 / 普通 / 困难 / 地狱 / 噩梦）
- `rewards.json`：宝箱奖励条目及数值

修改上述 JSON 即可调整平衡，无需动任何 JS 代码。

## 2. 访问方式：DataLoader

统一入口：`src/core/DataLoader.js`

```js
import {
  getGameData,
  getClassConfig,
  getEnemyConfig,
  getSummonConfigData,
  getDifficultyConfig,
  getRewardsConfig,
} from '../core/DataLoader.js';
```

- **完整数据**：`const data = getGameData();`
  - `data.classes / data.enemies / data.summons / data.difficulty / data.rewards`
- **职业**：`getClassConfig('warrior' | 'mage' | 'summoner')`
- **敌人**：`getEnemyConfig(type)`
  - 支持别名：`zombie -> basicZombie` 等
- **召唤兽**：`getSummonConfigData('fire_wolf' | 'poison_plant' | 'stone_golem' | 'thunder_bird')`
- **难度**：`getDifficultyConfig('easy' | 'normal' | 'hard' | 'hell' | 'nightmare')`
- **宝箱奖励**：`getRewardsConfig()` 返回 `rewards.json` 同结构对象

> 规则：新代码如果需要平衡数值，**只能通过上述方法读数据**，不要再新建硬编码常量。

## 3. JSON 字段约定（简要）

### 3.1 `classes.json`

```json
{
  "warrior": {
    "name": "战士",
    "maxHealth": 140,
    "attack": 24,
    "attackSpeed": 1.0,
    "critChance": 0.1,
    "damageReduction": 0.1
  }
}
```

- `maxHealth`：职业基础生命
- `attack`：用于技能/职业系数的基础攻击（目前仅作参考；技能自身仍由各自 JSON/配置定义）
- `attackSpeed`：职业攻速系数
- `critChance`：额外暴击率（0.1 = 10%）
- `damageReduction`：伤害减免比例（0.1 = 10%）

### 3.2 `enemies.json`

```json
{
  "basicZombie": {
    "maxHealth": 32,
    "attack": 7,
    "attackCooldown": 0.6,
    "speed": 0.8,
    "exp": 5,
    "spawnWeight": 10,
    "radius": 20,
    "spritePath": "/assets/enemies/zombie.png",
    "attackFrameBase": "/assets/enemies/zombie_attack_frame",
    "attackFrameCount": 4
  }
}
```

- `attack` / `maxHealth` / `speed` 等会被 `Enemy` 和刷怪系统直接使用。

### 3.3 `summons.json`

```json
{
  "fire_wolf": {
    "maxHealth": 80,
    "attack": 14,
    "attackSpeed": 1.3,
    "speed": 1.4,
    "attackCooldown": 0.45,
    "range": 60,
    "duration": 15,
    "inheritAttackPercent": 0.2,
    "defense": 2
  },
  "global": {
    "maxSummons": 3
  }
}
```

- `global.maxSummons` 决定场上召唤兽总上限。
- 各字段会在 `SummonConfig` 适配后供具体召唤物类使用。

### 3.4 `difficulty.json`

```json
{
  "hard": {
    "name": "困难",
    "enemyHpMultiplier": 1.3,
    "enemyDamageMultiplier": 1.5,
    "spawnMultiplier": 1.4,
    "enemyCountMultiplier": 1.4,
    "expGainMultiplier": 0.9,
    "dropRateMultiplier": 0.85,
    "eliteWeightBonus": 0
  }
}
```

- `enemyHpMultiplier` / `enemyDamageMultiplier`：作用到敌人生命与攻击。
- `spawnMultiplier`：刷怪速度系数。
- 其余字段用于经验、掉落与精英权重。

### 3.5 `rewards.json`

```json
{
  "attackBoost": {
    "name": "攻击力提升",
    "description": "攻击力提升 +10%",
    "type": "multiplier",
    "target": "damageMultiplier",
    "value": 0.1
  }
}
```

- `type` / `target` / `value` 由 `UpgradeSystem` 解释并施加到玩家属性上。

## 4. 未来接入后端的方式

- 目前 `DataLoader.js` 直接 `import` 本地 JSON。
- 未来如果要从后端获取：
  - 将 `DataLoader` 内的静态 `import` 替换为 `fetch('/api/game-config')` 等方式。
  - 在 `GAME_DATA` 构建前，对后端返回的数据做一次结构整理，使其仍然满足本 README 中的约定。
- 业务代码只依赖 `getGameData()/getXXXConfig()`，因此无需改动。

