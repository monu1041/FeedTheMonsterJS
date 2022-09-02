import {
  FirebaseUserClicked,
  MonsterLayer,
  PlayButtonLayer,
  StartSceneLayer,
} from "../common/common.js";
import Sound from "../common/sound.js";
import PlayButton from "../components/buttons/play_butoon.js";
import { Monster } from "../components/monster.js";
import { CanvasStack } from "../utility/canvas-stack.js";
import { LevelSelectionScreen } from "./level-selection-scene.js";

var bgImg = new Image();
bgImg.src = "./assets/images/bg_v01.jpg";
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
  constructor(canvas, data, firebase_analytics) {
    self = this;
    this.canvas = canvas;
    this.data = data;
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvasStack = new CanvasStack("canvas");
    this.monster = new Monster(this.canvas);
    this.createCanvas();
    this.createPlayButton();
    this.firebase_analytics = firebase_analytics;
  }
  createCanvas() {
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      StartSceneLayer
    );
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
    this.id = this.canvasStack.createLayer(
      this.height,
      this.width,
      PlayButtonLayer
    );
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 6;
    self.playButton = new PlayButton(
      self.context,
      self.canvas,
      self.canvas.width * 0.35,
      self.canvas.height / 7
    );

    document.getElementById(PlayButtonLayer).addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        var rect = document.getElementById(self.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        // console.log(y, this.height / 1.8);
        if (self.playButton.onClick(x, y)) {
          self.firebase_analytics.logEvent(FirebaseUserClicked, "click");
          console.log(self.firebase_analytics);
          delete new Sound().changeSourse("./assets/audios/ButtonClick.wav");
          console.log(this.id);
          self.context.clearRect(0, 0, canvas.width, canvas.height);
          new LevelSelectionScreen(canvas, data);
          self.canvasStack.deleteLayer(PlayButtonLayer);
          self.monster.deleteCanvas();
          delete self.monster;
          self.canvasStack.deleteLayer(StartSceneLayer);
        }
      },
      false
    );
  }
}
