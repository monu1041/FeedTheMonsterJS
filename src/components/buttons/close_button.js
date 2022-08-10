export default class CloseButton {
    constructor(context, canvas) {
      this.posX = canvas.width * 0.25 ;
      this.posY = canvas.height * 0.2 + canvas.width * 0.4;
      this.context = context;
      this.canvas = canvas;
      this.draw();
    }
    draw() {
      var self = this;
      var pause_button_image = new Image();
      pause_button_image.src = "./assets/images/map_btn.png";
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
    onClick(xClick, yClick) {
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
  