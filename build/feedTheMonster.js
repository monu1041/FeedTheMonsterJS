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
        console.log(eatImg.src);
        console.log(idleImg.src);
        console.log(spitImg.src);
        console.log(monsterPhaseNumber);
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
                            self.callBack(true, true, pickedStone.text.length);
                        }
                        else {
                            self.callBack(true, false, pickedStone.text.length);
                        }
                    }
                    else {
                        gs.stones = [];
                        self.callBack(false, true, pickedStone.text.length);
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
        }, 6500);
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
    constructor(canvas, score, monster, levelEndCallBack, levelData, isGamePause, monsterPhaseNumber) {
        this.canvas = canvas;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__.CanvasStack("canvas");
        this.monster = monster;
        this.levelData = levelData;
        this.isGamePause = isGamePause;
        this.monsterPhaseNumber = monsterPhaseNumber || 1;
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
        this.canvas.scene.audio.playSound("./assets/audios/intro.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_0__.IntroMusic);
        if (this.starCount <= 1) {
            this.canvas.scene.audio.playSound(audioUrl.levelLose, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndAudio);
            this.monster.changeImage("./assets/images/sad1" + this.monsterPhaseNumber + ".png");
        }
        else {
            this.monster.changeImage("./assets/images/happy1" + this.monsterPhaseNumber + ".png");
            this.canvas.scene.audio.playSound(audioUrl.levelWin, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndAudio);
        }
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState === "visible") {
                self.canvas.scene.audio.playSound("./assets/audios/intro.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_0__.IntroMusic);
            }
            else {
                self.canvas.scene.audio.pauseSound();
            }
        }, false);
        this.monster.changeZindex(9);
        var self = this;
        this.id = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndLayer);
        this.context = document.getElementById(this.id).getContext("2d");
        document.getElementById(this.id).style.zIndex = "8";
        this.bottonLayer = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndButtonsLayer);
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
                ? new _components_buttons_next_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](self.context, self.canvas, self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7)
                : null;
        self.retryButton = new _components_buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.context, self.canvas, self.starCount >= 2
            ? self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2
            : self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7);
        self.closeButton = new _components_buttons_close_button_js__WEBPACK_IMPORTED_MODULE_1__["default"](self.context, self.canvas, self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7);
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
    redrawOfStones(status, emptyTarget, picked_stone_lenghth) {
        noMoreTarget = emptyTarget;
        var fntsticOrGrtIndex = self.getRandomInt(0, 1);
        if (status) {
            self.monster.changeToEatAnimation();
            self.audio.playSound(audioUrl.monsterHappy, _common_common_js__WEBPACK_IMPORTED_MODULE_7__.PhraseAudio);
            if (emptyTarget) {
                setTimeout(() => {
                    self.audio.playSound(audioUrl.phraseAudios[fntsticOrGrtIndex], _common_common_js__WEBPACK_IMPORTED_MODULE_7__.FeedbackAudio);
                    self.promptText.showFantasticOrGreat(fntsticOrGrtIndex);
                }, 100);
                self.promptText.draw((word_dropped_stones += picked_stone_lenghth));
                self.timerTicking.stopTimer();
                // self.promptText.draw((word_dropped_stones += 1));
                score += 100;
                word_dropped_stones = 0;
                current_puzzle_index += 1;
            }
            else {
                self.promptText.draw((word_dropped_stones += picked_stone_lenghth));
            }
        }
        else {
            self.timerTicking.stopTimer();
            self.monster.changeToSpitAnimation();
            self.audio.playSound(audioUrl.monsterSad, _common_common_js__WEBPACK_IMPORTED_MODULE_7__.PhraseAudio);
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
                            self.promptText.setCurrrentPuzzleData(self.puzzleData[current_puzzle_index]);
                            self.timerTicking.draw();
                            self.promptText.draw();
                        }
                    }, i * 1300.66);
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
            console.log(totalStarsCount + "total star count");
            if (self.monsterPhaseNumber < monsterPhaseNumber) {
                if (monsterPhaseNumber <= 4) {
                    self.monsterPhaseNumber = monsterPhaseNumber;
                    console.log("setting data" + monsterPhaseNumber);
                    localStorage.setItem(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.StoreMonsterPhaseNumber, monsterPhaseNumber);
                    self.monster.changePhaseNumber(monsterPhaseNumber);
                    self.monster.changeImage("./assets/images/idle1" + self.monsterPhaseNumber + ".png");
                }
                else {
                    self.monsterPhaseNumber = 4;
                }
            }
            console.log(self.monsterPhaseNumber);
            console.log(monsterPhaseNumber);
        }
        self.levelStartCallBack();
        if (self.levelData.levelNumber == 149) {
            self.exitAllScreens();
            new _game_end_scene_js__WEBPACK_IMPORTED_MODULE_8__.GameEndScene(self.game);
        }
        else {
            setTimeout(() => {
                new _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__.LevelEndScene(self.game, score, self.monster, self.levelEndCallBack, self.levelData, isGamePause, self.monsterPhaseNumber);
            }, 1000);
        }
        isLevelEnded = true;
    }
    createCanvas() {
        var monsterPhaseNumber = this.monsterPhaseNumber || 1;
        console.log(monsterPhaseNumber);
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
                    new _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__.LevelEndScene(self.game, score, self.monster, self.levelEndCallBack, self.levelData, isGamePause, this.monsterPhaseNumber);
                }, 1000);
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
/* harmony import */ var _src_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/firebase/firebase_config.js */ "./src/firebase/firebase_config.js");
/* harmony import */ var _src_common_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/common.js */ "./src/common/common.js");
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global-variables.js */ "./global-variables.js");
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
let cached_languages = localStorage.getItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_5__.CachedLanguages)
    ? new Map(JSON.parse(localStorage.getItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_5__.CachedLanguages)))
    : new Map();
window.addEventListener("load", function () {
    return __awaiter(this, void 0, void 0, function* () {
        if ("serviceWorker" in navigator) {
            let wb = new workbox_window__WEBPACK_IMPORTED_MODULE_6__.Workbox("./sw.js", {});
            wb.register().then((registration) => {
                registration.installing.postMessage({
                    type: "Registration",
                    value: _global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang,
                });
            });
            if (!cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang)) {
                channel.postMessage({ command: "Cache", data: _global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang });
            }
            navigator.serviceWorker.addEventListener("message", function (event) {
                if (event.data.msg == "Loading") {
                    document.getElementById("loading_number").innerHTML =
                        " " + " downloading... " + event.data.data + "%";
                    if (event.data.data == 100) {
                        cached_languages.set(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang, "true");
                        localStorage.setItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_5__.CachedLanguages, JSON.stringify(Array.from(cached_languages.entries())));
                        window.location.reload();
                    }
                }
                if (event.data.msg == "Update Found") {
                    let text = "Update Found\nPress ok to update.";
                    if (confirm(text) == true) {
                        localStorage.removeItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_5__.CachedLanguages);
                        window.location.reload();
                    }
                    else {
                        text = "You canceled!";
                    }
                }
            });
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
        if (window.Android) {
            window.Android.receiveData(cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang) ? cached_languages.get(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang) : null);
        }
        globalThis.aboutCompany = data.aboutCompany;
        globalThis.descriptionText = data.descriptionText;
        window.addEventListener("resize", () => __awaiter(this, void 0, void 0, function* () {
            if (cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang)) {
                canvas.height = window.innerHeight;
                canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
                delete this.monster;
                new _src_utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_3__.CanvasStack("canvas").deleteAllLayers();
                delete this.startScene;
                this.startScene = new _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__.StartScene(canvas, d, this.analytics);
            }
        }));
        if (cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang)) {
            this.startScene = new _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__.StartScene(canvas, d, this.analytics);
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLDBEQUFXO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMseUJBQXlCLGdFQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMENBQUk7QUFDaEI7QUFDQTtBQUNBLDRCQUE0Qix5RUFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMEJBQTBCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FB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c0RBQUk7QUFDakQsNkNBQTZDLGtFQUFlO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxrRUFBZTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDhDQUE4Qyw0RUFBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFPO0FBQ2hDLG9CQUFvQiw4REFBUztBQUM3QjtBQUNBLDREQUE0RCxzREFBSSx5QkFBeUIsc0RBQUk7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFFQUFXO0FBQy9CO0FBQ0Esc0NBQXNDLGtFQUFVO0FBQ2hEO0FBQ0EsU0FBUztBQUNULGlDQUFpQyxzREFBSTtBQUNyQyxrQ0FBa0Msa0VBQVU7QUFDNUM7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9nbG9iYWwtdmFyaWFibGVzLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9sZXZlbC1jb25maWcuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vc291bmQuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vc3RvbmVzLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYW5jZWxfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2Nsb3NlX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9pbnN0YWxsX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9uZXh0X2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9wYXVzZV9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcGxheV9idXRvb24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcmV0cnlfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9sZXZlbC1pbmRpY2F0b3JzLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9tb25zdGVyLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9wYXVzZS1wb3B1cC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvcHJvbXB0LXRleHQuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3N0b25lcy1sYXllci5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvdGltZXItdGlja2luZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvYXBpLWRhdGEuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9kYXRhL2RhdGEtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9kYXRhL3Byb2ZpbGUtZGF0YS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9nYW1lLWVuZC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9nYW1lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2xldmVsLWVuZC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9sZXZlbC1zZWxlY3Rpb24tc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvbGV2ZWwtc3RhcnQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvc3RhcnQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy91dGlsaXR5L2NhbnZhcy1zdGFjay5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtd2luZG93L2J1aWxkL3dvcmtib3gtd2luZG93LnByb2QuZXM1Lm1qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL2ZlZWRUaGVNb25zdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5leHBvcnQgdmFyIGxhbmcgPSB1cmxQYXJhbXMuZ2V0KFwiZnRtX2xhbmd1YWdlXCIpO1xuIiwiaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZXMoc291cmNlcywgY2FsbGJhY2spIHtcbiAgICB2YXIgaW1hZ2VzID0ge307XG4gICAgdmFyIGxvYWRlZEltYWdlcyA9IDA7XG4gICAgdmFyIG51bUltYWdlcyA9IDA7XG4gICAgLy8gZ2V0IG51bSBvZiBzb3VyY2VzXG4gICAgZm9yICh2YXIgc3JjIGluIHNvdXJjZXMpIHtcbiAgICAgICAgbnVtSW1hZ2VzKys7XG4gICAgfVxuICAgIGZvciAodmFyIHNyYyBpbiBzb3VyY2VzKSB7XG4gICAgICAgIGltYWdlc1tzcmNdID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlc1tzcmNdLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgrK2xvYWRlZEltYWdlcyA+PSBudW1JbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpbWFnZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpbWFnZXNbc3JjXS5zcmMgPSBzb3VyY2VzW3NyY107XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRpbmdTY3JlZW4obG9hZGluZykge1xuICAgIGNvbnN0IGxvYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nLXNjcmVlblwiKTtcbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ190ZXh0XCIpO1xuICAgIGxvYWRpbmdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICBsb2FkaW5nRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuYmtnQ2FudmFzLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvYWRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpLmJrZ0NhbnZhcy5sYXllcnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkKTtcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IE1vbnN0ZXJMYXllciA9IFwibW9uc3RlckNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFBhdXNlUG9wdXBMYXllciA9IFwicGF1c2Vwb3B1cENhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFN0b25lTGF5ZXIgPSBcInN0b25lQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgVGltZXRpY2tlckxheWVyID0gXCJ0aW1ldGlja0NhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IExldmVsRW5kTGF5ZXIgPSBcImxldmVsRW5kQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgTGV2ZWxFbmRCdXR0b25zTGF5ZXIgPSBcImxldmVsRW5kQnV0dG9uc0NhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IExldmVsU2VsZWN0aW9uTGF5ZXIgPSBcImxldmVsU2VsZWN0aW9uQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgTGV2ZWxTdGFydExheWVyID0gXCJsZXZlbFN0YXJ0Q2FudmFzXCI7XG5leHBvcnQgY29uc3QgU3RhcnRTY2VuZUxheWVyID0gXCJzdGFydFNjZW5lQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgUGxheUJ1dHRvbkxheWVyID0gXCJwbGF5QnV0dG9uQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgR2FtZUVuZExheWVyID0gXCJHYW1lRW5kQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VyQ2xpY2tlZCA9IFwidXNlcl9jbGlja2VkXCI7XG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VySW5zdGFsbCA9IFwidXNlcl9pbnN0YWxsZWRcIjtcbmV4cG9ydCBjb25zdCBQcm9tcHRUZXh0TGF5ZXIgPSBcInByb21wdFRleHRDYW52YXNcIjtcbmV4cG9ydCBjb25zdCBQV0FJbnN0YWxsU3RhdHVzID0gXCJwd2FfaW5zdGFsbGVkX3N0YXR1c1wiO1xuZXhwb3J0IGNvbnN0IFVzZXJDYW5jZWxsZWQgPSBcInVzZXJfY2FuY2VsX2luc3RhbGxhdGlvblwiO1xuZXhwb3J0IGNvbnN0IE5hdGl2ZVBsYXlCdXR0b24gPSBcIm5hdGl2ZV9wbGF5YnV0dG9uX2NsaWNrZWRcIjtcbmV4cG9ydCBjb25zdCBQcmV2aW91c1BsYXllZExldmVsID0gXCJzdG9yZVByZXZpb3VzUGxheWVkTGV2ZWxcIiArIGxhbmc7XG5leHBvcnQgY29uc3QgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgPSBcInN0b3JlTW9uc3RlclBoYXNlTnVtYmVyXCIgKyBsYW5nO1xuZXhwb3J0IGNvbnN0IENhY2hlZExhbmd1YWdlcyA9IFwiY2FjaGVkX2xhbmd1YWdlc1wiO1xuZXhwb3J0IGNvbnN0IE1vbnN0ZXJBdWRpbyA9IFwibW9uc3Rlcl9hdWRpb1wiO1xuZXhwb3J0IGNvbnN0IEZlZWRiYWNrQXVkaW8gPSBcImZlZWRiYWNrX2F1ZGlvXCI7XG5leHBvcnQgY29uc3QgSW50cm9NdXNpYyA9IFwiaW50cm9fbXVzaWNcIjtcbmV4cG9ydCBjb25zdCBQcm9tcHRBdWRpbyA9IFwicHJvbXB0X2F1ZGlvXCI7XG5leHBvcnQgY29uc3QgQnV0dG9uQ2xpY2sgPSBcImJ1dHRvbl9jbGlja1wiO1xuZXhwb3J0IGNvbnN0IFRpbWVPdmVyID0gXCJ0aW1lX292ZXJcIjtcbmV4cG9ydCBjb25zdCBTdG9uZU11c2ljID0gXCJzdG9uZV9tdXNpY1wiO1xuZXhwb3J0IGNvbnN0IFBocmFzZUF1ZGlvID0gXCJwaHJhc2VfYXVkaW9cIjtcbmV4cG9ydCBjb25zdCBMZXZlbEVuZEF1ZGlvID0gXCJsZXZlbF9lbmRfYXVkaW9cIjtcbiIsImV4cG9ydCBjbGFzcyBMZXZlbENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoeFBvcywgeVBvcywgaW5kZXgpIHtcbiAgICAgICAgdGhpcy54ID0geFBvcztcbiAgICAgICAgdGhpcy55ID0geVBvcztcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBJY29uLnBuZ1wiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJ1dHRvbkNsaWNrLCBGZWVkYmFja0F1ZGlvLCBJbnRyb011c2ljLCBMZXZlbEVuZEF1ZGlvLCBNb25zdGVyQXVkaW8sIFBocmFzZUF1ZGlvLCBQcm9tcHRBdWRpbywgU3RvbmVNdXNpYywgVGltZU92ZXIsIH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5sZXQgaW5hY3RpdmVfc2NyZWVuID0gZmFsc2U7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9uc3Rlcl9hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE1vbnN0ZXJBdWRpbyk7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tfYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChGZWVkYmFja0F1ZGlvKTtcbiAgICAgICAgdGhpcy5pbnRyb19tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEludHJvTXVzaWMpO1xuICAgICAgICB0aGlzLnByb21wdF9hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFByb21wdEF1ZGlvKTtcbiAgICAgICAgdGhpcy5idXR0b25fY2xpY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChCdXR0b25DbGljayk7XG4gICAgICAgIHRoaXMudGltZV9vdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVGltZU92ZXIpO1xuICAgICAgICB0aGlzLnN0b25lX211c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoU3RvbmVNdXNpYyk7XG4gICAgICAgIHRoaXMucGhyYXNlX2F1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUGhyYXNlQXVkaW8pO1xuICAgICAgICB0aGlzLmxldmVsX2VuZF9hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFBocmFzZUF1ZGlvKTtcbiAgICB9XG4gICAgcGxheVNvdW5kKHNyYywgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTW9uc3RlckF1ZGlvOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25zdGVyX2F1ZGlvLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnN0ZXJfYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBGZWVkYmFja0F1ZGlvOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja19hdWRpby5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja19hdWRpby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEludHJvTXVzaWM6IHtcbiAgICAgICAgICAgICAgICB0aGlzLmludHJvX211c2ljLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICB0aGlzLmludHJvX211c2ljLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgUHJvbXB0QXVkaW86IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb21wdF9hdWRpby5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRfYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBCdXR0b25DbGljazoge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uX2NsaWNrLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbl9jbGljay5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFRpbWVPdmVyOiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lX292ZXIuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZV9vdmVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU3RvbmVNdXNpYzoge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvbmVfbXVzaWMuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvbmVfbXVzaWMucGxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBQaHJhc2VBdWRpbzoge1xuICAgICAgICAgICAgICAgIHRoaXMucGhyYXNlX2F1ZGlvLnNyYyA9IHNyYztcbiAgICAgICAgICAgICAgICB0aGlzLnBocmFzZV9hdWRpby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIExldmVsRW5kQXVkaW86IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsX2VuZF9hdWRpby5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbF9lbmRfYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RpdmVTY3JlZW4oKSB7XG4gICAgICAgIGlmIChpbmFjdGl2ZV9zY3JlZW4pIHtcbiAgICAgICAgICAgIGluYWN0aXZlX3NjcmVlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXVzZVNvdW5kKCk7XG4gICAgICAgICAgICBpbmFjdGl2ZV9zY3JlZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlU291bmQoKSB7XG4gICAgICAgIHRoaXMubW9uc3Rlcl9hdWRpby5wYXVzZSgpO1xuICAgICAgICB0aGlzLmZlZWRiYWNrX2F1ZGlvLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuaW50cm9fbXVzaWMucGF1c2UoKTtcbiAgICAgICAgdGhpcy5sZXZlbF9lbmRfYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgdGhpcy5waHJhc2VfYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgdGhpcy50aW1lX292ZXIucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zdG9uZV9tdXNpYy5wYXVzZSgpO1xuICAgICAgICB0aGlzLnByb21wdF9hdWRpby5wYXVzZSgpO1xuICAgICAgICB0aGlzLmJ1dHRvbl9jbGljay5wYXVzZSgpO1xuICAgICAgICB0aGlzLnRpbWVfb3Zlci5wYXVzZSgpO1xuICAgICAgICAvLyB0aGlzLmludHJvQXVkaW8ucGF1c2UoKTtcbiAgICAgICAgLy8gdGhpcy5hdWRpbyA/IHRoaXMuYXVkaW8ucGF1c2UoKSA6IG51bGw7XG4gICAgICAgIC8vIHRoaXMuYXVkaW8yID8gdGhpcy5hdWRpbzEucGF1c2UoKSA6IG51bGw7XG4gICAgICAgIC8vIHRoaXMuYXVkaW8yID8gdGhpcy5hdWRpbzIucGF1c2UoKSA6IG51bGw7XG4gICAgfVxuICAgIGNoYW5nZVNvdXJzZShzcmMpIHtcbiAgICAgICAgLy8gdGhpcy5hdWRpby5zcmMgPSBzcmM7XG4gICAgICAgIC8vIHRoaXMucGxheVNvdW5kKHNyYyk7XG4gICAgfVxuICAgIHBsYXlMZXZlbEVuZEhhcHB5QXVkaW8obGV2ZWxXaW5BdWRpbykge1xuICAgICAgICAvLyB0aGlzLmF1ZGlvLnNyYyA9IGxldmVsV2luQXVkaW87XG4gICAgICAgIC8vIHRoaXMucGxheVNvdW5kKGxldmVsV2luQXVkaW8pO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICB0aGlzLmludHJvQXVkaW8ucGxheSgpO1xuICAgICAgICAvLyB9LCA3MDApO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTdG9uZUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3Ioc3RvbmVMZXR0ZXIsIHhQb3MsIHlQb3MpIHtcbiAgICAgICAgdGhpcy54ID0geFBvcztcbiAgICAgICAgdGhpcy55ID0geVBvcztcbiAgICAgICAgdGhpcy5vcmlneCA9IHhQb3M7XG4gICAgICAgIHRoaXMub3JpZ3kgPSB5UG9zO1xuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRleHQgPSBzdG9uZUxldHRlcjtcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc3RvbmVfcGlua192MDIucG5nXCI7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FuY2VsQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gY2FudmFzLndpZHRoICogMC4xICsgKGNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMjtcbiAgICAgICAgdGhpcy5wb3NZID0gY2FudmFzLmhlaWdodCAqIDAuMjtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Nsb3NlX2J0bi5wbmdcIjtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwX2J0bi5wbmdcIjtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFsbEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9JbnN0YWxsX2J1dHRvbi5wbmdcIjtcbiAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoIC8gMywgc2VsZi5jYW52YXMud2lkdGggLyA2KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyAxMikgKlxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDEyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuY2FudmFzLndpZHRoIC8gOCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0QnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHBvc1gsIHBvc1kpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25leHRfYnRuLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IGNhbnZhcy53aWR0aCAtIGNhbnZhcy5oZWlnaHQgKiAwLjA5O1xuICAgICAgICB0aGlzLnBvc1kgPSAwO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGF1c2VfdjAxLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIG9uQ2xpY2soeENsaWNrLCB5Q2xpY2spIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMikgKlxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9QbGF5X2J1dHRvbi5wbmdcIjtcbiAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoIC8gMywgc2VsZi5jYW52YXMud2lkdGggLyAzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLmNhbnZhcy53aWR0aCAvIDgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0cnlCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcmV0cnlfYnRuLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTGV2ZWxJbmRpY2F0b3JzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIGFjdGl2ZUluZGljYXRvcnMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9ycyA9IGFjdGl2ZUluZGljYXRvcnM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBzZXRJbmRpY2F0b3JzKGludCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGljYXRvcnMgPSBpbnQ7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBsZXZlbF9pbmRpY2F0b3IgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV2ZWxfaW5kaWNhdG9yLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2xldmVsc192MDEucG5nXCI7XG4gICAgICAgIHZhciBiYXJfZW1wdHkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFyX2VtcHR5LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Jhcl9lbXB0eV92MDEucG5nXCI7XG4gICAgICAgIGxldmVsX2luZGljYXRvci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShsZXZlbF9pbmRpY2F0b3IsIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgMCwgc2VsZi5jYW52YXMud2lkdGggKiAwLjM1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KTtcbiAgICAgICAgICAgIGJhcl9lbXB0eS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UoYmFyX2VtcHR5LCAoKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyA3KSAqIChpICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyIC0gKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gNiwgKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyAxMCwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKHNlbGYpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUoc2VsZikge1xuICAgICAgICB2YXIgYmFyX2Z1bGwgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFyX2Z1bGwuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmFyX2Z1bGxfdjAxLnBuZ1wiO1xuICAgICAgICBiYXJfZnVsbC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFjdGl2ZUluZGljYXRvcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UoYmFyX2Z1bGwsICgoc2VsZi5jYW52YXMud2lkdGggKiAwLjM1KSAvIDcpICogKGkgKyAxKSArIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMiAtIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDYsIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gMTAsIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vbnN0ZXJMYXllciwgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbnZhciBsYXN0VGltZSA9IDA7XG52YXIgc2VsZjtcbnZhciBhbmltYXRpb25GcmFtZTtcbnZhciBtb25zdGVyUGhhc2VOdW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yZU1vbnN0ZXJQaGFzZU51bWJlcikgfHwgMTtcbmNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+LlwiKTtcbmNvbnNvbGUubG9nKG1vbnN0ZXJQaGFzZU51bWJlcik7XG52YXIgZWF0SW1nID0gbmV3IEltYWdlKCk7XG5lYXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZWF0MVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XG52YXIgaWRsZUltZyA9IG5ldyBJbWFnZSgpO1xuaWRsZUltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XG52YXIgc3BpdEltZyA9IG5ldyBJbWFnZSgpO1xuc3BpdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zcGl0MVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XG5jb25zb2xlLmxvZyhcIm1vbnN0ZXJleGVjdXRpbmdcIik7XG5leHBvcnQgY2xhc3MgTW9uc3RlciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgemluZGV4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnppbmRleCA9IHppbmRleDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmdhbWUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb25zdGVyXCIpO1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgdGhpcy5tYXhGcmFtZSA9IDY7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS53aWR0aCAvIDIgLSB0aGlzLmdhbWUud2lkdGggKiAwLjI0MztcbiAgICAgICAgdGhpcy55ID0gdGhpcy5nYW1lLndpZHRoIC8gMztcbiAgICAgICAgdGhpcy5mcHMgPSAxMDtcbiAgICAgICAgdGhpcy5mcmFtZUludGVydmFsID0gMTAwMCAvIHRoaXMuZnBzO1xuICAgICAgICB0aGlzLmZyYW1lVGltZXIgPSAwO1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBNb25zdGVyTGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiNlwiO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbigwKTtcbiAgICB9XG4gICAgY2hhbmdlWmluZGV4KGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSBpbmRleDtcbiAgICB9XG4gICAgZGVsZXRlQ2FudmFzKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVUaW1lciA+IHRoaXMuZnJhbWVJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IHRoaXMubWF4RnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyICs9IGRlbHRhVGltZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgNzcwICogdGhpcy5mcmFtZVgsIDEzODYgKiB0aGlzLmZyYW1lWSwgNzY4LCAxMzg2LCB0aGlzLngsIHRoaXMueSAqIDAuOCwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMS41KTtcbiAgICB9XG4gICAgY2hhbmdlSW1hZ2Uoc3JjKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKDApO1xuICAgICAgICAvLyBpZiAodGhpcy5mcmFtZVkgPT0gMSkge1xuICAgICAgICAvLyAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBzcmM7XG4gICAgfVxuICAgIGNoYW5nZVBoYXNlTnVtYmVyKG1vbnN0ZXJQaGFzZU51bSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vbnN0ZXIgY2hhbmdpbmdcIik7XG4gICAgICAgIGVhdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBlYXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZWF0MVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XG4gICAgICAgIGlkbGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWRsZUltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XG4gICAgICAgIHNwaXRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3BpdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zcGl0MVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGVhdEltZy5zcmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhpZGxlSW1nLnNyYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNwaXRJbWcuc3JjKTtcbiAgICAgICAgY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcbiAgICB9XG4gICAgY2hhbmdlVG9FYXRBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBlYXRJbWc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0lkbGVBbmltYXRpb24oKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIGNoYW5nZVRvSWRsZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGlkbGVJbWc7XG4gICAgfVxuICAgIGNoYW5nZVRvU3BpdEFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHNwaXRJbWc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0lkbGVBbmltYXRpb24oKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIGFuaW1hdGlvbih0aW1lU3RhbXApIHtcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIGxhc3RUaW1lO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgc2VsZi51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2VsZi5hbmltYXRpb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhdXNlUG9wdXBMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IENhbmNlbEJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2NhbmNlbF9idXR0b24uanNcIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2Nsb3NlX2J1dHRvbi5qc1wiO1xuaW1wb3J0IFJldHJ5QnV0dG9uIGZyb20gXCIuL2J1dHRvbnMvcmV0cnlfYnV0dG9uLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZVBvcFVwIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGxldmVsU3RhcnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoLCBQYXVzZVBvcHVwTGF5ZXIpO1xuICAgICAgICBjb25zdCBzZWxmSWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHNlbGZJZEVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBzZWxmSWRFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiMTFcIjtcbiAgICAgICAgc2VsZklkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICB2YXIgcG9wX3VwX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBvcF91cF9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9wb3B1cF9iZ192MDEucG5nXCI7XG4gICAgICAgIHBvcF91cF9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwb3BfdXBfaW1hZ2UsIHNlbGYuY2FudmFzLndpZHRoICogMC4xLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIsIHNlbGYuY2FudmFzLndpZHRoICogMC44LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuOCk7XG4gICAgICAgICAgICBzZWxmLmNhbmNlbEJ1dHRvbiA9IG5ldyBDYW5jZWxCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcyk7XG4gICAgICAgICAgICBzZWxmLnJldHJ5QnV0dG9uID0gbmV3IFJldHJ5QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC41NSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yICtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNCAtXG4gICAgICAgICAgICAgICAgKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKTtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjI1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIgK1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLndpZHRoICogMC40IC1cbiAgICAgICAgICAgICAgICAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmSWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZklkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChzZWxmLmNhbmNlbEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LnRpbWVyVGlja2luZy5yZXN1bWVUaW1lcigpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5sZXZlbEVuZENhbGxCYWNrKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5yZXRyeUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJjbG9zZV9idXR0b25cIik7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoc2VsZikge1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xuICAgIH1cbiAgICBkcmF3KCkgeyB9XG4gICAgdXBkYXRlKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBQcm9tcHRUZXh0TGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xudmFyIHNlbGY7XG5leHBvcnQgY2xhc3MgUHJvbXB0VGV4dCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgbGV2ZWxTdGFydCwgY3VycmVudFB1enpsZURhdGEsIGxldmVsRGF0YSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBsZXZlbERhdGE7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0ID0gY3VycmVudFB1enpsZURhdGEucHJvbXB0LnByb21wdFRleHQ7XG4gICAgICAgIHRoaXMuY3VycmVudFB1enpsZURhdGEgPSBjdXJyZW50UHV6emxlRGF0YTtcbiAgICAgICAgdGhpcy5mbnRzdE9yR3J0SW1nQXJyID0gW107XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIHRoaXMubG9hZEZhbnRhc3RpY0FuZEdyZWF0SW1hZ2UoKTtcbiAgICB9XG4gICAgbG9hZEZhbnRhc3RpY0FuZEdyZWF0SW1hZ2UoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5mYW50YXN0aWNfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5mYW50YXN0aWNfaW1hZ2Uuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2ZhbnRhc3RpY18wMS5wbmdcIjtcbiAgICAgICAgdGhpcy5mbnRzdE9yR3J0SW1nQXJyLnB1c2godGhpcy5mYW50YXN0aWNfaW1hZ2UpO1xuICAgICAgICB0aGlzLmdyZWF0X2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZ3JlYXRfaW1hZ2Uuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2dyZWF0XzAxLnBuZ1wiO1xuICAgICAgICB0aGlzLmZudHN0T3JHcnRJbWdBcnIucHVzaCh0aGlzLmdyZWF0X2ltYWdlKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgUHJvbXB0VGV4dExheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSA1O1xuICAgIH1cbiAgICBzZXRDdXJycmVudFB1enpsZURhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQdXp6bGVEYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvbXB0VGV4dCA9IGRhdGEucHJvbXB0LnByb21wdFRleHQ7XG4gICAgfVxuICAgIHNob3dGYW50YXN0aWNPckdyZWF0KGltYWdlSW5kZXgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRoaXMuZ2FtZS53aWR0aCAvIDIgLSAodGhpcy5nYW1lLndpZHRoICogMC41KSAvIDIsIHRoaXMuaGVpZ2h0ICogMC4xNSwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMjUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHNlbGYuZm50c3RPckdydEltZ0FycltpbWFnZUluZGV4XSwgdGhpcy5nYW1lLndpZHRoIC0gdGhpcy5nYW1lLndpZHRoICogMC43NSwgdGhpcy5oZWlnaHQgKiAwLjIsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5oZWlnaHQgKiAwLjEpO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIGRyYXcoZHJvcHBlZFN0b25lcyA9IDApIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5wcm9tcHRfaW1hZ2UsIHRoaXMuZ2FtZS53aWR0aCAvIDIgLSAodGhpcy5nYW1lLndpZHRoICogMC41KSAvIDIsIHRoaXMuaGVpZ2h0ICogMC4xNSwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMjUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IDMwICsgXCJweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY29uc3QgcHJvbXB0VGV4dExldHRlcnMgPSB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0LnNwbGl0KFwiXCIpO1xuICAgICAgICBjb25zdCB4ID0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmhlaWdodCAqIDAuMjY7XG4gICAgICAgIHZhciBmb250U2l6ZSA9IDIwO1xuICAgICAgICB2YXIgbGV0dGVySGlnaGxpZ2h0ID0gdGhpcy5jdXJyZW50UHV6emxlRGF0YS50YXJnZXRTdG9uZXNbMF0uc3BsaXQoXCJcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkxldHRlckluV29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJIaWdobGlnaHQuaW5jbHVkZXMocHJvbXB0VGV4dExldHRlcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJIaWdobGlnaHQgPSBsZXR0ZXJIaWdobGlnaHQuc2xpY2UoMSwgbGV0dGVySGlnaGxpZ2h0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiV29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcm9wcGVkU3RvbmVzID4gaSB8fCBkcm9wcGVkU3RvbmVzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxUZXh0KFxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50UHJvbXB0VGV4dCxcbiAgICAgICAgLy8gICB0aGlzLndpZHRoIC8gMi4xLFxuICAgICAgICAvLyAgIHRoaXMuaGVpZ2h0ICogMC4yNlxuICAgICAgICAvLyApO1xuICAgIH1cbiAgICBjcmVhdGVCYWNrZ3JvdW5kKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3Byb21wdFRleHRCZy5wbmdcIjtcbiAgICAgICAgc2VsZi5wcm9tcHRfaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuZHJhdygpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFByb21wdEF1ZGlvLCBTdG9uZUxheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IFN0b25lQ29uZmlnIH0gZnJvbSBcIi4uL2NvbW1vbi9zdG9uZXMtY29uZmlnLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IFBhdXNlUG9wVXAgZnJvbSBcIi4vcGF1c2UtcG9wdXAuanNcIjtcbnZhciBncyA9IHtcbiAgICBtb2RlOiBcImdhbWVwbGF5XCIsXG4gICAgbGV2ZWxudW06IDAsXG59O1xuZ3MucHV6emxlID0ge1xuICAgIHRhcmdldDogW10sXG4gICAgc3RvbmVzOiBbXSxcbn07XG5ncy5zdG9uZXMgPSBbXTtcbnZhciBwaWNrZWRTdG9uZTtcbnZhciBvZmZzZXRDb29yZGluYXRlVmFsdWUgPSAzMjtcbmNvbnN0IGRyYWdBdWRpbyA9IG5ldyBBdWRpbygpO1xuZHJhZ0F1ZGlvLnNyYyA9IFwiLi9hc3NldHMvYXVkaW9zL29uRHJhZy5tcDNcIjtcbmRyYWdBdWRpby5wcmVsb2FkID0gXCJhdXRvXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9uZXNMYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBwdXp6bGVEYXRhLCBwYXVzZWJ1dHRvbiwgY2FsbEJhY2ssIGxldmVsU3RhcnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMucGF1c2VidXR0b24gPSBwYXVzZWJ1dHRvbjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBwdXp6bGVEYXRhO1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRQdXp6bGUoKTtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxCYWNrO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgIH1cbiAgICBzZXROZXdQdXp6bGUoY3VycmVudFB1enpsZSkge1xuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBjdXJyZW50UHV6emxlO1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRQdXp6bGUoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTdG9uZXModGhpcy5zdG9uZXBvcyk7XG4gICAgfVxuICAgIHN0b25lcG9zKHN0b25lcG9zKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBzZXRDdXJyZW50UHV6emxlKCkge1xuICAgICAgICB0aGlzLmxldmVsU3RhcnQuYXVkaW8ucGxheVNvdW5kKHRoaXMucHV6emxlRGF0YS5wcm9tcHQucHJvbXB0QXVkaW8sIFByb21wdEF1ZGlvKTtcbiAgICAgICAgZ3MucHV6emxlLnN0b25lcyA9IFtdO1xuICAgICAgICBncy5wdXp6bGUudGFyZ2V0ID0gW107XG4gICAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0aGlzLnB1enpsZURhdGEudGFyZ2V0U3RvbmVzKSB7XG4gICAgICAgICAgICBncy5wdXp6bGUudGFyZ2V0LnB1c2godGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBncy5wdXp6bGUuc3RvbmVzID0gdGhpcy5nYW1lU3RvbmVPcHRpb25zKHRoaXMucHV6emxlRGF0YS5mb2lsU3RvbmVzLCB0aGlzLnB1enpsZURhdGEudGFyZ2V0U3RvbmVzKTtcbiAgICAgICAgZ3MucHV6emxlLnByb21wdCA9IHRoaXMucHV6emxlRGF0YS5wcm9tcHQucHJvbXB0VGV4dDtcbiAgICB9XG4gICAgaXNUaW1lckVuZGVkKCkge1xuICAgICAgICBwaWNrZWRTdG9uZSA9IG51bGw7XG4gICAgfVxuICAgIGdhbWVTdG9uZU9wdGlvbnMoZm9pbFN0b25lcywgdGFyZ2V0U3RvbmVzKSB7XG4gICAgICAgIHRhcmdldFN0b25lcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBmb2lsU3RvbmVzLmluZGV4T2YoZSkgIT0gLTFcbiAgICAgICAgICAgICAgICA/IGZvaWxTdG9uZXMuc3BsaWNlKGZvaWxTdG9uZXMuaW5kZXhPZihlKSwgMSlcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXJnZXRTdG9uZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgZm9pbFN0b25lcy5wdXNoKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvaWxTdG9uZXMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBTdG9uZUxheWVyKTtcbiAgICAgICAgY29uc3Qgc2VsZkVsZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5zdHlsZS56SW5kZXggPSBcIjdcIjtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0b25lcG9zID0gW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyA1IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjkgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4xNSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzLjUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4yIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDQgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMjggLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNyAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS41IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMyArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjEgLVxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjQyIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDYgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMTUgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIF07XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoeCAtIHRoaXMud2lkdGggLyAzKSA8IDEyICYmXG4gICAgICAgICAgICAgICAgTWF0aC5zcXJ0KHkgLSB0aGlzLmhlaWdodCAvIDUuNSkgPCAxMCkge1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5hdWRpby5wbGF5U291bmQoc2VsZi5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRBdWRpbywgUHJvbXB0QXVkaW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE1hdGguc3FydCgoeCAtIHRoaXMud2lkdGggLyAyIC0gKHRoaXMud2lkdGggKiAwLjMpIC8gMikgKlxuICAgICAgICAgICAgICAgICh4IC0gdGhpcy53aWR0aCAvIDIgLSAodGhpcy53aWR0aCAqIDAuMykgLyAyKSkgK1xuICAgICAgICAgICAgICAgICh5IC0gdGhpcy5oZWlnaHQgKiAwLjE1KSAqICh5IC0gdGhpcy5oZWlnaHQgKiAwLjE1KSA8PVxuICAgICAgICAgICAgICAgIDEwMDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb21wdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQudGltZXJUaWNraW5nLnJlc3VtZVRpbWVyKCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5wYXVzZWJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LnRpbWVyVGlja2luZy5wYXVzZVRpbWVyKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICBuZXcgUGF1c2VQb3BVcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxmLmlkKSwgc2VsZi5sZXZlbFN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHMgb2YgZ3Muc3RvbmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguc3FydCgoeCAtIHMueCkgKiAoeCAtIHMueCkgKyAoeSAtIHMueSkgKiAoeSAtIHMueSkpIDw9IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdBdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdBdWRpby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lID0gcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC1cbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLnggLVxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIud2lkdGggLyA0KSAqXG4gICAgICAgICAgICAgICAgKHggLVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLnggLVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLndpZHRoIC8gNCkgK1xuICAgICAgICAgICAgICAgICh5IC1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci55IC1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci5oZWlnaHQgLyAyLjcpICpcbiAgICAgICAgICAgICAgICAgICAgKHkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci55IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIuaGVpZ2h0IC8gMi43KSkgPD0gNjApIHtcbiAgICAgICAgICAgICAgICBpZiAocGlja2VkU3RvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueCA9IC05MDA7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnkgPSAtOTAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGlja2VkU3RvbmUudGV4dCA9PSBncy5wdXp6bGUudGFyZ2V0WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncy5wdXp6bGUudGFyZ2V0LnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3MucHV6emxlLnRhcmdldC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzLnN0b25lcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2sodHJ1ZSwgdHJ1ZSwgcGlja2VkU3RvbmUudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjayh0cnVlLCBmYWxzZSwgcGlja2VkU3RvbmUudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3Muc3RvbmVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrKGZhbHNlLCB0cnVlLCBwaWNrZWRTdG9uZS50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBpY2tlZFN0b25lKSB7XG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueCA9IHBpY2tlZFN0b25lLm9yaWd4O1xuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnkgPSBwaWNrZWRTdG9uZS5vcmlneTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBpY2tlZFN0b25lID0gbnVsbDtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZkVsZWxlbWVudElkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgaWYgKHBpY2tlZFN0b25lKSB7XG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueCA9IHg7XG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICB2YXIgbW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGZFbGVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICB2YXIgbW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwibW91c2Vtb3ZlXCIsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGZFbGVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICB2YXIgbW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmRWxlbGVtZW50SWQuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNyZWF0ZVN0b25lcyh0aGlzLnN0b25lcG9zKTtcbiAgICB9XG4gICAgc2V0UHJvbXB0KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRoaXMud2lkdGggKiAwLjA5ICsgXCJweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGdzLnB1enpsZS5wcm9tcHQsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAqIDAuMjcpO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IHMgb2YgZ3Muc3RvbmVzKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdzdG9uZShzLCB0aGlzLmNhbnZhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd3N0b25lKHMsIGNhbnZhcykge1xuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDEzO1xuICAgICAgICB2YXIgdGV4dEZvbnRTaXplID0gY2FudmFzLmhlaWdodCAvIDIwO1xuICAgICAgICB2YXIgaW1hZ2VDZW50ZXJPZmZzZXRYID0gaW1hZ2VTaXplIC8gMi4zO1xuICAgICAgICB2YXIgaW1hZ2VDZW50ZXJPZmZzZXRZID0gaW1hZ2VTaXplIC8gMS41O1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHMuaW1nLCBzLnggLSBpbWFnZUNlbnRlck9mZnNldFgsIHMueSAtIGltYWdlQ2VudGVyT2Zmc2V0WSwgaW1hZ2VTaXplLCBpbWFnZVNpemUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRleHRGb250U2l6ZSArIFwicHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChzLnRleHQsIHMueCwgcy55KTtcbiAgICB9XG4gICAgY3JlYXRlU3RvbmVzKHN0b25lcG9zKSB7XG4gICAgICAgIHZhciBwb3NzID0gc3RvbmVwb3NbMF07XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgZ3Muc3RvbmVzLnNwbGljZSgwLCBncy5zdG9uZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBncy5wdXp6bGUuc3RvbmVzKSB7XG4gICAgICAgICAgICB2YXIgbnMgPSBuZXcgU3RvbmVDb25maWcocywgcG9zc1tpXVswXSwgcG9zc1tpXVsxXSk7XG4gICAgICAgICAgICBncy5zdG9uZXMucHVzaChucyk7XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVGltZU92ZXIsIFRpbWV0aWNrZXJMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuZXhwb3J0IGNsYXNzIFRpbWVyVGlja2luZyB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgbGV2ZWxTdGFydCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aFRvQ2xlYXIgPSB0aGlzLmdhbWUud2lkdGggLyAzLjQ7XG4gICAgICAgIHRoaXMubWF4TGltaXRFeGhhdXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RpbWVyRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcbiAgICAgICAgdGhpcy5pc1RpbWVyUnVubmluZ091dCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFRpbWV0aWNrZXJMYXllcik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI0XCI7XG4gICAgICAgIC8vIHRoaXMuYW5pbWF0aW9uKDApO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMudGltZXJfZnVsbCwgdGhpcy5nYW1lLndpZHRoICogMC4xMiwgdGhpcy5oZWlnaHQgKiAwLjA5OSwgdGhpcy5nYW1lLndpZHRoIC0gNTAsIHRoaXMuaGVpZ2h0ICogMC4wNSk7XG4gICAgICAgIHRoaXMuYmVnaW5UaW1lck9uU3RhcnQoKTtcbiAgICB9XG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudGltZXJfZnVsbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnRpbWVyX2Z1bGwuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXJfZnVsbC5wbmdcIjtcbiAgICAgICAgdGhpcy50aW1lcl9mdWxsLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmRyYXcoKTtcbiAgICAgICAgICAgIHNlbGYuYmVnaW5UaW1lck9uU3RhcnQoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1RpbWVyU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciArPSAwLjA2O1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyID4gNTUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPCAxMDAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA+IDU0ICYmXG4gICAgICAgICAgICAgICAgIXRoaXMuaXNUaW1lclJ1bm5pbmdPdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJSdW5uaW5nT3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsU3RhcnQuYXVkaW8ucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL3RpbWVvdXQubXAzXCIsIFRpbWVPdmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA8IDU1ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPiA1NCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lclJ1bm5pbmdPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJFbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyRW5kZWQgPyB0aGlzLmxldmVsU3RhcnQuY2hhbmdlUHV6emxlKCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJlZ2luVGltZXJPblN0YXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhdXNlQnV0dG9uQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5pc1RpbWVyU3RhcnRlZCAmJiBzZWxmLnRpbWVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNUaW1lclN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNjUwMCk7XG4gICAgfVxuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIHBhdXNlVGltZXIoKSB7XG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbkNsaWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXN1bWVUaW1lcigpIHtcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b25DbGlja2VkID0gZmFsc2U7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcbmNvbnN0IFVSTCA9IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2Z0bV9cIiArIGxhbmcgKyBcIi5qc29uXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnRtRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goVVJMLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gbGV0IGQgPSB7XG4gICAgICAgIC8vICAgICBcIk90aGVyQXVkaW9zXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrVGV4dHNcIjogbnVsbCxcbiAgICAgICAgLy8gICAgIFwiTGV2ZWxzXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrQXVkaW9zXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIlJpZ2h0VG9MZWZ0XCI6IG51bGxcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4geWllbGQgZ2V0RnRtRGF0YSgpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGNsYXNzIERhdGFNb2RhbCB7XG4gICAgY29uc3RydWN0b3Iob3RoZXJBdWRpb3MsIGxldmVscywgZmVlZGJhY2tUZXh0cywgcmlnaHRUb0xlZnQsIGZlZWRiYWNrQXVkaW9zKSB7XG4gICAgICAgIHRoaXMub3RoZXJBdWRpb3MgPSBuZXcgT3RoZXJBdWRpb3Mob3RoZXJBdWRpb3MpO1xuICAgICAgICB0aGlzLmxldmVscyA9IHRoaXMuZ2V0TGV2ZWxzKGxldmVscyk7XG4gICAgICAgIHRoaXMuRmVlZGJhY2tUZXh0cyA9IG5ldyBGZWVkYmFja1RleHRzKGZlZWRiYWNrVGV4dHMpO1xuICAgICAgICB0aGlzLkZlZWRiYWNrQXVkaW9zID0gbmV3IEZlZWRiYWNrQXVkaW9zKGZlZWRiYWNrQXVkaW9zKTtcbiAgICAgICAgdGhpcy5yaWdodFRvTGVmdCA9IHJpZ2h0VG9MZWZ0O1xuICAgIH1cbiAgICBnZXRMZXZlbHMobGV2ZWxzKSB7XG4gICAgICAgIGxldCBsZXZlbEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXZlbEFycmF5LnB1c2gobmV3IExldmVscyhsZXZlbHNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWxBcnJheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgT3RoZXJBdWRpb3Mge1xuICAgIGNvbnN0cnVjdG9yKG90aGVyQXVkaW9zKSB7XG4gICAgICAgIHRoaXMuc2VsY3RZb3VyUGxheWVyID0gb3RoZXJBdWRpb3NbXCJTZWxlY3QgeW91ciBwbGF5ZXJcIl07XG4gICAgICAgIHRoaXMud2F0Y2hNZUdyb3cgPSBvdGhlckF1ZGlvc1tcIldhdGNoIG1lIGdyb3dcIl07XG4gICAgICAgIHRoaXMuYXJlWW91U3VyZSA9IG90aGVyQXVkaW9zW1wiQXJlIHlvdSBzdXJlXCJdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGZWVkYmFja1RleHRzIHtcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja1RleHRzKSB7XG4gICAgICAgIHRoaXMuZmFudGFzdGljID0gZmVlZGJhY2tUZXh0c1swXTtcbiAgICAgICAgdGhpcy5ncmVhdCA9IGZlZWRiYWNrVGV4dHNbMV07XG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrVGV4dHNbMl07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrQXVkaW9zIHtcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja0F1ZGlvcykge1xuICAgICAgICB0aGlzLmZhbnRhc3RpYyA9IGZlZWRiYWNrQXVkaW9zWzBdO1xuICAgICAgICB0aGlzLmdyZWF0ID0gZmVlZGJhY2tBdWRpb3NbMV07XG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrQXVkaW9zWzJdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZXZlbHMge1xuICAgIGNvbnN0cnVjdG9yKGxldmVscykge1xuICAgICAgICB0aGlzLnB1enpsZXMgPSB0aGlzLmdldFB1enpsZURhdGEobGV2ZWxzKTtcbiAgICAgICAgdGhpcy5sZXZlbE1ldGEgPSBuZXcgTGV2ZWxNZXRhKGxldmVscy5MZXZlbE1ldGEpO1xuICAgICAgICB0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxzLkxldmVsTnVtYmVyO1xuICAgIH1cbiAgICBnZXRQdXp6bGVEYXRhKGxldmVscykge1xuICAgICAgICBsZXQgcHV6emxlT2JqZWN0cyA9IFtdO1xuICAgICAgICBsZXZlbHMuUHV6emxlcy5tYXAoKHB1enpsZURhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwdXp6bGVPYmplY3RzLnB1c2gobmV3IFB1enpsZXMocHV6emxlRGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHB1enpsZU9iamVjdHM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFB1enpsZXMge1xuICAgIGNvbnN0cnVjdG9yKHB1enpsZSkge1xuICAgICAgICB0aGlzLnNlZ21lbnROdW1iZXIgPSBwdXp6bGUuU2VnbWVudE51bWJlcjtcbiAgICAgICAgdGhpcy5wcm9tcHQgPSBuZXcgUHJvbXB0KHB1enpsZS5wcm9tcHQpO1xuICAgICAgICB0aGlzLmZvaWxTdG9uZXMgPSB0aGlzLmdldEZvaWxTdG9uZXMocHV6emxlKTtcbiAgICAgICAgdGhpcy50YXJnZXRTdG9uZXMgPSB0aGlzLmdldFRhcmdldFN0b25lcyhwdXp6bGUpO1xuICAgIH1cbiAgICBnZXRGb2lsU3RvbmVzKHB1enpsZSkge1xuICAgICAgICBsZXQgZm9pbFN0b25lQXJyYXkgPSBbXTtcbiAgICAgICAgcHV6emxlLmZvaWxzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBmb2lsU3RvbmVBcnJheS5wdXNoKHN0b25lcy5TdG9uZVRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvaWxTdG9uZUFycmF5O1xuICAgIH1cbiAgICBnZXRUYXJnZXRTdG9uZXMocHV6emxlKSB7XG4gICAgICAgIGxldCB0YXJnZXRTdG9uZUFycmF5ID0gW107XG4gICAgICAgIHB1enpsZS50YXJnZXRzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRTdG9uZUFycmF5LnB1c2goc3RvbmVzLlN0b25lVGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3RvbmVBcnJheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9pbFN0b25lIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9uZVRleHQpIHtcbiAgICAgICAgdGhpcy5zdG9uZVRleHQgPSBzdG9uZVRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRhcmdldFN0b25lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdG9uZVRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb21wdCB7XG4gICAgY29uc3RydWN0b3IocHJvbXB0KSB7XG4gICAgICAgIHRoaXMucHJvbXB0VGV4dCA9IHByb21wdC5Qcm9tcHRUZXh0O1xuICAgICAgICB0aGlzLnByb21wdEF1ZGlvID0gcHJvbXB0LlByb21wdEF1ZGlvO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZXZlbE1ldGEge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsTWV0YSkge1xuICAgICAgICB0aGlzLnByb21wdEZhZGVPdXQgPSBsZXZlbE1ldGEuUHJvbXB0RmFkZW91dDtcbiAgICAgICAgdGhpcy5sZXR0ZXJHcm91cCA9IGxldmVsTWV0YS5MZXR0ZXJHcm91cDtcbiAgICAgICAgdGhpcy5sZXZlbE51bWJlciA9IGxldmVsTWV0YS5MZXZlbE51bWJlcjtcbiAgICAgICAgdGhpcy5wcm90b1R5cGUgPSBsZXZlbE1ldGEuUHJvbXB0VHlwZTtcbiAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBsZXZlbE1ldGEuTGV2ZWxUeXBlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xuZXhwb3J0IGNsYXNzIFByb2ZpbGVEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbE5hbWUsIGxldmVsTnVtYmVyLCBsZXZlbFNjb3JlLCBsZXZlbFN0YXIpIHtcbiAgICAgICAgKHRoaXMubGV2ZWxOYW1lID0gbGV2ZWxOYW1lKSxcbiAgICAgICAgICAgICh0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxOdW1iZXIpLFxuICAgICAgICAgICAgKHRoaXMubGV2ZWxTY29yZSA9IGxldmVsU2NvcmUpLFxuICAgICAgICAgICAgKHRoaXMubGV2ZWxTdGFyID0gbGV2ZWxTdGFyKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0YVRvU3RvcmFnZShwcm9maWxlRGF0YSkge1xuICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IGdldERhdGFmcm9tU3RvcmFnZSgpXG4gICAgICAgID8ganNvblRvQXJyYXkoZ2V0RGF0YWZyb21TdG9yYWdlKCkpXG4gICAgICAgIDogW107XG4gICAgcHJvZmlsZURhdGEgPyBkYXRhUHVzaFRvQXJyYXkoZXhpc3RpbmdEYXRhLCBwcm9maWxlRGF0YSkgOiBudWxsO1xuICAgIGV4aXN0aW5nRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmxldmVsTnVtYmVyID4gYi5sZXZlbE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdEYXRhKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsYW5nICsgXCJQcm9maWxlXCIsIGRhdGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGpzb25Ub0FycmF5KGpzb24pIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIGZvciAodmFyIGkgaW4ganNvbikge1xuICAgICAgICBkYXRhLnB1c2goanNvbltpXSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuZnVuY3Rpb24gZGF0YVB1c2hUb0FycmF5KGpzb25EYXRhLCBwcm9maWxlRGF0YSkge1xuICAgIHZhciBkYXRhTm90RXhpc3QgPSB0cnVlO1xuICAgIGpzb25EYXRhLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlSW50KGRhdGEubGV2ZWxOdW1iZXIpID09IHBhcnNlSW50KHByb2ZpbGVEYXRhLmxldmVsTnVtYmVyKSkge1xuICAgICAgICAgICAgZGF0YU5vdEV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBkYXRhLmxldmVsU2NvcmUgPCBwcm9maWxlRGF0YS5sZXZlbFNjb3JlXG4gICAgICAgICAgICAgICAgPyAoZGF0YS5sZXZlbFNjb3JlID0gcHJvZmlsZURhdGEubGV2ZWxTY29yZSlcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBkYXRhLmxldmVsU3RhciA8IHByb2ZpbGVEYXRhLmxldmVsU3RhclxuICAgICAgICAgICAgICAgID8gKGRhdGEubGV2ZWxTdGFyID0gcHJvZmlsZURhdGEubGV2ZWxTdGFyKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRhdGFOb3RFeGlzdCA/IGpzb25EYXRhLnB1c2gocHJvZmlsZURhdGEpIDogbnVsbDtcbiAgICByZXR1cm4ganNvbkRhdGE7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YWZyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxhbmcgKyBcIlByb2ZpbGVcIikgfHwgXCJ7fVwiKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsImV4cG9ydCBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q2w2Q2NxdUc0Rmx3UFV0Zm1UWTE2LVI1Y3p4T25UdFBFXCIsXG4gICAgYXV0aERvbWFpbjogXCJmZWVkdGhlbW9uc3RlcmpzLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJmZWVkdGhlbW9uc3RlcmpzXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJmZWVkdGhlbW9uc3RlcmpzLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjkwMDEyNjgyMDFcIixcbiAgICBhcHBJZDogXCIxOjY5MDAxMjY4MjAxOndlYjoyYmZlNGQ1Mzk1ZDE2MDI2NjJkOTc4XCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLU42VlFFNUdXUUhcIlxufTtcbiIsImltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG5pbXBvcnQgeyBHYW1lRW5kTGF5ZXIsIGxvYWRJbWFnZXMgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xudmFyIGltYWdlcyA9IHtcbiAgICBiZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiLFxuICAgIGhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2hpbGxfdjAxLnBuZ1wiLFxuICAgIHRpbWVyX2VtcHR5OiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lcl9lbXB0eS5wbmdcIixcbiAgICBwaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1RvdGVtX3YwMl92MDEucG5nXCIsXG4gICAgZ3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiLFxuICAgIGZlbmNoSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9mZW5jZV92MDEucG5nXCIsXG4gICAgYmlnTW9uc3RlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvZnRtX2JvbnVzX2xldmVsX21vbnN0ZXJzLnBuZ1wiXG59O1xudmFyIHNlbGY7XG5leHBvcnQgY2xhc3MgR2FtZUVuZFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgR2FtZUVuZExheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY3JpcHRpb24tdGV4dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NyaXB0aW9uLXRleHRcIikuaW5uZXJIVE1MID0gZ2xvYmFsVGhpcy5kZXNjcmlwdGlvblRleHQ7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2dyb3VkKCk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjcmlwdGlvbi10ZXh0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICAgICAgLy9kZWxldGUgdGhpcztcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICB9XG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIGxvYWRJbWFnZXMoaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnBpbGxlckltZywgd2lkdGggKiAwLjYsIGhlaWdodCAvIDYsIHdpZHRoLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmZlbmNoSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDMsIHdpZHRoLCBoZWlnaHQgLyAzKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5iaWdNb25zdGVySW1nLCB3aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgLSBoZWlnaHQgKiAwLjI1LCB3aWR0aCAvIDEuNywgaGVpZ2h0IC8gMi41KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxTdGFydFNjZW5lIH0gZnJvbSBcIi4vbGV2ZWwtc3RhcnQtc2NlbmUuanNcIjtcbnZhciBhbmltYXRpb25GcmFtZTtcbnZhciBzZWxmO1xuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHB1enpsZURhdGEsIGdhbWVTY2VuZUNhbGxCYWNrKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyID1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyKSB8fCAxO1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IExldmVsU3RhcnRTY2VuZSh7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLFxuICAgICAgICAgICAgbGV2ZWxEYXRhOiBwdXp6bGVEYXRhLFxuICAgICAgICAgICAgbGV2ZWxTdGFydENhbGxCYWNrOiB0aGlzLmxldmVsU3RhcnRDYWxsQmFjayxcbiAgICAgICAgICAgIG1vbnN0ZXJQaGFzZU51bWJlcjogdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVTY2VuZUNhbGxCYWNrID0gZ2FtZVNjZW5lQ2FsbEJhY2s7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbigpO1xuICAgIH1cbiAgICBsZXZlbFN0YXJ0Q2FsbEJhY2soYnV0dG9uX25hbWUpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uX25hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2soYnV0dG9uX25hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIm5leHRfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJyZXRyeV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2soYnV0dG9uX25hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgc2VsZi5zY2VuZSA/IChzZWxmLnNjZW5lLnN0b25lcyA/IHNlbGYuc2NlbmUuc3RvbmVzLnVwZGF0ZSgpIDogbnVsbCkgOiBudWxsO1xuICAgICAgICBzZWxmLnNjZW5lID8gc2VsZi5zY2VuZS51cGRhdGUoKSA6IG51bGw7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB0aGlzLnNjZW5lLmNyZWF0ZUJhY2tncm91ZCgpO1xuICAgIH1cbiAgICBhbmltYXRpb24oKSB7XG4gICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNlbGYuYW5pbWF0aW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbnRyb011c2ljLCBMZXZlbEVuZEF1ZGlvLCBMZXZlbEVuZEJ1dHRvbnNMYXllciwgTGV2ZWxFbmRMYXllciwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzXCI7XG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL25leHRfYnV0dG9uLmpzXCI7XG5pbXBvcnQgUmV0cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9yZXRyeV9idXR0b24uanNcIjtcbmltcG9ydCB7IFByb2ZpbGVEYXRhLCBzZXREYXRhVG9TdG9yYWdlIH0gZnJvbSBcIi4uL2RhdGEvcHJvZmlsZS1kYXRhLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xudmFyIGF1ZGlvVXJsID0ge1xuICAgIGxldmVsV2luOiBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbFdpbkZhbmZhcmUubXAzXCIsXG4gICAgbGV2ZWxMb3NlOiBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbExvc2VGYW5mYXJlLm1wM1wiLFxuICAgIGludHJvOiBcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIixcbn07XG5leHBvcnQgY2xhc3MgTGV2ZWxFbmRTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBzY29yZSwgbW9uc3RlciwgbGV2ZWxFbmRDYWxsQmFjaywgbGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgbW9uc3RlclBoYXNlTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLm1vbnN0ZXIgPSBtb25zdGVyO1xuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IGxldmVsRGF0YTtcbiAgICAgICAgdGhpcy5pc0dhbWVQYXVzZSA9IGlzR2FtZVBhdXNlO1xuICAgICAgICB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciA9IG1vbnN0ZXJQaGFzZU51bWJlciB8fCAxO1xuICAgICAgICB0aGlzLnN0YXJDb3VudCA9XG4gICAgICAgICAgICBzY29yZSA9PSAyMDBcbiAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICA6IHNjb3JlID09IDMwMFxuICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgOiBzY29yZSA9PSA0MDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzY29yZSA9PSA1MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxOdW1iZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzY29yZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIHRoaXMubGV2ZWxFbmRDYWxsQmFjayA9IGxldmVsRW5kQ2FsbEJhY2s7XG4gICAgICAgIHNldERhdGFUb1N0b3JhZ2UobmV3IFByb2ZpbGVEYXRhKGxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxUeXBlLCBsZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyLCBzY29yZSwgdGhpcy5zdGFyQ291bnQpKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ud2F2XCIsIEludHJvTXVzaWMpO1xuICAgICAgICBpZiAodGhpcy5zdGFyQ291bnQgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc2NlbmUuYXVkaW8ucGxheVNvdW5kKGF1ZGlvVXJsLmxldmVsTG9zZSwgTGV2ZWxFbmRBdWRpbyk7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvc2FkMVwiICsgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaGFwcHkxXCIgKyB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNjZW5lLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5sZXZlbFdpbiwgTGV2ZWxFbmRBdWRpbyk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ud2F2XCIsIEludHJvTXVzaWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VaaW5kZXgoOSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgTGV2ZWxFbmRMYXllcik7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuekluZGV4ID0gXCI4XCI7XG4gICAgICAgIHRoaXMuYm90dG9uTGF5ZXIgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIExldmVsRW5kQnV0dG9uc0xheWVyKTtcbiAgICAgICAgdGhpcy5ib3R0b25Db250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3R0b25MYXllcikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJvdHRvbkxheWVyKS5zdHlsZS56SW5kZXggPVxuICAgICAgICAgICAgXCI5XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICBcIiMwMDQwN0JcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKCcuL2Fzc2V0cy9pbWFnZXMvV0lOX3NjcmVlbl9iZy5wbmcnKVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9XG4gICAgICAgICAgICBcImNvbnRhaW5cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgICAgIFwiY2VudGVyXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJmaXhlZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID1cbiAgICAgICAgICAgIFwibm8tcmVwZWF0XCI7XG4gICAgICAgIHZhciBzdGFyMSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzdGFyMS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9waW5TdGFyMS5wbmdcIjtcbiAgICAgICAgdmFyIHN0YXIyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN0YXIyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIyLnBuZ1wiO1xuICAgICAgICB2YXIgc3RhcjMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3RhcjMuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGluU3RhcjMucG5nXCI7XG4gICAgICAgIHNlbGYuZHJhd1N0YXJ0cyhzZWxmLCBzdGFyMSwgc3RhcjIsIHN0YXIzKTtcbiAgICAgICAgc2VsZi5uZXh0QnV0dG9uID1cbiAgICAgICAgICAgIHNlbGYuc3RhckNvdW50ID49IDJcbiAgICAgICAgICAgICAgICA/IG5ldyBOZXh0QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC44IC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjcpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBzZWxmLnJldHJ5QnV0dG9uID0gbmV3IFJldHJ5QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuc3RhckNvdW50ID49IDJcbiAgICAgICAgICAgID8gc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDJcbiAgICAgICAgICAgIDogc2VsZi5jYW52YXMud2lkdGggKiAwLjggLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuNyk7XG4gICAgICAgIHNlbGYuY2xvc2VCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuNyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYm90dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5ib3R0b25MYXllcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAoc2VsZi5uZXh0QnV0dG9uICYmIHNlbGYubmV4dEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcIm5leHRfYnV0dG9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYucmV0cnlCdXR0b24ub25DbGljayh4LCB5KSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcImNsb3NlX2J1dHRvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTdGFydHMoc2VsZiwgc3RhcjEsIHN0YXIyLCBzdGFyMykge1xuICAgICAgICBzdGFyMS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuc3RhckNvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN0YXIyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5zdGFyQ291bnQgPD0gMyAmJiBzZWxmLnN0YXJDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMTUsIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc3RhcjMub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXJDb3VudCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2Uoc3RhcjMsIHNlbGYuY2FudmFzLndpZHRoICogMC44MiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcyhzZWxmKSB7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5ib3R0b25MYXllcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IExldmVsQ29uZmlnIH0gZnJvbSBcIi4uL2NvbW1vbi9sZXZlbC1jb25maWcuanNcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgeyBCdXR0b25DbGljaywgSW50cm9NdXNpYywgTGV2ZWxTZWxlY3Rpb25MYXllciwgUHJldmlvdXNQbGF5ZWRMZXZlbCwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9jb21tb24vc291bmQuanNcIjtcbmltcG9ydCB7IGdldERhdGFmcm9tU3RvcmFnZSB9IGZyb20gXCIuLi9kYXRhL3Byb2ZpbGUtZGF0YS5qc1wiO1xudmFyIG1hcEljb24gPSBuZXcgSW1hZ2UoKTtcbm1hcEljb24uc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwSWNvbi5wbmdcIjtcbnZhciBtYXBMb2NrID0gbmV3IEltYWdlKCk7XG5tYXBMb2NrLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcExvY2sucG5nXCI7XG52YXIgbWFwID0gbmV3IEltYWdlKCk7XG5tYXAuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwLmpwZ1wiO1xudmFyIHN0YXIgPSBuZXcgSW1hZ2UoKTtcbnN0YXIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc3Rhci5wbmdcIjtcbnZhciBuZXh0YnRuID0gbmV3IEltYWdlKCk7XG5uZXh0YnRuLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25leHRfYnRuLnBuZ1wiO1xudmFyIGJhY2tidG4gPSBuZXcgSW1hZ2UoKTtcbmJhY2tidG4uc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja19idG4ucG5nXCI7XG52YXIgbGV2ZWxOdW1iZXI7XG52YXIgc2VsZjtcbnZhciB1bmxvY2tMZXZlbEluZGV4ID0gLTE7XG52YXIgcHJldmlvdXNQbGF5ZWRMZXZlbCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFByZXZpb3VzUGxheWVkTGV2ZWwpKSB8IDA7XG52YXIgbGV2ZWw7XG5pZiAocHJldmlvdXNQbGF5ZWRMZXZlbCAhPSBudWxsKSB7XG4gICAgbGV2ZWwgPSAxMCAqIE1hdGguZmxvb3IocHJldmlvdXNQbGF5ZWRMZXZlbCAvIDEwKTtcbn1cbmV4cG9ydCBjbGFzcyBMZXZlbFNlbGVjdGlvblNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmxldmVscyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsc1NlY3Rpb25Db3VudCA9XG4gICAgICAgICAgICBzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCAvIDEwID4gTWF0aC5mbG9vcihzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCAvIDEwKVxuICAgICAgICAgICAgICAgID8gTWF0aC5mbG9vcihzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCAvIDEwKSArIDFcbiAgICAgICAgICAgICAgICA6IE1hdGguZmxvb3Ioc2VsZi5kYXRhLmxldmVscy5sZW5ndGggLyAxMCk7XG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgU291bmQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5kcmF3U3RhcnMoKTtcbiAgICB9XG4gICAgZ2FtZVNjZW5lQ2FsbEJhY2soYnV0dG9uX25hbWUpIHtcbiAgICAgICAgc3dpdGNoIChidXR0b25fbmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5leHRfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0R2FtZSgobGV2ZWxOdW1iZXIgKz0gMSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInJldHJ5X2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUobGV2ZWxOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNsb3NlX2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgc2VsZi5zb3VuZC5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ud2F2XCIsIEludHJvTXVzaWMpO1xuICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIiwgSW50cm9NdXNpYyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuc291bmQuYWN0aXZlU2NyZWVuKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIExldmVsU2VsZWN0aW9uTGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgICAgdGhpcy5zdGFyc0lkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgTGV2ZWxTZWxlY3Rpb25MYXllciArIDEpO1xuICAgICAgICB0aGlzLnN0YXJzQ2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZCk7XG4gICAgICAgIHRoaXMuc3RhcnNDb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5zdGFyc0NhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCIzXCI7XG4gICAgICAgIHRoaXMubGV2ZWxCdXR0b25wb3MgPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMTAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEwXSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEwXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMyArIHRoaXMuY2FudmFzLndpZHRoIC8gMi44LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzXSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDNdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzICsgdGhpcy5jYW52YXMud2lkdGggLyAyLjgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDMsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS44XSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDIuOCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS44LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjNdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgXTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICB2YXIgeERvd24gPSBudWxsO1xuICAgICAgICB2YXIgeURvd24gPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBnZXRUb3VjaGVzKGV2dCkge1xuICAgICAgICAgICAgcmV0dXJuIChldnQudG91Y2hlcyB8fCAvLyBicm93c2VyIEFQSVxuICAgICAgICAgICAgICAgIGV2dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMpOyAvLyBqUXVlcnlcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2dCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RUb3VjaCA9IGdldFRvdWNoZXMoZXZ0KVswXTtcbiAgICAgICAgICAgIHhEb3duID0gZmlyc3RUb3VjaC5jbGllbnRYO1xuICAgICAgICAgICAgeURvd24gPSBmaXJzdFRvdWNoLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2dCkge1xuICAgICAgICAgICAgaWYgKCF4RG93biB8fCAheURvd24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgeFVwID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHZhciB5VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgdmFyIHhEaWZmID0geERvd24gLSB4VXA7XG4gICAgICAgICAgICB2YXIgeURpZmYgPSB5RG93biAtIHlVcDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGlmZikgPiBNYXRoLmFicyh5RGlmZikpIHtcbiAgICAgICAgICAgICAgICAvKm1vc3Qgc2lnbmlmaWNhbnQqL1xuICAgICAgICAgICAgICAgIGlmICh4RGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgKyAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvKiByaWdodCBzd2lwZSAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIGxlZnQgc3dpcGUgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoeURpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGRvd24gc3dpcGUgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIHVwIHN3aXBlICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogcmVzZXQgdmFsdWVzICovXG4gICAgICAgICAgICB4RG93biA9IG51bGw7XG4gICAgICAgICAgICB5RG93biA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGFyc0lkKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAoeCA+PSBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNyAmJlxuICAgICAgICAgICAgICAgIHggPCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNyArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwICYmXG4gICAgICAgICAgICAgICAgeSA+IHNlbGYuY2FudmFzLmhlaWdodCAvIDEuMyAmJlxuICAgICAgICAgICAgICAgIHkgPCBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgKyBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMCkge1xuICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSBzZWxmLmxldmVsc1NlY3Rpb25Db3VudCAqIDEwIC0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IGxldmVsICsgMTA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHggPj0gc2VsZi5jYW52YXMud2lkdGggLyAxMCAmJlxuICAgICAgICAgICAgICAgIHggPCBzZWxmLmNhbnZhcy53aWR0aCAvIDEwICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTAgJiZcbiAgICAgICAgICAgICAgICB5ID4gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICYmXG4gICAgICAgICAgICAgICAgeSA8IHNlbGYuY2FudmFzLmhlaWdodCAvIDEuMyArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbCAtIDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xuICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54IC0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMjApICpcbiAgICAgICAgICAgICAgICAgICAgKHggLSBzLnggLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkgK1xuICAgICAgICAgICAgICAgICAgICAoeSAtIHMueSAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAoeSAtIHMueSAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSkgPCA0NSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5pbmRleCArIGxldmVsIC0gMSA8PSB1bmxvY2tMZXZlbEluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zb3VuZC5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvQnV0dG9uQ2xpY2sud2F2XCIsIEJ1dHRvbkNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxOdW1iZXIgPSBzLmluZGV4ICsgbGV2ZWwgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUobGV2ZWxOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGV2ZWxCdXR0b25zKHRoaXMubGV2ZWxCdXR0b25wb3MpO1xuICAgIH1cbiAgICBjcmVhdGVMZXZlbEJ1dHRvbnMobGV2ZWxCdXR0b25wb3MpIHtcbiAgICAgICAgdmFyIHBvc3MgPSBsZXZlbEJ1dHRvbnBvc1swXTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IDEwOyBzKyspIHtcbiAgICAgICAgICAgIHZhciBucyA9IG5ldyBMZXZlbENvbmZpZyhwb3NzW2ldWzBdLCBwb3NzW2ldWzFdLCBpICsgMSk7XG4gICAgICAgICAgICBzZWxmLmxldmVscy5wdXNoKG5zKTtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcobGV2ZWwpO1xuICAgICAgICB0aGlzLmRvd25CdXR0b24obGV2ZWwpO1xuICAgIH1cbiAgICBkcmF3KGxldmVsKSB7XG4gICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2xldmVsKHMsIHNlbGYuY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb3duQnV0dG9uKGxldmVsKSB7XG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMDtcbiAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShuZXh0YnRuLCB0aGlzLmNhbnZhcy53aWR0aCAqIDAuNywgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoYmFja2J0biwgdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDMwMCwgNTAwLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIC8vICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQucm90YXRlKDkwKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG5leHQsIDMwMCwgNTAwLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZHJhd2xldmVsKHMsIGNhbnZhcykge1xuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XG4gICAgICAgIHZhciB0ZXh0Rm9udFNpemUgPSBpbWFnZVNpemUgLyA2O1xuICAgICAgICBpZiAocy5pbmRleCArIGxldmVsIDw9IHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG1hcEljb24sIHMueCwgcy55LCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChzLmluZGV4ICsgbGV2ZWwsIHMueCArIGltYWdlU2l6ZSAvIDMuNSwgcy55ICsgaW1hZ2VTaXplIC8gMyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRleHRGb250U2l6ZSAtIGltYWdlU2l6ZSAvIDMwICsgXCJweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRoaXMuZGF0YS5sZXZlbHNbcy5pbmRleCArIGxldmVsIC0gMV0ubGV2ZWxNZXRhLmxldmVsVHlwZSwgcy54ICsgaW1hZ2VTaXplIC8gMy41LCBzLnkgKyBpbWFnZVNpemUgLyAxLjMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0R2FtZShsZXZlbF9udW1iZXIpIHtcbiAgICAgICAgdGhpcy5zb3VuZC5wYXVzZVNvdW5kKCk7XG4gICAgICAgIG5ldyBHYW1lKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIHNlbGYuZGF0YS5sZXZlbHNbbGV2ZWxfbnVtYmVyXSwgc2VsZi5nYW1lU2NlbmVDYWxsQmFjayk7XG4gICAgfVxuICAgIGRyYXdTdGFycygpIHtcbiAgICAgICAgbGV0IGdhbWVMZXZlbERhdGEgPSBnZXREYXRhZnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgICB2YXIgY2FuYXZzRWxlbWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldmVsU2VsZWN0aW9uQ2FudmFzMVwiKSk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBpZiAoZ2FtZUxldmVsRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZUxldmVsRGF0YS5sZW5ndGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiBnYW1lTGV2ZWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1bmxvY2tMZXZlbEluZGV4IDwgcGFyc2VJbnQoZ2FtZS5sZXZlbE51bWJlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUubGV2ZWxTdGFyID49IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICh1bmxvY2tMZXZlbEluZGV4ID0gcGFyc2VJbnQoZ2FtZS5sZXZlbE51bWJlcikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBzZWxmLmxldmVscykge1xuICAgICAgICAgICAgICAgIGlmIChzLmluZGV4ICsgbGV2ZWwgPD0gc2VsZi5kYXRhLmxldmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5pbmRleCArIGxldmVsIC0gMSA+IHVubG9ja0xldmVsSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvbnRleHQuZHJhd0ltYWdlKG1hcExvY2ssIHMueCwgcy55LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMywgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTMpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxldmVsRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuaW5kZXggLSAxICsgbGV2ZWwgPT0gcGFyc2VJbnQoZ2FtZUxldmVsRGF0YVtpXS5sZXZlbE51bWJlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTdGFyKHMsIGNhbnZhcywgZ2FtZUxldmVsRGF0YVtpXS5sZXZlbFN0YXIsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdTdGFyKHMsIGNhbnZhcywgc3RhckNvdW50LCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBjYW52YXMuaGVpZ2h0IC8gNTtcbiAgICAgICAgaWYgKHN0YXJDb3VudCA+PSAxKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzdGFyLCBzLngsIHMueSAtIGltYWdlU2l6ZSAqIDAuMDEsIGltYWdlU2l6ZSAvIDUsIGltYWdlU2l6ZSAvIDUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFyQ291bnQgPiAxKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzdGFyLCBzLnggKyBpbWFnZVNpemUgLyAyLjUsIHMueSAtIGltYWdlU2l6ZSAqIDAuMDEsIGltYWdlU2l6ZSAvIDUsIGltYWdlU2l6ZSAvIDUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFyQ291bnQgPT0gMykge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54ICsgaW1hZ2VTaXplIC8gNSwgcy55IC0gaW1hZ2VTaXplICogMC4xLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgTW9uc3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vbnN0ZXIuanNcIjtcbmltcG9ydCB7IFRpbWVyVGlja2luZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3RpbWVyLXRpY2tpbmcuanNcIjtcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG5pbXBvcnQgU3RvbmVzTGF5ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RvbmVzLWxheWVyLmpzXCI7XG5pbXBvcnQgeyBQcm9tcHRUZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvbXB0LXRleHQuanNcIjtcbmltcG9ydCBQYXVzZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL3BhdXNlX2J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxJbmRpY2F0b3JzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGV2ZWwtaW5kaWNhdG9ycy5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxFbmRCdXR0b25zTGF5ZXIsIExldmVsRW5kTGF5ZXIsIGxvYWRJbWFnZXMsIGxvYWRpbmdTY3JlZW4sIFN0b25lTGF5ZXIsIFRpbWV0aWNrZXJMYXllciwgUHJvbXB0VGV4dExheWVyLCBQcmV2aW91c1BsYXllZExldmVsLCBTdG9yZU1vbnN0ZXJQaGFzZU51bWJlciwgQnV0dG9uQ2xpY2ssIEZlZWRiYWNrQXVkaW8sIFBocmFzZUF1ZGlvLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBMZXZlbFN0YXJ0TGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgR2FtZUVuZFNjZW5lIH0gZnJvbSBcIi4vZ2FtZS1lbmQtc2NlbmUuanNcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY29tbW9uL3NvdW5kLmpzXCI7XG5pbXBvcnQgeyBMZXZlbEVuZFNjZW5lIH0gZnJvbSBcIi4vbGV2ZWwtZW5kLXNjZW5lLmpzXCI7XG5pbXBvcnQgeyBnZXREYXRhZnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi4vZGF0YS9wcm9maWxlLWRhdGEuanNcIjtcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xudmFyIGltYWdlcyA9IHtcbiAgICBiZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiLFxuICAgIGhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2hpbGxfdjAxLnBuZ1wiLFxuICAgIHRpbWVyX2VtcHR5OiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lcl9lbXB0eS5wbmdcIixcbiAgICBwaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1RvdGVtX3YwMl92MDEucG5nXCIsXG4gICAgZ3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiLFxuICAgIHJvdGF0aW5nX2Nsb2NrOiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lci5wbmdcIixcbiAgICBmZW5jaEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvZmVuY2VfdjAxLnBuZ1wiLFxuICAgIHByb21wdEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvcHJvbXB0VGV4dEJnLnBuZ1wiLFxuICAgIGZhbnRhc3RpYzogXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2ZhbnRhc3RpY18wMS5wbmdcIixcbiAgICBncmVhdDogXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2dyZWF0XzAxLnBuZ1wiLFxuICAgIGF1dHVtbkJnSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fYmdfdjAxLmpwZ1wiLFxuICAgIGF1dHVtbkhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9oaWxsX3YwMS5wbmdcIixcbiAgICBhdXR1bW5TaWduSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fc2lnbl92MDEucG5nXCIsXG4gICAgYXV0dW1uR3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9GR192MDEucG5nXCIsXG4gICAgYXV0dW1uRmVuY2VJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9mZW5jZV92MDEucG5nXCIsXG4gICAgYXV0dW1uUGlsbGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fc2lnbl92MDEucG5nXCIsXG4gICAgd2ludGVyQmdJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9iZ18wMS5qcGdcIixcbiAgICB3aW50ZXJIaWxsSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfaGlsbF92MDEucG5nXCIsXG4gICAgd2ludGVyU2lnbkltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX3NpZ25fdjAxLnBuZ1wiLFxuICAgIHdpbnRlckdyYXNzSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfRkdfdjAxLnBuZ1wiLFxuICAgIHdpbnRlckZlbmNlSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfZmVuY2VfdjAxLnBuZ1wiLFxuICAgIHdpbnRlclBpbGxlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX3NpZ25fdjAxLnBuZ1wiLFxufTtcbnZhciBhdWRpb1VybCA9IHtcbiAgICBwaHJhc2VBdWRpb3M6IFtcbiAgICAgICAgXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvYXVkaW9zL2ZhbnRhc3RpYy5XQVZcIixcbiAgICAgICAgLy8gXCIuL2Fzc2V0cy9hdWRpb3MvZ29vZCBqb2IuV0FWXCIsXG4gICAgICAgIFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2F1ZGlvcy9ncmVhdC53YXZcIixcbiAgICBdLFxuICAgIG1vbnN0ZXJTcGxpdDogXCIuL2Fzc2V0cy9hdWRpb3MvTW9uc3RlciBTcGl0cyB3cm9uZyBzdG9uZXMtMDEubXAzXCIsXG4gICAgbW9uc3RlckhhcHB5OiBcIi4vYXNzZXRzL2F1ZGlvcy9DaGVlcmluZy0wMi5tcDNcIixcbiAgICBtb25zdGVyU2FkOiBcIi4vYXNzZXRzL2F1ZGlvcy9EaXNhcG9pbnRlZC0wNS5tcDNcIixcbiAgICBidXR0b25DbGljazogXCIuL2Fzc2V0cy9hdWRpb3MvQnV0dG9uQ2xpY2sud2F2XCIsXG59O1xudmFyIHNlbGY7XG52YXIgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XG52YXIgY3VycmVudF9wdXp6bGVfaW5kZXggPSAwO1xudmFyIHNjb3JlID0gMDtcbnZhciB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcbnZhciBpc0dhbWVQYXVzZSA9IGZhbHNlO1xudmFyIG5vTW9yZVRhcmdldCA9IGZhbHNlO1xudmFyIGlzTGV2ZWxFbmRlZCA9IGZhbHNlO1xuZXhwb3J0IGNsYXNzIExldmVsU3RhcnRTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCBsZXZlbERhdGEsIGxldmVsU3RhcnRDYWxsQmFjaywgbW9uc3RlclBoYXNlTnVtYmVyLCB9KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5tb25zdGVyID0gbmV3IE1vbnN0ZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMuYXVkaW8gPSBuZXcgU291bmQoKTtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgPSBtb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBsZXZlbERhdGE7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydENhbGxCYWNrID0gbGV2ZWxTdGFydENhbGxCYWNrO1xuICAgICAgICB0aGlzLnRpbWVyVGlja2luZyA9IG5ldyBUaW1lclRpY2tpbmcoZ2FtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMucHJvbXB0VGV4dCA9IG5ldyBQcm9tcHRUZXh0KGdhbWUsIHRoaXMsIGxldmVsRGF0YS5wdXp6bGVzW2N1cnJlbnRfcHV6emxlX2luZGV4XSwgbGV2ZWxEYXRhKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5zdG9uZXMgPSBuZXcgU3RvbmVzTGF5ZXIoZ2FtZSwgbGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLCB0aGlzLnBhdXNlQnV0dG9uLCB0aGlzLnJlZHJhd09mU3RvbmVzLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wdXp6bGVEYXRhID0gbGV2ZWxEYXRhLnB1enpsZXM7XG4gICAgfVxuICAgIGxldmVsRW5kQ2FsbEJhY2soYnV0dG9uX25hbWUpIHtcbiAgICAgICAgaWYgKCFpc0dhbWVQYXVzZSkge1xuICAgICAgICAgICAgaXNHYW1lUGF1c2UgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzTGV2ZWxFbmRlZCkge1xuICAgICAgICAgICAgICAgIGlzTGV2ZWxFbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudF9wdXp6bGVfaW5kZXggPT0gc2VsZi5wdXp6bGVEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChub01vcmVUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sZXZlbEVuZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc0dhbWVQYXVzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChub01vcmVUYXJnZXQgJiYgYnV0dG9uX25hbWUgIT0gXCJjbG9zZV9idXR0b25cIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RvbmVzLnNldE5ld1B1enpsZShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwuYnV0dG9uQ2xpY2ssIEJ1dHRvbkNsaWNrKTtcbiAgICAgICAgc3dpdGNoIChidXR0b25fbmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5leHRfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soYnV0dG9uX25hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInJldHJ5X2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgc2VsZi5leGl0QWxsU2NyZWVucygpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5leGl0QWxsU2NyZWVucygpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfVxuICAgIHJlZHJhd09mU3RvbmVzKHN0YXR1cywgZW1wdHlUYXJnZXQsIHBpY2tlZF9zdG9uZV9sZW5naHRoKSB7XG4gICAgICAgIG5vTW9yZVRhcmdldCA9IGVtcHR5VGFyZ2V0O1xuICAgICAgICB2YXIgZm50c3RpY09yR3J0SW5kZXggPSBzZWxmLmdldFJhbmRvbUludCgwLCAxKTtcbiAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvRWF0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBzZWxmLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5tb25zdGVySGFwcHksIFBocmFzZUF1ZGlvKTtcbiAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5waHJhc2VBdWRpb3NbZm50c3RpY09yR3J0SW5kZXhdLCBGZWVkYmFja0F1ZGlvKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNob3dGYW50YXN0aWNPckdyZWF0KGZudHN0aWNPckdydEluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCh3b3JkX2Ryb3BwZWRfc3RvbmVzICs9IHBpY2tlZF9zdG9uZV9sZW5naHRoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy8gc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gMSkpO1xuICAgICAgICAgICAgICAgIHNjb3JlICs9IDEwMDtcbiAgICAgICAgICAgICAgICB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3B1enpsZV9pbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gcGlja2VkX3N0b25lX2xlbmdodGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLnN0b3BUaW1lcigpO1xuICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvU3BpdEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlclNhZCwgUGhyYXNlQXVkaW8pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlclNwbGl0LCBQaHJhc2VBdWRpbyk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRfcHV6emxlX2luZGV4ID09IHNlbGYucHV6emxlRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGkgKiAxMzAwLjY2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGkgKiAxMzAwLjY2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV2ZWxFbmRlZCgpIHtcbiAgICAgICAgbGV0IHRvdGFsU3RhcnNDb3VudCA9IDA7XG4gICAgICAgIGxldCBtb25zdGVyUGhhc2VOdW1iZXIgPSBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciB8fCAxO1xuICAgICAgICB2YXIgZ2FtZUxldmVsRGF0YSA9IGdldERhdGFmcm9tU3RvcmFnZSgpO1xuICAgICAgICBpZiAoZ2FtZUxldmVsRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVMZXZlbERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0b3RhbFN0YXJzQ291bnQgPSB0b3RhbFN0YXJzQ291bnQgKyBnYW1lTGV2ZWxEYXRhW2ldLmxldmVsU3RhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vbnN0ZXJQaGFzZU51bWJlciA9IE1hdGguZmxvb3IodG90YWxTdGFyc0NvdW50IC8gMTIpICsgMSB8fCAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG90YWxTdGFyc0NvdW50ICsgXCJ0b3RhbCBzdGFyIGNvdW50XCIpO1xuICAgICAgICAgICAgaWYgKHNlbGYubW9uc3RlclBoYXNlTnVtYmVyIDwgbW9uc3RlclBoYXNlTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vbnN0ZXJQaGFzZU51bWJlciA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9uc3RlclBoYXNlTnVtYmVyID0gbW9uc3RlclBoYXNlTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgZGF0YVwiICsgbW9uc3RlclBoYXNlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIsIG1vbnN0ZXJQaGFzZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VQaGFzZU51bWJlcihtb25zdGVyUGhhc2VOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIHNlbGYubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgPSA0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYubW9uc3RlclBoYXNlTnVtYmVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vbnN0ZXJQaGFzZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soKTtcbiAgICAgICAgaWYgKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyID09IDE0OSkge1xuICAgICAgICAgICAgc2VsZi5leGl0QWxsU2NyZWVucygpO1xuICAgICAgICAgICAgbmV3IEdhbWVFbmRTY2VuZShzZWxmLmdhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3IExldmVsRW5kU2NlbmUoc2VsZi5nYW1lLCBzY29yZSwgc2VsZi5tb25zdGVyLCBzZWxmLmxldmVsRW5kQ2FsbEJhY2ssIHNlbGYubGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNMZXZlbEVuZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB2YXIgbW9uc3RlclBoYXNlTnVtYmVyID0gdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcbiAgICAgICAgY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcbiAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2lkbGUxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHNlbGYuZGVsZXRlT2JqZWN0cygpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBMZXZlbFN0YXJ0TGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDM7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24gPSBuZXcgUGF1c2VCdXR0b24odGhpcy5jb250ZXh0LCB0aGlzLmNhbmF2c0VsZW1lbnQpO1xuICAgICAgICB0aGlzLmxldmVsSW5kaWNhdG9ycyA9IG5ldyBMZXZlbEluZGljYXRvcnModGhpcy5jb250ZXh0LCB0aGlzLmNhbmF2c0VsZW1lbnQsIDApO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCk7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHByZXZpb3VzUGxheWVkTGV2ZWwgPSBzZWxmLmxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxOdW1iZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFByZXZpb3VzUGxheWVkTGV2ZWwsIHByZXZpb3VzUGxheWVkTGV2ZWwpO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIGV4aXRBbGxTY3JlZW5zKCkge1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKExldmVsRW5kTGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKExldmVsRW5kQnV0dG9uc0xheWVyKTtcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihMZXZlbFN0YXJ0TGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFN0b25lTGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFRpbWV0aWNrZXJMYXllcik7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoUHJvbXB0VGV4dExheWVyKTtcbiAgICAgICAgLy8gc2VsZi5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2lkbGU0LnBuZ1wiKTtcbiAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2lkbGUxXCIgKyBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcbiAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICBzZWxmLmRlbGV0ZU9iamVjdHMoKTtcbiAgICAgICAgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XG4gICAgfVxuICAgIGRlbGV0ZU9iamVjdHMoKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XG4gICAgICAgIGRlbGV0ZSBzZWxmLmF1ZGlvO1xuICAgICAgICBkZWxldGUgc2VsZi5sZXZlbEluZGljYXRvcnM7XG4gICAgICAgIGRlbGV0ZSBzZWxmLnBhdXNlQnV0dG9uO1xuICAgICAgICBkZWxldGUgc2VsZi5zdG9uZXM7XG4gICAgICAgIGRlbGV0ZSBzZWxmLnRpbWVyVGlja2luZztcbiAgICAgICAgZGVsZXRlIHNlbGYuY2FudmFzU3RhY2s7XG4gICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XG4gICAgICAgIGRlbGV0ZSBzZWxmLnByb21wdFRleHQ7XG4gICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmJnSW1nLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5waWxsZXJJbWcsIHRoaXMud2lkdGggKiAwLjYsIHRoaXMuaGVpZ2h0IC8gNiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmZlbmNoSW1nLCAtdGhpcy53aWR0aCAqIDAuNCwgdGhpcy5oZWlnaHQgLyAzLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDMpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaGlsbEltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5ncmFzc0ltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIgKyAodGhpcy5oZWlnaHQgLyAyKSAqIDAuMSwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnRpbWVyX2VtcHR5LCAwLCB0aGlzLmhlaWdodCAqIDAuMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAwLjA1KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnJvdGF0aW5nX2Nsb2NrLCA1LCB0aGlzLmhlaWdodCAqIDAuMDksIHRoaXMud2lkdGggKiAwLjEyLCB0aGlzLmhlaWdodCAqIDAuMDYpO1xuICAgICAgICB0aGlzLnRpbWVyVGlja2luZy5jcmVhdGVCYWNrZ3JvdWQoKTtcbiAgICAgICAgdGhpcy5zdG9uZXMuZHJhdygpO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmRyYXcoKTtcbiAgICAgICAgdGhpcy5sZXZlbEluZGljYXRvcnMuZHJhdygpO1xuICAgICAgICB0aGlzLnByb21wdFRleHQuY3JlYXRlQmFja2dyb3VuZCgpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHNlbGYudGltZXJUaWNraW5nID8gc2VsZi50aW1lclRpY2tpbmcudXBkYXRlKCkgOiBudWxsO1xuICAgIH1cbiAgICBjaGFuZ2VQdXp6bGUoKSB7XG4gICAgICAgIGlmIChzZWxmLnRpbWVyVGlja2luZy5pc1RpbWVyRW5kZWQpIHtcbiAgICAgICAgICAgIHNlbGYuc3RvbmVzLmlzVGltZXJFbmRlZCgpO1xuICAgICAgICAgICAgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XG4gICAgICAgICAgICBjdXJyZW50X3B1enpsZV9pbmRleCArPSAxO1xuICAgICAgICAgICAgc2VsZi5zdG9uZXMuY2FudmFzLnNjZW5lLmxldmVsSW5kaWNhdG9ycy5zZXRJbmRpY2F0b3JzKGN1cnJlbnRfcHV6emxlX2luZGV4KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50X3B1enpsZV9pbmRleCA9PSBzZWxmLnB1enpsZURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzTGV2ZWxFbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLnRpbWVyVGlja2luZztcbiAgICAgICAgICAgICAgICAgICAgbmV3IExldmVsRW5kU2NlbmUoc2VsZi5nYW1lLCBzY29yZSwgc2VsZi5tb25zdGVyLCBzZWxmLmxldmVsRW5kQ2FsbEJhY2ssIHNlbGYubGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHJvbXB0VGV4dChcbiAgICAgICAgICAgICAgICAvLyAgIHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0ucHJvbXB0LnByb21wdFRleHRcbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuZHJhdygpO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcgPyAoc2VsZi50aW1lclRpY2tpbmcuaXNUaW1lckVuZGVkID0gZmFsc2UpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVCYWNrZ3JvdWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlQmFja2dyb3VuZFR5cGVzID0gW1wiU3VtbWVyXCIsIFwiQXV0dW1uXCIsIFwiV2ludGVyXCJdO1xuICAgICAgICB2YXIgYmFja2dyb3VuZFR5cGUgPSBNYXRoLmZsb29yKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyIC8gMTApICVcbiAgICAgICAgICAgIGF2YWlsYWJsZUJhY2tncm91bmRUeXBlcy5sZW5ndGg7XG4gICAgICAgIGlmIChzZWxmLmxldmVsRGF0YS5sZXZlbE51bWJlciA+PSAzMCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZFR5cGUgPSBiYWNrZ3JvdW5kVHlwZSAlIDM7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ1NjcmVlbih0cnVlKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgbG9hZEltYWdlcyhpbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgc3dpdGNoIChhdmFpbGFibGVCYWNrZ3JvdW5kVHlwZXNbYmFja2dyb3VuZFR5cGVdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIldpbnRlclwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJCZ0ltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJQaWxsZXJJbWcsIHdpZHRoICogMC4zOCwgaGVpZ2h0IC8gNiwgd2lkdGggLyAxLjIsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVyRmVuY2VJbWcsIC13aWR0aCAqIDAuNCwgaGVpZ2h0IC8gNCwgd2lkdGgsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVySGlsbEltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVyR3Jhc3NJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgKyAoaGVpZ2h0IC8gMikgKiAwLjEsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXV0dW1uXCI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtblBpbGxlckltZywgd2lkdGggKiAwLjM4LCBoZWlnaHQgLyA2LCB3aWR0aCAvIDEuMiwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5GZW5jZUltZywgLXdpZHRoICogMC40LCBoZWlnaHQgLyA0LCB3aWR0aCwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5IaWxsSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5HcmFzc0ltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiArIChoZWlnaHQgLyAyKSAqIDAuMSwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnBpbGxlckltZywgd2lkdGggKiAwLjYsIGhlaWdodCAvIDYsIHdpZHRoLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmZlbmNoSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDMsIHdpZHRoLCBoZWlnaHQgLyAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS50aW1lcl9lbXB0eSwgMCwgaGVpZ2h0ICogMC4xLCB3aWR0aCwgaGVpZ2h0ICogMC4wNSk7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5yb3RhdGluZ19jbG9jaywgNSwgaGVpZ2h0ICogMC4wOSwgd2lkdGggKiAwLjEyLCBoZWlnaHQgKiAwLjA2KTtcbiAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLmNyZWF0ZUJhY2tncm91ZCgpO1xuICAgICAgICAgICAgc2VsZi5zdG9uZXMuZHJhdygpO1xuICAgICAgICAgICAgc2VsZi5wYXVzZUJ1dHRvbi5kcmF3KCk7XG4gICAgICAgICAgICBzZWxmLmxldmVsSW5kaWNhdG9ycy5kcmF3KCk7XG4gICAgICAgICAgICBzZWxmLnByb21wdFRleHQuY3JlYXRlQmFja2dyb3VuZCgpO1xuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbihmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQnV0dG9uQ2xpY2ssIEZpcmViYXNlVXNlckNsaWNrZWQsIFBsYXlCdXR0b25MYXllciwgUFdBSW5zdGFsbFN0YXR1cywgU3RhcnRTY2VuZUxheWVyLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4uL2NvbW1vbi9zb3VuZC5qc1wiO1xuaW1wb3J0IEluc3RhbGxCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9pbnN0YWxsX2J1dHRvbi5qc1wiO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9wbGF5X2J1dG9vbi5qc1wiO1xuaW1wb3J0IHsgTW9uc3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vbnN0ZXIuanNcIjtcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG5pbXBvcnQgeyBMZXZlbFNlbGVjdGlvblNjcmVlbiB9IGZyb20gXCIuL2xldmVsLXNlbGVjdGlvbi1zY2VuZS5qc1wiO1xuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XG52YXIgYmdJbWcgPSBuZXcgSW1hZ2UoKTtcbmJnSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2JnX3YwMS5qcGdcIjtcbnZhciBoaWxsSW1nID0gbmV3IEltYWdlKCk7XG5oaWxsSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2hpbGxfdjAxLnBuZ1wiO1xudmFyIHBpbGxlckltZyA9IG5ldyBJbWFnZSgpO1xucGlsbGVySW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL1RvdGVtX3YwMl92MDEucG5nXCI7XG52YXIgZ3Jhc3NJbWcgPSBuZXcgSW1hZ2UoKTtcbmdyYXNzSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiO1xudmFyIGZlbmNoSW1nID0gbmV3IEltYWdlKCk7XG5mZW5jaEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9mZW5jZV92MDEucG5nXCI7XG52YXIgdGl0bGUgPSBuZXcgSW1hZ2UoKTtcbnRpdGxlLnNyYyA9IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2ltYWdlcy90aXRsZS5wbmdcIjtcbnZhciBwcm9maWxlTW9uc3RlciA9IG5ldyBJbWFnZSgpO1xucHJvZmlsZU1vbnN0ZXIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTQucG5nXCI7XG52YXIgc2VsZjtcbmxldCBwd2FfaW5zdGFsbF9zdGF0dXM7XG5jb25zdCBhYm91dENvbXBhbnlFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtY29tcGFueVwiKSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWluc3RhbGxwcm9tcHRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHdhX2luc3RhbGxfc3RhdHVzID0gZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQV0FJbnN0YWxsU3RhdHVzLCBcImZhbHNlXCIpO1xufSk7XG5leHBvcnQgY2xhc3MgU3RhcnRTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBkYXRhLCBmaXJlYmFzZV9hbmFseXRpY3MpIHtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMubW9uc3RlciA9IG5ldyBNb25zdGVyKHRoaXMuY2FudmFzKTtcbiAgICAgICAgdGhpcy5wd2Ffc3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlUGxheUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmZpcmViYXNlX2FuYWx5dGljcyA9IGZpcmViYXNlX2FuYWx5dGljcztcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgU3RhcnRTY2VuZUxheWVyKTtcbiAgICAgICAgYWJvdXRDb21wYW55RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBhYm91dENvbXBhbnlFbGVtZW50LmlubmVySFRNTCA9IGdsb2JhbFRoaXMuYWJvdXRDb21wYW55O1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDI7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShiZ0ltZywgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHBpbGxlckltZywgdGhpcy53aWR0aCAqIDAuNiwgdGhpcy5oZWlnaHQgLyA2LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGZlbmNoSW1nLCAtdGhpcy53aWR0aCAqIDAuNCwgdGhpcy5oZWlnaHQgLyAzLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDMpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGhpbGxJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoICogMS41LCB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGdyYXNzSW1nLCAtdGhpcy53aWR0aCAqIDAuMjUsIHRoaXMuaGVpZ2h0IC8gMiArICh0aGlzLmhlaWdodCAvIDIpICogMC4xLCB0aGlzLndpZHRoICogMS41LCB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRpdGxlLCB0aGlzLndpZHRoICogMCwgdGhpcy5oZWlnaHQgLyA1MCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyA2KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nLXNjcmVlblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGNyZWF0ZVBsYXlCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHBsYXlCdXR0b25MYXllckVsZW1lbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUGxheUJ1dHRvbkxheWVyKSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBwbGF5QnV0dG9uSWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBQbGF5QnV0dG9uTGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbGF5QnV0dG9uSWQpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gNztcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgIHNlbGYucGxheUJ1dHRvbiA9IG5ldyBQbGF5QnV0dG9uKHNlbGYuYnV0dG9uQ29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC4zNSwgc2VsZi5jYW52YXMuaGVpZ2h0IC8gNyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnBsYXlCdXR0b24gPSBuZXcgSW5zdGFsbEJ1dHRvbihzZWxmLmJ1dHRvbkNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUsIHNlbGYuY2FudmFzLmhlaWdodCAvIDUpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFBsYXlCdXR0b25MYXllcikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuaWQpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnBsYXlCdXR0b24ub25DbGljayh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmViYXNlX2FuYWx5dGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChGaXJlYmFzZVVzZXJDbGlja2VkLCBcImNsaWNrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZicShcInRyYWNrQ3VzdG9tXCIsIEZpcmViYXNlVXNlckNsaWNrZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhYm91dENvbXBhbnlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNvdW5kKCkucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiLCBCdXR0b25DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBMZXZlbFNlbGVjdGlvblNjcmVlbihzZWxmLmNhbnZhcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoUGxheUJ1dHRvbkxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi5tb25zdGVyO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFN0YXJ0U2NlbmVMYXllcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLnB3YV9zdGF0dXMgPT0gXCJmYWxzZVwiIHx8ICFzZWxmLnB3YV9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwd2FfaW5zdGFsbF9zdGF0dXMucHJvbXB0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgeyBvdXRjb21lIH0gPSBhd2FpdCBwd2FfaW5zdGFsbF9zdGF0dXMudXNlckNob2ljZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAob3V0Y29tZSA9PT0gXCJhY2NlcHRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwd2FfaW5zdGFsbF9zdGF0dXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cywgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VySW5zdGFsbCwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJpbnN0YWxsX2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgID8gc2VsZi5maXJlYmFzZV9hbmFseXRpY3MubG9nRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICBGaXJlYmFzZVVzZXJJbnN0YWxsLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgXCJJbnN0YWxsXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgVXNlckNhbmNlbGxlZCwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJjYW5jZWxfY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5maXJlYmFzZV9hbmFseXRpY3NcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChVc2VyQ2FuY2VsbGVkLCBcIkNhbmNlbGxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICF3aW5kb3cubWF0Y2hNZWRpYShcIihkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpXCIpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYucHdhX3N0YXR1cyA9PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWxlcnQoXCJQV0EgaXMgaW5zdGFsbGVkIG9uIHlvdXIgZGV2aWNlIFxcblBsZWFzZSBwbGF5IGZyb20gdGhlcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmV3IFNvdW5kKCkuY2hhbmdlU291cnNlKFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzZWxmLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuZXcgTGV2ZWxTZWxlY3Rpb25TY3JlZW4oc2VsZi5jYW52YXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihQbGF5QnV0dG9uTGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoU3RhcnRTY2VuZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgQ2FudmFzU3RhY2s7XG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGNsYXNzIExheWVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoeyBjYW52YXNJRCwgY2FudmFzRWxlbWVudCwgfSkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGNhbnZhc0lEO1xuICAgICAgICAgICAgdGhpcy5jRWxlbSA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmRyYWdPYmplY3RzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU3RhY2sgPSBjbGFzcyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGN2c0lELCBzdGFja0xpbWl0KSB7XG4gICAgICAgICAgICBjb25zdCBzYXZUaGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY0lkID0gY3ZzSUQ7XG4gICAgICAgICAgICB0aGlzLnN0YWNrTGltaXQgPSBzdGFja0xpbWl0IHx8IDEyO1xuICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdnNJRCk7XG4gICAgICAgICAgICB0aGlzLnJhd1dpZHRoID0gdGhpcy5ia2dDYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLnJhd0hlaWdodCA9IHRoaXMuYmtnQ2FudmFzLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucyA9IFtdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJrZ0NhbnZhcy5oYXNPd25Qcm9wZXJ0eShcImxheWVyc1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVycyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBia2dMID0gbmV3IExheWVyKHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzSUQ6IHRoaXMuY0lkLFxuICAgICAgICAgICAgICAgICAgICBjYW52YXNFbGVtZW50OiB0aGlzLmJrZ0NhbnZhcyxcbiAgICAgICAgICAgICAgICB9KTsgLy8gYmtnQ2FudmFzIGlzIGFsd2F5cyBsYXllclswXVxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVyc1swXSA9IGJrZ0w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwidW5pcXVlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMudW5pcXVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVMYXllcihoZWlnaHQsIHdpZHRoLCBsYXllcklkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXllckV4aXN0KGxheWVySWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IHdpZHRoICsgXCJweFwiLCBoID0gaGVpZ2h0ICsgXCJweFwiLCBuTHlycyA9IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IC8vIGJrZyBpcyBsYXllciAwIHNvIGF0IGxlYXN0IDFcbiAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmJrZ0NhbnZhcyAmJiB0aGlzLmJrZ0NhbnZhcy5sYXllcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGggPj0gdGhpcy5zdGFja0xpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXNTdGFjazogdG9vIG1hbnkgbGF5ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnVuaXF1ZSArPSAxOyAvLyBhIHByaXZhdGUgc3RhdGljIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdW5pcXVlVGFnID0gdGhpcy5ia2dDYW52YXMudW5pcXVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgb3ZsSWQgPSB0aGlzLmNJZCArIFwiX292bF9cIiArIHVuaXF1ZVRhZztcbiAgICAgICAgICAgICAgICBjb25zdCBvdmxJZCA9IGxheWVySWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSFRNTCA9IFwiPGNhbnZhcyBpZD0nXCIgK1xuICAgICAgICAgICAgICAgICAgICBvdmxJZCArXG4gICAgICAgICAgICAgICAgICAgIFwiJyBzdHlsZT0ncG9zaXRpb246YWJzb2x1dGUnIHdpZHRoPSdcIiArXG4gICAgICAgICAgICAgICAgICAgIHcgK1xuICAgICAgICAgICAgICAgICAgICBcIicgaGVpZ2h0PSdcIiArXG4gICAgICAgICAgICAgICAgICAgIGggK1xuICAgICAgICAgICAgICAgICAgICBcIic+PC9jYW52YXM+XCI7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQ3ZzID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW25MeXJzIC0gMV0uY0VsZW07XG4gICAgICAgICAgICAgICAgdG9wQ3ZzLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyZW5kXCIsIG92bEhUTUwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG92bElkKTtcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgMCUpXCI7XG4gICAgICAgICAgICAgICAgbmV3Q3ZzLnN0eWxlLmhlaWdodCA9IGg7XG4gICAgICAgICAgICAgICAgbmV3Q3ZzLnN0eWxlLndpZHRoID0gdztcbiAgICAgICAgICAgICAgICBsZXQgbmV3TCA9IG5ldyBMYXllcih7IGNhbnZhc0lEOiBvdmxJZCwgY2FudmFzRWxlbWVudDogbmV3Q3ZzIH0pO1xuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIElEIGluIGFuIGFycmF5IHRvIGZhY2lsaXRhdGUgcmVtb3ZhbFxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVycy5wdXNoKG5ld0wpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdmxJZDsgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlTGF5ZXIob3ZseUlkKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBiYWNrZ3JvdW5kIGNhbnZhcyBpcyBzdGlsbCB0aGVyZVxuICAgICAgICAgICAgaWYgKCEodGhpcy5ia2dDYW52YXMgJiYgdGhpcy5ia2dDYW52YXMubGF5ZXJzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5pZCA9PT0gb3ZseUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZsTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdyBkZWxldGUgbGF5ZXJzIGFycmF5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzLnNwbGljZShpLCAxKTsgLy8gZGVsZXRlIHRoZSBMYXllciBvYmplY3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlQWxsTGF5ZXJzKCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5ia2dDYW52YXMgJiYgdGhpcy5ia2dDYW52YXMubGF5ZXJzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xuICAgICAgICAgICAgICAgIGlmIChvdmxOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcnBoYW4gPSBvdmxOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3ZsTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ycGhhbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG5vdyBkZWxldGUgbGF5ZXJzIGFycmF5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2xlYXIgYW55IHJlc2l6ZSBjYWxsYmFja3MsIHRoZSBsYXllcnMgYXJlIGdvbmVcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucy5sZW5ndGggPSAwOyAvLyByZW1vdmUgYW55IGFkZGVkIGhhbmRsZXJzLCBsZWF2ZSB0aGUgYmFzaWNcbiAgICAgICAgfVxuICAgICAgICBpc0xheWVyRXhpc3QobGF5ZXJJRCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmlkID09PSBsYXllcklEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuIiwidHJ5e3NlbGZbXCJ3b3JrYm94OndpbmRvdzo0LjMuMVwiXSYmXygpfWNhdGNoKG4pe312YXIgbj1mdW5jdGlvbihuLHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpKXt2YXIgZT1uZXcgTWVzc2FnZUNoYW5uZWw7ZS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24obil7cmV0dXJuIGkobi5kYXRhKX0sbi5wb3N0TWVzc2FnZSh0LFtlLnBvcnQyXSl9KX07ZnVuY3Rpb24gdChuLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgZT10W2ldO2UuZW51bWVyYWJsZT1lLmVudW1lcmFibGV8fCExLGUuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGUmJihlLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixlLmtleSxlKX19ZnVuY3Rpb24gaShuKXtpZih2b2lkIDA9PT1uKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gbn10cnl7c2VsZltcIndvcmtib3g6Y29yZTo0LjMuMVwiXSYmXygpfWNhdGNoKG4pe312YXIgZT1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5wcm9taXNlPW5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsaSl7bi5yZXNvbHZlPXQsbi5yZWplY3Q9aX0pfSxyPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBVUkwobixsb2NhdGlvbikuaHJlZj09PW5ldyBVUkwodCxsb2NhdGlvbikuaHJlZn0sbz1mdW5jdGlvbihuLHQpe09iamVjdC5hc3NpZ24odGhpcyx0LHt0eXBlOm59KX07ZnVuY3Rpb24gdShuKXtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10saT0wO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspdFtpXT1hcmd1bWVudHNbaV07dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUobi5hcHBseSh0aGlzLHQpKX1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fX1mdW5jdGlvbiBhKG4sdCxpKXtyZXR1cm4gaT90P3Qobik6bjoobiYmbi50aGVufHwobj1Qcm9taXNlLnJlc29sdmUobikpLHQ/bi50aGVuKHQpOm4pfWZ1bmN0aW9uIHMoKXt9dmFyIGM9ZnVuY3Rpb24oYyl7dmFyIGYsaDtmdW5jdGlvbiB2KG4sdCl7dmFyIHI7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSwocj1jLmNhbGwodGhpcyl8fHRoaXMpLnQ9bixyLmk9dCxyLm89MCxyLnU9bmV3IGUsci5zPW5ldyBlLHIuaD1uZXcgZSxyLnY9ci52LmJpbmQoaShpKHIpKSksci5sPXIubC5iaW5kKGkoaShyKSkpLHIuZz1yLmcuYmluZChpKGkocikpKSxyLm09ci5tLmJpbmQoaShpKHIpKSkscn1oPWMsKGY9dikucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpLGYucHJvdG90eXBlLmNvbnN0cnVjdG9yPWYsZi5fX3Byb3RvX189aDt2YXIgbCx3LGcsZD12LnByb3RvdHlwZTtyZXR1cm4gZC5yZWdpc3Rlcj11KGZ1bmN0aW9uKG4pe3ZhciB0LGksZT10aGlzLHU9KHZvaWQgMD09PW4/e306bikuaW1tZWRpYXRlLGM9dm9pZCAwIT09dSYmdTtyZXR1cm4gdD1mdW5jdGlvbigpe3JldHVybiBlLnA9Qm9vbGVhbihuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSxlLlA9ZS5SKCksYShlLmsoKSxmdW5jdGlvbihuKXtlLkI9bixlLlAmJihlLk89ZS5QLGUucy5yZXNvbHZlKGUuUCksZS5oLnJlc29sdmUoZS5QKSxlLmooZS5QKSxlLlAuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXRlY2hhbmdlXCIsZS5sLHtvbmNlOiEwfSkpO3ZhciB0PWUuQi53YWl0aW5nO3JldHVybiB0JiZyKHQuc2NyaXB0VVJMLGUudCkmJihlLk89dCxQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7ZS5kaXNwYXRjaEV2ZW50KG5ldyBvKFwid2FpdGluZ1wiLHtzdzp0LHdhc1dhaXRpbmdCZWZvcmVSZWdpc3RlcjohMH0pKX0pKSxlLk8mJmUudS5yZXNvbHZlKGUuTyksZS5CLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLGUuZyksbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRyb2xsZXJjaGFuZ2VcIixlLm0se29uY2U6ITB9KSxcIkJyb2FkY2FzdENoYW5uZWxcImluIHNlbGYmJihlLkM9bmV3IEJyb2FkY2FzdENoYW5uZWwoXCJ3b3JrYm94XCIpLGUuQy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUudikpLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZS52KSxlLkJ9KX0sKGk9ZnVuY3Rpb24oKXtpZighYyYmXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZSlyZXR1cm4gZnVuY3Rpb24obix0KXtpZighdClyZXR1cm4gbiYmbi50aGVuP24udGhlbihzKTpQcm9taXNlLnJlc29sdmUoKX0obmV3IFByb21pc2UoZnVuY3Rpb24obil7cmV0dXJuIGFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbil9KSl9KCkpJiZpLnRoZW4/aS50aGVuKHQpOnQoaSl9KSxkLmdldFNXPXUoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5PfHx0aGlzLnUucHJvbWlzZX0pLGQubWVzc2FnZVNXPXUoZnVuY3Rpb24odCl7cmV0dXJuIGEodGhpcy5nZXRTVygpLGZ1bmN0aW9uKGkpe3JldHVybiBuKGksdCl9KX0pLGQuUj1mdW5jdGlvbigpe3ZhciBuPW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXI7aWYobiYmcihuLnNjcmlwdFVSTCx0aGlzLnQpKXJldHVybiBufSxkLms9dShmdW5jdGlvbigpe3ZhciBuPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKG4sdCl7dHJ5e3ZhciBpPW4oKX1jYXRjaChuKXtyZXR1cm4gdChuKX1yZXR1cm4gaSYmaS50aGVuP2kudGhlbih2b2lkIDAsdCk6aX0oZnVuY3Rpb24oKXtyZXR1cm4gYShuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihuLnQsbi5pKSxmdW5jdGlvbih0KXtyZXR1cm4gbi5MPXBlcmZvcm1hbmNlLm5vdygpLHR9KX0sZnVuY3Rpb24obil7dGhyb3cgbn0pfSksZC5qPWZ1bmN0aW9uKHQpe24odCx7dHlwZTpcIldJTkRPV19SRUFEWVwiLG1ldGE6XCJ3b3JrYm94LXdpbmRvd1wifSl9LGQuZz1mdW5jdGlvbigpe3ZhciBuPXRoaXMuQi5pbnN0YWxsaW5nO3RoaXMubz4wfHwhcihuLnNjcmlwdFVSTCx0aGlzLnQpfHxwZXJmb3JtYW5jZS5ub3coKT50aGlzLkwrNmU0Pyh0aGlzLlc9bix0aGlzLkIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWZvdW5kXCIsdGhpcy5nKSk6KHRoaXMuTz1uLHRoaXMudS5yZXNvbHZlKG4pKSwrK3RoaXMubyxuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLHRoaXMubCl9LGQubD1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGk9bi50YXJnZXQsZT1pLnN0YXRlLHI9aT09PXRoaXMuVyx1PXI/XCJleHRlcm5hbFwiOlwiXCIsYT17c3c6aSxvcmlnaW5hbEV2ZW50Om59OyFyJiZ0aGlzLnAmJihhLmlzVXBkYXRlPSEwKSx0aGlzLmRpc3BhdGNoRXZlbnQobmV3IG8odStlLGEpKSxcImluc3RhbGxlZFwiPT09ZT90aGlzLl89c2V0VGltZW91dChmdW5jdGlvbigpe1wiaW5zdGFsbGVkXCI9PT1lJiZ0LkIud2FpdGluZz09PWkmJnQuZGlzcGF0Y2hFdmVudChuZXcgbyh1K1wid2FpdGluZ1wiLGEpKX0sMjAwKTpcImFjdGl2YXRpbmdcIj09PWUmJihjbGVhclRpbWVvdXQodGhpcy5fKSxyfHx0aGlzLnMucmVzb2x2ZShpKSl9LGQubT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLk87dD09PW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXImJih0aGlzLmRpc3BhdGNoRXZlbnQobmV3IG8oXCJjb250cm9sbGluZ1wiLHtzdzp0LG9yaWdpbmFsRXZlbnQ6bn0pKSx0aGlzLmgucmVzb2x2ZSh0KSl9LGQudj1mdW5jdGlvbihuKXt2YXIgdD1uLmRhdGE7dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwibWVzc2FnZVwiLHtkYXRhOnQsb3JpZ2luYWxFdmVudDpufSkpfSxsPXYsKHc9W3trZXk6XCJhY3RpdmVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zLnByb21pc2V9fSx7a2V5OlwiY29udHJvbGxpbmdcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oLnByb21pc2V9fV0pJiZ0KGwucHJvdG90eXBlLHcpLGcmJnQobCxnKSx2fShmdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXt0aGlzLkQ9e319dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihuLHQpe3RoaXMuVChuKS5hZGQodCl9LHQucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihuLHQpe3RoaXMuVChuKS5kZWxldGUodCl9LHQuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihuKXtuLnRhcmdldD10aGlzLHRoaXMuVChuLnR5cGUpLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQobil9KX0sdC5UPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLkRbbl09dGhpcy5EW25dfHxuZXcgU2V0fSxufSgpKTtleHBvcnR7YyBhcyBXb3JrYm94LG4gYXMgbWVzc2FnZVNXfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdvcmtib3gtd2luZG93LnByb2QuZXM1Lm1qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vc3JjL2RhdGEvYXBpLWRhdGEuanNcIjtcbmltcG9ydCB7IERhdGFNb2RhbCB9IGZyb20gXCIuL3NyYy9kYXRhL2RhdGEtbW9kYWwuanNcIjtcbmltcG9ydCB7IFN0YXJ0U2NlbmUgfSBmcm9tIFwiLi9zcmMvc2NlbmVzL3N0YXJ0LXNjZW5lLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuL3NyYy91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IHsgZmlyZWJhc2VDb25maWcgfSBmcm9tIFwiLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2VfY29uZmlnLmpzXCI7XG5pbXBvcnQgeyBDYWNoZWRMYW5ndWFnZXMgfSBmcm9tIFwiLi9zcmMvY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgV29ya2JveCB9IGZyb20gXCJ3b3JrYm94LXdpbmRvd1wiO1xuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcbmNvbnN0IGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChcIm15LWNoYW5uZWxcIik7XG5sZXQgY2FjaGVkX2xhbmd1YWdlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKENhY2hlZExhbmd1YWdlcylcbiAgICA/IG5ldyBNYXAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDYWNoZWRMYW5ndWFnZXMpKSlcbiAgICA6IG5ldyBNYXAoKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgbGV0IHdiID0gbmV3IFdvcmtib3goXCIuL3N3LmpzXCIsIHt9KTtcbiAgICAgICAgICAgIHdiLnJlZ2lzdGVyKCkudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLmluc3RhbGxpbmcucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJlZ2lzdHJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbGFuZyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjYWNoZWRfbGFuZ3VhZ2VzLmhhcyhsYW5nKSkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoeyBjb21tYW5kOiBcIkNhY2hlXCIsIGRhdGE6IGxhbmcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5tc2cgPT0gXCJMb2FkaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nX251bWJlclwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBcIiBkb3dubG9hZGluZy4uLiBcIiArIGV2ZW50LmRhdGEuZGF0YSArIFwiJVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5kYXRhID09IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVkX2xhbmd1YWdlcy5zZXQobGFuZywgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzLCBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGNhY2hlZF9sYW5ndWFnZXMuZW50cmllcygpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLm1zZyA9PSBcIlVwZGF0ZSBGb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gXCJVcGRhdGUgRm91bmRcXG5QcmVzcyBvayB0byB1cGRhdGUuXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKHRleHQpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENhY2hlZExhbmd1YWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJZb3UgY2FuY2VsZWQhXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICAgICAgdGhpcy5hcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzID0gZmlyZWJhc2UuYW5hbHl0aWNzKHRoaXMuYXBwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aCA+IDQyMCA/IDQyMCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBsZXQgZGF0YSA9IHlpZWxkIGdldERhdGEoKTtcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0YU1vZGFsKGRhdGEuT3RoZXJBdWRpb3MsIGRhdGEuTGV2ZWxzLCBkYXRhLkZlZWRiYWNrVGV4dHMsIGRhdGEuUmlnaHRUb0xlZnQsIGRhdGEuRmVlZGJhY2tBdWRpb3MpO1xuICAgICAgICBpZiAod2luZG93LkFuZHJvaWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5BbmRyb2lkLnJlY2VpdmVEYXRhKGNhY2hlZF9sYW5ndWFnZXMuaGFzKGxhbmcpID8gY2FjaGVkX2xhbmd1YWdlcy5nZXQobGFuZykgOiBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxUaGlzLmFib3V0Q29tcGFueSA9IGRhdGEuYWJvdXRDb21wYW55O1xuICAgICAgICBnbG9iYWxUaGlzLmRlc2NyaXB0aW9uVGV4dCA9IGRhdGEuZGVzY3JpcHRpb25UZXh0O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGggPiA0MjAgPyA0MjAgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5tb25zdGVyO1xuICAgICAgICAgICAgICAgIG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKS5kZWxldGVBbGxMYXllcnMoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zdGFydFNjZW5lO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IG5ldyBTdGFydFNjZW5lKGNhbnZhcywgZCwgdGhpcy5hbmFseXRpY3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChjYWNoZWRfbGFuZ3VhZ2VzLmhhcyhsYW5nKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gbmV3IFN0YXJ0U2NlbmUoY2FudmFzLCBkLCB0aGlzLmFuYWx5dGljcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9