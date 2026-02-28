/**
 * InputManager.js - 键盘输入管理
 * WASD / 方向键
 */

export class InputManager {
  constructor() {
    this.keys = {};
    this.axis = { x: 0, y: 0 };
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
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

  start() {
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
  }

  stop() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    this.keys = {};
    this.axis = { x: 0, y: 0 };
  }

  getAxis() {
    return { ...this.axis };
  }

  isKeyDown(code) {
    return !!this.keys[code];
  }
}
