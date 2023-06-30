import { lang, pseudoId } from "../../global-variables.js";
import { FeedbackAudio, GameFields, PhraseAudio } from "../common/common.js";
import Sound from "../common/sound.js";
import { StoneConfig } from "../common/stones-config.js";
import { getDatafromStorage } from "../data/profile-data.js";
import { FirebaseIntegration } from "../firebase/firebase_integration.js";
import { LevelIndicators } from "./level-indicators.js";
import { Tutorial } from "./tutorial.js";
import Monster from "./animation/monster.js";
import { TextEffects } from "./animation/text_effects.js";
import PromptText from "./prompt_text.js";
var self;
var frameCount: number = 0;
var audioUrl = {
  phraseAudios: [
    "./lang/" + lang + "/audios/fantastic.mp3",
    "./lang/" + lang + "/audios/great.mp3",
  ],
  monsterSplit: "./assets/audios/Monster Spits wrong stones-01.mp3",
  monsterEat: "./assets/audios/Eat.mp3",
  monsterHappy: "./assets/audios/Cheering-02.mp3",
  monsterSad: "./assets/audios/Disapointed-05.mp3",
  ondragStart: "./assets/audios/onDrag.mp3",
};
export default class StonePage {
  public context: CanvasRenderingContext2D;
  public canvas: { width: any; height?: number };
  public currentPuzzleData: any;
  public targetStones: any;
  public stonePos: Array<any>;
  public pickedStone: StoneConfig;
  public stoneHtmlElement: any;
  public foilStones: Array<StoneConfig> = new Array<StoneConfig>();
  public monster: Monster;
  public answer: string = "";
  public callbackFuntion: any;
  public levelIndicators: LevelIndicators;
  public puzzleNumber: number;
  public levelData: any;
  public promptButton: PromptText;
  public correctAnswer: string;
  public feedbackEffects: TextEffects;
  public tutorialPosition: Array<any>;
  public audio: Sound;
  public puzzleStartTime: Date;
  public tutorial: Tutorial;
  public showTutorial: boolean =
    getDatafromStorage().length == undefined ? true : false;
  feedbackTextCanvasElement: any;
  public feedBackTexts: any;
  constructor(
    context: CanvasRenderingContext2D,
    canvas: { width: number; height?: number },
    stoneHtmlElement,
    puzzleNumber,
    levelData,
    monster,
    levelIndicators,
    promptButton,
    feedbackEffects,
    feedBackTexts,
    audio,
    feedbackTextCanvasElement,
    callbackFuntion
  ) {
    self = this;
    this.context = context;
    this.canvas = canvas;
    this.stoneHtmlElement = stoneHtmlElement;
    this.puzzleNumber = puzzleNumber;
    this.levelData = levelData;
    this.feedBackTexts = feedBackTexts;
    this.currentPuzzleData = this.levelData.puzzles[this.puzzleNumber];
    this.targetStones = [...this.currentPuzzleData.targetStones];
    this.monster = monster;
    this.levelIndicators = levelIndicators;
    this.callbackFuntion = callbackFuntion;
    this.correctAnswer = this.targetStones.join("");
    this.initializeStonePos();
    this.feedbackEffects = feedbackEffects;
    this.feedbackTextCanvasElement = feedbackTextCanvasElement;
    this.promptButton = promptButton;
    this.audio = audio;
    this.tutorial = new Tutorial(context, canvas);
    this.createStones();
    this.draw(0);
    this.eventListners();
    this.puzzleStartTime = new Date();
  }
  draw(deltaTime) {
    if (
      this.showTutorial &&
      GameFields.showTutorial &&
      !GameFields.tutorialStatus
    ) {
      this.tutorial.draw(deltaTime);
      clearTimeout(GameFields.setTimeOuts.timerShowTutorial);
    }
    if (this.answer === this.correctAnswer && GameFields.isGamePaused) {
      GameFields.puzzleCompleted = true;
    }
    if (this.targetStones.length == 0) {
      this.levelIndicators.setIndicators(this.puzzleNumber + 1);
      if (GameFields.puzzleCompleted && !GameFields.isGamePaused) {
        if (navigator.onLine) {
          this.puzzleEndFirebaseEvents(
            this.answer == this.correctAnswer ? "success" : "failure",
            this.puzzleNumber,
            this.answer,
            this.currentPuzzleData.targetStones,
            this.currentPuzzleData.foilStones,
            this.puzzleStartTime
          );
        }
        this.callbackFuntion();
      }
    }

    if (GameFields.TimeOver) {
      this.callbackFuntion();
    }
    if (GameFields.drawStones) {
      for (let fs of this.foilStones) {
        this.drawstone(fs);
      }
    }
  }
  createStones() {
    var i = 0;
    for (var i = 0; i < this.currentPuzzleData.foilStones.length; i++) {
      this.foilStones.push(
        new StoneConfig(
          this.currentPuzzleData.foilStones[i],
          this.stonePos[i][0],
          this.stonePos[i][1]
        )
      );
    }
    this.foilStones.forEach((stone) => {
      if (stone.text == this.targetStones[0]) {
        this.tutorialPosition = [stone.targetX, stone.targetY];
        this.tutorial.updateTargetStonePositions(this.tutorialPosition);
        this.tutorial.animateImage();
      }
    });
  }
  displayTutorial(){
    if (!GameFields.showTutorial) {
      GameFields.setTimeOuts.timerShowTutorial = setTimeout(() => {
        GameFields.showTutorial = true;
        clearTimeout(GameFields.setTimeOuts.timerShowTutorial);
      }, 2000);
    }
  }
  eventListners() {
    GameFields.setTimeOuts.timerDrawStones = setTimeout(() => {
      !GameFields.isTimerPaused ? (GameFields.drawStones = true) : null;
      this.displayTutorial()
    }, 4000);
    var rect = self.stoneHtmlElement.getBoundingClientRect();
    this.stoneHtmlElement.addEventListener("click", function (event) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (
        Math.sqrt(
          (x - self.monster.x - self.canvas.width / 4) *
            (x - self.monster.x - self.canvas.width / 4) +
            (y - self.monster.y - self.canvas.height / 2.7) *
              (y - self.monster.y - self.canvas.height / 2.7)
        ) <= 60
      ) {
        GameFields.drawStones = true;
        self.displayTutorial()
      }
    });
    this.stoneHtmlElement.addEventListener(
      "mousedown",
      function (event) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        for (let sc of self.foilStones) {
          if (
            Math.sqrt((x - sc.x) * (x - sc.x) + (y - sc.y) * (y - sc.y)) <= 40
          ) {
            self.audio.playSound(audioUrl.ondragStart, PhraseAudio);
            // dragAudio.currentTime = 0;
            // dragAudio.play();
            self.pickedStone = sc;
            //  self.callBack("dragMonsterAnimation");
          }
        }
      },
      false
    );
    this.stoneHtmlElement.addEventListener(
      "mousemove",
      function (event) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (self.pickedStone) {
          self.monster.changeToDragAnimation();
          self.pickedStone.x = x;
          self.pickedStone.y = y;
        }
      },
      false
    );
    this.stoneHtmlElement.addEventListener(
      "mouseup",
      function (event) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (
          Math.sqrt(
            (x - self.monster.x - self.canvas.width / 4) *
              (x - self.monster.x - self.canvas.width / 4) +
              (y - self.monster.y - self.canvas.height / 2.7) *
                (y - self.monster.y - self.canvas.height / 2.7)
          ) <= 60
        ) {
          self.checkDraggedOption();
        } else {
          self.monster.changeToIdleAnimation();
        }

        self.pickedStone = null;
      },
      false
    );

    this.stoneHtmlElement.addEventListener(
      "touchstart",
      function (e) {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        self.stoneHtmlElement.dispatchEvent(mouseEvent);
      },
      false
    );

    this.stoneHtmlElement.addEventListener(
      "touchmove",
      function (e) {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        self.stoneHtmlElement.dispatchEvent(mouseEvent);
      },
      false
    );

    this.stoneHtmlElement.addEventListener(
      "touchend",
      function (e) {
        var touch = e.changedTouches[0];
        var mouseEvent = new MouseEvent("mouseup", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        self.stoneHtmlElement.dispatchEvent(mouseEvent);
      },
      false
    );
  }
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  checkDraggedOption() {
    if(this.pickedStone){
      GameFields.tutorialStatus = true
    }
    if (
      this.targetStones.length > 0 &&
      this.pickedStone &&
      this.targetStones[0] == this.pickedStone.text
    ) {
      this.answer = this.answer + this.pickedStone.text;

      this.targetStones.shift();
      GameFields.droppedStones = GameFields.droppedStones + 1;
      this.promptButton.draw();
      self.foilStones = self.foilStones.filter(
        (element) => element !== self.pickedStone
      );
      if (this.answer == this.correctAnswer) {
        GameFields.gameScore = GameFields.gameScore + 100;
        var randomIndex = self.getRandomInt(0, 1);
        this.promptButton.showFantasticOrGreat(Object.values(this.feedBackTexts)[randomIndex]);
        this.feedbackTextCanvasElement.style.zIndex = "8";
        this.feedbackEffects.wrapText(Object.values(this.feedBackTexts)[randomIndex]);
        this.foilStones = [];
        GameFields.setTimeOuts.timerFeedback = setTimeout(() => {
          self.audio.playSound(audioUrl.phraseAudios[randomIndex], FeedbackAudio);
          GameFields.setTimeOuts.timerPuzzleCmptd = setTimeout(() => {
            GameFields.isTimerPaused
              ? (GameFields.puzzleCompleted = true)
              : null;
          }, 2000);
        }, 1000);
      }
      self.audio.playSound(audioUrl.monsterEat, PhraseAudio);
      self.audio.playSound(audioUrl.monsterHappy, PhraseAudio);
      this.monster.changeToEatAnimation();
    } else {
      if (this.pickedStone) {
        this.answer = this.answer + this.pickedStone.text;
        this.targetStones = [];
        this.foilStones = [];
        self.audio.playSound(audioUrl.monsterSad, PhraseAudio);
        GameFields.setTimeOuts.timerMonsterSplit = setTimeout(() => {
          self.audio.playSound(audioUrl.monsterSplit, PhraseAudio);
        });
        this.monster.changeToSpitAnimation();
      }
    }
    if (this.targetStones.length == 0) {
      GameFields.isTimerPaused = true;
    }
    // console.log("TArgetStones", this.targetStones.length);
  }
  initializeStonePos() {
    var offsetCoordinateValue = 32;
    this.stonePos = [
      [
        this.canvas.width / 5 - offsetCoordinateValue,
        this.canvas.height / 1.9 - offsetCoordinateValue,
      ],
      [
        this.canvas.width / 2 - offsetCoordinateValue,
        this.canvas.height / 1.15 - offsetCoordinateValue,
      ],
      [
        this.canvas.width / 3.5 + this.canvas.width / 2 - offsetCoordinateValue,
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
    ];
    this.stonePos = this.stonePos.sort(() => Math.random() - 0.5);
  }
  drawstone(stoneConfig: StoneConfig) {
    const duration = 200; // Animation duration in milliseconds
    const updateInterval = 10;

    if (!this.pickedStone) {
      stoneConfig.stepX =
        (stoneConfig.targetX - stoneConfig.x) / (duration / updateInterval);
      stoneConfig.stepY =
        (stoneConfig.targetY - stoneConfig.y) / (duration / updateInterval);
      stoneConfig.x += stoneConfig.stepX;
      stoneConfig.y += stoneConfig.stepY;
    }

    var imageSize;
    var textFontSize;
    if (
      this.context.measureText(stoneConfig.text).width * 1.4 >
      this.canvas.height / 13
    ) {
      imageSize = this.context.measureText(stoneConfig.text).width * 1.1;
      textFontSize = this.canvas.height / 25;
    } else {
      imageSize = this.canvas.height / 13;
      textFontSize = this.canvas.height / 20;
    }

    var imageCenterOffsetX = imageSize / 2.3;
    var imageCenterOffsetY = imageSize / 1.5;
    this.context.drawImage(
      stoneConfig.img,
      stoneConfig.x - imageCenterOffsetX,
      stoneConfig.y - imageCenterOffsetY,
      imageSize,
      imageSize
    );
    if (Math.round(stoneConfig.x) == stoneConfig.targetX) {
      //reached its original position
    }
    this.context.fillStyle = "white";
    this.context.font = textFontSize + "px Arial";
    this.context.textAlign = "center";
    this.context.fillText(stoneConfig.text, stoneConfig.x, stoneConfig.y);
  }
  update(deltaTime) {
    this.draw(deltaTime);
  }
  puzzleEndFirebaseEvents(
    success_or_failure,
    puzzle_number,
    item_selected,
    target,
    foils,
    response_time
  ) {
    var puzzleEndTime = new Date();
    FirebaseIntegration.customEvents("puzzle_completed", {
      cr_user_id: pseudoId,
      success_or_failure: success_or_failure,
      level_number: this.levelData.levelNumber,
      puzzle_number: puzzle_number,
      item_selected: item_selected,
      target: target,
      foils: foils,
      profile_number: 0,
      ftm_language: lang,
      version_number: document.getElementById("version-info-id").innerHTML,
      response_time: (puzzleEndTime.getTime() - response_time) / 1000,
    });
  }
}
