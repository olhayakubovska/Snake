import Score from "./score.js";
import Berry from "./berry.js";
import Snake from "./snake.js";
import Pixi from "./pixi.js";
import GameLoop from "./gameloop.js";

class Game {
  constructor(pixiConteiner) {
    this.pixi = new Pixi(pixiConteiner);
    this.snake = new Snake();
    this.berry = new Berry(this.pixi);
    this.score = new Score(".game-score .score-count", 0);
    new GameLoop(this.update.bind(this), this.draw.bind(this), this.pixi);
  }

  update() {
    this.snake.update(this.berry, this.score, this.pixi);
  }

  draw() {
    this.pixi.container.removeChildren();
    this.snake.draw(this.pixi);
    this.berry.draw(this.pixi);
  }
}

new Game(document.getElementById("pixi-app"));
