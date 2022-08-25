import { PausePopupLayer } from "../common/common.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import CancelButton from "./buttons/cancel_button.js";
import CloseButton from "./buttons/close_button.js";
import RetryButton from "./buttons/retry_button.js";

export default class PausePopUp {
  constructor(canvas, levelStart) {
    this.canvas = canvas;
    this.levelStart = levelStart;
    this.canvasStack = new CanvasStack("canvas");
    this.createCanvas();
  }

  createCanvas() {
    var self = this;
    this.id = this.canvasStack.createLayer(
      this.canvas.height,
      this.canvas.width,
      PausePopupLayer
    );
    this.context = document.getElementById(this.id).getContext("2d");
    document.getElementById(this.id).style.zIndex = 11;
    document.getElementById(this.id).style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
    var pop_up_image = new Image();
    pop_up_image.src = "./assets/images/popup_bg_v01.png";

    pop_up_image.onload = function (e) {
      self.context.drawImage(
        pop_up_image,
        self.canvas.width * 0.1,
        self.canvas.height * 0.2,
        self.canvas.width * 0.8,
        self.canvas.width * 0.8
      );
      self.cancelButton = new CancelButton(self.context, self.canvas);
      self.retryButton = new RetryButton(
        self.context,
        self.canvas,
        self.canvas.width * 0.55,
        self.canvas.height * 0.2 +
          self.canvas.width * 0.4 -
          (self.canvas.width * 0.19) / 2
      );
      self.closeButton = new CloseButton(
        self.context,
        self.canvas,
        self.canvas.width * 0.25,
        self.canvas.height * 0.2 +
          self.canvas.width * 0.4 -
          (self.canvas.width * 0.19) / 2
      );
    };
    document
      .getElementById(self.id)
      .addEventListener("click", function (event) {
        var rect = document.getElementById(self.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (self.cancelButton.onClick(x, y)) {
          self.levelStart.timerTicking.resumeTimer();
          self.deleteCanvas(self);
        }
        if (self.retryButton.onClick(x, y)) {
          self.levelStart.levelEndCallBack("retry_button");
          self.deleteCanvas(self);
        }
        if (self.closeButton.onClick(x, y)) {
          self.levelStart.levelEndCallBack("close_button");
          self.deleteCanvas(self);
        }
      });
  }

  deleteCanvas(self) {
    self.canvasStack.deleteLayer(this.id);
  }

  draw() {}

  update() {}
}
