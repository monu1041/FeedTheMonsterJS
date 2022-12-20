import {gameData} from "./data.js"
import {LevelStartScene} from './src/scenes/level-start-scene.js';
 const gameScene = document.querySelector(".game-scene");

    const gameDiv =document.getElementById("game-div");
    gameDiv.style.height="100vh";
    gameDiv.style.width=window.screen.width > 420 ? 420 : window.innerWidth; 
    const mainDiv = document.createElement("div");

export class AllLevelScreen{
    
    constructor(game){
        this.game=game;
        gameDiv.style.height=this.game.height;
        gameDiv.style.width=this.game.width; 
        this.createBackgroud();
    }
     
    createBackgroud(){
        var self = this;
    gameDiv.appendChild(mainDiv);
    mainDiv.style.height=window.screen.width>420?100+"vh":65+"vh";
      
    mainDiv.id="main-div";
    mainDiv.style.aspectRatio="2/3";
    mainDiv.style.display="flex";
    mainDiv.style.flexWrap="wrap"
    mainDiv.style.flexDirection="row";
    mainDiv.style.overflowY="scroll";
    mainDiv.style.justifyContent="center";
    mainDiv.style.marginLeft="30px";
    mainDiv.style.transform="translateX(0px)";
    mainDiv.style.zIndex=1;
    for(var i=0;i<gameData.Levels.length;i++){
        var id = "";
        const levelSelectionButton = document.createElement("canvas");
        levelSelectionButton.setAttribute("levelNumber",i+1);
        let ctx = levelSelectionButton.getContext("2d");
        ctx.fillStyle = "white";
        ctx.font= "35pt Calibri";
        ctx.fillText(i+1, 55, 50);
        ctx.font= "25pt Calibri";
        ctx.fillText(gameData.Levels[i].LevelMeta.LevelType,0,120);
        mainDiv.appendChild(levelSelectionButton);
        levelSelectionButton.className="levelSelectionButton";
        levelSelectionButton.id= "levelSelectionButton" +i;
        levelSelectionButton.type = i;
        id ="levelSelectionButton"+i;
        // levelSelectionButton.text=i+1;
        levelSelectionButton.textContent=gameData.Levels[i].LevelMeta.LevelType;
        
        document.getElementById(id).addEventListener("click",function(e){
            gameDiv.style.display="none";
            this.scene = new LevelStartScene(self.game);
            this.scene.createBackgroud();
            this.levelNumber=levelSelectionButton.getAttribute("levelNumber");
            },false);
    }
    };
    }


