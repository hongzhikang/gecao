/**
 * 列表图片列：默认占位图与取图逻辑
 */

const DEFAULT_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect fill='%23e8e8e8' width='40' height='40'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='11' font-family='sans-serif'%3E%E6%97%A0%E5%9B%BE%3C/text%3E%3C/svg%3E";

export { DEFAULT_PLACEHOLDER };

/**
 * 从行数据中取表格缩略图 URL
 * @param {Object} row - 表格行数据
 * @param {{ main: string, fallback?: string }} options - main 主字段名，fallback 可选备用（如 'frameUrls.0' 表示 frameUrls[0]）
 * @returns {string} 图片 URL 或默认占位图 Data URL
 */
export function getTableImageSrc(row, options) {
  if (!row || !options?.main) return DEFAULT_PLACEHOLDER;
  const main = row[options.main];
  if (main && typeof main === "string") return main;
  if (options.fallback) {
    const parts = options.fallback.split(".");
    let v = row;
    for (const p of parts) {
      if (v == null) break;
      const i = parseInt(p, 10);
      v = Number.isNaN(i) ? v[p] : v[i];
    }
    if (v && typeof v === "string") return v;
  }
  return DEFAULT_PLACEHOLDER;
}
