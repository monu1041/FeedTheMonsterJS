export default class InstallButton {
  public posX: number;
  public posY: number;
  public context: CanvasRenderingContext2D;
  public canvas: HTMLCanvasElement;

  constructor(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
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
    pause_button_image.src = "./assets/images/Install_button.png";
    self.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    pause_button_image.onload = function (e) {
      self.context.drawImage(
        pause_button_image,
        self.posX,
        self.posY,
        self.canvas.width / 3,
        self.canvas.width / 6
      );
    };
  }
  onClick(xClick: number, yClick: number) {
    const distance = Math.sqrt(
      (xClick - this.posX - this.canvas.width / 6) *
        (xClick - this.posX - this.canvas.width / 6) +
        (yClick - this.posY - this.canvas.width / 12) *
          (yClick - this.posY - this.canvas.width / 12)
    );

    if (distance < this.canvas.width / 8) {
      return true;
    }
  }
}
