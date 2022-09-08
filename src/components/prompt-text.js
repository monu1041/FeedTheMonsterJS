import { PromptTextLayer } from "../common/common.js";
import { CanvasStack } from "../utility/canvas-stack.js";
export class PromptText {
  constructor(game, levelStart, currentPuzzleData) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    this.canvasStack = new CanvasStack("canvas");
    this.levelStart = levelStart;
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
    this.fantastic_image.src = "./assets/images/fantastic_01.png";

    this.fntstOrGrtImgArr.push(this.fantastic_image);
    this.great_image = new Image();
    this.great_image.src = "./assets/images/great_01.png";
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
      this.game.width / 2 - (this.game.width * 0.9) / 2,
      this.height * 0.15,
      this.game.width * 0.9,
      this.height * 0.25
    );
  }

  deleteCanvas() {
    this.canvasStack.deleteLayer(this.id);
  }
  draw() {
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
    const x = this.width / 2.1;
    const y = this.height * 0.26;
    console.log(promptTextLetters);
    console.log(this.currentPuzzleData);
    for (let i = 0; i < promptTextLetters.length; i++) {
      if (this.currentPuzzleData.targetStones.includes(promptTextLetters[i])) {
        this.context.fillStyle = "red";
        this.context.fillText(promptTextLetters[i], x + 16 * i, y);
      } else {
        this.context.fillStyle = "black";
        this.context.fillText(promptTextLetters[i], x + 16 * i, y);
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
