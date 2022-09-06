import { Monster } from "../components/monster.js";
import { TimerTicking } from "../components/timer-ticking.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import StonesLayer from "../components/stones-layer.js";
import PauseButton from "../components/buttons/pause_button.js";
import { LevelIndicators } from "../components/level-indicators.js";
import {
  LevelEndButtonsLayer,
  LevelEndLayer,
  loadImages,
  loadingScreen,
  StoneLayer,
  TimetickerLayer,
} from "../common/common.js";
import { LevelEndScene } from "./level-end-scene.js";
import { LevelStartLayer } from "../common/common.js";
import { GameEndScene } from "./game-end-scene.js";
import Sound from "../common/sound.js";
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
var audioUrl = {
  phraseAudios: [
    "./assets/audios/fantastic.WAV",
    "./assets/audios/good job.WAV",
    "./assets/audios/great.wav",
  ],
  monsterSplit: "./assets/audios/Monster Spits wrong stones-01.mp3",
  monsterHappy: "./assets/audios/Cheering-02.mp3",
  monsterSad: "./assets/audios/Disapointed-05.mp3",
  buttonClick: "./assets/audios/ButtonClick.wav",
};
var self;
var current_puzzle_index = 0;
var score = 0;
export class LevelStartScene {
  constructor(game, levelData, levelStartCallBack) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    self = this;
    this.monster = new Monster(game);
    this.audio = new Sound();
    this.canvasStack = new CanvasStack("canvas");

    this.timerTicking = new TimerTicking(game, this);
    this.createCanvas();
    this.stones = new StonesLayer(
      game,
      levelData.puzzles[current_puzzle_index],
      this.pauseButton,
      this.redrawOfStones,
      this
    );
    this.puzzleData = levelData.puzzles;
    this.levelData = levelData;
    this.levelStartCallBack = levelStartCallBack;
  }

  levelEndCallBack(button_name) {
    self.audio.changeSourse(audioUrl.buttonClick);
    switch (button_name) {
      case "close_button": {
        self.exitAllScreens();
        break;
      }
      case "next_button": {
        self.exitAllScreens();
        self.levelStartCallBack(button_name);
        break;
      }
      case "retry_button": {
        self.exitAllScreens();
        self.levelStartCallBack(button_name);
        break;
      }
    }
  }

  redrawOfStones(status) {
    self.timerTicking.stopTimer();
    if (status) {
      self.audio.changeSourse(
        audioUrl.phraseAudios[Math.floor(Math.random() * 3)]
      );
      self.audio.changeSourse(audioUrl.monsterHappy);
      self.monster.changeToEatAnimation();
      score += 100;
      current_puzzle_index += 1;
    } else {
      self.audio.changeSourse(audioUrl.monsterSad);
      self.audio.changeSourse(audioUrl.monsterSplit);
      self.monster.changeToSpitAnimation();
      current_puzzle_index += 1;
    }
    if (current_puzzle_index == self.puzzleData.length) {
      setTimeout(() => {
        self.levelStartCallBack();
        if (self.levelData.levelNumber == 9) {
          self.exitAllScreens();
          delete new GameEndScene(self.game);
        } else {
          delete new LevelEndScene(
            self.game,
            score,
            self.monster,
            self.levelEndCallBack,
            self.levelData
          );
        }
      }, 2100);
    } else {
      self.levelIndicators.setIndicators(current_puzzle_index);
      setTimeout(() => {
        self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
        self.stones.setPrompt();
        self.timerTicking.draw();
      }, 3000);
    }
  }

  createCanvas() {
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      LevelStartLayer
    );
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 3;
    this.pauseButton = new PauseButton(this.context, this.canavsElement);
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
    });
  }

  deleteCanvas() {
    this.canvasStack.deleteLayer(this.id);
  }
  exitAllScreens() {
    self.canvasStack.deleteLayer(LevelEndLayer);
    self.canvasStack.deleteLayer(LevelEndButtonsLayer);
    self.canvasStack.deleteLayer(LevelStartLayer);
    self.monster.deleteCanvas();
    self.canvasStack.deleteLayer(StoneLayer);
    self.canvasStack.deleteLayer(TimetickerLayer);
    self.monster.changeImage("./assets/images/idle4.png");
    delete self.monster;
    delete self.audio;
    delete self.levelIndicators;
    delete self.pauseButton;
    delete self.stones;
    delete self.timerTicking;
    delete self.canvasStack;
    delete self.monster;
    current_puzzle_index = 0;

    score = 0;
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
      this.puzzleData[current_puzzle_index].targetStones[0],
      this.width / 2.1,
      this.height * 0.26
    );

    this.timerTicking.createBackgroud();
    this.stones.draw();
    this.pauseButton.draw();
    this.levelIndicators.draw();
  }
  update() {
    self.timerTicking ? self.timerTicking.update() : null;
  }

  changePuzzle() {
    if (self.timerTicking.isTimerEnded) {
      current_puzzle_index += 1;
      self.stones.canvas.scene.levelIndicators.setIndicators(
        current_puzzle_index
      );
      if (current_puzzle_index == self.puzzleData.length) {
        self.levelStartCallBack();
        delete self.timerTicking;
        delete new LevelEndScene(
          self.game,
          score,
          self.monster,
          self.levelEndCallBack,
          self.levelData
        );
      } else {
        self.stones.setPrompt();
        self.timerTicking.draw();
        self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
      }

      self.timerTicking ? (self.timerTicking.isTimerEnded = false) : null;
    }
  }

  createBackgroud() {
    var self = this;
    loadingScreen(true, self.canvasStack);
    var context = this.context;
    var width = this.width;
    var height = this.height;
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
        width / 2 - (width * 0.5) / 2,
        height * 0.15,
        width * 0.5,
        height * 0.25
      );
      self.timerTicking.createBackgroud();
      self.stones.draw();
      self.pauseButton.draw();
      self.levelIndicators.draw();
      loadingScreen(false, self.canvasStack);
    });
  }
}
