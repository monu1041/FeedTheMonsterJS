import { GameFields } from "../../common/common.js";

export default class PromptText {
  public posX: number;
  public posY: number;
  public context: CanvasRenderingContext2D;
  public canvas: { width: any; height?: number };
  public currentPromptText: string;
  public currentPuzzleData: any;
  public targetStones: any;
  public levelData: any;
  public rightToLeft: any;
  public promptImage: HTMLImageElement;
  constructor(
    context: CanvasRenderingContext2D,
    canvas: { width: number; height?: number },
    currentPuzzleData,
    levelData,
    rightToLeft
  ) {
    this.posX = canvas.width / 2 - (canvas.width * 0.5) / 2;
    this.posY = canvas.height * 0.15;
    this.context = context;
    this.canvas = canvas;
    this.currentPromptText = currentPuzzleData.prompt.promptText;
    this.currentPuzzleData = currentPuzzleData;
    this.targetStones = this.currentPuzzleData.targetStones;
    this.levelData = levelData;
    this.promptImage = new Image();
    this.promptImage.src = " ./assets/images/promptTextBg.png";
    this.draw();
  }
  draw() {
    var self = this;
    self.clearPrompt();

    this.promptImage.onload = function (e) {
      self.context.drawImage(
        self.promptImage,
        self.posX,
        self.posY,
        self.canvas.width * 0.5,
        self.canvas.height * 0.25
      );
      self.context.fillStyle = "black";
      self.context.font = 30 + "px Arial";
      self.drawOthers(0);
    };
  }
  showFantasticOrGreat(feedBackText) {
    this.clearPrompt();
    this.context.font = "bold 24px Arial";
    this.context.fillStyle = "white";
    // this.context.textAlign = "center";
    this.context.fillText(
      feedBackText,
      this.canvas.width / 2 - this.context.measureText(feedBackText).width / 2,
      this.canvas.height * 0.25
    );
  }

  drawArabic() {
    var x = this.canvas.width / 2;
    const y = this.canvas.height * 0.26;
    if (this.levelData.levelMeta.levelType == "LetterInWord") {
      var letterInWord = this.currentPromptText.replace(
        new RegExp(this.currentPuzzleData.targetStones[0], "g"),
        ""
      );
      this.context.fillStyle = "red";
      this.context.fillText(
        this.targetStones[0],
        x + this.context.measureText(letterInWord).width / 2,
        y
      );
      this.context.fillStyle = "black";
      this.context.fillText(
        letterInWord,
        x - this.context.measureText(this.targetStones[0]).width / 2,
        y
      );
    } else if (this.levelData.levelMeta.levelType == "Word") {
      x = x - this.context.measureText(this.currentPromptText).width * 0.8;
      for (let i = this.targetStones.length - 1; i >= 0; i--) {
        x = x + this.context.measureText(this.targetStones[i]).width + 5;
        // this.context.textAlign = "center";
        if (
          GameFields.droppedStones > i ||
          GameFields.droppedStones == undefined
        ) {
          this.context.fillStyle = "black";
          this.context.fillText(this.targetStones[i], x, y);
        } else {
          this.context.fillStyle = "red";
          this.context.fillText(this.targetStones[i], x, y);
        }
      }
    } else {
      this.context.fillStyle = "black";
      this.context.fillText(this.currentPromptText, x, y);
    }
  }
  drawOthers(droppedStones) {
    const promptTextLetters = this.currentPromptText.split("");
    const x = this.canvas.width / 2;
    const y = this.canvas.height * 0.26;
    var fontSize = 20;
    const startPrompttextX =
      this.canvas.width / 2 -
      this.context.measureText(this.currentPromptText).width / 2;
    let currentWordWidth = 0;
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
              // fontSize * i + x - promptTextLetters.length * 6,
              startPrompttextX + currentWordWidth,
              y
            );
          } else {
            this.context.fillStyle = "black";
            this.context.fillText(
              promptTextLetters[i],
              // fontSize * i + x - promptTextLetters.length * 6,
              startPrompttextX + currentWordWidth,
              y
            );
          }
          // currentWordWidth = this.context.measureText(this.currentPromptText.substring(0, i + 1)).width;
          break;
        }
        case "Word": {
          if (
            GameFields.droppedStones > i ||
            GameFields.droppedStones == undefined
          ) {
            this.context.fillStyle = "black";
            this.context.fillText(
              promptTextLetters[i],
              // fontSize * i + x - promptTextLetters.length * 6,
              startPrompttextX + currentWordWidth,
              y
            );
          } else {
            this.context.fillStyle = "red";
            this.context.fillText(
              promptTextLetters[i],
              // fontSize * i + x - promptTextLetters.length * 6,
              startPrompttextX + currentWordWidth,
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
      currentWordWidth = this.context.measureText(
        this.currentPromptText.substring(0, i + 1)
      ).width;
    }
  }
  clearPrompt() {
    this.context.clearRect(
      this.posX,
      this.posY,
      this.canvas.width * 0.5,
      this.canvas.height * 0.25
    );
  }
  onClick(xClick, yClick) {
    if (
      Math.sqrt(xClick - this.canvas.width / 3) < 12 &&
      Math.sqrt(yClick - this.canvas.height / 5.5) < 10
    ) {
      return true;
    }
  }
}
