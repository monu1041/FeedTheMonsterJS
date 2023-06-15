import { StoneConfig } from "../../common/stones-config.js";
import Monster from "./animation/monster.js";
var self;
export default class StonePage {
  public context: CanvasRenderingContext2D;
  public canvas: { width: any; height?: number };
  public currentPuzzleData: any;
  public targetStones: any;
  public levelData: any;
  public stonePos: Array<any>;
  public pickedStone: StoneConfig;
  public stoneHtmlElement: any;
  public foilStones: Array<StoneConfig> = new Array<StoneConfig>();
  public monster: Monster;
  constructor(
    context: CanvasRenderingContext2D,
    canvas: { width: number; height?: number },
    stoneHtmlElement,
    currentPuzzleData,
    levelData,
    monster
  ) {
    self = this;
    this.context = context;
    this.canvas = canvas;
    this.stoneHtmlElement = stoneHtmlElement;
    this.currentPuzzleData = currentPuzzleData;
    this.targetStones = this.currentPuzzleData.targetStones;
    this.monster = monster;
    this.levelData = levelData;
    this.initializeStonePos();
    this.createStones();
    this.draw(0);
    this.eventListners();
  }
  draw(deltaTime) {
    // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.monster.update(deltaTime);
    for (let fs of this.foilStones) {
      this.drawstone(fs);
    }
    // console.log("Stones Data", this.currentPuzzleData.foilStones);
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
  }
  eventListners() {
    this.stoneHtmlElement.addEventListener(
      "mousedown",
      function (event) {
        var rect = self.stoneHtmlElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        for (let sc of self.foilStones) {
          if (
            Math.sqrt((x - sc.x) * (x - sc.x) + (y - sc.y) * (y - sc.y)) <= 40
          ) {
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
        var rect = self.stoneHtmlElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (self.pickedStone) {
          self.pickedStone.x = x;
          self.pickedStone.y = y;
        }
      },
      false
    );
    this.stoneHtmlElement.addEventListener(
      "mouseup",
      function (event) {
        var rect = self.stoneHtmlElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
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
      ,
    ];
  }
  drawstone(stoneConfig: StoneConfig) {
    const duration = 200; // Animation duration in milliseconds
    const updateInterval = 10;
    stoneConfig.stepX =
      (stoneConfig.targetX - stoneConfig.x) / (duration / updateInterval);
    stoneConfig.stepY =
      (stoneConfig.targetY - stoneConfig.y) / (duration / updateInterval);
    stoneConfig.x += stoneConfig.stepX;
    stoneConfig.y += stoneConfig.stepY;
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
}
