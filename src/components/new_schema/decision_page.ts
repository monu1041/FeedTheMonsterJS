import {
  ButtonClick,
  GameFields,
  GameSceneBg,
  GameSceneLayer,
  loadImages,
  loadingScreen,
} from "../../common/common.js";
import StonesLayer from "../stones-layer.js";
import { CanvasStack } from "../../utility/canvas-stack.js";
import { Game } from "../../scenes/game.js";
import { GameScene } from "./game_scene.js";
import Sound from "../../common/sound.js";
var images = {
  bgImg: "./assets/images/bg_v01.jpg",
  hillImg: "./assets/images/hill_v01.png",
  timer_empty: "./assets/images/timer_empty.png",
  pillerImg: "./assets/images/Totem_v02_v01.png",
  grassImg: "./assets/images/FG_a_v01.png",
  rotating_clock: "./assets/images/timer.png",
  fenchImg: "./assets/images/fence_v01.png",
  promptImg: "./assets/images/promptTextBg.png",
  // fantastic: "./lang/" + lang + "/images/fantastic_01.png",
  // great: "./lang/" + lang + "/images/great_01.png",
  autumnBgImg: "./assets/images/Autumn_bg_v01.jpg",
  autumnHillImg: "./assets/images/Autumn_hill_v01.png",
  autumnSignImg: "./assets/images/Autumn_sign_v01.png",
  autumnGrassImg: "./assets/images/Autumn_FG_v01.png",
  autumnFenceImg: "./assets/images/Autumn_fence_v01.png",
  autumnPillerImg: "./assets/images/Autumn_sign_v01.png",
  winterBgImg: "./assets/images/Winter_bg_01.jpg",
  winterHillImg: "./assets/images/Winter_hill_v01.png",
  winterSignImg: "./assets/images/Winter_sign_v01.png",
  winterGrassImg: "./assets/images/Winter_FG_v01.png",
  winterFenceImg: "./assets/images/Winter_fence_v01.png",
  winterPillerImg: "./assets/images/Winter_sign_v01.png",
};
var self;
export class DecisionPage {
  public allLevelData: any;
  public width: number;
  public height: number;
  public context: CanvasRenderingContext2D;
  public canavsElement: any;
  public canvasStack: any;
  public id: string;
  public game: Game;
  public levelStartCallBack: any;
  public audio: Sound;
  public rightToLeft:boolean;
  public levelStartTime:Date;
  constructor({
    game,
    allLevelsData,
    levelStartCallBack,
    monsterPhaseNumber,
    feedBackTexts,
    rightToLeft,
  }: {
    game: Game;
    allLevelsData: any;
    levelStartCallBack: any;
    monsterPhaseNumber: any;
    feedBackTexts: any;
    rightToLeft: boolean;
  }) {
    self = this;
    this.game = game;
    this.audio = new Sound();
    this.allLevelData = allLevelsData;
    this.width = this.game.width;
    this.height = this.game.height;
    this.canvasStack = new CanvasStack("canvas");
    this.levelStartCallBack = levelStartCallBack;
    this.rightToLeft = rightToLeft;
    this.levelStartTime = new Date();
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      GameSceneBg
    );
    GameFields.levelStartTime = new Date()
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    this.canavsElement.style.zIndex = 3;
    this.createBackgroud();
    new GameScene(
      game,
      0,
      this.puzzleCallBack,
      this.allLevelData[GameFields.selectedLevel],
      this.audio,
      rightToLeft,
    );
  }
  puzzleCallBack(value: number, button_type?: string) {
    if (button_type == "close_button") {
      self.levelStartCallBack(button_type);
      self.canvasStack.deleteLayer(self.id);
    } else if (button_type == "next_button") {
      self.context.clearRect(0,0,self.width,self.height)
      self.createBackgroud()
      GameFields.selectedLevel = GameFields.selectedLevel + 1;
      new GameScene(
        self.game,
        value,
        self.puzzleCallBack,
        self.allLevelData[GameFields.selectedLevel],
        self.audio,
        self.rightToLeft,
      );
    } else {
      new GameScene(
        self.game,
        value,
        self.puzzleCallBack,
        self.allLevelData[GameFields.selectedLevel],
        self.audio,
        self.rightToLeft,
      );
    }
  }
  createBackgroud() {
    var self = this;
    const availableBackgroundTypes = ["Summer", "Autumn", "Winter"];
    var backgroundType =
      Math.floor(self.allLevelData[GameFields.selectedLevel].levelNumber / 10) %
      availableBackgroundTypes.length;
    if (self.allLevelData.levelNumber >= 30) {
      backgroundType = backgroundType % 3;
    }
    loadingScreen(true);
    var context = this.context;
    var width = this.width;
    var height = this.height;

    loadImages(images, function (image) {
      switch (availableBackgroundTypes[backgroundType]) {
        case "Winter":
          {
            context.drawImage(image.winterBgImg, 0, 0, width, height);
            context.drawImage(
              image.winterPillerImg,
              width * 0.38,
              height / 6,
              width / 1.2,
              height / 2
            );
            context.drawImage(
              image.winterFenceImg,
              -width * 0.4,
              height / 4,
              width,
              height / 2
            );
            context.drawImage(
              image.winterHillImg,
              -width * 0.25,
              height / 2,
              width * 1.5,
              height / 2
            );
            context.drawImage(
              image.winterGrassImg,
              -width * 0.25,
              height / 2 + (height / 2) * 0.1,
              width * 1.5,
              height / 2
            );
          }

          break;
        case "Autumn":
          {
            context.drawImage(image.autumnBgImg, 0, 0, width, height);
            context.drawImage(
              image.autumnPillerImg,
              width * 0.38,
              height / 6,
              width / 1.2,
              height / 2
            );
            context.drawImage(
              image.autumnFenceImg,
              -width * 0.4,
              height / 4,
              width,
              height / 2
            );
            context.drawImage(
              image.autumnHillImg,
              -width * 0.25,
              height / 2,
              width * 1.5,
              height / 2
            );
            context.drawImage(
              image.autumnGrassImg,
              -width * 0.25,
              height / 2 + (height / 2) * 0.1,
              width * 1.5,
              height / 2
            );
          }
          break;
        default:
          {
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
          }
          break;
      }
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
      loadingScreen(false);
    });
  }
}
