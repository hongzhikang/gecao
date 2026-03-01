/**
 * InputManager.js - 键盘 + 移动端全屏触摸
 * PC: WASD/方向键；移动端: 任意位置触摸滑动即移动，Y 轴与屏幕一致（滑上=角色向上）
 */

export class InputManager {
  constructor() {
    this.keys = {};
    this.axis = { x: 0, y: 0 };
    this.joystickAxis = { x: 0, y: 0 };
    this._joyEl = null;
    this._touchId = null;
    this._touchContainer = null;
    this._touchSetup = false;
    this._touchStartX = 0;
    this._touchStartY = 0;
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
  }

  _onKeyDown(e) {
    this.keys[e.code] = true;
    this._updateAxis();
  }

  _onKeyUp(e) {
    this.keys[e.code] = false;
    this._updateAxis();
  }

  _updateAxis() {
    let x = 0,
      y = 0;
    if (this.keys['KeyW'] || this.keys['ArrowUp']) y += 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) y -= 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) x -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) x += 1;
    this.axis.x = Math.max(-1, Math.min(1, x));
    this.axis.y = Math.max(-1, Math.min(1, y));
  }

  /** 屏幕 Y 向下为正，游戏向上为正：滑动方向 = 移动方向，故取 -dy */
  _onTouchStart(e) {
    if (this._touchId != null) return;
    const t = e.changedTouches[0];
    this._touchId = t.identifier;
    this._touchStartX = t.clientX;
    this._touchStartY = t.clientY;
  }

  _onTouchMove(e) {
    if (this._touchId == null) return;
    const t = Array.from(e.touches).find((x) => x.identifier === this._touchId);
    if (!t) return;
    e.preventDefault();
    const maxDist = 80;
    let dx = (t.clientX - this._touchStartX) / maxDist;
    let dy = (t.clientY - this._touchStartY) / maxDist;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    if (len > 1) { dx /= len; dy /= len; }
    this.joystickAxis.x = dx;
    this.joystickAxis.y = -dy;
  }

  _onTouchEnd(e) {
    const t = Array.from(e.changedTouches).find((x) => x.identifier === this._touchId);
    if (t) {
      this._touchId = null;
      this.joystickAxis.x = 0;
      this.joystickAxis.y = 0;
    }
  }

  _setupTouch(container) {
    if (!container || this._touchSetup) return;
    this._touchSetup = true;
    this._touchContainer = container;
    container.addEventListener('touchstart', this._onTouchStart, { passive: true });
    container.addEventListener('touchmove', this._onTouchMove, { passive: false });
    container.addEventListener('touchend', this._onTouchEnd, { passive: true });
    container.addEventListener('touchcancel', this._onTouchEnd, { passive: true });
  }

  start(container) {
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    if (container && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) this._setupTouch(container);
  }

  stop() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    if (this._joyEl?.parentNode) this._joyEl.parentNode.removeChild(this._joyEl);
    this._joyEl = null;
    if (this._touchContainer) {
      this._touchContainer.removeEventListener('touchstart', this._onTouchStart);
      this._touchContainer.removeEventListener('touchmove', this._onTouchMove);
      this._touchContainer.removeEventListener('touchend', this._onTouchEnd);
      this._touchContainer.removeEventListener('touchcancel', this._onTouchEnd);
    }
    this._touchContainer = null;
    this._touchId = null;
    this.keys = {};
    this.axis = { x: 0, y: 0 };
    this.joystickAxis = { x: 0, y: 0 };
  }

  getAxis() {
    const j = this.joystickAxis;
    if (Math.abs(j.x) > 0.1 || Math.abs(j.y) > 0.1) return { x: j.x, y: j.y };
    this._updateAxis();
    return { ...this.axis };
  }

  isKeyDown(code) {
    return !!this.keys[code];
  }
}
