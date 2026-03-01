/**
 * InputManager.js - 键盘输入管理
 * WASD / 方向键
 */

export class InputManager {
  constructor() {
    this.keys = {};
    this.axis = { x: 0, y: 0 };
    this.joystickAxis = { x: 0, y: 0 };
    this._joyEl = null;
    this._joyTouchId = null;
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

  _setupJoystick(container) {
    if (!container || this._joyEl) return;
    const el = document.createElement('div');
    el.id = 'virtual-joystick';
    el.style.cssText = 'position:absolute;left:24px;bottom:80px;width:100px;height:100px;border-radius:50%;background:rgba(80,80,80,0.5);border:3px solid rgba(255,255,255,0.3);touch-action:none;pointer-events:auto;z-index:15;';
    const stick = document.createElement('div');
    stick.style.cssText = 'position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;background:rgba(200,200,200,0.8);';
    el.appendChild(stick);
    const radius = 50;
    el.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this._joyTouchId = e.changedTouches[0].identifier;
      const rect = el.getBoundingClientRect();
      const touch = e.changedTouches[0];
      let dx = (touch.clientX - rect.left - rect.width / 2) / radius;
      let dy = (touch.clientY - rect.top - rect.height / 2) / radius;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      if (len > 1) { dx /= len; dy /= len; }
      this.joystickAxis.x = dx;
      this.joystickAxis.y = dy;
      stick.style.transform = `translate(${dx * 30}px, ${dy * 30}px)`;
    }, { passive: false });
    el.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!e.touches.length) return;
      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();
      let dx = (touch.clientX - rect.left - rect.width / 2) / radius;
      let dy = (touch.clientY - rect.top - rect.height / 2) / radius;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      if (len > 1) { dx /= len; dy /= len; }
      this.joystickAxis.x = dx;
      this.joystickAxis.y = dy;
      stick.style.transform = `translate(${dx * 30}px, ${dy * 30}px)`;
    }, { passive: false });
    el.addEventListener('touchend', () => {
      this._joyTouchId = null;
      this.joystickAxis.x = 0;
      this.joystickAxis.y = 0;
      stick.style.transform = 'translate(0,0)';
    });
    el.addEventListener('touchcancel', () => {
      this._joyTouchId = null;
      this.joystickAxis.x = 0;
      this.joystickAxis.y = 0;
      stick.style.transform = 'translate(0,0)';
    });
    container.style.position = container.style.position || 'relative';
    container.appendChild(el);
    this._joyEl = el;
  }

  start(container) {
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    if (container && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) this._setupJoystick(container);
  }

  stop() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    if (this._joyEl?.parentNode) this._joyEl.parentNode.removeChild(this._joyEl);
    this._joyEl = null;
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
