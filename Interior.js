import Cosmetic from './Cosmetic.js';

export default class Interior extends Cosmetic {

  constructor(seatsNum, lightsNum, color, controls, cost, size, maker) {
    super(color, 'leather', controls, cost, size, maker);
    this.cupholders = 4;
    this.seats = seatsNum;
    this.lights = lightsNum;
  }
}