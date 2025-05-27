export default class Config {
  static MAX_STEP = 12;
  static CELL_SIZE = 16;

  constructor() {
    this.step = 0;
    this.maxStep = this.MAX_STEP;
    this.sizeCell = 16;
    this.sizeBerry = 16 / 4;
  }
}
