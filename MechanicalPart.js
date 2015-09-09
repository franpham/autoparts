import Autoparts from './Autoparts.js';

export default class Mechanical extends Autoparts {

  constructor(isElectric, isMechanic, containFluid, cost, size, maker) {
    super(cost, size, maker);
    this.isElectrical = isElectric;
    this.isMechanical = isMechanic;
    this.hasFluid = containFluid;
  }

  get isElectrical() {
    return this.isElectrical;
  }

  set isElectrical(isElectric) {
    this.isElectrical = isElectric;
  }

  get isMechanical() {
    return this.isMechanical;
  }

  set isMechanical(isMechanic) {
    this.isMechanical = isMechanic;
  }

  get hasFluid() {
    return this.hasFluid;
  }

  set hasFluid(containFluid) {
    this.hasFluid = containFluid;
  }
}