export default class PauseButton {
  constructor(context, canvas) {
    this.posX = canvas.width - canvas.width * 0.2;
    this.posY = 0;
    this.context = context;
    this.canvas = canvas;
    this.draw();
  }
  draw() {
    var self = this;
    var pause_button_image = new Image();
    pause_button_image.src = "./assets/images/pause_v01.png";
    pause_button_image.onload = function (e) {
      self.context.drawImage(
        pause_button_image,
        self.posX,
        self.posY,
        self.canvas.width * 0.2,
        self.canvas.width * 0.2
      );
    };
  }
  onClick(xClick, yClick) {
    const distance = Math.sqrt(
      (xClick - this.posX - (this.canvas.width * 0.2) / 2) *
        (xClick - this.posX - (this.canvas.width * 0.2) / 2) +
        (yClick - this.posY - (this.canvas.width * 0.2) / 2) *
          (yClick - this.posY - (this.canvas.width * 0.2) / 2)
    );
    if (distance < (this.canvas.width * 0.2) / 2) {
      return true;
    }
  }
}
