'use strict';

const path = require('path');

function parseBody(event) {
  if (typeof event === 'string') {
    try {
      return JSON.parse(event);
    } catch (e) {
      return null;
    }
  }
  if (event && typeof event.body === 'string') {
    try {
      return JSON.parse(event.body);
    } catch (e) {
      return null;
    }
  }
  return event && event.body ? event.body : event;
}

exports.main = async (event, context) => {
  const body = parseBody(event);

  if (!body || !body.file || !body.filename) {
    return { code: 1, msg: 'missing file or filename' };
  }

  const { file, filename, folder } = body;

  try {
    // 支持 dataURL 或纯 base64
    let base64 = file;
    const commaIndex = base64.indexOf('base64,');
    if (commaIndex !== -1) {
      base64 = base64.slice(commaIndex + 'base64,'.length);
    }

    const buffer = Buffer.from(base64, 'base64');

    const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const ext = path.extname(safeName) || '.png';
    const nameWithoutExt = path.basename(safeName, ext);
    const ts = Date.now();
    const cloudPath =
      (folder ? folder.replace(/\\/g, '/').replace(/\/+$/, '') + '/' : '') +
      ts +
      '_' +
      nameWithoutExt +
      ext;

    const res = await uniCloud.uploadFile({
      cloudPath,
      fileContent: buffer,
    });

    const fileID = res.fileID || res.fileId || res.file_id || res.url || cloudPath;

    return {
      code: 0,
      msg: 'ok',
      data: {
        fileID,
        url: res.url || fileID,
        cloudPath,
      },
    };
  } catch (err) {
    console.error('uploadFile error:', err);
    return {
      code: 1,
      msg: err.message || String(err),
    };
  }
};

