/**
 * UpgradeSystem.js - 升级三选一
 * 展示选项并应用升级
 */

import { getRewardsConfig } from '../core/DataLoader.js';

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

  _treasurePool(player) {
    const game = this.game;
    const rewards = getRewardsConfig();
    return [
      {
        cfg: rewards.attackBoost,
        apply: () => {
          const v = rewards.attackBoost?.value ?? 0.1;
          player.damageMultiplier = (player.damageMultiplier || 1) * (1 + v);
        },
      },
      {
        cfg: rewards.attackSpeedBoost,
        apply: () => {
          const v = rewards.attackSpeedBoost?.value ?? 0.1;
          player.attackSpeedMultiplier = (player.attackSpeedMultiplier || 1) * (1 + v);
        },
      },
      {
        cfg: rewards.maxHealthBoost,
        apply: () => {
          const v = rewards.maxHealthBoost?.value ?? 20;
          player.baseMaxHp += v;
          player.maxHp += v;
          player.hp = Math.min(player.hp + v, player.maxHp);
        },
      },
      {
        cfg: rewards.moveSpeedBoost,
        apply: () => {
          const v = rewards.moveSpeedBoost?.value ?? 0.1;
          player.baseSpeed *= 1 + v;
          player.speed = player.baseSpeed * (player.speedMultiplierFromClass ?? 1);
        },
      },
      {
        cfg: rewards.areaBoost,
        apply: () => {
          const v = rewards.areaBoost?.value ?? 0.15;
          player.areaDamageMultiplier = (player.areaDamageMultiplier || 1) * (1 + v);
        },
      },
      {
        cfg: rewards.lifesteal,
        apply: () => {
          const v = rewards.lifesteal?.value ?? 0.05;
          player.lifestealPercent = (player.lifestealPercent || 0) + v * 100;
        },
      },
      {
        cfg: rewards.heal,
        apply: () => {
          const v = rewards.heal?.value ?? 0.4;
          player.hp = Math.min(player.maxHp, player.hp + Math.floor(player.maxHp * v));
        },
      },
      {
        cfg: rewards.shield,
        apply: () => {
          const v = rewards.shield?.value ?? 30;
          player.shieldHp = (player.shieldHp || 0) + v;
        },
      },
      {
        cfg: rewards.screenBurst,
        apply: () => {
          const v = rewards.screenBurst?.value ?? 50;
          if (game?.getEnemiesInRadius && game?.player) {
            const list = game.getEnemiesInRadius(
              game.player.position.x,
              game.player.position.y,
              9999
            );
            list.forEach((e) => {
              if (e.isAlive()) e.takeDamage(v, game.player.position.x, game.player.position.y, true);
            });
          }
        },
      },
    ].map((item) => ({
      name: item.cfg?.name ?? '',
      desc: item.cfg?.description ?? '',
      apply: item.apply,
    }));
  }

  showWaveReward(player, wave, onClose) {
    const pool = [
      { name: '伤害提升(本波)', desc: '本波内伤害 +25%', apply: () => { player.damageMultiplier = (player.damageMultiplier || 1) * 1.25; } },
      { name: '治疗', desc: '恢复 30% 最大生命', apply: () => { player.hp = Math.min(player.maxHp, player.hp + Math.floor(player.maxHp * 0.3)); } },
      { name: '护盾', desc: '获得 20 点临时护盾', apply: () => { player.shieldHp = (player.shieldHp || 0) + 20; } },
      { name: '移速提升(本波)', desc: '本波内移速 +15%', apply: () => { player.speed *= 1.15; } },
    ];
    const opts = this._shuffle([...pool]).slice(0, 3);
    const panel = document.getElementById('wave-reward-panel');
    const title = document.getElementById('wave-reward-title');
    const choices = document.getElementById('wave-reward-choices');
    if (!panel || !choices) {
      if (onClose) onClose();
      return;
    }
    choices.innerHTML = '';
    if (title) title.textContent = `波次 ${wave} 完成！选一项奖励`;
    opts.forEach((opt) => {
      const div = document.createElement('div');
      div.className = 'choice';
      div.innerHTML = `<strong>${opt.name}</strong><br><small>${opt.desc}</small>`;
      div.onclick = () => {
        opt.apply();
        this.hideWaveReward();
        if (onClose) onClose();
      };
      choices.appendChild(div);
    });
    panel.classList.add('visible');
  }

  hideWaveReward() {
    const panel = document.getElementById('wave-reward-panel');
    if (panel) panel.classList.remove('visible');
  }

  showChestReward(player, isGolden, onClose) {
    const pool = this._treasurePool(player);
    const opts = this._shuffle([...pool]).slice(0, 3);
    const panel = document.getElementById('chest-reward-panel');
    const title = document.getElementById('chest-reward-title');
    const choices = document.getElementById('chest-reward-choices');
    if (!panel || !choices) {
      if (onClose) onClose();
      return;
    }
    choices.innerHTML = '';
    if (isGolden) {
      if (title) title.textContent = '黄金宝箱奖励';
      opts.forEach((opt) => opt.apply());
      const msg = document.createElement('p');
      msg.style.cssText = 'color:#ffd700;margin:12px 0;';
      msg.textContent = '你获得了：' + opts.map((o) => o.name).join('、');
      choices.appendChild(msg);
      const btn = document.createElement('div');
      btn.className = 'choice';
      btn.textContent = '继续战斗';
      btn.onclick = () => {
        this.hideChestReward();
        if (onClose) onClose();
      };
      choices.appendChild(btn);
    } else {
      if (title) title.textContent = '宝箱开启！选择一项强化';
      opts.forEach((opt) => {
        const div = document.createElement('div');
        div.className = 'choice';
        div.innerHTML = `<strong>${opt.name}</strong><br><small>${opt.desc}</small>`;
        div.onclick = () => {
          opt.apply();
          this.hideChestReward();
          if (onClose) onClose();
        };
        choices.appendChild(div);
      });
    }
    panel.classList.add('visible');
  }

  hideChestReward() {
    const panel = document.getElementById('chest-reward-panel');
    if (panel) panel.classList.remove('visible');
  }
}
