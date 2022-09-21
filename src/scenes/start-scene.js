import {
  FirebaseUserClicked,
  FirebaseUserInstall,
  MonsterLayer,
  PlayButtonLayer,
  PWAInstallStatus,
  StartSceneLayer,
} from "../common/common.js";
import Sound from "../common/sound.js";
import InstallButton from "../components/buttons/install_button.js";
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
var title = new Image();
title.src = "./assets/images/title.png";
var profileMonster = new Image();
profileMonster.src = "./assets/images/idle4.png";
var self;
let pwa_install_status;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  pwa_install_status = e;
  localStorage.setItem(PWAInstallStatus, false);
});
export class StartScene {
  constructor(canvas, data, firebase_analytics) {
    self = this;
    this.canvas = canvas;
    this.data = data;
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvasStack = new CanvasStack("canvas");
    this.monster = new Monster(this.canvas);
    this.pwa_status = localStorage.getItem(PWAInstallStatus);
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
    document.getElementById("about-company").style.display = "block";
    this.canavsElement = document.getElementById(this.id);
    this.context = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 2;
    this.canavsElement.style.bottom = 0;
    var id = this.id;
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
    var playButtonId = this.canvasStack.createLayer(
      this.height,
      this.width,
      PlayButtonLayer
    );
    this.canavsElement = document.getElementById(playButtonId);
    this.buttonContext = this.canavsElement.getContext("2d");
    this.canavsElement.style.zIndex = 7;
    if (this.pwa_status == "true") {
      self.playButton = new PlayButton(
        self.buttonContext,
        self.canvas,
        self.canvas.width * 0.35,
        self.canvas.height / 7
      );
    } else {
      self.playButton = new InstallButton(
        self.buttonContext,
        self.canvas,
        self.canvas.width * 0.35,
        self.canvas.height / 5
      );
    }

    document.getElementById(PlayButtonLayer).addEventListener(
      "click",
      async function (event) {
        event.preventDefault();
        var rect = document.getElementById(self.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (self.playButton.onClick(x, y)) {
          self.firebase_analytics
            ? self.firebase_analytics.logEvent(FirebaseUserClicked, "click")
            : null;
          if (self.pwa_status == "false" || !self.pwa_status ) {
            pwa_install_status.prompt();
            const { outcome } = await pwa_install_status.userChoice;
            if (outcome === "accepted") {
              pwa_install_status = null;
              localStorage.setItem(PWAInstallStatus, true);
              self.firebase_analytics
                ? self.firebase_analytics.logEvent(
                    FirebaseUserInstall,
                    "Install"
                  )
                : null;
              window.location.reload();
            }
          } else {
            if (
              !window.matchMedia("(display-mode: standalone)").matches &&
              self.pwa_status == "true"
            ) {
              document.location = "https://devcuriousreader.wpcomstaging.com/FeedTheMonsterJS1.4"
              // alert("PWA is installed on your device \nPlease play from there");
              // if(confirm("PWA is installed on your device \nPlease play from there")) 
              // {
              //   document.location = "http://127.0.0.1:5500/index.html"
              //   console.log("Clicked OK")
              // }
              // else{
              //   console.log("Clicked cancel")
              // }

              // window.location.href = "https://devcuriousreader.wpcomstaging.com/FeedTheMonsterJS1.1/"
              // document.location = 'https://devcuriousreader.wpcomstaging.com/FeedTheMonsterJS1.1/';
            } else {
              document.getElementById("about-company").style.display = "none";
              delete new Sound().changeSourse(
                "./assets/audios/ButtonClick.wav"
              );
              self.context.clearRect(0, 0, canvas.width, canvas.height);
              new LevelSelectionScreen(canvas, data);
              self.canvasStack.deleteLayer(PlayButtonLayer);
              self.monster.deleteCanvas();
              delete self.monster;
              self.canvasStack.deleteLayer(StartSceneLayer);
            }
          }
        }
      },
      false
    );
  }
}
