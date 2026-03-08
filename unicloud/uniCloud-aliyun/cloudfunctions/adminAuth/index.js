'use strict';

const crypto = require('crypto');

const SALT = 'gecao-admin-salt-v1';
const TOKEN_EXPIRE_DAYS = 7;

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

function hashPassword(password) {
  return crypto.createHash('sha256').update(SALT + password).digest('hex');
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

exports.main = async (event, context) => {
  const body = parseBody(event);
  if (!body || !body.action || !body.username || body.password == null) {
    return { code: 1, msg: 'missing action, username or password' };
  }

  const { action, username, password } = body;
  const usernameTrim = String(username).trim();
  const passwordStr = String(password);

  if (!usernameTrim) {
    return { code: 1, msg: 'username required' };
  }
  if (passwordStr.length < 6) {
    return { code: 1, msg: 'password at least 6 characters' };
  }

  const db = uniCloud.database();
  const usersCol = db.collection('admin_users');
  const tokensCol = db.collection('admin_tokens');

  if (action === 'register') {
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
    return { code: 0, msg: 'ok', data: { token } };
  }

  if (action === 'login') {
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
    return { code: 0, msg: 'ok', data: { token } };
  }

  return { code: 1, msg: 'invalid action' };
};
