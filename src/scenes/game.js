import { LevelStartScene } from "./level-start-scene.js";
let lastTime = 0;
var self;
export class Game {
  constructor(width, height,puzzleData) {
    this.width = width;
    this.height = height;
    self = this;
    this.scene = new LevelStartScene(this,puzzleData);
    this.render();
    this.animation(0);
  }

  update(deltaTime) {
    this.scene.stones.update();
  }

  render() {
    this.scene.createBackgroud();
  }
  animation(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    self.update(deltaTime);
    requestAnimationFrame(self.animation);
  }
}