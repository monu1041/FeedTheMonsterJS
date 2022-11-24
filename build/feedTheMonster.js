/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/common.js":
/*!******************************!*\
  !*** ./src/common/common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseUserClicked": () => (/* binding */ FirebaseUserClicked),
/* harmony export */   "FirebaseUserInstall": () => (/* binding */ FirebaseUserInstall),
/* harmony export */   "GameEndLayer": () => (/* binding */ GameEndLayer),
/* harmony export */   "LevelEndButtonsLayer": () => (/* binding */ LevelEndButtonsLayer),
/* harmony export */   "LevelEndLayer": () => (/* binding */ LevelEndLayer),
/* harmony export */   "LevelSelectionLayer": () => (/* binding */ LevelSelectionLayer),
/* harmony export */   "LevelStartLayer": () => (/* binding */ LevelStartLayer),
/* harmony export */   "MonsterLayer": () => (/* binding */ MonsterLayer),
/* harmony export */   "NativePlayButton": () => (/* binding */ NativePlayButton),
/* harmony export */   "PWAInstallStatus": () => (/* binding */ PWAInstallStatus),
/* harmony export */   "PausePopupLayer": () => (/* binding */ PausePopupLayer),
/* harmony export */   "PlayButtonLayer": () => (/* binding */ PlayButtonLayer),
/* harmony export */   "PromptTextLayer": () => (/* binding */ PromptTextLayer),
/* harmony export */   "StartSceneLayer": () => (/* binding */ StartSceneLayer),
/* harmony export */   "StoneLayer": () => (/* binding */ StoneLayer),
/* harmony export */   "TimetickerLayer": () => (/* binding */ TimetickerLayer),
/* harmony export */   "UserCancelled": () => (/* binding */ UserCancelled),
/* harmony export */   "loadImages": () => (/* binding */ loadImages),
/* harmony export */   "loadingScreen": () => (/* binding */ loadingScreen)
/* harmony export */ });
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}
function loadingScreen(loading) {
    const loadingElement = document.getElementById("loading");
    if (loading) {
        loadingElement.style.display = "block";
        new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas").bkgCanvas.layers.forEach((element) => {
            const htmlElement = document.getElementById(element.id);
            htmlElement.style.display = "none";
        });
    }
    else {
        loadingElement.style.display = "none";
        new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas").bkgCanvas.layers.forEach((element) => {
            const htmlElement = document.getElementById(element.id);
            htmlElement.style.display = "flex";
        });
    }
}
const MonsterLayer = "monsterCanvas";
const PausePopupLayer = "pausepopupCanvas";
const StoneLayer = "stoneCanvas";
const TimetickerLayer = "timetickCanvas";
const LevelEndLayer = "levelEndCanvas";
const LevelEndButtonsLayer = "levelEndButtonsCanvas";
const LevelSelectionLayer = "levelSelectionCanvas";
const LevelStartLayer = "levelStartCanvas";
const StartSceneLayer = "startSceneCanvas";
const PlayButtonLayer = "playButtonCanvas";
const GameEndLayer = "GameEndCanvas";
const FirebaseUserClicked = "user_clicked";
const FirebaseUserInstall = "user_installed";
const PromptTextLayer = "promptTextCanvas";
const PWAInstallStatus = "pwa_installed_status";
const UserCancelled = "user_cancel_installation";
const NativePlayButton = "native_playbutton_clicked";


/***/ }),

/***/ "./src/common/level-config.js":
/*!************************************!*\
  !*** ./src/common/level-config.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelConfig": () => (/* binding */ LevelConfig)
/* harmony export */ });
class LevelConfig {
    constructor(xPos, yPos, index) {
        this.x = xPos;
        this.y = yPos;
        this.index = index;
        this.drawready = false;
        this.img = new Image();
        this.img.src = "./assets/images/mapIcon.png";
    }
}


/***/ }),

/***/ "./src/common/sound.js":
/*!*****************************!*\
  !*** ./src/common/sound.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sound)
/* harmony export */ });
let inactive_screen = false;
class Sound {
    constructor() {
        this.audio = new Audio();
    }
    playSound(src) {
        this.audio.play().catch((e) => {
            this.audio1 = new Audio();
            this.audio1.src = src;
            this.audio1.play().catch((e) => {
                this.audio2 = new Audio();
                this.audio2.src = src;
                this.audio2.play();
            });
        });
    }
    activeScreen() {
        if (inactive_screen) {
            inactive_screen = false;
        }
        else {
            this.pauseSound();
            inactive_screen = true;
        }
    }
    pauseSound() {
        this.audio ? this.audio.pause() : null;
        this.audio2 ? this.audio1.pause() : null;
        this.audio2 ? this.audio2.pause() : null;
    }
    changeSourse(src) {
        this.audio.src = src;
        this.playSound(src);
    }
}


/***/ }),

/***/ "./src/common/stones-config.js":
/*!*************************************!*\
  !*** ./src/common/stones-config.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoneConfig": () => (/* binding */ StoneConfig)
/* harmony export */ });
class StoneConfig {
    constructor(stoneLetter, xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
        this.origx = xPos;
        this.origy = yPos;
        this.drawready = false;
        this.text = stoneLetter;
        this.img = new Image();
        this.img.src = "./assets/images/stone_pink_v02.png";
    }
}


/***/ }),

/***/ "./src/components/buttons/cancel_button.js":
/*!*************************************************!*\
  !*** ./src/components/buttons/cancel_button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CancelButton)
/* harmony export */ });
class CancelButton {
    constructor(context, canvas) {
        this.posX = canvas.width * 0.1 + (canvas.width * 0.15) / 2;
        this.posY = canvas.height * 0.2;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/close_btn.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width * 0.15, self.canvas.width * 0.15);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.width * 0.15) / 2) *
            (xClick - this.posX - (this.canvas.width * 0.15) / 2) +
            (yClick - this.posY - (this.canvas.width * 0.15) / 2) *
                (yClick - this.posY - (this.canvas.width * 0.15) / 2));
        if (distance < (this.canvas.width * 0.15) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/close_button.js":
/*!************************************************!*\
  !*** ./src/components/buttons/close_button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloseButton)
/* harmony export */ });
class CloseButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/map_btn.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width * 0.19, self.canvas.width * 0.19);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.width * 0.19) / 2) *
            (xClick - this.posX - (this.canvas.width * 0.19) / 2) +
            (yClick - this.posY - (this.canvas.width * 0.19) / 2) *
                (yClick - this.posY - (this.canvas.width * 0.19) / 2));
        if (distance < (this.canvas.width * 0.19) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/install_button.js":
/*!**************************************************!*\
  !*** ./src/components/buttons/install_button.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InstallButton)
/* harmony export */ });
class InstallButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/Install_button.png";
        self.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width / 3, self.canvas.width / 6);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - this.canvas.width / 6) *
            (xClick - this.posX - this.canvas.width / 6) +
            (yClick - this.posY - this.canvas.width / 12) *
                (yClick - this.posY - this.canvas.width / 12));
        if (distance < this.canvas.width / 8) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/next_button.js":
/*!***********************************************!*\
  !*** ./src/components/buttons/next_button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NextButton)
/* harmony export */ });
class NextButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/next_btn.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width * 0.19, self.canvas.width * 0.19);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.width * 0.19) / 2) *
            (xClick - this.posX - (this.canvas.width * 0.19) / 2) +
            (yClick - this.posY - (this.canvas.width * 0.19) / 2) *
                (yClick - this.posY - (this.canvas.width * 0.19) / 2));
        if (distance < (this.canvas.width * 0.19) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/pause_button.js":
/*!************************************************!*\
  !*** ./src/components/buttons/pause_button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PauseButton)
/* harmony export */ });
class PauseButton {
    constructor(context, canvas) {
        this.posX = canvas.width - canvas.height * 0.09;
        this.posY = 0;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/pause_v01.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.height * 0.09, self.canvas.height * 0.09);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.height * 0.09) / 2) *
            (xClick - this.posX - (this.canvas.height * 0.09) / 2) +
            (yClick - this.posY - (this.canvas.height * 0.09) / 2) *
                (yClick - this.posY - (this.canvas.height * 0.09) / 2));
        if (distance < (this.canvas.height * 0.09) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/play_butoon.js":
/*!***********************************************!*\
  !*** ./src/components/buttons/play_butoon.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayButton)
/* harmony export */ });
class PlayButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/Play_button.png";
        self.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width / 3, self.canvas.width / 3);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - this.canvas.width / 6) *
            (xClick - this.posX - this.canvas.width / 6) +
            (yClick - this.posY - this.canvas.width / 6) *
                (yClick - this.posY - this.canvas.width / 6));
        if (distance < this.canvas.width / 8) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/retry_button.js":
/*!************************************************!*\
  !*** ./src/components/buttons/retry_button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RetryButton)
/* harmony export */ });
class RetryButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/retry_btn.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width * 0.19, self.canvas.width * 0.19);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.width * 0.19) / 2) *
            (xClick - this.posX - (this.canvas.width * 0.19) / 2) +
            (yClick - this.posY - (this.canvas.width * 0.19) / 2) *
                (yClick - this.posY - (this.canvas.width * 0.19) / 2));
        if (distance < (this.canvas.width * 0.19) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/level-indicators.js":
/*!********************************************!*\
  !*** ./src/components/level-indicators.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelIndicators": () => (/* binding */ LevelIndicators)
/* harmony export */ });
class LevelIndicators {
    constructor(context, canvas, activeIndicators) {
        this.context = context;
        this.canvas = canvas;
        this.activeIndicators = activeIndicators;
        this.draw();
    }
    setIndicators(int) {
        this.activeIndicators = int;
        this.update(this);
    }
    draw() {
        var self = this;
        var level_indicator = new Image();
        level_indicator.src = "./assets/images/levels_v01.png";
        var bar_empty = new Image();
        bar_empty.src = "./assets/images/bar_empty_v01.png";
        level_indicator.onload = function (e) {
            self.context.drawImage(level_indicator, 0, 0, self.canvas.width * 0.35, self.canvas.height * 0.09);
            bar_empty.onload = function (e) {
                for (var i = 0; i < 5; i++) {
                    self.context.drawImage(bar_empty, ((self.canvas.width * 0.35) / 7) * (i + 1), (self.canvas.height * 0.09) / 2 - (self.canvas.height * 0.09) / 6, (self.canvas.width * 0.35) / 10, (self.canvas.height * 0.09) / 3);
                }
            };
            self.update(self);
        };
    }
    update(self) {
        var bar_full = new Image();
        bar_full.src = "./assets/images/bar_full_v01.png";
        bar_full.onload = function (e) {
            for (var i = 0; i < self.activeIndicators; i++) {
                self.context.drawImage(bar_full, ((self.canvas.width * 0.35) / 7) * (i + 1), (self.canvas.height * 0.09) / 2 - (self.canvas.height * 0.09) / 6, (self.canvas.width * 0.35) / 10, (self.canvas.height * 0.09) / 3);
            }
        };
    }
}


/***/ }),

/***/ "./src/components/monster.js":
/*!***********************************!*\
  !*** ./src/components/monster.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Monster": () => (/* binding */ Monster)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");


var lastTime = 0;
var self;
var animationFrame;
const eatImg = new Image();
eatImg.src = "./assets/images/eat4.png";
const idleImg = new Image();
idleImg.src = "./assets/images/idle4.png";
const spitImg = new Image();
spitImg.src = "./assets/images/spit4.png";
class Monster {
    constructor(game, zindex) {
        this.game = game;
        self = this;
        this.zindex = zindex;
        this.width = this.game.width;
        this.height = this.game.height;
        this.image = document.getElementById("monster");
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 6;
        this.x = this.game.width / 2 - this.game.width * 0.243;
        this.y = this.game.width / 3;
        this.fps = 10;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
        this.createCanvas();
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.MonsterLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = '6';
        this.canavsElement.style.bottom = '0';
        this.draw();
        this.animation(0);
    }
    changeZindex(index) {
        this.canavsElement.style.zIndex = index;
    }
    deleteCanvas() {
        cancelAnimationFrame(animationFrame);
        this.canvasStack.deleteLayer(this.id);
    }
    update(deltaTime) {
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) {
                this.frameX++;
            }
            else {
                this.frameX = 0;
            }
        }
        else {
            this.frameTimer += deltaTime;
        }
        this.draw();
    }
    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.image, 770 * this.frameX, 1386 * this.frameY, 768, 1386, this.x, this.y * 0.8, this.width / 2, this.height / 1.5);
    }
    changeImage(src) {
        // if (this.frameY == 1) {
        //   this.frameY = 0;
        // } else {
        //   this.frameY = 1;
        // }
        this.image.src = src;
    }
    changeToEatAnimation() {
        this.image = eatImg;
        setTimeout(() => {
            this.changeToIdleAnimation();
        }, 2000);
    }
    changeToIdleAnimation() {
        this.image = idleImg;
    }
    changeToSpitAnimation() {
        this.image = spitImg;
        setTimeout(() => {
            this.changeToIdleAnimation();
        }, 2000);
    }
    animation(timeStamp) {
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        self.update(deltaTime);
        animationFrame = requestAnimationFrame(self.animation);
    }
}


/***/ }),

/***/ "./src/components/pause-popup.js":
/*!***************************************!*\
  !*** ./src/components/pause-popup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PausePopUp)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _buttons_cancel_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/cancel_button.js */ "./src/components/buttons/cancel_button.js");
/* harmony import */ var _buttons_close_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/close_button.js */ "./src/components/buttons/close_button.js");
/* harmony import */ var _buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/retry_button.js */ "./src/components/buttons/retry_button.js");





class PausePopUp {
    constructor(canvas, levelStart) {
        this.canvas = canvas;
        this.levelStart = levelStart;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
        this.createCanvas();
    }
    createCanvas() {
        var self = this;
        this.id = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PausePopupLayer);
        const selfIdElement = document.getElementById(this.id);
        this.context = selfIdElement.getContext("2d");
        selfIdElement.style.zIndex = "11";
        selfIdElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        var pop_up_image = new Image();
        pop_up_image.src = "./assets/images/popup_bg_v01.png";
        pop_up_image.onload = function (e) {
            self.context.drawImage(pop_up_image, self.canvas.width * 0.1, self.canvas.height * 0.2, self.canvas.width * 0.8, self.canvas.width * 0.8);
            self.cancelButton = new _buttons_cancel_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](self.context, self.canvas);
            self.retryButton = new _buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_4__["default"](self.context, self.canvas, self.canvas.width * 0.55, self.canvas.height * 0.2 +
                self.canvas.width * 0.4 -
                (self.canvas.width * 0.19) / 2);
            self.closeButton = new _buttons_close_button_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.context, self.canvas, self.canvas.width * 0.25, self.canvas.height * 0.2 +
                self.canvas.width * 0.4 -
                (self.canvas.width * 0.19) / 2);
        };
        selfIdElement.addEventListener("click", function (event) {
            var rect = selfIdElement.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (self.cancelButton.onClick(x, y)) {
                self.levelStart.timerTicking.resumeTimer();
                self.levelStart.levelEndCallBack();
                self.deleteCanvas(self);
            }
            if (self.retryButton.onClick(x, y)) {
                self.levelStart.levelEndCallBack("retry_button");
                self.deleteCanvas(self);
            }
            if (self.closeButton.onClick(x, y)) {
                self.levelStart.levelEndCallBack("close_button");
                self.deleteCanvas(self);
            }
        });
    }
    deleteCanvas(self) {
        self.canvasStack.deleteLayer(this.id);
    }
    draw() { }
    update() { }
}


/***/ }),

/***/ "./src/components/prompt-text.js":
/*!***************************************!*\
  !*** ./src/components/prompt-text.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromptText": () => (/* binding */ PromptText)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");


var self;
class PromptText {
    constructor(game, levelStart, currentPuzzleData, levelData) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
        this.levelStart = levelStart;
        this.levelData = levelData;
        self = this;
        this.currentPromptText = currentPuzzleData.prompt.promptText;
        this.currentPuzzleData = currentPuzzleData;
        this.fntstOrGrtImgArr = [];
        this.createCanvas();
        this.loadFantasticAndGreatImage();
    }
    loadFantasticAndGreatImage() {
        var self = this;
        this.fantastic_image = new Image();
        this.fantastic_image.src = "./assets/images/fantastic_01.png";
        this.fntstOrGrtImgArr.push(this.fantastic_image);
        this.great_image = new Image();
        this.great_image.src = "./assets/images/great_01.png";
        this.fntstOrGrtImgArr.push(this.great_image);
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PromptTextLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 5;
    }
    setCurrrentPuzzleData(data) {
        this.currentPuzzleData = data;
        this.currentPromptText = data.prompt.promptText;
    }
    showFantasticOrGreat(imageIndex) {
        var self = this;
        this.context.clearRect(this.game.width / 2 - (this.game.width * 0.5) / 2, this.height * 0.15, this.game.width * 0.5, this.height * 0.25);
        this.context.drawImage(self.fntstOrGrtImgArr[imageIndex], this.game.width - this.game.width * 0.75, this.height * 0.2, this.game.width * 0.5, this.height * 0.1);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    draw(droppedStones = 0) {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.prompt_image, this.game.width / 2 - (this.game.width * 0.5) / 2, this.height * 0.15, this.game.width * 0.5, this.height * 0.25);
        this.context.fillStyle = "black";
        this.context.font = 30 + "px Arial";
        this.context.textAlign = "center";
        const promptTextLetters = this.currentPromptText.split("");
        const x = this.width / 2.1;
        const y = this.height * 0.26;
        for (let i = 0; i < promptTextLetters.length; i++) {
            // this.context.textAlign = "center";
            switch (this.levelData.levelMeta.levelType) {
                case "LetterInWord": {
                    if (this.currentPuzzleData.targetStones.includes(promptTextLetters[i])) {
                        this.context.fillStyle = "red";
                        this.context.fillText(promptTextLetters[i], x + 20 * i, y);
                    }
                    else {
                        this.context.fillStyle = "black";
                        this.context.fillText(promptTextLetters[i], x + 20 * i, y);
                    }
                    break;
                }
                case "Word": {
                    if (droppedStones > i || droppedStones == undefined) {
                        this.context.fillStyle = "black";
                        this.context.fillText(promptTextLetters[i], x + 20 * i, y);
                    }
                    else {
                        this.context.fillStyle = "red";
                        this.context.fillText(promptTextLetters[i], x + 20 * i, y);
                    }
                    break;
                }
                default: {
                    this.context.fillStyle = "black";
                    this.context.fillText(promptTextLetters[i], x + 20 * i, y);
                }
            }
        }
        // this.context.fillText(
        //     this.currentPromptText,
        //   this.width / 2.1,
        //   this.height * 0.26
        // );
    }
    createBackground() {
        var self = this;
        self.prompt_image = new Image();
        self.prompt_image.src = "./assets/images/promptTextBg.png";
        self.prompt_image.onload = function (e) {
            self.draw();
        };
    }
    update() {
        this.createBackground();
    }
}


/***/ }),

/***/ "./src/components/stones-layer.js":
/*!****************************************!*\
  !*** ./src/components/stones-layer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StonesLayer)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _common_stones_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/stones-config.js */ "./src/common/stones-config.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _pause_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pause-popup.js */ "./src/components/pause-popup.js");




var gs = {
    mode: "gameplay",
    levelnum: 0,
};
gs.puzzle = {
    target: [],
    stones: [],
};
gs.stones = [];
var pickedStone;
var offsetCoordinateValue = 32;
class StonesLayer {
    constructor(canvas, puzzleData, pausebutton, callBack, levelStart) {
        this.canvas = canvas;
        this.levelStart = levelStart;
        this.width = canvas.width;
        this.pausebutton = pausebutton;
        this.height = canvas.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__.CanvasStack("canvas");
        this.puzzleData = puzzleData;
        this.setCurrentPuzzle();
        this.levelStart = levelStart;
        this.callBack = callBack;
        this.createCanvas();
    }
    setNewPuzzle(currentPuzzle) {
        this.puzzleData = currentPuzzle;
        this.setCurrentPuzzle();
        this.createStones(this.stonepos);
    }
    stonepos(stonepos) {
        throw new Error("Method not implemented.");
    }
    setCurrentPuzzle() {
        this.levelStart.audio.changeSourse(this.puzzleData.prompt.promptAudio);
        gs.puzzle.stones = [];
        gs.puzzle.target = [];
        for (let target of this.puzzleData.targetStones) {
            gs.puzzle.target.push(target);
        }
        gs.puzzle.stones = this.puzzleData.foilStones;
        gs.puzzle.prompt = this.puzzleData.prompt.promptText;
    }
    isTimerEnded() {
        pickedStone = null;
    }
    createCanvas() {
        var self = this;
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.StoneLayer);
        const selfElelementId = document.getElementById(this.id);
        this.context = selfElelementId.getContext("2d");
        selfElelementId.style.zIndex = "7";
        selfElelementId.style.bottom = "0";
        this.stonepos = [
            [
                [
                    this.canvas.width / 5 - offsetCoordinateValue,
                    this.canvas.height / 1.9 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 2 - offsetCoordinateValue,
                    this.canvas.height / 1.15 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 3.5 +
                        this.canvas.width / 2 -
                        offsetCoordinateValue,
                    this.canvas.height / 1.2 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 4 - offsetCoordinateValue,
                    this.canvas.height / 1.28 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 7 - offsetCoordinateValue,
                    this.canvas.height / 1.5 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 2.3 +
                        this.canvas.width / 2.1 -
                        offsetCoordinateValue,
                    this.canvas.height / 1.9 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 2.3 +
                        this.canvas.width / 2.1 -
                        offsetCoordinateValue,
                    this.canvas.height / 1.42 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 6 - offsetCoordinateValue,
                    this.canvas.height / 1.15 - offsetCoordinateValue,
                ],
            ],
        ];
        selfElelementId.addEventListener("click", function (event) {
            var rect = selfElelementId.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (Math.sqrt(x - this.width / 3) < 12 &&
                Math.sqrt(y - this.height / 5.5) < 10) {
                self.levelStart.audio.changeSourse(self.puzzleData.prompt.promptAudio);
            }
            if (Math.sqrt((x - this.width / 2 - (this.width * 0.3) / 2) *
                (x - this.width / 2 - (this.width * 0.3) / 2)) +
                (y - this.height * 0.15) * (y - this.height * 0.15) <=
                1000) {
                console.log("prompt");
            }
        });
        selfElelementId.addEventListener("mousedown", function (event) {
            var rect = selfElelementId.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            self.levelStart.timerTicking.resumeTimer();
            if (self.pausebutton.onClick(x, y)) {
                self.levelStart.timerTicking.pauseTimer();
                self.levelStart.levelEndCallBack();
                new _pause_popup_js__WEBPACK_IMPORTED_MODULE_3__["default"](document.getElementById(self.id), self.levelStart);
            }
            for (let s of gs.stones) {
                if (Math.sqrt((x - s.x) * (x - s.x) + (y - s.y) * (y - s.y)) <= 40) {
                    self.levelStart.audio.changeSourse("./assets/audios/onDrag.mp3");
                    pickedStone = s;
                }
            }
        }, false);
        selfElelementId.addEventListener("mouseup", function (event) {
            var rect = selfElelementId.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (Math.sqrt((x -
                self.canvas.scene.monster.x -
                self.canvas.scene.monster.width / 4) *
                (x -
                    self.canvas.scene.monster.x -
                    self.canvas.scene.monster.width / 4) +
                (y -
                    self.canvas.scene.monster.y -
                    self.canvas.scene.monster.height / 2.7) *
                    (y -
                        self.canvas.scene.monster.y -
                        self.canvas.scene.monster.height / 2.7)) <= 60) {
                if (pickedStone) {
                    pickedStone.x = -900;
                    pickedStone.y = -900;
                    if (pickedStone.text == gs.puzzle.target[0]) {
                        gs.puzzle.target.shift();
                        if (gs.puzzle.target.length == 0) {
                            gs.stones = [];
                            self.callBack(true, true);
                        }
                        else {
                            self.callBack(true, false);
                        }
                    }
                    else {
                        gs.stones = [];
                        self.callBack(false, true);
                    }
                }
                pickedStone = null;
            }
            if (pickedStone) {
                pickedStone.x = pickedStone.origx;
                pickedStone.y = pickedStone.origy;
            }
            pickedStone = null;
        }, false);
        selfElelementId.addEventListener("mousemove", function (event) {
            var rect = selfElelementId.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (pickedStone) {
                pickedStone.x = x;
                pickedStone.y = y;
            }
        }, false);
        selfElelementId.addEventListener("touchstart", function (e) {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            selfElelementId.dispatchEvent(mouseEvent);
        }, false);
        selfElelementId.addEventListener("touchmove", function (e) {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            selfElelementId.dispatchEvent(mouseEvent);
        }, false);
        selfElelementId.addEventListener("touchend", function (e) {
            var touch = e.changedTouches[0];
            var mouseEvent = new MouseEvent("mouseup", {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            selfElelementId.dispatchEvent(mouseEvent);
        }, false);
        this.createStones(this.stonepos);
    }
    setPrompt() {
        this.context.fillStyle = "black";
        this.context.font = this.width * 0.09 + "px Arial";
        this.context.textAlign = "center";
        this.context.fillText(gs.puzzle.prompt, this.width / 2, this.height * 0.27);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let s of gs.stones) {
            this.drawstone(s, this.canvas);
        }
    }
    drawstone(s, canvas) {
        var imageSize = canvas.height / 13;
        var textFontSize = canvas.height / 20;
        var imageCenterOffsetX = imageSize / 2.3;
        var imageCenterOffsetY = imageSize / 1.5;
        this.context.drawImage(s.img, s.x - imageCenterOffsetX, s.y - imageCenterOffsetY, imageSize, imageSize);
        this.context.fillStyle = "white";
        this.context.font = textFontSize + "px Arial";
        this.context.textAlign = "center";
        this.context.fillText(s.text, s.x, s.y);
    }
    createStones(stonepos) {
        var poss = stonepos[0];
        var i = 0;
        gs.stones.splice(0, gs.stones.length);
        for (let s of gs.puzzle.stones) {
            var ns = new _common_stones_config_js__WEBPACK_IMPORTED_MODULE_1__.StoneConfig(s, poss[i][0], poss[i][1]);
            gs.stones.push(ns);
            i += 1;
        }
        this.draw();
    }
    update() {
        this.draw();
    }
}


/***/ }),

/***/ "./src/components/timer-ticking.js":
/*!*****************************************!*\
  !*** ./src/components/timer-ticking.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerTicking": () => (/* binding */ TimerTicking)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");


class TimerTicking {
    constructor(game, levelStart) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        this.widthToClear = this.game.width / 3.4;
        this.maxLimitExhausted = false;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
        this.timer = 0;
        this.isTimerStarted = false;
        this.isTimerEnded = false;
        this.levelStart = levelStart;
        this.isTimerRunningOut = false;
        var self = this;
        this.createCanvas();
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.TimetickerLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = "4";
        // this.animation(0);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.timer_full, this.game.width * 0.12, this.height * 0.099, this.game.width - 50, this.height * 0.05);
        this.beginTimerOnStart();
    }
    createBackgroud() {
        var self = this;
        this.timer_full = new Image();
        this.timer_full.src = "./assets/images/timer_full.png";
        this.timer_full.onload = function (e) {
            self.draw();
            self.beginTimerOnStart();
        };
    }
    update() {
        if (this.isTimerStarted) {
            this.timer += 0.06;
            if (this.game.width * 1.3 - this.widthToClear - 10 * this.timer > 55) {
                this.context.clearRect(this.game.width * 1.3 - this.widthToClear - 10 * this.timer, 0, this.width, this.height);
            }
            if (this.game.width * 1.3 - this.widthToClear - 10 * this.timer < 100 &&
                this.game.width * 1.3 - this.widthToClear - 10 * this.timer > 54 &&
                !this.isTimerRunningOut) {
                this.isTimerRunningOut = true;
                this.levelStart.audio.changeSourse("./assets/audios/timeout.mp3");
            }
            if (this.game.width * 1.3 - this.widthToClear - 10 * this.timer < 55 &&
                this.game.width * 1.3 - this.widthToClear - 10 * this.timer > 54) {
                this.isTimerRunningOut = false;
                this.isTimerEnded = true;
                this.isTimerEnded ? this.levelStart.changePuzzle() : null;
                this.timer = 0;
            }
        }
    }
    beginTimerOnStart() {
        var self = this;
        setTimeout(() => {
            if (!this.pauseButtonClicked) {
                if (!self.isTimerStarted && self.timer == 0) {
                    self.timer = 0;
                    self.isTimerStarted = true;
                }
            }
        }, 6000);
    }
    stopTimer() {
        this.isTimerStarted = false;
        setTimeout(() => {
            this.timer = 0;
        }, 3000);
        this.timer = 0;
    }
    pauseTimer() {
        this.isTimerStarted = false;
        this.pauseButtonClicked = true;
    }
    resumeTimer() {
        this.isTimerStarted = true;
        this.pauseButtonClicked = false;
    }
}


/***/ }),

/***/ "./src/data/api-data.js":
/*!******************************!*\
  !*** ./src/data/api-data.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getFtmData": () => (/* binding */ getFtmData)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const URL = "./ftm_english.json";
function getFtmData() {
    return fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json().then((data) => {
        return data;
    }));
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        // let d = {
        //     "OtherAudios": null,
        //     "FeedbackTexts": null,
        //     "Levels": null,
        //     "FeedbackAudios": null,
        //     "RightToLeft": null
        // }
        return yield getFtmData();
    });
}


/***/ }),

/***/ "./src/data/data-modal.js":
/*!********************************!*\
  !*** ./src/data/data-modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataModal": () => (/* binding */ DataModal),
/* harmony export */   "FeedbackAudios": () => (/* binding */ FeedbackAudios),
/* harmony export */   "FeedbackTexts": () => (/* binding */ FeedbackTexts),
/* harmony export */   "FoilStone": () => (/* binding */ FoilStone),
/* harmony export */   "LevelMeta": () => (/* binding */ LevelMeta),
/* harmony export */   "Levels": () => (/* binding */ Levels),
/* harmony export */   "OtherAudios": () => (/* binding */ OtherAudios),
/* harmony export */   "Prompt": () => (/* binding */ Prompt),
/* harmony export */   "Puzzles": () => (/* binding */ Puzzles),
/* harmony export */   "TargetStone": () => (/* binding */ TargetStone)
/* harmony export */ });
class DataModal {
    constructor(otherAudios, levels, feedbackTexts, rightToLeft, feedbackAudios) {
        this.otherAudios = new OtherAudios(otherAudios);
        this.levels = this.getLevels(levels);
        this.FeedbackTexts = new FeedbackTexts(feedbackTexts);
        this.FeedbackAudios = new FeedbackAudios(feedbackAudios);
        this.rightToLeft = rightToLeft;
    }
    getLevels(levels) {
        let levelArray = [];
        for (let i = 0; i < levels.length; i++) {
            levelArray.push(new Levels(levels[i]));
        }
        return levelArray;
    }
}
class OtherAudios {
    constructor(otherAudios) {
        this.selctYourPlayer = otherAudios["Select your player"];
        this.watchMeGrow = otherAudios["Watch me grow"];
        this.areYouSure = otherAudios["Are you sure"];
    }
}
class FeedbackTexts {
    constructor(feedbackTexts) {
        this.fantastic = feedbackTexts[0];
        this.great = feedbackTexts[1];
        this.amazing = feedbackTexts[2];
    }
}
class FeedbackAudios {
    constructor(feedbackAudios) {
        this.fantastic = feedbackAudios[0];
        this.great = feedbackAudios[1];
        this.amazing = feedbackAudios[2];
    }
}
class Levels {
    constructor(levels) {
        this.puzzles = this.getPuzzleData(levels);
        this.levelMeta = new LevelMeta(levels.LevelMeta);
        this.levelNumber = levels.LevelNumber;
    }
    getPuzzleData(levels) {
        let puzzleObjects = [];
        levels.Puzzles.map((puzzleData, index) => {
            puzzleObjects.push(new Puzzles(puzzleData));
        });
        return puzzleObjects;
    }
}
class Puzzles {
    constructor(puzzle) {
        this.segmentNumber = puzzle.SegmentNumber;
        this.prompt = new Prompt(puzzle.prompt);
        this.foilStones = this.getFoilStones(puzzle);
        this.targetStones = this.getTargetStones(puzzle);
    }
    getFoilStones(puzzle) {
        let foilStoneArray = [];
        puzzle.foilstones.map((stones, index) => {
            foilStoneArray.push(stones.StoneText);
        });
        return foilStoneArray;
    }
    getTargetStones(puzzle) {
        let targetStoneArray = [];
        puzzle.targetstones.map((stones, index) => {
            targetStoneArray.push(stones.StoneText);
        });
        return targetStoneArray;
    }
}
class FoilStone {
    constructor(stoneText) {
        this.stoneText = stoneText;
    }
}
class TargetStone {
    constructor() {
        this.stoneText;
    }
}
class Prompt {
    constructor(prompt) {
        this.promptText = prompt.PromptText;
        this.promptAudio = prompt.PromptAudio;
    }
}
class LevelMeta {
    constructor(levelMeta) {
        this.promptFadeOut = levelMeta.PromptFadeout;
        this.letterGroup = levelMeta.LetterGroup;
        this.levelNumber = levelMeta.LevelNumber;
        this.protoType = levelMeta.PromptType;
        this.levelType = levelMeta.LevelType;
    }
}


/***/ }),

/***/ "./src/data/profile-data.js":
/*!**********************************!*\
  !*** ./src/data/profile-data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileData": () => (/* binding */ ProfileData),
/* harmony export */   "getDatafromStorage": () => (/* binding */ getDatafromStorage),
/* harmony export */   "setDataToStorage": () => (/* binding */ setDataToStorage)
/* harmony export */ });
class ProfileData {
    constructor(levelName, levelNumber, levelScore, levelStar) {
        (this.levelName = levelName),
            (this.levelNumber = levelNumber),
            (this.levelScore = levelScore),
            (this.levelStar = levelStar);
    }
}
function setDataToStorage(profileData) {
    const existingData = getDatafromStorage()
        ? jsonToArray(getDatafromStorage())
        : [];
    profileData ? dataPushToArray(existingData, profileData) : null;
    existingData.sort((a, b) => {
        if (a.levelNumber > b.levelNumber) {
            return 1;
        }
        else {
            return -1;
        }
    });
    const data = JSON.stringify(existingData);
    if (data) {
        localStorage.setItem("Profile", data);
    }
}
function jsonToArray(json) {
    var data = [];
    for (var i in json) {
        data.push(json[i]);
    }
    return data;
}
function dataPushToArray(jsonData, profileData) {
    var dataNotExist = true;
    jsonData.forEach((data) => {
        if (parseInt(data.levelNumber) == parseInt(profileData.levelNumber)) {
            dataNotExist = false;
            data.levelScore < profileData.levelScore
                ? (data.levelScore = profileData.levelScore)
                : null;
            data.levelStar < profileData.levelStar
                ? (data.levelStar = profileData.levelStar)
                : null;
        }
    });
    dataNotExist ? jsonData.push(profileData) : null;
    return jsonData;
}
function getDatafromStorage() {
    const data = JSON.parse(localStorage.getItem("Profile") || "{}");
    return data;
}


/***/ }),

/***/ "./src/firebase/firebase_config.js":
/*!*****************************************!*\
  !*** ./src/firebase/firebase_config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseConfig": () => (/* binding */ firebaseConfig)
/* harmony export */ });
const firebaseConfig = {
    apiKey: "AIzaSyCl6CcquG4FlwPUtfmTY16-R5czxOnTtPE",
    authDomain: "feedthemonsterjs.firebaseapp.com",
    projectId: "feedthemonsterjs",
    storageBucket: "feedthemonsterjs.appspot.com",
    messagingSenderId: "69001268201",
    appId: "1:69001268201:web:2bfe4d5395d1602662d978",
    measurementId: "G-N6VQE5GWQH"
};


/***/ }),

/***/ "./src/scenes/game-end-scene.js":
/*!**************************************!*\
  !*** ./src/scenes/game-end-scene.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameEndScene": () => (/* binding */ GameEndScene)
/* harmony export */ });
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");


var images = {
    bgImg: "./assets/images/bg_v01.jpg",
    hillImg: "./assets/images/hill_v01.png",
    timer_empty: "./assets/images/timer_empty.png",
    pillerImg: "./assets/images/Totem_v02_v01.png",
    grassImg: "./assets/images/FG_a_v01.png",
    fenchImg: "./assets/images/fence_v01.png",
    bigMonsterImg: "./assets/images/ftm_bonus_level_monsters.png"
};
var self;
class GameEndScene {
    constructor(game) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        self = this;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas");
        this.createCanvas();
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_1__.GameEndLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = '3';
        document.getElementById("discription-text").style.display = "block";
        this.createBackgroud();
    }
    deleteCanvas() {
        document.getElementById("discription-text").style.display = "none";
        this.canvasStack.deleteLayer(this.id);
        //delete this;
    }
    draw() {
    }
    createBackgroud() {
        var self = this;
        var context = this.context;
        var width = this.width;
        var height = this.height;
        (0,_common_common_js__WEBPACK_IMPORTED_MODULE_1__.loadImages)(images, function (image) {
            context.drawImage(image.bgImg, 0, 0, width, height);
            context.drawImage(image.pillerImg, width * 0.6, height / 6, width, height / 2);
            context.drawImage(image.fenchImg, -width * 0.4, height / 3, width, height / 3);
            context.drawImage(image.hillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
            context.drawImage(image.grassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
            context.drawImage(image.bigMonsterImg, width * 0.25, height / 2 - height * 0.25, width / 1.7, height / 2.5);
        });
    }
}


/***/ }),

/***/ "./src/scenes/game.js":
/*!****************************!*\
  !*** ./src/scenes/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _level_start_scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-start-scene.js */ "./src/scenes/level-start-scene.js");

var animationFrame;
var self;
class Game {
    constructor(width, height, puzzleData, gameSceneCallBack) {
        this.width = width;
        this.height = height;
        this.scene = new _level_start_scene_js__WEBPACK_IMPORTED_MODULE_0__.LevelStartScene({
            game: this,
            levelData: puzzleData,
            levelStartCallBack: this.levelStartCallBack,
        });
        this.gameSceneCallBack = gameSceneCallBack;
        this.render();
        self = this;
        this.animation();
    }
    levelStartCallBack(button_name) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
        switch (button_name) {
            case "close_button": {
                self.gameSceneCallBack(button_name);
                break;
            }
            case "next_button": {
                self.gameSceneCallBack(button_name);
                break;
            }
            case "retry_button": {
                self.gameSceneCallBack(button_name);
                break;
            }
        }
    }
    update() {
        self.scene ? (self.scene.stones ? self.scene.stones.update() : null) : null;
        self.scene ? self.scene.update() : null;
    }
    render() {
        cancelAnimationFrame(animationFrame);
        this.scene.createBackgroud();
    }
    animation() {
        self.update();
        animationFrame = requestAnimationFrame(self.animation);
    }
}


/***/ }),

/***/ "./src/scenes/level-end-scene.js":
/*!***************************************!*\
  !*** ./src/scenes/level-end-scene.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelEndScene": () => (/* binding */ LevelEndScene)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _components_buttons_close_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/buttons/close_button.js */ "./src/components/buttons/close_button.js");
/* harmony import */ var _components_buttons_next_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/next_button.js */ "./src/components/buttons/next_button.js");
/* harmony import */ var _components_buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttons/retry_button.js */ "./src/components/buttons/retry_button.js");
/* harmony import */ var _data_profile_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/profile-data.js */ "./src/data/profile-data.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");






var audioUrl = {
    levelWin: "./assets/audios/LevelWinFanfare.mp3",
    levelLose: "./assets/audios/LevelLoseFanfare.mp3",
    intro: "./assets/audios/intro.wav",
};
class LevelEndScene {
    constructor(canvas, score, monster, levelEndCallBack, levelData, isGamePause) {
        this.canvas = canvas;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__.CanvasStack("canvas");
        this.monster = monster;
        this.levelData = levelData;
        this.isGamePause = isGamePause;
        this.starCount =
            score == 200
                ? 1
                : score == 300
                    ? 2
                    : score == 400
                        ? 2
                        : score == 500
                            ? 3
                            : 0;
        console.log(levelData.levelMeta.levelNumber);
        console.log(score);
        this.createCanvas();
        this.levelEndCallBack = levelEndCallBack;
        (0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_4__.setDataToStorage)(new _data_profile_data_js__WEBPACK_IMPORTED_MODULE_4__.ProfileData(levelData.levelMeta.levelType, levelData.levelMeta.levelNumber, score, this.starCount));
    }
    createCanvas() {
        if (this.starCount <= 1) {
            this.canvas.scene.audio.changeSourse(audioUrl.levelLose);
            this.monster.changeImage("./assets/images/sad14.png");
        }
        else {
            this.canvas.scene.audio.changeSourse(audioUrl.levelWin);
            if (!this.isGamePause) {
                this.canvas.scene.audio.changeSourse(audioUrl.intro);
            }
            this.monster.changeImage("./assets/images/happy14.png");
        }
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState === "visible") {
                self.canvas.scene.audio.playSound("./assets/audios/intro.wav");
            }
            else {
                self.canvas.scene.audio.pauseSound();
            }
        }, false);
        this.monster.changeZindex(9);
        var self = this;
        this.id = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndLayer);
        this.context = document.getElementById(this.id).getContext("2d");
        document.getElementById(this.id).style.zIndex = '8';
        this.bottonLayer = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndButtonsLayer);
        this.bottonContext = document
            .getElementById(this.bottonLayer)
            .getContext("2d");
        document.getElementById(this.bottonLayer).style.zIndex = '9';
        document.getElementById(this.id).style.backgroundColor = "#00407B";
        document.getElementById(this.id).style.backgroundImage =
            "url('./assets/images/WIN_screen_bg.png')";
        document.getElementById(this.id).style.backgroundSize = "contain";
        document.getElementById(this.id).style.backgroundPosition = "center";
        document.getElementById(this.id).style.backgroundAttachment = "fixed";
        document.getElementById(this.id).style.backgroundRepeat = "no-repeat";
        var star1 = new Image();
        star1.src = "./assets/images/pinStar1.png";
        var star2 = new Image();
        star2.src = "./assets/images/pinStar2.png";
        var star3 = new Image();
        star3.src = "./assets/images/pinStar3.png";
        self.drawStarts(self, star1, star2, star3);
        self.nextButton =
            self.starCount >= 2
                ? new _components_buttons_next_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](self.context, self.canvas, self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7)
                : null;
        self.retryButton = new _components_buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.context, self.canvas, self.starCount >= 2
            ? self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2
            : self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7);
        self.closeButton = new _components_buttons_close_button_js__WEBPACK_IMPORTED_MODULE_1__["default"](self.context, self.canvas, self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7);
        document
            .getElementById(this.bottonLayer)
            .addEventListener("click", function (event) {
            var rect = document
                .getElementById(self.bottonLayer)
                .getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (self.nextButton && self.nextButton.onClick(x, y)) {
                self.canvas.scene.audio.pauseSound();
                self.levelEndCallBack("next_button");
            }
            if (self.retryButton.onClick(x, y)) {
                self.canvas.scene.audio.pauseSound();
                self.levelEndCallBack("retry_button");
            }
            if (self.closeButton.onClick(x, y)) {
                self.canvas.scene.audio.pauseSound();
                self.levelEndCallBack("close_button");
            }
        });
    }
    drawStarts(self, star1, star2, star3) {
        star1.onload = function (e) {
            if (self.starCount >= 2) {
                setTimeout(() => {
                    self.context.drawImage(star1, self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.2, self.canvas.width * 0.19, self.canvas.width * 0.19);
                }, 500);
            }
        };
        star2.onload = function (e) {
            if (self.starCount <= 3 && self.starCount > 0) {
                setTimeout(() => {
                    self.context.drawImage(star2, self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.15, self.canvas.width * 0.19, self.canvas.width * 0.19);
                }, 1000);
            }
        };
        star3.onload = function (e) {
            if (self.starCount >= 3) {
                setTimeout(() => {
                    self.context.drawImage(star3, self.canvas.width * 0.82 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.2, self.canvas.width * 0.19, self.canvas.width * 0.19);
                }, 1500);
            }
        };
    }
    deleteCanvas(self) {
        self.canvasStack.deleteLayer(this.id);
        self.canvasStack.deleteLayer(this.bottonLayer);
    }
}


/***/ }),

/***/ "./src/scenes/level-selection-scene.js":
/*!*********************************************!*\
  !*** ./src/scenes/level-selection-scene.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelSelectionScreen": () => (/* binding */ LevelSelectionScreen)
/* harmony export */ });
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _common_level_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/level-config.js */ "./src/common/level-config.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/scenes/game.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _common_sound_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sound.js */ "./src/common/sound.js");
/* harmony import */ var _data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/profile-data.js */ "./src/data/profile-data.js");






var mapIcon = new Image();
mapIcon.src = "./assets/images/mapIcon.png";
var map = new Image();
map.src = "./assets/images/map.jpg";
var star = new Image();
star.src = "./assets/images/star.png";
var nextbtn = new Image();
nextbtn.src = "./assets/images/next_btn.png";
var backbtn = new Image();
backbtn.src = "./assets/images/back_btn.png";
var levelNumber;
var self;
var previousPlayedLevel = parseInt(localStorage.getItem("storePreviousPlayedLevel")) | 0;
var level;
if (previousPlayedLevel != null) {
    level = 10 * Math.floor(previousPlayedLevel / 10);
}
console.log(previousPlayedLevel);
class LevelSelectionScreen {
    constructor(canvas, data) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas");
        self = this;
        this.data = data;
        this.levels = [];
        this.sound = new _common_sound_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.createCanvas();
        this.drawStars();
    }
    gameSceneCallBack(button_name) {
        switch (button_name) {
            case "next_button": {
                self.startGame((levelNumber += 1));
                break;
            }
            case "retry_button": {
                self.startGame(levelNumber);
                break;
            }
            case "close_button": {
                self.drawStars();
            }
        }
    }
    createCanvas() {
        document.addEventListener("visibilitychange", function () {
            self.sound.activeScreen();
        }, false);
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_3__.LevelSelectionLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(map, 0, 0, this.canvas.width, this.canvas.height);
        this.canavsElement.style.zIndex = 2;
        this.levelButtonpos = [
            [
                [this.canvas.width / 10, this.canvas.height / 10],
                [this.canvas.width / 2.5, this.canvas.height / 10],
                [
                    this.canvas.width / 3 + this.canvas.width / 2.8,
                    this.canvas.height / 10,
                ],
                [this.canvas.width / 10, this.canvas.height / 3],
                [this.canvas.width / 2.5, this.canvas.height / 3],
                [
                    this.canvas.width / 3 + this.canvas.width / 2.8,
                    this.canvas.height / 3,
                ],
                [this.canvas.width / 10, this.canvas.height / 1.8],
                [this.canvas.width / 2.5, this.canvas.height / 1.8],
                [
                    this.canvas.width / 3 + this.canvas.width / 2.8,
                    this.canvas.height / 1.8,
                ],
                [this.canvas.width / 2.5, this.canvas.height / 1.3],
            ],
        ];
        document
            .getElementById(this.id)
            .addEventListener("touchstart", handleTouchStart, false);
        document
            .getElementById(this.id)
            .addEventListener("touchmove", handleTouchMove, false);
        var xDown = null;
        var yDown = null;
        function getTouches(evt) {
            return (evt.touches || // browser API
                evt.originalEvent.touches); // jQuery
        }
        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }
        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                /*most significant*/
                if (xDiff > 0) {
                    if (level != 140) {
                        self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                        self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                        level = level + 10;
                        self.draw(level);
                        self.downButton(level);
                        self.drawStars();
                        console.log(level);
                    }
                    /* right swipe */
                }
                else {
                    if (level != 0) {
                        level = level - 10;
                    }
                    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                    self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                    self.draw(level);
                    self.downButton(level);
                    self.drawStars();
                    /* left swipe */
                }
            }
            else {
                if (yDiff > 0) {
                    /* down swipe */
                }
                else {
                    /* up swipe */
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
        document.getElementById(this.id).addEventListener("mousedown", function (event) {
            event.preventDefault();
            var rect = document.getElementById(this.id).getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (x >= self.canvas.width * 0.7 &&
                x < self.canvas.width * 0.7 + self.canvas.height / 10 &&
                y > self.canvas.height / 1.3 &&
                y < self.canvas.height / 1.3 + self.canvas.height / 10) {
                if (level != 140) {
                    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                    self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                    level = level + 10;
                    self.draw(level);
                    self.downButton(level);
                    self.drawStars();
                    console.log(level);
                }
            }
            if (x >= self.canvas.width / 10 &&
                x < self.canvas.width / 10 + self.canvas.height / 10 &&
                y > self.canvas.height / 1.3 &&
                y < self.canvas.height / 1.3 + self.canvas.height / 10) {
                if (level != 0) {
                    level = level - 10;
                }
                self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                self.draw(level);
                self.downButton(level);
                self.drawStars();
            }
            for (let s of self.levels) {
                if (Math.sqrt((x - s.x - self.canvas.height / 20) *
                    (x - s.x - self.canvas.height / 20) +
                    (y - s.y - self.canvas.height / 20) *
                        (y - s.y - self.canvas.height / 20)) < 45) {
                    self.sound.changeSourse("./assets/audios/ButtonClick.wav");
                    self.sound.pauseSound();
                    levelNumber = s.index + level - 1;
                    self.startGame(levelNumber);
                }
            }
        }, false);
        this.createLevelButtons(this.levelButtonpos);
    }
    createLevelButtons(levelButtonpos) {
        var poss = levelButtonpos[0];
        var i = 0;
        for (let s = 0; s < 10; s++) {
            var ns = new _common_level_config_js__WEBPACK_IMPORTED_MODULE_1__.LevelConfig(poss[i][0], poss[i][1], i + 1);
            self.levels.push(ns);
            i += 1;
        }
        this.draw(level);
        this.downButton(level);
    }
    draw(level) {
        for (let s of self.levels) {
            this.drawlevel(s, self.canvas);
        }
    }
    downButton(level) {
        var imageSize = self.canvas.height / 10;
        if (level != 140) {
            this.context.drawImage(nextbtn, this.canvas.width * 0.7, this.canvas.height / 1.3, imageSize, imageSize);
        }
        if (level != 0) {
            this.context.drawImage(backbtn, this.canvas.width / 10, this.canvas.height / 1.3, imageSize, imageSize);
        }
        // if (level != 0) {
        //   this.context.clearRect(300, 500, imageSize, imageSize);
        //   this.context.save();
        //   this.context.translate(imageSize, imageSize);
        //   this.context.rotate(90);
        //   this.context.drawImage(next, 300, 500, imageSize, imageSize);
        // }
    }
    drawlevel(s, canvas) {
        var imageSize = canvas.height / 5;
        var textFontSize = imageSize / 6;
        this.context.drawImage(mapIcon, s.x, s.y, imageSize, imageSize);
        this.context.fillStyle = "white";
        this.context.font = textFontSize + "px Arial";
        this.context.textAlign = "center";
        this.context.fillText(s.index + level, s.x + imageSize / 3.5, s.y + imageSize / 3);
        this.context.font = textFontSize - imageSize / 30 + "px Arial";
        this.context.fillText(this.data.levels[s.index + level - 1].levelMeta.levelType, s.x + imageSize / 3.5, s.y + imageSize / 1.3);
    }
    startGame(level_number) {
        new _game_js__WEBPACK_IMPORTED_MODULE_2__.Game(this.canvas.width, this.canvas.height, self.data.levels[level_number], self.gameSceneCallBack);
    }
    drawStars() {
        this.sound.changeSourse("./assets/audios/intro.wav");
        let gameLevelData = (0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__.getDatafromStorage)();
        let canvas = document.getElementById("canvas");
        if (gameLevelData != null) {
            for (let s of self.levels) {
                for (let i = 0; i < gameLevelData.length; i++) {
                    if (s.index - 1 + level == parseInt(gameLevelData[i].levelNumber)) {
                        this.drawStar(s, canvas, gameLevelData[i].levelStar);
                        break;
                    }
                }
            }
        }
    }
    drawStar(s, canvas, starCount) {
        var canavsElement = (document.getElementById("levelSelectionCanvas"));
        var context = canavsElement.getContext("2d");
        var imageSize = canvas.height / 5;
        if (starCount >= 1) {
            context.drawImage(star, s.x, s.y - imageSize * 0.01, imageSize / 5, imageSize / 5);
        }
        if (starCount > 1) {
            context.drawImage(star, s.x + imageSize / 2.5, s.y - imageSize * 0.01, imageSize / 5, imageSize / 5);
        }
        if (starCount == 3) {
            context.drawImage(star, s.x + imageSize / 5, s.y - imageSize * 0.1, imageSize / 5, imageSize / 5);
        }
    }
}


/***/ }),

/***/ "./src/scenes/level-start-scene.js":
/*!*****************************************!*\
  !*** ./src/scenes/level-start-scene.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelStartScene": () => (/* binding */ LevelStartScene)
/* harmony export */ });
/* harmony import */ var _components_monster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/monster.js */ "./src/components/monster.js");
/* harmony import */ var _components_timer_ticking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/timer-ticking.js */ "./src/components/timer-ticking.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _components_stones_layer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/stones-layer.js */ "./src/components/stones-layer.js");
/* harmony import */ var _components_prompt_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/prompt-text.js */ "./src/components/prompt-text.js");
/* harmony import */ var _components_buttons_pause_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/buttons/pause_button.js */ "./src/components/buttons/pause_button.js");
/* harmony import */ var _components_level_indicators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/level-indicators.js */ "./src/components/level-indicators.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _game_end_scene_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-end-scene.js */ "./src/scenes/game-end-scene.js");
/* harmony import */ var _common_sound_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/sound.js */ "./src/common/sound.js");
/* harmony import */ var _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./level-end-scene.js */ "./src/scenes/level-end-scene.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












var images = {
    bgImg: "./assets/images/bg_v01.jpg",
    hillImg: "./assets/images/hill_v01.png",
    timer_empty: "./assets/images/timer_empty.png",
    pillerImg: "./assets/images/Totem_v02_v01.png",
    grassImg: "./assets/images/FG_a_v01.png",
    rotating_clock: "./assets/images/timer.png",
    fenchImg: "./assets/images/fence_v01.png",
    promptImg: "./assets/images/promptTextBg.png",
    fantastic: "./assets/images/fantastic_01.png",
    great: "./assets/images/great_01.png",
};
var audioUrl = {
    phraseAudios: [
        "./assets/audios/fantastic.WAV",
        // "./assets/audios/good job.WAV",
        "./assets/audios/great.wav",
    ],
    monsterSplit: "./assets/audios/Monster Spits wrong stones-01.mp3",
    monsterHappy: "./assets/audios/Cheering-02.mp3",
    monsterSad: "./assets/audios/Disapointed-05.mp3",
    buttonClick: "./assets/audios/ButtonClick.wav",
};
var self;
var word_dropped_stones = 0;
var current_puzzle_index = 0;
var score = 0;
var word_dropped_stones = 0;
var isGamePause = false;
var noMoreTarget = false;
var isLevelEnded = false;
class LevelStartScene {
    constructor({ game, levelData, levelStartCallBack, }) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        self = this;
        this.monster = new _components_monster_js__WEBPACK_IMPORTED_MODULE_0__.Monster(game);
        this.audio = new _common_sound_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__.CanvasStack("canvas");
        this.levelData = levelData;
        this.levelStartCallBack = levelStartCallBack;
        this.timerTicking = new _components_timer_ticking_js__WEBPACK_IMPORTED_MODULE_1__.TimerTicking(game, this);
        this.promptText = new _components_prompt_text_js__WEBPACK_IMPORTED_MODULE_4__.PromptText(game, this, levelData.puzzles[current_puzzle_index], levelData);
        this.createCanvas();
        this.stones = new _components_stones_layer_js__WEBPACK_IMPORTED_MODULE_3__["default"](game, levelData.puzzles[current_puzzle_index], this.pauseButton, this.redrawOfStones, this);
        this.puzzleData = levelData.puzzles;
    }
    levelEndCallBack(button_name) {
        if (!isGamePause) {
            isGamePause = true;
            if (isLevelEnded) {
                isLevelEnded = false;
                isGamePause = false;
            }
        }
        else {
            if (current_puzzle_index == self.puzzleData.length) {
                if (noMoreTarget) {
                    self.levelEnded();
                    current_puzzle_index = 0;
                }
            }
            else {
                isGamePause = false;
                if (noMoreTarget && button_name != "close_button") {
                    setTimeout(() => {
                        self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
                        self.promptText.setCurrrentPuzzleData(self.puzzleData[current_puzzle_index]);
                        self.timerTicking.draw();
                        self.promptText.draw();
                    }, 1000);
                }
            }
        }
        self.audio.changeSourse(audioUrl.buttonClick);
        switch (button_name) {
            case "next_button": {
                self.exitAllScreens();
                self.levelStartCallBack(button_name);
                break;
            }
            case "retry_button": {
                self.exitAllScreens();
                self.levelStartCallBack(button_name);
                break;
            }
            case "close_button": {
                isGamePause = false;
                self.exitAllScreens();
                self.levelStartCallBack(button_name);
                break;
            }
        }
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    redrawOfStones(status, emptyTarget) {
        noMoreTarget = emptyTarget;
        var fntsticOrGrtIndex = self.getRandomInt(0, 1);
        if (status) {
            self.monster.changeToEatAnimation();
            self.audio.changeSourse(audioUrl.monsterHappy);
            if (emptyTarget) {
                setTimeout(() => {
                    self.audio.changeSourse(audioUrl.phraseAudios[fntsticOrGrtIndex]);
                    self.promptText.showFantasticOrGreat(fntsticOrGrtIndex);
                }, 1000);
                self.promptText.draw((word_dropped_stones += 1));
                self.timerTicking.stopTimer();
                self.promptText.draw((word_dropped_stones += 1));
                score += 100;
                word_dropped_stones = 0;
                current_puzzle_index += 1;
            }
            else {
                self.promptText.draw((word_dropped_stones += 1));
            }
        }
        else {
            self.timerTicking.stopTimer();
            self.monster.changeToSpitAnimation();
            self.audio.changeSourse(audioUrl.monsterSad);
            setTimeout(() => {
                self.audio.changeSourse(audioUrl.monsterSplit);
            }, 1000);
            current_puzzle_index += 1;
        }
        if (current_puzzle_index == self.puzzleData.length) {
            self.levelIndicators.setIndicators(current_puzzle_index);
            for (let i = 0; i <= 3; i++) {
                setTimeout(() => {
                    if (i == 3 && !isGamePause) {
                        self.levelEnded();
                    }
                }, i * 1166.66);
            }
        }
        else {
            if (emptyTarget) {
                self.levelIndicators.setIndicators(current_puzzle_index);
                for (let i = 0; i <= 3; i++) {
                    setTimeout(() => {
                        if (i == 3 && !isGamePause) {
                            self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
                            self.promptText.setCurrrentPuzzleData(self.puzzleData[current_puzzle_index]);
                            self.timerTicking.draw();
                            self.promptText.draw();
                        }
                    }, i * 1166.66);
                }
            }
        }
    }
    levelEnded() {
        self.levelStartCallBack();
        if (self.levelData.levelNumber == 9) {
            self.exitAllScreens();
            new _game_end_scene_js__WEBPACK_IMPORTED_MODULE_8__.GameEndScene(self.game);
        }
        else {
            new _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__.LevelEndScene(self.game, score, self.monster, self.levelEndCallBack, self.levelData, isGamePause);
        }
        isLevelEnded = true;
    }
    createCanvas() {
        window.addEventListener("resize", () => __awaiter(this, void 0, void 0, function* () {
            self.deleteObjects();
        }));
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelStartLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 3;
        this.pauseButton = new _components_buttons_pause_button_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context, this.canavsElement);
        this.levelIndicators = new _components_level_indicators_js__WEBPACK_IMPORTED_MODULE_6__.LevelIndicators(this.context, this.canavsElement, 0);
        var self = this;
        const selfElement = document.getElementById(self.id);
        this.canavsElement.addEventListener("click", function (event) {
            var rect = selfElement.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
        });
        var previousPlayedLevel = self.levelData.levelMeta.levelNumber;
        localStorage.setItem("storePreviousPlayedLevel", previousPlayedLevel);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    exitAllScreens() {
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelEndLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelEndButtonsLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelStartLayer);
        self.monster.deleteCanvas();
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.StoneLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.TimetickerLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.PromptTextLayer);
        self.monster.changeImage("./assets/images/idle4.png");
        self.deleteObjects();
        word_dropped_stones = 0;
    }
    deleteObjects() {
        delete self.monster;
        delete self.audio;
        delete self.levelIndicators;
        delete self.pauseButton;
        delete self.stones;
        delete self.timerTicking;
        delete self.canvasStack;
        delete self.monster;
        delete self.promptText;
        current_puzzle_index = 0;
        score = 0;
    }
    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.bgImg, 0, 0, this.width, this.height);
        this.context.drawImage(this.pillerImg, this.width * 0.6, this.height / 6, this.width, this.height / 2);
        this.context.drawImage(this.fenchImg, -this.width * 0.4, this.height / 3, this.width, this.height / 3);
        this.context.drawImage(this.hillImg, -this.width * 0.25, this.height / 2, this.width * 1.5, this.height / 2);
        this.context.drawImage(this.grassImg, -this.width * 0.25, this.height / 2 + (this.height / 2) * 0.1, this.width * 1.5, this.height / 2);
        this.context.drawImage(this.timer_empty, 0, this.height * 0.1, this.width, this.height * 0.05);
        this.context.drawImage(this.rotating_clock, 5, this.height * 0.09, this.width * 0.12, this.height * 0.06);
        this.timerTicking.createBackgroud();
        this.stones.draw();
        this.pauseButton.draw();
        this.levelIndicators.draw();
        this.promptText.createBackground();
    }
    update() {
        self.timerTicking ? self.timerTicking.update() : null;
    }
    changePuzzle() {
        if (self.timerTicking.isTimerEnded) {
            self.stones.isTimerEnded();
            word_dropped_stones = 0;
            current_puzzle_index += 1;
            self.stones.canvas.scene.levelIndicators.setIndicators(current_puzzle_index);
            if (current_puzzle_index == self.puzzleData.length) {
                isLevelEnded = true;
                self.levelStartCallBack();
                delete self.timerTicking;
                new _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__.LevelEndScene(self.game, score, self.monster, self.levelEndCallBack, self.levelData, isGamePause);
            }
            else {
                // self.promptText.setCurrrentPromptText(
                //   self.puzzleData[current_puzzle_index].prompt.promptText
                // );
                self.promptText.setCurrrentPuzzleData(self.puzzleData[current_puzzle_index]);
                self.timerTicking.draw();
                self.promptText.draw();
                self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
            }
            self.timerTicking ? (self.timerTicking.isTimerEnded = false) : null;
        }
    }
    createBackgroud() {
        var self = this;
        (0,_common_common_js__WEBPACK_IMPORTED_MODULE_7__.loadingScreen)(true);
        var context = this.context;
        var width = this.width;
        var height = this.height;
        (0,_common_common_js__WEBPACK_IMPORTED_MODULE_7__.loadImages)(images, function (image) {
            context.drawImage(image.bgImg, 0, 0, width, height);
            context.drawImage(image.pillerImg, width * 0.6, height / 6, width, height / 2);
            context.drawImage(image.fenchImg, -width * 0.4, height / 3, width, height / 3);
            context.drawImage(image.hillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
            context.drawImage(image.grassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
            context.drawImage(image.timer_empty, 0, height * 0.1, width, height * 0.05);
            context.drawImage(image.rotating_clock, 5, height * 0.09, width * 0.12, height * 0.06);
            self.timerTicking.createBackgroud();
            self.stones.draw();
            self.pauseButton.draw();
            self.levelIndicators.draw();
            self.promptText.createBackground();
            (0,_common_common_js__WEBPACK_IMPORTED_MODULE_7__.loadingScreen)(false);
        });
    }
}


/***/ }),

/***/ "./src/scenes/start-scene.js":
/*!***********************************!*\
  !*** ./src/scenes/start-scene.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScene": () => (/* binding */ StartScene)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _common_sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/sound.js */ "./src/common/sound.js");
/* harmony import */ var _components_buttons_install_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/install_button.js */ "./src/components/buttons/install_button.js");
/* harmony import */ var _components_buttons_play_butoon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttons/play_butoon.js */ "./src/components/buttons/play_butoon.js");
/* harmony import */ var _components_monster_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/monster.js */ "./src/components/monster.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _level_selection_scene_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level-selection-scene.js */ "./src/scenes/level-selection-scene.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







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
const aboutCompanyElement = (document.getElementById("about-company"));
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    pwa_install_status = e;
    localStorage.setItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PWAInstallStatus, "false");
});
class StartScene {
    constructor(canvas, data, firebase_analytics) {
        self = this;
        this.canvas = canvas;
        this.data = data;
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__.CanvasStack("canvas");
        this.monster = new _components_monster_js__WEBPACK_IMPORTED_MODULE_4__.Monster(this.canvas);
        this.pwa_status = localStorage.getItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PWAInstallStatus);
        this.createCanvas();
        this.createPlayButton();
        this.firebase_analytics = firebase_analytics;
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.StartSceneLayer);
        aboutCompanyElement.style.display = "block";
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 2;
        this.canavsElement.style.bottom = 0;
        var id = this.id;
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(bgImg, 0, 0, this.width, this.height);
        this.context.drawImage(pillerImg, this.width * 0.6, this.height / 6, this.width, this.height / 2);
        this.context.drawImage(fenchImg, -this.width * 0.4, this.height / 3, this.width, this.height / 3);
        this.context.drawImage(hillImg, -this.width * 0.25, this.height / 2, this.width * 1.5, this.height / 2);
        this.context.drawImage(grassImg, -this.width * 0.25, this.height / 2 + (this.height / 2) * 0.1, this.width * 1.5, this.height / 2);
        this.context.drawImage(title, this.width * 0, this.height / 50, this.width, this.height / 6);
    }
    createPlayButton() {
        const playButtonLayerElement = (document.getElementById(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer));
        var self = this;
        var data = this.data;
        var playButtonId = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer);
        this.canavsElement = document.getElementById(playButtonId);
        this.buttonContext = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 7;
        if (this.pwa_status == "true") {
            self.playButton = new _components_buttons_play_butoon_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.buttonContext, self.canvas, self.canvas.width * 0.35, self.canvas.height / 7);
        }
        else {
            self.playButton = new _components_buttons_install_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](self.buttonContext, self.canvas, self.canvas.width * 0.35, self.canvas.height / 5);
        }
        document.getElementById(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer).addEventListener("click", function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                const selfElement = document.getElementById(self.id);
                event.preventDefault();
                var rect = selfElement.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                if (self.playButton.onClick(x, y)) {
                    self.firebase_analytics
                        ? self.firebase_analytics.logEvent(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.FirebaseUserClicked, "click")
                        : null;
                    if (self.pwa_status == "false" || !self.pwa_status) {
                        pwa_install_status.prompt();
                        const { outcome } = yield pwa_install_status.userChoice;
                        if (outcome === "accepted") {
                            pwa_install_status = null;
                            localStorage.setItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PWAInstallStatus, "true");
                            fbq("trackCustom", _common_common_js__WEBPACK_IMPORTED_MODULE_0__.FirebaseUserInstall, {
                                event: "install_count",
                            });
                            self.firebase_analytics
                                ? self.firebase_analytics.logEvent(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.FirebaseUserInstall, "Install")
                                : null;
                            window.location.reload();
                        }
                        else {
                            fbq("trackCustom", _common_common_js__WEBPACK_IMPORTED_MODULE_0__.UserCancelled, {
                                event: "cancel_count",
                            });
                            self.firebase_analytics
                                ? self.firebase_analytics.logEvent(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UserCancelled, "Cancelled")
                                : null;
                        }
                    }
                    else {
                        if (!window.matchMedia("(display-mode: standalone)").matches &&
                            self.pwa_status == "true") {
                            alert("PWA is installed on your device \nPlease play from there");
                        }
                        else {
                            aboutCompanyElement.style.display = "none";
                            new _common_sound_js__WEBPACK_IMPORTED_MODULE_1__["default"]().changeSourse("./assets/audios/ButtonClick.wav");
                            self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                            new _level_selection_scene_js__WEBPACK_IMPORTED_MODULE_6__.LevelSelectionScreen(self.canvas, data);
                            self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer);
                            self.monster.deleteCanvas();
                            delete self.monster;
                            self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StartSceneLayer);
                        }
                    }
                }
            });
        }, false);
    }
}


/***/ }),

/***/ "./src/utility/canvas-stack.js":
/*!*************************************!*\
  !*** ./src/utility/canvas-stack.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasStack": () => (/* binding */ CanvasStack)
/* harmony export */ });
var CanvasStack;
(function () {
    "use strict";
    class Layer {
        constructor({ canvasID, canvasElement, }) {
            this.id = canvasID;
            this.cElem = canvasElement;
            this.dragObjects = [];
        }
    }
    CanvasStack = class {
        constructor(cvsID, stackLimit) {
            const savThis = this;
            this.cId = cvsID;
            this.stackLimit = stackLimit || 12;
            this.bkgCanvas = document.getElementById(cvsID);
            this.rawWidth = this.bkgCanvas.offsetWidth;
            this.rawHeight = this.bkgCanvas.offsetHeight;
            this.bkgCanvas.resizeFns = [];
            if (!this.bkgCanvas.hasOwnProperty("layers")) {
                this.bkgCanvas.layers = [];
                let bkgL = new Layer({
                    canvasID: this.cId,
                    canvasElement: this.bkgCanvas,
                }); // bkgCanvas is always layer[0]
                this.bkgCanvas.layers[0] = bkgL;
            }
            if (!this.bkgCanvas.hasOwnProperty("unique")) {
                this.bkgCanvas.unique = 0;
            }
        }
        createLayer(height, width, layerId) {
            if (!this.isLayerExist(layerId)) {
                const w = width + "px", h = height + "px", nLyrs = this.bkgCanvas.layers.length; // bkg is layer 0 so at least 1
                if (!(this.bkgCanvas && this.bkgCanvas.layers)) {
                    return;
                }
                if (this.bkgCanvas.layers.length >= this.stackLimit) {
                    console.error("CanvasStack: too many layers");
                    return;
                }
                this.bkgCanvas.unique += 1; // a private static variable
                // const uniqueTag = this.bkgCanvas.unique.toString();
                // const ovlId = this.cId + "_ovl_" + uniqueTag;
                const ovlId = layerId;
                const ovlHTML = "<canvas id='" +
                    ovlId +
                    "' style='position:absolute' width='" +
                    w +
                    "' height='" +
                    h +
                    "'></canvas>";
                const topCvs = this.bkgCanvas.layers[nLyrs - 1].cElem;
                topCvs.insertAdjacentHTML("afterend", ovlHTML);
                const newCvs = document.getElementById(ovlId);
                newCvs.style.backgroundColor;
                newCvs.style.left = "50%";
                newCvs.style.transform = "translate(-50%, 0%)";
                newCvs.style.height = h;
                newCvs.style.width = w;
                let newL = new Layer({ canvasID: ovlId, canvasElement: newCvs });
                // save the ID in an array to facilitate removal
                this.bkgCanvas.layers.push(newL);
                return ovlId; // return the new canvas id
            }
        }
        deleteLayer(ovlyId) {
            // check background canvas is still there
            if (!(this.bkgCanvas && this.bkgCanvas.layers)) {
                return;
            }
            for (let i = 1; i < this.bkgCanvas.layers.length; i++) {
                if (this.bkgCanvas.layers[i].id === ovlyId) {
                    let ovlNode = this.bkgCanvas.layers[i].cElem;
                    if (ovlNode) {
                        ovlNode.parentNode.removeChild(ovlNode);
                    }
                    // now delete layers array element
                    this.bkgCanvas.layers.splice(i, 1); // delete the Layer object
                }
            }
        }
        deleteAllLayers() {
            if (!(this.bkgCanvas && this.bkgCanvas.layers)) {
                return;
            }
            for (let i = this.bkgCanvas.layers.length - 1; i > 0; i--) {
                let ovlNode = this.bkgCanvas.layers[i].cElem;
                if (ovlNode) {
                    let orphan = ovlNode.parentNode.removeChild(ovlNode);
                    orphan = null;
                }
                // now delete layers array element
                this.bkgCanvas.layers.splice(i, 1);
            }
            // clear any resize callbacks, the layers are gone
            this.bkgCanvas.resizeFns.length = 0; // remove any added handlers, leave the basic
        }
        isLayerExist(layerID) {
            for (let i = 1; i < this.bkgCanvas.layers.length; i++) {
                if (this.bkgCanvas.layers[i].id === layerID) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
})();


/***/ }),

/***/ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Workbox": () => (/* binding */ c),
/* harmony export */   "messageSW": () => (/* binding */ n)
/* harmony export */ });
try{self["workbox:window:4.3.1"]&&_()}catch(n){}var n=function(n,t){return new Promise(function(i){var e=new MessageChannel;e.port1.onmessage=function(n){return i(n.data)},n.postMessage(t,[e.port2])})};function t(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function i(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}try{self["workbox:core:4.3.1"]&&_()}catch(n){}var e=function(){var n=this;this.promise=new Promise(function(t,i){n.resolve=t,n.reject=i})},r=function(n,t){return new URL(n,location).href===new URL(t,location).href},o=function(n,t){Object.assign(this,t,{type:n})};function u(n){return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];try{return Promise.resolve(n.apply(this,t))}catch(n){return Promise.reject(n)}}}function a(n,t,i){return i?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function s(){}var c=function(c){var f,h;function v(n,t){var r;return void 0===t&&(t={}),(r=c.call(this)||this).t=n,r.i=t,r.o=0,r.u=new e,r.s=new e,r.h=new e,r.v=r.v.bind(i(i(r))),r.l=r.l.bind(i(i(r))),r.g=r.g.bind(i(i(r))),r.m=r.m.bind(i(i(r))),r}h=c,(f=v).prototype=Object.create(h.prototype),f.prototype.constructor=f,f.__proto__=h;var l,w,g,d=v.prototype;return d.register=u(function(n){var t,i,e=this,u=(void 0===n?{}:n).immediate,c=void 0!==u&&u;return t=function(){return e.p=Boolean(navigator.serviceWorker.controller),e.P=e.R(),a(e.k(),function(n){e.B=n,e.P&&(e.O=e.P,e.s.resolve(e.P),e.h.resolve(e.P),e.j(e.P),e.P.addEventListener("statechange",e.l,{once:!0}));var t=e.B.waiting;return t&&r(t.scriptURL,e.t)&&(e.O=t,Promise.resolve().then(function(){e.dispatchEvent(new o("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})),e.O&&e.u.resolve(e.O),e.B.addEventListener("updatefound",e.g),navigator.serviceWorker.addEventListener("controllerchange",e.m,{once:!0}),"BroadcastChannel"in self&&(e.C=new BroadcastChannel("workbox"),e.C.addEventListener("message",e.v)),navigator.serviceWorker.addEventListener("message",e.v),e.B})},(i=function(){if(!c&&"complete"!==document.readyState)return function(n,t){if(!t)return n&&n.then?n.then(s):Promise.resolve()}(new Promise(function(n){return addEventListener("load",n)}))}())&&i.then?i.then(t):t(i)}),d.getSW=u(function(){return this.O||this.u.promise}),d.messageSW=u(function(t){return a(this.getSW(),function(i){return n(i,t)})}),d.R=function(){var n=navigator.serviceWorker.controller;if(n&&r(n.scriptURL,this.t))return n},d.k=u(function(){var n=this;return function(n,t){try{var i=n()}catch(n){return t(n)}return i&&i.then?i.then(void 0,t):i}(function(){return a(navigator.serviceWorker.register(n.t,n.i),function(t){return n.L=performance.now(),t})},function(n){throw n})}),d.j=function(t){n(t,{type:"WINDOW_READY",meta:"workbox-window"})},d.g=function(){var n=this.B.installing;this.o>0||!r(n.scriptURL,this.t)||performance.now()>this.L+6e4?(this.W=n,this.B.removeEventListener("updatefound",this.g)):(this.O=n,this.u.resolve(n)),++this.o,n.addEventListener("statechange",this.l)},d.l=function(n){var t=this,i=n.target,e=i.state,r=i===this.W,u=r?"external":"",a={sw:i,originalEvent:n};!r&&this.p&&(a.isUpdate=!0),this.dispatchEvent(new o(u+e,a)),"installed"===e?this._=setTimeout(function(){"installed"===e&&t.B.waiting===i&&t.dispatchEvent(new o(u+"waiting",a))},200):"activating"===e&&(clearTimeout(this._),r||this.s.resolve(i))},d.m=function(n){var t=this.O;t===navigator.serviceWorker.controller&&(this.dispatchEvent(new o("controlling",{sw:t,originalEvent:n})),this.h.resolve(t))},d.v=function(n){var t=n.data;this.dispatchEvent(new o("message",{data:t,originalEvent:n}))},l=v,(w=[{key:"active",get:function(){return this.s.promise}},{key:"controlling",get:function(){return this.h.promise}}])&&t(l.prototype,w),g&&t(l,g),v}(function(){function n(){this.D={}}var t=n.prototype;return t.addEventListener=function(n,t){this.T(n).add(t)},t.removeEventListener=function(n,t){this.T(n).delete(t)},t.dispatchEvent=function(n){n.target=this,this.T(n.type).forEach(function(t){return t(n)})},t.T=function(n){return this.D[n]=this.D[n]||new Set},n}());
//# sourceMappingURL=workbox-window.prod.es5.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./feedTheMonster.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_data_api_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/data/api-data.js */ "./src/data/api-data.js");
/* harmony import */ var _src_data_data_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/data/data-modal.js */ "./src/data/data-modal.js");
/* harmony import */ var _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/scenes/start-scene.js */ "./src/scenes/start-scene.js");
/* harmony import */ var _src_utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _src_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/firebase/firebase_config.js */ "./src/firebase/firebase_config.js");
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






window.addEventListener("load", function () {
    return __awaiter(this, void 0, void 0, function* () {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener("message", function (event) {
                if (event.data.msg == 'Update Found') {
                    let text = "Update Found\nPress ok to update.";
                    if (confirm(text) == true) {
                        window.location.reload();
                    }
                    else {
                        text = "You canceled!";
                    }
                }
            });
            let wb = new workbox_window__WEBPACK_IMPORTED_MODULE_5__.Workbox('./sw.js');
            wb.register();
        }
        if (navigator.onLine) {
            this.app = firebase.initializeApp(_src_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_4__.firebaseConfig);
            this.analytics = firebase.analytics(this.app);
        }
        const canvas = document.getElementById("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
        let data = yield (0,_src_data_api_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
        let d = new _src_data_data_modal_js__WEBPACK_IMPORTED_MODULE_1__.DataModal(data.OtherAudios, data.Levels, data.FeedbackTexts, data.RightToLeft, data.FeedbackAudios);
        window.addEventListener("resize", () => __awaiter(this, void 0, void 0, function* () {
            canvas.height = window.innerHeight;
            canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
            delete this.monster;
            new _src_utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_3__.CanvasStack("canvas").deleteAllLayers();
            delete this.startScene;
            this.startScene = new _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__.StartScene(canvas, d, this.analytics);
        }));
        this.startScene = new _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__.StartScene(canvas, d, this.analytics);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZFRoZU1vbnN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ2xEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBVztBQUN2QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVc7QUFDdkI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBLCtCQUErQixpRUFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHlEQUFVO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNi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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHdFQUF3RSxrRUFBbUI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ2lEO0FBQ0k7QUFDSTtBQUNHO0FBQ087QUFDMUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IseUJBQXlCLG1EQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0RUFBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFPO0FBQ2hDLG9CQUFvQiw4REFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBVztBQUMzQjtBQUNBLGtDQUFrQyxrRUFBVTtBQUM1QyxTQUFTO0FBQ1QsOEJBQThCLGtFQUFVO0FBQ3hDLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tbW9uL2xldmVsLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9zb3VuZC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9zdG9uZXMtY29uZmlnLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2NhbmNlbF9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2luc3RhbGxfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL25leHRfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3BhdXNlX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9wbGF5X2J1dG9vbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXRyeV9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2xldmVsLWluZGljYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL21vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3BhdXNlLXBvcHVwLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9wcm9tcHQtdGV4dC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvc3RvbmVzLWxheWVyLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy90aW1lci10aWNraW5nLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvZGF0YS9hcGktZGF0YS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvZGF0YS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvcHJvZmlsZS1kYXRhLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2VfY29uZmlnLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2dhbWUtZW5kLXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvbGV2ZWwtZW5kLXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2xldmVsLXNlbGVjdGlvbi1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9sZXZlbC1zdGFydC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9zdGFydC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9ub2RlX21vZHVsZXMvd29ya2JveC13aW5kb3cvYnVpbGQvd29ya2JveC13aW5kb3cucHJvZC5lczUubWpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vZmVlZFRoZU1vbnN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2VzKHNvdXJjZXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGltYWdlcyA9IHt9O1xuICAgIHZhciBsb2FkZWRJbWFnZXMgPSAwO1xuICAgIHZhciBudW1JbWFnZXMgPSAwO1xuICAgIC8vIGdldCBudW0gb2Ygc291cmNlc1xuICAgIGZvciAodmFyIHNyYyBpbiBzb3VyY2VzKSB7XG4gICAgICAgIG51bUltYWdlcysrO1xuICAgIH1cbiAgICBmb3IgKHZhciBzcmMgaW4gc291cmNlcykge1xuICAgICAgICBpbWFnZXNbc3JjXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZXNbc3JjXS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKytsb2FkZWRJbWFnZXMgPj0gbnVtSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaW1hZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2VzW3NyY10uc3JjID0gc291cmNlc1tzcmNdO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkaW5nU2NyZWVuKGxvYWRpbmcpIHtcbiAgICBjb25zdCBsb2FkaW5nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICBsb2FkaW5nRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuYmtnQ2FudmFzLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvYWRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpLmJrZ0NhbnZhcy5sYXllcnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkKTtcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IE1vbnN0ZXJMYXllciA9IFwibW9uc3RlckNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFBhdXNlUG9wdXBMYXllciA9IFwicGF1c2Vwb3B1cENhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFN0b25lTGF5ZXIgPSBcInN0b25lQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgVGltZXRpY2tlckxheWVyID0gXCJ0aW1ldGlja0NhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IExldmVsRW5kTGF5ZXIgPSBcImxldmVsRW5kQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgTGV2ZWxFbmRCdXR0b25zTGF5ZXIgPSBcImxldmVsRW5kQnV0dG9uc0NhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IExldmVsU2VsZWN0aW9uTGF5ZXIgPSBcImxldmVsU2VsZWN0aW9uQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgTGV2ZWxTdGFydExheWVyID0gXCJsZXZlbFN0YXJ0Q2FudmFzXCI7XG5leHBvcnQgY29uc3QgU3RhcnRTY2VuZUxheWVyID0gXCJzdGFydFNjZW5lQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgUGxheUJ1dHRvbkxheWVyID0gXCJwbGF5QnV0dG9uQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgR2FtZUVuZExheWVyID0gXCJHYW1lRW5kQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VyQ2xpY2tlZCA9IFwidXNlcl9jbGlja2VkXCI7XG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VySW5zdGFsbCA9IFwidXNlcl9pbnN0YWxsZWRcIjtcbmV4cG9ydCBjb25zdCBQcm9tcHRUZXh0TGF5ZXIgPSBcInByb21wdFRleHRDYW52YXNcIjtcbmV4cG9ydCBjb25zdCBQV0FJbnN0YWxsU3RhdHVzID0gXCJwd2FfaW5zdGFsbGVkX3N0YXR1c1wiO1xuZXhwb3J0IGNvbnN0IFVzZXJDYW5jZWxsZWQgPSBcInVzZXJfY2FuY2VsX2luc3RhbGxhdGlvblwiO1xuZXhwb3J0IGNvbnN0IE5hdGl2ZVBsYXlCdXR0b24gPSBcIm5hdGl2ZV9wbGF5YnV0dG9uX2NsaWNrZWRcIjtcbiIsImV4cG9ydCBjbGFzcyBMZXZlbENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoeFBvcywgeVBvcywgaW5kZXgpIHtcbiAgICAgICAgdGhpcy54ID0geFBvcztcbiAgICAgICAgdGhpcy55ID0geVBvcztcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBJY29uLnBuZ1wiO1xuICAgIH1cbn1cbiIsImxldCBpbmFjdGl2ZV9zY3JlZW4gPSBmYWxzZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgIH1cbiAgICBwbGF5U291bmQoc3JjKSB7XG4gICAgICAgIHRoaXMuYXVkaW8ucGxheSgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvMSA9IG5ldyBBdWRpbygpO1xuICAgICAgICAgICAgdGhpcy5hdWRpbzEuc3JjID0gc3JjO1xuICAgICAgICAgICAgdGhpcy5hdWRpbzEucGxheSgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpbzIgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvMi5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpbzIucGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhY3RpdmVTY3JlZW4oKSB7XG4gICAgICAgIGlmIChpbmFjdGl2ZV9zY3JlZW4pIHtcbiAgICAgICAgICAgIGluYWN0aXZlX3NjcmVlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXVzZVNvdW5kKCk7XG4gICAgICAgICAgICBpbmFjdGl2ZV9zY3JlZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlU291bmQoKSB7XG4gICAgICAgIHRoaXMuYXVkaW8gPyB0aGlzLmF1ZGlvLnBhdXNlKCkgOiBudWxsO1xuICAgICAgICB0aGlzLmF1ZGlvMiA/IHRoaXMuYXVkaW8xLnBhdXNlKCkgOiBudWxsO1xuICAgICAgICB0aGlzLmF1ZGlvMiA/IHRoaXMuYXVkaW8yLnBhdXNlKCkgOiBudWxsO1xuICAgIH1cbiAgICBjaGFuZ2VTb3Vyc2Uoc3JjKSB7XG4gICAgICAgIHRoaXMuYXVkaW8uc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChzcmMpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTdG9uZUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3Ioc3RvbmVMZXR0ZXIsIHhQb3MsIHlQb3MpIHtcbiAgICAgICAgdGhpcy54ID0geFBvcztcbiAgICAgICAgdGhpcy55ID0geVBvcztcbiAgICAgICAgdGhpcy5vcmlneCA9IHhQb3M7XG4gICAgICAgIHRoaXMub3JpZ3kgPSB5UG9zO1xuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRleHQgPSBzdG9uZUxldHRlcjtcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc3RvbmVfcGlua192MDIucG5nXCI7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FuY2VsQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gY2FudmFzLndpZHRoICogMC4xICsgKGNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMjtcbiAgICAgICAgdGhpcy5wb3NZID0gY2FudmFzLmhlaWdodCAqIDAuMjtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Nsb3NlX2J0bi5wbmdcIjtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwX2J0bi5wbmdcIjtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFsbEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9JbnN0YWxsX2J1dHRvbi5wbmdcIjtcbiAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoIC8gMywgc2VsZi5jYW52YXMud2lkdGggLyA2KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyAxMikgKlxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDEyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuY2FudmFzLndpZHRoIC8gOCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0QnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHBvc1gsIHBvc1kpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25leHRfYnRuLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IGNhbnZhcy53aWR0aCAtIGNhbnZhcy5oZWlnaHQgKiAwLjA5O1xuICAgICAgICB0aGlzLnBvc1kgPSAwO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGF1c2VfdjAxLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIG9uQ2xpY2soeENsaWNrLCB5Q2xpY2spIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMikgKlxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9QbGF5X2J1dHRvbi5wbmdcIjtcbiAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoIC8gMywgc2VsZi5jYW52YXMud2lkdGggLyAzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLmNhbnZhcy53aWR0aCAvIDgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0cnlCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcmV0cnlfYnRuLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTGV2ZWxJbmRpY2F0b3JzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIGFjdGl2ZUluZGljYXRvcnMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9ycyA9IGFjdGl2ZUluZGljYXRvcnM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBzZXRJbmRpY2F0b3JzKGludCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGljYXRvcnMgPSBpbnQ7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBsZXZlbF9pbmRpY2F0b3IgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV2ZWxfaW5kaWNhdG9yLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2xldmVsc192MDEucG5nXCI7XG4gICAgICAgIHZhciBiYXJfZW1wdHkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFyX2VtcHR5LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Jhcl9lbXB0eV92MDEucG5nXCI7XG4gICAgICAgIGxldmVsX2luZGljYXRvci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShsZXZlbF9pbmRpY2F0b3IsIDAsIDAsIHNlbGYuY2FudmFzLndpZHRoICogMC4zNSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSk7XG4gICAgICAgICAgICBiYXJfZW1wdHkub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKGJhcl9lbXB0eSwgKChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gNykgKiAoaSArIDEpLCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyIC0gKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gNiwgKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyAxMCwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKHNlbGYpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUoc2VsZikge1xuICAgICAgICB2YXIgYmFyX2Z1bGwgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFyX2Z1bGwuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmFyX2Z1bGxfdjAxLnBuZ1wiO1xuICAgICAgICBiYXJfZnVsbC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFjdGl2ZUluZGljYXRvcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UoYmFyX2Z1bGwsICgoc2VsZi5jYW52YXMud2lkdGggKiAwLjM1KSAvIDcpICogKGkgKyAxKSwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMiAtIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDYsIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gMTAsIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vbnN0ZXJMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xudmFyIGxhc3RUaW1lID0gMDtcbnZhciBzZWxmO1xudmFyIGFuaW1hdGlvbkZyYW1lO1xuY29uc3QgZWF0SW1nID0gbmV3IEltYWdlKCk7XG5lYXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZWF0NC5wbmdcIjtcbmNvbnN0IGlkbGVJbWcgPSBuZXcgSW1hZ2UoKTtcbmlkbGVJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTQucG5nXCI7XG5jb25zdCBzcGl0SW1nID0gbmV3IEltYWdlKCk7XG5zcGl0SW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3NwaXQ0LnBuZ1wiO1xuZXhwb3J0IGNsYXNzIE1vbnN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHppbmRleCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy56aW5kZXggPSB6aW5kZXg7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmdhbWUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5nYW1lLmhlaWdodDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9uc3RlclwiKTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgIHRoaXMubWF4RnJhbWUgPSA2O1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUud2lkdGggLyAyIC0gdGhpcy5nYW1lLndpZHRoICogMC4yNDM7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2FtZS53aWR0aCAvIDM7XG4gICAgICAgIHRoaXMuZnBzID0gMTA7XG4gICAgICAgIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLmZwcztcbiAgICAgICAgdGhpcy5mcmFtZVRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgTW9uc3RlckxheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAnNic7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS5ib3R0b20gPSAnMCc7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbigwKTtcbiAgICB9XG4gICAgY2hhbmdlWmluZGV4KGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSBpbmRleDtcbiAgICB9XG4gICAgZGVsZXRlQ2FudmFzKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVUaW1lciA+IHRoaXMuZnJhbWVJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IHRoaXMubWF4RnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyICs9IGRlbHRhVGltZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgNzcwICogdGhpcy5mcmFtZVgsIDEzODYgKiB0aGlzLmZyYW1lWSwgNzY4LCAxMzg2LCB0aGlzLngsIHRoaXMueSAqIDAuOCwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMS41KTtcbiAgICB9XG4gICAgY2hhbmdlSW1hZ2Uoc3JjKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmZyYW1lWSA9PSAxKSB7XG4gICAgICAgIC8vICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIHRoaXMuZnJhbWVZID0gMTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHNyYztcbiAgICB9XG4gICAgY2hhbmdlVG9FYXRBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBlYXRJbWc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0lkbGVBbmltYXRpb24oKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIGNoYW5nZVRvSWRsZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGlkbGVJbWc7XG4gICAgfVxuICAgIGNoYW5nZVRvU3BpdEFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHNwaXRJbWc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0lkbGVBbmltYXRpb24oKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIGFuaW1hdGlvbih0aW1lU3RhbXApIHtcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIGxhc3RUaW1lO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgc2VsZi51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2VsZi5hbmltYXRpb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhdXNlUG9wdXBMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IENhbmNlbEJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2NhbmNlbF9idXR0b24uanNcIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2Nsb3NlX2J1dHRvbi5qc1wiO1xuaW1wb3J0IFJldHJ5QnV0dG9uIGZyb20gXCIuL2J1dHRvbnMvcmV0cnlfYnV0dG9uLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZVBvcFVwIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGxldmVsU3RhcnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoLCBQYXVzZVBvcHVwTGF5ZXIpO1xuICAgICAgICBjb25zdCBzZWxmSWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHNlbGZJZEVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBzZWxmSWRFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiMTFcIjtcbiAgICAgICAgc2VsZklkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICB2YXIgcG9wX3VwX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBvcF91cF9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9wb3B1cF9iZ192MDEucG5nXCI7XG4gICAgICAgIHBvcF91cF9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwb3BfdXBfaW1hZ2UsIHNlbGYuY2FudmFzLndpZHRoICogMC4xLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIsIHNlbGYuY2FudmFzLndpZHRoICogMC44LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuOCk7XG4gICAgICAgICAgICBzZWxmLmNhbmNlbEJ1dHRvbiA9IG5ldyBDYW5jZWxCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcyk7XG4gICAgICAgICAgICBzZWxmLnJldHJ5QnV0dG9uID0gbmV3IFJldHJ5QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC41NSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yICtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNCAtXG4gICAgICAgICAgICAgICAgKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKTtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjI1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIgK1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLndpZHRoICogMC40IC1cbiAgICAgICAgICAgICAgICAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmSWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZklkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChzZWxmLmNhbmNlbEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LnRpbWVyVGlja2luZy5yZXN1bWVUaW1lcigpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5sZXZlbEVuZENhbGxCYWNrKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5yZXRyeUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJjbG9zZV9idXR0b25cIik7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoc2VsZikge1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xuICAgIH1cbiAgICBkcmF3KCkgeyB9XG4gICAgdXBkYXRlKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBQcm9tcHRUZXh0TGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbnZhciBzZWxmO1xuZXhwb3J0IGNsYXNzIFByb21wdFRleHQge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGxldmVsU3RhcnQsIGN1cnJlbnRQdXp6bGVEYXRhLCBsZXZlbERhdGEpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGdhbWUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gbGV2ZWxEYXRhO1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvbXB0VGV4dCA9IGN1cnJlbnRQdXp6bGVEYXRhLnByb21wdC5wcm9tcHRUZXh0O1xuICAgICAgICB0aGlzLmN1cnJlbnRQdXp6bGVEYXRhID0gY3VycmVudFB1enpsZURhdGE7XG4gICAgICAgIHRoaXMuZm50c3RPckdydEltZ0FyciA9IFtdO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLmxvYWRGYW50YXN0aWNBbmRHcmVhdEltYWdlKCk7XG4gICAgfVxuICAgIGxvYWRGYW50YXN0aWNBbmRHcmVhdEltYWdlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZmFudGFzdGljX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZmFudGFzdGljX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2ZhbnRhc3RpY18wMS5wbmdcIjtcbiAgICAgICAgdGhpcy5mbnRzdE9yR3J0SW1nQXJyLnB1c2godGhpcy5mYW50YXN0aWNfaW1hZ2UpO1xuICAgICAgICB0aGlzLmdyZWF0X2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZ3JlYXRfaW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZ3JlYXRfMDEucG5nXCI7XG4gICAgICAgIHRoaXMuZm50c3RPckdydEltZ0Fyci5wdXNoKHRoaXMuZ3JlYXRfaW1hZ2UpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBQcm9tcHRUZXh0TGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDU7XG4gICAgfVxuICAgIHNldEN1cnJyZW50UHV6emxlRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFB1enpsZURhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0ID0gZGF0YS5wcm9tcHQucHJvbXB0VGV4dDtcbiAgICB9XG4gICAgc2hvd0ZhbnRhc3RpY09yR3JlYXQoaW1hZ2VJbmRleCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QodGhpcy5nYW1lLndpZHRoIC8gMiAtICh0aGlzLmdhbWUud2lkdGggKiAwLjUpIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjE1LCB0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuaGVpZ2h0ICogMC4yNSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2Uoc2VsZi5mbnRzdE9yR3J0SW1nQXJyW2ltYWdlSW5kZXhdLCB0aGlzLmdhbWUud2lkdGggLSB0aGlzLmdhbWUud2lkdGggKiAwLjc1LCB0aGlzLmhlaWdodCAqIDAuMiwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMSk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICB9XG4gICAgZHJhdyhkcm9wcGVkU3RvbmVzID0gMCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnByb21wdF9pbWFnZSwgdGhpcy5nYW1lLndpZHRoIC8gMiAtICh0aGlzLmdhbWUud2lkdGggKiAwLjUpIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjE1LCB0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuaGVpZ2h0ICogMC4yNSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gMzAgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjb25zdCBwcm9tcHRUZXh0TGV0dGVycyA9IHRoaXMuY3VycmVudFByb21wdFRleHQuc3BsaXQoXCJcIik7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLndpZHRoIC8gMi4xO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy5oZWlnaHQgKiAwLjI2O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5sZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJMZXR0ZXJJbldvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UHV6emxlRGF0YS50YXJnZXRTdG9uZXMuaW5jbHVkZXMocHJvbXB0VGV4dExldHRlcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgeCArIDIwICogaSwgeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHByb21wdFRleHRMZXR0ZXJzW2ldLCB4ICsgMjAgKiBpLCB5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIldvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcHBlZFN0b25lcyA+IGkgfHwgZHJvcHBlZFN0b25lcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIHggKyAyMCAqIGksIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIHggKyAyMCAqIGksIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgeCArIDIwICogaSwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsVGV4dChcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFByb21wdFRleHQsXG4gICAgICAgIC8vICAgdGhpcy53aWR0aCAvIDIuMSxcbiAgICAgICAgLy8gICB0aGlzLmhlaWdodCAqIDAuMjZcbiAgICAgICAgLy8gKTtcbiAgICB9XG4gICAgY3JlYXRlQmFja2dyb3VuZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLnByb21wdF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzZWxmLnByb21wdF9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9wcm9tcHRUZXh0QmcucG5nXCI7XG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmRyYXcoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUJhY2tncm91bmQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdG9uZUxheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IFN0b25lQ29uZmlnIH0gZnJvbSBcIi4uL2NvbW1vbi9zdG9uZXMtY29uZmlnLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IFBhdXNlUG9wVXAgZnJvbSBcIi4vcGF1c2UtcG9wdXAuanNcIjtcbnZhciBncyA9IHtcbiAgICBtb2RlOiBcImdhbWVwbGF5XCIsXG4gICAgbGV2ZWxudW06IDAsXG59O1xuZ3MucHV6emxlID0ge1xuICAgIHRhcmdldDogW10sXG4gICAgc3RvbmVzOiBbXSxcbn07XG5ncy5zdG9uZXMgPSBbXTtcbnZhciBwaWNrZWRTdG9uZTtcbnZhciBvZmZzZXRDb29yZGluYXRlVmFsdWUgPSAzMjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b25lc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHB1enpsZURhdGEsIHBhdXNlYnV0dG9uLCBjYWxsQmFjaywgbGV2ZWxTdGFydCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5wYXVzZWJ1dHRvbiA9IHBhdXNlYnV0dG9uO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMucHV6emxlRGF0YSA9IHB1enpsZURhdGE7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFB1enpsZSgpO1xuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xuICAgICAgICB0aGlzLmNhbGxCYWNrID0gY2FsbEJhY2s7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIHNldE5ld1B1enpsZShjdXJyZW50UHV6emxlKSB7XG4gICAgICAgIHRoaXMucHV6emxlRGF0YSA9IGN1cnJlbnRQdXp6bGU7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFB1enpsZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVN0b25lcyh0aGlzLnN0b25lcG9zKTtcbiAgICB9XG4gICAgc3RvbmVwb3Moc3RvbmVwb3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHNldEN1cnJlbnRQdXp6bGUoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydC5hdWRpby5jaGFuZ2VTb3Vyc2UodGhpcy5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRBdWRpbyk7XG4gICAgICAgIGdzLnB1enpsZS5zdG9uZXMgPSBbXTtcbiAgICAgICAgZ3MucHV6emxlLnRhcmdldCA9IFtdO1xuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgdGhpcy5wdXp6bGVEYXRhLnRhcmdldFN0b25lcykge1xuICAgICAgICAgICAgZ3MucHV6emxlLnRhcmdldC5wdXNoKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZ3MucHV6emxlLnN0b25lcyA9IHRoaXMucHV6emxlRGF0YS5mb2lsU3RvbmVzO1xuICAgICAgICBncy5wdXp6bGUucHJvbXB0ID0gdGhpcy5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRUZXh0O1xuICAgIH1cbiAgICBpc1RpbWVyRW5kZWQoKSB7XG4gICAgICAgIHBpY2tlZFN0b25lID0gbnVsbDtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBTdG9uZUxheWVyKTtcbiAgICAgICAgY29uc3Qgc2VsZkVsZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5zdHlsZS56SW5kZXggPSBcIjdcIjtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0b25lcG9zID0gW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyA1IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjkgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4xNSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzLjUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4yIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDQgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMjggLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNyAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS41IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMyArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjEgLVxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjQyIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDYgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMTUgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIF07XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoeCAtIHRoaXMud2lkdGggLyAzKSA8IDEyICYmXG4gICAgICAgICAgICAgICAgTWF0aC5zcXJ0KHkgLSB0aGlzLmhlaWdodCAvIDUuNSkgPCAxMCkge1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5hdWRpby5jaGFuZ2VTb3Vyc2Uoc2VsZi5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gdGhpcy53aWR0aCAvIDIgLSAodGhpcy53aWR0aCAqIDAuMykgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHggLSB0aGlzLndpZHRoIC8gMiAtICh0aGlzLndpZHRoICogMC4zKSAvIDIpKSArXG4gICAgICAgICAgICAgICAgKHkgLSB0aGlzLmhlaWdodCAqIDAuMTUpICogKHkgLSB0aGlzLmhlaWdodCAqIDAuMTUpIDw9XG4gICAgICAgICAgICAgICAgMTAwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvbXB0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC50aW1lclRpY2tpbmcucmVzdW1lVGltZXIoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnBhdXNlYnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQudGltZXJUaWNraW5nLnBhdXNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQubGV2ZWxFbmRDYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgIG5ldyBQYXVzZVBvcFVwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuaWQpLCBzZWxmLmxldmVsU3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBncy5zdG9uZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54KSAqICh4IC0gcy54KSArICh5IC0gcy55KSAqICh5IC0gcy55KSkgPD0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmF1ZGlvLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy9vbkRyYWcubXAzXCIpO1xuICAgICAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZSA9IHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZkVsZWxlbWVudElkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgaWYgKE1hdGguc3FydCgoeCAtXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci54IC1cbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLndpZHRoIC8gNCkgKlxuICAgICAgICAgICAgICAgICh4IC1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci54IC1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci53aWR0aCAvIDQpICtcbiAgICAgICAgICAgICAgICAoeSAtXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueSAtXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIuaGVpZ2h0IC8gMi43KSAqXG4gICAgICAgICAgICAgICAgICAgICh5IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLmhlaWdodCAvIDIuNykpIDw9IDYwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpY2tlZFN0b25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSAtOTAwO1xuICAgICAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS55ID0gLTkwMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpY2tlZFN0b25lLnRleHQgPT0gZ3MucHV6emxlLnRhcmdldFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3MucHV6emxlLnRhcmdldC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdzLnB1enpsZS50YXJnZXQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncy5zdG9uZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrKHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjayh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncy5zdG9uZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2soZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSBwaWNrZWRTdG9uZS5vcmlneDtcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS55ID0gcGlja2VkU3RvbmUub3JpZ3k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwaWNrZWRTdG9uZSA9IG51bGw7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSB4O1xuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnkgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmRWxlbGVtZW50SWQuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNlbW92ZVwiLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmRWxlbGVtZW50SWQuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIiwge1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZkVsZWxlbWVudElkLmRpc3BhdGNoRXZlbnQobW91c2VFdmVudCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTdG9uZXModGhpcy5zdG9uZXBvcyk7XG4gICAgfVxuICAgIHNldFByb21wdCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0aGlzLndpZHRoICogMC4wOSArIFwicHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChncy5wdXp6bGUucHJvbXB0LCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjI3KTtcbiAgICB9XG4gICAgZGVsZXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBmb3IgKGxldCBzIG9mIGdzLnN0b25lcykge1xuICAgICAgICAgICAgdGhpcy5kcmF3c3RvbmUocywgdGhpcy5jYW52YXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdzdG9uZShzLCBjYW52YXMpIHtcbiAgICAgICAgdmFyIGltYWdlU2l6ZSA9IGNhbnZhcy5oZWlnaHQgLyAxMztcbiAgICAgICAgdmFyIHRleHRGb250U2l6ZSA9IGNhbnZhcy5oZWlnaHQgLyAyMDtcbiAgICAgICAgdmFyIGltYWdlQ2VudGVyT2Zmc2V0WCA9IGltYWdlU2l6ZSAvIDIuMztcbiAgICAgICAgdmFyIGltYWdlQ2VudGVyT2Zmc2V0WSA9IGltYWdlU2l6ZSAvIDEuNTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShzLmltZywgcy54IC0gaW1hZ2VDZW50ZXJPZmZzZXRYLCBzLnkgLSBpbWFnZUNlbnRlck9mZnNldFksIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocy50ZXh0LCBzLngsIHMueSk7XG4gICAgfVxuICAgIGNyZWF0ZVN0b25lcyhzdG9uZXBvcykge1xuICAgICAgICB2YXIgcG9zcyA9IHN0b25lcG9zWzBdO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGdzLnN0b25lcy5zcGxpY2UoMCwgZ3Muc3RvbmVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IHMgb2YgZ3MucHV6emxlLnN0b25lcykge1xuICAgICAgICAgICAgdmFyIG5zID0gbmV3IFN0b25lQ29uZmlnKHMsIHBvc3NbaV1bMF0sIHBvc3NbaV1bMV0pO1xuICAgICAgICAgICAgZ3Muc3RvbmVzLnB1c2gobnMpO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRpbWV0aWNrZXJMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuZXhwb3J0IGNsYXNzIFRpbWVyVGlja2luZyB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgbGV2ZWxTdGFydCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aFRvQ2xlYXIgPSB0aGlzLmdhbWUud2lkdGggLyAzLjQ7XG4gICAgICAgIHRoaXMubWF4TGltaXRFeGhhdXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RpbWVyRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcbiAgICAgICAgdGhpcy5pc1RpbWVyUnVubmluZ091dCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFRpbWV0aWNrZXJMYXllcik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI0XCI7XG4gICAgICAgIC8vIHRoaXMuYW5pbWF0aW9uKDApO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMudGltZXJfZnVsbCwgdGhpcy5nYW1lLndpZHRoICogMC4xMiwgdGhpcy5oZWlnaHQgKiAwLjA5OSwgdGhpcy5nYW1lLndpZHRoIC0gNTAsIHRoaXMuaGVpZ2h0ICogMC4wNSk7XG4gICAgICAgIHRoaXMuYmVnaW5UaW1lck9uU3RhcnQoKTtcbiAgICB9XG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudGltZXJfZnVsbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnRpbWVyX2Z1bGwuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXJfZnVsbC5wbmdcIjtcbiAgICAgICAgdGhpcy50aW1lcl9mdWxsLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmRyYXcoKTtcbiAgICAgICAgICAgIHNlbGYuYmVnaW5UaW1lck9uU3RhcnQoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1RpbWVyU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSAwLjA2O1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyID4gNTUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPCAxMDAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA+IDU0ICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuaXNUaW1lclJ1bm5pbmdPdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJSdW5uaW5nT3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsU3RhcnQuYXVkaW8uY2hhbmdlU291cnNlKFwiLi9hc3NldHMvYXVkaW9zL3RpbWVvdXQubXAzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyIDwgNTUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA+IDU0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyUnVubmluZ091dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lckVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJFbmRlZCA/IHRoaXMubGV2ZWxTdGFydC5jaGFuZ2VQdXp6bGUoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmVnaW5UaW1lck9uU3RhcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VCdXR0b25DbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzVGltZXJTdGFydGVkICYmIHNlbGYudGltZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1RpbWVyU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCA2MDAwKTtcbiAgICB9XG4gICAgc3RvcFRpbWVyKCkge1xuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgcGF1c2VUaW1lcigpIHtcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uQ2xpY2tlZCA9IHRydWU7XG4gICAgfVxuICAgIHJlc3VtZVRpbWVyKCkge1xuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IFVSTCA9IFwiLi9mdG1fZW5nbGlzaC5qc29uXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnRtRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goVVJMLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gbGV0IGQgPSB7XG4gICAgICAgIC8vICAgICBcIk90aGVyQXVkaW9zXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrVGV4dHNcIjogbnVsbCxcbiAgICAgICAgLy8gICAgIFwiTGV2ZWxzXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrQXVkaW9zXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIlJpZ2h0VG9MZWZ0XCI6IG51bGxcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4geWllbGQgZ2V0RnRtRGF0YSgpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGNsYXNzIERhdGFNb2RhbCB7XG4gICAgY29uc3RydWN0b3Iob3RoZXJBdWRpb3MsIGxldmVscywgZmVlZGJhY2tUZXh0cywgcmlnaHRUb0xlZnQsIGZlZWRiYWNrQXVkaW9zKSB7XG4gICAgICAgIHRoaXMub3RoZXJBdWRpb3MgPSBuZXcgT3RoZXJBdWRpb3Mob3RoZXJBdWRpb3MpO1xuICAgICAgICB0aGlzLmxldmVscyA9IHRoaXMuZ2V0TGV2ZWxzKGxldmVscyk7XG4gICAgICAgIHRoaXMuRmVlZGJhY2tUZXh0cyA9IG5ldyBGZWVkYmFja1RleHRzKGZlZWRiYWNrVGV4dHMpO1xuICAgICAgICB0aGlzLkZlZWRiYWNrQXVkaW9zID0gbmV3IEZlZWRiYWNrQXVkaW9zKGZlZWRiYWNrQXVkaW9zKTtcbiAgICAgICAgdGhpcy5yaWdodFRvTGVmdCA9IHJpZ2h0VG9MZWZ0O1xuICAgIH1cbiAgICBnZXRMZXZlbHMobGV2ZWxzKSB7XG4gICAgICAgIGxldCBsZXZlbEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXZlbEFycmF5LnB1c2gobmV3IExldmVscyhsZXZlbHNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWxBcnJheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgT3RoZXJBdWRpb3Mge1xuICAgIGNvbnN0cnVjdG9yKG90aGVyQXVkaW9zKSB7XG4gICAgICAgIHRoaXMuc2VsY3RZb3VyUGxheWVyID0gb3RoZXJBdWRpb3NbXCJTZWxlY3QgeW91ciBwbGF5ZXJcIl07XG4gICAgICAgIHRoaXMud2F0Y2hNZUdyb3cgPSBvdGhlckF1ZGlvc1tcIldhdGNoIG1lIGdyb3dcIl07XG4gICAgICAgIHRoaXMuYXJlWW91U3VyZSA9IG90aGVyQXVkaW9zW1wiQXJlIHlvdSBzdXJlXCJdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGZWVkYmFja1RleHRzIHtcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja1RleHRzKSB7XG4gICAgICAgIHRoaXMuZmFudGFzdGljID0gZmVlZGJhY2tUZXh0c1swXTtcbiAgICAgICAgdGhpcy5ncmVhdCA9IGZlZWRiYWNrVGV4dHNbMV07XG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrVGV4dHNbMl07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrQXVkaW9zIHtcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja0F1ZGlvcykge1xuICAgICAgICB0aGlzLmZhbnRhc3RpYyA9IGZlZWRiYWNrQXVkaW9zWzBdO1xuICAgICAgICB0aGlzLmdyZWF0ID0gZmVlZGJhY2tBdWRpb3NbMV07XG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrQXVkaW9zWzJdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZXZlbHMge1xuICAgIGNvbnN0cnVjdG9yKGxldmVscykge1xuICAgICAgICB0aGlzLnB1enpsZXMgPSB0aGlzLmdldFB1enpsZURhdGEobGV2ZWxzKTtcbiAgICAgICAgdGhpcy5sZXZlbE1ldGEgPSBuZXcgTGV2ZWxNZXRhKGxldmVscy5MZXZlbE1ldGEpO1xuICAgICAgICB0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxzLkxldmVsTnVtYmVyO1xuICAgIH1cbiAgICBnZXRQdXp6bGVEYXRhKGxldmVscykge1xuICAgICAgICBsZXQgcHV6emxlT2JqZWN0cyA9IFtdO1xuICAgICAgICBsZXZlbHMuUHV6emxlcy5tYXAoKHB1enpsZURhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwdXp6bGVPYmplY3RzLnB1c2gobmV3IFB1enpsZXMocHV6emxlRGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHB1enpsZU9iamVjdHM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFB1enpsZXMge1xuICAgIGNvbnN0cnVjdG9yKHB1enpsZSkge1xuICAgICAgICB0aGlzLnNlZ21lbnROdW1iZXIgPSBwdXp6bGUuU2VnbWVudE51bWJlcjtcbiAgICAgICAgdGhpcy5wcm9tcHQgPSBuZXcgUHJvbXB0KHB1enpsZS5wcm9tcHQpO1xuICAgICAgICB0aGlzLmZvaWxTdG9uZXMgPSB0aGlzLmdldEZvaWxTdG9uZXMocHV6emxlKTtcbiAgICAgICAgdGhpcy50YXJnZXRTdG9uZXMgPSB0aGlzLmdldFRhcmdldFN0b25lcyhwdXp6bGUpO1xuICAgIH1cbiAgICBnZXRGb2lsU3RvbmVzKHB1enpsZSkge1xuICAgICAgICBsZXQgZm9pbFN0b25lQXJyYXkgPSBbXTtcbiAgICAgICAgcHV6emxlLmZvaWxzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBmb2lsU3RvbmVBcnJheS5wdXNoKHN0b25lcy5TdG9uZVRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvaWxTdG9uZUFycmF5O1xuICAgIH1cbiAgICBnZXRUYXJnZXRTdG9uZXMocHV6emxlKSB7XG4gICAgICAgIGxldCB0YXJnZXRTdG9uZUFycmF5ID0gW107XG4gICAgICAgIHB1enpsZS50YXJnZXRzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRTdG9uZUFycmF5LnB1c2goc3RvbmVzLlN0b25lVGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3RvbmVBcnJheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9pbFN0b25lIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9uZVRleHQpIHtcbiAgICAgICAgdGhpcy5zdG9uZVRleHQgPSBzdG9uZVRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRhcmdldFN0b25lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdG9uZVRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb21wdCB7XG4gICAgY29uc3RydWN0b3IocHJvbXB0KSB7XG4gICAgICAgIHRoaXMucHJvbXB0VGV4dCA9IHByb21wdC5Qcm9tcHRUZXh0O1xuICAgICAgICB0aGlzLnByb21wdEF1ZGlvID0gcHJvbXB0LlByb21wdEF1ZGlvO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZXZlbE1ldGEge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsTWV0YSkge1xuICAgICAgICB0aGlzLnByb21wdEZhZGVPdXQgPSBsZXZlbE1ldGEuUHJvbXB0RmFkZW91dDtcbiAgICAgICAgdGhpcy5sZXR0ZXJHcm91cCA9IGxldmVsTWV0YS5MZXR0ZXJHcm91cDtcbiAgICAgICAgdGhpcy5sZXZlbE51bWJlciA9IGxldmVsTWV0YS5MZXZlbE51bWJlcjtcbiAgICAgICAgdGhpcy5wcm90b1R5cGUgPSBsZXZlbE1ldGEuUHJvbXB0VHlwZTtcbiAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBsZXZlbE1ldGEuTGV2ZWxUeXBlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9maWxlRGF0YSB7XG4gICAgY29uc3RydWN0b3IobGV2ZWxOYW1lLCBsZXZlbE51bWJlciwgbGV2ZWxTY29yZSwgbGV2ZWxTdGFyKSB7XG4gICAgICAgICh0aGlzLmxldmVsTmFtZSA9IGxldmVsTmFtZSksXG4gICAgICAgICAgICAodGhpcy5sZXZlbE51bWJlciA9IGxldmVsTnVtYmVyKSxcbiAgICAgICAgICAgICh0aGlzLmxldmVsU2NvcmUgPSBsZXZlbFNjb3JlKSxcbiAgICAgICAgICAgICh0aGlzLmxldmVsU3RhciA9IGxldmVsU3Rhcik7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGFUb1N0b3JhZ2UocHJvZmlsZURhdGEpIHtcbiAgICBjb25zdCBleGlzdGluZ0RhdGEgPSBnZXREYXRhZnJvbVN0b3JhZ2UoKVxuICAgICAgICA/IGpzb25Ub0FycmF5KGdldERhdGFmcm9tU3RvcmFnZSgpKVxuICAgICAgICA6IFtdO1xuICAgIHByb2ZpbGVEYXRhID8gZGF0YVB1c2hUb0FycmF5KGV4aXN0aW5nRGF0YSwgcHJvZmlsZURhdGEpIDogbnVsbDtcbiAgICBleGlzdGluZ0RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5sZXZlbE51bWJlciA+IGIubGV2ZWxOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nRGF0YSk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9maWxlXCIsIGRhdGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGpzb25Ub0FycmF5KGpzb24pIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIGZvciAodmFyIGkgaW4ganNvbikge1xuICAgICAgICBkYXRhLnB1c2goanNvbltpXSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuZnVuY3Rpb24gZGF0YVB1c2hUb0FycmF5KGpzb25EYXRhLCBwcm9maWxlRGF0YSkge1xuICAgIHZhciBkYXRhTm90RXhpc3QgPSB0cnVlO1xuICAgIGpzb25EYXRhLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlSW50KGRhdGEubGV2ZWxOdW1iZXIpID09IHBhcnNlSW50KHByb2ZpbGVEYXRhLmxldmVsTnVtYmVyKSkge1xuICAgICAgICAgICAgZGF0YU5vdEV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBkYXRhLmxldmVsU2NvcmUgPCBwcm9maWxlRGF0YS5sZXZlbFNjb3JlXG4gICAgICAgICAgICAgICAgPyAoZGF0YS5sZXZlbFNjb3JlID0gcHJvZmlsZURhdGEubGV2ZWxTY29yZSlcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBkYXRhLmxldmVsU3RhciA8IHByb2ZpbGVEYXRhLmxldmVsU3RhclxuICAgICAgICAgICAgICAgID8gKGRhdGEubGV2ZWxTdGFyID0gcHJvZmlsZURhdGEubGV2ZWxTdGFyKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRhdGFOb3RFeGlzdCA/IGpzb25EYXRhLnB1c2gocHJvZmlsZURhdGEpIDogbnVsbDtcbiAgICByZXR1cm4ganNvbkRhdGE7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YWZyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvZmlsZVwiKSB8fCBcInt9XCIpO1xuICAgIHJldHVybiBkYXRhO1xufVxuIiwiZXhwb3J0IGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lDbDZDY3F1RzRGbHdQVXRmbVRZMTYtUjVjenhPblR0UEVcIixcbiAgICBhdXRoRG9tYWluOiBcImZlZWR0aGVtb25zdGVyanMuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcImZlZWR0aGVtb25zdGVyanNcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImZlZWR0aGVtb25zdGVyanMuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2OTAwMTI2ODIwMVwiLFxuICAgIGFwcElkOiBcIjE6NjkwMDEyNjgyMDE6d2ViOjJiZmU0ZDUzOTVkMTYwMjY2MmQ5NzhcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctTjZWUUU1R1dRSFwiXG59O1xuIiwiaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IEdhbWVFbmRMYXllciwgbG9hZEltYWdlcyB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG52YXIgaW1hZ2VzID0ge1xuICAgIGJnSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9iZ192MDEuanBnXCIsXG4gICAgaGlsbEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvaGlsbF92MDEucG5nXCIsXG4gICAgdGltZXJfZW1wdHk6IFwiLi9hc3NldHMvaW1hZ2VzL3RpbWVyX2VtcHR5LnBuZ1wiLFxuICAgIHBpbGxlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvVG90ZW1fdjAyX3YwMS5wbmdcIixcbiAgICBncmFzc0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvRkdfYV92MDEucG5nXCIsXG4gICAgZmVuY2hJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2ZlbmNlX3YwMS5wbmdcIixcbiAgICBiaWdNb25zdGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9mdG1fYm9udXNfbGV2ZWxfbW9uc3RlcnMucG5nXCJcbn07XG52YXIgc2VsZjtcbmV4cG9ydCBjbGFzcyBHYW1lRW5kU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGdhbWUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBHYW1lRW5kTGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9ICczJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjcmlwdGlvbi10ZXh0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2dyb3VkKCk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjcmlwdGlvbi10ZXh0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICAgICAgLy9kZWxldGUgdGhpcztcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICB9XG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIGxvYWRJbWFnZXMoaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnBpbGxlckltZywgd2lkdGggKiAwLjYsIGhlaWdodCAvIDYsIHdpZHRoLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmZlbmNoSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDMsIHdpZHRoLCBoZWlnaHQgLyAzKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5iaWdNb25zdGVySW1nLCB3aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgLSBoZWlnaHQgKiAwLjI1LCB3aWR0aCAvIDEuNywgaGVpZ2h0IC8gMi41KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGV2ZWxTdGFydFNjZW5lIH0gZnJvbSBcIi4vbGV2ZWwtc3RhcnQtc2NlbmUuanNcIjtcbnZhciBhbmltYXRpb25GcmFtZTtcbnZhciBzZWxmO1xuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHB1enpsZURhdGEsIGdhbWVTY2VuZUNhbGxCYWNrKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgTGV2ZWxTdGFydFNjZW5lKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMsXG4gICAgICAgICAgICBsZXZlbERhdGE6IHB1enpsZURhdGEsXG4gICAgICAgICAgICBsZXZlbFN0YXJ0Q2FsbEJhY2s6IHRoaXMubGV2ZWxTdGFydENhbGxCYWNrLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lU2NlbmVDYWxsQmFjayA9IGdhbWVTY2VuZUNhbGxCYWNrO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hbmltYXRpb24oKTtcbiAgICB9XG4gICAgbGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lU2NlbmVDYWxsQmFjayhidXR0b25fbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHNlbGYuc2NlbmUgPyAoc2VsZi5zY2VuZS5zdG9uZXMgPyBzZWxmLnNjZW5lLnN0b25lcy51cGRhdGUoKSA6IG51bGwpIDogbnVsbDtcbiAgICAgICAgc2VsZi5zY2VuZSA/IHNlbGYuc2NlbmUudXBkYXRlKCkgOiBudWxsO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jcmVhdGVCYWNrZ3JvdWQoKTtcbiAgICB9XG4gICAgYW5pbWF0aW9uKCkge1xuICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzZWxmLmFuaW1hdGlvbik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGV2ZWxFbmRCdXR0b25zTGF5ZXIsIExldmVsRW5kTGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzXCI7XG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL25leHRfYnV0dG9uLmpzXCI7XG5pbXBvcnQgUmV0cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9yZXRyeV9idXR0b24uanNcIjtcbmltcG9ydCB7IFByb2ZpbGVEYXRhLCBzZXREYXRhVG9TdG9yYWdlIH0gZnJvbSBcIi4uL2RhdGEvcHJvZmlsZS1kYXRhLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xudmFyIGF1ZGlvVXJsID0ge1xuICAgIGxldmVsV2luOiBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbFdpbkZhbmZhcmUubXAzXCIsXG4gICAgbGV2ZWxMb3NlOiBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbExvc2VGYW5mYXJlLm1wM1wiLFxuICAgIGludHJvOiBcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIixcbn07XG5leHBvcnQgY2xhc3MgTGV2ZWxFbmRTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBzY29yZSwgbW9uc3RlciwgbGV2ZWxFbmRDYWxsQmFjaywgbGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5tb25zdGVyID0gbW9uc3RlcjtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBsZXZlbERhdGE7XG4gICAgICAgIHRoaXMuaXNHYW1lUGF1c2UgPSBpc0dhbWVQYXVzZTtcbiAgICAgICAgdGhpcy5zdGFyQ291bnQgPVxuICAgICAgICAgICAgc2NvcmUgPT0gMjAwXG4gICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgOiBzY29yZSA9PSAzMDBcbiAgICAgICAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgICAgICAgIDogc2NvcmUgPT0gNDAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2NvcmUgPT0gNTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICBjb25zb2xlLmxvZyhsZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2coc2NvcmUpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLmxldmVsRW5kQ2FsbEJhY2sgPSBsZXZlbEVuZENhbGxCYWNrO1xuICAgICAgICBzZXREYXRhVG9TdG9yYWdlKG5ldyBQcm9maWxlRGF0YShsZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsVHlwZSwgbGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbE51bWJlciwgc2NvcmUsIHRoaXMuc3RhckNvdW50KSk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhckNvdW50IDw9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNjZW5lLmF1ZGlvLmNoYW5nZVNvdXJzZShhdWRpb1VybC5sZXZlbExvc2UpO1xuICAgICAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL3NhZDE0LnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNjZW5lLmF1ZGlvLmNoYW5nZVNvdXJzZShhdWRpb1VybC5sZXZlbFdpbik7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNHYW1lUGF1c2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zY2VuZS5hdWRpby5jaGFuZ2VTb3Vyc2UoYXVkaW9VcmwuaW50cm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2hhcHB5MTQucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL2ludHJvLndhdlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0aGlzLm1vbnN0ZXIuY2hhbmdlWmluZGV4KDkpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIExldmVsRW5kTGF5ZXIpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLnpJbmRleCA9ICc4JztcbiAgICAgICAgdGhpcy5ib3R0b25MYXllciA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgTGV2ZWxFbmRCdXR0b25zTGF5ZXIpO1xuICAgICAgICB0aGlzLmJvdHRvbkNvbnRleHQgPSBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHRoaXMuYm90dG9uTGF5ZXIpXG4gICAgICAgICAgICAuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJvdHRvbkxheWVyKS5zdHlsZS56SW5kZXggPSAnOSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwNDA3QlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoJy4vYXNzZXRzL2ltYWdlcy9XSU5fc2NyZWVuX2JnLnBuZycpXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb250YWluXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJmaXhlZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICAgICAgdmFyIHN0YXIxID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN0YXIxLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIxLnBuZ1wiO1xuICAgICAgICB2YXIgc3RhcjIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3RhcjIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGluU3RhcjIucG5nXCI7XG4gICAgICAgIHZhciBzdGFyMyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzdGFyMy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9waW5TdGFyMy5wbmdcIjtcbiAgICAgICAgc2VsZi5kcmF3U3RhcnRzKHNlbGYsIHN0YXIxLCBzdGFyMiwgc3RhcjMpO1xuICAgICAgICBzZWxmLm5leHRCdXR0b24gPVxuICAgICAgICAgICAgc2VsZi5zdGFyQ291bnQgPj0gMlxuICAgICAgICAgICAgICAgID8gbmV3IE5leHRCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjggLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuNylcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIHNlbGYucmV0cnlCdXR0b24gPSBuZXcgUmV0cnlCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5zdGFyQ291bnQgPj0gMlxuICAgICAgICAgICAgPyBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNSAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMlxuICAgICAgICAgICAgOiBzZWxmLmNhbnZhcy53aWR0aCAqIDAuOCAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC43KTtcbiAgICAgICAgc2VsZi5jbG9zZUJ1dHRvbiA9IG5ldyBDbG9zZUJ1dHRvbihzZWxmLmNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC43KTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCh0aGlzLmJvdHRvbkxheWVyKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoc2VsZi5ib3R0b25MYXllcilcbiAgICAgICAgICAgICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAoc2VsZi5uZXh0QnV0dG9uICYmIHNlbGYubmV4dEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcIm5leHRfYnV0dG9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYucmV0cnlCdXR0b24ub25DbGljayh4LCB5KSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcImNsb3NlX2J1dHRvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTdGFydHMoc2VsZiwgc3RhcjEsIHN0YXIyLCBzdGFyMykge1xuICAgICAgICBzdGFyMS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuc3RhckNvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN0YXIyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5zdGFyQ291bnQgPD0gMyAmJiBzZWxmLnN0YXJDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMTUsIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc3RhcjMub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXJDb3VudCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2Uoc3RhcjMsIHNlbGYuY2FudmFzLndpZHRoICogMC44MiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcyhzZWxmKSB7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5ib3R0b25MYXllcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IExldmVsQ29uZmlnIH0gZnJvbSBcIi4uL2NvbW1vbi9sZXZlbC1jb25maWcuanNcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgeyBMZXZlbFNlbGVjdGlvbkxheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY29tbW9uL3NvdW5kLmpzXCI7XG5pbXBvcnQgeyBnZXREYXRhZnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi4vZGF0YS9wcm9maWxlLWRhdGEuanNcIjtcbnZhciBtYXBJY29uID0gbmV3IEltYWdlKCk7XG5tYXBJY29uLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcEljb24ucG5nXCI7XG52YXIgbWFwID0gbmV3IEltYWdlKCk7XG5tYXAuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwLmpwZ1wiO1xudmFyIHN0YXIgPSBuZXcgSW1hZ2UoKTtcbnN0YXIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc3Rhci5wbmdcIjtcbnZhciBuZXh0YnRuID0gbmV3IEltYWdlKCk7XG5uZXh0YnRuLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25leHRfYnRuLnBuZ1wiO1xudmFyIGJhY2tidG4gPSBuZXcgSW1hZ2UoKTtcbmJhY2tidG4uc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja19idG4ucG5nXCI7XG52YXIgbGV2ZWxOdW1iZXI7XG52YXIgc2VsZjtcbnZhciBwcmV2aW91c1BsYXllZExldmVsID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdG9yZVByZXZpb3VzUGxheWVkTGV2ZWxcIikpIHwgMDtcbnZhciBsZXZlbDtcbmlmIChwcmV2aW91c1BsYXllZExldmVsICE9IG51bGwpIHtcbiAgICBsZXZlbCA9IDEwICogTWF0aC5mbG9vcihwcmV2aW91c1BsYXllZExldmVsIC8gMTApO1xufVxuY29uc29sZS5sb2cocHJldmlvdXNQbGF5ZWRMZXZlbCk7XG5leHBvcnQgY2xhc3MgTGV2ZWxTZWxlY3Rpb25TY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLmRyYXdTdGFycygpO1xuICAgIH1cbiAgICBnYW1lU2NlbmVDYWxsQmFjayhidXR0b25fbmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwibmV4dF9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRHYW1lKChsZXZlbE51bWJlciArPSAxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0R2FtZShsZXZlbE51bWJlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXdTdGFycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5zb3VuZC5hY3RpdmVTY3JlZW4oKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgTGV2ZWxTZWxlY3Rpb25MYXllcik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgICB0aGlzLmxldmVsQnV0dG9ucG9zID0gW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMF0sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDIuOCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTAsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gM10sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMyArIHRoaXMuY2FudmFzLndpZHRoIC8gMi44LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMTAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOF0sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjhdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzICsgdGhpcy5jYW52YXMud2lkdGggLyAyLjgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDIuNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIF07XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVUb3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICB2YXIgeERvd24gPSBudWxsO1xuICAgICAgICB2YXIgeURvd24gPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBnZXRUb3VjaGVzKGV2dCkge1xuICAgICAgICAgICAgcmV0dXJuIChldnQudG91Y2hlcyB8fCAvLyBicm93c2VyIEFQSVxuICAgICAgICAgICAgICAgIGV2dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMpOyAvLyBqUXVlcnlcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2dCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RUb3VjaCA9IGdldFRvdWNoZXMoZXZ0KVswXTtcbiAgICAgICAgICAgIHhEb3duID0gZmlyc3RUb3VjaC5jbGllbnRYO1xuICAgICAgICAgICAgeURvd24gPSBmaXJzdFRvdWNoLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2dCkge1xuICAgICAgICAgICAgaWYgKCF4RG93biB8fCAheURvd24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgeFVwID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHZhciB5VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgdmFyIHhEaWZmID0geERvd24gLSB4VXA7XG4gICAgICAgICAgICB2YXIgeURpZmYgPSB5RG93biAtIHlVcDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGlmZikgPiBNYXRoLmFicyh5RGlmZikpIHtcbiAgICAgICAgICAgICAgICAvKm1vc3Qgc2lnbmlmaWNhbnQqL1xuICAgICAgICAgICAgICAgIGlmICh4RGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IDE0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgKyAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvKiByaWdodCBzd2lwZSAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIGxlZnQgc3dpcGUgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoeURpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGRvd24gc3dpcGUgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIHVwIHN3aXBlICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogcmVzZXQgdmFsdWVzICovXG4gICAgICAgICAgICB4RG93biA9IG51bGw7XG4gICAgICAgICAgICB5RG93biA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgaWYgKHggPj0gc2VsZi5jYW52YXMud2lkdGggKiAwLjcgJiZcbiAgICAgICAgICAgICAgICB4IDwgc2VsZi5jYW52YXMud2lkdGggKiAwLjcgKyBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMCAmJlxuICAgICAgICAgICAgICAgIHkgPiBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgJiZcbiAgICAgICAgICAgICAgICB5IDwgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTApIHtcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgIT0gMTQwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbCArIDEwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXdTdGFycygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHggPj0gc2VsZi5jYW52YXMud2lkdGggLyAxMCAmJlxuICAgICAgICAgICAgICAgIHggPCBzZWxmLmNhbnZhcy53aWR0aCAvIDEwICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTAgJiZcbiAgICAgICAgICAgICAgICB5ID4gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICYmXG4gICAgICAgICAgICAgICAgeSA8IHNlbGYuY2FudmFzLmhlaWdodCAvIDEuMyArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbCAtIDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xuICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54IC0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMjApICpcbiAgICAgICAgICAgICAgICAgICAgKHggLSBzLnggLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkgK1xuICAgICAgICAgICAgICAgICAgICAoeSAtIHMueSAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAoeSAtIHMueSAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSkgPCA0NSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNvdW5kLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbE51bWJlciA9IHMuaW5kZXggKyBsZXZlbCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRHYW1lKGxldmVsTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVMZXZlbEJ1dHRvbnModGhpcy5sZXZlbEJ1dHRvbnBvcyk7XG4gICAgfVxuICAgIGNyZWF0ZUxldmVsQnV0dG9ucyhsZXZlbEJ1dHRvbnBvcykge1xuICAgICAgICB2YXIgcG9zcyA9IGxldmVsQnV0dG9ucG9zWzBdO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgMTA7IHMrKykge1xuICAgICAgICAgICAgdmFyIG5zID0gbmV3IExldmVsQ29uZmlnKHBvc3NbaV1bMF0sIHBvc3NbaV1bMV0sIGkgKyAxKTtcbiAgICAgICAgICAgIHNlbGYubGV2ZWxzLnB1c2gobnMpO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdyhsZXZlbCk7XG4gICAgICAgIHRoaXMuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgfVxuICAgIGRyYXcobGV2ZWwpIHtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzZWxmLmxldmVscykge1xuICAgICAgICAgICAgdGhpcy5kcmF3bGV2ZWwocywgc2VsZi5jYW52YXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvd25CdXR0b24obGV2ZWwpIHtcbiAgICAgICAgdmFyIGltYWdlU2l6ZSA9IHNlbGYuY2FudmFzLmhlaWdodCAvIDEwO1xuICAgICAgICBpZiAobGV2ZWwgIT0gMTQwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG5leHRidG4sIHRoaXMuY2FudmFzLndpZHRoICogMC43LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjMsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGV2ZWwgIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShiYWNrYnRuLCB0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjMsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAobGV2ZWwgIT0gMCkge1xuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMzAwLCA1MDAsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoaW1hZ2VTaXplLCBpbWFnZVNpemUpO1xuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5yb3RhdGUoOTApO1xuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UobmV4dCwgMzAwLCA1MDAsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBkcmF3bGV2ZWwocywgY2FudmFzKSB7XG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBjYW52YXMuaGVpZ2h0IC8gNTtcbiAgICAgICAgdmFyIHRleHRGb250U2l6ZSA9IGltYWdlU2l6ZSAvIDY7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UobWFwSWNvbiwgcy54LCBzLnksIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocy5pbmRleCArIGxldmVsLCBzLnggKyBpbWFnZVNpemUgLyAzLjUsIHMueSArIGltYWdlU2l6ZSAvIDMpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRleHRGb250U2l6ZSAtIGltYWdlU2l6ZSAvIDMwICsgXCJweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGhpcy5kYXRhLmxldmVsc1tzLmluZGV4ICsgbGV2ZWwgLSAxXS5sZXZlbE1ldGEubGV2ZWxUeXBlLCBzLnggKyBpbWFnZVNpemUgLyAzLjUsIHMueSArIGltYWdlU2l6ZSAvIDEuMyk7XG4gICAgfVxuICAgIHN0YXJ0R2FtZShsZXZlbF9udW1iZXIpIHtcbiAgICAgICAgbmV3IEdhbWUodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgc2VsZi5kYXRhLmxldmVsc1tsZXZlbF9udW1iZXJdLCBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKTtcbiAgICB9XG4gICAgZHJhd1N0YXJzKCkge1xuICAgICAgICB0aGlzLnNvdW5kLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIik7XG4gICAgICAgIGxldCBnYW1lTGV2ZWxEYXRhID0gZ2V0RGF0YWZyb21TdG9yYWdlKCk7XG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgICAgaWYgKGdhbWVMZXZlbERhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBzZWxmLmxldmVscykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxldmVsRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5pbmRleCAtIDEgKyBsZXZlbCA9PSBwYXJzZUludChnYW1lTGV2ZWxEYXRhW2ldLmxldmVsTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3RhcihzLCBjYW52YXMsIGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxTdGFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdTdGFyKHMsIGNhbnZhcywgc3RhckNvdW50KSB7XG4gICAgICAgIHZhciBjYW5hdnNFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWxTZWxlY3Rpb25DYW52YXNcIikpO1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XG4gICAgICAgIGlmIChzdGFyQ291bnQgPj0gMSkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhckNvdW50ID4gMSkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54ICsgaW1hZ2VTaXplIC8gMi41LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhckNvdW50ID09IDMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHN0YXIsIHMueCArIGltYWdlU2l6ZSAvIDUsIHMueSAtIGltYWdlU2l6ZSAqIDAuMSwgaW1hZ2VTaXplIC8gNSwgaW1hZ2VTaXplIC8gNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb25zdGVyLmpzXCI7XG5pbXBvcnQgeyBUaW1lclRpY2tpbmcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90aW1lci10aWNraW5nLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IFN0b25lc0xheWVyIGZyb20gXCIuLi9jb21wb25lbnRzL3N0b25lcy1sYXllci5qc1wiO1xuaW1wb3J0IHsgUHJvbXB0VGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb21wdC10ZXh0LmpzXCI7XG5pbXBvcnQgUGF1c2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9wYXVzZV9idXR0b24uanNcIjtcbmltcG9ydCB7IExldmVsSW5kaWNhdG9ycyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xldmVsLWluZGljYXRvcnMuanNcIjtcbmltcG9ydCB7IExldmVsRW5kQnV0dG9uc0xheWVyLCBMZXZlbEVuZExheWVyLCBsb2FkSW1hZ2VzLCBsb2FkaW5nU2NyZWVuLCBTdG9uZUxheWVyLCBUaW1ldGlja2VyTGF5ZXIsIFByb21wdFRleHRMYXllciwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxTdGFydExheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IEdhbWVFbmRTY2VuZSB9IGZyb20gXCIuL2dhbWUtZW5kLXNjZW5lLmpzXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4uL2NvbW1vbi9zb3VuZC5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxFbmRTY2VuZSB9IGZyb20gXCIuL2xldmVsLWVuZC1zY2VuZS5qc1wiO1xudmFyIGltYWdlcyA9IHtcbiAgICBiZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiLFxuICAgIGhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2hpbGxfdjAxLnBuZ1wiLFxuICAgIHRpbWVyX2VtcHR5OiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lcl9lbXB0eS5wbmdcIixcbiAgICBwaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1RvdGVtX3YwMl92MDEucG5nXCIsXG4gICAgZ3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiLFxuICAgIHJvdGF0aW5nX2Nsb2NrOiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lci5wbmdcIixcbiAgICBmZW5jaEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvZmVuY2VfdjAxLnBuZ1wiLFxuICAgIHByb21wdEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvcHJvbXB0VGV4dEJnLnBuZ1wiLFxuICAgIGZhbnRhc3RpYzogXCIuL2Fzc2V0cy9pbWFnZXMvZmFudGFzdGljXzAxLnBuZ1wiLFxuICAgIGdyZWF0OiBcIi4vYXNzZXRzL2ltYWdlcy9ncmVhdF8wMS5wbmdcIixcbn07XG52YXIgYXVkaW9VcmwgPSB7XG4gICAgcGhyYXNlQXVkaW9zOiBbXG4gICAgICAgIFwiLi9hc3NldHMvYXVkaW9zL2ZhbnRhc3RpYy5XQVZcIixcbiAgICAgICAgLy8gXCIuL2Fzc2V0cy9hdWRpb3MvZ29vZCBqb2IuV0FWXCIsXG4gICAgICAgIFwiLi9hc3NldHMvYXVkaW9zL2dyZWF0LndhdlwiLFxuICAgIF0sXG4gICAgbW9uc3RlclNwbGl0OiBcIi4vYXNzZXRzL2F1ZGlvcy9Nb25zdGVyIFNwaXRzIHdyb25nIHN0b25lcy0wMS5tcDNcIixcbiAgICBtb25zdGVySGFwcHk6IFwiLi9hc3NldHMvYXVkaW9zL0NoZWVyaW5nLTAyLm1wM1wiLFxuICAgIG1vbnN0ZXJTYWQ6IFwiLi9hc3NldHMvYXVkaW9zL0Rpc2Fwb2ludGVkLTA1Lm1wM1wiLFxuICAgIGJ1dHRvbkNsaWNrOiBcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIixcbn07XG52YXIgc2VsZjtcbnZhciB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcbnZhciBjdXJyZW50X3B1enpsZV9pbmRleCA9IDA7XG52YXIgc2NvcmUgPSAwO1xudmFyIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xudmFyIGlzR2FtZVBhdXNlID0gZmFsc2U7XG52YXIgbm9Nb3JlVGFyZ2V0ID0gZmFsc2U7XG52YXIgaXNMZXZlbEVuZGVkID0gZmFsc2U7XG5leHBvcnQgY2xhc3MgTGV2ZWxTdGFydFNjZW5lIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIGxldmVsRGF0YSwgbGV2ZWxTdGFydENhbGxCYWNrLCB9KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5tb25zdGVyID0gbmV3IE1vbnN0ZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMuYXVkaW8gPSBuZXcgU291bmQoKTtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBsZXZlbERhdGE7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydENhbGxCYWNrID0gbGV2ZWxTdGFydENhbGxCYWNrO1xuICAgICAgICB0aGlzLnRpbWVyVGlja2luZyA9IG5ldyBUaW1lclRpY2tpbmcoZ2FtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMucHJvbXB0VGV4dCA9IG5ldyBQcm9tcHRUZXh0KGdhbWUsIHRoaXMsIGxldmVsRGF0YS5wdXp6bGVzW2N1cnJlbnRfcHV6emxlX2luZGV4XSwgbGV2ZWxEYXRhKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5zdG9uZXMgPSBuZXcgU3RvbmVzTGF5ZXIoZ2FtZSwgbGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLCB0aGlzLnBhdXNlQnV0dG9uLCB0aGlzLnJlZHJhd09mU3RvbmVzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wdXp6bGVEYXRhID0gbGV2ZWxEYXRhLnB1enpsZXM7XG4gICAgfVxuICAgIGxldmVsRW5kQ2FsbEJhY2soYnV0dG9uX25hbWUpIHtcbiAgICAgICAgaWYgKCFpc0dhbWVQYXVzZSkge1xuICAgICAgICAgICAgaXNHYW1lUGF1c2UgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzTGV2ZWxFbmRlZCkge1xuICAgICAgICAgICAgICAgIGlzTGV2ZWxFbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudF9wdXp6bGVfaW5kZXggPT0gc2VsZi5wdXp6bGVEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChub01vcmVUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sZXZlbEVuZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc0dhbWVQYXVzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChub01vcmVUYXJnZXQgJiYgYnV0dG9uX25hbWUgIT0gXCJjbG9zZV9idXR0b25cIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RvbmVzLnNldE5ld1B1enpsZShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5hdWRpby5jaGFuZ2VTb3Vyc2UoYXVkaW9VcmwuYnV0dG9uQ2xpY2spO1xuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwibmV4dF9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soYnV0dG9uX25hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNsb3NlX2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgaXNHYW1lUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soYnV0dG9uX25hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG4gICAgcmVkcmF3T2ZTdG9uZXMoc3RhdHVzLCBlbXB0eVRhcmdldCkge1xuICAgICAgICBub01vcmVUYXJnZXQgPSBlbXB0eVRhcmdldDtcbiAgICAgICAgdmFyIGZudHN0aWNPckdydEluZGV4ID0gc2VsZi5nZXRSYW5kb21JbnQoMCwgMSk7XG4gICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VUb0VhdEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgc2VsZi5hdWRpby5jaGFuZ2VTb3Vyc2UoYXVkaW9VcmwubW9uc3RlckhhcHB5KTtcbiAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvLmNoYW5nZVNvdXJzZShhdWRpb1VybC5waHJhc2VBdWRpb3NbZm50c3RpY09yR3J0SW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNob3dGYW50YXN0aWNPckdyZWF0KGZudHN0aWNPckdydEluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuZHJhdygod29yZF9kcm9wcGVkX3N0b25lcyArPSAxKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gMSkpO1xuICAgICAgICAgICAgICAgIHNjb3JlICs9IDEwMDtcbiAgICAgICAgICAgICAgICB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3B1enpsZV9pbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gMSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlVG9TcGl0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBzZWxmLmF1ZGlvLmNoYW5nZVNvdXJzZShhdWRpb1VybC5tb25zdGVyU2FkKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuYXVkaW8uY2hhbmdlU291cnNlKGF1ZGlvVXJsLm1vbnN0ZXJTcGxpdCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRfcHV6emxlX2luZGV4ID09IHNlbGYucHV6emxlRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGkgKiAxMTY2LjY2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGkgKiAxMTY2LjY2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV2ZWxFbmRlZCgpIHtcbiAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soKTtcbiAgICAgICAgaWYgKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyID09IDkpIHtcbiAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcbiAgICAgICAgICAgIG5ldyBHYW1lRW5kU2NlbmUoc2VsZi5nYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ldyBMZXZlbEVuZFNjZW5lKHNlbGYuZ2FtZSwgc2NvcmUsIHNlbGYubW9uc3Rlciwgc2VsZi5sZXZlbEVuZENhbGxCYWNrLCBzZWxmLmxldmVsRGF0YSwgaXNHYW1lUGF1c2UpO1xuICAgICAgICB9XG4gICAgICAgIGlzTGV2ZWxFbmRlZCA9IHRydWU7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgc2VsZi5kZWxldGVPYmplY3RzKCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIExldmVsU3RhcnRMYXllcik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gMztcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbiA9IG5ldyBQYXVzZUJ1dHRvbih0aGlzLmNvbnRleHQsIHRoaXMuY2FuYXZzRWxlbWVudCk7XG4gICAgICAgIHRoaXMubGV2ZWxJbmRpY2F0b3JzID0gbmV3IExldmVsSW5kaWNhdG9ycyh0aGlzLmNvbnRleHQsIHRoaXMuY2FuYXZzRWxlbWVudCwgMCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxmLmlkKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcHJldmlvdXNQbGF5ZWRMZXZlbCA9IHNlbGYubGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbE51bWJlcjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZVByZXZpb3VzUGxheWVkTGV2ZWxcIiwgcHJldmlvdXNQbGF5ZWRMZXZlbCk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICB9XG4gICAgZXhpdEFsbFNjcmVlbnMoKSB7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoTGV2ZWxFbmRMYXllcik7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoTGV2ZWxFbmRCdXR0b25zTGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKExldmVsU3RhcnRMYXllcik7XG4gICAgICAgIHNlbGYubW9uc3Rlci5kZWxldGVDYW52YXMoKTtcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdG9uZUxheWVyKTtcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihUaW1ldGlja2VyTGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFByb21wdFRleHRMYXllcik7XG4gICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9pZGxlNC5wbmdcIik7XG4gICAgICAgIHNlbGYuZGVsZXRlT2JqZWN0cygpO1xuICAgICAgICB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcbiAgICB9XG4gICAgZGVsZXRlT2JqZWN0cygpIHtcbiAgICAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcbiAgICAgICAgZGVsZXRlIHNlbGYuYXVkaW87XG4gICAgICAgIGRlbGV0ZSBzZWxmLmxldmVsSW5kaWNhdG9ycztcbiAgICAgICAgZGVsZXRlIHNlbGYucGF1c2VCdXR0b247XG4gICAgICAgIGRlbGV0ZSBzZWxmLnN0b25lcztcbiAgICAgICAgZGVsZXRlIHNlbGYudGltZXJUaWNraW5nO1xuICAgICAgICBkZWxldGUgc2VsZi5jYW52YXNTdGFjaztcbiAgICAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcbiAgICAgICAgZGVsZXRlIHNlbGYucHJvbXB0VGV4dDtcbiAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggPSAwO1xuICAgICAgICBzY29yZSA9IDA7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuYmdJbWcsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnBpbGxlckltZywgdGhpcy53aWR0aCAqIDAuNiwgdGhpcy5oZWlnaHQgLyA2LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuZmVuY2hJbWcsIC10aGlzLndpZHRoICogMC40LCB0aGlzLmhlaWdodCAvIDMsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gMyk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5oaWxsSW1nLCAtdGhpcy53aWR0aCAqIDAuMjUsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmdyYXNzSW1nLCAtdGhpcy53aWR0aCAqIDAuMjUsIHRoaXMuaGVpZ2h0IC8gMiArICh0aGlzLmhlaWdodCAvIDIpICogMC4xLCB0aGlzLndpZHRoICogMS41LCB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMudGltZXJfZW1wdHksIDAsIHRoaXMuaGVpZ2h0ICogMC4xLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAqIDAuMDUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMucm90YXRpbmdfY2xvY2ssIDUsIHRoaXMuaGVpZ2h0ICogMC4wOSwgdGhpcy53aWR0aCAqIDAuMTIsIHRoaXMuaGVpZ2h0ICogMC4wNik7XG4gICAgICAgIHRoaXMudGltZXJUaWNraW5nLmNyZWF0ZUJhY2tncm91ZCgpO1xuICAgICAgICB0aGlzLnN0b25lcy5kcmF3KCk7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uZHJhdygpO1xuICAgICAgICB0aGlzLmxldmVsSW5kaWNhdG9ycy5kcmF3KCk7XG4gICAgICAgIHRoaXMucHJvbXB0VGV4dC5jcmVhdGVCYWNrZ3JvdW5kKCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgc2VsZi50aW1lclRpY2tpbmcgPyBzZWxmLnRpbWVyVGlja2luZy51cGRhdGUoKSA6IG51bGw7XG4gICAgfVxuICAgIGNoYW5nZVB1enpsZSgpIHtcbiAgICAgICAgaWYgKHNlbGYudGltZXJUaWNraW5nLmlzVGltZXJFbmRlZCkge1xuICAgICAgICAgICAgc2VsZi5zdG9uZXMuaXNUaW1lckVuZGVkKCk7XG4gICAgICAgICAgICB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ICs9IDE7XG4gICAgICAgICAgICBzZWxmLnN0b25lcy5jYW52YXMuc2NlbmUubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRfcHV6emxlX2luZGV4ID09IHNlbGYucHV6emxlRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpc0xldmVsRW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlbGYudGltZXJUaWNraW5nO1xuICAgICAgICAgICAgICAgIG5ldyBMZXZlbEVuZFNjZW5lKHNlbGYuZ2FtZSwgc2NvcmUsIHNlbGYubW9uc3Rlciwgc2VsZi5sZXZlbEVuZENhbGxCYWNrLCBzZWxmLmxldmVsRGF0YSwgaXNHYW1lUGF1c2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHJvbXB0VGV4dChcbiAgICAgICAgICAgICAgICAvLyAgIHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0ucHJvbXB0LnByb21wdFRleHRcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuZHJhdygpO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcgPyAoc2VsZi50aW1lclRpY2tpbmcuaXNUaW1lckVuZGVkID0gZmFsc2UpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVCYWNrZ3JvdWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbG9hZGluZ1NjcmVlbih0cnVlKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgbG9hZEltYWdlcyhpbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYmdJbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UucGlsbGVySW1nLCB3aWR0aCAqIDAuNiwgaGVpZ2h0IC8gNiwgd2lkdGgsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuZmVuY2hJbWcsIC13aWR0aCAqIDAuNCwgaGVpZ2h0IC8gMywgd2lkdGgsIGhlaWdodCAvIDMpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuaGlsbEltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuZ3Jhc3NJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgKyAoaGVpZ2h0IC8gMikgKiAwLjEsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnRpbWVyX2VtcHR5LCAwLCBoZWlnaHQgKiAwLjEsIHdpZHRoLCBoZWlnaHQgKiAwLjA1KTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnJvdGF0aW5nX2Nsb2NrLCA1LCBoZWlnaHQgKiAwLjA5LCB3aWR0aCAqIDAuMTIsIGhlaWdodCAqIDAuMDYpO1xuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuY3JlYXRlQmFja2dyb3VkKCk7XG4gICAgICAgICAgICBzZWxmLnN0b25lcy5kcmF3KCk7XG4gICAgICAgICAgICBzZWxmLnBhdXNlQnV0dG9uLmRyYXcoKTtcbiAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLmRyYXcoKTtcbiAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5jcmVhdGVCYWNrZ3JvdW5kKCk7XG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBGaXJlYmFzZVVzZXJDbGlja2VkLCBGaXJlYmFzZVVzZXJJbnN0YWxsLCBQbGF5QnV0dG9uTGF5ZXIsIFBXQUluc3RhbGxTdGF0dXMsIFN0YXJ0U2NlbmVMYXllciwgVXNlckNhbmNlbGxlZCwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9jb21tb24vc291bmQuanNcIjtcbmltcG9ydCBJbnN0YWxsQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvaW5zdGFsbF9idXR0b24uanNcIjtcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvcGxheV9idXRvb24uanNcIjtcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb25zdGVyLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxTZWxlY3Rpb25TY3JlZW4gfSBmcm9tIFwiLi9sZXZlbC1zZWxlY3Rpb24tc2NlbmUuanNcIjtcbnZhciBiZ0ltZyA9IG5ldyBJbWFnZSgpO1xuYmdJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiO1xudmFyIGhpbGxJbWcgPSBuZXcgSW1hZ2UoKTtcbmhpbGxJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaGlsbF92MDEucG5nXCI7XG52YXIgcGlsbGVySW1nID0gbmV3IEltYWdlKCk7XG5waWxsZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvVG90ZW1fdjAyX3YwMS5wbmdcIjtcbnZhciBncmFzc0ltZyA9IG5ldyBJbWFnZSgpO1xuZ3Jhc3NJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvRkdfYV92MDEucG5nXCI7XG52YXIgZmVuY2hJbWcgPSBuZXcgSW1hZ2UoKTtcbmZlbmNoSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2ZlbmNlX3YwMS5wbmdcIjtcbnZhciB0aXRsZSA9IG5ldyBJbWFnZSgpO1xudGl0bGUuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvdGl0bGUucG5nXCI7XG52YXIgcHJvZmlsZU1vbnN0ZXIgPSBuZXcgSW1hZ2UoKTtcbnByb2ZpbGVNb25zdGVyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2lkbGU0LnBuZ1wiO1xudmFyIHNlbGY7XG5sZXQgcHdhX2luc3RhbGxfc3RhdHVzO1xuY29uc3QgYWJvdXRDb21wYW55RWxlbWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWNvbXBhbnlcIikpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVpbnN0YWxscHJvbXB0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB3YV9pbnN0YWxsX3N0YXR1cyA9IGU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cywgXCJmYWxzZVwiKTtcbn0pO1xuZXhwb3J0IGNsYXNzIFN0YXJ0U2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgZGF0YSwgZmlyZWJhc2VfYW5hbHl0aWNzKSB7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLm1vbnN0ZXIgPSBuZXcgTW9uc3Rlcih0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMucHdhX3N0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXlCdXR0b24oKTtcbiAgICAgICAgdGhpcy5maXJlYmFzZV9hbmFseXRpY3MgPSBmaXJlYmFzZV9hbmFseXRpY3M7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFN0YXJ0U2NlbmVMYXllcik7XG4gICAgICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuYm90dG9tID0gMDtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoYmdJbWcsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShwaWxsZXJJbWcsIHRoaXMud2lkdGggKiAwLjYsIHRoaXMuaGVpZ2h0IC8gNiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShmZW5jaEltZywgLXRoaXMud2lkdGggKiAwLjQsIHRoaXMuaGVpZ2h0IC8gMywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAzKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShoaWxsSW1nLCAtdGhpcy53aWR0aCAqIDAuMjUsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShncmFzc0ltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIgKyAodGhpcy5oZWlnaHQgLyAyKSAqIDAuMSwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aXRsZSwgdGhpcy53aWR0aCAqIDAsIHRoaXMuaGVpZ2h0IC8gNTAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gNik7XG4gICAgfVxuICAgIGNyZWF0ZVBsYXlCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHBsYXlCdXR0b25MYXllckVsZW1lbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUGxheUJ1dHRvbkxheWVyKSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBwbGF5QnV0dG9uSWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBQbGF5QnV0dG9uTGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbGF5QnV0dG9uSWQpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gNztcbiAgICAgICAgaWYgKHRoaXMucHdhX3N0YXR1cyA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgc2VsZi5wbGF5QnV0dG9uID0gbmV3IFBsYXlCdXR0b24oc2VsZi5idXR0b25Db250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjM1LCBzZWxmLmNhbnZhcy5oZWlnaHQgLyA3KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYucGxheUJ1dHRvbiA9IG5ldyBJbnN0YWxsQnV0dG9uKHNlbGYuYnV0dG9uQ29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC4zNSwgc2VsZi5jYW52YXMuaGVpZ2h0IC8gNSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUGxheUJ1dHRvbkxheWVyKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucGxheUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzLmxvZ0V2ZW50KEZpcmViYXNlVXNlckNsaWNrZWQsIFwiY2xpY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHdhX3N0YXR1cyA9PSBcImZhbHNlXCIgfHwgIXNlbGYucHdhX3N0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHdhX2luc3RhbGxfc3RhdHVzLnByb21wdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBvdXRjb21lIH0gPSB5aWVsZCBwd2FfaW5zdGFsbF9zdGF0dXMudXNlckNob2ljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRjb21lID09PSBcImFjY2VwdGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwd2FfaW5zdGFsbF9zdGF0dXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYnEoXCJ0cmFja0N1c3RvbVwiLCBGaXJlYmFzZVVzZXJJbnN0YWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcImluc3RhbGxfY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmViYXNlX2FuYWx5dGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzLmxvZ0V2ZW50KEZpcmViYXNlVXNlckluc3RhbGwsIFwiSW5zdGFsbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgVXNlckNhbmNlbGxlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjYW5jZWxfY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmViYXNlX2FuYWx5dGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzLmxvZ0V2ZW50KFVzZXJDYW5jZWxsZWQsIFwiQ2FuY2VsbGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93Lm1hdGNoTWVkaWEoXCIoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKVwiKS5tYXRjaGVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wd2Ffc3RhdHVzID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQV0EgaXMgaW5zdGFsbGVkIG9uIHlvdXIgZGV2aWNlIFxcblBsZWFzZSBwbGF5IGZyb20gdGhlcmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dENvbXBhbnlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgU291bmQoKS5jaGFuZ2VTb3Vyc2UoXCIuL2Fzc2V0cy9hdWRpb3MvQnV0dG9uQ2xpY2sud2F2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExldmVsU2VsZWN0aW9uU2NyZWVuKHNlbGYuY2FudmFzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFBsYXlCdXR0b25MYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdGFydFNjZW5lTGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIENhbnZhc1N0YWNrO1xuKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBjbGFzcyBMYXllciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHsgY2FudmFzSUQsIGNhbnZhc0VsZW1lbnQsIH0pIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBjYW52YXNJRDtcbiAgICAgICAgICAgIHRoaXMuY0VsZW0gPSBjYW52YXNFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5kcmFnT2JqZWN0cyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIENhbnZhc1N0YWNrID0gY2xhc3Mge1xuICAgICAgICBjb25zdHJ1Y3RvcihjdnNJRCwgc3RhY2tMaW1pdCkge1xuICAgICAgICAgICAgY29uc3Qgc2F2VGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmNJZCA9IGN2c0lEO1xuICAgICAgICAgICAgdGhpcy5zdGFja0xpbWl0ID0gc3RhY2tMaW1pdCB8fCAxMjtcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3ZzSUQpO1xuICAgICAgICAgICAgdGhpcy5yYXdXaWR0aCA9IHRoaXMuYmtnQ2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5yYXdIZWlnaHQgPSB0aGlzLmJrZ0NhbnZhcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5yZXNpemVGbnMgPSBbXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5ia2dDYW52YXMuaGFzT3duUHJvcGVydHkoXCJsYXllcnNcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgYmtnTCA9IG5ldyBMYXllcih7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc0lEOiB0aGlzLmNJZCxcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzRWxlbWVudDogdGhpcy5ia2dDYW52YXMsXG4gICAgICAgICAgICAgICAgfSk7IC8vIGJrZ0NhbnZhcyBpcyBhbHdheXMgbGF5ZXJbMF1cbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnNbMF0gPSBia2dMO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmJrZ0NhbnZhcy5oYXNPd25Qcm9wZXJ0eShcInVuaXF1ZVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnVuaXF1ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlTGF5ZXIoaGVpZ2h0LCB3aWR0aCwgbGF5ZXJJZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTGF5ZXJFeGlzdChsYXllcklkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHcgPSB3aWR0aCArIFwicHhcIiwgaCA9IGhlaWdodCArIFwicHhcIiwgbkx5cnMgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoOyAvLyBia2cgaXMgbGF5ZXIgMCBzbyBhdCBsZWFzdCAxXG4gICAgICAgICAgICAgICAgaWYgKCEodGhpcy5ia2dDYW52YXMgJiYgdGhpcy5ia2dDYW52YXMubGF5ZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoID49IHRoaXMuc3RhY2tMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzU3RhY2s6IHRvbyBtYW55IGxheWVyc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy51bmlxdWUgKz0gMTsgLy8gYSBwcml2YXRlIHN0YXRpYyB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHVuaXF1ZVRhZyA9IHRoaXMuYmtnQ2FudmFzLnVuaXF1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG92bElkID0gdGhpcy5jSWQgKyBcIl9vdmxfXCIgKyB1bmlxdWVUYWc7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSWQgPSBsYXllcklkO1xuICAgICAgICAgICAgICAgIGNvbnN0IG92bEhUTUwgPSBcIjxjYW52YXMgaWQ9J1wiICtcbiAgICAgICAgICAgICAgICAgICAgb3ZsSWQgK1xuICAgICAgICAgICAgICAgICAgICBcIicgc3R5bGU9J3Bvc2l0aW9uOmFic29sdXRlJyB3aWR0aD0nXCIgK1xuICAgICAgICAgICAgICAgICAgICB3ICtcbiAgICAgICAgICAgICAgICAgICAgXCInIGhlaWdodD0nXCIgK1xuICAgICAgICAgICAgICAgICAgICBoICtcbiAgICAgICAgICAgICAgICAgICAgXCInPjwvY2FudmFzPlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcEN2cyA9IHRoaXMuYmtnQ2FudmFzLmxheWVyc1tuTHlycyAtIDFdLmNFbGVtO1xuICAgICAgICAgICAgICAgIHRvcEN2cy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBvdmxIVE1MKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdmxJZCk7XG4gICAgICAgICAgICAgICAgbmV3Q3ZzLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUubGVmdCA9IFwiNTAlXCI7XG4gICAgICAgICAgICAgICAgbmV3Q3ZzLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIDAlKVwiO1xuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS5oZWlnaHQgPSBoO1xuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS53aWR0aCA9IHc7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0wgPSBuZXcgTGF5ZXIoeyBjYW52YXNJRDogb3ZsSWQsIGNhbnZhc0VsZW1lbnQ6IG5ld0N2cyB9KTtcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHRoZSBJRCBpbiBhbiBhcnJheSB0byBmYWNpbGl0YXRlIHJlbW92YWxcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMucHVzaChuZXdMKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3ZsSWQ7IC8vIHJldHVybiB0aGUgbmV3IGNhbnZhcyBpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUxheWVyKG92bHlJZCkge1xuICAgICAgICAgICAgLy8gY2hlY2sgYmFja2dyb3VuZCBjYW52YXMgaXMgc3RpbGwgdGhlcmVcbiAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJrZ0NhbnZhcy5sYXllcnNbaV0uaWQgPT09IG92bHlJZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3ZsTm9kZSA9IHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5jRWxlbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92bE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92bE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdmxOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBub3cgZGVsZXRlIGxheWVycyBhcnJheSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVycy5zcGxpY2UoaSwgMSk7IC8vIGRlbGV0ZSB0aGUgTGF5ZXIgb2JqZWN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUFsbExheWVycygpIHtcbiAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgb3ZsTm9kZSA9IHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5jRWxlbTtcbiAgICAgICAgICAgICAgICBpZiAob3ZsTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3JwaGFuID0gb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBvcnBoYW4gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBub3cgZGVsZXRlIGxheWVycyBhcnJheSBlbGVtZW50XG4gICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNsZWFyIGFueSByZXNpemUgY2FsbGJhY2tzLCB0aGUgbGF5ZXJzIGFyZSBnb25lXG4gICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5yZXNpemVGbnMubGVuZ3RoID0gMDsgLy8gcmVtb3ZlIGFueSBhZGRlZCBoYW5kbGVycywgbGVhdmUgdGhlIGJhc2ljXG4gICAgICAgIH1cbiAgICAgICAgaXNMYXllckV4aXN0KGxheWVySUQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5pZCA9PT0gbGF5ZXJJRCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcbiIsInRyeXtzZWxmW1wid29ya2JveDp3aW5kb3c6NC4zLjFcIl0mJl8oKX1jYXRjaChuKXt9dmFyIG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSl7dmFyIGU9bmV3IE1lc3NhZ2VDaGFubmVsO2UucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKG4pe3JldHVybiBpKG4uZGF0YSl9LG4ucG9zdE1lc3NhZ2UodCxbZS5wb3J0Ml0pfSl9O2Z1bmN0aW9uIHQobix0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIGU9dFtpXTtlLmVudW1lcmFibGU9ZS5lbnVtZXJhYmxlfHwhMSxlLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBlJiYoZS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sZS5rZXksZSl9fWZ1bmN0aW9uIGkobil7aWYodm9pZCAwPT09bil0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIG59dHJ5e3NlbGZbXCJ3b3JrYm94OmNvcmU6NC4zLjFcIl0mJl8oKX1jYXRjaChuKXt9dmFyIGU9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMucHJvbWlzZT1uZXcgUHJvbWlzZShmdW5jdGlvbih0LGkpe24ucmVzb2x2ZT10LG4ucmVqZWN0PWl9KX0scj1mdW5jdGlvbihuLHQpe3JldHVybiBuZXcgVVJMKG4sbG9jYXRpb24pLmhyZWY9PT1uZXcgVVJMKHQsbG9jYXRpb24pLmhyZWZ9LG89ZnVuY3Rpb24obix0KXtPYmplY3QuYXNzaWduKHRoaXMsdCx7dHlwZTpufSl9O2Z1bmN0aW9uIHUobil7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGk9MDtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXRbaV09YXJndW1lbnRzW2ldO3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4uYXBwbHkodGhpcyx0KSl9Y2F0Y2gobil7cmV0dXJuIFByb21pc2UucmVqZWN0KG4pfX19ZnVuY3Rpb24gYShuLHQsaSl7cmV0dXJuIGk/dD90KG4pOm46KG4mJm4udGhlbnx8KG49UHJvbWlzZS5yZXNvbHZlKG4pKSx0P24udGhlbih0KTpuKX1mdW5jdGlvbiBzKCl7fXZhciBjPWZ1bmN0aW9uKGMpe3ZhciBmLGg7ZnVuY3Rpb24gdihuLHQpe3ZhciByO3JldHVybiB2b2lkIDA9PT10JiYodD17fSksKHI9Yy5jYWxsKHRoaXMpfHx0aGlzKS50PW4sci5pPXQsci5vPTAsci51PW5ldyBlLHIucz1uZXcgZSxyLmg9bmV3IGUsci52PXIudi5iaW5kKGkoaShyKSkpLHIubD1yLmwuYmluZChpKGkocikpKSxyLmc9ci5nLmJpbmQoaShpKHIpKSksci5tPXIubS5iaW5kKGkoaShyKSkpLHJ9aD1jLChmPXYpLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSxmLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1mLGYuX19wcm90b19fPWg7dmFyIGwsdyxnLGQ9di5wcm90b3R5cGU7cmV0dXJuIGQucmVnaXN0ZXI9dShmdW5jdGlvbihuKXt2YXIgdCxpLGU9dGhpcyx1PSh2b2lkIDA9PT1uP3t9Om4pLmltbWVkaWF0ZSxjPXZvaWQgMCE9PXUmJnU7cmV0dXJuIHQ9ZnVuY3Rpb24oKXtyZXR1cm4gZS5wPUJvb2xlYW4obmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciksZS5QPWUuUigpLGEoZS5rKCksZnVuY3Rpb24obil7ZS5CPW4sZS5QJiYoZS5PPWUuUCxlLnMucmVzb2x2ZShlLlApLGUuaC5yZXNvbHZlKGUuUCksZS5qKGUuUCksZS5QLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLGUubCx7b25jZTohMH0pKTt2YXIgdD1lLkIud2FpdGluZztyZXR1cm4gdCYmcih0LnNjcmlwdFVSTCxlLnQpJiYoZS5PPXQsUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe2UuZGlzcGF0Y2hFdmVudChuZXcgbyhcIndhaXRpbmdcIix7c3c6dCx3YXNXYWl0aW5nQmVmb3JlUmVnaXN0ZXI6ITB9KSl9KSksZS5PJiZlLnUucmVzb2x2ZShlLk8pLGUuQi5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlZm91bmRcIixlLmcpLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250cm9sbGVyY2hhbmdlXCIsZS5tLHtvbmNlOiEwfSksXCJCcm9hZGNhc3RDaGFubmVsXCJpbiBzZWxmJiYoZS5DPW5ldyBCcm9hZGNhc3RDaGFubmVsKFwid29ya2JveFwiKSxlLkMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixlLnYpKSxuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUudiksZS5CfSl9LChpPWZ1bmN0aW9uKCl7aWYoIWMmJlwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUpcmV0dXJuIGZ1bmN0aW9uKG4sdCl7aWYoIXQpcmV0dXJuIG4mJm4udGhlbj9uLnRoZW4ocyk6UHJvbWlzZS5yZXNvbHZlKCl9KG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pe3JldHVybiBhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG4pfSkpfSgpKSYmaS50aGVuP2kudGhlbih0KTp0KGkpfSksZC5nZXRTVz11KGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuT3x8dGhpcy51LnByb21pc2V9KSxkLm1lc3NhZ2VTVz11KGZ1bmN0aW9uKHQpe3JldHVybiBhKHRoaXMuZ2V0U1coKSxmdW5jdGlvbihpKXtyZXR1cm4gbihpLHQpfSl9KSxkLlI9ZnVuY3Rpb24oKXt2YXIgbj1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyO2lmKG4mJnIobi5zY3JpcHRVUkwsdGhpcy50KSlyZXR1cm4gbn0sZC5rPXUoZnVuY3Rpb24oKXt2YXIgbj10aGlzO3JldHVybiBmdW5jdGlvbihuLHQpe3RyeXt2YXIgaT1uKCl9Y2F0Y2gobil7cmV0dXJuIHQobil9cmV0dXJuIGkmJmkudGhlbj9pLnRoZW4odm9pZCAwLHQpOml9KGZ1bmN0aW9uKCl7cmV0dXJuIGEobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIobi50LG4uaSksZnVuY3Rpb24odCl7cmV0dXJuIG4uTD1wZXJmb3JtYW5jZS5ub3coKSx0fSl9LGZ1bmN0aW9uKG4pe3Rocm93IG59KX0pLGQuaj1mdW5jdGlvbih0KXtuKHQse3R5cGU6XCJXSU5ET1dfUkVBRFlcIixtZXRhOlwid29ya2JveC13aW5kb3dcIn0pfSxkLmc9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLkIuaW5zdGFsbGluZzt0aGlzLm8+MHx8IXIobi5zY3JpcHRVUkwsdGhpcy50KXx8cGVyZm9ybWFuY2Uubm93KCk+dGhpcy5MKzZlND8odGhpcy5XPW4sdGhpcy5CLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLHRoaXMuZykpOih0aGlzLk89bix0aGlzLnUucmVzb2x2ZShuKSksKyt0aGlzLm8sbi5hZGRFdmVudExpc3RlbmVyKFwic3RhdGVjaGFuZ2VcIix0aGlzLmwpfSxkLmw9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxpPW4udGFyZ2V0LGU9aS5zdGF0ZSxyPWk9PT10aGlzLlcsdT1yP1wiZXh0ZXJuYWxcIjpcIlwiLGE9e3N3Omksb3JpZ2luYWxFdmVudDpufTshciYmdGhpcy5wJiYoYS5pc1VwZGF0ZT0hMCksdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKHUrZSxhKSksXCJpbnN0YWxsZWRcIj09PWU/dGhpcy5fPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcImluc3RhbGxlZFwiPT09ZSYmdC5CLndhaXRpbmc9PT1pJiZ0LmRpc3BhdGNoRXZlbnQobmV3IG8odStcIndhaXRpbmdcIixhKSl9LDIwMCk6XCJhY3RpdmF0aW5nXCI9PT1lJiYoY2xlYXJUaW1lb3V0KHRoaXMuXykscnx8dGhpcy5zLnJlc29sdmUoaSkpfSxkLm09ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5PO3Q9PT1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyJiYodGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwiY29udHJvbGxpbmdcIix7c3c6dCxvcmlnaW5hbEV2ZW50Om59KSksdGhpcy5oLnJlc29sdmUodCkpfSxkLnY9ZnVuY3Rpb24obil7dmFyIHQ9bi5kYXRhO3RoaXMuZGlzcGF0Y2hFdmVudChuZXcgbyhcIm1lc3NhZ2VcIix7ZGF0YTp0LG9yaWdpbmFsRXZlbnQ6bn0pKX0sbD12LCh3PVt7a2V5OlwiYWN0aXZlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucy5wcm9taXNlfX0se2tleTpcImNvbnRyb2xsaW5nXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaC5wcm9taXNlfX1dKSYmdChsLnByb3RvdHlwZSx3KSxnJiZ0KGwsZyksdn0oZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7dGhpcy5EPXt9fXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlQobikuYWRkKHQpfSx0LnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlQobikuZGVsZXRlKHQpfSx0LmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24obil7bi50YXJnZXQ9dGhpcyx0aGlzLlQobi50eXBlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0KG4pfSl9LHQuVD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5EW25dPXRoaXMuRFtuXXx8bmV3IFNldH0sbn0oKSk7ZXhwb3J0e2MgYXMgV29ya2JveCxuIGFzIG1lc3NhZ2VTV307XG4vLyMgc291cmNlTWFwcGluZ1VSTD13b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3NyYy9kYXRhL2FwaS1kYXRhLmpzXCI7XG5pbXBvcnQgeyBEYXRhTW9kYWwgfSBmcm9tIFwiLi9zcmMvZGF0YS9kYXRhLW1vZGFsLmpzXCI7XG5pbXBvcnQgeyBTdGFydFNjZW5lIH0gZnJvbSBcIi4vc3JjL3NjZW5lcy9zdGFydC1zY2VuZS5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi9zcmMvdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IGZpcmViYXNlQ29uZmlnIH0gZnJvbSBcIi4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2NvbmZpZy5qc1wiO1xuaW1wb3J0IHsgV29ya2JveCB9IGZyb20gXCJ3b3JrYm94LXdpbmRvd1wiO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEubXNnID09ICdVcGRhdGUgRm91bmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gXCJVcGRhdGUgRm91bmRcXG5QcmVzcyBvayB0byB1cGRhdGUuXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKHRleHQpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIllvdSBjYW5jZWxlZCFcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHdiID0gbmV3IFdvcmtib3goJy4vc3cuanMnKTtcbiAgICAgICAgICAgIHdiLnJlZ2lzdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLmFuYWx5dGljcyA9IGZpcmViYXNlLmFuYWx5dGljcyh0aGlzLmFwcCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGggPiA0MjAgPyA0MjAgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgbGV0IGRhdGEgPSB5aWVsZCBnZXREYXRhKCk7XG4gICAgICAgIGxldCBkID0gbmV3IERhdGFNb2RhbChkYXRhLk90aGVyQXVkaW9zLCBkYXRhLkxldmVscywgZGF0YS5GZWVkYmFja1RleHRzLCBkYXRhLlJpZ2h0VG9MZWZ0LCBkYXRhLkZlZWRiYWNrQXVkaW9zKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGggPiA0MjAgPyA0MjAgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1vbnN0ZXI7XG4gICAgICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuZGVsZXRlQWxsTGF5ZXJzKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdGFydFNjZW5lO1xuICAgICAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gbmV3IFN0YXJ0U2NlbmUoY2FudmFzLCBkLCB0aGlzLmFuYWx5dGljcyk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gbmV3IFN0YXJ0U2NlbmUoY2FudmFzLCBkLCB0aGlzLmFuYWx5dGljcyk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==