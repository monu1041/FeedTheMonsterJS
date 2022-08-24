import { LevelStartScene } from "./level-start-scene.js";
let lastTime = 0;
var self;
export class Game {
  constructor(width, height, puzzleData, gameSceneCallBack) {
    this.width = width;
    this.height = height;
    self = this;
    this.scene = new LevelStartScene(this, puzzleData, this.levelStartCallBack);
    this.render();
    this.animation(0);
    this.gameSceneCallBack = gameSceneCallBack;
  }
  levelStartCallBack(button_name) {
    switch (button_name) {
      case "next_button": {
        self.gameSceneCallBack(button_name)
        break;
      }
      case "retry_button": {
        self.gameSceneCallBack(button_name)
        break;
      }
    }
  }
  update(deltaTime) {
    this.scene.stones.update();
    this.scene.update();
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
