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
    this.scene.monster.update(deltaTime);
    this.scene.stones.update();
  }

  render() {
    this.scene.createBackgroud();
  }
  animation(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    // context.clearRect(0, 0, canvas.width, canvas.height);
    self.update(deltaTime);
    requestAnimationFrame(self.animation);
  }
}

// const game = new Game(canvas.width, canvas.height);
// game.render();

// let lastTime = 0;

// function animation(timeStamp) {
//   let deltaTime = timeStamp - lastTime;
//   lastTime = timeStamp;
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   game.update(deltaTime);
//   requestAnimationFrame(animation);
// }

// animation(0);
