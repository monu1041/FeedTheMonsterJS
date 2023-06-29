import { ButtonClick, GameFields, PausePopupLayer } from "../common/common.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import CancelButton from "./buttons/cancel_button.js";
import CloseButton from "./buttons/close_button.js";
import RetryButton from "./buttons/retry_button.js";
import { LevelStartScene } from "../scenes/level-start-scene.js";
import { Game } from "../scenes/game.js";
import Sound from "../common/sound.js";

export default class PausePopUp {
  public canvas: Game;
  public puzzleDecision: any;
  public context: CanvasRenderingContext2D;
  public cancelButton: CancelButton;
  public retryButton: RetryButton;
  public closeButton: CloseButton;

  public canvasStack: any;
  public id: any;
  public audio: Sound;
  puzzleChange;

  constructor(canvas, puzzleDecision, audio) {
    this.canvas = canvas;
    this.puzzleDecision = puzzleDecision;
    this.canvasStack = new CanvasStack("canvas");
    this.audio = audio;
    this.createCanvas();
  }

  createCanvas() {
    var self = this;
    this.id = this.canvasStack.createLayer(
      this.canvas.height,
      this.canvas.width,
      PausePopupLayer
    );
    const selfIdElement = document.getElementById(this.id) as HTMLCanvasElement;
    this.context = selfIdElement.getContext("2d");
    selfIdElement.style.zIndex = "11";
    selfIdElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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
    selfIdElement.addEventListener("click", function (event) {
      var rect = selfIdElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (self.cancelButton.onClick(x, y)) {
        self.audio.playSound("./assets/audios/ButtonClick.mp3", ButtonClick);
        GameFields.isTimerPaused = false;
        GameFields.isGamePaused = false;
        !GameFields.drawStones ? (GameFields.drawStones = true) : null;
        //  self.levelStart.timerTicking.resumeTimer();
        // self.levelStart.levelEndCallBack('cancel_button');
        self.deleteCanvas(self);
      }
      if (self.retryButton.onClick(x, y)) {
        self.audio.playSound("./assets/audios/ButtonClick.mp3", ButtonClick);
        self.puzzleDecision("retry_button");
        GameFields.gameScore = 0;
        //self.levelStart.levelEndCallBack("retry_button");
        self.deleteCanvas(self);
      }
      if (self.closeButton.onClick(x, y)) {
        self.audio.playSound("./assets/audios/ButtonClick.mp3", ButtonClick);
        self.puzzleDecision("close_button");
        GameFields.gameScore = 0;
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
