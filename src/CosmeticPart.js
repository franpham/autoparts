import Autoparts from './Autoparts';

export default class CosmeticPart extends Autoparts {

  constructor(color, material, controls, cost, size, maker) {
    super(cost, size, maker);
    this.partColor = color;
    this.partMaterial = material;
    this.controlNumber = controls;
  }

  get color() {
    return this.partColor;
  }

  set color(color) {
    this.partColor = color;
  }

  get material() {
    return this.partMaterial;
  }

  set material(material) {
    this.partMaterial = material;
  }

  get controls() {
    return this.controlNumber;
  }

  set controls(controls) {
    this.controlNumber = controls;
  }
}