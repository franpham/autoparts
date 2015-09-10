import Autoparts from './Autoparts.js';

export default class MechanicalPart extends Autoparts {

  constructor(isElectric, isMechanic, hasFluid, cost, size, maker) {
    super(cost, size, maker);
    this.isElectrical = isElectric;
    this.isMechanical = isMechanic;
    this.fluid = hasFluid;
  }

  get electrical() {
    return this.isElectrical;
  }

  set electrical(isElectric) {
    this.isElectrical = isElectric;
  }

  get mechanical() {
    return this.isMechanical;
  }

  set mechanical(isMechanic) {
    this.isMechanical = isMechanic;
  }

  get hasFluid() {
    return this.fluid;
  }

  set hasFluid(hasFluid) {
    this.fluid = hasFluid;
  }
}