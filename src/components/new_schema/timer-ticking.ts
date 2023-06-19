import { GameFields } from "../../common/common.js";
import { Game } from "../../scenes/game";

export default class TimerTicking {
  public posX: number;
  public posY: number;
  public context: CanvasRenderingContext2D;
  public canvas: Game;
  public timer;

  constructor(context: CanvasRenderingContext2D, canvas: Game) {
    this.posX = canvas.width * 0.12;
    this.posY = canvas.height * 0.099;
    this.context = context;
    this.canvas = canvas;
    this.timer = 0;
    this.draw();
  }

  draw() {
    var self = this;
    this.clearTimer();
    var time_ticking = new Image();
    time_ticking.src = "./assets/images/timer_full.png";
    time_ticking.onload = function (e) {
      self.context.drawImage(
        time_ticking,
        self.posX,
        self.posY,
        self.canvas.width - 50,
        self.canvas.height * 0.05
      );
    };
  }
  clearTimer() {
    this.context.clearRect(
      this.posX,
      this.posY,
      this.canvas.width - 50,
      this.canvas.height * 0.05
    );
  }
  resetTimer() {
    this.timer = 0;
    this.draw();
  }
  timerStart() {
    if (
      this.posX + this.canvas.width - this.timer <= this.posX + 50 &&
      !GameFields.TimerOut
    ) {
      GameFields.TimerOut = true;
      // TimeOut
    }
    if (
      this.posX + this.canvas.width - this.timer <= this.posX &&
      !GameFields.TimeOver
    ) {
      GameFields.TimeOver = true;
      // TimeOver
    }
    if (!GameFields.isTimerPaused && GameFields.drawStones) {
      this.timer = this.timer + 0.7;
      this.context.clearRect(
        this.posX + this.canvas.width - this.timer,
        this.posY,
        this.canvas.width - 50,
        this.canvas.height * 0.05
      );
    }
  }
}
