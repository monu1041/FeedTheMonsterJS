/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./global-variables.js":
/*!*****************************!*\
  !*** ./global-variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lang": () => (/* binding */ lang)
/* harmony export */ });
const urlParams = new URLSearchParams(window.location.search);
var lang = urlParams.get("ftm_language");


/***/ }),

/***/ "./src/common/common.js":
/*!******************************!*\
  !*** ./src/common/common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonClick": () => (/* binding */ ButtonClick),
/* harmony export */   "CachedLanguages": () => (/* binding */ CachedLanguages),
/* harmony export */   "FeedbackAudio": () => (/* binding */ FeedbackAudio),
/* harmony export */   "FirebaseUserClicked": () => (/* binding */ FirebaseUserClicked),
/* harmony export */   "FirebaseUserInstall": () => (/* binding */ FirebaseUserInstall),
/* harmony export */   "GameEndLayer": () => (/* binding */ GameEndLayer),
/* harmony export */   "IntroMusic": () => (/* binding */ IntroMusic),
/* harmony export */   "LevelEndAudio": () => (/* binding */ LevelEndAudio),
/* harmony export */   "LevelEndButtonsLayer": () => (/* binding */ LevelEndButtonsLayer),
/* harmony export */   "LevelEndLayer": () => (/* binding */ LevelEndLayer),
/* harmony export */   "LevelSelectionLayer": () => (/* binding */ LevelSelectionLayer),
/* harmony export */   "LevelStartLayer": () => (/* binding */ LevelStartLayer),
/* harmony export */   "MonsterAudio": () => (/* binding */ MonsterAudio),
/* harmony export */   "MonsterLayer": () => (/* binding */ MonsterLayer),
/* harmony export */   "NativePlayButton": () => (/* binding */ NativePlayButton),
/* harmony export */   "PWAInstallStatus": () => (/* binding */ PWAInstallStatus),
/* harmony export */   "PausePopupLayer": () => (/* binding */ PausePopupLayer),
/* harmony export */   "PhraseAudio": () => (/* binding */ PhraseAudio),
/* harmony export */   "PlayButtonLayer": () => (/* binding */ PlayButtonLayer),
/* harmony export */   "PreviousPlayedLevel": () => (/* binding */ PreviousPlayedLevel),
/* harmony export */   "PromptAudio": () => (/* binding */ PromptAudio),
/* harmony export */   "PromptTextLayer": () => (/* binding */ PromptTextLayer),
/* harmony export */   "StartSceneLayer": () => (/* binding */ StartSceneLayer),
/* harmony export */   "StoneLayer": () => (/* binding */ StoneLayer),
/* harmony export */   "StoneMusic": () => (/* binding */ StoneMusic),
/* harmony export */   "StoreMonsterPhaseNumber": () => (/* binding */ StoreMonsterPhaseNumber),
/* harmony export */   "TimeOver": () => (/* binding */ TimeOver),
/* harmony export */   "TimetickerLayer": () => (/* binding */ TimetickerLayer),
/* harmony export */   "UserCancelled": () => (/* binding */ UserCancelled),
/* harmony export */   "loadImages": () => (/* binding */ loadImages),
/* harmony export */   "loadingScreen": () => (/* binding */ loadingScreen)
/* harmony export */ });
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");


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
    const loadingElement = document.getElementById("loading-screen");
    const loadingText = document.getElementById("loading_text");
    loadingText.style.display = "none";
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
const PreviousPlayedLevel = "storePreviousPlayedLevel" + _global_variables_js__WEBPACK_IMPORTED_MODULE_1__.lang;
const StoreMonsterPhaseNumber = "storeMonsterPhaseNumber" + _global_variables_js__WEBPACK_IMPORTED_MODULE_1__.lang;
const CachedLanguages = "cached_languages";
const MonsterAudio = "monster_audio";
const FeedbackAudio = "feedback_audio";
const IntroMusic = "intro_music";
const PromptAudio = "prompt_audio";
const ButtonClick = "button_click";
const TimeOver = "time_over";
const StoneMusic = "stone_music";
const PhraseAudio = "phrase_audio";
const LevelEndAudio = "level_end_audio";


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
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common/common.js");

let inactive_screen = false;
class Sound {
    constructor() {
        this.monster_audio = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.MonsterAudio);
        this.feedback_audio = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.FeedbackAudio);
        this.intro_music = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.IntroMusic);
        this.prompt_audio = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.PromptAudio);
        this.button_click = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.ButtonClick);
        this.time_over = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.TimeOver);
        this.stone_music = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.StoneMusic);
        this.phrase_audio = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.PhraseAudio);
        this.level_end_audio = document.getElementById(_common_js__WEBPACK_IMPORTED_MODULE_0__.PhraseAudio);
    }
    playSound(src, type) {
        switch (type) {
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.MonsterAudio: {
                this.monster_audio.src = src;
                this.monster_audio.play();
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.FeedbackAudio: {
                this.feedback_audio.src = src;
                this.feedback_audio.play();
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.IntroMusic: {
                this.intro_music.src = src;
                this.intro_music.play();
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.PromptAudio: {
                this.prompt_audio.src = src;
                this.prompt_audio.play();
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.ButtonClick: {
                this.button_click.src = src;
                this.button_click.play();
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.TimeOver: {
                this.time_over.src = src;
                this.time_over.play();
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.StoneMusic: {
                this.stone_music.src = src;
                this.stone_music.play();
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.PhraseAudio: {
                this.phrase_audio.src = src;
                this.phrase_audio.play();
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndAudio: {
                this.level_end_audio.src = src;
                this.level_end_audio.play();
                break;
            }
            default:
                break;
        }
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
        this.monster_audio.pause();
        this.feedback_audio.pause();
        this.intro_music.pause();
        this.level_end_audio.pause();
        this.phrase_audio.pause();
        this.time_over.pause();
        this.stone_music.pause();
        this.prompt_audio.pause();
        this.button_click.pause();
        this.time_over.pause();
        // this.introAudio.pause();
        // this.audio ? this.audio.pause() : null;
        // this.audio2 ? this.audio1.pause() : null;
        // this.audio2 ? this.audio2.pause() : null;
    }
    changeSourse(src) {
        // this.audio.src = src;
        // this.playSound(src);
    }
    playLevelEndHappyAudio(levelWinAudio) {
        // this.audio.src = levelWinAudio;
        // this.playSound(levelWinAudio);
        // setTimeout(() => {
        //   this.introAudio.play();
        // }, 700);
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
            self.context.drawImage(level_indicator, self.canvas.width * 0.15, 0, self.canvas.width * 0.35, self.canvas.height * 0.09);
            bar_empty.onload = function (e) {
                for (var i = 0; i < 5; i++) {
                    self.context.drawImage(bar_empty, ((self.canvas.width * 0.35) / 7) * (i + 1) +
                        self.canvas.width * 0.15, (self.canvas.height * 0.09) / 2 - (self.canvas.height * 0.09) / 6, (self.canvas.width * 0.35) / 10, (self.canvas.height * 0.09) / 3);
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
                self.context.drawImage(bar_full, ((self.canvas.width * 0.35) / 7) * (i + 1) + self.canvas.width * 0.15, (self.canvas.height * 0.09) / 2 - (self.canvas.height * 0.09) / 6, (self.canvas.width * 0.35) / 10, (self.canvas.height * 0.09) / 3);
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
var monsterPhaseNumber = localStorage.getItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StoreMonsterPhaseNumber) || 1;
console.log(">>>>>>>>>.");
console.log(monsterPhaseNumber);
var eatImg = new Image();
eatImg.src = "./assets/images/eat1" + monsterPhaseNumber + ".png";
var idleImg = new Image();
idleImg.src = "./assets/images/idle1" + monsterPhaseNumber + ".png";
var spitImg = new Image();
spitImg.src = "./assets/images/spit1" + monsterPhaseNumber + ".png";
var dragImg = new Image();
dragImg.src = "./assets/images/drag1" + monsterPhaseNumber + ".png";
console.log("monsterexecuting");
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
        this.canavsElement.style.zIndex = "6";
        this.canavsElement.style.bottom = "0";
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
        this.animation(0);
        // if (this.frameY == 1) {
        //   this.frameY = 0;
        // } else {
        //   this.frameY = 1;
        // }
        this.image.src = src;
    }
    changePhaseNumber(monsterPhaseNum) {
        console.log("monster changing");
        eatImg = new Image();
        eatImg.src = "./assets/images/eat1" + monsterPhaseNum + ".png";
        idleImg = new Image();
        idleImg.src = "./assets/images/idle1" + monsterPhaseNum + ".png";
        spitImg = new Image();
        spitImg.src = "./assets/images/spit1" + monsterPhaseNum + ".png";
        dragImg = new Image();
        dragImg.src = "./assets/images/drag1" + monsterPhaseNum + ".png";
        console.log(eatImg.src);
        console.log(idleImg.src);
        console.log(spitImg.src);
        console.log(monsterPhaseNumber);
    }
    changeToDragAnimation() {
        this.image = dragImg;
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
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");



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
        this.fantastic_image.src = "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_2__.lang + "/images/fantastic_01.png";
        this.fntstOrGrtImgArr.push(this.fantastic_image);
        this.great_image = new Image();
        this.great_image.src = "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_2__.lang + "/images/great_01.png";
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
        const x = this.width / 2;
        const y = this.height * 0.26;
        var fontSize = 20;
        var letterHighlight = this.currentPuzzleData.targetStones[0].split("");
        for (let i = 0; i < promptTextLetters.length; i++) {
            // this.context.textAlign = "center";
            switch (this.levelData.levelMeta.levelType) {
                case "LetterInWord": {
                    if (letterHighlight.includes(promptTextLetters[i])) {
                        letterHighlight = letterHighlight.slice(1, letterHighlight.length);
                        this.context.fillStyle = "red";
                        this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                    }
                    else {
                        this.context.fillStyle = "black";
                        this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                    }
                    break;
                }
                case "Word": {
                    if (droppedStones > i || droppedStones == undefined) {
                        this.context.fillStyle = "black";
                        this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                    }
                    else {
                        this.context.fillStyle = "red";
                        this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                    }
                    break;
                }
                default: {
                    this.context.fillStyle = "black";
                    this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
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
const dragAudio = new Audio();
dragAudio.src = "./assets/audios/onDrag.mp3";
dragAudio.preload = "auto";
class StonesLayer {
    constructor(canvas, puzzleData, pausebutton, callBack, levelStart) {
        this.pickedStones = [];
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
        this.levelStart.audio.playSound(this.puzzleData.prompt.promptAudio, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PromptAudio);
        gs.puzzle.stones = [];
        gs.puzzle.target = [];
        for (let target of this.puzzleData.targetStones) {
            gs.puzzle.target.push(target);
        }
        gs.puzzle.stones = this.gameStoneOptions(this.puzzleData.foilStones, this.puzzleData.targetStones);
        gs.puzzle.prompt = this.puzzleData.prompt.promptText;
    }
    isTimerEnded() {
        pickedStone = null;
        this.pickedStones = [];
    }
    gameStoneOptions(foilStones, targetStones) {
        targetStones.forEach((e) => {
            foilStones.indexOf(e) != -1
                ? foilStones.splice(foilStones.indexOf(e), 1)
                : null;
        });
        targetStones.forEach((e) => {
            foilStones.push(e);
        });
        return foilStones.sort(() => Math.random() - 0.5);
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
                self.levelStart.audio.playSound(self.puzzleData.prompt.promptAudio, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PromptAudio);
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
                    dragAudio.currentTime = 0;
                    dragAudio.play();
                    pickedStone = s;
                    self.callBack('dragMonsterAnimation');
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
                        self.pickedStones.push(pickedStone.text);
                        gs.puzzle.target.shift();
                        if (gs.puzzle.target.length == 0) {
                            gs.stones = [];
                            self.callBack(undefined, true, true, pickedStone.text, self.pickedStones);
                            self.pickedStones = [];
                        }
                        else {
                            self.callBack(undefined, true, false, pickedStone.text, self.pickedStones);
                        }
                    }
                    else {
                        self.pickedStones.push(pickedStone.text);
                        gs.stones = [];
                        self.callBack(undefined, false, true, pickedStone.text, self.pickedStones);
                        self.pickedStones = [];
                    }
                }
                pickedStone = null;
            }
            if (pickedStone) {
                pickedStone.x = pickedStone.origx;
                pickedStone.y = pickedStone.origy;
                self.callBack('stopDragMonsterAnimation');
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
                this.levelStart.audio.playSound("./assets/audios/timeout.mp3", _common_common_js__WEBPACK_IMPORTED_MODULE_0__.TimeOver);
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
        }, 5000);
    }
    stopTimer() {
        this.isTimerStarted = false;
        console.log("Timer Stopped");
    }
    pauseTimer() {
        this.isTimerStarted = false;
        this.pauseButtonClicked = true;
    }
    resumeTimer() {
        this.isTimerStarted = true;
        this.pauseButtonClicked = false;
    }
    draw() {
        this.isTimerStarted = false;
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.timer_full, this.game.width * 0.12, this.height * 0.099, this.game.width - 50, this.height * 0.05);
        this.timer = 0;
        this.beginTimerOnStart();
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
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const URL = "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + "/ftm_" + _global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + ".json";
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
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");

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
        localStorage.setItem(_global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + "Profile", data);
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
    const data = JSON.parse(localStorage.getItem(_global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + "Profile") || "{}");
    return data;
}


/***/ }),

/***/ "./src/firebase/firebase_config.ts":
/*!*****************************************!*\
  !*** ./src/firebase/firebase_config.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseConfig": () => (/* binding */ firebaseConfig)
/* harmony export */ });
const firebaseConfig = {
  apiKey: "AIzaSyB8c2lBVi26u7YRL9sxOP97Uaq3yN8hTl4",
  authDomain: "ftm-b9d99.firebaseapp.com",
  databaseURL: "https://ftm-b9d99.firebaseio.com",
  projectId: "ftm-b9d99",
  storageBucket: "ftm-b9d99.appspot.com",
  messagingSenderId: "602402387941",
  appId: "1:602402387941:web:a63f4eaddc949f539de10c",
  measurementId: "G-FVLSN7D7NM",
};


/***/ }),

/***/ "./src/firebase/firebase_integration.js":
/*!**********************************************!*\
  !*** ./src/firebase/firebase_integration.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseIntegration": () => (/* binding */ FirebaseIntegration)
/* harmony export */ });
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase_config */ "./src/firebase/firebase_config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class FirebaseIntegration {
    static initializeFirebase() {
        return __awaiter(this, void 0, void 0, function* () {
            this.firebaseApp = firebase.initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_0__.firebaseConfig);
            this.analytics = firebase.analytics(this.firebaseApp);
        });
    }
    static sessionEnd() {
        this.analytics.logEvent("session_end");
    }
    static customEvents(key, value) {
        this.analytics.logEvent(key, value);
    }
}


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
        document.getElementById("discription-text").innerHTML = globalThis.descriptionText;
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
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _level_start_scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-start-scene.js */ "./src/scenes/level-start-scene.js");


var animationFrame;
var self;
class Game {
    constructor(width, height, puzzleData, gameSceneCallBack) {
        this.width = width;
        this.height = height;
        this.monsterPhaseNumber =
            localStorage.getItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StoreMonsterPhaseNumber) || 1;
        this.scene = new _level_start_scene_js__WEBPACK_IMPORTED_MODULE_1__.LevelStartScene({
            game: this,
            levelData: puzzleData,
            levelStartCallBack: this.levelStartCallBack,
            monsterPhaseNumber: this.monsterPhaseNumber,
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
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _components_buttons_close_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/close_button.js */ "./src/components/buttons/close_button.js");
/* harmony import */ var _components_buttons_next_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttons/next_button.js */ "./src/components/buttons/next_button.js");
/* harmony import */ var _components_buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/buttons/retry_button.js */ "./src/components/buttons/retry_button.js");
/* harmony import */ var _data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/profile-data.js */ "./src/data/profile-data.js");
/* harmony import */ var _firebase_firebase_integration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/firebase_integration.js */ "./src/firebase/firebase_integration.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");








var audioUrl = {
    levelWin: "./assets/audios/LevelWinFanfare.mp3",
    levelLose: "./assets/audios/LevelLoseFanfare.mp3",
    intro: "./assets/audios/intro.wav",
};
class LevelEndScene {
    constructor(canvas, score, monster, levelEndCallBack, levelData, isGamePause, monsterPhaseNumber, levelStartTime) {
        this.canvas = canvas;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_7__.CanvasStack("canvas");
        this.monster = monster;
        this.levelData = levelData;
        this.isGamePause = isGamePause;
        this.monsterPhaseNumber = monsterPhaseNumber || 1;
        this.levelStartTime = levelStartTime;
        this.levelEndTime = new Date();
        this.score = score;
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
        this.createCanvas();
        this.levelEndFirebaseEvents();
        this.levelEndCallBack = levelEndCallBack;
        (0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__.setDataToStorage)(new _data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__.ProfileData(levelData.levelMeta.levelType, levelData.levelMeta.levelNumber, score, this.starCount));
    }
    createCanvas() {
        if (this.starCount <= 1) {
            this.canvas.scene.audio.playSound(audioUrl.levelLose, _common_common_js__WEBPACK_IMPORTED_MODULE_1__.LevelEndAudio);
            this.monster.changeImage("./assets/images/sad1" + this.monsterPhaseNumber + ".png");
        }
        else {
            this.canvas.scene.audio.playSound("./assets/audios/intro.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_1__.IntroMusic);
            this.monster.changeImage("./assets/images/happy1" + this.monsterPhaseNumber + ".png");
            this.canvas.scene.audio.playSound(audioUrl.levelWin, _common_common_js__WEBPACK_IMPORTED_MODULE_1__.LevelEndAudio);
        }
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState === "visible") {
                self.canvas.scene.audio.playSound("./assets/audios/intro.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_1__.IntroMusic);
            }
            else {
                self.canvas.scene.audio.pauseSound();
            }
        }, false);
        this.monster.changeZindex(9);
        var self = this;
        this.id = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_1__.LevelEndLayer);
        this.context = document.getElementById(this.id).getContext("2d");
        document.getElementById(this.id).style.zIndex = "8";
        this.bottonLayer = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_1__.LevelEndButtonsLayer);
        this.bottonContext = document.getElementById(this.bottonLayer).getContext("2d");
        document.getElementById(this.bottonLayer).style.zIndex =
            "9";
        document.getElementById(this.id).style.backgroundColor =
            "#00407B";
        document.getElementById(this.id).style.backgroundImage =
            "url('./assets/images/WIN_screen_bg.png')";
        document.getElementById(this.id).style.backgroundSize =
            "contain";
        document.getElementById(this.id).style.backgroundPosition =
            "center";
        document.getElementById(this.id).style.backgroundAttachment = "fixed";
        document.getElementById(this.id).style.backgroundRepeat =
            "no-repeat";
        var star1 = new Image();
        star1.src = "./assets/images/pinStar1.png";
        var star2 = new Image();
        star2.src = "./assets/images/pinStar2.png";
        var star3 = new Image();
        star3.src = "./assets/images/pinStar3.png";
        self.drawStarts(self, star1, star2, star3);
        self.nextButton =
            self.starCount >= 2
                ? new _components_buttons_next_button_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.context, self.canvas, self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7)
                : null;
        self.retryButton = new _components_buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_4__["default"](self.context, self.canvas, self.starCount >= 2
            ? self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2
            : self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7);
        self.closeButton = new _components_buttons_close_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](self.context, self.canvas, self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7);
        document.getElementById(this.bottonLayer).addEventListener("click", function (event) {
            var rect = document.getElementById(self.bottonLayer).getBoundingClientRect();
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
    levelEndFirebaseEvents() {
        _firebase_firebase_integration_js__WEBPACK_IMPORTED_MODULE_6__.FirebaseIntegration.customEvents("level_completed", {
            date_time: this.levelEndTime.getDate() +
                "/" +
                this.levelEndTime.getMonth() +
                1 +
                "/" +
                this.levelEndTime.getFullYear() +
                "," +
                this.levelEndTime.getHours() +
                ":" +
                this.levelEndTime.getMinutes() +
                ":" +
                this.levelEndTime.getSeconds(),
            success_or_failure: this.starCount >= 3 ? "success" : "failure",
            level_number: this.levelData.levelMeta.levelNumber,
            number_of_successful_puzzles: this.score / 100,
            ftm_language: _global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang,
            profile_number: 0,
            version_number: document.getElementById("version-info-id").innerHTML,
            duration: Math.abs(Math.ceil((this.levelEndTime.getTime() - this.levelStartTime) / 1000)),
        });
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
var mapLock = new Image();
mapLock.src = "./assets/images/mapLock.png";
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
var unlockLevelIndex = -1;
var previousPlayedLevel = parseInt(localStorage.getItem(_common_common_js__WEBPACK_IMPORTED_MODULE_3__.PreviousPlayedLevel)) | 0;
var level;
if (previousPlayedLevel != null) {
    level = 10 * Math.floor(previousPlayedLevel / 10);
}
class LevelSelectionScreen {
    constructor(canvas, data) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas");
        self = this;
        this.data = data;
        this.levels = [];
        this.levelsSectionCount =
            self.data.levels.length / 10 > Math.floor(self.data.levels.length / 10)
                ? Math.floor(self.data.levels.length / 10) + 1
                : Math.floor(self.data.levels.length / 10);
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
                self.sound.playSound("./assets/audios/intro.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_3__.IntroMusic);
                self.drawStars();
            }
        }
    }
    createCanvas() {
        this.sound.playSound("./assets/audios/intro.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_3__.IntroMusic);
        document.addEventListener("visibilitychange", function () {
            self.sound.activeScreen();
        }, false);
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_3__.LevelSelectionLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(map, 0, 0, this.canvas.width, this.canvas.height);
        this.canavsElement.style.zIndex = 2;
        this.starsId = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_3__.LevelSelectionLayer + 1);
        this.starsCanavsElement = document.getElementById(this.starsId);
        this.starsContext = this.canavsElement.getContext("2d");
        this.starsCanavsElement.style.zIndex = "3";
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
            .getElementById(this.starsId)
            .addEventListener("touchstart", handleTouchStart, false);
        document
            .getElementById(this.starsId)
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
                    if (level != self.levelsSectionCount * 10 - 10) {
                        self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                        self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                        level = level + 10;
                        self.draw(level);
                        self.downButton(level);
                        self.drawStars();
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
        document.getElementById(this.starsId).addEventListener("mousedown", function (event) {
            event.preventDefault();
            var rect = document.getElementById(this.id).getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (x >= self.canvas.width * 0.7 &&
                x < self.canvas.width * 0.7 + self.canvas.height / 10 &&
                y > self.canvas.height / 1.3 &&
                y < self.canvas.height / 1.3 + self.canvas.height / 10) {
                if (level != self.levelsSectionCount * 10 - 10) {
                    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                    self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                    level = level + 10;
                    self.draw(level);
                    self.downButton(level);
                    self.drawStars();
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
                    if (s.index + level - 1 <= unlockLevelIndex + 1) {
                        self.sound.playSound("./assets/audios/ButtonClick.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_3__.ButtonClick);
                        self.sound.pauseSound();
                        levelNumber = s.index + level - 1;
                        self.startGame(levelNumber);
                    }
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
        if (level != self.levelsSectionCount * 10 - 10) {
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
        if (s.index + level <= self.data.levels.length) {
            this.context.drawImage(mapIcon, s.x, s.y, imageSize, imageSize);
            this.context.fillStyle = "white";
            this.context.font = textFontSize + "px Arial";
            this.context.textAlign = "center";
            this.context.fillText(s.index + level, s.x + imageSize / 3.5, s.y + imageSize / 3);
            this.context.font = textFontSize - imageSize / 30 + "px Arial";
            this.context.fillText(this.data.levels[s.index + level - 1].levelMeta.levelType, s.x + imageSize / 3.5, s.y + imageSize / 1.3);
        }
    }
    startGame(level_number) {
        this.sound.pauseSound();
        new _game_js__WEBPACK_IMPORTED_MODULE_2__.Game(this.canvas.width, this.canvas.height, self.data.levels[level_number], self.gameSceneCallBack);
    }
    drawStars() {
        let gameLevelData = (0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__.getDatafromStorage)();
        let canvas = document.getElementById("canvas");
        var canavsElement = (document.getElementById("levelSelectionCanvas1"));
        var context = canavsElement.getContext("2d");
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (gameLevelData != null) {
            if (gameLevelData.length != undefined) {
                for (let game of gameLevelData) {
                    if (unlockLevelIndex < parseInt(game.levelNumber)) {
                        game.levelStar >= 2
                            ? (unlockLevelIndex = parseInt(game.levelNumber))
                            : null;
                    }
                }
            }
            for (let s of self.levels) {
                if (s.index + level <= self.data.levels.length) {
                    s.index + level - 1 > unlockLevelIndex + 1
                        ? context.drawImage(mapLock, s.x, s.y, this.canvas.height / 13, this.canvas.height / 13)
                        : null;
                    for (let i = 0; i < gameLevelData.length; i++) {
                        if (s.index - 1 + level == parseInt(gameLevelData[i].levelNumber)) {
                            this.drawStar(s, canvas, gameLevelData[i].levelStar, context);
                            break;
                        }
                    }
                }
            }
        }
    }
    drawStar(s, canvas, starCount, context) {
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
/* harmony import */ var _data_profile_data_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/profile-data.js */ "./src/data/profile-data.js");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");
/* harmony import */ var _firebase_firebase_integration_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../firebase/firebase_integration.js */ "./src/firebase/firebase_integration.js");
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
    fantastic: "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang + "/images/fantastic_01.png",
    great: "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang + "/images/great_01.png",
    autumnBgImg: "./assets/images/Autumn_bg_v01.jpg",
    autumnHillImg: "./assets/images/Autumn_hill_v01.png",
    autumnSignImg: "./assets/images/Autumn_sign_v01.png",
    autumnGrassImg: "./assets/images/Autumn_FG_v01.png",
    autumnFenceImg: "./assets/images/Autumn_fence_v01.png",
    autumnPillerImg: "./assets/images/Autumn_sign_v01.png",
    winterBgImg: "./assets/images/Winter_bg_01.jpg",
    winterHillImg: "./assets/images/Winter_hill_v01.png",
    winterSignImg: "./assets/images/Winter_sign_v01.png",
    winterGrassImg: "./assets/images/Winter_FG_v01.png",
    winterFenceImg: "./assets/images/Winter_fence_v01.png",
    winterPillerImg: "./assets/images/Winter_sign_v01.png",
};
var audioUrl = {
    phraseAudios: [
        "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang + "/audios/fantastic.WAV",
        // "./assets/audios/good job.WAV",
        "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang + "/audios/great.wav",
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
    constructor({ game, levelData, levelStartCallBack, monsterPhaseNumber, }) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        self = this;
        this.monster = new _components_monster_js__WEBPACK_IMPORTED_MODULE_0__.Monster(game);
        this.audio = new _common_sound_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__.CanvasStack("canvas");
        this.monsterPhaseNumber = monsterPhaseNumber || 1;
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
        self.audio.playSound(audioUrl.buttonClick, _common_common_js__WEBPACK_IMPORTED_MODULE_7__.ButtonClick);
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
    redrawOfStones(dragAnimation, status, emptyTarget, picked_stone, picked_stones) {
        if (dragAnimation != undefined) {
            switch (dragAnimation) {
                case 'dragMonsterAnimation':
                    {
                        self.monster.changeToDragAnimation();
                        break;
                    }
                case 'stopDragMonsterAnimation':
                    {
                        self.monster.changeToIdleAnimation();
                        break;
                    }
                default: {
                    self.monster.changeToIdleAnimation();
                }
            }
        }
        else {
            noMoreTarget = emptyTarget;
            var fntsticOrGrtIndex = self.getRandomInt(0, 1);
            if (status) {
                self.monster.changeToEatAnimation();
                self.audio.playSound(audioUrl.monsterHappy, _common_common_js__WEBPACK_IMPORTED_MODULE_7__.PhraseAudio);
                if (emptyTarget) {
                    self.puzzleEndFirebaseEvents("success", current_puzzle_index, picked_stones, self.levelData.puzzles[current_puzzle_index].targetStones, self.levelData.puzzles[current_puzzle_index].foilStones, self.puzzleStartTime);
                    setTimeout(() => {
                        self.audio.playSound(audioUrl.phraseAudios[fntsticOrGrtIndex], _common_common_js__WEBPACK_IMPORTED_MODULE_7__.FeedbackAudio);
                        self.promptText.showFantasticOrGreat(fntsticOrGrtIndex);
                    }, 100);
                    self.promptText.draw((word_dropped_stones += picked_stone.length));
                    self.timerTicking.stopTimer();
                    // self.promptText.draw((word_dropped_stones += 1));
                    score += 100;
                    word_dropped_stones = 0;
                    current_puzzle_index += 1;
                }
                else {
                    self.promptText.draw((word_dropped_stones += picked_stone.length));
                }
            }
            else {
                self.timerTicking.stopTimer();
                self.monster.changeToSpitAnimation();
                self.audio.playSound(audioUrl.monsterSad, _common_common_js__WEBPACK_IMPORTED_MODULE_7__.PhraseAudio);
                self.puzzleEndFirebaseEvents("failure", current_puzzle_index, picked_stones, self.levelData.puzzles[current_puzzle_index].targetStones, self.levelData.puzzles[current_puzzle_index].foilStones, self.puzzleStartTime);
                setTimeout(() => {
                    self.audio.playSound(audioUrl.monsterSplit, _common_common_js__WEBPACK_IMPORTED_MODULE_7__.PhraseAudio);
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
                    }, i * 1300.66);
                }
            }
            else {
                if (emptyTarget) {
                    self.levelIndicators.setIndicators(current_puzzle_index);
                    for (let i = 0; i <= 3; i++) {
                        setTimeout(() => {
                            if (i == 3 && !isGamePause) {
                                self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
                                self.puzzleStartTime = new Date().getTime();
                                self.promptText.setCurrrentPuzzleData(self.puzzleData[current_puzzle_index]);
                                self.timerTicking.draw();
                                self.promptText.draw();
                            }
                        }, i * 1300.66);
                    }
                }
            }
        }
    }
    levelEnded() {
        let totalStarsCount = 0;
        let monsterPhaseNumber = self.monsterPhaseNumber || 1;
        var gameLevelData = (0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_11__.getDatafromStorage)();
        if (gameLevelData != null) {
            for (let i = 0; i < gameLevelData.length; i++) {
                totalStarsCount = totalStarsCount + gameLevelData[i].levelStar;
            }
            monsterPhaseNumber = Math.floor(totalStarsCount / 12) + 1 || 1;
            if (self.monsterPhaseNumber < monsterPhaseNumber) {
                if (monsterPhaseNumber <= 4) {
                    self.monsterPhaseNumber = monsterPhaseNumber;
                    localStorage.setItem(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.StoreMonsterPhaseNumber, monsterPhaseNumber);
                    self.monster.changePhaseNumber(monsterPhaseNumber);
                    // self.monster.changeImage(
                    //   "./assets/images/idle1" + self.monsterPhaseNumber + ".png"
                    // );
                }
                else {
                    self.monsterPhaseNumber = 4;
                }
            }
        }
        self.levelStartCallBack();
        if (self.levelData.levelNumber == 149) {
            self.exitAllScreens();
            new _game_end_scene_js__WEBPACK_IMPORTED_MODULE_8__.GameEndScene(self.game);
        }
        else {
            setTimeout(() => {
                new _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__.LevelEndScene(self.game, score, self.monster, self.levelEndCallBack, self.levelData, isGamePause, self.monsterPhaseNumber, this.levelStartTime);
            }, 1000);
        }
        isLevelEnded = true;
    }
    createCanvas() {
        this.levelStartTime = new Date().getTime();
        this.puzzleStartTime = new Date().getTime();
        var monsterPhaseNumber = this.monsterPhaseNumber || 1;
        this.monster.changeImage("./assets/images/idle1" + monsterPhaseNumber + ".png");
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
        localStorage.setItem(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.PreviousPlayedLevel, previousPlayedLevel);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    exitAllScreens() {
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelEndLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelEndButtonsLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelStartLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.StoneLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.TimetickerLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.PromptTextLayer);
        // self.monster.changeImage("./assets/images/idle4.png");
        self.monster.changeImage("./assets/images/idle1" + self.monsterPhaseNumber + ".png");
        self.monster.deleteCanvas();
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
                setTimeout(() => {
                    isLevelEnded = true;
                    self.levelStartCallBack();
                    delete self.timerTicking;
                    new _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__.LevelEndScene(self.game, score, self.monster, self.levelEndCallBack, self.levelData, isGamePause, this.monsterPhaseNumber, this.levelStartTime);
                }, 1000);
            }
            else {
                // self.promptText.setCurrrentPromptText(
                //   self.puzzleData[current_puzzle_index].prompt.promptText
                // );
                self.puzzleStartTime = new Date().getTime();
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
        const availableBackgroundTypes = ["Summer", "Autumn", "Winter"];
        var backgroundType = Math.floor(self.levelData.levelNumber / 10) %
            availableBackgroundTypes.length;
        if (self.levelData.levelNumber >= 30) {
            backgroundType = backgroundType % 3;
        }
        (0,_common_common_js__WEBPACK_IMPORTED_MODULE_7__.loadingScreen)(true);
        var context = this.context;
        var width = this.width;
        var height = this.height;
        (0,_common_common_js__WEBPACK_IMPORTED_MODULE_7__.loadImages)(images, function (image) {
            switch (availableBackgroundTypes[backgroundType]) {
                case "Winter":
                    {
                        context.drawImage(image.winterBgImg, 0, 0, width, height);
                        context.drawImage(image.winterPillerImg, width * 0.38, height / 6, width / 1.2, height / 2);
                        context.drawImage(image.winterFenceImg, -width * 0.4, height / 4, width, height / 2);
                        context.drawImage(image.winterHillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
                        context.drawImage(image.winterGrassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
                    }
                    break;
                case "Autumn":
                    {
                        context.drawImage(image.autumnBgImg, 0, 0, width, height);
                        context.drawImage(image.autumnPillerImg, width * 0.38, height / 6, width / 1.2, height / 2);
                        context.drawImage(image.autumnFenceImg, -width * 0.4, height / 4, width, height / 2);
                        context.drawImage(image.autumnHillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
                        context.drawImage(image.autumnGrassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
                    }
                    break;
                default:
                    {
                        context.drawImage(image.bgImg, 0, 0, width, height);
                        context.drawImage(image.pillerImg, width * 0.6, height / 6, width, height / 2);
                        context.drawImage(image.fenchImg, -width * 0.4, height / 3, width, height / 3);
                        context.drawImage(image.hillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
                        context.drawImage(image.grassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
                    }
                    break;
            }
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
    puzzleEndFirebaseEvents(success_or_failure, puzzle_number, item_selected, target, foils, response_time) {
        var puzzleEndTime = new Date();
        _firebase_firebase_integration_js__WEBPACK_IMPORTED_MODULE_13__.FirebaseIntegration.customEvents("puzzle_completed", {
            date_time: puzzleEndTime.getDate() +
                "/" +
                puzzleEndTime.getMonth() +
                1 +
                "/" +
                puzzleEndTime.getFullYear() +
                "," +
                puzzleEndTime.getHours() +
                ":" +
                puzzleEndTime.getMinutes() +
                ":" +
                puzzleEndTime.getSeconds(),
            success_or_failure: success_or_failure,
            level_number: this.levelData.levelNumber,
            puzzle_number: puzzle_number,
            item_selected: item_selected,
            target: target,
            foils: foils,
            profile_number: 0,
            ftm_language: _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang,
            version_number: document.getElementById("version-info-id").innerHTML,
            response_time: Math.abs(Math.ceil((puzzleEndTime.getTime() - response_time) / 1000)),
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
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");
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
title.src = "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang + "/images/title.png";
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
        aboutCompanyElement.innerHTML = globalThis.aboutCompany;
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
        document.getElementById("loading-screen").style.display = "none";
    }
    createPlayButton() {
        const playButtonLayerElement = (document.getElementById(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer));
        var self = this;
        var data = this.data;
        var playButtonId = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer);
        this.canavsElement = document.getElementById(playButtonId);
        this.buttonContext = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 7;
        if (true) {
            self.playButton = new _components_buttons_play_butoon_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.buttonContext, self.canvas, self.canvas.width * 0.35, self.canvas.height / 7);
        }
        else {}
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
                    fbq("trackCustom", _common_common_js__WEBPACK_IMPORTED_MODULE_0__.FirebaseUserClicked, {
                        event: "click",
                    });
                    aboutCompanyElement.style.display = "none";
                    new _common_sound_js__WEBPACK_IMPORTED_MODULE_1__["default"]().playSound("./assets/audios/ButtonClick.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_0__.ButtonClick);
                    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                    new _level_selection_scene_js__WEBPACK_IMPORTED_MODULE_6__.LevelSelectionScreen(self.canvas, data);
                    self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer);
                    self.monster.deleteCanvas();
                    delete self.monster;
                    self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StartSceneLayer);
                    // if (self.pwa_status == "false" || !self.pwa_status) {
                    //   pwa_install_status.prompt();
                    //   const { outcome } = await pwa_install_status.userChoice;
                    //   if (outcome === "accepted") {
                    //     pwa_install_status = null;
                    //     localStorage.setItem(PWAInstallStatus, "true");
                    //     fbq("trackCustom", FirebaseUserInstall, {
                    //       event: "install_count",
                    //     });
                    //     self.firebase_analytics
                    //       ? self.firebase_analytics.logEvent(
                    //           FirebaseUserInstall,
                    //           "Install"
                    //         )
                    //       : null;
                    //     window.location.reload();
                    //   } else {
                    //     fbq("trackCustom", UserCancelled, {
                    //       event: "cancel_count",
                    //     });
                    //     self.firebase_analytics
                    //       ? self.firebase_analytics.logEvent(UserCancelled, "Cancelled")
                    //       : null;
                    //   }
                    // } else {
                    //   if (
                    //     !window.matchMedia("(display-mode: standalone)").matches &&
                    //     self.pwa_status == "true"
                    //   ) {
                    //     alert("PWA is installed on your device \nPlease play from there");
                    //   } else {
                    //     aboutCompanyElement.style.display = "none";
                    //     new Sound().changeSourse("./assets/audios/ButtonClick.wav");
                    //     self.context.clearRect(
                    //       0,
                    //       0,
                    //       self.canvas.width,
                    //       self.canvas.height
                    //     );
                    //     new LevelSelectionScreen(self.canvas, data);
                    //     self.canvasStack.deleteLayer(PlayButtonLayer);
                    //     self.monster.deleteCanvas();
                    //     delete self.monster;
                    //     self.canvasStack.deleteLayer(StartSceneLayer);
                    //   }
                    // }
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
/* harmony import */ var _src_common_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/common.js */ "./src/common/common.js");
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-variables.js */ "./global-variables.js");
/* harmony import */ var _src_firebase_firebase_integration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/firebase/firebase_integration.js */ "./src/firebase/firebase_integration.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const channel = new BroadcastChannel("my-channel");
let cached_languages = localStorage.getItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_4__.CachedLanguages)
    ? new Map(JSON.parse(localStorage.getItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_4__.CachedLanguages)))
    : new Map();
window.addEventListener("beforeunload", (event) => {
    _src_firebase_firebase_integration_js__WEBPACK_IMPORTED_MODULE_7__.FirebaseIntegration.sessionEnd();
});
window.addEventListener("load", function () {
    return __awaiter(this, void 0, void 0, function* () {
        registerWorkbox();
        const canvas = document.getElementById("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
        let data = yield (0,_src_data_api_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
        let d = new _src_data_data_modal_js__WEBPACK_IMPORTED_MODULE_1__.DataModal(data.OtherAudios, data.Levels, data.FeedbackTexts, data.RightToLeft, data.FeedbackAudios);
        if (window.Android) {
            window.Android.receiveData(cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang) ? cached_languages.get(_global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang) : null);
        }
        globalThis.aboutCompany = data.aboutCompany;
        globalThis.descriptionText = data.descriptionText;
        window.addEventListener("resize", () => __awaiter(this, void 0, void 0, function* () {
            if (cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang)) {
                if (navigator.onLine) {
                    _src_firebase_firebase_integration_js__WEBPACK_IMPORTED_MODULE_7__.FirebaseIntegration.initializeFirebase();
                }
                canvas.height = window.innerHeight;
                canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
                delete this.monster;
                new _src_utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_3__.CanvasStack("canvas").deleteAllLayers();
                delete this.startScene;
                this.startScene = new _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__.StartScene(canvas, d, this.analytics);
            }
        }));
        if (cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang)) {
            if (navigator.onLine) {
                _src_firebase_firebase_integration_js__WEBPACK_IMPORTED_MODULE_7__.FirebaseIntegration.initializeFirebase();
            }
            this.startScene = new _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__.StartScene(canvas, d, this.analytics);
        }
    });
});
function registerWorkbox() {
    if ("serviceWorker" in navigator) {
        let wb = new workbox_window__WEBPACK_IMPORTED_MODULE_5__.Workbox("./sw.js", {});
        wb.register().then(handleServiceWorkerRegistration);
        if (!cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang)) {
            channel.postMessage({ command: "Cache", data: _global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang });
        }
        navigator.serviceWorker.addEventListener("message", handleServiceWorkerMessage);
    }
}
function handleServiceWorkerRegistration(registration) {
    registration.installing.postMessage({
        type: "Registration",
        value: _global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang,
    });
}
function handleServiceWorkerMessage(event) {
    if (event.data.msg == "Loading") {
        handleLoadingMessage(event.data);
    }
    if (event.data.msg == "Update Found") {
        handleUpdateFoundMessage();
    }
}
function handleLoadingMessage(data) {
    document.getElementById("loading_number").innerHTML =
        " " + " downloading... " + data.data + "%";
    if (data.data == 100) {
        cached_languages.set(_global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang, "true");
        localStorage.setItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_4__.CachedLanguages, JSON.stringify(Array.from(cached_languages.entries())));
        window.location.reload();
    }
}
function handleUpdateFoundMessage() {
    let text = "Update Found\nPress ok to update.";
    if (confirm(text) == true) {
        localStorage.removeItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_4__.CachedLanguages);
        window.location.reload();
    }
    else {
        text = "You canceled!";
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSx5REFBVTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHlEQUFVO0FBQ3BFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0VBQXdFLGtFQUFtQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLGtFQUFtQjtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFB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QUFJO0FBQ3JDO0FBQ0EsZ0JBQWdCLHlHQUFzQztBQUN0RDtBQUNBLGtDQUFrQyxrRUFBVTtBQUM1QztBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFCQUFxQixtREFBTyxjQUFjO0FBQzFDO0FBQ0Esa0NBQWtDLHNEQUFJO0FBQ3RDLGtDQUFrQyx3QkFBd0Isc0RBQUksRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQUk7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFJO0FBQ2pDLDZCQUE2QixrRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL2dsb2JhbC12YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tbW9uL2xldmVsLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9zb3VuZC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9zdG9uZXMtY29uZmlnLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2NhbmNlbF9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2luc3RhbGxfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL25leHRfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3BhdXNlX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9wbGF5X2J1dG9vbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXRyeV9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2xldmVsLWluZGljYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL21vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3BhdXNlLXBvcHVwLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9wcm9tcHQtdGV4dC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvc3RvbmVzLWxheWVyLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy90aW1lci10aWNraW5nLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvZGF0YS9hcGktZGF0YS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvZGF0YS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvcHJvZmlsZS1kYXRhLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2VfY29uZmlnLnRzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2VfaW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvZ2FtZS1lbmQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9sZXZlbC1lbmQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvbGV2ZWwtc2VsZWN0aW9uLXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2xldmVsLXN0YXJ0LXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL3N0YXJ0LXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvdXRpbGl0eS9jYW52YXMtc3RhY2suanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL25vZGVfbW9kdWxlcy93b3JrYm94LXdpbmRvdy9idWlsZC93b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9mZWVkVGhlTW9uc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5leHBvcnQgdmFyIGxhbmcgPSB1cmxQYXJhbXMuZ2V0KFwiZnRtX2xhbmd1YWdlXCIpO1xyXG4iLCJpbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZXMoc291cmNlcywgY2FsbGJhY2spIHtcclxuICAgIHZhciBpbWFnZXMgPSB7fTtcclxuICAgIHZhciBsb2FkZWRJbWFnZXMgPSAwO1xyXG4gICAgdmFyIG51bUltYWdlcyA9IDA7XHJcbiAgICAvLyBnZXQgbnVtIG9mIHNvdXJjZXNcclxuICAgIGZvciAodmFyIHNyYyBpbiBzb3VyY2VzKSB7XHJcbiAgICAgICAgbnVtSW1hZ2VzKys7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBzcmMgaW4gc291cmNlcykge1xyXG4gICAgICAgIGltYWdlc1tzcmNdID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2VzW3NyY10ub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoKytsb2FkZWRJbWFnZXMgPj0gbnVtSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpbWFnZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWFnZXNbc3JjXS5zcmMgPSBzb3VyY2VzW3NyY107XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRpbmdTY3JlZW4obG9hZGluZykge1xyXG4gICAgY29uc3QgbG9hZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmctc2NyZWVuXCIpO1xyXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdfdGV4dFwiKTtcclxuICAgIGxvYWRpbmdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgbG9hZGluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuYmtnQ2FudmFzLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCk7XHJcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxvYWRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuYmtnQ2FudmFzLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCk7XHJcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgTW9uc3RlckxheWVyID0gXCJtb25zdGVyQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBQYXVzZVBvcHVwTGF5ZXIgPSBcInBhdXNlcG9wdXBDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IFN0b25lTGF5ZXIgPSBcInN0b25lQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBUaW1ldGlja2VyTGF5ZXIgPSBcInRpbWV0aWNrQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBMZXZlbEVuZExheWVyID0gXCJsZXZlbEVuZENhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgTGV2ZWxFbmRCdXR0b25zTGF5ZXIgPSBcImxldmVsRW5kQnV0dG9uc0NhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgTGV2ZWxTZWxlY3Rpb25MYXllciA9IFwibGV2ZWxTZWxlY3Rpb25DYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IExldmVsU3RhcnRMYXllciA9IFwibGV2ZWxTdGFydENhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgU3RhcnRTY2VuZUxheWVyID0gXCJzdGFydFNjZW5lQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBQbGF5QnV0dG9uTGF5ZXIgPSBcInBsYXlCdXR0b25DYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IEdhbWVFbmRMYXllciA9IFwiR2FtZUVuZENhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VyQ2xpY2tlZCA9IFwidXNlcl9jbGlja2VkXCI7XHJcbmV4cG9ydCBjb25zdCBGaXJlYmFzZVVzZXJJbnN0YWxsID0gXCJ1c2VyX2luc3RhbGxlZFwiO1xyXG5leHBvcnQgY29uc3QgUHJvbXB0VGV4dExheWVyID0gXCJwcm9tcHRUZXh0Q2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBQV0FJbnN0YWxsU3RhdHVzID0gXCJwd2FfaW5zdGFsbGVkX3N0YXR1c1wiO1xyXG5leHBvcnQgY29uc3QgVXNlckNhbmNlbGxlZCA9IFwidXNlcl9jYW5jZWxfaW5zdGFsbGF0aW9uXCI7XHJcbmV4cG9ydCBjb25zdCBOYXRpdmVQbGF5QnV0dG9uID0gXCJuYXRpdmVfcGxheWJ1dHRvbl9jbGlja2VkXCI7XHJcbmV4cG9ydCBjb25zdCBQcmV2aW91c1BsYXllZExldmVsID0gXCJzdG9yZVByZXZpb3VzUGxheWVkTGV2ZWxcIiArIGxhbmc7XHJcbmV4cG9ydCBjb25zdCBTdG9yZU1vbnN0ZXJQaGFzZU51bWJlciA9IFwic3RvcmVNb25zdGVyUGhhc2VOdW1iZXJcIiArIGxhbmc7XHJcbmV4cG9ydCBjb25zdCBDYWNoZWRMYW5ndWFnZXMgPSBcImNhY2hlZF9sYW5ndWFnZXNcIjtcclxuZXhwb3J0IGNvbnN0IE1vbnN0ZXJBdWRpbyA9IFwibW9uc3Rlcl9hdWRpb1wiO1xyXG5leHBvcnQgY29uc3QgRmVlZGJhY2tBdWRpbyA9IFwiZmVlZGJhY2tfYXVkaW9cIjtcclxuZXhwb3J0IGNvbnN0IEludHJvTXVzaWMgPSBcImludHJvX211c2ljXCI7XHJcbmV4cG9ydCBjb25zdCBQcm9tcHRBdWRpbyA9IFwicHJvbXB0X2F1ZGlvXCI7XHJcbmV4cG9ydCBjb25zdCBCdXR0b25DbGljayA9IFwiYnV0dG9uX2NsaWNrXCI7XHJcbmV4cG9ydCBjb25zdCBUaW1lT3ZlciA9IFwidGltZV9vdmVyXCI7XHJcbmV4cG9ydCBjb25zdCBTdG9uZU11c2ljID0gXCJzdG9uZV9tdXNpY1wiO1xyXG5leHBvcnQgY29uc3QgUGhyYXNlQXVkaW8gPSBcInBocmFzZV9hdWRpb1wiO1xyXG5leHBvcnQgY29uc3QgTGV2ZWxFbmRBdWRpbyA9IFwibGV2ZWxfZW5kX2F1ZGlvXCI7XHJcbiIsImV4cG9ydCBjbGFzcyBMZXZlbENvbmZpZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4UG9zLCB5UG9zLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMueCA9IHhQb3M7XHJcbiAgICAgICAgdGhpcy55ID0geVBvcztcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kcmF3cmVhZHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcEljb24ucG5nXCI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQnV0dG9uQ2xpY2ssIEZlZWRiYWNrQXVkaW8sIEludHJvTXVzaWMsIExldmVsRW5kQXVkaW8sIE1vbnN0ZXJBdWRpbywgUGhyYXNlQXVkaW8sIFByb21wdEF1ZGlvLCBTdG9uZU11c2ljLCBUaW1lT3ZlciwgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcclxubGV0IGluYWN0aXZlX3NjcmVlbiA9IGZhbHNlO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJfYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChNb25zdGVyQXVkaW8pO1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tfYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChGZWVkYmFja0F1ZGlvKTtcclxuICAgICAgICB0aGlzLmludHJvX211c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSW50cm9NdXNpYyk7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRfYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQcm9tcHRBdWRpbyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25fY2xpY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChCdXR0b25DbGljayk7XHJcbiAgICAgICAgdGhpcy50aW1lX292ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUaW1lT3Zlcik7XHJcbiAgICAgICAgdGhpcy5zdG9uZV9tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFN0b25lTXVzaWMpO1xyXG4gICAgICAgIHRoaXMucGhyYXNlX2F1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUGhyYXNlQXVkaW8pO1xyXG4gICAgICAgIHRoaXMubGV2ZWxfZW5kX2F1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUGhyYXNlQXVkaW8pO1xyXG4gICAgfVxyXG4gICAgcGxheVNvdW5kKHNyYywgdHlwZSkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIE1vbnN0ZXJBdWRpbzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25zdGVyX2F1ZGlvLnNyYyA9IHNyYztcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uc3Rlcl9hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEZlZWRiYWNrQXVkaW86IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tfYXVkaW8uc3JjID0gc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja19hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEludHJvTXVzaWM6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50cm9fbXVzaWMuc3JjID0gc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRyb19tdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFByb21wdEF1ZGlvOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb21wdF9hdWRpby5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb21wdF9hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEJ1dHRvbkNsaWNrOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbl9jbGljay5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbl9jbGljay5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFRpbWVPdmVyOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVfb3Zlci5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVfb3Zlci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFN0b25lTXVzaWM6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvbmVfbXVzaWMuc3JjID0gc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9uZV9tdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBocmFzZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBocmFzZV9hdWRpby5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBocmFzZV9hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExldmVsRW5kQXVkaW86IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxfZW5kX2F1ZGlvLnNyYyA9IHNyYztcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxfZW5kX2F1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhY3RpdmVTY3JlZW4oKSB7XHJcbiAgICAgICAgaWYgKGluYWN0aXZlX3NjcmVlbikge1xyXG4gICAgICAgICAgICBpbmFjdGl2ZV9zY3JlZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VTb3VuZCgpO1xyXG4gICAgICAgICAgICBpbmFjdGl2ZV9zY3JlZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhdXNlU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyX2F1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5mZWVkYmFja19hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuaW50cm9fbXVzaWMucGF1c2UoKTtcclxuICAgICAgICB0aGlzLmxldmVsX2VuZF9hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMucGhyYXNlX2F1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy50aW1lX292ZXIucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnN0b25lX211c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRfYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbl9jbGljay5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMudGltZV9vdmVyLnBhdXNlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5pbnRyb0F1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5hdWRpbyA/IHRoaXMuYXVkaW8ucGF1c2UoKSA6IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5hdWRpbzIgPyB0aGlzLmF1ZGlvMS5wYXVzZSgpIDogbnVsbDtcclxuICAgICAgICAvLyB0aGlzLmF1ZGlvMiA/IHRoaXMuYXVkaW8yLnBhdXNlKCkgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlU291cnNlKHNyYykge1xyXG4gICAgICAgIC8vIHRoaXMuYXVkaW8uc3JjID0gc3JjO1xyXG4gICAgICAgIC8vIHRoaXMucGxheVNvdW5kKHNyYyk7XHJcbiAgICB9XHJcbiAgICBwbGF5TGV2ZWxFbmRIYXBweUF1ZGlvKGxldmVsV2luQXVkaW8pIHtcclxuICAgICAgICAvLyB0aGlzLmF1ZGlvLnNyYyA9IGxldmVsV2luQXVkaW87XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5U291bmQobGV2ZWxXaW5BdWRpbyk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICB0aGlzLmludHJvQXVkaW8ucGxheSgpO1xyXG4gICAgICAgIC8vIH0sIDcwMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFN0b25lQ29uZmlnIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0b25lTGV0dGVyLCB4UG9zLCB5UG9zKSB7XHJcbiAgICAgICAgdGhpcy54ID0geFBvcztcclxuICAgICAgICB0aGlzLnkgPSB5UG9zO1xyXG4gICAgICAgIHRoaXMub3JpZ3ggPSB4UG9zO1xyXG4gICAgICAgIHRoaXMub3JpZ3kgPSB5UG9zO1xyXG4gICAgICAgIHRoaXMuZHJhd3JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gc3RvbmVMZXR0ZXI7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zdG9uZV9waW5rX3YwMi5wbmdcIjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5jZWxCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gY2FudmFzLndpZHRoICogMC4xICsgKGNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMjtcclxuICAgICAgICB0aGlzLnBvc1kgPSBjYW52YXMuaGVpZ2h0ICogMC4yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Nsb3NlX2J0bi5wbmdcIjtcclxuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwYXVzZV9idXR0b25faW1hZ2UsIHNlbGYucG9zWCwgc2VsZi5wb3NZLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTUsIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soeENsaWNrLCB5Q2xpY2spIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSAqXHJcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpICtcclxuICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikgKlxyXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikpO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcclxuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcF9idG4ucG5nXCI7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RhbGxCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcclxuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0luc3RhbGxfYnV0dG9uLnBuZ1wiO1xyXG4gICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggLyAzLCBzZWxmLmNhbnZhcy53aWR0aCAvIDYpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDEyKSAqXHJcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyAxMikpO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuY2FudmFzLndpZHRoIC8gOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV4dEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHBvc1gsIHBvc1kpIHtcclxuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbmV4dF9idG4ucG5nXCI7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IGNhbnZhcy53aWR0aCAtIGNhbnZhcy5oZWlnaHQgKiAwLjA5O1xyXG4gICAgICAgIHRoaXMucG9zWSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGF1c2VfdjAxLnBuZ1wiO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDksIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpICpcclxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpICtcclxuICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSk7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgKHRoaXMuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHBvc1gsIHBvc1kpIHtcclxuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvUGxheV9idXR0b24ucG5nXCI7XHJcbiAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwYXVzZV9idXR0b25faW1hZ2UsIHNlbGYucG9zWCwgc2VsZi5wb3NZLCBzZWxmLmNhbnZhcy53aWR0aCAvIDMsIHNlbGYuY2FudmFzLndpZHRoIC8gMyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soeENsaWNrLCB5Q2xpY2spIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXHJcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICtcclxuICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikgKlxyXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikpO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuY2FudmFzLndpZHRoIC8gOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0cnlCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcclxuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3JldHJ5X2J0bi5wbmdcIjtcclxuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwYXVzZV9idXR0b25faW1hZ2UsIHNlbGYucG9zWCwgc2VsZi5wb3NZLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soeENsaWNrLCB5Q2xpY2spIHtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICtcclxuICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxyXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikpO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIExldmVsSW5kaWNhdG9ycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIGFjdGl2ZUluZGljYXRvcnMpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9ycyA9IGFjdGl2ZUluZGljYXRvcnM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBzZXRJbmRpY2F0b3JzKGludCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9ycyA9IGludDtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsZXZlbF9pbmRpY2F0b3IgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBsZXZlbF9pbmRpY2F0b3Iuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbGV2ZWxzX3YwMS5wbmdcIjtcclxuICAgICAgICB2YXIgYmFyX2VtcHR5ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgYmFyX2VtcHR5LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Jhcl9lbXB0eV92MDEucG5nXCI7XHJcbiAgICAgICAgbGV2ZWxfaW5kaWNhdG9yLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobGV2ZWxfaW5kaWNhdG9yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTUsIDAsIHNlbGYuY2FudmFzLndpZHRoICogMC4zNSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSk7XHJcbiAgICAgICAgICAgIGJhcl9lbXB0eS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKGJhcl9lbXB0eSwgKChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gNykgKiAoaSArIDEpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyIC0gKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gNiwgKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyAxMCwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKHNlbGYpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoc2VsZikge1xyXG4gICAgICAgIHZhciBiYXJfZnVsbCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGJhcl9mdWxsLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Jhcl9mdWxsX3YwMS5wbmdcIjtcclxuICAgICAgICBiYXJfZnVsbC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYWN0aXZlSW5kaWNhdG9yczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKGJhcl9mdWxsLCAoKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyA3KSAqIChpICsgMSkgKyBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTUsIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIgLSAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyA2LCAoc2VsZi5jYW52YXMud2lkdGggKiAwLjM1KSAvIDEwLCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9uc3RlckxheWVyLCBTdG9yZU1vbnN0ZXJQaGFzZU51bWJlciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbnZhciBsYXN0VGltZSA9IDA7XHJcbnZhciBzZWxmO1xyXG52YXIgYW5pbWF0aW9uRnJhbWU7XHJcbnZhciBtb25zdGVyUGhhc2VOdW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yZU1vbnN0ZXJQaGFzZU51bWJlcikgfHwgMTtcclxuY29uc29sZS5sb2coXCI+Pj4+Pj4+Pj4uXCIpO1xyXG5jb25zb2xlLmxvZyhtb25zdGVyUGhhc2VOdW1iZXIpO1xyXG52YXIgZWF0SW1nID0gbmV3IEltYWdlKCk7XHJcbmVhdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9lYXQxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIjtcclxudmFyIGlkbGVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuaWRsZUltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XHJcbnZhciBzcGl0SW1nID0gbmV3IEltYWdlKCk7XHJcbnNwaXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc3BpdDFcIiArIG1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiO1xyXG52YXIgZHJhZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG5kcmFnSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2RyYWcxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIjtcclxuY29uc29sZS5sb2coXCJtb25zdGVyZXhlY3V0aW5nXCIpO1xyXG5leHBvcnQgY2xhc3MgTW9uc3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB6aW5kZXgpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuemluZGV4ID0gemluZGV4O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmdhbWUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmdhbWUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnN0ZXJcIik7XHJcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcclxuICAgICAgICB0aGlzLm1heEZyYW1lID0gNjtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUud2lkdGggLyAyIC0gdGhpcy5nYW1lLndpZHRoICogMC4yNDM7XHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5nYW1lLndpZHRoIC8gMztcclxuICAgICAgICB0aGlzLmZwcyA9IDEwO1xyXG4gICAgICAgIHRoaXMuZnJhbWVJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLmZwcztcclxuICAgICAgICB0aGlzLmZyYW1lVGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgTW9uc3RlckxheWVyKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSBcIjZcIjtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24oMCk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VaaW5kZXgoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVUaW1lciA+IHRoaXMuZnJhbWVJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZXIgPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZVggPCB0aGlzLm1heEZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZXIgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCA3NzAgKiB0aGlzLmZyYW1lWCwgMTM4NiAqIHRoaXMuZnJhbWVZLCA3NjgsIDEzODYsIHRoaXMueCwgdGhpcy55ICogMC44LCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAxLjUpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24oMCk7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZnJhbWVZID09IDEpIHtcclxuICAgICAgICAvLyAgIHRoaXMuZnJhbWVZID0gMDtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgdGhpcy5mcmFtZVkgPSAxO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHNyYztcclxuICAgIH1cclxuICAgIGNoYW5nZVBoYXNlTnVtYmVyKG1vbnN0ZXJQaGFzZU51bSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9uc3RlciBjaGFuZ2luZ1wiKTtcclxuICAgICAgICBlYXRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBlYXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZWF0MVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XHJcbiAgICAgICAgaWRsZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGlkbGVJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIG1vbnN0ZXJQaGFzZU51bSArIFwiLnBuZ1wiO1xyXG4gICAgICAgIHNwaXRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzcGl0SW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3NwaXQxXCIgKyBtb25zdGVyUGhhc2VOdW0gKyBcIi5wbmdcIjtcclxuICAgICAgICBkcmFnSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgZHJhZ0ltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9kcmFnMVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWF0SW1nLnNyYyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRsZUltZy5zcmMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNwaXRJbWcuc3JjKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb25zdGVyUGhhc2VOdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVG9EcmFnQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkcmFnSW1nO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVG9FYXRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGVhdEltZztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0lkbGVBbmltYXRpb24oKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICAgIGNoYW5nZVRvSWRsZUFuaW1hdGlvbigpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaWRsZUltZztcclxuICAgIH1cclxuICAgIGNoYW5nZVRvU3BpdEFuaW1hdGlvbigpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gc3BpdEltZztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0lkbGVBbmltYXRpb24oKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICAgIGFuaW1hdGlvbih0aW1lU3RhbXApIHtcclxuICAgICAgICBsZXQgZGVsdGFUaW1lID0gdGltZVN0YW1wIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XHJcbiAgICAgICAgc2VsZi51cGRhdGUoZGVsdGFUaW1lKTtcclxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzZWxmLmFuaW1hdGlvbik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGF1c2VQb3B1cExheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IENhbmNlbEJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2NhbmNlbF9idXR0b24uanNcIjtcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzXCI7XHJcbmltcG9ydCBSZXRyeUJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL3JldHJ5X2J1dHRvbi5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZVBvcFVwIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgbGV2ZWxTdGFydCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoLCBQYXVzZVBvcHVwTGF5ZXIpO1xyXG4gICAgICAgIGNvbnN0IHNlbGZJZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBzZWxmSWRFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBzZWxmSWRFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiMTFcIjtcclxuICAgICAgICBzZWxmSWRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCI7XHJcbiAgICAgICAgdmFyIHBvcF91cF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBvcF91cF9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9wb3B1cF9iZ192MDEucG5nXCI7XHJcbiAgICAgICAgcG9wX3VwX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocG9wX3VwX2ltYWdlLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuOCwgc2VsZi5jYW52YXMud2lkdGggKiAwLjgpO1xyXG4gICAgICAgICAgICBzZWxmLmNhbmNlbEJ1dHRvbiA9IG5ldyBDYW5jZWxCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcyk7XHJcbiAgICAgICAgICAgIHNlbGYucmV0cnlCdXR0b24gPSBuZXcgUmV0cnlCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjU1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIgK1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMud2lkdGggKiAwLjQgLVxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKTtcclxuICAgICAgICAgICAgc2VsZi5jbG9zZUJ1dHRvbiA9IG5ldyBDbG9zZUJ1dHRvbihzZWxmLmNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMjUsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiArXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNCAtXHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VsZklkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZklkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNhbmNlbEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQudGltZXJUaWNraW5nLnJlc3VtZVRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQubGV2ZWxFbmRDYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYucmV0cnlCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRlbGV0ZUNhbnZhcyhzZWxmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQubGV2ZWxFbmRDYWxsQmFjayhcImNsb3NlX2J1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGVsZXRlQ2FudmFzKHNlbGYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoc2VsZikge1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkgeyB9XHJcbiAgICB1cGRhdGUoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9tcHRUZXh0TGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxudmFyIHNlbGY7XHJcbmV4cG9ydCBjbGFzcyBQcm9tcHRUZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGxldmVsU3RhcnQsIGN1cnJlbnRQdXp6bGVEYXRhLCBsZXZlbERhdGEpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xyXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gbGV2ZWxEYXRhO1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb21wdFRleHQgPSBjdXJyZW50UHV6emxlRGF0YS5wcm9tcHQucHJvbXB0VGV4dDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQdXp6bGVEYXRhID0gY3VycmVudFB1enpsZURhdGE7XHJcbiAgICAgICAgdGhpcy5mbnRzdE9yR3J0SW1nQXJyID0gW107XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmxvYWRGYW50YXN0aWNBbmRHcmVhdEltYWdlKCk7XHJcbiAgICB9XHJcbiAgICBsb2FkRmFudGFzdGljQW5kR3JlYXRJbWFnZSgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5mYW50YXN0aWNfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmZhbnRhc3RpY19pbWFnZS5zcmMgPSBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvZmFudGFzdGljXzAxLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMuZm50c3RPckdydEltZ0Fyci5wdXNoKHRoaXMuZmFudGFzdGljX2ltYWdlKTtcclxuICAgICAgICB0aGlzLmdyZWF0X2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5ncmVhdF9pbWFnZS5zcmMgPSBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvZ3JlYXRfMDEucG5nXCI7XHJcbiAgICAgICAgdGhpcy5mbnRzdE9yR3J0SW1nQXJyLnB1c2godGhpcy5ncmVhdF9pbWFnZSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFByb21wdFRleHRMYXllcik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gNTtcclxuICAgIH1cclxuICAgIHNldEN1cnJyZW50UHV6emxlRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHV6emxlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvbXB0VGV4dCA9IGRhdGEucHJvbXB0LnByb21wdFRleHQ7XHJcbiAgICB9XHJcbiAgICBzaG93RmFudGFzdGljT3JHcmVhdChpbWFnZUluZGV4KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QodGhpcy5nYW1lLndpZHRoIC8gMiAtICh0aGlzLmdhbWUud2lkdGggKiAwLjUpIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjE1LCB0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuaGVpZ2h0ICogMC4yNSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShzZWxmLmZudHN0T3JHcnRJbWdBcnJbaW1hZ2VJbmRleF0sIHRoaXMuZ2FtZS53aWR0aCAtIHRoaXMuZ2FtZS53aWR0aCAqIDAuNzUsIHRoaXMuaGVpZ2h0ICogMC4yLCB0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuaGVpZ2h0ICogMC4xKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZHJhdyhkcm9wcGVkU3RvbmVzID0gMCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5wcm9tcHRfaW1hZ2UsIHRoaXMuZ2FtZS53aWR0aCAvIDIgLSAodGhpcy5nYW1lLndpZHRoICogMC41KSAvIDIsIHRoaXMuaGVpZ2h0ICogMC4xNSwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMjUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSAzMCArIFwicHggQXJpYWxcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjb25zdCBwcm9tcHRUZXh0TGV0dGVycyA9IHRoaXMuY3VycmVudFByb21wdFRleHQuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgY29uc3QgeCA9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmhlaWdodCAqIDAuMjY7XHJcbiAgICAgICAgdmFyIGZvbnRTaXplID0gMjA7XHJcbiAgICAgICAgdmFyIGxldHRlckhpZ2hsaWdodCA9IHRoaXMuY3VycmVudFB1enpsZURhdGEudGFyZ2V0U3RvbmVzWzBdLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5sZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxldHRlckluV29yZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldHRlckhpZ2hsaWdodC5pbmNsdWRlcyhwcm9tcHRUZXh0TGV0dGVyc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVySGlnaGxpZ2h0ID0gbGV0dGVySGlnaGxpZ2h0LnNsaWNlKDEsIGxldHRlckhpZ2hsaWdodC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHByb21wdFRleHRMZXR0ZXJzW2ldLCBmb250U2l6ZSAqIGkgKyB4IC0gcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoICogNiwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiV29yZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BwZWRTdG9uZXMgPiBpIHx8IGRyb3BwZWRTdG9uZXMgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsVGV4dChcclxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50UHJvbXB0VGV4dCxcclxuICAgICAgICAvLyAgIHRoaXMud2lkdGggLyAyLjEsXHJcbiAgICAgICAgLy8gICB0aGlzLmhlaWdodCAqIDAuMjZcclxuICAgICAgICAvLyApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5wcm9tcHRfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzZWxmLnByb21wdF9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9wcm9tcHRUZXh0QmcucG5nXCI7XHJcbiAgICAgICAgc2VsZi5wcm9tcHRfaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5kcmF3KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJhY2tncm91bmQoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQcm9tcHRBdWRpbywgU3RvbmVMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IFN0b25lQ29uZmlnIH0gZnJvbSBcIi4uL2NvbW1vbi9zdG9uZXMtY29uZmlnLmpzXCI7XHJcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbmltcG9ydCBQYXVzZVBvcFVwIGZyb20gXCIuL3BhdXNlLXBvcHVwLmpzXCI7XHJcbnZhciBncyA9IHtcclxuICAgIG1vZGU6IFwiZ2FtZXBsYXlcIixcclxuICAgIGxldmVsbnVtOiAwLFxyXG59O1xyXG5ncy5wdXp6bGUgPSB7XHJcbiAgICB0YXJnZXQ6IFtdLFxyXG4gICAgc3RvbmVzOiBbXSxcclxufTtcclxuZ3Muc3RvbmVzID0gW107XHJcbnZhciBwaWNrZWRTdG9uZTtcclxudmFyIG9mZnNldENvb3JkaW5hdGVWYWx1ZSA9IDMyO1xyXG5jb25zdCBkcmFnQXVkaW8gPSBuZXcgQXVkaW8oKTtcclxuZHJhZ0F1ZGlvLnNyYyA9IFwiLi9hc3NldHMvYXVkaW9zL29uRHJhZy5tcDNcIjtcclxuZHJhZ0F1ZGlvLnByZWxvYWQgPSBcImF1dG9cIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvbmVzTGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBwdXp6bGVEYXRhLCBwYXVzZWJ1dHRvbiwgY2FsbEJhY2ssIGxldmVsU3RhcnQpIHtcclxuICAgICAgICB0aGlzLnBpY2tlZFN0b25lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLnBhdXNlYnV0dG9uID0gcGF1c2VidXR0b247XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVEYXRhID0gcHV6emxlRGF0YTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRQdXp6bGUoKTtcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBjYWxsQmFjaztcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgc2V0TmV3UHV6emxlKGN1cnJlbnRQdXp6bGUpIHtcclxuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBjdXJyZW50UHV6emxlO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFB1enpsZSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3RvbmVzKHRoaXMuc3RvbmVwb3MpO1xyXG4gICAgfVxyXG4gICAgc3RvbmVwb3Moc3RvbmVwb3MpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRQdXp6bGUoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0LmF1ZGlvLnBsYXlTb3VuZCh0aGlzLnB1enpsZURhdGEucHJvbXB0LnByb21wdEF1ZGlvLCBQcm9tcHRBdWRpbyk7XHJcbiAgICAgICAgZ3MucHV6emxlLnN0b25lcyA9IFtdO1xyXG4gICAgICAgIGdzLnB1enpsZS50YXJnZXQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgdGhpcy5wdXp6bGVEYXRhLnRhcmdldFN0b25lcykge1xyXG4gICAgICAgICAgICBncy5wdXp6bGUudGFyZ2V0LnB1c2godGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3MucHV6emxlLnN0b25lcyA9IHRoaXMuZ2FtZVN0b25lT3B0aW9ucyh0aGlzLnB1enpsZURhdGEuZm9pbFN0b25lcywgdGhpcy5wdXp6bGVEYXRhLnRhcmdldFN0b25lcyk7XHJcbiAgICAgICAgZ3MucHV6emxlLnByb21wdCA9IHRoaXMucHV6emxlRGF0YS5wcm9tcHQucHJvbXB0VGV4dDtcclxuICAgIH1cclxuICAgIGlzVGltZXJFbmRlZCgpIHtcclxuICAgICAgICBwaWNrZWRTdG9uZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5waWNrZWRTdG9uZXMgPSBbXTtcclxuICAgIH1cclxuICAgIGdhbWVTdG9uZU9wdGlvbnMoZm9pbFN0b25lcywgdGFyZ2V0U3RvbmVzKSB7XHJcbiAgICAgICAgdGFyZ2V0U3RvbmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZm9pbFN0b25lcy5pbmRleE9mKGUpICE9IC0xXHJcbiAgICAgICAgICAgICAgICA/IGZvaWxTdG9uZXMuc3BsaWNlKGZvaWxTdG9uZXMuaW5kZXhPZihlKSwgMSlcclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXJnZXRTdG9uZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBmb2lsU3RvbmVzLnB1c2goZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZvaWxTdG9uZXMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFN0b25lTGF5ZXIpO1xyXG4gICAgICAgIGNvbnN0IHNlbGZFbGVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLnN0eWxlLnpJbmRleCA9IFwiN1wiO1xyXG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5zdHlsZS5ib3R0b20gPSBcIjBcIjtcclxuICAgICAgICB0aGlzLnN0b25lcG9zID0gW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyA1IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMTUgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMy41ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMiAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyA0IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMjggLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNyAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjUgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMi4zICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjEgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS45IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMi4xIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuNDIgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNiAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjE1IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZkVsZWxlbWVudElkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICAgICAgaWYgKE1hdGguc3FydCh4IC0gdGhpcy53aWR0aCAvIDMpIDwgMTIgJiZcclxuICAgICAgICAgICAgICAgIE1hdGguc3FydCh5IC0gdGhpcy5oZWlnaHQgLyA1LjUpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5hdWRpby5wbGF5U291bmQoc2VsZi5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRBdWRpbywgUHJvbXB0QXVkaW8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoKHggLSB0aGlzLndpZHRoIC8gMiAtICh0aGlzLndpZHRoICogMC4zKSAvIDIpICpcclxuICAgICAgICAgICAgICAgICh4IC0gdGhpcy53aWR0aCAvIDIgLSAodGhpcy53aWR0aCAqIDAuMykgLyAyKSkgK1xyXG4gICAgICAgICAgICAgICAgKHkgLSB0aGlzLmhlaWdodCAqIDAuMTUpICogKHkgLSB0aGlzLmhlaWdodCAqIDAuMTUpIDw9XHJcbiAgICAgICAgICAgICAgICAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb21wdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC50aW1lclRpY2tpbmcucmVzdW1lVGltZXIoKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYucGF1c2VidXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LnRpbWVyVGlja2luZy5wYXVzZVRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQubGV2ZWxFbmRDYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgbmV3IFBhdXNlUG9wVXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCksIHNlbGYubGV2ZWxTdGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBncy5zdG9uZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoKHggLSBzLngpICogKHggLSBzLngpICsgKHkgLSBzLnkpICogKHkgLSBzLnkpKSA8PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdBdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZ0F1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZSA9IHM7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjaygnZHJhZ01vbnN0ZXJBbmltYXRpb24nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZkVsZWxlbWVudElkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICAgICAgaWYgKE1hdGguc3FydCgoeCAtXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLnggLVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci53aWR0aCAvIDQpICpcclxuICAgICAgICAgICAgICAgICh4IC1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLnggLVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIud2lkdGggLyA0KSArXHJcbiAgICAgICAgICAgICAgICAoeSAtXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci55IC1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLmhlaWdodCAvIDIuNykgKlxyXG4gICAgICAgICAgICAgICAgICAgICh5IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci55IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci5oZWlnaHQgLyAyLjcpKSA8PSA2MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBpY2tlZFN0b25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueCA9IC05MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IC05MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpY2tlZFN0b25lLnRleHQgPT0gZ3MucHV6emxlLnRhcmdldFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBpY2tlZFN0b25lcy5wdXNoKHBpY2tlZFN0b25lLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncy5wdXp6bGUudGFyZ2V0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncy5wdXp6bGUudGFyZ2V0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncy5zdG9uZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2sodW5kZWZpbmVkLCB0cnVlLCB0cnVlLCBwaWNrZWRTdG9uZS50ZXh0LCBzZWxmLnBpY2tlZFN0b25lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBpY2tlZFN0b25lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjayh1bmRlZmluZWQsIHRydWUsIGZhbHNlLCBwaWNrZWRTdG9uZS50ZXh0LCBzZWxmLnBpY2tlZFN0b25lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGlja2VkU3RvbmVzLnB1c2gocGlja2VkU3RvbmUudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdzLnN0b25lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrKHVuZGVmaW5lZCwgZmFsc2UsIHRydWUsIHBpY2tlZFN0b25lLnRleHQsIHNlbGYucGlja2VkU3RvbmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5waWNrZWRTdG9uZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBpY2tlZFN0b25lKSB7XHJcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS54ID0gcGlja2VkU3RvbmUub3JpZ3g7XHJcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS55ID0gcGlja2VkU3RvbmUub3JpZ3k7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrKCdzdG9wRHJhZ01vbnN0ZXJBbmltYXRpb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwaWNrZWRTdG9uZSA9IG51bGw7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueCA9IHg7XHJcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS55ID0geTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICB2YXIgbW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZkVsZWxlbWVudElkLmRpc3BhdGNoRXZlbnQobW91c2VFdmVudCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXTtcclxuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNlbW92ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGZFbGVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIHZhciBtb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZkVsZWxlbWVudElkLmRpc3BhdGNoRXZlbnQobW91c2VFdmVudCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3RvbmVzKHRoaXMuc3RvbmVwb3MpO1xyXG4gICAgfVxyXG4gICAgc2V0UHJvbXB0KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0aGlzLndpZHRoICogMC4wOSArIFwicHggQXJpYWxcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoZ3MucHV6emxlLnByb21wdCwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0ICogMC4yNyk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBmb3IgKGxldCBzIG9mIGdzLnN0b25lcykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdzdG9uZShzLCB0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd3N0b25lKHMsIGNhbnZhcykge1xyXG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBjYW52YXMuaGVpZ2h0IC8gMTM7XHJcbiAgICAgICAgdmFyIHRleHRGb250U2l6ZSA9IGNhbnZhcy5oZWlnaHQgLyAyMDtcclxuICAgICAgICB2YXIgaW1hZ2VDZW50ZXJPZmZzZXRYID0gaW1hZ2VTaXplIC8gMi4zO1xyXG4gICAgICAgIHZhciBpbWFnZUNlbnRlck9mZnNldFkgPSBpbWFnZVNpemUgLyAxLjU7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShzLmltZywgcy54IC0gaW1hZ2VDZW50ZXJPZmZzZXRYLCBzLnkgLSBpbWFnZUNlbnRlck9mZnNldFksIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gdGV4dEZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChzLnRleHQsIHMueCwgcy55KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVN0b25lcyhzdG9uZXBvcykge1xyXG4gICAgICAgIHZhciBwb3NzID0gc3RvbmVwb3NbMF07XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIGdzLnN0b25lcy5zcGxpY2UoMCwgZ3Muc3RvbmVzLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgcyBvZiBncy5wdXp6bGUuc3RvbmVzKSB7XHJcbiAgICAgICAgICAgIHZhciBucyA9IG5ldyBTdG9uZUNvbmZpZyhzLCBwb3NzW2ldWzBdLCBwb3NzW2ldWzFdKTtcclxuICAgICAgICAgICAgZ3Muc3RvbmVzLnB1c2gobnMpO1xyXG4gICAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRpbWVPdmVyLCBUaW1ldGlja2VyTGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5leHBvcnQgY2xhc3MgVGltZXJUaWNraW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGxldmVsU3RhcnQpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aFRvQ2xlYXIgPSB0aGlzLmdhbWUud2lkdGggLyAzLjQ7XHJcbiAgICAgICAgdGhpcy5tYXhMaW1pdEV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUaW1lckVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcclxuICAgICAgICB0aGlzLmlzVGltZXJSdW5uaW5nT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFRpbWV0aWNrZXJMYXllcik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI0XCI7XHJcbiAgICAgICAgLy8gdGhpcy5hbmltYXRpb24oMCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUJhY2tncm91ZCgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy50aW1lcl9mdWxsID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy50aW1lcl9mdWxsLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3RpbWVyX2Z1bGwucG5nXCI7XHJcbiAgICAgICAgdGhpcy50aW1lcl9mdWxsLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZHJhdygpO1xyXG4gICAgICAgICAgICBzZWxmLmJlZ2luVGltZXJPblN0YXJ0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RpbWVyU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICs9IDAuMDY7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA+IDU1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyIDwgMTAwICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA+IDU0ICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5pc1RpbWVyUnVubmluZ091dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyUnVubmluZ091dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsU3RhcnQuYXVkaW8ucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL3RpbWVvdXQubXAzXCIsIFRpbWVPdmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPCA1NSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPiA1NCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyUnVubmluZ091dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyRW5kZWQgPyB0aGlzLmxldmVsU3RhcnQuY2hhbmdlUHV6emxlKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBiZWdpblRpbWVyT25TdGFydCgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXVzZUJ1dHRvbkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2VsZi5pc1RpbWVyU3RhcnRlZCAmJiBzZWxmLnRpbWVyID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzVGltZXJTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gICAgc3RvcFRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVyIFN0b3BwZWRcIik7XHJcbiAgICB9XHJcbiAgICBwYXVzZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uQ2xpY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXN1bWVUaW1lcigpIHtcclxuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnRpbWVyX2Z1bGwsIHRoaXMuZ2FtZS53aWR0aCAqIDAuMTIsIHRoaXMuaGVpZ2h0ICogMC4wOTksIHRoaXMuZ2FtZS53aWR0aCAtIDUwLCB0aGlzLmhlaWdodCAqIDAuMDUpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYmVnaW5UaW1lck9uU3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG5jb25zdCBVUkwgPSBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9mdG1fXCIgKyBsYW5nICsgXCIuanNvblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnRtRGF0YSgpIHtcclxuICAgIHJldHVybiBmZXRjaChVUkwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgLy8gbGV0IGQgPSB7XHJcbiAgICAgICAgLy8gICAgIFwiT3RoZXJBdWRpb3NcIjogbnVsbCxcclxuICAgICAgICAvLyAgICAgXCJGZWVkYmFja1RleHRzXCI6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIFwiTGV2ZWxzXCI6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIFwiRmVlZGJhY2tBdWRpb3NcIjogbnVsbCxcclxuICAgICAgICAvLyAgICAgXCJSaWdodFRvTGVmdFwiOiBudWxsXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiB5aWVsZCBnZXRGdG1EYXRhKCk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRGF0YU1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKG90aGVyQXVkaW9zLCBsZXZlbHMsIGZlZWRiYWNrVGV4dHMsIHJpZ2h0VG9MZWZ0LCBmZWVkYmFja0F1ZGlvcykge1xyXG4gICAgICAgIHRoaXMub3RoZXJBdWRpb3MgPSBuZXcgT3RoZXJBdWRpb3Mob3RoZXJBdWRpb3MpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxzID0gdGhpcy5nZXRMZXZlbHMobGV2ZWxzKTtcclxuICAgICAgICB0aGlzLkZlZWRiYWNrVGV4dHMgPSBuZXcgRmVlZGJhY2tUZXh0cyhmZWVkYmFja1RleHRzKTtcclxuICAgICAgICB0aGlzLkZlZWRiYWNrQXVkaW9zID0gbmV3IEZlZWRiYWNrQXVkaW9zKGZlZWRiYWNrQXVkaW9zKTtcclxuICAgICAgICB0aGlzLnJpZ2h0VG9MZWZ0ID0gcmlnaHRUb0xlZnQ7XHJcbiAgICB9XHJcbiAgICBnZXRMZXZlbHMobGV2ZWxzKSB7XHJcbiAgICAgICAgbGV0IGxldmVsQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXZlbEFycmF5LnB1c2gobmV3IExldmVscyhsZXZlbHNbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxldmVsQXJyYXk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE90aGVyQXVkaW9zIHtcclxuICAgIGNvbnN0cnVjdG9yKG90aGVyQXVkaW9zKSB7XHJcbiAgICAgICAgdGhpcy5zZWxjdFlvdXJQbGF5ZXIgPSBvdGhlckF1ZGlvc1tcIlNlbGVjdCB5b3VyIHBsYXllclwiXTtcclxuICAgICAgICB0aGlzLndhdGNoTWVHcm93ID0gb3RoZXJBdWRpb3NbXCJXYXRjaCBtZSBncm93XCJdO1xyXG4gICAgICAgIHRoaXMuYXJlWW91U3VyZSA9IG90aGVyQXVkaW9zW1wiQXJlIHlvdSBzdXJlXCJdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1RleHRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGZlZWRiYWNrVGV4dHMpIHtcclxuICAgICAgICB0aGlzLmZhbnRhc3RpYyA9IGZlZWRiYWNrVGV4dHNbMF07XHJcbiAgICAgICAgdGhpcy5ncmVhdCA9IGZlZWRiYWNrVGV4dHNbMV07XHJcbiAgICAgICAgdGhpcy5hbWF6aW5nID0gZmVlZGJhY2tUZXh0c1syXTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tBdWRpb3Mge1xyXG4gICAgY29uc3RydWN0b3IoZmVlZGJhY2tBdWRpb3MpIHtcclxuICAgICAgICB0aGlzLmZhbnRhc3RpYyA9IGZlZWRiYWNrQXVkaW9zWzBdO1xyXG4gICAgICAgIHRoaXMuZ3JlYXQgPSBmZWVkYmFja0F1ZGlvc1sxXTtcclxuICAgICAgICB0aGlzLmFtYXppbmcgPSBmZWVkYmFja0F1ZGlvc1syXTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGV2ZWxzIHtcclxuICAgIGNvbnN0cnVjdG9yKGxldmVscykge1xyXG4gICAgICAgIHRoaXMucHV6emxlcyA9IHRoaXMuZ2V0UHV6emxlRGF0YShsZXZlbHMpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxNZXRhID0gbmV3IExldmVsTWV0YShsZXZlbHMuTGV2ZWxNZXRhKTtcclxuICAgICAgICB0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxzLkxldmVsTnVtYmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0UHV6emxlRGF0YShsZXZlbHMpIHtcclxuICAgICAgICBsZXQgcHV6emxlT2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIGxldmVscy5QdXp6bGVzLm1hcCgocHV6emxlRGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcHV6emxlT2JqZWN0cy5wdXNoKG5ldyBQdXp6bGVzKHB1enpsZURhdGEpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHV6emxlT2JqZWN0cztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUHV6emxlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdXp6bGUpIHtcclxuICAgICAgICB0aGlzLnNlZ21lbnROdW1iZXIgPSBwdXp6bGUuU2VnbWVudE51bWJlcjtcclxuICAgICAgICB0aGlzLnByb21wdCA9IG5ldyBQcm9tcHQocHV6emxlLnByb21wdCk7XHJcbiAgICAgICAgdGhpcy5mb2lsU3RvbmVzID0gdGhpcy5nZXRGb2lsU3RvbmVzKHB1enpsZSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXRTdG9uZXMgPSB0aGlzLmdldFRhcmdldFN0b25lcyhwdXp6bGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rm9pbFN0b25lcyhwdXp6bGUpIHtcclxuICAgICAgICBsZXQgZm9pbFN0b25lQXJyYXkgPSBbXTtcclxuICAgICAgICBwdXp6bGUuZm9pbHN0b25lcy5tYXAoKHN0b25lcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZm9pbFN0b25lQXJyYXkucHVzaChzdG9uZXMuU3RvbmVUZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZm9pbFN0b25lQXJyYXk7XHJcbiAgICB9XHJcbiAgICBnZXRUYXJnZXRTdG9uZXMocHV6emxlKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFN0b25lQXJyYXkgPSBbXTtcclxuICAgICAgICBwdXp6bGUudGFyZ2V0c3RvbmVzLm1hcCgoc3RvbmVzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0YXJnZXRTdG9uZUFycmF5LnB1c2goc3RvbmVzLlN0b25lVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFN0b25lQXJyYXk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvaWxTdG9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdG9uZVRleHQpIHtcclxuICAgICAgICB0aGlzLnN0b25lVGV4dCA9IHN0b25lVGV4dDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgVGFyZ2V0U3RvbmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9uZVRleHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFByb21wdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9tcHQpIHtcclxuICAgICAgICB0aGlzLnByb21wdFRleHQgPSBwcm9tcHQuUHJvbXB0VGV4dDtcclxuICAgICAgICB0aGlzLnByb21wdEF1ZGlvID0gcHJvbXB0LlByb21wdEF1ZGlvO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMZXZlbE1ldGEge1xyXG4gICAgY29uc3RydWN0b3IobGV2ZWxNZXRhKSB7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRGYWRlT3V0ID0gbGV2ZWxNZXRhLlByb21wdEZhZGVvdXQ7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJHcm91cCA9IGxldmVsTWV0YS5MZXR0ZXJHcm91cDtcclxuICAgICAgICB0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxNZXRhLkxldmVsTnVtYmVyO1xyXG4gICAgICAgIHRoaXMucHJvdG9UeXBlID0gbGV2ZWxNZXRhLlByb21wdFR5cGU7XHJcbiAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBsZXZlbE1ldGEuTGV2ZWxUeXBlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG5leHBvcnQgY2xhc3MgUHJvZmlsZURhdGEge1xyXG4gICAgY29uc3RydWN0b3IobGV2ZWxOYW1lLCBsZXZlbE51bWJlciwgbGV2ZWxTY29yZSwgbGV2ZWxTdGFyKSB7XHJcbiAgICAgICAgKHRoaXMubGV2ZWxOYW1lID0gbGV2ZWxOYW1lKSxcclxuICAgICAgICAgICAgKHRoaXMubGV2ZWxOdW1iZXIgPSBsZXZlbE51bWJlciksXHJcbiAgICAgICAgICAgICh0aGlzLmxldmVsU2NvcmUgPSBsZXZlbFNjb3JlKSxcclxuICAgICAgICAgICAgKHRoaXMubGV2ZWxTdGFyID0gbGV2ZWxTdGFyKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0YVRvU3RvcmFnZShwcm9maWxlRGF0YSkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdEYXRhID0gZ2V0RGF0YWZyb21TdG9yYWdlKClcclxuICAgICAgICA/IGpzb25Ub0FycmF5KGdldERhdGFmcm9tU3RvcmFnZSgpKVxyXG4gICAgICAgIDogW107XHJcbiAgICBwcm9maWxlRGF0YSA/IGRhdGFQdXNoVG9BcnJheShleGlzdGluZ0RhdGEsIHByb2ZpbGVEYXRhKSA6IG51bGw7XHJcbiAgICBleGlzdGluZ0RhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChhLmxldmVsTnVtYmVyID4gYi5sZXZlbE51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShleGlzdGluZ0RhdGEpO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsYW5nICsgXCJQcm9maWxlXCIsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGpzb25Ub0FycmF5KGpzb24pIHtcclxuICAgIHZhciBkYXRhID0gW107XHJcbiAgICBmb3IgKHZhciBpIGluIGpzb24pIHtcclxuICAgICAgICBkYXRhLnB1c2goanNvbltpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5mdW5jdGlvbiBkYXRhUHVzaFRvQXJyYXkoanNvbkRhdGEsIHByb2ZpbGVEYXRhKSB7XHJcbiAgICB2YXIgZGF0YU5vdEV4aXN0ID0gdHJ1ZTtcclxuICAgIGpzb25EYXRhLmZvckVhY2goKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAocGFyc2VJbnQoZGF0YS5sZXZlbE51bWJlcikgPT0gcGFyc2VJbnQocHJvZmlsZURhdGEubGV2ZWxOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIGRhdGFOb3RFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkYXRhLmxldmVsU2NvcmUgPCBwcm9maWxlRGF0YS5sZXZlbFNjb3JlXHJcbiAgICAgICAgICAgICAgICA/IChkYXRhLmxldmVsU2NvcmUgPSBwcm9maWxlRGF0YS5sZXZlbFNjb3JlKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBkYXRhLmxldmVsU3RhciA8IHByb2ZpbGVEYXRhLmxldmVsU3RhclxyXG4gICAgICAgICAgICAgICAgPyAoZGF0YS5sZXZlbFN0YXIgPSBwcm9maWxlRGF0YS5sZXZlbFN0YXIpXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkYXRhTm90RXhpc3QgPyBqc29uRGF0YS5wdXNoKHByb2ZpbGVEYXRhKSA6IG51bGw7XHJcbiAgICByZXR1cm4ganNvbkRhdGE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFmcm9tU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxhbmcgKyBcIlByb2ZpbGVcIikgfHwgXCJ7fVwiKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QjhjMmxCVmkyNnU3WVJMOXN4T1A5N1VhcTN5TjhoVGw0XCIsXHJcbiAgYXV0aERvbWFpbjogXCJmdG0tYjlkOTkuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9mdG0tYjlkOTkuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZnRtLWI5ZDk5XCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJmdG0tYjlkOTkuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2MDI0MDIzODc5NDFcIixcclxuICBhcHBJZDogXCIxOjYwMjQwMjM4Nzk0MTp3ZWI6YTYzZjRlYWRkYzk0OWY1MzlkZTEwY1wiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1GVkxTTjdEN05NXCIsXHJcbn07XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgZmlyZWJhc2VDb25maWcgfSBmcm9tIFwiLi9maXJlYmFzZV9jb25maWdcIjtcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlSW50ZWdyYXRpb24ge1xyXG4gICAgc3RhdGljIGluaXRpYWxpemVGaXJlYmFzZSgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmViYXNlQXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzID0gZmlyZWJhc2UuYW5hbHl0aWNzKHRoaXMuZmlyZWJhc2VBcHApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNlc3Npb25FbmQoKSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXRpY3MubG9nRXZlbnQoXCJzZXNzaW9uX2VuZFwiKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjdXN0b21FdmVudHMoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuYW5hbHl0aWNzLmxvZ0V2ZW50KGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbmltcG9ydCB7IEdhbWVFbmRMYXllciwgbG9hZEltYWdlcyB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbnZhciBpbWFnZXMgPSB7XHJcbiAgICBiZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiLFxyXG4gICAgaGlsbEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvaGlsbF92MDEucG5nXCIsXHJcbiAgICB0aW1lcl9lbXB0eTogXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXJfZW1wdHkucG5nXCIsXHJcbiAgICBwaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1RvdGVtX3YwMl92MDEucG5nXCIsXHJcbiAgICBncmFzc0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvRkdfYV92MDEucG5nXCIsXHJcbiAgICBmZW5jaEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvZmVuY2VfdjAxLnBuZ1wiLFxyXG4gICAgYmlnTW9uc3RlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvZnRtX2JvbnVzX2xldmVsX21vbnN0ZXJzLnBuZ1wiXHJcbn07XHJcbnZhciBzZWxmO1xyXG5leHBvcnQgY2xhc3MgR2FtZUVuZFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBHYW1lRW5kTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9ICczJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NyaXB0aW9uLXRleHRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NyaXB0aW9uLXRleHRcIikuaW5uZXJIVE1MID0gZ2xvYmFsVGhpcy5kZXNjcmlwdGlvblRleHQ7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCYWNrZ3JvdWQoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZUNhbnZhcygpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NyaXB0aW9uLXRleHRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICAgICAgLy9kZWxldGUgdGhpcztcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVCYWNrZ3JvdWQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIGxvYWRJbWFnZXMoaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYmdJbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5waWxsZXJJbWcsIHdpZHRoICogMC42LCBoZWlnaHQgLyA2LCB3aWR0aCwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmZlbmNoSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDMsIHdpZHRoLCBoZWlnaHQgLyAzKTtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuaGlsbEltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5ncmFzc0ltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiArIChoZWlnaHQgLyAyKSAqIDAuMSwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5iaWdNb25zdGVySW1nLCB3aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgLSBoZWlnaHQgKiAwLjI1LCB3aWR0aCAvIDEuNywgaGVpZ2h0IC8gMi41KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTdG9yZU1vbnN0ZXJQaGFzZU51bWJlciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IExldmVsU3RhcnRTY2VuZSB9IGZyb20gXCIuL2xldmVsLXN0YXJ0LXNjZW5lLmpzXCI7XHJcbnZhciBhbmltYXRpb25GcmFtZTtcclxudmFyIHNlbGY7XHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHB1enpsZURhdGEsIGdhbWVTY2VuZUNhbGxCYWNrKSB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyID1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIpIHx8IDE7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBMZXZlbFN0YXJ0U2NlbmUoe1xyXG4gICAgICAgICAgICBnYW1lOiB0aGlzLFxyXG4gICAgICAgICAgICBsZXZlbERhdGE6IHB1enpsZURhdGEsXHJcbiAgICAgICAgICAgIGxldmVsU3RhcnRDYWxsQmFjazogdGhpcy5sZXZlbFN0YXJ0Q2FsbEJhY2ssXHJcbiAgICAgICAgICAgIG1vbnN0ZXJQaGFzZU51bWJlcjogdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nYW1lU2NlbmVDYWxsQmFjayA9IGdhbWVTY2VuZUNhbGxCYWNrO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24oKTtcclxuICAgIH1cclxuICAgIGxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XHJcbiAgICAgICAgc3dpdGNoIChidXR0b25fbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2soYnV0dG9uX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIm5leHRfYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2soYnV0dG9uX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInJldHJ5X2J1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHNlbGYuc2NlbmUgPyAoc2VsZi5zY2VuZS5zdG9uZXMgPyBzZWxmLnNjZW5lLnN0b25lcy51cGRhdGUoKSA6IG51bGwpIDogbnVsbDtcclxuICAgICAgICBzZWxmLnNjZW5lID8gc2VsZi5zY2VuZS51cGRhdGUoKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuY3JlYXRlQmFja2dyb3VkKCk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRpb24oKSB7XHJcbiAgICAgICAgc2VsZi51cGRhdGUoKTtcclxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzZWxmLmFuaW1hdGlvbik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IEludHJvTXVzaWMsIExldmVsRW5kQXVkaW8sIExldmVsRW5kQnV0dG9uc0xheWVyLCBMZXZlbEVuZExheWVyLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL2Nsb3NlX2J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL25leHRfYnV0dG9uLmpzXCI7XHJcbmltcG9ydCBSZXRyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL3JldHJ5X2J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlRGF0YSwgc2V0RGF0YVRvU3RvcmFnZSB9IGZyb20gXCIuLi9kYXRhL3Byb2ZpbGUtZGF0YS5qc1wiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUludGVncmF0aW9uIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlX2ludGVncmF0aW9uLmpzXCI7XHJcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbnZhciBhdWRpb1VybCA9IHtcclxuICAgIGxldmVsV2luOiBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbFdpbkZhbmZhcmUubXAzXCIsXHJcbiAgICBsZXZlbExvc2U6IFwiLi9hc3NldHMvYXVkaW9zL0xldmVsTG9zZUZhbmZhcmUubXAzXCIsXHJcbiAgICBpbnRybzogXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ud2F2XCIsXHJcbn07XHJcbmV4cG9ydCBjbGFzcyBMZXZlbEVuZFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgc2NvcmUsIG1vbnN0ZXIsIGxldmVsRW5kQ2FsbEJhY2ssIGxldmVsRGF0YSwgaXNHYW1lUGF1c2UsIG1vbnN0ZXJQaGFzZU51bWJlciwgbGV2ZWxTdGFydFRpbWUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMubW9uc3RlciA9IG1vbnN0ZXI7XHJcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBsZXZlbERhdGE7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVQYXVzZSA9IGlzR2FtZVBhdXNlO1xyXG4gICAgICAgIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyID0gbW9uc3RlclBoYXNlTnVtYmVyIHx8IDE7XHJcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0VGltZSA9IGxldmVsU3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMubGV2ZWxFbmRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgdGhpcy5zdGFyQ291bnQgPVxyXG4gICAgICAgICAgICBzY29yZSA9PSAyMDBcclxuICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgOiBzY29yZSA9PSAzMDBcclxuICAgICAgICAgICAgICAgICAgICA/IDJcclxuICAgICAgICAgICAgICAgICAgICA6IHNjb3JlID09IDQwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzY29yZSA9PSA1MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEVuZEZpcmViYXNlRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEVuZENhbGxCYWNrID0gbGV2ZWxFbmRDYWxsQmFjaztcclxuICAgICAgICBzZXREYXRhVG9TdG9yYWdlKG5ldyBQcm9maWxlRGF0YShsZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsVHlwZSwgbGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbE51bWJlciwgc2NvcmUsIHRoaXMuc3RhckNvdW50KSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhckNvdW50IDw9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc2NlbmUuYXVkaW8ucGxheVNvdW5kKGF1ZGlvVXJsLmxldmVsTG9zZSwgTGV2ZWxFbmRBdWRpbyk7XHJcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9zYWQxXCIgKyB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNjZW5lLmF1ZGlvLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIiwgSW50cm9NdXNpYyk7XHJcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9oYXBweTFcIiArIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubGV2ZWxXaW4sIExldmVsRW5kQXVkaW8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ud2F2XCIsIEludHJvTXVzaWMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VaaW5kZXgoOSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIExldmVsRW5kTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS56SW5kZXggPSBcIjhcIjtcclxuICAgICAgICB0aGlzLmJvdHRvbkxheWVyID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoLCBMZXZlbEVuZEJ1dHRvbnNMYXllcik7XHJcbiAgICAgICAgdGhpcy5ib3R0b25Db250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3R0b25MYXllcikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYm90dG9uTGF5ZXIpLnN0eWxlLnpJbmRleCA9XHJcbiAgICAgICAgICAgIFwiOVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XHJcbiAgICAgICAgICAgIFwiIzAwNDA3QlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuL2Fzc2V0cy9pbWFnZXMvV0lOX3NjcmVlbl9iZy5wbmcnKVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRTaXplID1cclxuICAgICAgICAgICAgXCJjb250YWluXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cclxuICAgICAgICAgICAgXCJjZW50ZXJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kQXR0YWNobWVudCA9IFwiZml4ZWRcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID1cclxuICAgICAgICAgICAgXCJuby1yZXBlYXRcIjtcclxuICAgICAgICB2YXIgc3RhcjEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzdGFyMS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9waW5TdGFyMS5wbmdcIjtcclxuICAgICAgICB2YXIgc3RhcjIgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzdGFyMi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9waW5TdGFyMi5wbmdcIjtcclxuICAgICAgICB2YXIgc3RhcjMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzdGFyMy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9waW5TdGFyMy5wbmdcIjtcclxuICAgICAgICBzZWxmLmRyYXdTdGFydHMoc2VsZiwgc3RhcjEsIHN0YXIyLCBzdGFyMyk7XHJcbiAgICAgICAgc2VsZi5uZXh0QnV0dG9uID1cclxuICAgICAgICAgICAgc2VsZi5zdGFyQ291bnQgPj0gMlxyXG4gICAgICAgICAgICAgICAgPyBuZXcgTmV4dEJ1dHRvbihzZWxmLmNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuOCAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC43KVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIHNlbGYucmV0cnlCdXR0b24gPSBuZXcgUmV0cnlCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5zdGFyQ291bnQgPj0gMlxyXG4gICAgICAgICAgICA/IHNlbGYuY2FudmFzLndpZHRoICogMC41IC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyXHJcbiAgICAgICAgICAgIDogc2VsZi5jYW52YXMud2lkdGggKiAwLjggLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuNyk7XHJcbiAgICAgICAgc2VsZi5jbG9zZUJ1dHRvbiA9IG5ldyBDbG9zZUJ1dHRvbihzZWxmLmNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC43KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJvdHRvbkxheWVyKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5ib3R0b25MYXllcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5uZXh0QnV0dG9uICYmIHNlbGYubmV4dEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wYXVzZVNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kQ2FsbEJhY2soXCJuZXh0X2J1dHRvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5yZXRyeUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wYXVzZVNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuY2xvc2VCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbEVuZENhbGxCYWNrKFwiY2xvc2VfYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkcmF3U3RhcnRzKHNlbGYsIHN0YXIxLCBzdGFyMiwgc3RhcjMpIHtcclxuICAgICAgICBzdGFyMS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zdGFyQ291bnQgPj0gMikge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RhcjIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc3RhckNvdW50IDw9IDMgJiYgc2VsZi5zdGFyQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHN0YXIyLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNSAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4xNSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0YXIzLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXJDb3VudCA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHN0YXIzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuODIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKHNlbGYpIHtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5ib3R0b25MYXllcik7XHJcbiAgICB9XHJcbiAgICBsZXZlbEVuZEZpcmViYXNlRXZlbnRzKCkge1xyXG4gICAgICAgIEZpcmViYXNlSW50ZWdyYXRpb24uY3VzdG9tRXZlbnRzKFwibGV2ZWxfY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgICAgZGF0ZV90aW1lOiB0aGlzLmxldmVsRW5kVGltZS5nZXREYXRlKCkgK1xyXG4gICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUuZ2V0TW9udGgoKSArXHJcbiAgICAgICAgICAgICAgICAxICtcclxuICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxFbmRUaW1lLmdldEZ1bGxZZWFyKCkgK1xyXG4gICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUuZ2V0SG91cnMoKSArXHJcbiAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRW5kVGltZS5nZXRNaW51dGVzKCkgK1xyXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUuZ2V0U2Vjb25kcygpLFxyXG4gICAgICAgICAgICBzdWNjZXNzX29yX2ZhaWx1cmU6IHRoaXMuc3RhckNvdW50ID49IDMgPyBcInN1Y2Nlc3NcIiA6IFwiZmFpbHVyZVwiLFxyXG4gICAgICAgICAgICBsZXZlbF9udW1iZXI6IHRoaXMubGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbE51bWJlcixcclxuICAgICAgICAgICAgbnVtYmVyX29mX3N1Y2Nlc3NmdWxfcHV6emxlczogdGhpcy5zY29yZSAvIDEwMCxcclxuICAgICAgICAgICAgZnRtX2xhbmd1YWdlOiBsYW5nLFxyXG4gICAgICAgICAgICBwcm9maWxlX251bWJlcjogMCxcclxuICAgICAgICAgICAgdmVyc2lvbl9udW1iZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyc2lvbi1pbmZvLWlkXCIpLmlubmVySFRNTCxcclxuICAgICAgICAgICAgZHVyYXRpb246IE1hdGguYWJzKE1hdGguY2VpbCgodGhpcy5sZXZlbEVuZFRpbWUuZ2V0VGltZSgpIC0gdGhpcy5sZXZlbFN0YXJ0VGltZSkgLyAxMDAwKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxDb25maWcgfSBmcm9tIFwiLi4vY29tbW9uL2xldmVsLWNvbmZpZy5qc1wiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xyXG5pbXBvcnQgeyBCdXR0b25DbGljaywgSW50cm9NdXNpYywgTGV2ZWxTZWxlY3Rpb25MYXllciwgUHJldmlvdXNQbGF5ZWRMZXZlbCwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgU291bmQgZnJvbSBcIi4uL2NvbW1vbi9zb3VuZC5qc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRhZnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi4vZGF0YS9wcm9maWxlLWRhdGEuanNcIjtcclxudmFyIG1hcEljb24gPSBuZXcgSW1hZ2UoKTtcclxubWFwSWNvbi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBJY29uLnBuZ1wiO1xyXG52YXIgbWFwTG9jayA9IG5ldyBJbWFnZSgpO1xyXG5tYXBMb2NrLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcExvY2sucG5nXCI7XHJcbnZhciBtYXAgPSBuZXcgSW1hZ2UoKTtcclxubWFwLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcC5qcGdcIjtcclxudmFyIHN0YXIgPSBuZXcgSW1hZ2UoKTtcclxuc3Rhci5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zdGFyLnBuZ1wiO1xyXG52YXIgbmV4dGJ0biA9IG5ldyBJbWFnZSgpO1xyXG5uZXh0YnRuLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25leHRfYnRuLnBuZ1wiO1xyXG52YXIgYmFja2J0biA9IG5ldyBJbWFnZSgpO1xyXG5iYWNrYnRuLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tfYnRuLnBuZ1wiO1xyXG52YXIgbGV2ZWxOdW1iZXI7XHJcbnZhciBzZWxmO1xyXG52YXIgdW5sb2NrTGV2ZWxJbmRleCA9IC0xO1xyXG52YXIgcHJldmlvdXNQbGF5ZWRMZXZlbCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFByZXZpb3VzUGxheWVkTGV2ZWwpKSB8IDA7XHJcbnZhciBsZXZlbDtcclxuaWYgKHByZXZpb3VzUGxheWVkTGV2ZWwgIT0gbnVsbCkge1xyXG4gICAgbGV2ZWwgPSAxMCAqIE1hdGguZmxvb3IocHJldmlvdXNQbGF5ZWRMZXZlbCAvIDEwKTtcclxufVxyXG5leHBvcnQgY2xhc3MgTGV2ZWxTZWxlY3Rpb25TY3JlZW4ge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubGV2ZWxzID0gW107XHJcbiAgICAgICAgdGhpcy5sZXZlbHNTZWN0aW9uQ291bnQgPVxyXG4gICAgICAgICAgICBzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCAvIDEwID4gTWF0aC5mbG9vcihzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCAvIDEwKVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLmZsb29yKHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTApICsgMVxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLmZsb29yKHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTApO1xyXG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgU291bmQoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuZHJhd1N0YXJzKCk7XHJcbiAgICB9XHJcbiAgICBnYW1lU2NlbmVDYWxsQmFjayhidXR0b25fbmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoYnV0dG9uX25hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm5leHRfYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRHYW1lKChsZXZlbE51bWJlciArPSAxKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRHYW1lKGxldmVsTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zb3VuZC5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ud2F2XCIsIEludHJvTXVzaWMpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLnNvdW5kLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIiwgSW50cm9NdXNpYyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnNvdW5kLmFjdGl2ZVNjcmVlbigpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgTGV2ZWxTZWxlY3Rpb25MYXllcik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcclxuICAgICAgICB0aGlzLnN0YXJzSWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBMZXZlbFNlbGVjdGlvbkxheWVyICsgMSk7XHJcbiAgICAgICAgdGhpcy5zdGFyc0NhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpO1xyXG4gICAgICAgIHRoaXMuc3RhcnNDb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLnN0YXJzQ2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSBcIjNcIjtcclxuICAgICAgICB0aGlzLmxldmVsQnV0dG9ucG9zID0gW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTBdLFxyXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzICsgdGhpcy5jYW52YXMud2lkdGggLyAyLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTAsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMTAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDNdLFxyXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDIuOCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjhdLFxyXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjhdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMyArIHRoaXMuY2FudmFzLndpZHRoIC8gMi44LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOCxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuM10sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGFyc0lkKVxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCwgZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSwgZmFsc2UpO1xyXG4gICAgICAgIHZhciB4RG93biA9IG51bGw7XHJcbiAgICAgICAgdmFyIHlEb3duID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBnZXRUb3VjaGVzKGV2dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGV2dC50b3VjaGVzIHx8IC8vIGJyb3dzZXIgQVBJXHJcbiAgICAgICAgICAgICAgICBldnQub3JpZ2luYWxFdmVudC50b3VjaGVzKTsgLy8galF1ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZXZ0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VG91Y2ggPSBnZXRUb3VjaGVzKGV2dClbMF07XHJcbiAgICAgICAgICAgIHhEb3duID0gZmlyc3RUb3VjaC5jbGllbnRYO1xyXG4gICAgICAgICAgICB5RG93biA9IGZpcnN0VG91Y2guY2xpZW50WTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2dCkge1xyXG4gICAgICAgICAgICBpZiAoIXhEb3duIHx8ICF5RG93bikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB4VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICB2YXIgeVVwID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICAgICAgdmFyIHhEaWZmID0geERvd24gLSB4VXA7XHJcbiAgICAgICAgICAgIHZhciB5RGlmZiA9IHlEb3duIC0geVVwO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeERpZmYpID4gTWF0aC5hYnMoeURpZmYpKSB7XHJcbiAgICAgICAgICAgICAgICAvKm1vc3Qgc2lnbmlmaWNhbnQqL1xyXG4gICAgICAgICAgICAgICAgaWYgKHhEaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSBzZWxmLmxldmVsc1NlY3Rpb25Db3VudCAqIDEwIC0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IGxldmVsICsgMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHJpZ2h0IHN3aXBlICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IGxldmVsIC0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kb3duQnV0dG9uKGxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXdTdGFycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGxlZnQgc3dpcGUgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh5RGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBkb3duIHN3aXBlICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiB1cCBzd2lwZSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIHJlc2V0IHZhbHVlcyAqL1xyXG4gICAgICAgICAgICB4RG93biA9IG51bGw7XHJcbiAgICAgICAgICAgIHlEb3duID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGFyc0lkKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICAgICAgaWYgKHggPj0gc2VsZi5jYW52YXMud2lkdGggKiAwLjcgJiZcclxuICAgICAgICAgICAgICAgIHggPCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNyArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwICYmXHJcbiAgICAgICAgICAgICAgICB5ID4gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICYmXHJcbiAgICAgICAgICAgICAgICB5IDwgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTApIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSBzZWxmLmxldmVsc1NlY3Rpb25Db3VudCAqIDEwIC0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IGxldmVsICsgMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3KGxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHggPj0gc2VsZi5jYW52YXMud2lkdGggLyAxMCAmJlxyXG4gICAgICAgICAgICAgICAgeCA8IHNlbGYuY2FudmFzLndpZHRoIC8gMTAgKyBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMCAmJlxyXG4gICAgICAgICAgICAgICAgeSA+IHNlbGYuY2FudmFzLmhlaWdodCAvIDEuMyAmJlxyXG4gICAgICAgICAgICAgICAgeSA8IHNlbGYuY2FudmFzLmhlaWdodCAvIDEuMyArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgLSAxMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kb3duQnV0dG9uKGxldmVsKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBzZWxmLmxldmVscykge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguc3FydCgoeCAtIHMueCAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgKHggLSBzLnggLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICh5IC0gcy55IC0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMjApICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHkgLSBzLnkgLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkpIDwgNDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocy5pbmRleCArIGxldmVsIC0gMSA8PSB1bmxvY2tMZXZlbEluZGV4ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNvdW5kLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIiwgQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNvdW5kLnBhdXNlU291bmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxOdW1iZXIgPSBzLmluZGV4ICsgbGV2ZWwgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0R2FtZShsZXZlbE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGV2ZWxCdXR0b25zKHRoaXMubGV2ZWxCdXR0b25wb3MpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTGV2ZWxCdXR0b25zKGxldmVsQnV0dG9ucG9zKSB7XHJcbiAgICAgICAgdmFyIHBvc3MgPSBsZXZlbEJ1dHRvbnBvc1swXTtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCAxMDsgcysrKSB7XHJcbiAgICAgICAgICAgIHZhciBucyA9IG5ldyBMZXZlbENvbmZpZyhwb3NzW2ldWzBdLCBwb3NzW2ldWzFdLCBpICsgMSk7XHJcbiAgICAgICAgICAgIHNlbGYubGV2ZWxzLnB1c2gobnMpO1xyXG4gICAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhdyhsZXZlbCk7XHJcbiAgICAgICAgdGhpcy5kb3duQnV0dG9uKGxldmVsKTtcclxuICAgIH1cclxuICAgIGRyYXcobGV2ZWwpIHtcclxuICAgICAgICBmb3IgKGxldCBzIG9mIHNlbGYubGV2ZWxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2xldmVsKHMsIHNlbGYuY2FudmFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb3duQnV0dG9uKGxldmVsKSB7XHJcbiAgICAgICAgdmFyIGltYWdlU2l6ZSA9IHNlbGYuY2FudmFzLmhlaWdodCAvIDEwO1xyXG4gICAgICAgIGlmIChsZXZlbCAhPSBzZWxmLmxldmVsc1NlY3Rpb25Db3VudCAqIDEwIC0gMTApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShuZXh0YnRuLCB0aGlzLmNhbnZhcy53aWR0aCAqIDAuNywgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZXZlbCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoYmFja2J0biwgdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIChsZXZlbCAhPSAwKSB7XHJcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDMwMCwgNTAwLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XHJcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgIC8vICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShpbWFnZVNpemUsIGltYWdlU2l6ZSk7XHJcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQucm90YXRlKDkwKTtcclxuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UobmV4dCwgMzAwLCA1MDAsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBkcmF3bGV2ZWwocywgY2FudmFzKSB7XHJcbiAgICAgICAgdmFyIGltYWdlU2l6ZSA9IGNhbnZhcy5oZWlnaHQgLyA1O1xyXG4gICAgICAgIHZhciB0ZXh0Rm9udFNpemUgPSBpbWFnZVNpemUgLyA2O1xyXG4gICAgICAgIGlmIChzLmluZGV4ICsgbGV2ZWwgPD0gc2VsZi5kYXRhLmxldmVscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShtYXBJY29uLCBzLngsIHMueSwgaW1hZ2VTaXplLCBpbWFnZVNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRleHRGb250U2l6ZSArIFwicHggQXJpYWxcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChzLmluZGV4ICsgbGV2ZWwsIHMueCArIGltYWdlU2l6ZSAvIDMuNSwgcy55ICsgaW1hZ2VTaXplIC8gMyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gdGV4dEZvbnRTaXplIC0gaW1hZ2VTaXplIC8gMzAgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0aGlzLmRhdGEubGV2ZWxzW3MuaW5kZXggKyBsZXZlbCAtIDFdLmxldmVsTWV0YS5sZXZlbFR5cGUsIHMueCArIGltYWdlU2l6ZSAvIDMuNSwgcy55ICsgaW1hZ2VTaXplIC8gMS4zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydEdhbWUobGV2ZWxfbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zb3VuZC5wYXVzZVNvdW5kKCk7XHJcbiAgICAgICAgbmV3IEdhbWUodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgc2VsZi5kYXRhLmxldmVsc1tsZXZlbF9udW1iZXJdLCBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKTtcclxuICAgIH1cclxuICAgIGRyYXdTdGFycygpIHtcclxuICAgICAgICBsZXQgZ2FtZUxldmVsRGF0YSA9IGdldERhdGFmcm9tU3RvcmFnZSgpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICAgICAgICB2YXIgY2FuYXZzRWxlbWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldmVsU2VsZWN0aW9uQ2FudmFzMVwiKSk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBpZiAoZ2FtZUxldmVsRGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lTGV2ZWxEYXRhLmxlbmd0aCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgZ2FtZUxldmVsRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bmxvY2tMZXZlbEluZGV4IDwgcGFyc2VJbnQoZ2FtZS5sZXZlbE51bWJlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5sZXZlbFN0YXIgPj0gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAodW5sb2NrTGV2ZWxJbmRleCA9IHBhcnNlSW50KGdhbWUubGV2ZWxOdW1iZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHNlbGYubGV2ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5pbmRleCArIGxldmVsIDw9IHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5pbmRleCArIGxldmVsIC0gMSA+IHVubG9ja0xldmVsSW5kZXggKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29udGV4dC5kcmF3SW1hZ2UobWFwTG9jaywgcy54LCBzLnksIHRoaXMuY2FudmFzLmhlaWdodCAvIDEzLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxldmVsRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5pbmRleCAtIDEgKyBsZXZlbCA9PSBwYXJzZUludChnYW1lTGV2ZWxEYXRhW2ldLmxldmVsTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3RhcihzLCBjYW52YXMsIGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxTdGFyLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd1N0YXIocywgY2FudmFzLCBzdGFyQ291bnQsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XHJcbiAgICAgICAgaWYgKHN0YXJDb3VudCA+PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHN0YXIsIHMueCwgcy55IC0gaW1hZ2VTaXplICogMC4wMSwgaW1hZ2VTaXplIC8gNSwgaW1hZ2VTaXplIC8gNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGFyQ291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHN0YXIsIHMueCArIGltYWdlU2l6ZSAvIDIuNSwgcy55IC0gaW1hZ2VTaXplICogMC4wMSwgaW1hZ2VTaXplIC8gNSwgaW1hZ2VTaXplIC8gNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGFyQ291bnQgPT0gMykge1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzdGFyLCBzLnggKyBpbWFnZVNpemUgLyA1LCBzLnkgLSBpbWFnZVNpemUgKiAwLjEsIGltYWdlU2l6ZSAvIDUsIGltYWdlU2l6ZSAvIDUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb25zdGVyLmpzXCI7XHJcbmltcG9ydCB7IFRpbWVyVGlja2luZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3RpbWVyLXRpY2tpbmcuanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IFN0b25lc0xheWVyIGZyb20gXCIuLi9jb21wb25lbnRzL3N0b25lcy1sYXllci5qc1wiO1xyXG5pbXBvcnQgeyBQcm9tcHRUZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvbXB0LXRleHQuanNcIjtcclxuaW1wb3J0IFBhdXNlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvcGF1c2VfYnV0dG9uLmpzXCI7XHJcbmltcG9ydCB7IExldmVsSW5kaWNhdG9ycyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xldmVsLWluZGljYXRvcnMuanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxFbmRCdXR0b25zTGF5ZXIsIExldmVsRW5kTGF5ZXIsIGxvYWRJbWFnZXMsIGxvYWRpbmdTY3JlZW4sIFN0b25lTGF5ZXIsIFRpbWV0aWNrZXJMYXllciwgUHJvbXB0VGV4dExheWVyLCBQcmV2aW91c1BsYXllZExldmVsLCBTdG9yZU1vbnN0ZXJQaGFzZU51bWJlciwgQnV0dG9uQ2xpY2ssIEZlZWRiYWNrQXVkaW8sIFBocmFzZUF1ZGlvLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IExldmVsU3RhcnRMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IEdhbWVFbmRTY2VuZSB9IGZyb20gXCIuL2dhbWUtZW5kLXNjZW5lLmpzXCI7XHJcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY29tbW9uL3NvdW5kLmpzXCI7XHJcbmltcG9ydCB7IExldmVsRW5kU2NlbmUgfSBmcm9tIFwiLi9sZXZlbC1lbmQtc2NlbmUuanNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YWZyb21TdG9yYWdlIH0gZnJvbSBcIi4uL2RhdGEvcHJvZmlsZS1kYXRhLmpzXCI7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUludGVncmF0aW9uIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlX2ludGVncmF0aW9uLmpzXCI7XHJcbnZhciBpbWFnZXMgPSB7XHJcbiAgICBiZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiLFxyXG4gICAgaGlsbEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvaGlsbF92MDEucG5nXCIsXHJcbiAgICB0aW1lcl9lbXB0eTogXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXJfZW1wdHkucG5nXCIsXHJcbiAgICBwaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1RvdGVtX3YwMl92MDEucG5nXCIsXHJcbiAgICBncmFzc0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvRkdfYV92MDEucG5nXCIsXHJcbiAgICByb3RhdGluZ19jbG9jazogXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXIucG5nXCIsXHJcbiAgICBmZW5jaEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvZmVuY2VfdjAxLnBuZ1wiLFxyXG4gICAgcHJvbXB0SW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9wcm9tcHRUZXh0QmcucG5nXCIsXHJcbiAgICBmYW50YXN0aWM6IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2ltYWdlcy9mYW50YXN0aWNfMDEucG5nXCIsXHJcbiAgICBncmVhdDogXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2dyZWF0XzAxLnBuZ1wiLFxyXG4gICAgYXV0dW1uQmdJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9iZ192MDEuanBnXCIsXHJcbiAgICBhdXR1bW5IaWxsSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5faGlsbF92MDEucG5nXCIsXHJcbiAgICBhdXR1bW5TaWduSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fc2lnbl92MDEucG5nXCIsXHJcbiAgICBhdXR1bW5HcmFzc0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX0ZHX3YwMS5wbmdcIixcclxuICAgIGF1dHVtbkZlbmNlSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fZmVuY2VfdjAxLnBuZ1wiLFxyXG4gICAgYXV0dW1uUGlsbGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fc2lnbl92MDEucG5nXCIsXHJcbiAgICB3aW50ZXJCZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX2JnXzAxLmpwZ1wiLFxyXG4gICAgd2ludGVySGlsbEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX2hpbGxfdjAxLnBuZ1wiLFxyXG4gICAgd2ludGVyU2lnbkltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX3NpZ25fdjAxLnBuZ1wiLFxyXG4gICAgd2ludGVyR3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9GR192MDEucG5nXCIsXHJcbiAgICB3aW50ZXJGZW5jZUltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX2ZlbmNlX3YwMS5wbmdcIixcclxuICAgIHdpbnRlclBpbGxlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX3NpZ25fdjAxLnBuZ1wiLFxyXG59O1xyXG52YXIgYXVkaW9VcmwgPSB7XHJcbiAgICBwaHJhc2VBdWRpb3M6IFtcclxuICAgICAgICBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9hdWRpb3MvZmFudGFzdGljLldBVlwiLFxyXG4gICAgICAgIC8vIFwiLi9hc3NldHMvYXVkaW9zL2dvb2Qgam9iLldBVlwiLFxyXG4gICAgICAgIFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2F1ZGlvcy9ncmVhdC53YXZcIixcclxuICAgIF0sXHJcbiAgICBtb25zdGVyU3BsaXQ6IFwiLi9hc3NldHMvYXVkaW9zL01vbnN0ZXIgU3BpdHMgd3Jvbmcgc3RvbmVzLTAxLm1wM1wiLFxyXG4gICAgbW9uc3RlckhhcHB5OiBcIi4vYXNzZXRzL2F1ZGlvcy9DaGVlcmluZy0wMi5tcDNcIixcclxuICAgIG1vbnN0ZXJTYWQ6IFwiLi9hc3NldHMvYXVkaW9zL0Rpc2Fwb2ludGVkLTA1Lm1wM1wiLFxyXG4gICAgYnV0dG9uQ2xpY2s6IFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiLFxyXG59O1xyXG52YXIgc2VsZjtcclxudmFyIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xyXG52YXIgY3VycmVudF9wdXp6bGVfaW5kZXggPSAwO1xyXG52YXIgc2NvcmUgPSAwO1xyXG52YXIgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XHJcbnZhciBpc0dhbWVQYXVzZSA9IGZhbHNlO1xyXG52YXIgbm9Nb3JlVGFyZ2V0ID0gZmFsc2U7XHJcbnZhciBpc0xldmVsRW5kZWQgPSBmYWxzZTtcclxuZXhwb3J0IGNsYXNzIExldmVsU3RhcnRTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIGxldmVsRGF0YSwgbGV2ZWxTdGFydENhbGxCYWNrLCBtb25zdGVyUGhhc2VOdW1iZXIsIH0pIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyID0gbmV3IE1vbnN0ZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgPSBtb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcclxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IGxldmVsRGF0YTtcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnRDYWxsQmFjayA9IGxldmVsU3RhcnRDYWxsQmFjaztcclxuICAgICAgICB0aGlzLnRpbWVyVGlja2luZyA9IG5ldyBUaW1lclRpY2tpbmcoZ2FtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRUZXh0ID0gbmV3IFByb21wdFRleHQoZ2FtZSwgdGhpcywgbGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLCBsZXZlbERhdGEpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5zdG9uZXMgPSBuZXcgU3RvbmVzTGF5ZXIoZ2FtZSwgbGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLCB0aGlzLnBhdXNlQnV0dG9uLCB0aGlzLnJlZHJhd09mU3RvbmVzLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBsZXZlbERhdGEucHV6emxlcztcclxuICAgIH1cclxuICAgIGxldmVsRW5kQ2FsbEJhY2soYnV0dG9uX25hbWUpIHtcclxuICAgICAgICBpZiAoIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGlzTGV2ZWxFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgaXNMZXZlbEVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpc0dhbWVQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudF9wdXp6bGVfaW5kZXggPT0gc2VsZi5wdXp6bGVEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vTW9yZVRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9Nb3JlVGFyZ2V0ICYmIGJ1dHRvbl9uYW1lICE9IFwiY2xvc2VfYnV0dG9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuc2V0Q3VycnJlbnRQdXp6bGVEYXRhKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwuYnV0dG9uQ2xpY2ssIEJ1dHRvbkNsaWNrKTtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgaXNHYW1lUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG4gICAgcmVkcmF3T2ZTdG9uZXMoZHJhZ0FuaW1hdGlvbiwgc3RhdHVzLCBlbXB0eVRhcmdldCwgcGlja2VkX3N0b25lLCBwaWNrZWRfc3RvbmVzKSB7XHJcbiAgICAgICAgaWYgKGRyYWdBbmltYXRpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZHJhZ0FuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZHJhZ01vbnN0ZXJBbmltYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvRHJhZ0FuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzdG9wRHJhZ01vbnN0ZXJBbmltYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvSWRsZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvSWRsZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub01vcmVUYXJnZXQgPSBlbXB0eVRhcmdldDtcclxuICAgICAgICAgICAgdmFyIGZudHN0aWNPckdydEluZGV4ID0gc2VsZi5nZXRSYW5kb21JbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VUb0VhdEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlckhhcHB5LCBQaHJhc2VBdWRpbyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1wdHlUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnB1enpsZUVuZEZpcmViYXNlRXZlbnRzKFwic3VjY2Vzc1wiLCBjdXJyZW50X3B1enpsZV9pbmRleCwgcGlja2VkX3N0b25lcywgc2VsZi5sZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0udGFyZ2V0U3RvbmVzLCBzZWxmLmxldmVsRGF0YS5wdXp6bGVzW2N1cnJlbnRfcHV6emxlX2luZGV4XS5mb2lsU3RvbmVzLCBzZWxmLnB1enpsZVN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXVkaW8ucGxheVNvdW5kKGF1ZGlvVXJsLnBocmFzZUF1ZGlvc1tmbnRzdGljT3JHcnRJbmRleF0sIEZlZWRiYWNrQXVkaW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuc2hvd0ZhbnRhc3RpY09yR3JlYXQoZm50c3RpY09yR3J0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gcGlja2VkX3N0b25lLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLnN0b3BUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGYucHJvbXB0VGV4dC5kcmF3KCh3b3JkX2Ryb3BwZWRfc3RvbmVzICs9IDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZSArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCh3b3JkX2Ryb3BwZWRfc3RvbmVzICs9IHBpY2tlZF9zdG9uZS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLnN0b3BUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvU3BpdEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlclNhZCwgUGhyYXNlQXVkaW8pO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wdXp6bGVFbmRGaXJlYmFzZUV2ZW50cyhcImZhaWx1cmVcIiwgY3VycmVudF9wdXp6bGVfaW5kZXgsIHBpY2tlZF9zdG9uZXMsIHNlbGYubGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLnRhcmdldFN0b25lcywgc2VsZi5sZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0uZm9pbFN0b25lcywgc2VsZi5wdXp6bGVTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlclNwbGl0LCBQaHJhc2VBdWRpbyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRfcHV6emxlX2luZGV4ID09IHNlbGYucHV6emxlRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGkgKiAxMzAwLjY2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHV6emxlU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHV6emxlRGF0YShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaSAqIDEzMDAuNjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldmVsRW5kZWQoKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsU3RhcnNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1vbnN0ZXJQaGFzZU51bWJlciA9IHNlbGYubW9uc3RlclBoYXNlTnVtYmVyIHx8IDE7XHJcbiAgICAgICAgdmFyIGdhbWVMZXZlbERhdGEgPSBnZXREYXRhZnJvbVN0b3JhZ2UoKTtcclxuICAgICAgICBpZiAoZ2FtZUxldmVsRGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxldmVsRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdG90YWxTdGFyc0NvdW50ID0gdG90YWxTdGFyc0NvdW50ICsgZ2FtZUxldmVsRGF0YVtpXS5sZXZlbFN0YXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW9uc3RlclBoYXNlTnVtYmVyID0gTWF0aC5mbG9vcih0b3RhbFN0YXJzQ291bnQgLyAxMikgKyAxIHx8IDE7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciA8IG1vbnN0ZXJQaGFzZU51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnN0ZXJQaGFzZU51bWJlciA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgPSBtb25zdGVyUGhhc2VOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIsIG1vbnN0ZXJQaGFzZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVBoYXNlTnVtYmVyKG1vbnN0ZXJQaGFzZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5tb25zdGVyLmNoYW5nZUltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIHNlbGYubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgPSA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKCk7XHJcbiAgICAgICAgaWYgKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyID09IDE0OSkge1xyXG4gICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XHJcbiAgICAgICAgICAgIG5ldyBHYW1lRW5kU2NlbmUoc2VsZi5nYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IExldmVsRW5kU2NlbmUoc2VsZi5nYW1lLCBzY29yZSwgc2VsZi5tb25zdGVyLCBzZWxmLmxldmVsRW5kQ2FsbEJhY2ssIHNlbGYubGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIsIHRoaXMubGV2ZWxTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNMZXZlbEVuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbW9uc3RlclBoYXNlTnVtYmVyID0gdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcclxuICAgICAgICB0aGlzLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIG1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZGVsZXRlT2JqZWN0cygpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgTGV2ZWxTdGFydExheWVyKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAzO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24gPSBuZXcgUGF1c2VCdXR0b24odGhpcy5jb250ZXh0LCB0aGlzLmNhbmF2c0VsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxJbmRpY2F0b3JzID0gbmV3IExldmVsSW5kaWNhdG9ycyh0aGlzLmNvbnRleHQsIHRoaXMuY2FuYXZzRWxlbWVudCwgMCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCk7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzUGxheWVkTGV2ZWwgPSBzZWxmLmxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxOdW1iZXI7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUHJldmlvdXNQbGF5ZWRMZXZlbCwgcHJldmlvdXNQbGF5ZWRMZXZlbCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGV4aXRBbGxTY3JlZW5zKCkge1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoTGV2ZWxFbmRMYXllcik7XHJcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihMZXZlbEVuZEJ1dHRvbnNMYXllcik7XHJcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihMZXZlbFN0YXJ0TGF5ZXIpO1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoU3RvbmVMYXllcik7XHJcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihUaW1ldGlja2VyTGF5ZXIpO1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoUHJvbXB0VGV4dExheWVyKTtcclxuICAgICAgICAvLyBzZWxmLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTQucG5nXCIpO1xyXG4gICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIik7XHJcbiAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xyXG4gICAgICAgIHNlbGYuZGVsZXRlT2JqZWN0cygpO1xyXG4gICAgICAgIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlT2JqZWN0cygpIHtcclxuICAgICAgICBkZWxldGUgc2VsZi5tb25zdGVyO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLmF1ZGlvO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLmxldmVsSW5kaWNhdG9ycztcclxuICAgICAgICBkZWxldGUgc2VsZi5wYXVzZUJ1dHRvbjtcclxuICAgICAgICBkZWxldGUgc2VsZi5zdG9uZXM7XHJcbiAgICAgICAgZGVsZXRlIHNlbGYudGltZXJUaWNraW5nO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLmNhbnZhc1N0YWNrO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XHJcbiAgICAgICAgZGVsZXRlIHNlbGYucHJvbXB0VGV4dDtcclxuICAgICAgICBjdXJyZW50X3B1enpsZV9pbmRleCA9IDA7XHJcbiAgICAgICAgc2NvcmUgPSAwO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuYmdJbWcsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMucGlsbGVySW1nLCB0aGlzLndpZHRoICogMC42LCB0aGlzLmhlaWdodCAvIDYsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmZlbmNoSW1nLCAtdGhpcy53aWR0aCAqIDAuNCwgdGhpcy5oZWlnaHQgLyAzLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDMpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5oaWxsSW1nLCAtdGhpcy53aWR0aCAqIDAuMjUsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuZ3Jhc3NJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyICsgKHRoaXMuaGVpZ2h0IC8gMikgKiAwLjEsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnRpbWVyX2VtcHR5LCAwLCB0aGlzLmhlaWdodCAqIDAuMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAwLjA1KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMucm90YXRpbmdfY2xvY2ssIDUsIHRoaXMuaGVpZ2h0ICogMC4wOSwgdGhpcy53aWR0aCAqIDAuMTIsIHRoaXMuaGVpZ2h0ICogMC4wNik7XHJcbiAgICAgICAgdGhpcy50aW1lclRpY2tpbmcuY3JlYXRlQmFja2dyb3VkKCk7XHJcbiAgICAgICAgdGhpcy5zdG9uZXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uZHJhdygpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxJbmRpY2F0b3JzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnByb21wdFRleHQuY3JlYXRlQmFja2dyb3VuZCgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHNlbGYudGltZXJUaWNraW5nID8gc2VsZi50aW1lclRpY2tpbmcudXBkYXRlKCkgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlUHV6emxlKCkge1xyXG4gICAgICAgIGlmIChzZWxmLnRpbWVyVGlja2luZy5pc1RpbWVyRW5kZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5zdG9uZXMuaXNUaW1lckVuZGVkKCk7XHJcbiAgICAgICAgICAgIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xyXG4gICAgICAgICAgICBjdXJyZW50X3B1enpsZV9pbmRleCArPSAxO1xyXG4gICAgICAgICAgICBzZWxmLnN0b25lcy5jYW52YXMuc2NlbmUubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudF9wdXp6bGVfaW5kZXggPT0gc2VsZi5wdXp6bGVEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMZXZlbEVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLnRpbWVyVGlja2luZztcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTGV2ZWxFbmRTY2VuZShzZWxmLmdhbWUsIHNjb3JlLCBzZWxmLm1vbnN0ZXIsIHNlbGYubGV2ZWxFbmRDYWxsQmFjaywgc2VsZi5sZXZlbERhdGEsIGlzR2FtZVBhdXNlLCB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciwgdGhpcy5sZXZlbFN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFByb21wdFRleHQoXHJcbiAgICAgICAgICAgICAgICAvLyAgIHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0ucHJvbXB0LnByb21wdFRleHRcclxuICAgICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnB1enpsZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHV6emxlRGF0YShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN0b25lcy5zZXROZXdQdXp6bGUoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcgPyAoc2VsZi50aW1lclRpY2tpbmcuaXNUaW1lckVuZGVkID0gZmFsc2UpIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVCYWNrZ3JvdWQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZUJhY2tncm91bmRUeXBlcyA9IFtcIlN1bW1lclwiLCBcIkF1dHVtblwiLCBcIldpbnRlclwiXTtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZFR5cGUgPSBNYXRoLmZsb29yKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyIC8gMTApICVcclxuICAgICAgICAgICAgYXZhaWxhYmxlQmFja2dyb3VuZFR5cGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAoc2VsZi5sZXZlbERhdGEubGV2ZWxOdW1iZXIgPj0gMzApIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZFR5cGUgPSBiYWNrZ3JvdW5kVHlwZSAlIDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRpbmdTY3JlZW4odHJ1ZSk7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgbG9hZEltYWdlcyhpbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGF2YWlsYWJsZUJhY2tncm91bmRUeXBlc1tiYWNrZ3JvdW5kVHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJXaW50ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLndpbnRlckJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVyUGlsbGVySW1nLCB3aWR0aCAqIDAuMzgsIGhlaWdodCAvIDYsIHdpZHRoIC8gMS4yLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVyRmVuY2VJbWcsIC13aWR0aCAqIDAuNCwgaGVpZ2h0IC8gNCwgd2lkdGgsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJIaWxsSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLndpbnRlckdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkF1dHVtblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYXV0dW1uQmdJbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5QaWxsZXJJbWcsIHdpZHRoICogMC4zOCwgaGVpZ2h0IC8gNiwgd2lkdGggLyAxLjIsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5GZW5jZUltZywgLXdpZHRoICogMC40LCBoZWlnaHQgLyA0LCB3aWR0aCwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYXV0dW1uR3Jhc3NJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgKyAoaGVpZ2h0IC8gMikgKiAwLjEsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYmdJbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5waWxsZXJJbWcsIHdpZHRoICogMC42LCBoZWlnaHQgLyA2LCB3aWR0aCwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmZlbmNoSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDMsIHdpZHRoLCBoZWlnaHQgLyAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuaGlsbEltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5ncmFzc0ltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiArIChoZWlnaHQgLyAyKSAqIDAuMSwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS50aW1lcl9lbXB0eSwgMCwgaGVpZ2h0ICogMC4xLCB3aWR0aCwgaGVpZ2h0ICogMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnJvdGF0aW5nX2Nsb2NrLCA1LCBoZWlnaHQgKiAwLjA5LCB3aWR0aCAqIDAuMTIsIGhlaWdodCAqIDAuMDYpO1xyXG4gICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5jcmVhdGVCYWNrZ3JvdWQoKTtcclxuICAgICAgICAgICAgc2VsZi5zdG9uZXMuZHJhdygpO1xyXG4gICAgICAgICAgICBzZWxmLnBhdXNlQnV0dG9uLmRyYXcoKTtcclxuICAgICAgICAgICAgc2VsZi5sZXZlbEluZGljYXRvcnMuZHJhdygpO1xyXG4gICAgICAgICAgICBzZWxmLnByb21wdFRleHQuY3JlYXRlQmFja2dyb3VuZCgpO1xyXG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1enpsZUVuZEZpcmViYXNlRXZlbnRzKHN1Y2Nlc3Nfb3JfZmFpbHVyZSwgcHV6emxlX251bWJlciwgaXRlbV9zZWxlY3RlZCwgdGFyZ2V0LCBmb2lscywgcmVzcG9uc2VfdGltZSkge1xyXG4gICAgICAgIHZhciBwdXp6bGVFbmRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBGaXJlYmFzZUludGVncmF0aW9uLmN1c3RvbUV2ZW50cyhcInB1enpsZV9jb21wbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICBkYXRlX3RpbWU6IHB1enpsZUVuZFRpbWUuZ2V0RGF0ZSgpICtcclxuICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0TW9udGgoKSArXHJcbiAgICAgICAgICAgICAgICAxICtcclxuICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0RnVsbFllYXIoKSArXHJcbiAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICBwdXp6bGVFbmRUaW1lLmdldEhvdXJzKCkgK1xyXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgcHV6emxlRW5kVGltZS5nZXRNaW51dGVzKCkgK1xyXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgICAgICAgICAgcHV6emxlRW5kVGltZS5nZXRTZWNvbmRzKCksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3Nfb3JfZmFpbHVyZTogc3VjY2Vzc19vcl9mYWlsdXJlLFxyXG4gICAgICAgICAgICBsZXZlbF9udW1iZXI6IHRoaXMubGV2ZWxEYXRhLmxldmVsTnVtYmVyLFxyXG4gICAgICAgICAgICBwdXp6bGVfbnVtYmVyOiBwdXp6bGVfbnVtYmVyLFxyXG4gICAgICAgICAgICBpdGVtX3NlbGVjdGVkOiBpdGVtX3NlbGVjdGVkLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgZm9pbHM6IGZvaWxzLFxyXG4gICAgICAgICAgICBwcm9maWxlX251bWJlcjogMCxcclxuICAgICAgICAgICAgZnRtX2xhbmd1YWdlOiBsYW5nLFxyXG4gICAgICAgICAgICB2ZXJzaW9uX251bWJlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJzaW9uLWluZm8taWRcIikuaW5uZXJIVE1MLFxyXG4gICAgICAgICAgICByZXNwb25zZV90aW1lOiBNYXRoLmFicyhNYXRoLmNlaWwoKHB1enpsZUVuZFRpbWUuZ2V0VGltZSgpIC0gcmVzcG9uc2VfdGltZSkgLyAxMDAwKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBCdXR0b25DbGljaywgRmlyZWJhc2VVc2VyQ2xpY2tlZCwgUGxheUJ1dHRvbkxheWVyLCBQV0FJbnN0YWxsU3RhdHVzLCBTdGFydFNjZW5lTGF5ZXIsIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9jb21tb24vc291bmQuanNcIjtcclxuaW1wb3J0IEluc3RhbGxCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9pbnN0YWxsX2J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL3BsYXlfYnV0b29uLmpzXCI7XHJcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb25zdGVyLmpzXCI7XHJcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbmltcG9ydCB7IExldmVsU2VsZWN0aW9uU2NyZWVuIH0gZnJvbSBcIi4vbGV2ZWwtc2VsZWN0aW9uLXNjZW5lLmpzXCI7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG52YXIgYmdJbWcgPSBuZXcgSW1hZ2UoKTtcclxuYmdJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiO1xyXG52YXIgaGlsbEltZyA9IG5ldyBJbWFnZSgpO1xyXG5oaWxsSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2hpbGxfdjAxLnBuZ1wiO1xyXG52YXIgcGlsbGVySW1nID0gbmV3IEltYWdlKCk7XHJcbnBpbGxlckltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9Ub3RlbV92MDJfdjAxLnBuZ1wiO1xyXG52YXIgZ3Jhc3NJbWcgPSBuZXcgSW1hZ2UoKTtcclxuZ3Jhc3NJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvRkdfYV92MDEucG5nXCI7XHJcbnZhciBmZW5jaEltZyA9IG5ldyBJbWFnZSgpO1xyXG5mZW5jaEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9mZW5jZV92MDEucG5nXCI7XHJcbnZhciB0aXRsZSA9IG5ldyBJbWFnZSgpO1xyXG50aXRsZS5zcmMgPSBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvdGl0bGUucG5nXCI7XHJcbnZhciBwcm9maWxlTW9uc3RlciA9IG5ldyBJbWFnZSgpO1xyXG5wcm9maWxlTW9uc3Rlci5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9pZGxlNC5wbmdcIjtcclxudmFyIHNlbGY7XHJcbmxldCBwd2FfaW5zdGFsbF9zdGF0dXM7XHJcbmNvbnN0IGFib3V0Q29tcGFueUVsZW1lbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1jb21wYW55XCIpKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVpbnN0YWxscHJvbXB0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwd2FfaW5zdGFsbF9zdGF0dXMgPSBlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cywgXCJmYWxzZVwiKTtcclxufSk7XHJcbmV4cG9ydCBjbGFzcyBTdGFydFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgZGF0YSwgZmlyZWJhc2VfYW5hbHl0aWNzKSB7XHJcbiAgICAgICAgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMubW9uc3RlciA9IG5ldyBNb25zdGVyKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLnB3YV9zdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQV0FJbnN0YWxsU3RhdHVzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VfYW5hbHl0aWNzID0gZmlyZWJhc2VfYW5hbHl0aWNzO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBTdGFydFNjZW5lTGF5ZXIpO1xyXG4gICAgICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBhYm91dENvbXBhbnlFbGVtZW50LmlubmVySFRNTCA9IGdsb2JhbFRoaXMuYWJvdXRDb21wYW55O1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDI7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLmJvdHRvbSA9IDA7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGJnSW1nLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShwaWxsZXJJbWcsIHRoaXMud2lkdGggKiAwLjYsIHRoaXMuaGVpZ2h0IC8gNiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGZlbmNoSW1nLCAtdGhpcy53aWR0aCAqIDAuNCwgdGhpcy5oZWlnaHQgLyAzLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDMpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaGlsbEltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShncmFzc0ltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIgKyAodGhpcy5oZWlnaHQgLyAyKSAqIDAuMSwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRpdGxlLCB0aGlzLndpZHRoICogMCwgdGhpcy5oZWlnaHQgLyA1MCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyA2KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmctc2NyZWVuXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIGNyZWF0ZVBsYXlCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgcGxheUJ1dHRvbkxheWVyRWxlbWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQbGF5QnV0dG9uTGF5ZXIpKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgdmFyIHBsYXlCdXR0b25JZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFBsYXlCdXR0b25MYXllcik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheUJ1dHRvbklkKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSA3O1xyXG4gICAgICAgIGlmICh0cnVlKSB7XHJcbiAgICAgICAgICAgIHNlbGYucGxheUJ1dHRvbiA9IG5ldyBQbGF5QnV0dG9uKHNlbGYuYnV0dG9uQ29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC4zNSwgc2VsZi5jYW52YXMuaGVpZ2h0IC8gNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLnBsYXlCdXR0b24gPSBuZXcgSW5zdGFsbEJ1dHRvbihzZWxmLmJ1dHRvbkNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUsIHNlbGYuY2FudmFzLmhlaWdodCAvIDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQbGF5QnV0dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnBsYXlCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5maXJlYmFzZV9hbmFseXRpY3MubG9nRXZlbnQoRmlyZWJhc2VVc2VyQ2xpY2tlZCwgXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VyQ2xpY2tlZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTb3VuZCgpLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIiwgQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExldmVsU2VsZWN0aW9uU2NyZWVuKHNlbGYuY2FudmFzLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFBsYXlCdXR0b25MYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdGFydFNjZW5lTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLnB3YV9zdGF0dXMgPT0gXCJmYWxzZVwiIHx8ICFzZWxmLnB3YV9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHB3YV9pbnN0YWxsX3N0YXR1cy5wcm9tcHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHsgb3V0Y29tZSB9ID0gYXdhaXQgcHdhX2luc3RhbGxfc3RhdHVzLnVzZXJDaG9pY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAob3V0Y29tZSA9PT0gXCJhY2NlcHRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHB3YV9pbnN0YWxsX3N0YXR1cyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VySW5zdGFsbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGV2ZW50OiBcImluc3RhbGxfY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgRmlyZWJhc2VVc2VySW5zdGFsbCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgXCJJbnN0YWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZicShcInRyYWNrQ3VzdG9tXCIsIFVzZXJDYW5jZWxsZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJjYW5jZWxfY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChVc2VyQ2FuY2VsbGVkLCBcIkNhbmNlbGxlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAhd2luZG93Lm1hdGNoTWVkaWEoXCIoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKVwiKS5tYXRjaGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYucHdhX3N0YXR1cyA9PSBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFsZXJ0KFwiUFdBIGlzIGluc3RhbGxlZCBvbiB5b3VyIGRldmljZSBcXG5QbGVhc2UgcGxheSBmcm9tIHRoZXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWJvdXRDb21wYW55RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5ldyBTb3VuZCgpLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuZXcgTGV2ZWxTZWxlY3Rpb25TY3JlZW4oc2VsZi5jYW52YXMsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFBsYXlCdXR0b25MYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYubW9uc3Rlci5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdGFydFNjZW5lTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgQ2FudmFzU3RhY2s7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGNsYXNzIExheWVyIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7IGNhbnZhc0lELCBjYW52YXNFbGVtZW50LCB9KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBjYW52YXNJRDtcclxuICAgICAgICAgICAgdGhpcy5jRWxlbSA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ09iamVjdHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDYW52YXNTdGFjayA9IGNsYXNzIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihjdnNJRCwgc3RhY2tMaW1pdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzYXZUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5jSWQgPSBjdnNJRDtcclxuICAgICAgICAgICAgdGhpcy5zdGFja0xpbWl0ID0gc3RhY2tMaW1pdCB8fCAxMjtcclxuICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdnNJRCk7XHJcbiAgICAgICAgICAgIHRoaXMucmF3V2lkdGggPSB0aGlzLmJrZ0NhbnZhcy5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5yYXdIZWlnaHQgPSB0aGlzLmJrZ0NhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwibGF5ZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBia2dMID0gbmV3IExheWVyKHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXNJRDogdGhpcy5jSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzRWxlbWVudDogdGhpcy5ia2dDYW52YXMsXHJcbiAgICAgICAgICAgICAgICB9KTsgLy8gYmtnQ2FudmFzIGlzIGFsd2F5cyBsYXllclswXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzWzBdID0gYmtnTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwidW5pcXVlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy51bmlxdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUxheWVyKGhlaWdodCwgd2lkdGgsIGxheWVySWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTGF5ZXJFeGlzdChsYXllcklkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IHdpZHRoICsgXCJweFwiLCBoID0gaGVpZ2h0ICsgXCJweFwiLCBuTHlycyA9IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IC8vIGJrZyBpcyBsYXllciAwIHNvIGF0IGxlYXN0IDFcclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aCA+PSB0aGlzLnN0YWNrTGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzU3RhY2s6IHRvbyBtYW55IGxheWVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy51bmlxdWUgKz0gMTsgLy8gYSBwcml2YXRlIHN0YXRpYyB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdW5pcXVlVGFnID0gdGhpcy5ia2dDYW52YXMudW5pcXVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBvdmxJZCA9IHRoaXMuY0lkICsgXCJfb3ZsX1wiICsgdW5pcXVlVGFnO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSWQgPSBsYXllcklkO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSFRNTCA9IFwiPGNhbnZhcyBpZD0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIG92bElkICtcclxuICAgICAgICAgICAgICAgICAgICBcIicgc3R5bGU9J3Bvc2l0aW9uOmFic29sdXRlJyB3aWR0aD0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJyBoZWlnaHQ9J1wiICtcclxuICAgICAgICAgICAgICAgICAgICBoICtcclxuICAgICAgICAgICAgICAgICAgICBcIic+PC9jYW52YXM+XCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BDdnMgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnNbbkx5cnMgLSAxXS5jRWxlbTtcclxuICAgICAgICAgICAgICAgIHRvcEN2cy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBvdmxIVE1MKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG92bElkKTtcclxuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUubGVmdCA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgMCUpXCI7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUuaGVpZ2h0ID0gaDtcclxuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS53aWR0aCA9IHc7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3TCA9IG5ldyBMYXllcih7IGNhbnZhc0lEOiBvdmxJZCwgY2FudmFzRWxlbWVudDogbmV3Q3ZzIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgSUQgaW4gYW4gYXJyYXkgdG8gZmFjaWxpdGF0ZSByZW1vdmFsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMucHVzaChuZXdMKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdmxJZDsgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlTGF5ZXIob3ZseUlkKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGJhY2tncm91bmQgY2FudmFzIGlzIHN0aWxsIHRoZXJlXHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5pZCA9PT0gb3ZseUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG92bE5vZGUgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnNbaV0uY0VsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92bE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBub3cgZGVsZXRlIGxheWVycyBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzLnNwbGljZShpLCAxKTsgLy8gZGVsZXRlIHRoZSBMYXllciBvYmplY3RcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGVBbGxMYXllcnMoKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92bE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3JwaGFuID0gb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ycGhhbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBub3cgZGVsZXRlIGxheWVycyBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGFueSByZXNpemUgY2FsbGJhY2tzLCB0aGUgbGF5ZXJzIGFyZSBnb25lXHJcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucy5sZW5ndGggPSAwOyAvLyByZW1vdmUgYW55IGFkZGVkIGhhbmRsZXJzLCBsZWF2ZSB0aGUgYmFzaWNcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNMYXllckV4aXN0KGxheWVySUQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJrZ0NhbnZhcy5sYXllcnNbaV0uaWQgPT09IGxheWVySUQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcbiIsInRyeXtzZWxmW1wid29ya2JveDp3aW5kb3c6NC4zLjFcIl0mJl8oKX1jYXRjaChuKXt9dmFyIG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSl7dmFyIGU9bmV3IE1lc3NhZ2VDaGFubmVsO2UucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKG4pe3JldHVybiBpKG4uZGF0YSl9LG4ucG9zdE1lc3NhZ2UodCxbZS5wb3J0Ml0pfSl9O2Z1bmN0aW9uIHQobix0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIGU9dFtpXTtlLmVudW1lcmFibGU9ZS5lbnVtZXJhYmxlfHwhMSxlLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBlJiYoZS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sZS5rZXksZSl9fWZ1bmN0aW9uIGkobil7aWYodm9pZCAwPT09bil0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIG59dHJ5e3NlbGZbXCJ3b3JrYm94OmNvcmU6NC4zLjFcIl0mJl8oKX1jYXRjaChuKXt9dmFyIGU9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMucHJvbWlzZT1uZXcgUHJvbWlzZShmdW5jdGlvbih0LGkpe24ucmVzb2x2ZT10LG4ucmVqZWN0PWl9KX0scj1mdW5jdGlvbihuLHQpe3JldHVybiBuZXcgVVJMKG4sbG9jYXRpb24pLmhyZWY9PT1uZXcgVVJMKHQsbG9jYXRpb24pLmhyZWZ9LG89ZnVuY3Rpb24obix0KXtPYmplY3QuYXNzaWduKHRoaXMsdCx7dHlwZTpufSl9O2Z1bmN0aW9uIHUobil7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGk9MDtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXRbaV09YXJndW1lbnRzW2ldO3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4uYXBwbHkodGhpcyx0KSl9Y2F0Y2gobil7cmV0dXJuIFByb21pc2UucmVqZWN0KG4pfX19ZnVuY3Rpb24gYShuLHQsaSl7cmV0dXJuIGk/dD90KG4pOm46KG4mJm4udGhlbnx8KG49UHJvbWlzZS5yZXNvbHZlKG4pKSx0P24udGhlbih0KTpuKX1mdW5jdGlvbiBzKCl7fXZhciBjPWZ1bmN0aW9uKGMpe3ZhciBmLGg7ZnVuY3Rpb24gdihuLHQpe3ZhciByO3JldHVybiB2b2lkIDA9PT10JiYodD17fSksKHI9Yy5jYWxsKHRoaXMpfHx0aGlzKS50PW4sci5pPXQsci5vPTAsci51PW5ldyBlLHIucz1uZXcgZSxyLmg9bmV3IGUsci52PXIudi5iaW5kKGkoaShyKSkpLHIubD1yLmwuYmluZChpKGkocikpKSxyLmc9ci5nLmJpbmQoaShpKHIpKSksci5tPXIubS5iaW5kKGkoaShyKSkpLHJ9aD1jLChmPXYpLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSxmLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1mLGYuX19wcm90b19fPWg7dmFyIGwsdyxnLGQ9di5wcm90b3R5cGU7cmV0dXJuIGQucmVnaXN0ZXI9dShmdW5jdGlvbihuKXt2YXIgdCxpLGU9dGhpcyx1PSh2b2lkIDA9PT1uP3t9Om4pLmltbWVkaWF0ZSxjPXZvaWQgMCE9PXUmJnU7cmV0dXJuIHQ9ZnVuY3Rpb24oKXtyZXR1cm4gZS5wPUJvb2xlYW4obmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciksZS5QPWUuUigpLGEoZS5rKCksZnVuY3Rpb24obil7ZS5CPW4sZS5QJiYoZS5PPWUuUCxlLnMucmVzb2x2ZShlLlApLGUuaC5yZXNvbHZlKGUuUCksZS5qKGUuUCksZS5QLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLGUubCx7b25jZTohMH0pKTt2YXIgdD1lLkIud2FpdGluZztyZXR1cm4gdCYmcih0LnNjcmlwdFVSTCxlLnQpJiYoZS5PPXQsUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe2UuZGlzcGF0Y2hFdmVudChuZXcgbyhcIndhaXRpbmdcIix7c3c6dCx3YXNXYWl0aW5nQmVmb3JlUmVnaXN0ZXI6ITB9KSl9KSksZS5PJiZlLnUucmVzb2x2ZShlLk8pLGUuQi5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlZm91bmRcIixlLmcpLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250cm9sbGVyY2hhbmdlXCIsZS5tLHtvbmNlOiEwfSksXCJCcm9hZGNhc3RDaGFubmVsXCJpbiBzZWxmJiYoZS5DPW5ldyBCcm9hZGNhc3RDaGFubmVsKFwid29ya2JveFwiKSxlLkMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixlLnYpKSxuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUudiksZS5CfSl9LChpPWZ1bmN0aW9uKCl7aWYoIWMmJlwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUpcmV0dXJuIGZ1bmN0aW9uKG4sdCl7aWYoIXQpcmV0dXJuIG4mJm4udGhlbj9uLnRoZW4ocyk6UHJvbWlzZS5yZXNvbHZlKCl9KG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pe3JldHVybiBhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG4pfSkpfSgpKSYmaS50aGVuP2kudGhlbih0KTp0KGkpfSksZC5nZXRTVz11KGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuT3x8dGhpcy51LnByb21pc2V9KSxkLm1lc3NhZ2VTVz11KGZ1bmN0aW9uKHQpe3JldHVybiBhKHRoaXMuZ2V0U1coKSxmdW5jdGlvbihpKXtyZXR1cm4gbihpLHQpfSl9KSxkLlI9ZnVuY3Rpb24oKXt2YXIgbj1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyO2lmKG4mJnIobi5zY3JpcHRVUkwsdGhpcy50KSlyZXR1cm4gbn0sZC5rPXUoZnVuY3Rpb24oKXt2YXIgbj10aGlzO3JldHVybiBmdW5jdGlvbihuLHQpe3RyeXt2YXIgaT1uKCl9Y2F0Y2gobil7cmV0dXJuIHQobil9cmV0dXJuIGkmJmkudGhlbj9pLnRoZW4odm9pZCAwLHQpOml9KGZ1bmN0aW9uKCl7cmV0dXJuIGEobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIobi50LG4uaSksZnVuY3Rpb24odCl7cmV0dXJuIG4uTD1wZXJmb3JtYW5jZS5ub3coKSx0fSl9LGZ1bmN0aW9uKG4pe3Rocm93IG59KX0pLGQuaj1mdW5jdGlvbih0KXtuKHQse3R5cGU6XCJXSU5ET1dfUkVBRFlcIixtZXRhOlwid29ya2JveC13aW5kb3dcIn0pfSxkLmc9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLkIuaW5zdGFsbGluZzt0aGlzLm8+MHx8IXIobi5zY3JpcHRVUkwsdGhpcy50KXx8cGVyZm9ybWFuY2Uubm93KCk+dGhpcy5MKzZlND8odGhpcy5XPW4sdGhpcy5CLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLHRoaXMuZykpOih0aGlzLk89bix0aGlzLnUucmVzb2x2ZShuKSksKyt0aGlzLm8sbi5hZGRFdmVudExpc3RlbmVyKFwic3RhdGVjaGFuZ2VcIix0aGlzLmwpfSxkLmw9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxpPW4udGFyZ2V0LGU9aS5zdGF0ZSxyPWk9PT10aGlzLlcsdT1yP1wiZXh0ZXJuYWxcIjpcIlwiLGE9e3N3Omksb3JpZ2luYWxFdmVudDpufTshciYmdGhpcy5wJiYoYS5pc1VwZGF0ZT0hMCksdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKHUrZSxhKSksXCJpbnN0YWxsZWRcIj09PWU/dGhpcy5fPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcImluc3RhbGxlZFwiPT09ZSYmdC5CLndhaXRpbmc9PT1pJiZ0LmRpc3BhdGNoRXZlbnQobmV3IG8odStcIndhaXRpbmdcIixhKSl9LDIwMCk6XCJhY3RpdmF0aW5nXCI9PT1lJiYoY2xlYXJUaW1lb3V0KHRoaXMuXykscnx8dGhpcy5zLnJlc29sdmUoaSkpfSxkLm09ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5PO3Q9PT1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyJiYodGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwiY29udHJvbGxpbmdcIix7c3c6dCxvcmlnaW5hbEV2ZW50Om59KSksdGhpcy5oLnJlc29sdmUodCkpfSxkLnY9ZnVuY3Rpb24obil7dmFyIHQ9bi5kYXRhO3RoaXMuZGlzcGF0Y2hFdmVudChuZXcgbyhcIm1lc3NhZ2VcIix7ZGF0YTp0LG9yaWdpbmFsRXZlbnQ6bn0pKX0sbD12LCh3PVt7a2V5OlwiYWN0aXZlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucy5wcm9taXNlfX0se2tleTpcImNvbnRyb2xsaW5nXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaC5wcm9taXNlfX1dKSYmdChsLnByb3RvdHlwZSx3KSxnJiZ0KGwsZyksdn0oZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7dGhpcy5EPXt9fXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlQobikuYWRkKHQpfSx0LnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlQobikuZGVsZXRlKHQpfSx0LmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24obil7bi50YXJnZXQ9dGhpcyx0aGlzLlQobi50eXBlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0KG4pfSl9LHQuVD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5EW25dPXRoaXMuRFtuXXx8bmV3IFNldH0sbn0oKSk7ZXhwb3J0e2MgYXMgV29ya2JveCxuIGFzIG1lc3NhZ2VTV307XG4vLyMgc291cmNlTWFwcGluZ1VSTD13b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3NyYy9kYXRhL2FwaS1kYXRhLmpzXCI7XHJcbmltcG9ydCB7IERhdGFNb2RhbCB9IGZyb20gXCIuL3NyYy9kYXRhL2RhdGEtbW9kYWwuanNcIjtcclxuaW1wb3J0IHsgU3RhcnRTY2VuZSB9IGZyb20gXCIuL3NyYy9zY2VuZXMvc3RhcnQtc2NlbmUuanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi9zcmMvdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IHsgQ2FjaGVkTGFuZ3VhZ2VzIH0gZnJvbSBcIi4vc3JjL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgV29ya2JveCB9IGZyb20gXCJ3b3JrYm94LXdpbmRvd1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUludGVncmF0aW9uIH0gZnJvbSBcIi4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2ludGVncmF0aW9uLmpzXCI7XHJcbmNvbnN0IGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChcIm15LWNoYW5uZWxcIik7XHJcbmxldCBjYWNoZWRfbGFuZ3VhZ2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKVxyXG4gICAgPyBuZXcgTWFwKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKSkpXHJcbiAgICA6IG5ldyBNYXAoKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBGaXJlYmFzZUludGVncmF0aW9uLnNlc3Npb25FbmQoKTtcclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHJlZ2lzdGVyV29ya2JveCgpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aCA+IDQyMCA/IDQyMCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCBkYXRhID0geWllbGQgZ2V0RGF0YSgpO1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGFNb2RhbChkYXRhLk90aGVyQXVkaW9zLCBkYXRhLkxldmVscywgZGF0YS5GZWVkYmFja1RleHRzLCBkYXRhLlJpZ2h0VG9MZWZ0LCBkYXRhLkZlZWRiYWNrQXVkaW9zKTtcclxuICAgICAgICBpZiAod2luZG93LkFuZHJvaWQpIHtcclxuICAgICAgICAgICAgd2luZG93LkFuZHJvaWQucmVjZWl2ZURhdGEoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykgPyBjYWNoZWRfbGFuZ3VhZ2VzLmdldChsYW5nKSA6IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbG9iYWxUaGlzLmFib3V0Q29tcGFueSA9IGRhdGEuYWJvdXRDb21wYW55O1xyXG4gICAgICAgIGdsb2JhbFRoaXMuZGVzY3JpcHRpb25UZXh0ID0gZGF0YS5kZXNjcmlwdGlvblRleHQ7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5pbml0aWFsaXplRmlyZWJhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoID4gNDIwID8gNDIwIDogd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5tb25zdGVyO1xyXG4gICAgICAgICAgICAgICAgbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpLmRlbGV0ZUFsbExheWVycygpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhcnRTY2VuZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IG5ldyBTdGFydFNjZW5lKGNhbnZhcywgZCwgdGhpcy5hbmFseXRpY3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGlmIChjYWNoZWRfbGFuZ3VhZ2VzLmhhcyhsYW5nKSkge1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5pbml0aWFsaXplRmlyZWJhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NlbmUgPSBuZXcgU3RhcnRTY2VuZShjYW52YXMsIGQsIHRoaXMuYW5hbHl0aWNzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyV29ya2JveCgpIHtcclxuICAgIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBsZXQgd2IgPSBuZXcgV29ya2JveChcIi4vc3cuanNcIiwge30pO1xyXG4gICAgICAgIHdiLnJlZ2lzdGVyKCkudGhlbihoYW5kbGVTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKTtcclxuICAgICAgICBpZiAoIWNhY2hlZF9sYW5ndWFnZXMuaGFzKGxhbmcpKSB7XHJcbiAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoeyBjb21tYW5kOiBcIkNhY2hlXCIsIGRhdGE6IGxhbmcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZVNlcnZpY2VXb3JrZXJNZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgcmVnaXN0cmF0aW9uLmluc3RhbGxpbmcucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6IFwiUmVnaXN0cmF0aW9uXCIsXHJcbiAgICAgICAgdmFsdWU6IGxhbmcsXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTZXJ2aWNlV29ya2VyTWVzc2FnZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmRhdGEubXNnID09IFwiTG9hZGluZ1wiKSB7XHJcbiAgICAgICAgaGFuZGxlTG9hZGluZ01lc3NhZ2UoZXZlbnQuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuZGF0YS5tc2cgPT0gXCJVcGRhdGUgRm91bmRcIikge1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZUZvdW5kTWVzc2FnZSgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmdNZXNzYWdlKGRhdGEpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ19udW1iZXJcIikuaW5uZXJIVE1MID1cclxuICAgICAgICBcIiBcIiArIFwiIGRvd25sb2FkaW5nLi4uIFwiICsgZGF0YS5kYXRhICsgXCIlXCI7XHJcbiAgICBpZiAoZGF0YS5kYXRhID09IDEwMCkge1xyXG4gICAgICAgIGNhY2hlZF9sYW5ndWFnZXMuc2V0KGxhbmcsIFwidHJ1ZVwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDYWNoZWRMYW5ndWFnZXMsIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20oY2FjaGVkX2xhbmd1YWdlcy5lbnRyaWVzKCkpKSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUZvdW5kTWVzc2FnZSgpIHtcclxuICAgIGxldCB0ZXh0ID0gXCJVcGRhdGUgRm91bmRcXG5QcmVzcyBvayB0byB1cGRhdGUuXCI7XHJcbiAgICBpZiAoY29uZmlybSh0ZXh0KSA9PSB0cnVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0ZXh0ID0gXCJZb3UgY2FuY2VsZWQhXCI7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9