import MechanicalPart from './MechanicalPart.js';

export default class Transmission extends MechanicalPart {

  constructor(axleNum, linkage, drivetrain, isElectric, cost, size, maker) {
    super(isElectric, true, true, cost, size, maker);
    this.axles = axleNum;
    this.linkType = linkage;
    this.driveType = drivetrain;
  }

  get axles() {
    return this.axles;
  }

  set axles(axleNum) {
    this.axles = axleNum;
  }

  get linkType() {
    return this.linkType;
  }

  set linkType(linkage) {
    this.linkType = linkage;
  }

  get driveType() {
    return this.driveType;
  }

  set driveType(drivetrain) {
    this.driveType = drivetrain;
  }
}