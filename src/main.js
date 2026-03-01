/**
 * main.js - Entry point and game loop
 * Character select -> Difficulty select -> Game start. 60 FPS cap, resize.
 */

import { Game } from './Game.js';
import { getStoredDifficulty, setStoredDifficulty } from './config/DifficultyConfig.js';

const container = document.getElementById('game-container');
const characterSelect = document.getElementById('character-select');
const difficultySelect = document.getElementById('difficulty-select');

if (!container) throw new Error('No #game-container');
if (!characterSelect) throw new Error('No #character-select');

let game = null;
let lastTime = performance.now();
let updateAccum = 0;
let gameMode = 'classic';
const FPS_CAP = 60;
const FRAME_MIN = 1 / FPS_CAP;

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

function showGameOverPanel(g) {
  const panel = document.getElementById('game-over-panel');
  const statsEl = document.getElementById('game-over-stats');
  if (panel && statsEl) {
    const m = Math.floor(g.time / 60);
    const s = Math.floor(g.time % 60);
    const wave = g.waveSystem?.getCurrentWave?.() ?? 0;
    saveHighScore(g.killCount, Math.floor(g.time), wave);
    const hi = getHighScore();
    statsEl.innerHTML = `击杀 ${g.killCount} | 存活 ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}${wave > 0 ? ' | 波次 ' + wave : ''}<br><small style="color:#6a6;">最高: 击杀 ${hi.kills} | 存活 ${Math.floor(hi.time / 60)}:${String(hi.time % 60).padStart(2, '0')}${hi.wave > 0 ? ' | 波次 ' + hi.wave : ''}</small>`;
    panel.classList.remove('game-over-hidden');
  }
}

function startGame(selectedClass, difficultyId) {
  difficultyId = difficultyId || getStoredDifficulty();
  if (game) {
    game.dispose();
    game = null;
  }
  const gameOverPanel = document.getElementById('game-over-panel');
  if (gameOverPanel) gameOverPanel.classList.add('game-over-hidden');
  if (difficultySelect) difficultySelect.classList.remove('visible');
  characterSelect.classList.add('hidden');
  game = new Game(container, {
    class: selectedClass,
    difficulty: difficultyId,
    mode: gameMode,
    player: { speed: 180, maxHp: 100 },
  });
  game.onGameOver = () => showGameOverPanel(game);
  game.start().then(() => {
    lastTime = performance.now();
    requestAnimationFrame(loop);
  });
  window.addEventListener('resize', () => game.resize());
  window.game = game;
}

document.getElementById('game-over-restart')?.addEventListener('click', () => {
  const panel = document.getElementById('game-over-panel');
  if (panel) panel.classList.add('game-over-hidden');
  characterSelect.classList.remove('hidden');
  if (difficultySelect) difficultySelect.classList.remove('visible');
});

document.getElementById('mode-classic')?.addEventListener('click', () => { gameMode = 'classic'; });
document.getElementById('mode-survival')?.addEventListener('click', () => { gameMode = 'survival'; });

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
