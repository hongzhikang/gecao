/**
 * CollisionSystem.js - 2D 圆形/矩形碰撞检测
 */

export class CollisionSystem {
  /**
   * 圆形与圆形
   */
  static circleCircle(x1, y1, r1, x2, y2, r2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const d = Math.sqrt(dx * dx + dy * dy);
    return d <= r1 + r2;
  }

  /**
   * 点与圆
   */
  static pointCircle(px, py, cx, cy, r) {
    const dx = px - cx;
    const dy = py - cy;
    return dx * dx + dy * dy <= r * r;
  }

  /**
   * 圆形与矩形（AABB）
   */
  static circleRect(cx, cy, cr, rx, ry, rw, rh) {
    const closestX = Math.max(rx, Math.min(cx, rx + rw));
    const closestY = Math.max(ry, Math.min(cy, ry + rh));
    const dx = cx - closestX;
    const dy = cy - closestY;
    return dx * dx + dy * dy <= cr * cr;
  }

  /**
   * 矩形与矩形
   */
  static rectRect(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (
      x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2
    );
  }

  /**
   * 获取两圆最近点（用于推开）
   */
  static circlePushOut(x1, y1, r1, x2, y2, r2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < 1e-6) return { x: 0, y: 0 };
    const overlap = r1 + r2 - d;
    if (overlap <= 0) return { x: 0, y: 0 };
    const nx = dx / d;
    const ny = dy / d;
    return { x: -nx * overlap, y: -ny * overlap };
  }
}
