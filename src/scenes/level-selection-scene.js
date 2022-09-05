import { LevelStartScene } from "./level-start-scene.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import { gameData } from "../../data.js";
import { LevelConfig } from "../common/level-config.js";
import { Game } from "./game.js";
import { LevelSelectionLayer } from "../common/common.js";
import Sound from "../common/sound.js";
import { getDatafromStorage } from "../data/profile-data.js";
var mapIcon = new Image();
mapIcon.src = "./assets/images/mapIcon.png";
var map = new Image();
map.src = "./assets/images/map.jpg";
var star = new Image();
star.src = "./assets/images/star.png";
var levels = [];
var levelNumber;
var self;
// var levelData = 
export class LevelSelectionScreen {
  constructor(canvas, data) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvasStack = new CanvasStack("canvas");
    this.data = data;
    this.gameLevelData = getDatafromStorage();
    this.createCanvas();
    self = this;
  }
  gameSceneCallBack(button_name) {
    switch (button_name) {
      case "next_button": {
        new Game(
          canvas.width,
          canvas.height,
          self.data.levels[(levelNumber += 1)],
          self.gameSceneCallBack
        );
        break;
      }
      case "retry_button": {
        new Game(
          canvas.width,
          canvas.height,
          self.data.levels[levelNumber],
          self.gameSceneCallBack
        );
        break;
      }
    }
  }
  createCanvas() {
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      LevelSelectionLayer
    );
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(map, 0, 0, this.canvas.width, this.canvas.height);
    document.getElementById(this.id).style.zIndex = 2;
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
    document.getElementById(this.id).addEventListener(
      "mousedown",
      function (event) {
        event.preventDefault();
        var rect = document.getElementById(this.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        for (let s of levels) {
          if (
            Math.sqrt(
              (x - s.x - self.canvas.height / 20) *
                (x - s.x - self.canvas.height / 20) +
                (y - s.y - self.canvas.height / 20) *
                  (y - s.y - self.canvas.height / 20)
            ) < 45
          ) {
            delete new Sound().changeSourse("./assets/audios/ButtonClick.wav");
            levelNumber = s.index - 1;
            delete new Game(
              canvas.width,
              canvas.height,
              self.data.levels[s.index - 1],
              self.gameSceneCallBack,
              this.gameLevelData
            );
          }
        }
      },
      false
    );
    this.createLevelButtons(this.levelButtonpos);
  }
  createLevelButtons(levelButtonpos) {
    var poss = levelButtonpos[0];
    var i = 0;
    for (let s = 0; s < 10; s++) {
      var ns = new LevelConfig(poss[i][0], poss[i][1], i + 1);
      levels.push(ns);
      i += 1;
    }
    this.draw();
  }
  draw() {
    for (let s of levels) {
      this.drawlevel(s, canvas);
    }
    if (this.gameLevelData) {
      drawStars(this.gameLevelData);
    }
  }
  drawlevel(s, canvas) {
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
}

export function drawStars(gameLevelData) {
  let canvas = document.getElementById("canvas");
  for (let s of levels) {
    for (let i = 0; i < gameLevelData.length; i++) {
      if (s.index - 1 == parseInt(gameLevelData[i].levelNumber)) {
        drawStar(s, canvas, gameLevelData[i].levelStar);
        break;
      }
    }
  }
}
function drawStar(s, canvas, starCount) {
  var canavsElement = document.getElementById("levelSelectionCanvas");
  var context = canavsElement.getContext("2d");
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
