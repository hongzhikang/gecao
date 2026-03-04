import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// 读取 backend-api/data 下的 JSON 文件并聚合为一个接口返回
function loadJson(relPath) {
  const full = path.join(__dirname, 'data', relPath);
  const raw = fs.readFileSync(full, 'utf-8');
  return JSON.parse(raw);
}

app.get('/api/game-data', (req, res) => {
  try {
    const classes = loadJson('classes.json');
    const enemies = loadJson('enemies.json');
    const summons = loadJson('summons.json');
    const difficulty = loadJson('difficulty.json');
    const rewards = loadJson('rewards.json');
    const levels = loadJson('levels.json');
    res.json({ classes, enemies, summons, difficulty, rewards, levels });
  } catch (err) {
    console.error('Failed to read game data JSON:', err);
    res.status(500).json({ error: 'Failed to load game data' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend API listening on http://localhost:${PORT}`);
});

