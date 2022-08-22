import { Monster } from "../components/monster.js";
import { TimerTicking } from "../components/timer-ticking.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import StonesLayer from "../components/stones-layer.js";
import PauseButton from "../components/buttons/pause_button.js";
import { LevelIndicators } from "../components/level-indicators.js";
import PausePopUp from "../components/pause-popup.js";
import { loadImages, loadingScreen } from "../common/common.js";
import { LevelEndScene } from "./level-end-scene.js";
import { LevelStartLayer } from "../common/common.js";
var images = {
  bgImg: "./assets/images/bg_v01.jpg",
  hillImg: "./assets/images/hill_v01.png",
  timer_empty: "./assets/images/timer_empty.png",
  pillerImg: "./assets/images/Totem_v02_v01.png",
  grassImg: "./assets/images/FG_a_v01.png",
  rotating_clock: "./assets/images/timer.png",
  fenchImg: "./assets/images/fence_v01.png",
  promptImg: "./assets/images/promptTextBg.png",
};
var self;
var length = 0;
export class LevelStartScene {
  constructor(game, puzzleData) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    self = this;
    this.monster = new Monster(game);
    this.canvasStack = new CanvasStack("canvas");
    this.createCanvas();
    this.timerTicking = new TimerTicking(game);
    this.stones = new StonesLayer(
      game,
      game.width,
      game.height,
      puzzleData[0],
      this.pauseButton,
      this.redrawOfStones
    );
    this.puzzleData = puzzleData;
  }

  redrawOfStones(status) {
    self.stones.deleteCanvas();
    length++;

    if (status) {
      self.monster.changeToEatAnimation();
    } else {
      self.monster.changeToSpitAnimation();
    }
    if (length >= 3) {
     setTimeout(()=>{
      new LevelEndScene(self.game,3,self.monster);
     },2100)
    }
    setTimeout(() => {
      self.stones = new StonesLayer(
        self.game,
        self.game.width,
        self.game.height,
        self.puzzleData[1],
        self.redrawOfStones
      );
    }, 2000);
  }
  createCanvas() {
    this.id = this.canvasStack.createLayer(this.height, this.width,LevelStartLayer);
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 3;
    this.pauseButton = new PauseButton(this.context, this.canavsElement);
    // new LevelEndScene(this.game,3,this.monster)
    this.levelIndicators = new LevelIndicators(
      this.context,
      this.canavsElement,
      0
    );
    var self = this;
    this.canavsElement.addEventListener("click", function (event) {
      var rect = document.getElementById(self.id).getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      // if (self.pauseButton.onClick(x, y)) {
      //   //self.levelIndicators.setIndicators(num++)
      //   new PausePopUp(self.canavsElement);
      // }
    });
  }

  deleteCanvas() {
    this.canvasStack.deleteLayer(this.id);
  }

  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(this.bgImg, 0, 0, this.width, this.height);
    this.context.drawImage(
      this.pillerImg,
      this.width * 0.6,
      this.height / 6,
      this.width,
      this.height / 2
    );
    this.context.drawImage(
      this.fenchImg,
      -this.width * 0.4,
      this.height / 3,
      this.width,
      this.height / 3
    );
    this.context.drawImage(
      this.hillImg,
      -this.width * 0.25,
      this.height / 2,
      this.width * 1.5,
      this.height / 2
    );
    this.context.drawImage(
      this.grassImg,
      -this.width * 0.25,
      this.height / 2 + (this.height / 2) * 0.1,
      this.width * 1.5,
      this.height / 2
    );
    this.context.drawImage(
      this.timer_empty,
      0,
      this.height * 0.1,
      this.width,
      this.height * 0.05
    );
    this.context.drawImage(
      this.rotating_clock,
      5,
      this.height * 0.09,
      this.width * 0.12,
      this.height * 0.06
    );

    this.context.drawImage(
      this.promptImg,
      this.width / 2 - (this.width * 0.3) / 2,
      this.height * 0.15,
      this.width * 0.3,
      this.height * 0.25
    );

    this.context.fillStyle = "black";
    this.context.font = 30 + "px Arial";
    this.context.fillText(
      this.puzzleData[0].targetStones[0],
      this.width / 2.1,
      this.height * 0.26
    );

    this.timerTicking.createBackgroud();
    this.stones.draw();
    this.pauseButton.draw();
    this.levelIndicators.draw();
  }

  createBackgroud() {
    var self = this;
    loadingScreen(true, self.canvasStack);
    var context = this.context;
    var width = this.width;
    var height = this.height;
    var puzzleData = this.puzzleData;
    console.log(this.context);
    loadImages(images, function (image) {
      context.drawImage(image.bgImg, 0, 0, width, height);
      context.drawImage(
        image.pillerImg,
        width * 0.6,
        height / 6,
        width,
        height / 2
      );
      context.drawImage(
        image.fenchImg,
        -width * 0.4,
        height / 3,
        width,
        height / 3
      );
      context.drawImage(
        image.hillImg,
        -width * 0.25,
        height / 2,
        width * 1.5,
        height / 2
      );
      context.drawImage(
        image.grassImg,
        -width * 0.25,
        height / 2 + (height / 2) * 0.1,
        width * 1.5,
        height / 2
      );
      context.drawImage(
        image.timer_empty,
        0,
        height * 0.1,
        width,
        height * 0.05
      );
      context.drawImage(
        image.rotating_clock,
        5,
        height * 0.09,
        width * 0.12,
        height * 0.06
      );
      context.drawImage(
        image.promptImg,
        width / 2 - (width * 0.3) / 2,
        height * 0.15,
        width * 0.3,
        height * 0.25
      );
      context.fillStyle = "black";
      context.font = 30 + "px Arial";
      context.fillText(
        puzzleData[0].targetStones[0],
        width / 2.1,
        height * 0.26
      );
      self.timerTicking.createBackgroud();
      self.stones.draw();
      self.pauseButton.draw();
      self.levelIndicators.draw();
      loadingScreen(false, self.canvasStack);
    });
  }
}
