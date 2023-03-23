import { PromptTextLayer } from "../common/common.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import { Game } from "../scenes/game.js";
import { LevelStartScene } from "../scenes/level-start-scene.js";
import { lang } from "../../global-variables.js";
var self;
export class PromptText {
  public game: Game;
  public width: number;
  public height: number;
  public levelStart: LevelStartScene;

  public canvasStack: any;

  public levelData: any;
  public currentPromptText: any;
  public currentPuzzleData: any;
  public fntstOrGrtImgArr: any;
  public fantastic_image: any;
  public great_image: any;
  public id: any;
  public canavsElement: any;
  public context: any;
  public prompt_image: any;

  constructor(game, levelStart, currentPuzzleData, levelData) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    this.canvasStack = new CanvasStack("canvas");
    this.levelStart = levelStart;
    this.levelData = levelData;
    self = this;
    this.currentPromptText = currentPuzzleData.prompt.promptText;
    this.currentPuzzleData = currentPuzzleData;
    this.fntstOrGrtImgArr = [];
    this.createCanvas();
    this.loadFantasticAndGreatImage();

  }

  loadFantasticAndGreatImage() {
    var self = this;
    this.fantastic_image = new Image();
    this.fantastic_image.src = "./lang/" + lang + "/images/fantastic_01.png";

    this.fntstOrGrtImgArr.push(this.fantastic_image);
    this.great_image = new Image();
    this.great_image.src = "./lang/" + lang + "/images/great_01.png";
    this.fntstOrGrtImgArr.push(this.great_image);
  }

  createCanvas() {
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      PromptTextLayer
    );
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 5;
  }

  setCurrrentPuzzleData(data) {
    this.currentPuzzleData = data;
    this.currentPromptText = data.prompt.promptText;
  }


  showFantasticOrGreat(imageIndex) {
    var self = this;

    this.context.clearRect(
      this.game.width / 2 - (this.game.width * 0.5) / 2,
      this.height * 0.15,
      this.game.width * 0.5,
      this.height * 0.25
    );
    this.context.drawImage(
      self.fntstOrGrtImgArr[imageIndex],
      this.game.width - this.game.width * 0.75,
      this.height * 0.2,
      this.game.width * 0.5,
      this.height * 0.1
    );
  }

  deleteCanvas() {
    this.canvasStack.deleteLayer(this.id);
  }
  draw(droppedStones = 0) {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(
      this.prompt_image,
      this.game.width / 2 - (this.game.width * 0.5) / 2,
      this.height * 0.15,
      this.game.width * 0.5,
      this.height * 0.25
    );
    this.context.fillStyle = "black";
    this.context.font = 30 + "px Arial";
    this.context.textAlign = "center";
    const promptTextLetters = this.currentPromptText.split("");
    const x = this.width / 2;
    const y = this.height * 0.26;
    var fontSize = 20;
    var letterHighlight: Array<string> =
      this.currentPuzzleData.targetStones[0].split("");
    for (let i = 0; i < promptTextLetters.length; i++) {
      // this.context.textAlign = "center";
      switch (this.levelData.levelMeta.levelType) {
        case "LetterInWord": {
          if (letterHighlight.includes(promptTextLetters[i])) {
            letterHighlight = letterHighlight.slice(1, letterHighlight.length);
            this.context.fillStyle = "red";
            this.context.fillText(
              promptTextLetters[i],
              fontSize * i + x - promptTextLetters.length * 6,
              y
            );
          } else {
            this.context.fillStyle = "black";
            this.context.fillText(
              promptTextLetters[i],
              fontSize * i + x - promptTextLetters.length * 6,
              y
            );
          }
          break;
        }
        case "Word": {
          if (droppedStones > i || droppedStones == undefined) {
            this.context.fillStyle = "black";
            this.context.fillText(
              promptTextLetters[i],
              fontSize * i + x - promptTextLetters.length * 6,
              y
            );
          } else {
            this.context.fillStyle = "red";
            this.context.fillText(
              promptTextLetters[i],
              fontSize * i + x - promptTextLetters.length * 6,
              y
            );
          }
          break;
        }
        default: {
          this.context.fillStyle = "black";
          this.context.fillText(
            promptTextLetters[i],
            fontSize * i + x - promptTextLetters.length * 6,
            y
          );
        }
      }
    }
    // this.context.fillText(
    //     this.currentPromptText,
    //   this.width / 2.1,
    //   this.height * 0.26
    // );
  }
  createBackground() {
    var self = this;
    self.prompt_image = new Image();
    self.prompt_image.src = "./assets/images/promptTextBg.png";
    self.prompt_image.onload = function (e) {
      self.draw();
    };
  }
  update() {
    this.createBackground();
  }
 
}
