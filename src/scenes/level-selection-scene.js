import { LevelStartScene } from "./level-start-scene.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import { gameData } from "../../data.js";
import { LevelConfig } from "../common/level-config.js";
import { Game } from "./game.js";
import { LevelSelectionLayer } from "../common/common.js";

var gs = {
  mode: "gameplay",
  levelnum: 0,
};
gs.puzzle = {
  puzzlenum: 0,
  target: "e",
  levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
gs.levels = [];
var self;
var levelNumber;
var mapIcon = new Image();
mapIcon.src = "./assets/images/mapIcon.png";
var pickedStone;
var offsetCoordinateValue = 32;
export class LevelSelectionScreen {
  constructor(canvas, data) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvasStack = new CanvasStack("canvas");
    this.data = data;
    gs.puzzle.levels = this.getallLevelNo(data);
    this.createCanvas();
    self = this;
  }
  getallLevelNo(data) {
    var levelNos = [];
    data.levels.map((levelData, index) => {
      if (index < 10) {
        levelNos.push(parseInt(levelData.levelNumber) + 1);
      }
    });
    return levelNos;
  }
  gameSceneCallBack(button_name) {
    switch (button_name) {
      case "next_button": {
        new Game(
          canvas.width,
          canvas.height,
          self.data.levels[levelNumber + 1].puzzles,
          self.gameSceneCallBack
        );
        break;
      }
      case "retry_button": {
        new Game(
          canvas.width,
          canvas.height,
          self.data.levels[levelNumber].puzzles,
          self.gameSceneCallBack
        );
        break;
      }
    }
  }
  createCanvas() {
    var self = this;
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      LevelSelectionLayer
    );
    this.context = document.getElementById(this.id).getContext("2d");

    document.getElementById(this.id).style.zIndex = 2;
    this.levelButtonpos = [
      [
        [
          this.canvas.width / 5 - offsetCoordinateValue,
          this.canvas.height / 6 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 2 - offsetCoordinateValue,
          this.canvas.height / 6 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 3 +
            this.canvas.width / 2.1 -
            offsetCoordinateValue,
          this.canvas.height / 6 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 5 - offsetCoordinateValue,
          this.canvas.height / 2.8 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 2 - offsetCoordinateValue,
          this.canvas.height / 2.8 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 3 +
            this.canvas.width / 2.1 -
            offsetCoordinateValue,
          this.canvas.height / 2.8 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 20 +
            this.canvas.width / 7 -
            offsetCoordinateValue,
          this.canvas.height / 1.8 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 2 - offsetCoordinateValue,
          this.canvas.height / 1.8 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 3 +
            this.canvas.width / 2.1 -
            offsetCoordinateValue,
          this.canvas.height / 1.8 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 5 - offsetCoordinateValue,
          this.canvas.height / 1.3 - offsetCoordinateValue,
        ],
      ],
    ];

    document.getElementById(this.id).addEventListener(
      "touchstart",
      function (e) {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        document.getElementById(this.id).dispatchEvent(mouseEvent);
      },
      false
    );
    document.getElementById(this.id).addEventListener(
      "mousedown",
      function (event) {
        event.preventDefault();
        var rect = document.getElementById(self.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        for (let s of gs.levels) {
          if (Math.sqrt((x - s.x) * (x - s.x) + (y - s.y) * (y - s.y)) <= 80) {
            levelNumber = s.index - 1;
            new Game(
              canvas.width,
              canvas.height,
              self.data.levels[s.index - 1].puzzles,
              self.gameSceneCallBack
            );
          }
        }
      },
      false
    );

    this.createLevelButtons(this.levelButtonpos);
  }

  deleteCanvas() {}

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let s of gs.levels) {
      this.drawlevel(s, canvas);
    }
  }

  drawlevel(s, canvas) {
    var imageCenterOffsetX = canvas.height / 70 - canvas.height / 30;
    var imageCenterOffsetY = -canvas.height / 60 - canvas.height / 44;
    var imageSize = canvas.height / 5;
    var textFontSize = imageSize / 6;

    this.context.drawImage(
      mapIcon,
      s.x + imageCenterOffsetX,
      s.y + imageCenterOffsetY,
      imageSize,
      imageSize
    );
    this.context.fillStyle = "white";
    this.context.font = textFontSize + "px Arial";
    this.context.fillText(s.text, s.x + imageSize / 7, s.y + imageSize / 7);
    this.context.font = textFontSize - imageSize / 20 + "px Arial";
    this.context.fillText(
      this.data.levels[s.text].levelMeta.levelType,
      s.x - imageSize / 6,
      s.y + imageSize / 1.6
    );
  }

  createLevelButtons(levelButtonpos) {
    var poss = levelButtonpos[0];
    var i = 0;
    for (let s of gs.puzzle.levels) {
      var ns = new LevelConfig(s, poss[i][0], poss[i][1], i + 1);
      gs.levels.push(ns);
      i += 1;
    }
    this.draw();
  }

  update() {
    this.draw();
  }
}
