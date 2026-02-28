/**
 * assetLoader.js - 统一图片加载封装
 * 所有纹理通过此模块加载，路径规范见注释
 */

import * as THREE from 'three';

export const textureLoader = new THREE.TextureLoader();

/** 将路径解析为当前页面的绝对 URL，确保从 public 正确加载 */
export function resolveAssetUrl(path) {
  if (typeof path !== 'string') return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = typeof window !== 'undefined' ? window.location.origin : '';
  return path.startsWith('/') ? base + path : base + '/' + path;
}

/**
 * 加载单张纹理（Promise）
 * @param {string} path - 如 /assets/characters/warrior_idle.png
 * @returns {Promise<THREE.Texture>}
 */
export function loadTexture(path) {
  const url = resolveAssetUrl(path);
  return new Promise((resolve, reject) => {
    textureLoader.load(
      url,
      (tex) => {
        if (tex) {
          tex.flipY = true;
          if (tex.colorSpace !== undefined) tex.colorSpace = THREE.SRGBColorSpace;
          else if (tex.encoding !== undefined) tex.encoding = THREE.sRGBEncoding;
        }
        resolve(tex);
      },
      undefined,
      (err) => {
        console.warn('[AssetLoader] 加载失败:', path, url, err);
        reject(err);
      }
    );
  });
}

/**
 * 加载多帧动画纹理（技能等）
 * 文件命名：xxx_1.png, xxx_2.png, ...
 * @param {string} basePath - 如 /assets/skills/warrior_spin（不含 _1）
 * @param {number} count - 帧数，如 5
 * @returns {Promise<THREE.Texture[]>}
 */
export function loadFrames(basePath, count) {
  return Promise.all(
    Array.from({ length: count }, (_, i) =>
      loadTexture(`${basePath}_${i + 1}.png`)
    )
  );
}
