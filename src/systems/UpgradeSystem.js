/**
 * UpgradeSystem.js - 升级三选一
 * 展示选项并应用升级
 */

export class UpgradeSystem {
  constructor(game) {
    this.game = game;
    this.options = [];
    this.panel = null;
    this.choicesContainer = null;
  }

  setPanel(panelEl, choicesEl) {
    this.panel = panelEl;
    this.choicesContainer = choicesEl;
  }

  buildOptions(player) {
    const opts = [];
    const classInst = player.classInstance;
    if (!classInst) return opts;

    const skillList = classInst.skills ?? [];
    for (const skill of skillList) {
      if (skill.level < skill.maxLevel) {
        opts.push({
          type: 'skill',
          id: skill.id,
          name: skill.name,
          description: `提升 ${skill.name} 等级 (${skill.level} -> ${skill.level + 1})`,
          apply: () => {
            skill.levelUp();
          },
        });
      }
    }

    const isSummoner = classInst.unlockedSummonTypes != null;
    if (isSummoner) {
      if (!classInst.unlockedSummonTypes.includes('fire_wolf')) {
        opts.push({
          type: 'summon_unlock',
          id: 'unlock_fire_wolf',
          name: '解锁火狼',
          description: '召唤时可出现火狼（近战高攻速）',
          apply: () => {
            classInst.unlockedSummonTypes.push('fire_wolf');
          },
        });
      }
      if (!classInst.unlockedSummonTypes.includes('thunder_bird')) {
        opts.push({
          type: 'summon_unlock',
          id: 'unlock_thunder_bird',
          name: '解锁雷鸟',
          description: '召唤时可出现雷鸟（闪电链）',
          apply: () => {
            classInst.unlockedSummonTypes.push('thunder_bird');
          },
        });
      }
      if (!classInst.unlockedSummonTypes.includes('stone_golem')) {
        opts.push({
          type: 'summon_unlock',
          id: 'unlock_stone_golem',
          name: '解锁石魔像',
          description: '召唤时可出现石魔像（高血量坦克）',
          apply: () => {
            classInst.unlockedSummonTypes.push('stone_golem');
          },
        });
      }
      opts.push({
        type: 'summon_stat',
        id: 'golem_hp',
        name: '石魔像生命',
        description: '石魔像生命 +25',
        apply: () => {
          const s = classInst.skills?.find((sk) => sk.summonHp != null);
          if (s) s.config.summonHpPerLevel = (s.config.summonHpPerLevel ?? 0) + 25;
        },
      });
      opts.push({
        type: 'summon_stat',
        id: 'plant_range',
        name: '植物攻击范围',
        description: '毒藤攻击范围 +15',
        apply: () => {
          const s = classInst.skills?.[0];
          if (s?.config) s.config.attackRange = (s.config.attackRange ?? 55) + 15;
        },
      });
    }

    opts.push({
      type: 'stat',
      id: 'maxHp',
      name: '生命提升',
      description: '最大生命 +15',
      apply: () => {
        player.maxHp += 15;
        player.hp = Math.min(player.hp + 15, player.maxHp);
      },
    });

    opts.push({
      type: 'stat',
      id: 'speed',
      name: '移速提升',
      description: '移动速度 +8%',
      apply: () => {
        player.speed *= 1.08;
      },
    });

    opts.push({
      type: 'stat',
      id: 'damage',
      name: '伤害提升',
      description: '全技能伤害 +5%',
      apply: () => {
        (classInst.skills ?? []).forEach((s) => {
          if (s.config.damage != null) s.config.damage = (s.config.damage ?? 10) * 1.05;
          if (s.config.summonDamage != null) s.config.summonDamage = (s.config.summonDamage ?? 5) * 1.05;
        });
      },
    });

    this.options = this._shuffle(opts).slice(0, 3);
    return this.options;
  }

  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  show(player) {
    this.buildOptions(player);
    if (!this.panel || !this.choicesContainer) return;

    this.choicesContainer.innerHTML = '';
    this.options.forEach((opt) => {
      const div = document.createElement('div');
      div.className = 'choice';
      div.innerHTML = `<strong>${opt.name}</strong><br><small>${opt.description}</small>`;
      div.onclick = () => {
        opt.apply();
        this.hide();
        if (this.game) this.game.paused = false;
      };
      this.choicesContainer.appendChild(div);
    });
    this.panel.classList.add('visible');
  }

  hide() {
    if (this.panel) this.panel.classList.remove('visible');
  }
}
