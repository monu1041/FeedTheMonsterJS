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
var nextbtn = new Image();
nextbtn.src = "./assets/images/next_btn.png";
var backbtn = new Image();
backbtn.src = "./assets/images/back_btn.png";
var levelNumber: number;
var self: any;
var previousPlayedLevel: number = parseInt(
  localStorage.getItem("storePreviousPlayedLevel")
);
var level: number = 10 * Math.floor(previousPlayedLevel / 10);

console.log(previousPlayedLevel);
export class LevelSelectionScreen {
  public canvas: HTMLCanvasElement;
  public width: number;
  public height: number;
  public canvasStack: any;
  public data: any;
  public levels: any[];
  public sound: Sound;
  public id: string;
  public canavsElement: any;
  public context: CanvasRenderingContext2D;
  public levelButtonpos: any;

  constructor(canvas: HTMLCanvasElement, data: any) {
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
  gameSceneCallBack(button_name: string) {
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
    this.canavsElement.style.zIndex = 2;
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
        [this.canvas.width / 2.5, this.canvas.height / 1.3],
      ],
    ];
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ); // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          if (level != 140) {
            self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
            self.context.drawImage(
              map,
              0,
              0,
              self.canvas.width,
              self.canvas.height
            );

            level = level + 10;
            self.draw(level);
            self.downButton(level);
            self.drawStars();
            console.log(level);
          }
          /* right swipe */
        } else {
          if (level != 0) {
            level = level - 10;
          }
          self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
          self.context.drawImage(
            map,
            0,
            0,
            self.canvas.width,
            self.canvas.height
          );
          self.draw(level);
          self.downButton(level);
          self.drawStars();
          /* left swipe */
        }
      } else {
        if (yDiff > 0) {
          /* down swipe */
        } else {
          /* up swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
    document.getElementById(this.id).addEventListener(
      "mousedown",
      function (event) {
        event.preventDefault();
        var rect = document.getElementById(this.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (
          x >= self.canvas.width * 0.7 &&
          x < self.canvas.width * 0.7 + self.canvas.height / 10 &&
          y > self.canvas.height / 1.3 &&
          y < self.canvas.height / 1.3 + self.canvas.height / 10
        ) {
          if (level != 140) {
            self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
            self.context.drawImage(
              map,
              0,
              0,
              self.canvas.width,
              self.canvas.height
            );

            level = level + 10;
            self.draw(level);
            self.downButton(level);
            self.drawStars();
            console.log(level);
          }
        }

        if (
          x >= self.canvas.width / 10 &&
          x < self.canvas.width / 10 + self.canvas.height / 10 &&
          y > self.canvas.height / 1.3 &&
          y < self.canvas.height / 1.3 + self.canvas.height / 10
        ) {
          if (level != 0) {
            level = level - 10;
          }
          self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
          self.context.drawImage(
            map,
            0,
            0,
            self.canvas.width,
            self.canvas.height
          );
          self.draw(level);
          self.downButton(level);
          self.drawStars();
        }
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
            levelNumber = s.index + level - 1;
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
    this.draw(level);
    this.downButton(level);
  }
  draw(level: number) {
    for (let s of self.levels) {
      this.drawlevel(s, self.canvas);
    }
  }
  downButton(level: number) {
    var imageSize = self.canvas.height / 10;
    if (level != 140) {
      this.context.drawImage(
        nextbtn,
        this.canvas.width * 0.7,
        this.canvas.height / 1.3,
        imageSize,
        imageSize
      );
    }
    if (level != 0) {
      this.context.drawImage(
        backbtn,
        this.canvas.width / 10,
        this.canvas.height / 1.3,
        imageSize,
        imageSize
      );
    }
    // if (level != 0) {
    //   this.context.clearRect(300, 500, imageSize, imageSize);
    //   this.context.save();
    //   this.context.translate(imageSize, imageSize);
    //   this.context.rotate(90);
    //   this.context.drawImage(next, 300, 500, imageSize, imageSize);
    // }
  }

  drawlevel(s: any, canvas: { height: number }) {
    var imageSize = canvas.height / 5;
    var textFontSize = imageSize / 6;

    this.context.drawImage(mapIcon, s.x, s.y, imageSize, imageSize);
    this.context.fillStyle = "white";
    this.context.font = textFontSize + "px Arial";
    this.context.textAlign = "center";
    this.context.fillText(
      s.index + level,
      s.x + imageSize / 3.5,
      s.y + imageSize / 3
    );
    this.context.font = textFontSize - imageSize / 30 + "px Arial";
    this.context.fillText(
      this.data.levels[s.index + level - 1].levelMeta.levelType,
      s.x + imageSize / 3.5,
      s.y + imageSize / 1.3
    );
  }
  startGame(level_number: string | number) {
    new Game(
      this.canvas.width,
      this.canvas.height,
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
          if (s.index - 1 + level == parseInt(gameLevelData[i].levelNumber)) {
            this.drawStar(s, canvas, gameLevelData[i].levelStar);
            break;
          }
        }
      }
    }
  }
  drawStar(s: any, canvas: any, starCount: number) {
    var canavsElement = <HTMLCanvasElement>(
      document.getElementById("levelSelectionCanvas")
    );
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
}
