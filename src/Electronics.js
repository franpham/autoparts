import MechanicalPart from './MechanicalPart.js';

export default class Electronics extends MechanicalPart {

  constructor(processor, voltage, amps, isMechanic, cost, size, maker) {
    super(true, isMechanic, false, cost, size, maker);
    this.partProcessor = processor;
    this.voltageAmount = voltage;
    this.ampsAmount = amps;
  }

  get processor() {
    return this.partProcessor;
  }

  set processor(processor) {
    this.partProcessor = processor;
  }

  get voltage() {
    return this.voltageAmount;
  }

  set voltage(voltage) {
    this.voltageAmount = voltage;
  }

  get amps() {
    return this.ampsAmount;
  }

  set amps(amps) {
    this.ampsAmount = amps;
  }
}