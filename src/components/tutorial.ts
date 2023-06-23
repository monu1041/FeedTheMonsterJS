import { TutorialLayer } from "../common/common.js";
import { CanvasStack } from "../utility/canvas-stack.js";
var self;
var tutorialImg = new Image();
tutorialImg.src = "./assets/images/tutorial_hand.png";

let startX = 0;
let startY = 0;
let endX = 200;
let endY = 100;
export class Tutorial {
  public width: number;
  public height: number;
  public context: CanvasRenderingContext2D;
  public game: any;
  public targetStonePositions: any;
  public startx: number;
  public starty: number;
  public endx: number;
  public endy: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  absdx: number;
  absdy: number;

  constructor(context, game,) {
    this.game = game;
    self = this;
    this.width = this.game.width;
    this.height = this.game.height;
    this.context = context;
    this.startx = startX;
    this.starty = startY;
    this.endx = this.game.width / 2;
    this.endy = this.game.height / 2;
  }

  updateTargetStonePositions(targetStonePosition) {
    startX = targetStonePosition[0] - 22;
    startY = targetStonePosition[1] - 50;
    this.startx = targetStonePosition[0] - 22;
    this.starty = targetStonePosition[1] - 50;
    this.animateImage()
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  animateImage() {
    this.x = startX;
    this.y = startY;
    this.dx = (this.endx - this.startx) / 60;
    this.dy = (this.endy - this.starty) / 60;
    this.absdx = this.isMobile() ? Math.abs(this.dx) * 3 : Math.abs(this.dx);
    this.absdy = this.isMobile() ? Math.abs(this.dy) * 3 : Math.abs(this.dy);
  }

  draw() {
    if (
      this.x <= this.endx + this.absdx &&
      this.x >= this.endx - this.absdx &&
      this.y <= this.endy + this.absdy &&
      this.y >= this.endy - this.absdy
    ) {
      setTimeout(() => {
        this.x = this.startx;
        this.y = this.starty;
      }, 500);
      return;
    }

    this.x = this.dx >= 0 ? this.x + this.absdx : this.x - this.absdx;
    this.y = this.dy >= 0 ? this.y + this.absdy : this.y - this.absdy;
    this.context.drawImage(tutorialImg, this.x, this.y);
  }
}
