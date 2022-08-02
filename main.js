let canvas = document.getElementById("canvas");
let canvasTimer = document.getElementById("canvas-timer");
let scene = document.getElementsByClassName("game-scene");

canvas.height = window.innerHeight;
canvas.width = window.screen.width > 420 ? 420 : window.innerWidth


canvasTimer.width = window.screen.width > 420 ? 420 : window.innerWidth
canvasTimer.height = window.innerHeight/2

let ctx = canvas.getContext("2d");
let timerCtx = canvasTimer.getContext("2d");
console.log("heighe", canvas.height);

var bgImg = new Image();
bgImg.src = "./assets/images/bg_v01.jpg";
bgImg.onload = function (e) {
  createBackground();
};

var hillImg = new Image();
hillImg.src = "./assets/images/hill_v01.png";
hillImg.onload = function (e) {
  createBackground();
};
var timer_empty = new Image();
timer_empty.src = "./assets/images/timer_empty.png";
timer_empty.onload = function (e) {
  createBackground();
};

var pillerImg = new Image();
pillerImg.src = "./assets/images/Totem_v02_v01.png";
pillerImg.onload = function (e) {
  createBackground();
};

var grassImg = new Image();
grassImg.src = "./assets/images/FG_a_v01.png";
grassImg.onload = function (e) {
  createBackground();
};
var rotating_clock = new Image();
rotating_clock.src = "./assets/images/timer.png";
rotating_clock.onload = function (e) {
  createBackground();
};
var score_card = new Image();
score_card.src = "./assets/images/score_v01.png";
score_card.onload = function (e) {
  createBackground();
};
var pause_button = new Image();
pause_button.src = "./assets/images/pause_v01.png";
pause_button.onload = function (e) {
  createBackground();
  pause_button.addEventListener(
    "click",
    function (evt) {
      console.log(pause_button.y);
    },
    false
  );
};
var timer_full = new Image();
timer_full.src = "./assets/images/timer_full.png";
timer_full.onload = function (e) {
  createBackground1();
};

var fenchImg = new Image();
fenchImg.src = "./assets/images/fence_v01.png";
fenchImg.onload = function (e) {
  createBackground();
};

function createBackground() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    pillerImg,
    canvas.width * 0.6,
    canvas.height / 6,
    canvas.width,
    canvas.height / 2
  );
  ctx.drawImage(
    fenchImg,
    -canvas.width * 0.4,
    canvas.height / 3,
    canvas.width,
    canvas.height / 3
  );
  ctx.drawImage(
    hillImg,
    -canvas.width * 0.25,
    canvas.height / 2,
    canvas.width * 1.5,
    canvas.height / 2
  );
  ctx.drawImage(
    grassImg,
    -canvas.width * 0.25,
    canvas.height / 2 + (canvas.height / 2) * 0.1,
    canvas.width * 1.5,
    canvas.height / 2
  );
  ctx.drawImage(
    timer_empty,
    0,
    canvas.height * 0.1,
    canvas.width,
    canvas.height * 0.05
  );
  ctx.drawImage(
    rotating_clock,
    5,
    canvas.height * 0.09,
    canvas.width * 0.12,
    canvas.height * 0.06
  );
  ctx.drawImage(
    timer_full,
    canvas.width * 0.12,
    canvas.height * 0.1,
    canvas.width - canvas.width * 0.12,
    canvas.height * 0.05
  );
  ctx.drawImage(
    score_card,
    canvas.width * 0.01,
    canvas.height * 0.01,
    canvas.width * 0.35,
    canvas.height * 0.07
  );
  ctx.drawImage(
    pause_button,
    canvas.width * 0.75,
    canvas.height * 0.005,
    canvas.width * 0.2,
    canvas.height * 0.08
  );
}
//   ctx.drawImage(
//     timer_full,
//     canvas.width * 0.11,
//     canvas.height * 0.10,
//     canvas.width - 150,
//     canvas.height * 0.051
//   );

function createBackground1() {
    timerCtx.drawImage(
        timer_full,
        canvas.width * 0.11,
        canvas.height * 0.10,
        canvas.width - 150,
        canvas.height * 0.051
      );
}



function startTheTimer() {
  setInterval(() => {
    timerCtx.clearRect(canvas.width * 1.3 - canvas.width/2, 0, 300, canvas.height)
  }, 1000);
}

startTheTimer();
