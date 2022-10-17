export class LevelConfig {
  public x: any;
  public y: any;
  public index: any;
  public drawready: any;
  public img: any;

  constructor(xPos, yPos, index) {
    this.x = xPos;
    this.y = yPos;
    this.index = index;
    this.drawready = false;
    this.img = new Image();
    this.img.src = "./assets/images/mapIcon.png";
  }
}
