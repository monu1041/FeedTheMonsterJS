import { LevelEndButtonsLayer, LevelEndLayer, LevelStartLayer, MonsterLayer, PausePopupLayer, StoneLayer, TimetickerLayer } from "../common/common.js";
import { LevelEndScene } from "../scenes/level-end-scene.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import CancelButton from "./buttons/cancel_button.js";
import CloseButton from "./buttons/close_button.js";
import RetryButton from "./buttons/retry_button.js";


export default class PausePopUp {
  constructor(canvas) {
    this.canvas = canvas;
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
        self.canvas.height * 0.4
      );
      self.cancelButton = new CancelButton(self.context, self.canvas);
      self.retryButton = new RetryButton(
        self.context,
        self.canvas,
        self.canvas.width * 0.55,
        self.canvas.height * 0.2 + self.canvas.width * 0.4
      );
      self.closeButton = new CloseButton(
        self.context,
        self.canvas,
        self.canvas.width * 0.25,
        self.canvas.height * 0.2 + self.canvas.width * 0.4
      );
    };
    document
      .getElementById(self.id)
      .addEventListener("click", function (event) {
        var rect = document.getElementById(self.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (self.cancelButton.onClick(x, y)) {
          self.deleteCanvas(self);
        }
        if (self.retryButton.onClick(x, y)) {
          console.log("Retry Button");
        }
        if (self.closeButton.onClick(x, y)) {
          self.deleteCanvas(self);
          self.canvasStack.deleteLayer(LevelEndLayer)
          self.canvasStack.deleteLayer(LevelEndButtonsLayer)
          self.canvasStack.deleteLayer(LevelStartLayer)
          self.canvasStack.deleteLayer(MonsterLayer)
          self.canvasStack.deleteLayer(StoneLayer)
          self.canvasStack.deleteLayer(TimetickerLayer)
        }
      });
  }

  deleteCanvas(self) {
    self.canvasStack.deleteLayer(this.id);
  }

  draw() {}

  update() {}
}
