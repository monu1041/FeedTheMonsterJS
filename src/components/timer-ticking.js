import { TimetickerLayer } from "../common/common.js";
import { CanvasStack } from "../utility/canvas-stack.js";
export class TimerTicking {
  constructor(game, levelStart) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    this.widthToClear = canvas.width / 3.4;
    this.maxLimitExhausted = false;
    this.canvasStack = new CanvasStack("canvas");
    this.timer = 0;
    this.isTimerStarted = false;
    this.isTimerEnded = false;
    this.levelStart = levelStart;
    this.isTimerRunningOut = false;
    self = this;
    this.createCanvas();
  }
  createCanvas() {
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      TimetickerLayer
    );
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 4;
    // this.animation(0);
  }
  deleteCanvas() {
    this.canvasStack.deleteLayer(this.id);
  }
  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(
      this.timer_full,
      this.game.width * 0.12,
      this.height * 0.099,
      this.game.width - 50,
      this.height * 0.05
    );
    this.beginTimerOnStart();
  }
  createBackgroud() {
    var self = this;
    this.timer_full = new Image();
    this.timer_full.src = "./assets/images/timer_full.png";
    this.timer_full.onload = function (e) {
      self.draw();
      self.beginTimerOnStart();
    };
  }
  update() {
    if (this.isTimerStarted) {
      this.timer += 0.06;
      if (canvas.width * 1.3 - this.widthToClear - 10 * this.timer > 55) {
        this.context.clearRect(
          canvas.width * 1.3 - this.widthToClear - 10 * this.timer,
          0,
          this.width,
          this.height
        );
      }
      if (Math.floor(this.timer) == 32 && !this.isTimerRunningOut) {
        this.isTimerRunningOut = true;
        this.levelStart.audio.changeSourse("./assets/audios/timeout.mp3");
      }
      if (
        canvas.width * 1.3 - this.widthToClear - 10 * this.timer < 55 &&
        canvas.width * 1.3 - this.widthToClear - 10 * this.timer > 54
      ) {
        this.isTimerRunningOut = false;
        this.isTimerEnded = true;
        this.isTimerEnded ? this.levelStart.changePuzzle() : null;
        this.timer = 0;
      }
    }
  }
  beginTimerOnStart() {
    var self = this;
    setTimeout(() => {
      if (!self.isTimerStarted && self.timer == 0) {
        self.timer = 0;
        self.isTimerStarted = true;
      }
    }, 6000);
  }
  stopTimer() {
    this.isTimerStarted = false;
    setTimeout(() => {
      this.timer = 0;
    }, 3000);
    this.timer = 0;
  }
  pauseTimer() {
    this.isTimerStarted = false;
  }
  resumeTimer() {
    this.isTimerStarted = true;
  }
}
