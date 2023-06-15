export class StoneConfig {
  public x: number;
  public y: number;
  public targetX: number;
  public targetY: number;
  public drawready: boolean;
  public text: string;
  public dx: number;
  public dy: number;
  public stepX: number;
  public stepY: number;
  public speed:number;
  public img: CanvasImageSource;

  constructor(stoneLetter, xPos, yPos) {
    this.x = 0;
    this.y = 0;
    this.targetX = xPos;
    this.targetY = yPos;
    this.speed = 6;
    this.drawready = false;
    this.text = stoneLetter;
    this.img = new Image();
    this.img.src = "./assets/images/stone_pink_v02.png";
  }
}