import { Debugger, lang } from "../../global-variables.js";
import { StoreMonsterPhaseNumber } from "../common/common.js";
import { LevelStartScene } from "./level-start-scene.js";

var animationFrame: number;
var self: any;
let lastTime = 0;
export class Game {
  public width: number;
  public height: number;
  public scene: LevelStartScene;
  public gameSceneCallBack: any;
  public monsterPhaseNumber: any;
  public feedBackTexts: any;
  public rightToLeft: boolean;

  constructor(
    width: number,
    height: number,
    puzzleData: any,
    gameSceneCallBack: any,
    feedBackTexts: any,
    rightToLeft: boolean
  ) {
    this.width = width;
    this.height = height;
    this.monsterPhaseNumber = Debugger.DebugMode
      ? localStorage.getItem(StoreMonsterPhaseNumber + lang + "Debug") || 1
      : localStorage.getItem(StoreMonsterPhaseNumber + lang) || 1;
    console.log(" puzzledatacoming ", puzzleData);
    this.scene = new LevelStartScene({
      game: this,
      levelData: puzzleData,
      levelStartCallBack: this.levelStartCallBack,
      monsterPhaseNumber: this.monsterPhaseNumber,
      feedBackTexts: feedBackTexts,
      rightToLeft: rightToLeft,
    });
    this.gameSceneCallBack = gameSceneCallBack;
    // this.render();
    self = this;
    this.animation(0);
  }
  levelStartCallBack(button_name) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
    switch (button_name) {
      case "close_button": {
        self.gameSceneCallBack(button_name);
        break;
      }
      case "next_button": {
        self.gameSceneCallBack(button_name);
        break;
      }
      case "retry_button": {
        self.gameSceneCallBack(button_name);
        break;
      }
    }
  }
  update(deltaTime: number) {
    self.scene
      ? self.scene.stones
        ? self.scene.stones.update(deltaTime)
        : null
      : null;
    self.scene ? self.scene.update(deltaTime) : null;
  }

  render() {
    cancelAnimationFrame(animationFrame);
    console.log(" itsalsorunning! ");
    this.scene.createBackgroud();
  }
  animation(timestamp_1) {
    const deltaTime = timestamp_1 - lastTime;
    lastTime = timestamp_1;
    self.update(deltaTime);
    animationFrame = requestAnimationFrame(self.animation);
  }
}
