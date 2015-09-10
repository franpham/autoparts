import MechanicalPart from './MechanicalPart';

export default class Engine extends MechanicalPart {

constructor(cylinderNumber, displacementAmount, fuel, cost, size, maker) {
  super(true, true, true, cost, size, maker);

  this._cylinder = cylinderNumber;
  this._displacement = displacementAmount;
  this._fuelType = fuel;
}

  get cylinder() {
    return this._cylinder;
  }

  set cylinder(cylinderNumber) {
    this._cylinder = cylinderNumber;
  }
  get displacement() {
    return this._displacement;
  }

  set displacement(displacementAmount) {
    this._displacement = displacementAmount;
  }

  get fuelType() {
    return this._fuelType;
  }

  set fuelType(fuel) {
    this._fuelType = fuel;
  }
}