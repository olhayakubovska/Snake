import Config from "./config.js";

export default class Snake {
  constructor() {
    this.config = new Config();
    this.x = 160;
    this.y = 160;
    this.dx = this.config.sizeCell;
    this.dy = 0;
    this.tails = [];
    this.maxTails = 3;

    this.control();
  }

  update(berry, score, pixi) {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0) {
      this.x = pixi.app.view.width - this.config.sizeCell;
    } else if (this.x >= pixi.app.view.width) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = pixi.app.view.height - this.config.sizeCell;
    } else if (this.y >= pixi.app.view.height) {
      this.y = 0;
    }

    this.tails.unshift({ x: this.x, y: this.y });

    if (this.tails.length > this.maxTails) {
      this.tails.pop();
    }

    this.tails.forEach((el, index) => {
      if (el.x === berry.x && el.y === berry.y) {
        this.maxTails++;
        score.incScore();
        berry.randomPosition();
      }

      for (let i = index + 1; i < this.tails.length; i++) {
        if (el.x == this.tails[i].x && el.y == this.tails[i].y) {
          this.death();
          score.setToZero();
          berry.randomPosition();
        }
      }
    });
  }

  draw(pixi) {
    this.tails.forEach((el, index) => {
      let snakeElement = new PIXI.Graphics();
      if (index == 0) {
        snakeElement.beginFill("#FA0556");
      } else {
        snakeElement.beginFill("#A00034");
      }
      snakeElement.drawRect(
        el.x,
        el.y,
        this.config.sizeCell,
        this.config.sizeCell
      );
      snakeElement.endFill();
      pixi.container.addChild(snakeElement);
    });
  }

  death() {
    this.x = 160;
    this.y = 160;
    this.dx = this.config.sizeCell;
    this.dy = 0;
    this.tails = [];
    this.maxTails = 3;
  }

  control() {
    document.addEventListener("keydown", (e) => {
      if (e.code == "KeyW" || e.code == "ArrowUp") {
        this.dy = -this.config.sizeCell;
        this.dx = 0;
      } else if (e.code == "KeyA" || e.code == "ArrowLeft") {
        this.dx = -this.config.sizeCell;
        this.dy = 0;
      } else if (e.code == "KeyS" || e.code == "ArrowDown") {
        this.dy = this.config.sizeCell;
        this.dx = 0;
      } else if (e.code == "KeyD" || e.code == "ArrowRight") {
        this.dx = this.config.sizeCell;
        this.dy = 0;
      }
    });
  }
}
