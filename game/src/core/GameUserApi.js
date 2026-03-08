/**
 * GameUserApi.js - 游戏用户与存档接口
 * 调用 uniCloud 云函数 gameUser（需部署并开启 HTTP URL 化）
 * baseURL 可与 getGameData 同服务空间，路径为 /http/gameUser
 */

const GAME_USER_BASE = typeof import.meta !== 'undefined' && import.meta.env?.VITE_GAME_USER_API
  ? import.meta.env.VITE_GAME_USER_API
  : 'https://fc-mp-9f563f1a-6c3a-4b50-a88f-3418f67174bd.next.bspapp.com/http/gameUser';

const TOKEN_KEY = 'game_token';

export function getStoredToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch (_) {}
}

export function clearStoredToken() {
  setStoredToken(null);
}

async function request(action, body = {}, token = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(GAME_USER_BASE, {
    method: 'POST',
    headers,
    body: JSON.stringify({ action, ...body }),
  });
  const data = await res.json().catch(() => ({}));
  return data;
}

export async function login(username, password) {
  return request('login', { username, password });
}

export async function register(username, password) {
  return request('register', { username, password });
}

export async function getProfile() {
  const token = getStoredToken();
  if (!token) return { code: 401, msg: 'not logged in' };
  return request('getProfile', {}, token);
}

export async function addCoins(amount) {
  const token = getStoredToken();
  if (!token) return { code: 401, msg: 'not logged in' };
  return request('addCoins', { amount }, token);
}

export async function spendCoins(amount, cultivation) {
  const token = getStoredToken();
  if (!token) return { code: 401, msg: 'not logged in' };
  return request('spendCoins', { amount, cultivation }, token);
}
