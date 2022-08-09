import {gameData} from "./data.js"
const gameScene = document.querySelector(".game-scene");

const gameDiv =document.getElementById("game-div");

const mainDiv = document.createElement("div");
gameDiv.appendChild(mainDiv);
mainDiv.style.height=window.innerHeight;
mainDiv.style.width= window.screen.width > 420 ? 420 : window.innerWidth;



console.log(window.innerWidth);


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
// mainDiv.style.width =window.screen.width > 420 ? 420 : window.innerWidth;
// console.log(gameData.Levels[0].LevelMeta.LevelType);
for(var i=0;i<gameData.Levels.length;i++){
    var id = "";
    const levelSelectionButton = document.createElement("canvas");
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
    levelSelectionButton.text=i+1;
    levelSelectionButton.textContent=gameData.Levels[i].LevelMeta.LevelType;
    
    document.getElementById(id).addEventListener("click",function(e){
        console.log(levelSelectionButton.id);
        
        },false);
}

