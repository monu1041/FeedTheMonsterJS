import { LevelEndButtonsLayer, LevelEndLayer } from "../common/common.js";
import CloseButton from "../components/buttons/close_button.js";
import NextButton from "../components/buttons/next_button.js";
import RetryButton from "../components/buttons/retry_button.js";
import { Monster } from "../components/monster.js";
import { CanvasStack } from "../utility/canvas-stack.js";

export class LevelEndScene {
  constructor(canvas, starCount, monster,levelEndCallBack) {
    this.canvas = canvas;
    this.canvasStack = new CanvasStack("canvas");
    this.monster = monster;
    this.createCanvas();
    this.starCount = starCount;
    this.levelEndCallBack=levelEndCallBack;
  }
  createCanvas() {
    this.monster.changeImage("./assets/images/happy14.png");
    this.monster.changeZindex(8);
    var self = this;
    this.id = this.canvasStack.createLayer(
      this.canvas.height,
      this.canvas.width,
      LevelEndLayer
    );
    this.context = document.getElementById(this.id).getContext("2d");
    document.getElementById(this.id).style.zIndex = 7;
    this.bottonLayer = this.canvasStack.createLayer(
      this.canvas.height,
      this.canvas.width,
      LevelEndButtonsLayer
    );
    this.bottonContext = document
      .getElementById(this.bottonLayer)
      .getContext("2d");
    document.getElementById(this.bottonLayer).style.zIndex = 9;
    document.getElementById(this.id).style.backgroundColor = "#00407B";
    document.getElementById(this.id).style.backgroundImage =
      "url('./assets/images/WIN_screen_bg.png')";
    document.getElementById(this.id).style.backgroundSize = "contain";
    document.getElementById(this.id).style.backgroundPosition = "center";
    document.getElementById(this.id).style.backgroundAttachment = "fixed";
    document.getElementById(this.id).style.backgroundRepeat = "no-repeat";
    var pop_up_image = new Image();
    pop_up_image.src = "./assets/images/WIN_screen_bg.png";
    var star1 = new Image();
    star1.src = "./assets/images/pinStar1.png";
    var star2 = new Image();
    star2.src = "./assets/images/pinStar2.png";
    var star3 = new Image();
    star3.src = "./assets/images/pinStar3.png";

    pop_up_image.onload = function (e) {
    //  self.context.drawImage(pop_up_image, 0, 0, 0, 0);
      self.drawStarts(self, star1, star2, star3);
    };
    self.nextButton = new NextButton(
      self.context,
      self.canvas,
      self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2,
      self.canvas.height * 0.7
    );
    self.retryButton = new RetryButton(
      self.context,
      self.canvas,
      self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2,
      self.canvas.height * 0.7
    );
    self.closeButton = new CloseButton(
      self.context,
      self.canvas,
      self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2,
      self.canvas.height * 0.7
    );
    document
      .getElementById(this.bottonLayer)
      .addEventListener("click", function (event) {
        var rect = document
          .getElementById(self.bottonLayer)
          .getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (self.nextButton.onClick(x, y)) {
          console.log("Next Button");
          self.levelEndCallBack('next_button')
        }
        if (self.retryButton.onClick(x, y)) {
          console.log("Retry Button");
          self.levelEndCallBack('retry_button')
        }
        if (self.closeButton.onClick(x, y)) {
          console.log("Close Button");
          self.levelEndCallBack('close_button')
         // self.deleteCanvas(self);
        }
      });
  }
  drawStarts(self, star1, star2, star3) {
    if (self.starCount >= 2) {
      star1.onload = function (e) {
        setTimeout(() => {
          self.context.drawImage(
            star1,
            self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2,
            self.canvas.height * 0.2,
            self.canvas.width * 0.19,
            self.canvas.width * 0.19
          );
        }, 500);
      };
    }
    if (self.starCount <= 3 && self.starCount > 0) {
      star2.onload = function (e) {
        setTimeout(() => {
          self.context.drawImage(
            star2,
            self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2,
            self.canvas.height * 0.15,
            self.canvas.width * 0.19,
            self.canvas.width * 0.19
          );
        }, 1000);
      };
    }
    if (self.starCount >= 3) {
      star3.onload = function (e) {
        setTimeout(() => {
          self.context.drawImage(
            star3,
            self.canvas.width * 0.82 - (self.canvas.width * 0.19) / 2,
            self.canvas.height * 0.2,
            self.canvas.width * 0.19,
            self.canvas.width * 0.19
          );
        }, 1500);
      };
    }
  }
  deleteCanvas(self) {
    self.canvasStack.deleteLayer(this.id);
    self.canvasStack.deleteLayer(this.bottonLayer);
    // self.monster.deleteCanvas();
  }
}
