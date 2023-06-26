import { GameFields, TimeOver } from "../../common/common.js";
import Sound from "../../common/sound.js";
import { Game } from "../../scenes/game.js";
var time_ticking = new Image();
time_ticking.src = "./assets/images/timer_full.png";

export default class TimerTicking {
  public posX: number;
  public posY: number;
  public context: CanvasRenderingContext2D;
  public canvas: Game;
  public timer;
  public audio: Sound;

  constructor(context: CanvasRenderingContext2D, canvas: Game, audio: Sound) {
    this.posX = canvas.width * 0.12;
    this.posY = canvas.height * 0.099;
    this.context = context;
    this.canvas = canvas;
    this.timer = 0;
    this.audio = audio;
    this.draw();
  }

  draw() {
    var self = this;
    this.clearTimer();
    self.context.drawImage(
      time_ticking,
      self.posX,
      self.posY,
      self.canvas.width - 50,
      self.canvas.height * 0.05
    );
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
      this.audio.playSound("./assets/audios/timeout.mp3", TimeOver);
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
