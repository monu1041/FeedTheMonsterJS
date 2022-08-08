import { Stone } from "../common/stone.js";

var stonepos = [
  [
    [200, 200],
    [110, 462],
  ],
];
var context;
var gs = {
  mode: "gameplay",
  levelnum: 0,
};
gs.puzzle = {
  puzzlenum: 0,
  target: "e",
  stones: ["e", "m"],
};
gs.stones = [];
var pickedStone;
function drawstone(s) {
  context.drawImage(s.img, s.x - 32, s.y - 32, 64, 64);
  context.fillStyle = "white";
  context.font = "20px Arial";
  context.fillText(s.text, s.x - 9, s.y + 8);
}
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let s of gs.stones) {
    drawstone(s);
  }
  window.requestAnimationFrame(draw);
}
export default class StoneLayer {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.canvasStack = new CanvasStack("canvas");
  }
  createCanvas() {
    this.id = this.canvasStack.createLayer(this.height, this.width);
    this.context = document.getElementById(this.id).getContext("2d");
    context = this.context;
    document.getElementById(this.id).style.zIndex = 5;
    document.getElementById(this.id).addEventListener(
      "click",
      function (event) {
        var rect = document.getElementById(this.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
      },
      false
    );
    document.getElementById(this.id).addEventListener(
      "mousemove",
      function (event) {
        var rect = document.getElementById(this.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (pickedStone) {
          pickedStone.x = x;
          pickedStone.y = y;
        }
      },
      false
    );
  }
  deleteCanvas() {}
  draw(image, x, y, height, width) {}

  createStones() {
    var poss = stonepos[0];
    gs.puzzle.stones = ["c", "m"];
    var i = 0;
    for (let s of gs.puzzle.stones) {
      console.log(poss[i][0]);
      var ns = new Stone(s, poss[i][0], poss[i][1]);
      pickedStone = ns;
      gs.stones.push(ns);
      i += 1;
    }
    draw();
  }

  update() {}
}
