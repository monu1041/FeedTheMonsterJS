let canvas = document.getElementById("canvas");
let canvasTimer = document.getElementById("canvas-timer");
let scene = document.getElementsByClassName("game-scene");
canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
canvasTimer.width = window.screen.width > 420 ? 420 : window.innerWidth;

var canvas_stack = new CanvasStack("canvas");
var pause_button = canvas_stack.createLayer(100, 100);
var check = document.createElement("div");
var pause_button_ctx = document.getElementById(pause_button).getContext("2d");
document.getElementById(pause_button).style.zIndex = 3;
document.getElementById(pause_button).addEventListener(
  "click",
  function (event) {
    pauseMenuPopup();
  },
  false
);
canvas.height = window.innerHeight;
canvasTimer.height = window.innerHeight / 2;

let ctx = canvas.getContext("2d");

let timerCtx = canvasTimer.getContext("2d");

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
  createBackground1();
};

var fenchImg = new Image();
fenchImg.src = "./assets/images/fence_v01.png";
fenchImg.onload = function (e) {
  createBackground();
};
var pause_button_image = new Image();
pause_button_image.src = "./assets/images/pause_v01.png";
pause_button_image.onload = function (e) {
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
  pause_button_ctx.drawImage(pause_button_image, 0, 0, 100, 100);
}

function createBackground1() {
  timerCtx.drawImage(
    timer_full,
    canvas.width * 0.11,
    canvas.height * 0.1,
    canvas.width,
    canvas.height * 0.051
  );
}

function startTheTimer() {
  setInterval(() => {
    timerCtx.clearRect(
      canvas.width * 1.3 - canvas.width / 2,
      0,
      300,
      canvas.height
    );
  }, 1000);
}

startTheTimer();

function pauseMenuPopup() {
  let pop_up = canvas_stack.createLayer(
    window.innerHeight,
    window.screen.width > 420 ? 420 : window.innerWidth
  );
  var pop_up_ctx = document.getElementById(pop_up).getContext("2d");
  var popup_canvas_stack = new CanvasStack(pop_up);
  let close_button = popup_canvas_stack.createLayer(
    canvas.width * 0.2,
    canvas.width * 0.2
  );
  var close_button_ctx = document.getElementById(close_button).getContext("2d");
  document.getElementById(pop_up).style.zIndex = 4;
  document.getElementById(close_button).style.zIndex = 4;
  document.getElementById(close_button).style.top = canvas.height * 0.2 + "px";
  document.getElementById(close_button).style.left = "50%" - canvas.width * 0.2;
  document.getElementById(pop_up).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  var pop_up_image = new Image();
  pop_up_image.src = "./assets/images/popup_bg_v01.png";

  pop_up_image.onload = function (e) {
    pop_up_ctx.drawImage(
      pop_up_image,
      canvas.width * 0.1,
      canvas.height * 0.2,
      canvas.width * 0.8,
      canvas.height * 0.4
    );
  };
  var close_button_image = new Image();
  close_button_image.src = "./assets/images/close_btn.png";
  close_button_image.onload = function (e) {
    close_button_ctx.drawImage(
      close_button_image,
      0,
      0,
      canvas.width * 0.2,
      canvas.width * 0.2
    );
  };
  document.getElementById(close_button).addEventListener(
    "click",
    function (event) {
      canvas_stack.deleteLayer(pop_up);
      popup_canvas_stack.deleteLayer(close_button);
    },
    false
  );
}
