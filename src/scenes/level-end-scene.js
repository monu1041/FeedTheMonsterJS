import { LevelEndButtonsLayer, LevelEndLayer } from "../common/common.js";
import CloseButton from "../components/buttons/close_button.js";
import NextButton from "../components/buttons/next_button.js";
import RetryButton from "../components/buttons/retry_button.js";
import { ProfileData, setDataToStorage } from "../data/profile-data.js";
import { CanvasStack } from "../utility/canvas-stack.js";
var audioUrl = {
  levelWin: "./assets/audios/LevelWinFanfare.mp3",
  levelLose: "./assets/audios/LevelLoseFanfare.mp3",
  intro: "./assets/audios/intro.wav",
};
export class LevelEndScene {
  constructor(canvas, score, monster, levelEndCallBack, levelData) {
    this.canvas = canvas;
    this.canvasStack = new CanvasStack("canvas");
    this.monster = monster;
    this.levelData = levelData;
    this.starCount =
      score == 200
        ? 1
        : score == 300
        ? 2
        : score == 400
        ? 2
        : score == 500
        ? 3
        : 0;
    this.createCanvas();
    this.levelEndCallBack = levelEndCallBack;
    setDataToStorage(
      new ProfileData(
        levelData.levelMeta.levelType,
        levelData.levelMeta.levelNumber,
        score,
        this.starCount
      )
    );
  }
  createCanvas() {
    if (this.starCount <= 1) {
      this.canvas.scene.audio.changeSourse(audioUrl.levelLose);
      this.monster.changeImage("./assets/images/sad14.png");
    } else {
      this.canvas.scene.audio.changeSourse(audioUrl.levelWin);
      this.canvas.scene.audio.changeSourse(audioUrl.intro);
      this.monster.changeImage("./assets/images/happy14.png");
    }
    document.addEventListener(
      "visibilitychange",
      function () {
        if (document.visibilityState === 'visible') {
          self.canvas.scene.audio.playSound("./assets/audios/intro.wav")
          
        } else {
          self.canvas.scene.audio.pauseSound();
        }
      },
      false
    );
    this.monster.changeZindex(9);
    var self = this;
    this.id = this.canvasStack.createLayer(
      this.canvas.height,
      this.canvas.width,
      LevelEndLayer
    );
    this.context = document.getElementById(this.id).getContext("2d");
    document.getElementById(this.id).style.zIndex = 8;
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
    var star1 = new Image();
    star1.src = "./assets/images/pinStar1.png";
    var star2 = new Image();
    star2.src = "./assets/images/pinStar2.png";
    var star3 = new Image();
    star3.src = "./assets/images/pinStar3.png";

    self.drawStarts(self, star1, star2, star3);
    self.nextButton =
      self.starCount >= 2
        ? new NextButton(
            self.context,
            self.canvas,
            self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2,
            self.canvas.height * 0.7
          )
        : null;
    self.retryButton = new RetryButton(
      self.context,
      self.canvas,
      self.starCount >= 2
        ? self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2
        : self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2,
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
        if (self.nextButton && self.nextButton.onClick(x, y)) {
          self.canvas.scene.audio.pauseSound();
          self.levelEndCallBack("next_button");
        }
        if (self.retryButton.onClick(x, y)) {
          self.canvas.scene.audio.pauseSound();
          self.levelEndCallBack("retry_button");
        }
        if (self.closeButton.onClick(x, y)) {
          self.canvas.scene.audio.pauseSound();
          self.levelEndCallBack("close_button");
        }
      });
  }
  drawStarts(self, star1, star2, star3) {
    star1.onload = function (e) {
      if (self.starCount >= 2) {
        setTimeout(() => {
          self.context.drawImage(
            star1,
            self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2,
            self.canvas.height * 0.2,
            self.canvas.width * 0.19,
            self.canvas.width * 0.19
          );
        }, 500);
      }
    };

    star2.onload = function (e) {
      if (self.starCount <= 3 && self.starCount > 0) {
        setTimeout(() => {
          self.context.drawImage(
            star2,
            self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2,
            self.canvas.height * 0.15,
            self.canvas.width * 0.19,
            self.canvas.width * 0.19
          );
        }, 1000);
      }
    };
    star3.onload = function (e) {
      if (self.starCount >= 3) {
        setTimeout(() => {
          self.context.drawImage(
            star3,
            self.canvas.width * 0.82 - (self.canvas.width * 0.19) / 2,
            self.canvas.height * 0.2,
            self.canvas.width * 0.19,
            self.canvas.width * 0.19
          );
        }, 1500);
      }
    };
  }
  deleteCanvas(self) {
    self.canvasStack.deleteLayer(this.id);
    self.canvasStack.deleteLayer(this.bottonLayer);
  }
}
