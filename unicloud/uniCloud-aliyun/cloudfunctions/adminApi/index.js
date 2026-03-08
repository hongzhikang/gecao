'use strict';

const COLLECTIONS = ['heroes', 'enemies', 'summons', 'difficulties', 'rewards', 'levels'];

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

async function verifyToken(db, token) {
  if (!token) return false;
  const res = await db.collection('admin_tokens').where({ token }).get();
  if (!res.data || res.data.length === 0) return false;
  const row = res.data[0];
  const expireAt = row.expireAt != null ? new Date(row.expireAt).getTime() : 0;
  return expireAt > Date.now();
}

exports.main = async (event, context) => {
  const token = getTokenFromEvent(event);
  const db = uniCloud.database();
  const valid = await verifyToken(db, token);
  if (!valid) {
    return { code: 401, msg: 'unauthorized' };
  }

  const body = parseBody(event);
  if (!body || !body.collection || !body.action) {
    return { code: 1, msg: 'missing collection or action' };
  }

  const { collection, action, id, data } = body;
  if (!COLLECTIONS.includes(collection)) {
    return { code: 1, msg: 'invalid collection' };
  }

  const col = db.collection(collection);

  try {
    if (action === 'list') {
      const res = await col.get();
      return { code: 0, msg: 'ok', data: res.data };
    }

    if (action === 'add') {
      const payload = data || {};
      if (collection === 'levels') {
        if (!payload.id) return { code: 1, msg: 'levels require id' };
      } else {
        if (!payload.code) return { code: 1, msg: 'document must have code' };
      }
      const res = await col.add(payload);
      return { code: 0, msg: 'ok', data: { id: res.id } };
    }

    if (action === 'update') {
      if (!id) return { code: 1, msg: 'update requires id' };
      const payload = data || {};
      await col.doc(id).update(payload);
      return { code: 0, msg: 'ok' };
    }

    if (action === 'remove') {
      if (!id) return { code: 1, msg: 'remove requires id' };
      await col.doc(id).remove();
      return { code: 0, msg: 'ok' };
    }

    return { code: 1, msg: 'invalid action' };
  } catch (err) {
    console.error('adminApi error:', err);
    return { code: 1, msg: err.message || String(err) };
  }
};
