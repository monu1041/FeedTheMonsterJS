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
  public zindex: number;
  public width: number;
  public height: number;
  public canvasStack: any;
  public id: any;
  public elementId: HTMLCanvasElement;
  public canavsElement: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public game: any;

  constructor(game, zindex?) {
    this.game = game;
    self = this;
    this.zindex = zindex;
    this.width = this.game.width;
    this.height = this.game.height
    this.canvasStack = new CanvasStack("canvas");
    
  }

  createCanvas() {
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      TutorialLayer
    );
    this.elementId = document.getElementById(
        this.id
      ) as HTMLCanvasElement;
    this.canavsElement = document.getElementById(this.id) as HTMLCanvasElement;
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = "8";
    this.canavsElement.style.bottom = "0";
    startX =this.game.width / 5 - 32,
    startY =this.game.height / 2.8 - 32,
    endX = this.width/2;
    endY = this.height / 2 - 82;
    this.animateImage();
    self.elementId.addEventListener('click',function(event){

        console.log('Clicked and touched');
        self.deleteCanvas();
    })
  }

  
  changeZindex(index) {
    this.canavsElement.style.zIndex = index;
  }

  deleteCanvas() {
    this.canvasStack.deleteLayer(this.id);
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  animateImage() {

    let x = startX;
    let y = startY;
    const dx = (endX - startX) / 60;
    const dy = (endY - startY) / 60;
    console.log(this.isMobile())
    let absdx = (this.isMobile)?Math.abs(dx)*4:Math.abs(dx);
    let absdy = (this.isMobile)?Math.abs(dy)*4:Math.abs(dy);
  
    setTimeout(() => {
      const startTime = performance.now();
  
      const animate = (currentTime) => {
        const deltaTime = currentTime - startTime;
        if (
          (x <= endX + absdx && x >= endX - absdx) &&
          (y <= endY + absdy && y >= endY - absdy)
        ) {
          setTimeout(() => {
            this.deleteCanvas();
          }, 500);
          return;
        }
  
        x = (dx >= 0) ? x + absdx  : x - absdx;
        y = (dy >= 0) ? y + absdy : y - absdy;
  
        this.draw(x, y);
  
        requestAnimationFrame(animate);
        
      };
      requestAnimationFrame(animate);
    }, 1300);
  }
  

  draw(x: number, y: number) {
     this.context.clearRect(0, 0, this.width, this.height); // Clear the canvas
     this.context.drawImage(tutorialImg, x, y); 
  }
}
