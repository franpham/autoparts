import CosmeticPart from './CosmeticPart.js';

export default class Body extends CosmeticPart {

  constructor(lights, spoiler, color, controls, cost, size, maker) {
    super(color, 'metal', controls, cost, size, maker);
    this._doorsNumber = 4;
    this._lightsNumber = lights;
    this._hasSpoiler = spoiler;
  }

  get doorsNumber() {
    return this._doorsNumber;
  }

  set doorsNumber(doors) {
    this._doorsNumber = doors;
  }

  get lightsNumber() {
    return this._lightsNumber;
  }

  set lightsNumber(lights) {
    this._lightsNumber = lights;
  }

  get hasSpoiler() {
    return this._hasSpoiler;
  }

  set hasSpoiler(spoiler) {
    this._hasSpoiler = spoiler;
  }
}