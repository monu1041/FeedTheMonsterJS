export class LevelConfig {
  constructor(xPos, yPos, index) {
    this.x = xPos;
    this.y = yPos;
    this.index = index;
    this.drawready = false;
    this.img = new Image();
    this.img.src = "./assets/images/mapIcon.png";
  }
}
