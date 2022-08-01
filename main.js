let canvas = document.getElementById("canvas");
// let canvasFench = document.getElementById("canvas-fench");
let scene = document.getElementsByClassName("game-scene");

// canvas.style.display = "none";


// class LessonCOntroller() {
//     constructor(){
//         this.scene = new StartNew();
//     }

//     render () {

//     }
// }

// let lenss = new LessonCOntroller()
// lenss.render()

// console.log(scene)

// var viewWidth = scene.width;
// var viewHeigth = scene.height;

// console.log(viewHeigth);
// console.log(viewWidth)


let ctx = canvas.getContext('2d');
// let ctxFench = canvas.getContext('2d')

// canvas.width = window.innerWidth/2;
// canvas.height = window.innerHeight;

// window.addEventListener("resize", function(){
//     canvas.width = window.innerWidth/2;
// });
// canvas.width = 400;
canvas.height = window.innerHeight


var bgimg = new Image();
bgimg.src = "./assets/images/bg_v01.jpg";
bgimg.onload = function(e){
    drawBackdown();
}

var hillimg = new Image();
hillimg.src = "./assets/images/hill_v01.png";
hillimg.onload = function(e){
    drawBackdown();
}

var pillerimg = new Image();
pillerimg.src = "./assets/images/Totem_v02_v01.png";
pillerimg.onload = function(e){
    drawBackdown();
}

var grassimg = new Image();
grassimg.src = "./assets/images/FG_a_v01.png";
grassimg.onload = function(e){
    drawBackdown();
}

var fenchimg = new Image();
fenchimg.src = "./assets/images/fence_v01.png";
fenchimg.onload = function(e){
    ctx.save(); // save current state
    ctx.translate(-220, 25)
    ctx.rotate(-120); // rotate
    drawBackdown1();
    // ctx.restore(); 
}


function drawBackdown() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(pillerimg, canvas.width * .6, canvas.height/6, canvas.width, canvas.height/2);
    ctx.drawImage(hillimg, -canvas.width * .25, canvas.height/2, canvas.width * 1.5, canvas.height/2);
    ctx.drawImage(grassimg, -canvas.width * .25, canvas.height/2 + canvas.height/2 * 0.10, canvas.width * 1.5, canvas.height/2);
    
}

function drawBackdown1() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
    // ctx.drawImage(pillerimg, canvas.width * .6, canvas.height/6, canvas.width, canvas.height/2);
    ctx.drawImage(fenchimg, -canvas.width * .26, canvas.height/2, canvas.width/1.25, canvas.height/5.25);
    // ctx.drawImage(hillimg, -canvas.width * .25, canvas.height/2, canvas.width * 1.5, canvas.height/2);
    // ctx.drawImage(grassimg, -canvas.width * .25, canvas.height/2 + canvas.height/2 * 0.10, canvas.width * 1.5, canvas.height/2);
    
}

