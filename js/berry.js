import Config from "./config.js";
import { getRandomInt } from "./suppFunc.js";

export default class Berry {
  constructor(pixi) {
    this.x = 0;
    this.y = 0;
    this.pixi = pixi;

    this.config = new Config();
    this.randomPosition();
  }

  draw(pixi) {
    let berryDraw = new PIXI.Graphics();
    berryDraw.beginFill("#1099bb");
    berryDraw.drawCircle(
      this.x + this.config.sizeCell / 2,
      this.y + this.config.sizeCell / 2,
      this.config.sizeBerry
    );
    berryDraw.endFill();
    this.pixi.container.addChild(berryDraw);
  }

  randomPosition() {
    this.x =
      getRandomInt(0, this.pixi.app.view.width / this.config.sizeCell) *
      this.config.sizeCell;
    this.y =
      getRandomInt(0, this.pixi.app.view.height / this.config.sizeCell) *
      this.config.sizeCell;
  }
}
