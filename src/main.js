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
const FPS_CAP = 60;
const FRAME_MIN = 1 / FPS_CAP;

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
    statsEl.textContent = `击杀 ${g.killCount} | 存活 ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
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
