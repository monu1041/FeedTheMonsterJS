import { StoneLayer } from "../common/common.js";
import Sound from "../common/sound.js";
import { StoneConfig } from "../common/stones-config.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import PauseButton from "./buttons/pause_button.js";
import PausePopUp from "./pause-popup.js";

var gs = {
  mode: "gameplay",
  levelnum: 0,
};
gs.puzzle = {
  target: [],
  stones: [],
};
gs.stones = [];
var pickedStone;
var offsetCoordinateValue = 32;
export default class StonesLayer {
  constructor(canvas, puzzleData, pausebutton, callBack, levelStart) {
    this.canvas = canvas;
    this.levelStart = levelStart;
    this.width = canvas.width;
    this.pausebutton = pausebutton;
    this.height = canvas.height;
    this.canvasStack = new CanvasStack("canvas");
    this.puzzleData = puzzleData;
    this.setCurrentPuzzle();
    this.levelStart = levelStart;
    this.callBack = callBack;
    this.createCanvas();
  }

  setNewPuzzle(currentPuzzle) {
    this.puzzleData = currentPuzzle;
    this.setCurrentPuzzle();
    this.createStones(this.stonepos);
  }

  setCurrentPuzzle() {
    this.levelStart.audio.changeSourse(this.puzzleData.prompt.promptAudio);
    gs.puzzle.stones = [];
    gs.puzzle.target = [];
    for (let target of this.puzzleData.targetStones) {
      gs.puzzle.target.push(target);
    }
    gs.puzzle.stones = this.puzzleData.foilStones;
    gs.puzzle.prompt = this.puzzleData.prompt.promptText;
  }
  isTimerEnded() {
    pickedStone = null;
  }
  createCanvas() {
    var self = this;
    this.id = this.canvasStack.createLayer(this.height, this.width, StoneLayer);
    this.context = document.getElementById(this.id).getContext("2d");
    document.getElementById(this.id).style.zIndex = 7;
    document.getElementById(this.id).style.bottom = 0;
    this.stonepos = [
      [
        [
          this.canvas.width / 5 - offsetCoordinateValue,
          this.canvas.height / 1.9 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 2 - offsetCoordinateValue,
          this.canvas.height / 1.15 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 3.5 +
            this.canvas.width / 2 -
            offsetCoordinateValue,
          this.canvas.height / 1.2 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 4 - offsetCoordinateValue,
          this.canvas.height / 1.28 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 7 - offsetCoordinateValue,
          this.canvas.height / 1.5 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 2.3 +
            this.canvas.width / 2.1 -
            offsetCoordinateValue,
          this.canvas.height / 1.9 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 2.3 +
            this.canvas.width / 2.1 -
            offsetCoordinateValue,
          this.canvas.height / 1.42 - offsetCoordinateValue,
        ],
        [
          this.canvas.width / 6 - offsetCoordinateValue,
          this.canvas.height / 1.15 - offsetCoordinateValue,
        ],
      ],
    ];
    document
      .getElementById(this.id)
      .addEventListener("click", function (event) {
        var rect = document.getElementById(self.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (
          Math.sqrt(x - this.width / 3) < 12 &&
          Math.sqrt(y - this.height / 5.5) < 10
        ) {
          self.levelStart.audio.changeSourse(
            self.puzzleData.prompt.promptAudio
          );
        }
        if (
          Math.sqrt(
            (x - this.width / 2 - (this.width * 0.3) / 2) *
              (x - this.width / 2 - (this.width * 0.3) / 2)
          ) +
            (y - this.height * 0.15) * (y - this.height * 0.15) <=
          1000
        ) {
        }
      });

    document.getElementById(this.id).addEventListener(
      "mousedown",
      function (event) {
        var rect = document.getElementById(this.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        self.levelStart.timerTicking.resumeTimer();
        if (self.pausebutton.onClick(x, y)) {
          self.levelStart.timerTicking.pauseTimer();
          self.levelStart.levelEndCallBack();
          new PausePopUp(document.getElementById(self.id), self.levelStart);
        }
        for (let s of gs.stones) {
          if (Math.sqrt((x - s.x) * (x - s.x) + (y - s.y) * (y - s.y)) <= 40) {
            self.levelStart.audio.changeSourse("./assets/audios/onDrag.mp3");
            pickedStone = s;
          }
        }
      },
      false
    );
    document.getElementById(this.id).addEventListener(
      "mouseup",
      function (event) {
        var rect = document.getElementById(this.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (
          Math.sqrt(
            (x -
              self.canvas.scene.monster.x -
              self.canvas.scene.monster.width / 4) *
              (x -
                self.canvas.scene.monster.x -
                self.canvas.scene.monster.width / 4) +
              (y -
                self.canvas.scene.monster.y -
                self.canvas.scene.monster.height / 2.7) *
                (y -
                  self.canvas.scene.monster.y -
                  self.canvas.scene.monster.height / 2.7)
          ) <= 60
        ) {
          if (pickedStone) {
            pickedStone.x = -900;
            pickedStone.y = -900;

            if (pickedStone.text == gs.puzzle.target[0]) {
              gs.puzzle.target.shift();
              if (gs.puzzle.target.length == 0) {
                gs.stones = [];
                self.callBack(true, true);
              } else {
                self.callBack(true, false);
              }
            } else {
              gs.stones = [];
              self.callBack(false, true);
            }
          }
          pickedStone = null;
        }
        if (pickedStone) {
          pickedStone.x = pickedStone.origx;
          pickedStone.y = pickedStone.origy;
        }
        pickedStone = null;
      },
      false
    );
    document.getElementById(this.id).addEventListener(
      "mousemove",
      function (event) {
        var rect = document.getElementById(this.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (pickedStone) {
          pickedStone.x = x;
          pickedStone.y = y;
        }
      },
      false
    );

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
      "touchmove",
      function (e) {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        document.getElementById(this.id).dispatchEvent(mouseEvent);
      },
      false
    );

    document.getElementById(this.id).addEventListener(
      "touchend",
      function (e) {
        var touch = e.changedTouches[0];
        var mouseEvent = new MouseEvent("mouseup", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        document.getElementById(this.id).dispatchEvent(mouseEvent);
      },
      false
    );

    this.createStones(this.stonepos);
  }

  setPrompt() {
    this.context.fillStyle = "black";
    this.context.font = this.width * 0.09 + "px Arial";
    this.context.textAlign = "center";
    this.context.fillText(gs.puzzle.prompt, this.width / 2, this.height * 0.27);
  }
  deleteCanvas() {
    this.canvasStack.deleteLayer(this.id);
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let s of gs.stones) {
      this.drawstone(s, canvas);
    }
  }

  drawstone(s, canvas) {
    var imageSize = canvas.height / 13;
    var textFontSize = canvas.height / 20;
    var imageCenterOffsetX = imageSize / 2.3;
    var imageCenterOffsetY = imageSize / 1.5;

    this.context.drawImage(
      s.img,
      s.x - imageCenterOffsetX,
      s.y - imageCenterOffsetY,
      imageSize,
      imageSize
    );
    this.context.fillStyle = "white";
    this.context.font = textFontSize + "px Arial";
    this.context.textAlign = "center";
    this.context.fillText(s.text, s.x, s.y);
  }

  createStones(stonepos) {
    var poss = stonepos[0];
    var i = 0;
    gs.stones.splice(0, gs.stones.length);
    for (let s of gs.puzzle.stones) {
      var ns = new StoneConfig(s, poss[i][0], poss[i][1]);
      gs.stones.push(ns);
      i += 1;
    }
    this.draw();
  }

  update() {
    this.draw();
  }
}
