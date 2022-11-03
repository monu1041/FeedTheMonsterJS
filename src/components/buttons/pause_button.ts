export default class PauseButton {
  public posX: number;
  public posY: number;
  public context: {
    drawImage: (
      arg0: HTMLImageElement,
      arg1: number,
      arg2: number,
      arg3: number,
      arg4: number
    ) => void;
  };
  public canvas: { height: number };

  constructor(
    context: {
      clearRect?: (
        arg0: number,
        arg1: number,
        arg2: number,
        arg3: number
      ) => void;
      drawImage:
        | ((
            arg0: HTMLImageElement,
            arg1: number,
            arg2: number,
            arg3: number,
            arg4: number
          ) => void)
        | ((
            arg0: any,
            arg1: number,
            arg2: number,
            arg3: number,
            arg4: number
          ) => void);
    },
    canvas: { width?: number; height: number }
  ) {
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
  onClick(xClick: number, yClick: number) {
    const distance = Math.sqrt(
      (xClick - this.posX - (this.canvas.height * 0.09) / 2) *
        (xClick - this.posX - (this.canvas.height * 0.09) / 2) +
        (yClick - this.posY - (this.canvas.height * 0.09) / 2) *
          (yClick - this.posY - (this.canvas.height * 0.09) / 2)
    );
    if (distance < (this.canvas.height * 0.09) / 2) {
      return true;
    }
  }
}
