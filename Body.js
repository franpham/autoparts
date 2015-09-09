import Cosmetic from './Cosmetic.js';

export default class Body extends Cosmetic {

  constructor(lights, spoiler, color, controls, cost, size, maker) {
    super(color, 'metal', controls, cost, size, maker);
    this.doorsNumber = 4;
    this.lightsNumber = lights;
    this.hasSpoiler = spoiler;
  }

  get doorsNumber() {
    return this.doorsNumber;
  }

  set doorsNumber(doors) {
    this.doorsNumber = doors;
  }

  get lightsNumber() {
    return this.lightsNumber;
  }

  set lightsNumber(lights) {
    this.lightsNumber = lights;
  }

  get hasSpoiler() {
    return this.hasSpoiler;
  }

  set hasSpoiler(spoiler) {
    this.hasSpoiler = spoiler;
  }
}