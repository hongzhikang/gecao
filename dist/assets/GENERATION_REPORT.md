# 缺失资源生成报告

## 一、风格基准（已分析）

- **现有素材分辨率**：characters / enemies / boss 均为 **1376×768**
- **风格**：暗黑手绘、顶视角约 60°、主光左上前、阴影右下、中高对比、中低饱和+魔法高饱和
- **详细参数**：见同目录 `STYLE_BASELINE.md`

---

## 二、新生成文件清单

### 玩家攻击动画（/assets/characters/）

| 文件名 | 分辨率（实际） | 说明 |
|--------|----------------|------|
| warrior_attack_frame1.png | 2752×1536 | 战士起手，大剑后拉 |
| warrior_attack_frame2.png | 2752×1536 | 横扫中段 |
| warrior_attack_frame3.png | 2752×1536 | 爆发瞬间 |
| warrior_attack_frame4.png | 2752×1536 | 跟随手 |
| warrior_attack_frame5.png | 2752×1536 | 收招 |
| mage_attack_frame1.png | 2752×1536 | 法师法杖举起、能量聚集 |
| mage_attack_frame2.png | 2752×1536 | 能量增强 |
| mage_attack_frame3.png | 2752×1536 | 释放爆发 |
| mage_attack_frame4.png | 2752×1536 | 释放后 |
| mage_attack_frame5.png | 2752×1536 | 恢复 |
| summoner_cast_frame1.png | 2752×1536 | 召唤阵初现、手势起 |
| summoner_cast_frame2.png | 2752×1536 | 阵增强、绿暗能量 |
| summoner_cast_frame3.png | 2752×1536 | 阵最强、能量爆发 |
| summoner_cast_frame4.png | 2752×1536 | 召唤物显现 |
| summoner_cast_frame5.png | 2752×1536 | 收势 |

### 敌人攻击动画（/assets/enemies/）

| 文件名 | 分辨率（实际） | 说明 |
|--------|----------------|------|
| zombie_attack_frame1.png | 2752×1536 | 扑咬起手 |
| zombie_attack_frame2.png | 2752×1536 | 前抓 |
| zombie_attack_frame3.png | 2752×1536 | 爆发 |
| zombie_attack_frame4.png | 2752×1536 | 收招 |

### Boss 攻击动画（/assets/boss/）

| 文件名 | 分辨率（实际） | 说明 |
|--------|----------------|------|
| boss_attack_frame1.png | 2752×1536 | 挥爪起手 |
| boss_attack_frame2.png | 2752×1536 | 挥出 |
| boss_attack_frame3.png | 2752×1536 | 震地/爆发 |
| boss_attack_frame4.png | 2752×1536 | 跟随手 |
| boss_attack_frame5.png | 2752×1536 | 收爪 |
| boss_attack_frame6.png | 2752×1536 | 恢复 |

### 召唤兽（/assets/summons/）

| 文件名 | 分辨率（实际） | 说明 |
|--------|----------------|------|
| poison_plant.png | 2752×1536 | 紫绿毒藤 |
| fire_wolf.png | 2752×1536 | 黑红火狼 |
| stone_golem.png | 2752×1536 | 岩石+符文 |
| thunder_bird.png | 2752×1536 | 雷鸟、蓝电、半悬浮 |

---

## 三、风格与规格说明

| 项目 | 结果 |
|------|------|
| **分辨率** | 目标 1376×768；实际生成 **2752×1536**（等比 2×），可正常缩放使用 |
| **风格** | 按现有角色/敌人/Boss 的暗黑手绘、60° 顶视、左上前光统一生成 |
| **透明背景** | 全部为 PNG 透明底 |
| **覆盖情况** | **未覆盖任何已有正式图**，仅补全缺失路径；summons 目录原无文件，为全新写入 |

---

## 四、未修改的现有资源

以下未做任何修改，仅作风格参考与路径存在性使用：

- characters：warrior_idle, warrior_attack, warrior_hurt, mage_idle, mage_attack, summoner_idle, summoner_attack  
- enemies：zombie, cultist, shadow_wolf, demon_boss, demon_boss_rage  
- boss：demon_boss, demon_boss_rage  
- background：grass, lava, snow  

---

**生成时间**：本次会话  
**总新增文件数**：29
