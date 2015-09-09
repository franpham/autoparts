import Autoparts from './Autoparts.js';

export default class Cosmetic extends Autoparts {

  constructor(color, material, controls, cost, size, maker) {
    super(cost, size, maker);
    this.partColor = color;
    this.partMaterial = material;
    this.hasControls = controls;
  }

  get color() {
    return this.partColor;
  }

  set color(color) {
    this.color = color;
  }

  get material() {
    return this.partMaterial;
  }

  set material(material) {
    this.partMaterial = material;
  }

  get hasControls() {
    return this.hasControls;
  }

  set hasControls(controls) {
    this.hasControls = controls;
  }
}