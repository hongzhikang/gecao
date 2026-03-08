'use strict';

const crypto = require('crypto');

const SALT = 'gecao-game-user-salt-v1';
const TOKEN_EXPIRE_DAYS = 30;
const MAX_ADD_COINS_PER_CALL = 500;

function parseBody(event) {
  if (typeof event.body === 'string') {
    try {
      return JSON.parse(event.body);
    } catch (e) {
      return null;
    }
  }
  return event.body || event;
}

function getTokenFromEvent(event) {
  const headers = event.headers || event.header || {};
  const auth = headers['Authorization'] || headers['authorization'] || '';
  if (auth.startsWith('Bearer ')) return auth.slice(7).trim();
  return null;
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(SALT + password).digest('hex');
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

async function verifyToken(db, token) {
  if (!token) return null;
  const res = await db.collection('game_tokens').where({ token }).get();
  if (!res.data || res.data.length === 0) return null;
  const row = res.data[0];
  const expireAt = row.expireAt != null ? new Date(row.expireAt).getTime() : 0;
  if (expireAt <= Date.now()) return null;
  return row.userId;
}

async function getOrCreatePlayerData(db, userId) {
  const col = db.collection('game_player_data');
  const res = await col.where({ userId }).get();
  if (res.data && res.data.length > 0) {
    return res.data[0];
  }
  await col.add({
    userId,
    coins: 0,
    cultivation: { maxHpLevel: 0, attackLevel: 0, attackSpeedLevel: 0 },
    updatedAt: new Date(),
  });
  const again = await col.where({ userId }).get();
  return again.data && again.data[0] ? again.data[0] : { coins: 0, cultivation: { maxHpLevel: 0, attackLevel: 0, attackSpeedLevel: 0 } };
}

exports.main = async (event, context) => {
  const body = parseBody(event);
  const db = uniCloud.database();
  const usersCol = db.collection('game_users');
  const tokensCol = db.collection('game_tokens');

  const action = body?.action;

  if (action === 'register') {
    if (!body || body.username == null || body.password == null) {
      return { code: 1, msg: 'missing username or password' };
    }
    const usernameTrim = String(body.username).trim();
    const passwordStr = String(body.password);
    if (!usernameTrim) return { code: 1, msg: 'username required' };
    if (passwordStr.length < 6) return { code: 1, msg: 'password at least 6 characters' };
    const existing = await usersCol.where({ username: usernameTrim }).get();
    if (existing.data && existing.data.length > 0) {
      return { code: 1, msg: 'username already exists' };
    }
    const passwordHash = hashPassword(passwordStr);
    const addRes = await usersCol.add({
      username: usernameTrim,
      passwordHash,
      createdAt: new Date(),
    });
    const userId = addRes.id;
    const token = generateToken();
    const expireAt = new Date(Date.now() + TOKEN_EXPIRE_DAYS * 24 * 60 * 60 * 1000);
    await tokensCol.add({ token, userId, expireAt });
    return { code: 0, msg: 'ok', data: { token, userId } };
  }

  if (action === 'login') {
    if (!body || body.username == null || body.password == null) {
      return { code: 1, msg: 'missing username or password' };
    }
    const usernameTrim = String(body.username).trim();
    const passwordStr = String(body.password);
    if (!usernameTrim) return { code: 1, msg: 'username required' };
    const userRes = await usersCol.where({ username: usernameTrim }).get();
    if (!userRes.data || userRes.data.length === 0) {
      return { code: 1, msg: 'username or password wrong' };
    }
    const user = userRes.data[0];
    const passwordHash = hashPassword(passwordStr);
    if (user.passwordHash !== passwordHash) {
      return { code: 1, msg: 'username or password wrong' };
    }
    const token = generateToken();
    const expireAt = new Date(Date.now() + TOKEN_EXPIRE_DAYS * 24 * 60 * 60 * 1000);
    await tokensCol.add({ token, userId: user._id, expireAt });
    return { code: 0, msg: 'ok', data: { token, userId: user._id } };
  }

  const token = getTokenFromEvent(event);
  const userId = await verifyToken(db, token);
  if (!userId) {
    return { code: 401, msg: 'unauthorized' };
  }

  if (action === 'getProfile') {
    const data = await getOrCreatePlayerData(db, userId);
    return {
      code: 0,
      msg: 'ok',
      data: {
        coins: data.coins ?? 0,
        cultivation: data.cultivation && typeof data.cultivation === 'object' ? data.cultivation : { maxHpLevel: 0, attackLevel: 0, attackSpeedLevel: 0 },
      },
    };
  }

  if (action === 'addCoins') {
    const amount = Math.min(Number(body?.amount) || 0, MAX_ADD_COINS_PER_CALL);
    if (amount <= 0) return { code: 1, msg: 'invalid amount' };
    const playerRes = await db.collection('game_player_data').where({ userId }).get();
    let docId;
    let currentCoins = 0;
    if (playerRes.data && playerRes.data.length > 0) {
      const row = playerRes.data[0];
      docId = row._id;
      currentCoins = row.coins ?? 0;
    } else {
      const addRes = await db.collection('game_player_data').add({
        userId,
        coins: 0,
        cultivation: { maxHpLevel: 0, attackLevel: 0, attackSpeedLevel: 0 },
        updatedAt: new Date(),
      });
      docId = addRes.id;
    }
    const newCoins = currentCoins + amount;
    await db.collection('game_player_data').doc(docId).update({
      coins: newCoins,
      updatedAt: new Date(),
    });
    return { code: 0, msg: 'ok', data: { coins: newCoins } };
  }

  if (action === 'spendCoins') {
    const amount = Number(body?.amount) || 0;
    const cultivation = body?.cultivation;
    if (amount <= 0 || !cultivation || typeof cultivation !== 'object') {
      return { code: 1, msg: 'invalid amount or cultivation' };
    }
    const playerRes = await db.collection('game_player_data').where({ userId }).get();
    if (!playerRes.data || playerRes.data.length === 0) {
      return { code: 1, msg: 'no player data' };
    }
    const row = playerRes.data[0];
    const currentCoins = row.coins ?? 0;
    if (currentCoins < amount) {
      return { code: 1, msg: 'insufficient coins' };
    }
    await db.collection('game_player_data').doc(row._id).update({
      coins: currentCoins - amount,
      cultivation: cultivation,
      updatedAt: new Date(),
    });
    return { code: 0, msg: 'ok', data: { coins: currentCoins - amount } };
  }

  return { code: 1, msg: 'invalid action' };
};
