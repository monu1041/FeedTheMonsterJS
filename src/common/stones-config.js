export class StoneConfig {
    constructor(stoneLetter, xPos, yPos) {
      this.x = xPos;
      this.y = yPos;
      this.origx = xPos;
      this.origy = yPos;
      this.drawready = false;
      this.text = stoneLetter;
      this.img = new Image();
      this.img.src = "../../assets/images/stone_pink_v02.png";
    }
  }