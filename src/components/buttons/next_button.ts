import { Game } from "../../scenes/game";

export default class NextButton {
  public posX: number;
  public posY: number;
  public context: CanvasRenderingContext2D;
  public canvas: Game;

  constructor(
    context: CanvasRenderingContext2D,
    canvas: Game,
    posX: number,
    posY: number
  ) {
    this.posX = posX;
    this.posY = posY;
    this.context = context;
    this.canvas = canvas;
    this.draw();
  }
  draw() {
    var self = this;
    var pause_button_image = new Image();
    pause_button_image.src = "./assets/images/next_btn.png";
    pause_button_image.onload = function (e) {
      self.context.drawImage(
        pause_button_image,
        self.posX,
        self.posY,
        self.canvas.width * 0.19,
        self.canvas.width * 0.19
      );
    };
  }
  onClick(xClick: number, yClick: number) {
    const distance = Math.sqrt(
      (xClick - this.posX - (this.canvas.width * 0.19) / 2) *
        (xClick - this.posX - (this.canvas.width * 0.19) / 2) +
        (yClick - this.posY - (this.canvas.width * 0.19) / 2) *
          (yClick - this.posY - (this.canvas.width * 0.19) / 2)
    );
    if (distance < (this.canvas.width * 0.19) / 2) {
      return true;
    }
  }
}
