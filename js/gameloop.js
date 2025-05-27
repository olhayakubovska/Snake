import GameInstance from "./gameInstance.js";
import Config from "./config.js";

export default class GameLoop {
  constructor(update, draw, pixi) {
    this.update = update;
    this.draw = draw;
    this.pixi = pixi;
    this.gameInstance = new GameInstance();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  animate() {
    const configInstance = this.gameInstance.getInstanceConfig();
    this.pixi.app.ticker.add((delta) => {
      configInstance.step += 1;
      if (configInstance.step < Config.MAX_STEP) {
        return;
      }
      configInstance.step = 0;

      this.update();
      this.draw();
    });
  }
}
