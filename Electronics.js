import Mechanical from './Mechanical.js';

export default class Electronics extends Mechanical {

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

  get voltageAmount() {
    return this.voltageAmount;
  }

  set voltageAmount(voltage) {
    this.voltageAmount = voltage;
  }

  get ampsAmount() {
    return this.ampsAmount;
  }

  set ampsAmount(amps) {
    this.ampsAmount = amps;
  }
}