let canvas = document.getElementById("canvas");
let scene = document.getElementsByClassName("game-scene");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

scene.innerHTML =
  "<canvas style='z-index:1;' id='timer' width='" +
  canvas.width +
  "' height='" +
  100 +
  "'>";
let ctx = canvas.getContext("2d");
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
var timer_full = new Image();
timer_full.src = "./assets/images/timer_full.png";
timer_full.onload = function (e) {
  createBackground();
};

var fenchImg = new Image();
fenchImg.src = "./assets/images/fence_v01.png";
fenchImg.onload = function (e) {
  createBackground();
};

function createBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
}
function startTheTimer() {

  setInterval(() => {
    ctx.drawImage(
      timer_full,
      canvas.width * 0.12,
      canvas.height * 0.1,
      canvas.width * 0.1,
      canvas.height * 0.05
    );
  }, 1000);
}

startTheTimer();
