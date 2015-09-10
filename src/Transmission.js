import MechanicalPart from './MechanicalPart.js';

export default class Transmission extends MechanicalPart {

  constructor(axleNum, linkage, drivetrain, isElectric, cost, size, maker) {
    super(isElectric, true, true, cost, size, maker);
    this._axles = axleNum;
    this._linkType = linkage;
    this._driveType = drivetrain;
  }

  get axles() {
    return this._axles;
  }

  set axles(axleNum) {
    this._axles = axleNum;
  }

  get linkType() {
    return this._linkType;
  }

  set linkType(linkage) {
    this._linkType = linkage;
  }

  get driveType() {
    return this._driveType;
  }

  set driveType(drivetrain) {
    this._driveType = drivetrain;
  }
}