export default class Pixi {
  constructor(pixiConteiner) {
    this.app = new PIXI.Application({
      width: 400,
      height: 480,
    });

    pixiConteiner.appendChild(this.app.view);

    this.container = new PIXI.Container();
    this.app.stage.addChild(this.container);
  }
}
