import { Debugger, lang } from "../../../global-variables.js";
import { GameFields, StoreMonsterPhaseNumber } from "../../common/common.js";

export default class Monster {
  public canvas: { width: any; height?: number };
  public frameX: number;
  public frameY: number;
  public x: number;
  public y: number;
  public context: CanvasRenderingContext2D;
  public maxFrame = 6;
  public fps = 10;
  public frameInterval = 1000 / this.fps;
  public frameTimer = 0;
  public monster_image: any;
  public image: HTMLImageElement;
  public eatImg: HTMLImageElement;
  public idleImg: HTMLImageElement;
  public spitImg: HTMLImageElement;
  public dragImg: HTMLImageElement;
  public stoneCanavsElement: any;
  public monsterPhaseNumber: any;

  constructor(
    canvas: { width: number; height?: number },
    context: CanvasRenderingContext2D,
    stoneCanavsElement
  ) {
    this.context = context;
    this.x = canvas.width / 2 - canvas.width * 0.243;
    this.y = canvas.width / 3;
    this.canvas = canvas;
    this.frameX = 0;
    this.frameY = 0;
    this.stoneCanavsElement = stoneCanavsElement;

    this.monsterPhaseNumber = Debugger.DebugMode
      ? localStorage.getItem(StoreMonsterPhaseNumber + lang + "Debug") || 1
      : localStorage.getItem(StoreMonsterPhaseNumber + lang) || 1;

    this.eatImg = new Image();
    this.eatImg.src = "./assets/images/eat1" + this.monsterPhaseNumber + ".png";
    this.idleImg = new Image();
    this.idleImg.src =
      "./assets/images/idle1" + this.monsterPhaseNumber + ".png";
    this.spitImg = new Image();
    this.spitImg.src =
      "./assets/images/spit1" + this.monsterPhaseNumber + ".png";
    this.dragImg = new Image();
    this.dragImg.src =
      "./assets/images/drag1" + this.monsterPhaseNumber + ".png";
    this.image = this.idleImg;
    this.draw();
  }
  changeImage(src) {
    this.image.src = src;
  }
  changeZindex(index) {
    this.stoneCanavsElement.style.zIndex = index;
  }
  update(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }
    } else {
      this.frameTimer += deltaTime;
    }

    this.draw();
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(
      this.image,
      770 * this.frameX,
      1386 * this.frameY,
      768,
      1386,
      this.x,
      this.y * 0.8,
      this.canvas.width / 2,
      this.canvas.height / 1.5
    );
  }
  changeToDragAnimation() {
    this.image = this.dragImg;
  }
  // changeZindex(index) {
  //   this.c.style.zIndex = index;
  // }
  changeToEatAnimation() {
    this.image = this.eatImg;
    setTimeout(() => {
      this.changeToIdleAnimation();
    }, 2000);
  }

  changeToIdleAnimation() {
    this.image = this.idleImg;
  }

  changeToSpitAnimation() {
    this.image = this.spitImg;
    setTimeout(() => {
      GameFields.isTimerPaused ? (GameFields.puzzleCompleted = true) : null;
      this.changeToIdleAnimation();
    }, 2000);
  }
}
