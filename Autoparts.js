
export default class Autoparts {

  constructor(cost, size, maker) {
    this.partCost = cost;
    this.partSize = size;
    this.partMaker = maker;
  }

  get cost() {
    return this.partCost;
  }

  set cost(cost) {
    this.partCost = cost;
  }

  get size() {
    return this.partSize;
  }

  set size(size) {
    this.partSize = size;
  }

  get maker() {
    return this.partMaker;
  }

  set maker(maker) {
    this.partMaker = maker;
  }
}