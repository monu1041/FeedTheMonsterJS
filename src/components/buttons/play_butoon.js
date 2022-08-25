export default class PlayButton {
  constructor(context, canvas, posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.context = context;
    this.canvas = canvas;
    this.draw();
  }
  draw() {
    var self = this;
    var pause_button_image = new Image();
    pause_button_image.src = "./assets/images/Play_button.png";
    pause_button_image.onload = function (e) {
      self.context.drawImage(
        pause_button_image,
        self.posX * 3.5,
        self.posY / 4,
        self.canvas.width / 3,
        self.canvas.width / 3
      );
    };
  }
  onClick(xClick, yClick) {
    const distance = Math.sqrt(
      (xClick - this.posX - this.canvas.width / 6) *
        (xClick - this.posX - this.canvas.width / 6) +
        (yClick - this.posY - this.canvas.width / 6) *
          (yClick - this.posY - this.canvas.width / 6)
    );
    if (distance < this.canvas.width / 6) {
      return true;
    }
  }
}
