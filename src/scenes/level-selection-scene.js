// import { StoneConfig } from "./src/common/stones-config";
import { LevelStartScene } from "./level-start-scene.js";
import { CanvasStack } from "../utility/canvas-stack.js";
// import PauseButton from "./buttons/pause_button.js";
import {gameData} from "../../data.js"
import { LevelConfig } from "../common/level-config.js";
import { Game } from "./game.js";


var gs = {
  mode: "gameplay",
  levelnum: 0,
};
gs.puzzle = {
  puzzlenum: 0,
  target: "e",
  levels: [1,2,3,4,5,6,7,8,9,10 ],
};
gs.levels = [];

var mapIcon= new Image();
mapIcon.src="./assets/images/mapIcon.png"
var pickedStone;
var offsetCoordinateValue=32;
export class LevelSelectionScreen {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.canvasStack = new CanvasStack("level-selection-canvas");
    this.createCanvas();
  }

  createCanvas() {
    var self = this;
    this.id = this.canvasStack.createLayer(this.height, this.width);
    this.context = document.getElementById(this.id).getContext("2d");
    document.getElementById(this.id).style.zIndex = 2;
    this.levelButtonpos=[
      [
        [this.canvas.width/5-offsetCoordinateValue,this.canvas.height/6-offsetCoordinateValue],
        [this.canvas.width/2-offsetCoordinateValue,this.canvas.height/6-offsetCoordinateValue],
        [this.canvas.width/3.5+this.canvas.width/2-offsetCoordinateValue,this.canvas.height/6-offsetCoordinateValue],
        [this.canvas.width/5-offsetCoordinateValue,this.canvas.height/2.8-offsetCoordinateValue],
        [this.canvas.width/2-offsetCoordinateValue,this.canvas.height/2.8-offsetCoordinateValue],
        [this.canvas.width/3+this.canvas.width/2.1-offsetCoordinateValue,this.canvas.height/2.8-offsetCoordinateValue],
        [this.canvas.width/20+this.canvas.width/7-offsetCoordinateValue,this.canvas.height/1.8-offsetCoordinateValue],
        [this.canvas.width/2-offsetCoordinateValue,this.canvas.height/1.8-offsetCoordinateValue],
        [this.canvas.width/3.1+this.canvas.width/2.1-offsetCoordinateValue,this.canvas.height/1.8-offsetCoordinateValue],
        [this.canvas.width/5-offsetCoordinateValue,this.canvas.height/1.3-offsetCoordinateValue],

      ],
    ];
    
   
        
    // document.getElementById(this.id).addEventListener(
    //   "mousemove",
    //   function (event) {
    //     var rect = document.getElementById(this.id).getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    //     const y = event.clientY - rect.top;
    //     if (pickedStone) {
    //       pickedStone.x = x;
    //       pickedStone.y = y;
    //     }
    //   },
    //   false
    // );

    // document.getElementById(this.id).addEventListener(
    //   "touchstart",
    //   function (e) {
    //     var touch = e.touches[0];
    //     var mouseEvent = new MouseEvent("mousedown", {
    //       clientX: touch.clientX,
    //       clientY: touch.clientY,
    //     });
    //     document.getElementById(this.id).dispatchEvent(mouseEvent);
    //   },
    //   false
    // );

    // document.getElementById(this.id).addEventListener(
    //   "touchmove",
    //   function (e) {
    //     var touch = e.touches[0];
    //     var mouseEvent = new MouseEvent("mousemove", {
    //       clientX: touch.clientX,
    //       clientY: touch.clientY,
    //     });
    //     document.getElementById(this.id).dispatchEvent(mouseEvent);
    //   },
    //   false
    // );

    document.getElementById(this.id).addEventListener(
      "mousedown",
      function (event) {
        // this.scene =LevelStartScene(this.game);
        
        var rect = document.getElementById(self.id).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;    
        // console.log(r);   
        for (let s of gs.levels) {
          // console.log(s.x, s.y, x,y);
          if (Math.sqrt((x - s.x) * (x - s.x) + (y - s.y) * (y - s.y)) <= 40) {
            console.log("hiiiiiiii",Math.sqrt((x - s.x) * (x - s.x) + (y - s.y) * (y - s.y)));
            console.log('*******8',s.index)
           // const game = new Game(canvas.width, canvas.height);
          }
        }
      },
      false
    );


    this. createLevelButtons(this.levelButtonpos);
  }

  deleteCanvas() {}

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let s of gs.levels) {
      this.drawlevel(s,canvas);
    }
  }

  drawlevel(s,canvas) {
    var imageCenterOffsetX = canvas.height/70-canvas.height/30;
    var imageCenterOffsetY = -canvas.height/60-canvas.height/44;
    var imageSize = canvas.height/5;
    var textFontSize = imageSize/5;

    this.context.drawImage(mapIcon, s.x+imageCenterOffsetX, s.y+imageCenterOffsetY, imageSize, imageSize);
    this.context.fillStyle = "white";
    this.context.font = textFontSize+"px Arial";
    this.context.fillText(s.text, s.x+(imageSize/7) , s.y+(imageSize/7));
    this.context.font = textFontSize - (imageSize/20)+"px Arial";
    this.context.fillText(gameData.Levels[s.text].LevelMeta.LevelType, s.x-(imageSize/5) , s.y+(imageSize/1.5));
  }

  createLevelButtons(levelButtonpos) {
    var poss = levelButtonpos[0];
    var i = 0;
    for (let s of gs.puzzle.levels) {
      console.log(poss[i][0]);
      var ns = new LevelConfig(s, poss[i][0], poss[i][1],i+1);
      // pickedStone = ns;
      gs.levels.push(ns);
      i += 1;
    }
    this.draw();
  }

  update() {
    this.draw();
    // this.pauseButton.draw();
  }
}







































// import {gameData } from "./data.js"
// import { levelButton } from "./levelButton.js";
// import { StoneConfig } from "./src/common/stones-config.js";
// import {LevelStartScene} from './src/scenes/level-start-scene.js';
// import { CanvasStack } from "./src/utility/canvas-stack.js";
// const gamescene = document.querySelector(".game-scene"); 
// const canvas = document.getElementById("canvas");
// const newCanvas= document.getElementById("new-canvas");
// // newCanvas.style.height =window.innerHeight;
// // newCanvas.style.width=window.screen.width > 420 ? 420 : window.innerWidth;
// var mapIcon= new Image();
// mapIcon.src= "./assets/images/mapIcon.png";

// var levelData={

// }

// levelData.data={
//   levelNumber:[1,2,3,4,5,6],
// };
// levelData.levelNumber=[];
// var offsetCoordinateValue=32;
// export class AllLevelScreen{
// constructor(game){
// this.game= game;
// this.game.height= window.innerHeight;
// this.game.width = window.screen.width > 420 ? 420 : window.innerWidth;
// this.canvasStack = new CanvasStack("canvas");
// this.height=window.innerHeight;
// this.width=window.screen.width > 420 ? 420 : window.innerWidth;
// this.createButton();
// }
// createButton(){

//   var self = this;
//   this.id = this.canvasStack.createLayer(this.height,this.width);
//   this.context = document.getElementById(this.id).getContext("2d");
//   // for(let i=0;i<5;i++){
//   // this.context.drawImage(mapIcon,10,10,100,100);
//   // this.context.fillText(i+1, 55, 50);
//   // this.context.fillText(gameData.Levels[i].LevelMeta.LevelType, 55, 50);
//   // }
//   document.getElementById(this.id).style.zIndex = 10;
  
//   this.stonepos=[
//     [
//       [this.canvas.width/7-offsetCoordinateValue,this.canvas.height/1.9-offsetCoordinateValue],
//       [this.canvas.width/2-offsetCoordinateValue,this.canvas.height/1.15-offsetCoordinateValue],
//       [this.canvas.width/3.5+this.canvas.width/2-offsetCoordinateValue,this.canvas.height/1.2-offsetCoordinateValue],
//       [this.canvas.width/4-offsetCoordinateValue,this.canvas.height/1.28-offsetCoordinateValue],
//       [this.canvas.width/7-offsetCoordinateValue,this.canvas.height/1.5-offsetCoordinateValue],
//       [this.canvas.width/2.3+this.canvas.width/2.1-offsetCoordinateValue,this.canvas.height/1.9-offsetCoordinateValue],
//       [this.canvas.width/2.3+this.canvas.width/2.1-offsetCoordinateValue,this.canvas.height/1.42-offsetCoordinateValue],
//       [this.canvas.width/6-offsetCoordinateValue,this.canvas.height/1.15-offsetCoordinateValue],

//     ],
//   ];
//   this.createStones(this.stonepos);
//   }

// createStones(stonepos){
//  var poss = stonepos[0];
//  let i=0;
//  for(let s of levelData.data.levelNumber){
//   console.log("hello");
//   var ns = new StoneConfig(s,poss[i][0],poss[i][1]);
//   levelData.levelNumber.push(ns);
//   i+=1;
//  }
//  this.draw();
// }

// draw(){
//   for (let s of gs.stones) {
//     this.drawstone(s,canvas);
//   }
// }
// drawstone(s,canvas) {
//   var imageCenterOffsetX = canvas.height/60-canvas.height/30;
//   var imageCenterOffsetY = -canvas.height/60-canvas.height/44;
//   var imageSize = canvas.height/18;
//   var textFontSize = canvas.height/30

//   this.context.drawImage(s.img, s.x+imageCenterOffsetX, s.y+imageCenterOffsetY, imageSize, imageSize);
//   this.context.fillStyle = "white";
//   this.context.font = textFontSize+"px Arial";
//   this.context.fillText(s.text, s.x , s.y);
// }
// }