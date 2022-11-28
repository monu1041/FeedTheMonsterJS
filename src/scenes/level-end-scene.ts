import { LevelEndButtonsLayer, LevelEndLayer } from "../common/common.js";
import CloseButton from "../components/buttons/close_button.js";
import NextButton from "../components/buttons/next_button.js";
import RetryButton from "../components/buttons/retry_button.js";
import { Monster } from "../components/monster.js";
import { ProfileData, setDataToStorage } from "../data/profile-data.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import { Game } from "./game.js";
var audioUrl = {
  levelWin: "./assets/audios/LevelWinFanfare.mp3",
  levelLose: "./assets/audios/LevelLoseFanfare.mp3",
  intro: "./assets/audios/intro.wav",
};
export class LevelEndScene {
  public canvas: Game;
  public canvasStack: any;
  public monster: Monster;
  public levelData: any;
  public isGamePause: boolean;
  public starCount: number;
  public levelEndCallBack: any;
  public id: string;
  public context: any;
  public bottonLayer: any;
  public bottonContext: any;
  public nextButton: NextButton;
  public retryButton: RetryButton;
  public closeButton: CloseButton;
  public monsterPhaseNumber: any;

  constructor(
    canvas,
    score,
    monster,
    levelEndCallBack,
    levelData,
    isGamePause,
    monsterPhaseNumber
  ) {
    this.canvas = canvas;
    this.canvasStack = new CanvasStack("canvas");
    this.monster = monster;
    this.levelData = levelData;
    this.isGamePause = isGamePause;
    this.monsterPhaseNumber = monsterPhaseNumber || 1;
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
    console.log(levelData.levelMeta.levelNumber);
    console.log(score);
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
      this.monster.changeImage(
        "./assets/images/sad1" + this.monsterPhaseNumber + ".png"
      );
    } else {
      this.canvas.scene.audio.changeSourse(audioUrl.levelWin);
      if (!this.isGamePause) {
        this.canvas.scene.audio.changeSourse(audioUrl.intro);
      }
      this.monster.changeImage(
        "./assets/images/happy1" + this.monsterPhaseNumber + ".png"
      );
    }
    document.addEventListener(
      "visibilitychange",
      function () {
        if (document.visibilityState === "visible") {
          self.canvas.scene.audio.playSound("./assets/audios/intro.wav");
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
    this.context = (
      document.getElementById(this.id) as HTMLCanvasElement
    ).getContext("2d");
    (document.getElementById(this.id) as HTMLElement).style.zIndex = "8";
    this.bottonLayer = this.canvasStack.createLayer(
      this.canvas.height,
      this.canvas.width,
      LevelEndButtonsLayer
    );
    this.bottonContext = (
      document.getElementById(this.bottonLayer) as HTMLCanvasElement
    ).getContext("2d");
    (document.getElementById(this.bottonLayer) as HTMLElement).style.zIndex =
      "9";
    (document.getElementById(this.id) as HTMLElement).style.backgroundColor =
      "#00407B";
    (document.getElementById(this.id) as HTMLElement).style.backgroundImage =
      "url('./assets/images/WIN_screen_bg.png')";
    (document.getElementById(this.id) as HTMLElement).style.backgroundSize =
      "contain";
    (document.getElementById(this.id) as HTMLElement).style.backgroundPosition =
      "center";
    (
      document.getElementById(this.id) as HTMLElement
    ).style.backgroundAttachment = "fixed";
    (document.getElementById(this.id) as HTMLElement).style.backgroundRepeat =
      "no-repeat";
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
    (document.getElementById(this.bottonLayer) as HTMLElement).addEventListener(
      "click",
      function (event) {
        var rect = (
          document.getElementById(self.bottonLayer) as HTMLElement
        ).getBoundingClientRect();
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
      }
    );
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
