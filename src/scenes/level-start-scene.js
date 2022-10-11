import { Monster } from "../components/monster.js";
import { TimerTicking } from "../components/timer-ticking.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import StonesLayer from "../components/stones-layer.js";
import { PromptText } from "../components/prompt-text.js";
import PauseButton from "../components/buttons/pause_button.js";
import { LevelIndicators } from "../components/level-indicators.js";
import {
  LevelEndButtonsLayer,
  LevelEndLayer,
  loadImages,
  loadingScreen,
  StoneLayer,
  TimetickerLayer,
  PromptTextLayer,
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
  fantastic: "./assets/images/fantastic_01.png",
  great: "./assets/images/great_01.png",
};
var audioUrl = {
  phraseAudios: [
    "./assets/audios/fantastic.WAV",
    // "./assets/audios/good job.WAV",
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
var isGamePause = false;
var noMoreTarget = false;
var isLevelEnded = false;
export class LevelStartScene {
  constructor(game, levelData, levelStartCallBack) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    self = this;
    this.monster = new Monster(game);
    this.audio = new Sound();
    this.canvasStack = new CanvasStack("canvas");
    this.levelData = levelData;
    this.levelStartCallBack = levelStartCallBack;
    this.timerTicking = new TimerTicking(game, this);
    this.promptText = new PromptText(
      game,
      this,
      levelData.puzzles[current_puzzle_index],
      levelData
    );
    this.createCanvas();

    this.stones = new StonesLayer(
      game,
      levelData.puzzles[current_puzzle_index],
      this.pauseButton,
      this.redrawOfStones,
      this
    );
    this.puzzleData = levelData.puzzles;
  }

  levelEndCallBack(button_name) {
    if (!isGamePause) {
      isGamePause = true;
      if (isLevelEnded) {
        isLevelEnded = false;
        isGamePause = false;
      }
    } else {
      if (current_puzzle_index == self.puzzleData.length) {
        if (noMoreTarget) {
          self.levelEnded();
          current_puzzle_index = 0;
        }
      } else {
        isGamePause = false;
        if (noMoreTarget && button_name != "close_button") {
          setTimeout(() => {
            self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
            self.promptText.setCurrrentPuzzleData(
              self.puzzleData[current_puzzle_index]
            );
            self.timerTicking.draw();
            self.promptText.draw();
          }, 1000);
        }
      }
    }
    self.audio.changeSourse(audioUrl.buttonClick);
    switch (button_name) {
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
      case "close_button": {
        isGamePause = false;
        self.exitAllScreens();
        self.levelStartCallBack(button_name);
        break;
      }
    }
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  redrawOfStones(status, emptyTarget) {
    noMoreTarget = emptyTarget;
    var fntsticOrGrtIndex = self.getRandomInt(0, 1);
    if (status) {
      self.monster.changeToEatAnimation();
      self.audio.changeSourse(audioUrl.monsterHappy);
      if (emptyTarget) {
        setTimeout(() => {
          self.audio.changeSourse(audioUrl.phraseAudios[fntsticOrGrtIndex]);
          self.promptText.showFantasticOrGreat(fntsticOrGrtIndex);
        }, 1000);
        self.timerTicking.stopTimer();
        score += 100;

        current_puzzle_index += 1;
      } else {
      }
    } else {
      self.timerTicking.stopTimer();
      self.monster.changeToSpitAnimation();
      self.audio.changeSourse(audioUrl.monsterSad);
      setTimeout(() => {
        self.audio.changeSourse(audioUrl.monsterSplit);
      }, 1000);

      current_puzzle_index += 1;
    }
    if (current_puzzle_index == self.puzzleData.length) {
      self.levelIndicators.setIndicators(current_puzzle_index);
      for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
          if (i == 3 && !isGamePause) {
            self.levelEnded();
          }
        }, i * 1166.66);
      }
    } else {
      if (emptyTarget) {
        self.levelIndicators.setIndicators(current_puzzle_index);
        for (let i = 0; i <= 3; i++) {
          setTimeout(() => {
            if (i == 3 && !isGamePause) {
              self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
              self.promptText.setCurrrentPuzzleData(
                self.puzzleData[current_puzzle_index]
              );
              self.timerTicking.draw();
              self.promptText.draw();
            }
          }, i * 1166.66);
        }
      }
    }
  }
  levelEnded() {
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
        self.levelData,
        isGamePause
      );
    }
    isLevelEnded = true;
  }
  createCanvas() {
    window.addEventListener("resize", async () => {
      self.deleteObjects();
    });

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
    self.canvasStack.deleteLayer(PromptTextLayer);
    self.monster.changeImage("./assets/images/idle4.png");
    self.deleteObjects();
  }
  deleteObjects() {
    delete self.monster;
    delete self.audio;
    delete self.levelIndicators;
    delete self.pauseButton;
    delete self.stones;
    delete self.timerTicking;
    delete self.canvasStack;
    delete self.monster;
    delete self.promptText;
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

    this.timerTicking.createBackgroud();
    this.stones.draw();
    this.pauseButton.draw();
    this.levelIndicators.draw();
    this.promptText.createBackground();
  }
  update() {
    self.timerTicking ? self.timerTicking.update() : null;
  }

  changePuzzle() {
    if (self.timerTicking.isTimerEnded) {
      self.stones.isTimerEnded();
      console.log("time's up");
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
        // self.promptText.setCurrrentPromptText(
        //   self.puzzleData[current_puzzle_index].prompt.promptText
        // );
        self.promptText.setCurrrentPuzzleData(
          self.puzzleData[current_puzzle_index]
        );
        self.timerTicking.draw();
        self.promptText.draw();
        self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
      }

      self.timerTicking ? (self.timerTicking.isTimerEnded = false) : null;
    }
  }

  createBackgroud() {
    var self = this;
    loadingScreen(true);
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
      self.timerTicking.createBackgroud();
      self.stones.draw();
      self.pauseButton.draw();
      self.levelIndicators.draw();
      self.promptText.createBackground();
      loadingScreen(false);
    });
  }
}
