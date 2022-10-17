export class StoneConfig {
  public x: any;
  public y: any;
  public origx: any;
  public origy: any;
  public drawready: any;
  public text: any;
  public img: any;

  constructor(stoneLetter, xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.origx = xPos;
    this.origy = yPos;
    this.drawready = false;
    this.text = stoneLetter;
    this.img = new Image();
    this.img.src = "./assets/images/stone_pink_v02.png";
  }
}
