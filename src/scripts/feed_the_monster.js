import GameScene from "../components/scenes/gameScene.js";
import StoneLayer from "../components/scenes/stoneLayer.js";

let canvas = document.getElementById("canvas");
canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;

canvas.height = window.innerHeight;

var stoneLayer = new StoneLayer(canvas, canvas.width, canvas.height);

stoneLayer.createCanvas();
// window.requestAnimationFrame();
function updateFrame() {
  stoneLayer.update()
  window.requestAnimationFrame(updateFrame);
}
updateFrame()
var bgImg = new Image();
bgImg.src = "./assets/images/bg_v01.jpg";
bgImg.onload = function (e) {
  // startScene.draw(bgImg);
};
stoneLayer.createStones();
var gameScene = new GameScene("canvas", canvas.width, canvas.height);
