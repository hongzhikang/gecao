/**
 * HealthBar.js - 单位头顶血条
 * PlaneGeometry 红色血条，跟随单位，scale.x = currentHP / maxHP
 */

import * as THREE from 'three';

export class HealthBar {
  constructor(width = 24, height = 3) {
    this.width = width;
    this.height = height;
    this.maxWidth = width;
    this.mesh = null;
    this._createMesh();
  }

  _createMesh() {
    const geo = new THREE.PlaneGeometry(this.width, this.height);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x330000,
      depthTest: false,
    });
    const bg = new THREE.Mesh(geo, mat);
    bg.position.z = 0.02;

    const fillGeo = new THREE.PlaneGeometry(this.width, this.height);
    const fillMat = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      depthTest: false,
    });
    this.fillMesh = new THREE.Mesh(fillGeo, fillMat);
    this.fillMesh.position.z = 0.03;

    this.mesh = new THREE.Group();
    this.mesh.add(bg);
    this.mesh.add(this.fillMesh);
  }

  setPosition(x, y, yOffset = 0) {
    this.mesh.position.set(x, y + yOffset, 0);
  }

  update(currentHP, maxHP) {
    const pct = maxHP > 0 ? Math.max(0, Math.min(1, currentHP / maxHP)) : 0;
    this.fillMesh.scale.x = pct;
    this.fillMesh.position.x = -(this.width / 2) * (1 - pct);
  }

  dispose() {
    this.mesh?.children?.forEach((c) => {
      c.geometry?.dispose();
      c.material?.dispose();
    });
  }
}
