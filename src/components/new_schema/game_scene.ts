import {
  ButtonClick,
  GameFields,
  GameSceneLayer,
  PromptAudio,
  StoneLayer,
} from "../../common/common.js";
import PromptText from "./prompt_text.js";
import { CanvasStack } from "../../utility/canvas-stack.js";
import { Game } from "../../scenes/game.js";
import TimerTicking from "./timer-ticking.js";
import PauseButton from "../buttons/pause_button.js";
import PausePopUp from "../pause-popup.js";
import { LevelIndicators } from "../level-indicators.js";
import StonePage from "./stone_page.js";
import Monster from "./animation/monster.js";
import { LevelEndScene } from "../../scenes/level-end-scene.js";
import { TextEffects } from "./animation/text_effects.js";
import Sound from "../../common/sound.js";
let previousTimestamp = performance.now();
var self;
export class GameScene {
  public levelData: any;
  public width: number;
  public height: number;
  public context: CanvasRenderingContext2D;
  public stoneContext: CanvasRenderingContext2D;
  public canavsElement: any;
  public stoneCanavsElement: any;
  public canvasStack: any;
  public id: string;
  public stoneLayerId: string;
  public puzzleCallBack;
  public puzzleNumber;
  public game: Game;
  public audio: Sound;
  public promptButton: PromptText;

  public timerTicking: TimerTicking;
  public pauseButton: PauseButton;
  public animationWorker: Worker;
  public levelIndicators: LevelIndicators;
  public stonePage: StonePage;
  public monster: Monster;
  public requestAnimation: any;
  public rightToLeft: boolean;
  public feedbackTextId: any;
  public feedbackTextCanavsElement: any;
  public feedbackTextContext: any;
  textEffect: any;
  constructor(
    game,
    puzzleNumber,
    puzzleCallBack,
    levelData,
    audio,
    rightToLeft,
    levelStartTime
  ) {
    self = this;
    this.game = game;
    this.levelData = levelData;
    this.puzzleNumber = puzzleNumber;
    this.puzzleCallBack = puzzleCallBack;
    this.width = game.width;
    this.height = game.height;
    this.audio = audio;
    this.rightToLeft = rightToLeft;
    this.canvasStack = new CanvasStack("canvas");
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      GameSceneLayer
    );
    this.createFeedBackTextCanvas();
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    this.canavsElement.style.zIndex = 4;

    this.stoneLayerId = this.canvasStack.createLayer(
      this.height,
      this.width,
      StoneLayer
    );
    this.stoneCanavsElement = document.getElementById(this.stoneLayerId);
    this.stoneContext = this.stoneCanavsElement.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    this.stoneCanavsElement.style.zIndex = 4;
    this.drawGameScreen();
    this.requestAnimation = requestAnimationFrame(this.animate);
    this.eventListners();
  }
  drawGameScreen() {
    this.audio.playSound(
      this.levelData.puzzles[this.puzzleNumber].prompt.promptAudio,
      PromptAudio
    );
    this.promptButton = new PromptText(
      this.context,
      this.game,
      this.levelData.puzzles[this.puzzleNumber],
      this.levelData,
      this.rightToLeft
    );
    this.textEffect = new TextEffects(
      this.feedbackTextContext,
      this.width,
      this.height
    );
    this.monster = new Monster(
      this.game,
      this.stoneContext,
      this.stoneCanavsElement
    );
    this.levelIndicators = new LevelIndicators(
      this.context,
      this.canavsElement,
      this.puzzleNumber
    );
    this.stonePage = new StonePage(
      this.stoneContext,
      this.game,
      this.stoneCanavsElement,
      this.puzzleNumber,
      this.levelData,
      this.monster,
      this.levelIndicators,
      this.promptButton,
      this.textEffect,
      this.audio,
      this.feedbackTextCanavsElement,
      this.puzzleDecision
    );
    this.timerTicking = new TimerTicking(this.context, this.game, this.audio);
    this.pauseButton = new PauseButton(this.context, this.canavsElement);
  }
  animate(timeStamp) {
    const currentTimestamp = performance.now();
    GameFields.deltaTime = currentTimestamp - previousTimestamp;
    self.timerTicking
      ? self.timerTicking.timerStart(GameFields.deltaTime)
      : null;
    self.textEffect.render();
    self.monster.update(GameFields.deltaTime);
    !GameFields.isGamePaused
      ? self.stonePage.update(GameFields.deltaTime)
      : null;

    previousTimestamp = currentTimestamp;
    self.requestAnimation = requestAnimationFrame(self.animate);
  }
  showPopUp() {
    new PausePopUp(this, self.puzzleDecision, this.audio);
  }
  pausePopUpCallBack() {}
  eventListners() {
    this.stoneCanavsElement.addEventListener("click", function (event) {
      var rect = self.canavsElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (self.promptButton.onClick(x, y)) {
        self.audio.playSound(
          self.levelData.puzzles[self.puzzleNumber].prompt.promptAudio,
          PromptAudio
        );
        //  self.timerTicking.resetTimer();
      }
      if (self.pauseButton.onClick(x, y)) {
        GameFields.isTimerPaused = true;
        self.audio.playSound("./assets/audios/ButtonClick.mp3", ButtonClick);
        self.showPopUp();
      }
    });
  }
  puzzleDecision(button_type?) {
    self.resetGameFields();
    var puzzleNumber = self.puzzleNumber + 1;
    if (button_type != undefined) {
      puzzleNumber = 0;
    }
    if (self.levelData.puzzles.length === puzzleNumber) {
      self.timerTicking = null;
      new LevelEndScene(
        self.game,
        GameFields.gameScore,
        self.monster,
        self.levelEndCallBack,
        self.levelData,
        self.monster.monsterPhaseNumber,
        self.audio,
        new Date()
      );
      GameFields.gameScore = 0;
    } else {
      cancelAnimationFrame(self.requestAnimation);
      self.requestAnimation = 0;
      self.canvasStack.deleteLayer(self.id);
      self.canvasStack.deleteLayer(self.stoneLayerId);
      self.canvasStack.deleteLayer(self.feedbackTextId);
      self.puzzleCallBack(puzzleNumber, button_type);
    }
  }
  levelEndCallBack(button_type) {
    self.puzzleDecision(button_type);
  }
  resetGameFields() {
    for (let key in GameFields) {
      if (GameFields.hasOwnProperty(key)) {
        if (
          [
            "gameScore",
            "droppedStones",
            "selectedLevel",
            "setTimeOuts",
          ].indexOf(key) == -1
        ) {
          GameFields[key] = false;
        }
        if (key === "droppedStones") GameFields[key] = 0;
      }
    }
    for (let key in GameFields.setTimeOuts) {
      clearTimeout(GameFields.setTimeOuts[key]);
    }
  }

  createFeedBackTextCanvas() {
    this.feedbackTextId = this.canvasStack.createLayer(
      this.height,
      this.width,
      "feed-back-text"
    );
    this.feedbackTextCanavsElement = document.getElementById(
      this.feedbackTextId
    );
    this.feedbackTextContext = this.feedbackTextCanavsElement.getContext("2d");
    this.feedbackTextCanavsElement.style.zIndex = "-10";
  }
}
