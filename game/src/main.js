/**
 * main.js - Entry point and game loop
 * Login (optional) -> Character select -> Difficulty select -> Game start. 60 FPS cap, resize.
 */

import { Game } from './Game.js';
import { getStoredDifficulty, setStoredDifficulty, getDifficultyMultiplier, initDifficultyConfig } from './config/DifficultyConfig.js';
import { initEnemyConfig } from './config/EnemyConfig.js';
import { initSummonConfig } from './config/SummonConfig.js';
import { initGameData, getLevelsConfig } from './core/DataLoader.js';
import { getStoredToken, setStoredToken, login, register, getProfile, addCoins } from './core/GameUserApi.js';

const container = document.getElementById('game-container');
const characterSelect = document.getElementById('character-select');
const difficultySelect = document.getElementById('difficulty-select');
const loginPanel = document.getElementById('login-panel');
const cultivationPanel = document.getElementById('cultivation-panel');

if (!container) throw new Error('No #game-container');
if (!characterSelect) throw new Error('No #character-select');

let game = null;
let lastTime = performance.now();
let updateAccum = 0;
let gameMode = 'classic';
let selectedChapterId = null;
const FPS_CAP = 60;
const FRAME_MIN = 1 / FPS_CAP;

function renderChapterButtons() {
  const listEl = document.getElementById('chapter-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  try {
    const levels = getLevelsConfig();
    const chapters = levels?.chapters;
    if (!Array.isArray(chapters)) return;
    chapters.forEach((ch) => {
      const id = ch.id;
      const name = ch.name || id || '关卡';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'diff-btn chapter-btn';
      btn.setAttribute('data-chapter-id', id);
      btn.style.cssText = 'padding:6px 16px;font-size:14px;';
      btn.textContent = name;
      listEl.appendChild(btn);
    });
  } catch (_) {}
}

const HIGHSCORE_KEY = 'gecao_highscore';
function getHighScore() {
  try {
    const raw = localStorage.getItem(HIGHSCORE_KEY);
    return raw ? JSON.parse(raw) : { kills: 0, time: 0, wave: 0 };
  } catch { return { kills: 0, time: 0, wave: 0 }; }
}
function saveHighScore(kills, time, wave) {
  const cur = getHighScore();
  const next = { kills: Math.max(cur.kills, kills), time: Math.max(cur.time, time), wave: Math.max(cur.wave, wave || 0) };
  try { localStorage.setItem(HIGHSCORE_KEY, JSON.stringify(next)); } catch (_) {}
}

function loop(now) {
  if (!game) return;
  const elapsed = (now - lastTime) / 1000;
  lastTime = now;
  updateAccum += Math.min(elapsed, 0.1);
  while (updateAccum >= FRAME_MIN) {
    game.update(FRAME_MIN);
    updateAccum -= FRAME_MIN;
  }
  game.render();
  requestAnimationFrame(loop);
}

async function showGameOverPanel(g) {
  const panel = document.getElementById('game-over-panel');
  const statsEl = document.getElementById('game-over-stats');
  if (panel && statsEl) {
    const m = Math.floor(g.time / 60);
    const s = Math.floor(g.time % 60);
    const wave = g.waveSystem?.getCurrentWave?.() ?? 0;
    saveHighScore(g.killCount, Math.floor(g.time), wave);
    const hi = getHighScore();
    let coinsLine = '';
    const token = getStoredToken();
    const earned = g.earnedCoins ?? 0;
    if (token && earned > 0) {
      const res = await addCoins(earned);
      if (res.code === 0) coinsLine = `<br><span style="color:#daa520;font-size:16px;font-weight:bold;">本局获得金币 +${earned}</span>`;
      else coinsLine = `<br><span style="color:#888;">金币同步失败</span>`;
    }
    statsEl.innerHTML = `击杀 ${g.killCount} | 存活 ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}${wave > 0 ? ' | 波次 ' + wave : ''}${coinsLine}<br><small style="color:#6a6;">最高: 击杀 ${hi.kills} | 存活 ${Math.floor(hi.time / 60)}:${String(hi.time % 60).padStart(2, '0')}${hi.wave > 0 ? ' | 波次 ' + hi.wave : ''}</small>`;
    panel.classList.remove('game-over-hidden');
  }
}

function showLogin() {
  if (loginPanel) loginPanel.classList.remove('hidden');
  if (characterSelect) characterSelect.classList.add('hidden');
  if (cultivationPanel) cultivationPanel.classList.remove('visible');
}

function showCharacterSelect() {
  if (loginPanel) loginPanel.classList.add('hidden');
  if (characterSelect) characterSelect.classList.remove('hidden');
  if (cultivationPanel) cultivationPanel.classList.remove('visible');
  refreshMenuCoins();
}

function showCultivation() {
  if (loginPanel) loginPanel.classList.add('hidden');
  if (characterSelect) characterSelect.classList.add('hidden');
  if (cultivationPanel) cultivationPanel.classList.add('visible');
  loadCultivationPanel();
}

async function refreshMenuCoins() {
  const topBar = document.getElementById('menu-top-bar');
  const el = document.getElementById('menu-coins');
  const guestHint = document.getElementById('menu-guest-hint');
  const token = getStoredToken();
  if (topBar) topBar.classList.toggle('hidden', !token);
  if (guestHint) guestHint.textContent = token ? '' : '登录后可同步金币与人物培育';
  if (!el) return;
  if (!token) {
    el.textContent = '';
    return;
  }
  const res = await getProfile();
  if (res.code === 0 && res.data) el.textContent = `金币: ${res.data.coins ?? 0}`;
  else el.textContent = '';
}

const CULT_COST_BASE = 50;
function cultivationCost(level) {
  return CULT_COST_BASE * (level + 1);
}

async function loadCultivationPanel() {
  const token = getStoredToken();
  const listEl = document.getElementById('cult-list');
  const coinsEl = document.getElementById('cult-coins');
  const msgEl = document.getElementById('cult-msg');
  if (!token) {
    if (msgEl) msgEl.textContent = '请先登录';
    return;
  }
  if (msgEl) msgEl.textContent = '';
  const res = await getProfile();
  if (res.code !== 0 || !res.data) {
    if (coinsEl) coinsEl.textContent = '金币: 0';
    if (listEl) listEl.innerHTML = '';
    return;
  }
  const { coins, cultivation } = res.data;
  const c = cultivation || { maxHpLevel: 0, attackLevel: 0, attackSpeedLevel: 0 };
  if (coinsEl) coinsEl.textContent = `金币: ${coins ?? 0}`;
  const items = [
    { key: 'maxHpLevel', name: '生命上限', level: c.maxHpLevel ?? 0 },
    { key: 'attackLevel', name: '攻击力', level: c.attackLevel ?? 0 },
    { key: 'attackSpeedLevel', name: '攻速', level: c.attackSpeedLevel ?? 0 },
  ];
  if (!listEl) return;
  listEl.innerHTML = items.map((item) => {
    const nextCost = cultivationCost(item.level);
    const canAfford = (coins ?? 0) >= nextCost;
    return `<div class="cult-row">
      <span><span class="cult-name">${item.name}</span><span class="cult-level">Lv.${item.level}</span></span>
      <span><span class="cult-cost">下一级 ${nextCost}</span>
      <button type="button" class="cult-upgrade-btn" data-key="${item.key}" ${canAfford ? '' : 'disabled'}>升级</button></span>
    </div>`;
  }).join('');
  listEl.querySelectorAll('.cult-upgrade-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const key = btn.getAttribute('data-key');
      const newCult = { ...c, [key]: (c[key] ?? 0) + 1 };
      const cost = cultivationCost(c[key] ?? 0);
      const { spendCoins } = await import('./core/GameUserApi.js');
      const r = await spendCoins(cost, newCult);
      const mEl = document.getElementById('cult-msg');
      if (r.code === 0) {
        await loadCultivationPanel();
        if (mEl) {
          mEl.textContent = '升级成功';
          mEl.style.color = '#6a6';
          setTimeout(() => { mEl.textContent = ''; mEl.style.color = ''; }, 1500);
        }
      } else {
        if (mEl) { mEl.textContent = r.msg || '升级失败'; mEl.style.color = ''; }
      }
    });
  });
}

async function startGame(selectedClass, difficultyId) {
  difficultyId = difficultyId || getStoredDifficulty();
  setStoredDifficulty(difficultyId);
  if (game) {
    game.dispose();
    game = null;
  }
  const gameOverPanel = document.getElementById('game-over-panel');
  if (gameOverPanel) gameOverPanel.classList.add('game-over-hidden');
  if (difficultySelect) difficultySelect.classList.remove('visible');
  characterSelect.classList.add('hidden');

  await initGameData();
  initDifficultyConfig();
  initEnemyConfig();
  initSummonConfig();

  let playerBonus = {};
  const token = getStoredToken();
  if (token) {
    const res = await getProfile();
    if (res.code === 0 && res.data?.cultivation) {
      const cv = res.data.cultivation;
      const maxHpL = cv.maxHpLevel ?? 0, atkL = cv.attackLevel ?? 0, aspdL = cv.attackSpeedLevel ?? 0;
      playerBonus = {
        maxHp: maxHpL * 10,
        attack: atkL * 0.02,
        attackSpeed: aspdL * 0.05,
      };
    }
  }

  game = new Game(container, {
    class: selectedClass,
    difficulty: difficultyId,
    mode: gameMode,
    player: { speed: 180, maxHp: 100 },
    chapterId: selectedChapterId || null,
    playerBonus,
  });
  game.onGameOver = () => showGameOverPanel(game);

  const loadingOverlay = document.getElementById('loading-overlay');
  const loadingBarFill = document.getElementById('loading-bar-fill');
  if (loadingOverlay) loadingOverlay.classList.add('visible');
  if (loadingBarFill) loadingBarFill.style.width = '0%';
  await game.start({
    onProgress(percent) {
      if (loadingBarFill) loadingBarFill.style.width = Math.round(percent * 100) + '%';
      if (percent >= 1 && loadingOverlay) loadingOverlay.classList.remove('visible');
    },
  });
  if (loadingOverlay) loadingOverlay.classList.remove('visible');

  lastTime = performance.now();
  requestAnimationFrame(loop);
  window.addEventListener('resize', () => game.resize());
  window.game = game;
}

document.getElementById('game-over-restart')?.addEventListener('click', () => {
  const panel = document.getElementById('game-over-panel');
  if (panel) panel.classList.add('game-over-hidden');
  showCharacterSelect();
  if (difficultySelect) difficultySelect.classList.remove('visible');
});

document.getElementById('login-btn')?.addEventListener('click', async () => {
  const username = document.getElementById('login-username')?.value?.trim();
  const password = document.getElementById('login-password')?.value ?? '';
  const msgEl = document.getElementById('login-msg');
  if (!username) { if (msgEl) msgEl.textContent = '请输入用户名'; return; }
  if (password.length < 6) { if (msgEl) msgEl.textContent = '密码至少6位'; return; }
  if (msgEl) msgEl.textContent = '登录中…';
  const res = await login(username, password);
  if (res.code === 0 && res.data?.token) {
    setStoredToken(res.data.token);
    if (msgEl) msgEl.textContent = '';
    showCharacterSelect();
  } else {
    if (msgEl) msgEl.textContent = res.msg || '登录失败';
  }
});

document.getElementById('register-btn')?.addEventListener('click', async () => {
  const username = document.getElementById('login-username')?.value?.trim();
  const password = document.getElementById('login-password')?.value ?? '';
  const msgEl = document.getElementById('login-msg');
  if (!username) { if (msgEl) msgEl.textContent = '请输入用户名'; return; }
  if (password.length < 6) { if (msgEl) msgEl.textContent = '密码至少6位'; return; }
  if (msgEl) msgEl.textContent = '注册中…';
  const res = await register(username, password);
  if (res.code === 0 && res.data?.token) {
    setStoredToken(res.data.token);
    if (msgEl) msgEl.textContent = '';
    showCharacterSelect();
  } else {
    if (msgEl) msgEl.textContent = res.msg || '注册失败';
  }
});

document.getElementById('guest-btn')?.addEventListener('click', () => {
  setStoredToken(null);
  showCharacterSelect();
});

document.getElementById('btn-cultivation')?.addEventListener('click', () => {
  showCultivation();
});

document.getElementById('cult-back')?.addEventListener('click', () => {
  showCharacterSelect();
});

if (getStoredToken()) showCharacterSelect();
else showLogin();

document.getElementById('mode-classic')?.addEventListener('click', () => {
  gameMode = 'classic';
  document.querySelectorAll('#character-select .diff-btn[id^="mode-"]').forEach((b) => b.classList.remove('selected'));
  document.getElementById('mode-classic')?.classList.add('selected');
});
document.getElementById('mode-survival')?.addEventListener('click', () => {
  gameMode = 'survival';
  document.querySelectorAll('#character-select .diff-btn[id^="mode-"]').forEach((b) => b.classList.remove('selected'));
  document.getElementById('mode-survival')?.classList.add('selected');
});

document.getElementById('chapter-none')?.addEventListener('click', () => {
  selectedChapterId = null;
  document.querySelectorAll('#character-select .chapter-btn').forEach((b) => b.classList.remove('selected'));
  document.getElementById('chapter-none')?.classList.add('selected');
});

document.getElementById('chapter-buttons-wrap')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.chapter-btn');
  if (!btn || btn.id === 'chapter-none') return;
  const id = btn.getAttribute('data-chapter-id');
  if (id === '' || id == null) return;
  selectedChapterId = id;
  document.querySelectorAll('#character-select .chapter-btn').forEach((b) => b.classList.remove('selected'));
  btn.classList.add('selected');
});

initGameData().then(() => {
  renderChapterButtons();
}).catch(() => {});

characterSelect.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    const cls = card.getAttribute('data-class');
    if (!cls) return;
    characterSelect.classList.add('hidden');
    if (difficultySelect) {
      difficultySelect.classList.add('visible');
      difficultySelect.querySelectorAll('.diff-btn').forEach((btn) => {
        btn.onclick = () => {
          const diff = btn.getAttribute('data-diff');
          setStoredDifficulty(diff);
          startGame(cls, diff);
        };
      });
    } else {
      startGame(cls);
    }
  });
});
