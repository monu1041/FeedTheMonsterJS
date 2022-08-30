import { LevelStartScene } from "./level-start-scene.js";

var animationFrame;
var self;
export class Game {
  constructor(width, height, puzzleData, gameSceneCallBack) {
    this.width = width;
    this.height = height;
    this.scene = new LevelStartScene(this, puzzleData, this.levelStartCallBack);
    this.gameSceneCallBack = gameSceneCallBack;
    this.render();
    self = this;
    this.animation();
  }
  levelStartCallBack(button_name) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
    switch (button_name) {
      case "next_button": {
        self.gameSceneCallBack(button_name);
        break;
      }
      case "retry_button": {
        self.gameSceneCallBack(button_name);
        break;
      }
    }
  }
  update() {
    self.scene ? (self.scene.stones ? self.scene.stones.update() : null) : null;
    self.scene ? self.scene.update() : null;
  }

  render() {
    this.scene.createBackgroud();
  }
  animation() {
    self.update();
    animationFrame = requestAnimationFrame(self.animation);
  }
}
