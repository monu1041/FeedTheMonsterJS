// import { LevelStartScene } from "./level-start-scene.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import { gameData } from "../../data.js";
import { LevelConfig } from "../common/level-config.js";
import { Game } from "./game.js";
import { LevelSelectionLayer } from "../common/common.js";
import Sound from "../common/sound.js";
import { getDatafromStorage } from "../data/profile-data.js";
import { LevelStartScene } from "./level-start-scene";
var mapIcon = new Image();
mapIcon.src = "./assets/images/mapIcon.png";
var map = new Image();
map.src = "./assets/images/map.jpg";
var star = new Image();
star.src = "./assets/images/star.png";
var levelNumber: any;
var self: any;
export class LevelSelectionScreen {
  public canvas: any;
  public width: any;
  public height: any;
  public canvasStack: any;
  public data: any;
  public levels: any;
  public sound: any;
  public id: any;
  public canavsElement: any;
  public context: any;
  public levelButtonpos: any;

  constructor(canvas: any, data: any) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvasStack = new CanvasStack("canvas");
    self = this;
    this.data = data;
    this.levels = [];
    this.sound = new Sound();
    this.createCanvas();
    this.drawStars();
  }
  gameSceneCallBack(button_name: any) {
    switch (button_name) {
      case "next_button": {
        self.startGame((levelNumber += 1));
        break;
      }
      case "retry_button": {
        self.startGame(levelNumber);
        break;
      }
      case "close_button": {
        self.drawStars();
      }
    }
  }
  createCanvas() {
    const selfElement = <HTMLElement>document.getElementById(this.id);
    document.addEventListener(
      "visibilitychange",
      function () {
        self.sound.activeScreen();
      },
      false
    );
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      LevelSelectionLayer
    );
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(map, 0, 0, this.canvas.width, this.canvas.height);

    this.canavsElement.style.zIndex = "2";

    this.levelButtonpos = [
      [
        [this.canvas.width / 10, this.canvas.height / 10],
        [this.canvas.width / 2.5, this.canvas.height / 10],
        [
          this.canvas.width / 3 + this.canvas.width / 2.8,
          this.canvas.height / 10,
        ],
        [this.canvas.width / 10, this.canvas.height / 3],
        [this.canvas.width / 2.5, this.canvas.height / 3],
        [
          this.canvas.width / 3 + this.canvas.width / 2.8,
          this.canvas.height / 3,
        ],
        [this.canvas.width / 10, this.canvas.height / 1.8],
        [this.canvas.width / 2.5, this.canvas.height / 1.8],
        [
          this.canvas.width / 3 + this.canvas.width / 2.8,
          this.canvas.height / 1.8,
        ],
        [this.canvas.width / 10, this.canvas.height / 1.3],
      ],
    ];

    this.canavsElement.addEventListener(
      "mousedown",
      function (event: any) {
        event.preventDefault();
        var rect = document.getElementById(this.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        for (let s of self.levels) {
          if (
            Math.sqrt(
              (x - s.x - self.canvas.height / 20) *
                (x - s.x - self.canvas.height / 20) +
                (y - s.y - self.canvas.height / 20) *
                  (y - s.y - self.canvas.height / 20)
            ) < 45
          ) {
            self.sound.changeSourse("./assets/audios/ButtonClick.wav");
            self.sound.pauseSound();
            levelNumber = s.index - 1;
            self.startGame(levelNumber);
          }
        }
      },
      false
    );
    this.createLevelButtons(this.levelButtonpos);
  }
  createLevelButtons(levelButtonpos: any) {
    var poss = levelButtonpos[0];
    var i = 0;
    for (let s = 0; s < 10; s++) {
      var ns = new LevelConfig(poss[i][0], poss[i][1], i + 1);
      self.levels.push(ns);
      i += 1;
    }
    this.draw();
  }
  draw() {
    for (let s of self.levels) {
      this.drawlevel(s, this.canvas);
    }
  }
  drawlevel(s: any, canvas: any) {
    var imageSize = canvas.height / 5;
    var textFontSize = imageSize / 6;

    this.context.drawImage(mapIcon, s.x, s.y, imageSize, imageSize);
    this.context.fillStyle = "white";
    this.context.font = textFontSize + "px Arial";
    this.context.textAlign = "center";
    this.context.fillText(s.index, s.x + imageSize / 3.5, s.y + imageSize / 3);
    this.context.font = textFontSize - imageSize / 30 + "px Arial";
    this.context.fillText(
      this.data.levels[s.index - 1].levelMeta.levelType,
      s.x + imageSize / 3.5,
      s.y + imageSize / 1.3
    );
  }
  startGame(level_number: any) {
    // self.LevelStartScene.deleteObjects();
    new Game(
      self.canvas.width,
      self.canvas.height,
      self.data.levels[level_number],
      self.gameSceneCallBack
    );
  }
  drawStars() {
    this.sound.changeSourse("./assets/audios/intro.wav");
    let gameLevelData = getDatafromStorage();

    let canvas = document.getElementById("canvas");
    if (gameLevelData != null) {
      for (let s of self.levels) {
        for (let i = 0; i < gameLevelData.length; i++) {
          if (s.index - 1 == parseInt(gameLevelData[i].levelNumber)) {
            this.drawStar(s, canvas, gameLevelData[i].levelStar);
            break;
          }
        }
      }
    }
  }
  drawStar(s: any, canvas: any, starCount: any) {
    var canavsElement = <HTMLCanvasElement>(
      document.getElementById("levelSelectionCanvas")
    );
    var context = <CanvasRenderingContext2D>canavsElement.getContext("2d");
    var imageSize = canvas.height / 5;
    if (starCount >= 1) {
      context.drawImage(
        star,
        s.x,
        s.y - imageSize * 0.01,
        imageSize / 5,
        imageSize / 5
      );
    }
    if (starCount > 1) {
      context.drawImage(
        star,
        s.x + imageSize / 2.5,
        s.y - imageSize * 0.01,
        imageSize / 5,
        imageSize / 5
      );
    }
    if (starCount == 3) {
      context.drawImage(
        star,
        s.x + imageSize / 5,
        s.y - imageSize * 0.1,
        imageSize / 5,
        imageSize / 5
      );
    }
  }
}
