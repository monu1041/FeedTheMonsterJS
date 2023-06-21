import { GameFields, GameSceneLayer, StoneLayer } from "../../common/common.js";
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
let previousTimestamp = performance.now();
let deltaTime = 0;
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
  public promptButton: PromptText;
  public timerTicking: TimerTicking;
  public pauseButton: PauseButton;
  public animationWorker: Worker;
  public levelIndicators: LevelIndicators;
  public stonePage: StonePage;
  public monster: Monster;
  public requestAnimation: any;
  constructor(game, puzzleNumber, puzzleCallBack, levelData) {
    self = this;
    this.game = game;
    this.levelData = levelData;
    this.puzzleNumber = puzzleNumber;
    this.puzzleCallBack = puzzleCallBack;
    this.width = game.width;
    this.height = game.height;
    this.canvasStack = new CanvasStack("canvas");
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      GameSceneLayer
    );
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
    this.animate(0);
    this.requestAnimation = setInterval(self.animate, 16);
    this.eventListners();
  }
  drawGameScreen() {
    this.promptButton = new PromptText(
      this.context,
      this.game,
      this.levelData.puzzles[this.puzzleNumber],
      this.levelData,
      true
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
      this.puzzleDecision
    );
    this.timerTicking = new TimerTicking(this.context, this.game);
    this.pauseButton = new PauseButton(this.context, this.canavsElement);
  }
  animate(timeStamp) {
    const currentTimestamp = performance.now();
    deltaTime = currentTimestamp - previousTimestamp;
    self.timerTicking.timerStart();
    self.monster.update(deltaTime);
    !GameFields.isGamePaused ? self.stonePage.update(deltaTime) : null;

    previousTimestamp = currentTimestamp;
  }
  showPopUp() {
    new PausePopUp(this, self.puzzleDecision);
  }
  pausePopUpCallBack() {}
  eventListners() {
    this.stoneCanavsElement.addEventListener("click", function (event) {
      var rect = self.canavsElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (self.promptButton.onClick(x, y)) {
        //  self.timerTicking.resetTimer();
      }
      if (self.pauseButton.onClick(x, y)) {
        GameFields.isTimerPaused = true;
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
    if (1 === puzzleNumber) {
      GameFields.gameScore =500
      new LevelEndScene(
        self.game,
        GameFields.gameScore,
        self.monster,
        self.levelEndCallBack,
        self.levelData,
        self.monster.monsterPhaseNumber,
        new Date()
      );
    } else {
      clearInterval(self.requestAnimation);
      self.canvasStack.deleteLayer(self.id);
      self.canvasStack.deleteLayer(self.stoneLayerId);
      self.puzzleCallBack(puzzleNumber, button_type);
    }
  }
  levelEndCallBack(button_type) {
    self.puzzleDecision(button_type);
  }
  resetGameFields() {
    for (let key in GameFields) {
      if (GameFields.hasOwnProperty(key)) {
        if (key !== "gameScore" && "droppedStones") {
          GameFields[key] = false;
        }
        if (key === "droppedStones") GameFields[key] = 0;
      }
    }
  }
}
