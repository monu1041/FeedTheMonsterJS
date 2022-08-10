export default class PauseButton {
  constructor(context, canvas) {
    this.posX = canvas.width - canvas.height * 0.09;
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
        self.canvas.height * 0.09,
        self.canvas.height * 0.09
      );
    };
  }
  onClick(xClick, yClick) {
    const distance = Math.sqrt(
      (xClick - this.posX - (this.canvas.height * 0.09) / 2) *
        (xClick - this.posX - (this.canvas.height * 0.09) / 2) +
        (yClick - this.posY - (this.canvas.height * 0.09) / 2) *
          (yClick - this.posY - (this.canvas.height * 0.09) / 2)
    );
    if (distance < (canvas.height * 0.09) / 2) {
      return true;
    }
  }
}
