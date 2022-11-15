export default class CancelButton {
  public posX: number;
  public posY: number;
  public context: CanvasRenderingContext2D;
  public canvas: { width: number };

  constructor(
    context: CanvasRenderingContext2D,
    canvas: { width: number; height?: number }
  ) {
    this.posX = canvas.width * 0.1 + (canvas.width * 0.15) / 2;
    this.posY = canvas.height * 0.2;
    this.context = context;
    this.canvas = canvas;
    this.draw();
  }
  draw() {
    var self = this;
    var pause_button_image = new Image();
    pause_button_image.src = "./assets/images/close_btn.png";
    pause_button_image.onload = function (e) {
      self.context.drawImage(
        pause_button_image,
        self.posX,
        self.posY,
        self.canvas.width * 0.15,
        self.canvas.width * 0.15
      );
    };
  }
  onClick(xClick, yClick) {
    const distance = Math.sqrt(
      (xClick - this.posX - (this.canvas.width * 0.15) / 2) *
        (xClick - this.posX - (this.canvas.width * 0.15) / 2) +
        (yClick - this.posY - (this.canvas.width * 0.15) / 2) *
          (yClick - this.posY - (this.canvas.width * 0.15) / 2)
    );
    if (distance < (this.canvas.width * 0.15) / 2) {
      return true;
    }
  }
}
