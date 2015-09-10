import CosmeticPart from './CosmeticPart.js';

export default class Interior extends CosmeticPart {

  constructor(seatsNum, lightsNum, color, controls, cost, size, maker) {
    super(color, 'leather', controls, cost, size, maker);
    this._cupholders = 4;
    this._seats = seatsNum;
    this._lights = lightsNum;
  }

  get cupholders() {
    return this._cupholders;
  }

  set cupholders(cupholders) {
    this._cupholders = cupholders;
  }

  get lights() {
    return this._lights;
  }

  set lights(lightsNum) {
    this._lights = lightsNum;
  }

  get seats() {
    return this._seats;
  }

  set seats(seatsNum) {
    this._seats = seatsNum;
  }
}