export default class PauseButton {
  constructor(posX, posY, width, height, context, canvas) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.context = context;
    this.canvas = canvas;
    this.draw()
  }
  draw() {
    var pause_button_image = new Image();
    pause_button_image.src = "./assets/images/pause_v01.png";
    pause_button_image.onload = function (e) {
      this.context.drawImage(
        pause_button_image,
        posX,
        posY,
        this.width,
        this.height
      );
    };
  }
  onClick(xClick, yClick) {
    const distance = Math.sqrt(
      (xClick - this.posX) * (xClick - this.posX) +
        (yClick - this.posY) * (yClick - this.posY)
    );
    if (distance < this.height / 2) {
      return true;
    }
  }
}
