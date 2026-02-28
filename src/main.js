/**
 * main.js - 入口与游戏主循环
 * 先显示角色选择，选定后再创建游戏并启动
 */

import { Game } from './Game.js';

const container = document.getElementById('game-container');
const characterSelect = document.getElementById('character-select');
if (!container) throw new Error('No #game-container');
if (!characterSelect) throw new Error('No #character-select');

let game = null;
let lastTime = performance.now();

function loop(now) {
  if (!game) return;
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;
  game.update(dt);
  game.render();
  requestAnimationFrame(loop);
}

function startGame(selectedClass) {
  characterSelect.classList.add('hidden');
  game = new Game(container, {
    class: selectedClass,
    player: { speed: 180, maxHp: 100, expToNext: 10 },
  });
  game.start().then(() => {
    lastTime = performance.now();
    requestAnimationFrame(loop);
  });
  window.addEventListener('resize', () => game.resize());
  window.game = game;
}

characterSelect.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    const cls = card.getAttribute('data-class');
    if (cls) startGame(cls);
  });
});
