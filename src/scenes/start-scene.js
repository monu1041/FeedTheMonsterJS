import PlayButton from "../components/buttons/play_butoon.js";
import { Monster } from "../components/monster.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import { LevelSelectionScreen } from "./level-selection-scene.js";

var images = {
  bgImg: "../../assets/images/bg_v01.jpg",
  hillImg: "../../assets/images/hill_v01.png",
  timer_empty: "../../assets/images/timer_empty.png",
  pillerImg: "../../assets/images/Totem_v02_v01.png",
  grassImg: "../../assets/images/FG_a_v01.png",
  rotating_clock: "../../assets/images/timer.png",
  fenchImg: "../../assets/images/fence_v01.png",
  promptImg: "../../assets/images/promptTextBg.png",
};
var lastTime = 0;
var bgImg = new Image();
bgImg.src = "../../assets/images/bg_v01.jpg";
var hillImg = new Image();
hillImg.src = "./assets/images/hill_v01.png";
var pillerImg = new Image();
pillerImg.src = "./assets/images/Totem_v02_v01.png";
var grassImg = new Image();
grassImg.src = "./assets/images/FG_a_v01.png";
var fenchImg = new Image();
fenchImg.src = "./assets/images/fence_v01.png";
var playButton = new Image();
playButton.src = "./assets/images/Play_button.png";
var title = new Image();
title.src = "./assets/images/title.png";
var profileMonster = new Image();
profileMonster.src = "./assets/images/idle4.png";
var self;
export class StartScene {
  constructor(canvas, data) {
    self = this;
    this.canvas = canvas;
    this.data = data;
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvasStack = new CanvasStack("canvas");
    this.monster = new Monster(this.canvas);
    this.createCanvas();
    this.createPlayButton();
  }
  createCanvas() {
    this.id = this.canvasStack.createLayer(this.height, this.width);
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 2;
    this.canavsElement.style.bottom = 0;
    var id = this.id;
    console.log(id);
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(bgImg, 0, 0, this.width, this.height);
    this.context.drawImage(
      pillerImg,
      this.width * 0.6,
      this.height / 6,
      this.width,
      this.height / 2
    );
    this.context.drawImage(
      fenchImg,
      -this.width * 0.4,
      this.height / 3,
      this.width,
      this.height / 3
    );
    this.context.drawImage(
      hillImg,
      -this.width * 0.25,
      this.height / 2,
      this.width * 1.5,
      this.height / 2
    );
    this.context.drawImage(
      grassImg,
      -this.width * 0.25,
      this.height / 2 + (this.height / 2) * 0.1,
      this.width * 1.5,
      this.height / 2
    );

    this.context.drawImage(
      title,
      this.width * 0,
      this.height / 50,
      this.width,
      this.height / 6
    );
  }

  createPlayButton() {
    var self = this;
    var data = this.data;
    this.canvasStack.createLayer(this.height, this.width, "playButtonCanvas");
    this.canavsElement = document.getElementById("playButtonCanvas");
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 6;
    this.context.drawImage(
      playButton,
      this.width * 0.23,
      this.height / 8,
      this.width * 0.6,
      this.height / 3
    );
    document.getElementById("playButtonCanvas").addEventListener(
      "touchend",
      function (event) {
        event.preventDefault();
        var touch = event.changedTouches[0];
        var mouseEvent = new MouseEvent("mouseup", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        const x = touch.clientX;
        const y = touch.clientY;
        var imageSize = canvas.height / 5;
        if (
          Math.sqrt(y - this.height / 5) < 15 &&
          Math.sqrt(x - this.width / 2.5) < 14
        ) {
          console.log(Math.sqrt(x - this.width / 2.5));
          self.context.clearRect(0, 0, canvas.width, canvas.height);
          new LevelSelectionScreen(canvas, data);
          document.getElementById("playButtonCanvas").style.zIndex = 0;
          document.getElementById(this.id).style.zIndex = 0;
          document.getElementById("playButtonCanvas").style.display = "none";
          document.getElementById("monsterCanvas").style.display = "none";
          document.getElementById("canvas").style.zIndex = 3;
        }
        document.getElementById(this.id).dispatchEvent(mouseEvent);
      },
      false
    );
    document.getElementById("playButtonCanvas").addEventListener(
      "mousedown",
      function (event) {
        event.preventDefault();
        var rect = document
          .getElementById("playButtonCanvas")
          .getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        // console.log(y, this.height / 1.8);
        if (
          Math.sqrt(y - this.height / 5.4) < 10 &&
          Math.sqrt(x - this.width / 2.6) < 10
        ) {
          console.log(this.id);
          self.context.clearRect(0, 0, canvas.width, canvas.height);
          new LevelSelectionScreen(canvas, data);
          document.getElementById("playButtonCanvas").style.zIndex = 0;
          document.getElementById(this.id).style.zIndex = 0;
          document.getElementById("playButtonCanvas").style.display = "none";
          document.getElementById("monsterCanvas").style.display = "none";
          document.getElementById("canvas").style.zIndex = 3;
        }
      },
      false
    );
  }
}
