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
//const urlParams = new URLSearchParams(window.location.search);
//export var lang = urlParams.get("ftm_language");
var lang = "english";


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
/* harmony export */   "TutorialLayer": () => (/* binding */ TutorialLayer),
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
const TutorialLayer = "tutorialCanvas";
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
                this.monster_audio.play().catch(() => {
                    console.log("Error");
                });
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.FeedbackAudio: {
                this.feedback_audio.src = src;
                this.feedback_audio.play().catch(() => { });
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.IntroMusic: {
                this.intro_music.src = src;
                this.intro_music.play().catch(() => { });
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.PromptAudio: {
                this.prompt_audio.src = src;
                this.prompt_audio.play().catch(() => { });
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.ButtonClick: {
                this.button_click.src = src;
                this.button_click.play().catch(() => { });
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.TimeOver: {
                this.time_over.src = src;
                this.time_over.play().catch(() => { });
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.StoneMusic: {
                this.stone_music.src = src;
                this.stone_music.play().catch(() => { });
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.PhraseAudio: {
                this.phrase_audio.src = src;
                this.phrase_audio.play().catch(() => { });
                break;
            }
            case _common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndAudio: {
                this.level_end_audio.src = src;
                this.level_end_audio.play().catch(() => { });
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
            if (window.Android) {
                this.timer += 0.2;
            }
            else {
                this.timer += 0.06;
            }
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

/***/ "./src/components/tutorial.js":
/*!************************************!*\
  !*** ./src/components/tutorial.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tutorial": () => (/* binding */ Tutorial)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");


var self;
var tutorialImg = new Image();
tutorialImg.src = "./assets/images/tutorial_hand.png";
let startX = 0;
let startY = 0;
let endX = 200;
let endY = 100;
class Tutorial {
    constructor(game, zindex) {
        this.game = game;
        self = this;
        this.zindex = zindex;
        this.width = this.game.width;
        this.height = this.game.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.TutorialLayer);
        this.elementId = document.getElementById(this.id);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = "8";
        this.canavsElement.style.bottom = "0";
        startX = this.game.width / 5 - 32,
            startY = this.game.height / 2.8 - 32,
            endX = this.width / 2;
        endY = this.height / 2 - 82;
        this.animateImage();
        self.elementId.addEventListener('click', function (event) {
            console.log('Clicked and touched');
            self.deleteCanvas();
        });
    }
    changeZindex(index) {
        this.canavsElement.style.zIndex = index;
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    animateImage() {
        let x = startX;
        let y = startY;
        const dx = (endX - startX) / 60;
        const dy = (endY - startY) / 60;
        let absdx = Math.abs(dx);
        let absdy = Math.abs(dy);
        setTimeout(() => {
            const interval = setInterval(() => {
                if ((x <= endX + absdx && x >= endX - absdx) && (y <= endY + absdy && y >= endY - absdy)) {
                    clearInterval(interval);
                    setTimeout(() => { self.deleteCanvas(); }, 500);
                }
                x = (dx >= 0) ? x + absdx : x - absdx;
                y = (dy >= 0) ? y + absdy : y - absdy;
                this.draw(x, y);
            }, 16);
        }, 1500);
    }
    draw(x, y) {
        this.context.clearRect(0, 0, this.width, this.height); // Clear the canvas
        this.context.drawImage(tutorialImg, x, y);
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
/* harmony import */ var _components_tutorial_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/tutorial.js */ "./src/components/tutorial.js");
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
        this.tutorial = new _components_tutorial_js__WEBPACK_IMPORTED_MODULE_14__.Tutorial(game);
        this.audio = new _common_sound_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__.CanvasStack("canvas");
        this.monsterPhaseNumber = monsterPhaseNumber || 1;
        this.levelData = levelData;
        this.levelStartCallBack = levelStartCallBack;
        this.timerTicking = new _components_timer_ticking_js__WEBPACK_IMPORTED_MODULE_1__.TimerTicking(game, this);
        this.promptText = new _components_prompt_text_js__WEBPACK_IMPORTED_MODULE_4__.PromptText(game, this, levelData.puzzles[current_puzzle_index], levelData);
        this.createCanvas();
        this.showTutorial = ((0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_11__.getDatafromStorage)().length == undefined) ? true : false;
        (this.showTutorial) ? this.tutorial.createCanvas() : () => { };
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
        this.showTutorial = (gameLevelData.length == undefined) ? true : false;
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
        document.addEventListener("selectstart", function (e) {
            e.preventDefault();
        });
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
        document.addEventListener("selectstart", function (e) {
            e.preventDefault();
        });
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
    if (registration.installing) {
        registration.installing.postMessage({
            type: "Registration",
            value: _global_variables_js__WEBPACK_IMPORTED_MODULE_6__.lang,
        });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztB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QUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHaUQ7QUFDMUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFJO0FBQ2pDLDZCQUE2QixrRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL2dsb2JhbC12YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tbW9uL2xldmVsLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9zb3VuZC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9zdG9uZXMtY29uZmlnLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2NhbmNlbF9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2luc3RhbGxfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL25leHRfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3BhdXNlX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9wbGF5X2J1dG9vbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXRyeV9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2xldmVsLWluZGljYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL21vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3BhdXNlLXBvcHVwLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9wcm9tcHQtdGV4dC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvc3RvbmVzLWxheWVyLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy90aW1lci10aWNraW5nLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy90dXRvcmlhbC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvYXBpLWRhdGEuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9kYXRhL2RhdGEtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9kYXRhL3Byb2ZpbGUtZGF0YS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2NvbmZpZy50cyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2ludGVncmF0aW9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2dhbWUtZW5kLXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvbGV2ZWwtZW5kLXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2xldmVsLXNlbGVjdGlvbi1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9sZXZlbC1zdGFydC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9zdGFydC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9ub2RlX21vZHVsZXMvd29ya2JveC13aW5kb3cvYnVpbGQvd29ya2JveC13aW5kb3cucHJvZC5lczUubWpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vZmVlZFRoZU1vbnN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4vL2V4cG9ydCB2YXIgbGFuZyA9IHVybFBhcmFtcy5nZXQoXCJmdG1fbGFuZ3VhZ2VcIik7XHJcbmV4cG9ydCB2YXIgbGFuZyA9IFwiZW5nbGlzaFwiO1xyXG4iLCJpbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZXMoc291cmNlcywgY2FsbGJhY2spIHtcclxuICAgIHZhciBpbWFnZXMgPSB7fTtcclxuICAgIHZhciBsb2FkZWRJbWFnZXMgPSAwO1xyXG4gICAgdmFyIG51bUltYWdlcyA9IDA7XHJcbiAgICAvLyBnZXQgbnVtIG9mIHNvdXJjZXNcclxuICAgIGZvciAodmFyIHNyYyBpbiBzb3VyY2VzKSB7XHJcbiAgICAgICAgbnVtSW1hZ2VzKys7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBzcmMgaW4gc291cmNlcykge1xyXG4gICAgICAgIGltYWdlc1tzcmNdID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2VzW3NyY10ub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoKytsb2FkZWRJbWFnZXMgPj0gbnVtSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpbWFnZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWFnZXNbc3JjXS5zcmMgPSBzb3VyY2VzW3NyY107XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRpbmdTY3JlZW4obG9hZGluZykge1xyXG4gICAgY29uc3QgbG9hZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmctc2NyZWVuXCIpO1xyXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdfdGV4dFwiKTtcclxuICAgIGxvYWRpbmdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgbG9hZGluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuYmtnQ2FudmFzLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCk7XHJcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxvYWRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuYmtnQ2FudmFzLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCk7XHJcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgTW9uc3RlckxheWVyID0gXCJtb25zdGVyQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBUdXRvcmlhbExheWVyID0gXCJ0dXRvcmlhbENhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgUGF1c2VQb3B1cExheWVyID0gXCJwYXVzZXBvcHVwQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBTdG9uZUxheWVyID0gXCJzdG9uZUNhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgVGltZXRpY2tlckxheWVyID0gXCJ0aW1ldGlja0NhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgTGV2ZWxFbmRMYXllciA9IFwibGV2ZWxFbmRDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IExldmVsRW5kQnV0dG9uc0xheWVyID0gXCJsZXZlbEVuZEJ1dHRvbnNDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IExldmVsU2VsZWN0aW9uTGF5ZXIgPSBcImxldmVsU2VsZWN0aW9uQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBMZXZlbFN0YXJ0TGF5ZXIgPSBcImxldmVsU3RhcnRDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IFN0YXJ0U2NlbmVMYXllciA9IFwic3RhcnRTY2VuZUNhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgUGxheUJ1dHRvbkxheWVyID0gXCJwbGF5QnV0dG9uQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBHYW1lRW5kTGF5ZXIgPSBcIkdhbWVFbmRDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IEZpcmViYXNlVXNlckNsaWNrZWQgPSBcInVzZXJfY2xpY2tlZFwiO1xyXG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VySW5zdGFsbCA9IFwidXNlcl9pbnN0YWxsZWRcIjtcclxuZXhwb3J0IGNvbnN0IFByb21wdFRleHRMYXllciA9IFwicHJvbXB0VGV4dENhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgUFdBSW5zdGFsbFN0YXR1cyA9IFwicHdhX2luc3RhbGxlZF9zdGF0dXNcIjtcclxuZXhwb3J0IGNvbnN0IFVzZXJDYW5jZWxsZWQgPSBcInVzZXJfY2FuY2VsX2luc3RhbGxhdGlvblwiO1xyXG5leHBvcnQgY29uc3QgTmF0aXZlUGxheUJ1dHRvbiA9IFwibmF0aXZlX3BsYXlidXR0b25fY2xpY2tlZFwiO1xyXG5leHBvcnQgY29uc3QgUHJldmlvdXNQbGF5ZWRMZXZlbCA9IFwic3RvcmVQcmV2aW91c1BsYXllZExldmVsXCIgKyBsYW5nO1xyXG5leHBvcnQgY29uc3QgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgPSBcInN0b3JlTW9uc3RlclBoYXNlTnVtYmVyXCIgKyBsYW5nO1xyXG5leHBvcnQgY29uc3QgQ2FjaGVkTGFuZ3VhZ2VzID0gXCJjYWNoZWRfbGFuZ3VhZ2VzXCI7XHJcbmV4cG9ydCBjb25zdCBNb25zdGVyQXVkaW8gPSBcIm1vbnN0ZXJfYXVkaW9cIjtcclxuZXhwb3J0IGNvbnN0IEZlZWRiYWNrQXVkaW8gPSBcImZlZWRiYWNrX2F1ZGlvXCI7XHJcbmV4cG9ydCBjb25zdCBJbnRyb011c2ljID0gXCJpbnRyb19tdXNpY1wiO1xyXG5leHBvcnQgY29uc3QgUHJvbXB0QXVkaW8gPSBcInByb21wdF9hdWRpb1wiO1xyXG5leHBvcnQgY29uc3QgQnV0dG9uQ2xpY2sgPSBcImJ1dHRvbl9jbGlja1wiO1xyXG5leHBvcnQgY29uc3QgVGltZU92ZXIgPSBcInRpbWVfb3ZlclwiO1xyXG5leHBvcnQgY29uc3QgU3RvbmVNdXNpYyA9IFwic3RvbmVfbXVzaWNcIjtcclxuZXhwb3J0IGNvbnN0IFBocmFzZUF1ZGlvID0gXCJwaHJhc2VfYXVkaW9cIjtcclxuZXhwb3J0IGNvbnN0IExldmVsRW5kQXVkaW8gPSBcImxldmVsX2VuZF9hdWRpb1wiO1xyXG4iLCJleHBvcnQgY2xhc3MgTGV2ZWxDb25maWcge1xyXG4gICAgY29uc3RydWN0b3IoeFBvcywgeVBvcywgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnggPSB4UG9zO1xyXG4gICAgICAgIHRoaXMueSA9IHlQb3M7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZHJhd3JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBJY29uLnBuZ1wiO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJ1dHRvbkNsaWNrLCBGZWVkYmFja0F1ZGlvLCBJbnRyb011c2ljLCBMZXZlbEVuZEF1ZGlvLCBNb25zdGVyQXVkaW8sIFBocmFzZUF1ZGlvLCBQcm9tcHRBdWRpbywgU3RvbmVNdXNpYywgVGltZU92ZXIsIH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XHJcbmxldCBpbmFjdGl2ZV9zY3JlZW4gPSBmYWxzZTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyX2F1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoTW9uc3RlckF1ZGlvKTtcclxuICAgICAgICB0aGlzLmZlZWRiYWNrX2F1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRmVlZGJhY2tBdWRpbyk7XHJcbiAgICAgICAgdGhpcy5pbnRyb19tdXNpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEludHJvTXVzaWMpO1xyXG4gICAgICAgIHRoaXMucHJvbXB0X2F1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUHJvbXB0QXVkaW8pO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uX2NsaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgIHRoaXMudGltZV9vdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVGltZU92ZXIpO1xyXG4gICAgICAgIHRoaXMuc3RvbmVfbXVzaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTdG9uZU11c2ljKTtcclxuICAgICAgICB0aGlzLnBocmFzZV9hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFBocmFzZUF1ZGlvKTtcclxuICAgICAgICB0aGlzLmxldmVsX2VuZF9hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFBocmFzZUF1ZGlvKTtcclxuICAgIH1cclxuICAgIHBsYXlTb3VuZChzcmMsIHR5cGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBNb25zdGVyQXVkaW86IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uc3Rlcl9hdWRpby5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnN0ZXJfYXVkaW8ucGxheSgpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEZlZWRiYWNrQXVkaW86IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2tfYXVkaW8uc3JjID0gc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFja19hdWRpby5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgSW50cm9NdXNpYzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRyb19tdXNpYy5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludHJvX211c2ljLnBsYXkoKS5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQcm9tcHRBdWRpbzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRfYXVkaW8uc3JjID0gc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tcHRfYXVkaW8ucGxheSgpLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEJ1dHRvbkNsaWNrOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbl9jbGljay5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbl9jbGljay5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVGltZU92ZXI6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZV9vdmVyLnNyYyA9IHNyYztcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZV9vdmVyLnBsYXkoKS5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTdG9uZU11c2ljOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b25lX211c2ljLnNyYyA9IHNyYztcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvbmVfbXVzaWMucGxheSgpLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBocmFzZUF1ZGlvOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBocmFzZV9hdWRpby5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBocmFzZV9hdWRpby5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTGV2ZWxFbmRBdWRpbzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbF9lbmRfYXVkaW8uc3JjID0gc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbF9lbmRfYXVkaW8ucGxheSgpLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWN0aXZlU2NyZWVuKCkge1xyXG4gICAgICAgIGlmIChpbmFjdGl2ZV9zY3JlZW4pIHtcclxuICAgICAgICAgICAgaW5hY3RpdmVfc2NyZWVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlU291bmQoKTtcclxuICAgICAgICAgICAgaW5hY3RpdmVfc2NyZWVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwYXVzZVNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMubW9uc3Rlcl9hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tfYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICB0aGlzLmludHJvX211c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbF9lbmRfYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnBocmFzZV9hdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMudGltZV9vdmVyLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5zdG9uZV9tdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMucHJvbXB0X2F1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5idXR0b25fY2xpY2sucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnRpbWVfb3Zlci5wYXVzZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuaW50cm9BdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuYXVkaW8gPyB0aGlzLmF1ZGlvLnBhdXNlKCkgOiBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuYXVkaW8yID8gdGhpcy5hdWRpbzEucGF1c2UoKSA6IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5hdWRpbzIgPyB0aGlzLmF1ZGlvMi5wYXVzZSgpIDogbnVsbDtcclxuICAgIH1cclxuICAgIGNoYW5nZVNvdXJzZShzcmMpIHtcclxuICAgICAgICAvLyB0aGlzLmF1ZGlvLnNyYyA9IHNyYztcclxuICAgICAgICAvLyB0aGlzLnBsYXlTb3VuZChzcmMpO1xyXG4gICAgfVxyXG4gICAgcGxheUxldmVsRW5kSGFwcHlBdWRpbyhsZXZlbFdpbkF1ZGlvKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hdWRpby5zcmMgPSBsZXZlbFdpbkF1ZGlvO1xyXG4gICAgICAgIC8vIHRoaXMucGxheVNvdW5kKGxldmVsV2luQXVkaW8pO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgdGhpcy5pbnRyb0F1ZGlvLnBsYXkoKTtcclxuICAgICAgICAvLyB9LCA3MDApO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTdG9uZUNvbmZpZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdG9uZUxldHRlciwgeFBvcywgeVBvcykge1xyXG4gICAgICAgIHRoaXMueCA9IHhQb3M7XHJcbiAgICAgICAgdGhpcy55ID0geVBvcztcclxuICAgICAgICB0aGlzLm9yaWd4ID0geFBvcztcclxuICAgICAgICB0aGlzLm9yaWd5ID0geVBvcztcclxuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHN0b25lTGV0dGVyO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc3RvbmVfcGlua192MDIucG5nXCI7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FuY2VsQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IGNhbnZhcy53aWR0aCAqIDAuMSArIChjYW52YXMud2lkdGggKiAwLjE1KSAvIDI7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gY2FudmFzLmhlaWdodCAqIDAuMjtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9jbG9zZV9idG4ucG5nXCI7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBfYnRuLnBuZ1wiO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcclxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgK1xyXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0YWxsQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9JbnN0YWxsX2J1dHRvbi5wbmdcIjtcclxuICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoIC8gMywgc2VsZi5jYW52YXMud2lkdGggLyA2KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICpcclxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikgK1xyXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyAxMikgKlxyXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtIHRoaXMuY2FudmFzLndpZHRoIC8gMTIpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLmNhbnZhcy53aWR0aCAvIDgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcclxuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25leHRfYnRuLnBuZ1wiO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcclxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgK1xyXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZUJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLnBvc1ggPSBjYW52YXMud2lkdGggLSBjYW52YXMuaGVpZ2h0ICogMC4wOTtcclxuICAgICAgICB0aGlzLnBvc1kgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BhdXNlX3YwMS5wbmdcIjtcclxuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwYXVzZV9idXR0b25faW1hZ2UsIHNlbGYucG9zWCwgc2VsZi5wb3NZLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMikpO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcclxuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL1BsYXlfYnV0dG9uLnBuZ1wiO1xyXG4gICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggLyAzLCBzZWxmLmNhbnZhcy53aWR0aCAvIDMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLmNhbnZhcy53aWR0aCAvIDgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHJ5QnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9yZXRyeV9idG4ucG5nXCI7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBMZXZlbEluZGljYXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBhY3RpdmVJbmRpY2F0b3JzKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGljYXRvcnMgPSBhY3RpdmVJbmRpY2F0b3JzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgc2V0SW5kaWNhdG9ycyhpbnQpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGljYXRvcnMgPSBpbnQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcyk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgbGV2ZWxfaW5kaWNhdG9yID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgbGV2ZWxfaW5kaWNhdG9yLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2xldmVsc192MDEucG5nXCI7XHJcbiAgICAgICAgdmFyIGJhcl9lbXB0eSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGJhcl9lbXB0eS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9iYXJfZW1wdHlfdjAxLnBuZ1wiO1xyXG4gICAgICAgIGxldmVsX2luZGljYXRvci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKGxldmVsX2luZGljYXRvciwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCAwLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpO1xyXG4gICAgICAgICAgICBiYXJfZW1wdHkub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShiYXJfZW1wdHksICgoc2VsZi5jYW52YXMud2lkdGggKiAwLjM1KSAvIDcpICogKGkgKyAxKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMiAtIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDYsIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gMTAsIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZShzZWxmKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHNlbGYpIHtcclxuICAgICAgICB2YXIgYmFyX2Z1bGwgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBiYXJfZnVsbC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9iYXJfZnVsbF92MDEucG5nXCI7XHJcbiAgICAgICAgYmFyX2Z1bGwub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFjdGl2ZUluZGljYXRvcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShiYXJfZnVsbCwgKChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gNykgKiAoaSArIDEpICsgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyIC0gKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gNiwgKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyAxMCwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vbnN0ZXJMYXllciwgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG52YXIgbGFzdFRpbWUgPSAwO1xyXG52YXIgc2VsZjtcclxudmFyIGFuaW1hdGlvbkZyYW1lO1xyXG52YXIgbW9uc3RlclBoYXNlTnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIpIHx8IDE7XHJcbmNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+LlwiKTtcclxuY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcclxudmFyIGVhdEltZyA9IG5ldyBJbWFnZSgpO1xyXG5lYXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZWF0MVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XHJcbnZhciBpZGxlSW1nID0gbmV3IEltYWdlKCk7XHJcbmlkbGVJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIG1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiO1xyXG52YXIgc3BpdEltZyA9IG5ldyBJbWFnZSgpO1xyXG5zcGl0SW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3NwaXQxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIjtcclxudmFyIGRyYWdJbWcgPSBuZXcgSW1hZ2UoKTtcclxuZHJhZ0ltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9kcmFnMVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XHJcbmNvbnNvbGUubG9nKFwibW9uc3RlcmV4ZWN1dGluZ1wiKTtcclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgemluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnppbmRleCA9IHppbmRleDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5nYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5nYW1lLmhlaWdodDtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb25zdGVyXCIpO1xyXG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhGcmFtZSA9IDY7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLndpZHRoIC8gMiAtIHRoaXMuZ2FtZS53aWR0aCAqIDAuMjQzO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2FtZS53aWR0aCAvIDM7XHJcbiAgICAgICAgdGhpcy5mcHMgPSAxMDtcclxuICAgICAgICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcHM7XHJcbiAgICAgICAgdGhpcy5mcmFtZVRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIE1vbnN0ZXJMYXllcik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI2XCI7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKDApO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlWmluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lVGltZXIgPiB0aGlzLmZyYW1lSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgdGhpcy5tYXhGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgNzcwICogdGhpcy5mcmFtZVgsIDEzODYgKiB0aGlzLmZyYW1lWSwgNzY4LCAxMzg2LCB0aGlzLngsIHRoaXMueSAqIDAuOCwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMS41KTtcclxuICAgIH1cclxuICAgIGNoYW5nZUltYWdlKHNyYykge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKDApO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmZyYW1lWSA9PSAxKSB7XHJcbiAgICAgICAgLy8gICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIHRoaXMuZnJhbWVZID0gMTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBzcmM7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VQaGFzZU51bWJlcihtb25zdGVyUGhhc2VOdW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vbnN0ZXIgY2hhbmdpbmdcIik7XHJcbiAgICAgICAgZWF0SW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgZWF0SW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2VhdDFcIiArIG1vbnN0ZXJQaGFzZU51bSArIFwiLnBuZ1wiO1xyXG4gICAgICAgIGlkbGVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpZGxlSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2lkbGUxXCIgKyBtb25zdGVyUGhhc2VOdW0gKyBcIi5wbmdcIjtcclxuICAgICAgICBzcGl0SW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgc3BpdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zcGl0MVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XHJcbiAgICAgICAgZHJhZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGRyYWdJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZHJhZzFcIiArIG1vbnN0ZXJQaGFzZU51bSArIFwiLnBuZ1wiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVhdEltZy5zcmMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkbGVJbWcuc3JjKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzcGl0SW1nLnNyYyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcclxuICAgIH1cclxuICAgIGNoYW5nZVRvRHJhZ0FuaW1hdGlvbigpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gZHJhZ0ltZztcclxuICAgIH1cclxuICAgIGNoYW5nZVRvRWF0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBlYXRJbWc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9JZGxlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VUb0lkbGVBbmltYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGlkbGVJbWc7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VUb1NwaXRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHNwaXRJbWc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9JZGxlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRpb24odGltZVN0YW1wKSB7XHJcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIGxhc3RUaW1lO1xyXG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgICAgIHNlbGYudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2VsZi5hbmltYXRpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBhdXNlUG9wdXBMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbmltcG9ydCBDYW5jZWxCdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9jYW5jZWxfYnV0dG9uLmpzXCI7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2Nsb3NlX2J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgUmV0cnlCdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9yZXRyeV9idXR0b24uanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF1c2VQb3BVcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGxldmVsU3RhcnQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgUGF1c2VQb3B1cExheWVyKTtcclxuICAgICAgICBjb25zdCBzZWxmSWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gc2VsZklkRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgc2VsZklkRWxlbWVudC5zdHlsZS56SW5kZXggPSBcIjExXCI7XHJcbiAgICAgICAgc2VsZklkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xyXG4gICAgICAgIHZhciBwb3BfdXBfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBwb3BfdXBfaW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcG9wdXBfYmdfdjAxLnBuZ1wiO1xyXG4gICAgICAgIHBvcF91cF9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBvcF91cF9pbWFnZSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjEsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjgsIHNlbGYuY2FudmFzLndpZHRoICogMC44KTtcclxuICAgICAgICAgICAgc2VsZi5jYW5jZWxCdXR0b24gPSBuZXcgQ2FuY2VsQnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMpO1xyXG4gICAgICAgICAgICBzZWxmLnJldHJ5QnV0dG9uID0gbmV3IFJldHJ5QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC41NSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yICtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLndpZHRoICogMC40IC1cclxuICAgICAgICAgICAgICAgIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMik7XHJcbiAgICAgICAgICAgIHNlbGYuY2xvc2VCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjI1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIgK1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMud2lkdGggKiAwLjQgLVxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlbGZJZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZJZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jYW5jZWxCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LnRpbWVyVGlja2luZy5yZXN1bWVUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGVsZXRlQ2FudmFzKHNlbGYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnJldHJ5QnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5sZXZlbEVuZENhbGxCYWNrKFwicmV0cnlfYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuY2xvc2VCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJjbG9zZV9idXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRlbGV0ZUNhbnZhcyhzZWxmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKHNlbGYpIHtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHsgfVxyXG4gICAgdXBkYXRlKCkgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvbXB0VGV4dExheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XHJcbnZhciBzZWxmO1xyXG5leHBvcnQgY2xhc3MgUHJvbXB0VGV4dCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBsZXZlbFN0YXJ0LCBjdXJyZW50UHV6emxlRGF0YSwgbGV2ZWxEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcclxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IGxldmVsRGF0YTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0ID0gY3VycmVudFB1enpsZURhdGEucHJvbXB0LnByb21wdFRleHQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHV6emxlRGF0YSA9IGN1cnJlbnRQdXp6bGVEYXRhO1xyXG4gICAgICAgIHRoaXMuZm50c3RPckdydEltZ0FyciA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkRmFudGFzdGljQW5kR3JlYXRJbWFnZSgpO1xyXG4gICAgfVxyXG4gICAgbG9hZEZhbnRhc3RpY0FuZEdyZWF0SW1hZ2UoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmFudGFzdGljX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5mYW50YXN0aWNfaW1hZ2Uuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2ZhbnRhc3RpY18wMS5wbmdcIjtcclxuICAgICAgICB0aGlzLmZudHN0T3JHcnRJbWdBcnIucHVzaCh0aGlzLmZhbnRhc3RpY19pbWFnZSk7XHJcbiAgICAgICAgdGhpcy5ncmVhdF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JlYXRfaW1hZ2Uuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2dyZWF0XzAxLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMuZm50c3RPckdydEltZ0Fyci5wdXNoKHRoaXMuZ3JlYXRfaW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBQcm9tcHRUZXh0TGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDU7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJycmVudFB1enpsZURhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFB1enpsZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb21wdFRleHQgPSBkYXRhLnByb21wdC5wcm9tcHRUZXh0O1xyXG4gICAgfVxyXG4gICAgc2hvd0ZhbnRhc3RpY09yR3JlYXQoaW1hZ2VJbmRleCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRoaXMuZ2FtZS53aWR0aCAvIDIgLSAodGhpcy5nYW1lLndpZHRoICogMC41KSAvIDIsIHRoaXMuaGVpZ2h0ICogMC4xNSwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMjUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2Uoc2VsZi5mbnRzdE9yR3J0SW1nQXJyW2ltYWdlSW5kZXhdLCB0aGlzLmdhbWUud2lkdGggLSB0aGlzLmdhbWUud2lkdGggKiAwLjc1LCB0aGlzLmhlaWdodCAqIDAuMiwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGRyYXcoZHJvcHBlZFN0b25lcyA9IDApIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMucHJvbXB0X2ltYWdlLCB0aGlzLmdhbWUud2lkdGggLyAyIC0gKHRoaXMuZ2FtZS53aWR0aCAqIDAuNSkgLyAyLCB0aGlzLmhlaWdodCAqIDAuMTUsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5oZWlnaHQgKiAwLjI1KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gMzAgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY29uc3QgcHJvbXB0VGV4dExldHRlcnMgPSB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0LnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy5oZWlnaHQgKiAwLjI2O1xyXG4gICAgICAgIHZhciBmb250U2l6ZSA9IDIwO1xyXG4gICAgICAgIHZhciBsZXR0ZXJIaWdobGlnaHQgPSB0aGlzLmN1cnJlbnRQdXp6bGVEYXRhLnRhcmdldFN0b25lc1swXS5zcGxpdChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMZXR0ZXJJbldvcmRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJIaWdobGlnaHQuaW5jbHVkZXMocHJvbXB0VGV4dExldHRlcnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlckhpZ2hsaWdodCA9IGxldHRlckhpZ2hsaWdodC5zbGljZSgxLCBsZXR0ZXJIaWdobGlnaHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHByb21wdFRleHRMZXR0ZXJzW2ldLCBmb250U2l6ZSAqIGkgKyB4IC0gcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoICogNiwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIldvcmRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkcm9wcGVkU3RvbmVzID4gaSB8fCBkcm9wcGVkU3RvbmVzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFRleHQoXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFByb21wdFRleHQsXHJcbiAgICAgICAgLy8gICB0aGlzLndpZHRoIC8gMi4xLFxyXG4gICAgICAgIC8vICAgdGhpcy5oZWlnaHQgKiAwLjI2XHJcbiAgICAgICAgLy8gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgc2VsZi5wcm9tcHRfaW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcHJvbXB0VGV4dEJnLnBuZ1wiO1xyXG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZHJhdygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCYWNrZ3JvdW5kKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvbXB0QXVkaW8sIFN0b25lTGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBTdG9uZUNvbmZpZyB9IGZyb20gXCIuLi9jb21tb24vc3RvbmVzLWNvbmZpZy5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgUGF1c2VQb3BVcCBmcm9tIFwiLi9wYXVzZS1wb3B1cC5qc1wiO1xyXG52YXIgZ3MgPSB7XHJcbiAgICBtb2RlOiBcImdhbWVwbGF5XCIsXHJcbiAgICBsZXZlbG51bTogMCxcclxufTtcclxuZ3MucHV6emxlID0ge1xyXG4gICAgdGFyZ2V0OiBbXSxcclxuICAgIHN0b25lczogW10sXHJcbn07XHJcbmdzLnN0b25lcyA9IFtdO1xyXG52YXIgcGlja2VkU3RvbmU7XHJcbnZhciBvZmZzZXRDb29yZGluYXRlVmFsdWUgPSAzMjtcclxuY29uc3QgZHJhZ0F1ZGlvID0gbmV3IEF1ZGlvKCk7XHJcbmRyYWdBdWRpby5zcmMgPSBcIi4vYXNzZXRzL2F1ZGlvcy9vbkRyYWcubXAzXCI7XHJcbmRyYWdBdWRpby5wcmVsb2FkID0gXCJhdXRvXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b25lc0xheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgcHV6emxlRGF0YSwgcGF1c2VidXR0b24sIGNhbGxCYWNrLCBsZXZlbFN0YXJ0KSB7XHJcbiAgICAgICAgdGhpcy5waWNrZWRTdG9uZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5wYXVzZWJ1dHRvbiA9IHBhdXNlYnV0dG9uO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMucHV6emxlRGF0YSA9IHB1enpsZURhdGE7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UHV6emxlKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gY2FsbEJhY2s7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIHNldE5ld1B1enpsZShjdXJyZW50UHV6emxlKSB7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVEYXRhID0gY3VycmVudFB1enpsZTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRQdXp6bGUoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVN0b25lcyh0aGlzLnN0b25lcG9zKTtcclxuICAgIH1cclxuICAgIHN0b25lcG9zKHN0b25lcG9zKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50UHV6emxlKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydC5hdWRpby5wbGF5U291bmQodGhpcy5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRBdWRpbywgUHJvbXB0QXVkaW8pO1xyXG4gICAgICAgIGdzLnB1enpsZS5zdG9uZXMgPSBbXTtcclxuICAgICAgICBncy5wdXp6bGUudGFyZ2V0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGFyZ2V0IG9mIHRoaXMucHV6emxlRGF0YS50YXJnZXRTdG9uZXMpIHtcclxuICAgICAgICAgICAgZ3MucHV6emxlLnRhcmdldC5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdzLnB1enpsZS5zdG9uZXMgPSB0aGlzLmdhbWVTdG9uZU9wdGlvbnModGhpcy5wdXp6bGVEYXRhLmZvaWxTdG9uZXMsIHRoaXMucHV6emxlRGF0YS50YXJnZXRTdG9uZXMpO1xyXG4gICAgICAgIGdzLnB1enpsZS5wcm9tcHQgPSB0aGlzLnB1enpsZURhdGEucHJvbXB0LnByb21wdFRleHQ7XHJcbiAgICB9XHJcbiAgICBpc1RpbWVyRW5kZWQoKSB7XHJcbiAgICAgICAgcGlja2VkU3RvbmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGlja2VkU3RvbmVzID0gW107XHJcbiAgICB9XHJcbiAgICBnYW1lU3RvbmVPcHRpb25zKGZvaWxTdG9uZXMsIHRhcmdldFN0b25lcykge1xyXG4gICAgICAgIHRhcmdldFN0b25lcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGZvaWxTdG9uZXMuaW5kZXhPZihlKSAhPSAtMVxyXG4gICAgICAgICAgICAgICAgPyBmb2lsU3RvbmVzLnNwbGljZShmb2lsU3RvbmVzLmluZGV4T2YoZSksIDEpXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFyZ2V0U3RvbmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZm9pbFN0b25lcy5wdXNoKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmb2lsU3RvbmVzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBTdG9uZUxheWVyKTtcclxuICAgICAgICBjb25zdCBzZWxmRWxlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5zdHlsZS56SW5kZXggPSBcIjdcIjtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuc3R5bGUuYm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5zdG9uZXBvcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjkgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjE1IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMuNSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjIgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNCAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjI4IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDcgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS41IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMi4xIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjMgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjQyIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDYgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4xNSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoeCAtIHRoaXMud2lkdGggLyAzKSA8IDEyICYmXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNxcnQoeSAtIHRoaXMuaGVpZ2h0IC8gNS41KSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQuYXVkaW8ucGxheVNvdW5kKHNlbGYucHV6emxlRGF0YS5wcm9tcHQucHJvbXB0QXVkaW8sIFByb21wdEF1ZGlvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gdGhpcy53aWR0aCAvIDIgLSAodGhpcy53aWR0aCAqIDAuMykgLyAyKSAqXHJcbiAgICAgICAgICAgICAgICAoeCAtIHRoaXMud2lkdGggLyAyIC0gKHRoaXMud2lkdGggKiAwLjMpIC8gMikpICtcclxuICAgICAgICAgICAgICAgICh5IC0gdGhpcy5oZWlnaHQgKiAwLjE1KSAqICh5IC0gdGhpcy5oZWlnaHQgKiAwLjE1KSA8PVxyXG4gICAgICAgICAgICAgICAgMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9tcHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQudGltZXJUaWNraW5nLnJlc3VtZVRpbWVyKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnBhdXNlYnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC50aW1lclRpY2tpbmcucGF1c2VUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgIG5ldyBQYXVzZVBvcFVwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuaWQpLCBzZWxmLmxldmVsU3RhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHMgb2YgZ3Muc3RvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54KSAqICh4IC0gcy54KSArICh5IC0gcy55KSAqICh5IC0gcy55KSkgPD0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkcmFnQXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdBdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2soJ2RyYWdNb25zdGVyQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoKHggLVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci54IC1cclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIud2lkdGggLyA0KSAqXHJcbiAgICAgICAgICAgICAgICAoeCAtXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci54IC1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLndpZHRoIC8gNCkgK1xyXG4gICAgICAgICAgICAgICAgKHkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueSAtXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci5oZWlnaHQgLyAyLjcpICpcclxuICAgICAgICAgICAgICAgICAgICAoeSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIuaGVpZ2h0IC8gMi43KSkgPD0gNjApIHtcclxuICAgICAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSAtOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnkgPSAtOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZS50ZXh0ID09IGdzLnB1enpsZS50YXJnZXRbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5waWNrZWRTdG9uZXMucHVzaChwaWNrZWRTdG9uZS50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3MucHV6emxlLnRhcmdldC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3MucHV6emxlLnRhcmdldC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Muc3RvbmVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrKHVuZGVmaW5lZCwgdHJ1ZSwgdHJ1ZSwgcGlja2VkU3RvbmUudGV4dCwgc2VsZi5waWNrZWRTdG9uZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5waWNrZWRTdG9uZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2sodW5kZWZpbmVkLCB0cnVlLCBmYWxzZSwgcGlja2VkU3RvbmUudGV4dCwgc2VsZi5waWNrZWRTdG9uZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBpY2tlZFN0b25lcy5wdXNoKHBpY2tlZFN0b25lLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncy5zdG9uZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjayh1bmRlZmluZWQsIGZhbHNlLCB0cnVlLCBwaWNrZWRTdG9uZS50ZXh0LCBzZWxmLnBpY2tlZFN0b25lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGlja2VkU3RvbmVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueCA9IHBpY2tlZFN0b25lLm9yaWd4O1xyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IHBpY2tlZFN0b25lLm9yaWd5O1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjaygnc3RvcERyYWdNb25zdGVyQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBudWxsO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBpZiAocGlja2VkU3RvbmUpIHtcclxuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSB4O1xyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXTtcclxuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGZFbGVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIHZhciBtb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJtb3VzZW1vdmVcIiwge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmRWxlbGVtZW50SWQuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgICAgICAgICB2YXIgbW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLCB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGZFbGVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVN0b25lcyh0aGlzLnN0b25lcG9zKTtcclxuICAgIH1cclxuICAgIHNldFByb21wdCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gdGhpcy53aWR0aCAqIDAuMDkgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGdzLnB1enpsZS5wcm9tcHQsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAqIDAuMjcpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgZm9yIChsZXQgcyBvZiBncy5zdG9uZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3c3RvbmUocywgdGhpcy5jYW52YXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXdzdG9uZShzLCBjYW52YXMpIHtcclxuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDEzO1xyXG4gICAgICAgIHZhciB0ZXh0Rm9udFNpemUgPSBjYW52YXMuaGVpZ2h0IC8gMjA7XHJcbiAgICAgICAgdmFyIGltYWdlQ2VudGVyT2Zmc2V0WCA9IGltYWdlU2l6ZSAvIDIuMztcclxuICAgICAgICB2YXIgaW1hZ2VDZW50ZXJPZmZzZXRZID0gaW1hZ2VTaXplIC8gMS41O1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2Uocy5pbWcsIHMueCAtIGltYWdlQ2VudGVyT2Zmc2V0WCwgcy55IC0gaW1hZ2VDZW50ZXJPZmZzZXRZLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRleHRGb250U2l6ZSArIFwicHggQXJpYWxcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocy50ZXh0LCBzLngsIHMueSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTdG9uZXMoc3RvbmVwb3MpIHtcclxuICAgICAgICB2YXIgcG9zcyA9IHN0b25lcG9zWzBdO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICBncy5zdG9uZXMuc3BsaWNlKDAsIGdzLnN0b25lcy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IHMgb2YgZ3MucHV6emxlLnN0b25lcykge1xyXG4gICAgICAgICAgICB2YXIgbnMgPSBuZXcgU3RvbmVDb25maWcocywgcG9zc1tpXVswXSwgcG9zc1tpXVsxXSk7XHJcbiAgICAgICAgICAgIGdzLnN0b25lcy5wdXNoKG5zKTtcclxuICAgICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUaW1lT3ZlciwgVGltZXRpY2tlckxheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuZXhwb3J0IGNsYXNzIFRpbWVyVGlja2luZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBsZXZlbFN0YXJ0KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGhUb0NsZWFyID0gdGhpcy5nYW1lLndpZHRoIC8gMy40O1xyXG4gICAgICAgIHRoaXMubWF4TGltaXRFeGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzVGltZXJFbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVyUnVubmluZ091dCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBUaW1ldGlja2VyTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiNFwiO1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWF0aW9uKDApO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVCYWNrZ3JvdWQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGltZXJfZnVsbCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMudGltZXJfZnVsbC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy90aW1lcl9mdWxsLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMudGltZXJfZnVsbC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmRyYXcoKTtcclxuICAgICAgICAgICAgc2VsZi5iZWdpblRpbWVyT25TdGFydCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUaW1lclN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5BbmRyb2lkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyICs9IDAuMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgKz0gMC4wNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPiA1NSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA8IDEwMCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPiA1NCAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMuaXNUaW1lclJ1bm5pbmdPdXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lclJ1bm5pbmdPdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbFN0YXJ0LmF1ZGlvLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy90aW1lb3V0Lm1wM1wiLCBUaW1lT3Zlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyIDwgNTUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyID4gNTQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lclJ1bm5pbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lckVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lckVuZGVkID8gdGhpcy5sZXZlbFN0YXJ0LmNoYW5nZVB1enpsZSgpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYmVnaW5UaW1lck9uU3RhcnQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VCdXR0b25DbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuaXNUaW1lclN0YXJ0ZWQgJiYgc2VsZi50aW1lciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1RpbWVyU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxuICAgIHN0b3BUaW1lcigpIHtcclxuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaW1lciBTdG9wcGVkXCIpO1xyXG4gICAgfVxyXG4gICAgcGF1c2VUaW1lcigpIHtcclxuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbkNsaWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVzdW1lVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbkNsaWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy50aW1lcl9mdWxsLCB0aGlzLmdhbWUud2lkdGggKiAwLjEyLCB0aGlzLmhlaWdodCAqIDAuMDk5LCB0aGlzLmdhbWUud2lkdGggLSA1MCwgdGhpcy5oZWlnaHQgKiAwLjA1KTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmJlZ2luVGltZXJPblN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVHV0b3JpYWxMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbnZhciBzZWxmO1xyXG52YXIgdHV0b3JpYWxJbWcgPSBuZXcgSW1hZ2UoKTtcclxudHV0b3JpYWxJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvdHV0b3JpYWxfaGFuZC5wbmdcIjtcclxubGV0IHN0YXJ0WCA9IDA7XHJcbmxldCBzdGFydFkgPSAwO1xyXG5sZXQgZW5kWCA9IDIwMDtcclxubGV0IGVuZFkgPSAxMDA7XHJcbmV4cG9ydCBjbGFzcyBUdXRvcmlhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB6aW5kZXgpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuemluZGV4ID0gemluZGV4O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmdhbWUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmdhbWUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFR1dG9yaWFsTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI4XCI7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xyXG4gICAgICAgIHN0YXJ0WCA9IHRoaXMuZ2FtZS53aWR0aCAvIDUgLSAzMixcclxuICAgICAgICAgICAgc3RhcnRZID0gdGhpcy5nYW1lLmhlaWdodCAvIDIuOCAtIDMyLFxyXG4gICAgICAgICAgICBlbmRYID0gdGhpcy53aWR0aCAvIDI7XHJcbiAgICAgICAgZW5kWSA9IHRoaXMuaGVpZ2h0IC8gMiAtIDgyO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZUltYWdlKCk7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQgYW5kIHRvdWNoZWQnKTtcclxuICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNoYW5nZVppbmRleChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICAgIGRlbGV0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgYW5pbWF0ZUltYWdlKCkge1xyXG4gICAgICAgIGxldCB4ID0gc3RhcnRYO1xyXG4gICAgICAgIGxldCB5ID0gc3RhcnRZO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gKGVuZFggLSBzdGFydFgpIC8gNjA7XHJcbiAgICAgICAgY29uc3QgZHkgPSAoZW5kWSAtIHN0YXJ0WSkgLyA2MDtcclxuICAgICAgICBsZXQgYWJzZHggPSBNYXRoLmFicyhkeCk7XHJcbiAgICAgICAgbGV0IGFic2R5ID0gTWF0aC5hYnMoZHkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgoeCA8PSBlbmRYICsgYWJzZHggJiYgeCA+PSBlbmRYIC0gYWJzZHgpICYmICh5IDw9IGVuZFkgKyBhYnNkeSAmJiB5ID49IGVuZFkgLSBhYnNkeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2VsZi5kZWxldGVDYW52YXMoKTsgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHggPSAoZHggPj0gMCkgPyB4ICsgYWJzZHggOiB4IC0gYWJzZHg7XHJcbiAgICAgICAgICAgICAgICB5ID0gKGR5ID49IDApID8geSArIGFic2R5IDogeSAtIGFic2R5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KHgsIHkpO1xyXG4gICAgICAgICAgICB9LCAxNik7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KHgsIHkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgLy8gQ2xlYXIgdGhlIGNhbnZhc1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodHV0b3JpYWxJbWcsIHgsIHkpO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XHJcbmNvbnN0IFVSTCA9IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2Z0bV9cIiArIGxhbmcgKyBcIi5qc29uXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGdG1EYXRhKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKFVSTCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAvLyBsZXQgZCA9IHtcclxuICAgICAgICAvLyAgICAgXCJPdGhlckF1ZGlvc1wiOiBudWxsLFxyXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrVGV4dHNcIjogbnVsbCxcclxuICAgICAgICAvLyAgICAgXCJMZXZlbHNcIjogbnVsbCxcclxuICAgICAgICAvLyAgICAgXCJGZWVkYmFja0F1ZGlvc1wiOiBudWxsLFxyXG4gICAgICAgIC8vICAgICBcIlJpZ2h0VG9MZWZ0XCI6IG51bGxcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIHlpZWxkIGdldEZ0bURhdGEoKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBEYXRhTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3Iob3RoZXJBdWRpb3MsIGxldmVscywgZmVlZGJhY2tUZXh0cywgcmlnaHRUb0xlZnQsIGZlZWRiYWNrQXVkaW9zKSB7XHJcbiAgICAgICAgdGhpcy5vdGhlckF1ZGlvcyA9IG5ldyBPdGhlckF1ZGlvcyhvdGhlckF1ZGlvcyk7XHJcbiAgICAgICAgdGhpcy5sZXZlbHMgPSB0aGlzLmdldExldmVscyhsZXZlbHMpO1xyXG4gICAgICAgIHRoaXMuRmVlZGJhY2tUZXh0cyA9IG5ldyBGZWVkYmFja1RleHRzKGZlZWRiYWNrVGV4dHMpO1xyXG4gICAgICAgIHRoaXMuRmVlZGJhY2tBdWRpb3MgPSBuZXcgRmVlZGJhY2tBdWRpb3MoZmVlZGJhY2tBdWRpb3MpO1xyXG4gICAgICAgIHRoaXMucmlnaHRUb0xlZnQgPSByaWdodFRvTGVmdDtcclxuICAgIH1cclxuICAgIGdldExldmVscyhsZXZlbHMpIHtcclxuICAgICAgICBsZXQgbGV2ZWxBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldmVsQXJyYXkucHVzaChuZXcgTGV2ZWxzKGxldmVsc1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGV2ZWxBcnJheTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgT3RoZXJBdWRpb3Mge1xyXG4gICAgY29uc3RydWN0b3Iob3RoZXJBdWRpb3MpIHtcclxuICAgICAgICB0aGlzLnNlbGN0WW91clBsYXllciA9IG90aGVyQXVkaW9zW1wiU2VsZWN0IHlvdXIgcGxheWVyXCJdO1xyXG4gICAgICAgIHRoaXMud2F0Y2hNZUdyb3cgPSBvdGhlckF1ZGlvc1tcIldhdGNoIG1lIGdyb3dcIl07XHJcbiAgICAgICAgdGhpcy5hcmVZb3VTdXJlID0gb3RoZXJBdWRpb3NbXCJBcmUgeW91IHN1cmVcIl07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrVGV4dHMge1xyXG4gICAgY29uc3RydWN0b3IoZmVlZGJhY2tUZXh0cykge1xyXG4gICAgICAgIHRoaXMuZmFudGFzdGljID0gZmVlZGJhY2tUZXh0c1swXTtcclxuICAgICAgICB0aGlzLmdyZWF0ID0gZmVlZGJhY2tUZXh0c1sxXTtcclxuICAgICAgICB0aGlzLmFtYXppbmcgPSBmZWVkYmFja1RleHRzWzJdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0F1ZGlvcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja0F1ZGlvcykge1xyXG4gICAgICAgIHRoaXMuZmFudGFzdGljID0gZmVlZGJhY2tBdWRpb3NbMF07XHJcbiAgICAgICAgdGhpcy5ncmVhdCA9IGZlZWRiYWNrQXVkaW9zWzFdO1xyXG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrQXVkaW9zWzJdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMZXZlbHMge1xyXG4gICAgY29uc3RydWN0b3IobGV2ZWxzKSB7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVzID0gdGhpcy5nZXRQdXp6bGVEYXRhKGxldmVscyk7XHJcbiAgICAgICAgdGhpcy5sZXZlbE1ldGEgPSBuZXcgTGV2ZWxNZXRhKGxldmVscy5MZXZlbE1ldGEpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxOdW1iZXIgPSBsZXZlbHMuTGV2ZWxOdW1iZXI7XHJcbiAgICB9XHJcbiAgICBnZXRQdXp6bGVEYXRhKGxldmVscykge1xyXG4gICAgICAgIGxldCBwdXp6bGVPYmplY3RzID0gW107XHJcbiAgICAgICAgbGV2ZWxzLlB1enpsZXMubWFwKChwdXp6bGVEYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBwdXp6bGVPYmplY3RzLnB1c2gobmV3IFB1enpsZXMocHV6emxlRGF0YSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwdXp6bGVPYmplY3RzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQdXp6bGVzIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1enpsZSkge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudE51bWJlciA9IHB1enpsZS5TZWdtZW50TnVtYmVyO1xyXG4gICAgICAgIHRoaXMucHJvbXB0ID0gbmV3IFByb21wdChwdXp6bGUucHJvbXB0KTtcclxuICAgICAgICB0aGlzLmZvaWxTdG9uZXMgPSB0aGlzLmdldEZvaWxTdG9uZXMocHV6emxlKTtcclxuICAgICAgICB0aGlzLnRhcmdldFN0b25lcyA9IHRoaXMuZ2V0VGFyZ2V0U3RvbmVzKHB1enpsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRGb2lsU3RvbmVzKHB1enpsZSkge1xyXG4gICAgICAgIGxldCBmb2lsU3RvbmVBcnJheSA9IFtdO1xyXG4gICAgICAgIHB1enpsZS5mb2lsc3RvbmVzLm1hcCgoc3RvbmVzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBmb2lsU3RvbmVBcnJheS5wdXNoKHN0b25lcy5TdG9uZVRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmb2lsU3RvbmVBcnJheTtcclxuICAgIH1cclxuICAgIGdldFRhcmdldFN0b25lcyhwdXp6bGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0U3RvbmVBcnJheSA9IFtdO1xyXG4gICAgICAgIHB1enpsZS50YXJnZXRzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRhcmdldFN0b25lQXJyYXkucHVzaChzdG9uZXMuU3RvbmVUZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0U3RvbmVBcnJheTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRm9pbFN0b25lIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0b25lVGV4dCkge1xyXG4gICAgICAgIHRoaXMuc3RvbmVUZXh0ID0gc3RvbmVUZXh0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBUYXJnZXRTdG9uZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0b25lVGV4dDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUHJvbXB0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb21wdCkge1xyXG4gICAgICAgIHRoaXMucHJvbXB0VGV4dCA9IHByb21wdC5Qcm9tcHRUZXh0O1xyXG4gICAgICAgIHRoaXMucHJvbXB0QXVkaW8gPSBwcm9tcHQuUHJvbXB0QXVkaW87XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIExldmVsTWV0YSB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbE1ldGEpIHtcclxuICAgICAgICB0aGlzLnByb21wdEZhZGVPdXQgPSBsZXZlbE1ldGEuUHJvbXB0RmFkZW91dDtcclxuICAgICAgICB0aGlzLmxldHRlckdyb3VwID0gbGV2ZWxNZXRhLkxldHRlckdyb3VwO1xyXG4gICAgICAgIHRoaXMubGV2ZWxOdW1iZXIgPSBsZXZlbE1ldGEuTGV2ZWxOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5wcm90b1R5cGUgPSBsZXZlbE1ldGEuUHJvbXB0VHlwZTtcclxuICAgICAgICB0aGlzLmxldmVsVHlwZSA9IGxldmVsTWV0YS5MZXZlbFR5cGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRGF0YSB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbE5hbWUsIGxldmVsTnVtYmVyLCBsZXZlbFNjb3JlLCBsZXZlbFN0YXIpIHtcclxuICAgICAgICAodGhpcy5sZXZlbE5hbWUgPSBsZXZlbE5hbWUpLFxyXG4gICAgICAgICAgICAodGhpcy5sZXZlbE51bWJlciA9IGxldmVsTnVtYmVyKSxcclxuICAgICAgICAgICAgKHRoaXMubGV2ZWxTY29yZSA9IGxldmVsU2NvcmUpLFxyXG4gICAgICAgICAgICAodGhpcy5sZXZlbFN0YXIgPSBsZXZlbFN0YXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRhVG9TdG9yYWdlKHByb2ZpbGVEYXRhKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ0RhdGEgPSBnZXREYXRhZnJvbVN0b3JhZ2UoKVxyXG4gICAgICAgID8ganNvblRvQXJyYXkoZ2V0RGF0YWZyb21TdG9yYWdlKCkpXHJcbiAgICAgICAgOiBbXTtcclxuICAgIHByb2ZpbGVEYXRhID8gZGF0YVB1c2hUb0FycmF5KGV4aXN0aW5nRGF0YSwgcHJvZmlsZURhdGEpIDogbnVsbDtcclxuICAgIGV4aXN0aW5nRGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEubGV2ZWxOdW1iZXIgPiBiLmxldmVsTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nRGF0YSk7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxhbmcgKyBcIlByb2ZpbGVcIiwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24ganNvblRvQXJyYXkoanNvbikge1xyXG4gICAgdmFyIGRhdGEgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4ganNvbikge1xyXG4gICAgICAgIGRhdGEucHVzaChqc29uW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbmZ1bmN0aW9uIGRhdGFQdXNoVG9BcnJheShqc29uRGF0YSwgcHJvZmlsZURhdGEpIHtcclxuICAgIHZhciBkYXRhTm90RXhpc3QgPSB0cnVlO1xyXG4gICAganNvbkRhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJzZUludChkYXRhLmxldmVsTnVtYmVyKSA9PSBwYXJzZUludChwcm9maWxlRGF0YS5sZXZlbE51bWJlcikpIHtcclxuICAgICAgICAgICAgZGF0YU5vdEV4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRhdGEubGV2ZWxTY29yZSA8IHByb2ZpbGVEYXRhLmxldmVsU2NvcmVcclxuICAgICAgICAgICAgICAgID8gKGRhdGEubGV2ZWxTY29yZSA9IHByb2ZpbGVEYXRhLmxldmVsU2NvcmUpXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGRhdGEubGV2ZWxTdGFyIDwgcHJvZmlsZURhdGEubGV2ZWxTdGFyXHJcbiAgICAgICAgICAgICAgICA/IChkYXRhLmxldmVsU3RhciA9IHByb2ZpbGVEYXRhLmxldmVsU3RhcilcclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRhdGFOb3RFeGlzdCA/IGpzb25EYXRhLnB1c2gocHJvZmlsZURhdGEpIDogbnVsbDtcclxuICAgIHJldHVybiBqc29uRGF0YTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YWZyb21TdG9yYWdlKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obGFuZyArIFwiUHJvZmlsZVwiKSB8fCBcInt9XCIpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lCOGMybEJWaTI2dTdZUkw5c3hPUDk3VWFxM3lOOGhUbDRcIixcclxuICBhdXRoRG9tYWluOiBcImZ0bS1iOWQ5OS5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2Z0bS1iOWQ5OS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJmdG0tYjlkOTlcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImZ0bS1iOWQ5OS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjYwMjQwMjM4Nzk0MVwiLFxyXG4gIGFwcElkOiBcIjE6NjAyNDAyMzg3OTQxOndlYjphNjNmNGVhZGRjOTQ5ZjUzOWRlMTBjXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUZWTFNON0Q3Tk1cIixcclxufTtcclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBmaXJlYmFzZUNvbmZpZyB9IGZyb20gXCIuL2ZpcmViYXNlX2NvbmZpZ1wiO1xyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VJbnRlZ3JhdGlvbiB7XHJcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZUZpcmViYXNlKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXRpY3MgPSBmaXJlYmFzZS5hbmFseXRpY3ModGhpcy5maXJlYmFzZUFwcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2Vzc2lvbkVuZCgpIHtcclxuICAgICAgICB0aGlzLmFuYWx5dGljcy5sb2dFdmVudChcInNlc3Npb25fZW5kXCIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGN1c3RvbUV2ZW50cyhrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXRpY3MubG9nRXZlbnQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IHsgR2FtZUVuZExheWVyLCBsb2FkSW1hZ2VzIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxudmFyIGltYWdlcyA9IHtcclxuICAgIGJnSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9iZ192MDEuanBnXCIsXHJcbiAgICBoaWxsSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9oaWxsX3YwMS5wbmdcIixcclxuICAgIHRpbWVyX2VtcHR5OiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lcl9lbXB0eS5wbmdcIixcclxuICAgIHBpbGxlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvVG90ZW1fdjAyX3YwMS5wbmdcIixcclxuICAgIGdyYXNzSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9GR19hX3YwMS5wbmdcIixcclxuICAgIGZlbmNoSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9mZW5jZV92MDEucG5nXCIsXHJcbiAgICBiaWdNb25zdGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9mdG1fYm9udXNfbGV2ZWxfbW9uc3RlcnMucG5nXCJcclxufTtcclxudmFyIHNlbGY7XHJcbmV4cG9ydCBjbGFzcyBHYW1lRW5kU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGdhbWUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIEdhbWVFbmRMYXllcik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY3JpcHRpb24tdGV4dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY3JpcHRpb24tdGV4dFwiKS5pbm5lckhUTUwgPSBnbG9iYWxUaGlzLmRlc2NyaXB0aW9uVGV4dDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJhY2tncm91ZCgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY3JpcHRpb24tdGV4dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcclxuICAgICAgICAvL2RlbGV0ZSB0aGlzO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgIH1cclxuICAgIGNyZWF0ZUJhY2tncm91ZCgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgbG9hZEltYWdlcyhpbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5iZ0ltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnBpbGxlckltZywgd2lkdGggKiAwLjYsIGhlaWdodCAvIDYsIHdpZHRoLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuZmVuY2hJbWcsIC13aWR0aCAqIDAuNCwgaGVpZ2h0IC8gMywgd2lkdGgsIGhlaWdodCAvIDMpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5oaWxsSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJpZ01vbnN0ZXJJbWcsIHdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiAtIGhlaWdodCAqIDAuMjUsIHdpZHRoIC8gMS43LCBoZWlnaHQgLyAyLjUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxTdGFydFNjZW5lIH0gZnJvbSBcIi4vbGV2ZWwtc3RhcnQtc2NlbmUuanNcIjtcclxudmFyIGFuaW1hdGlvbkZyYW1lO1xyXG52YXIgc2VsZjtcclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgcHV6emxlRGF0YSwgZ2FtZVNjZW5lQ2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgPVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yZU1vbnN0ZXJQaGFzZU51bWJlcikgfHwgMTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IExldmVsU3RhcnRTY2VuZSh7XHJcbiAgICAgICAgICAgIGdhbWU6IHRoaXMsXHJcbiAgICAgICAgICAgIGxldmVsRGF0YTogcHV6emxlRGF0YSxcclxuICAgICAgICAgICAgbGV2ZWxTdGFydENhbGxCYWNrOiB0aGlzLmxldmVsU3RhcnRDYWxsQmFjayxcclxuICAgICAgICAgICAgbW9uc3RlclBoYXNlTnVtYmVyOiB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlcixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdhbWVTY2VuZUNhbGxCYWNrID0gZ2FtZVNjZW5lQ2FsbEJhY2s7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG4gICAgbGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lU2NlbmVDYWxsQmFjayhidXR0b25fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwibmV4dF9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lU2NlbmVDYWxsQmFjayhidXR0b25fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2soYnV0dG9uX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgc2VsZi5zY2VuZSA/IChzZWxmLnNjZW5lLnN0b25lcyA/IHNlbGYuc2NlbmUuc3RvbmVzLnVwZGF0ZSgpIDogbnVsbCkgOiBudWxsO1xyXG4gICAgICAgIHNlbGYuc2NlbmUgPyBzZWxmLnNjZW5lLnVwZGF0ZSgpIDogbnVsbDtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5jcmVhdGVCYWNrZ3JvdWQoKTtcclxuICAgIH1cclxuICAgIGFuaW1hdGlvbigpIHtcclxuICAgICAgICBzZWxmLnVwZGF0ZSgpO1xyXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNlbGYuYW5pbWF0aW9uKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxuaW1wb3J0IHsgSW50cm9NdXNpYywgTGV2ZWxFbmRBdWRpbywgTGV2ZWxFbmRCdXR0b25zTGF5ZXIsIExldmVsRW5kTGF5ZXIsIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzXCI7XHJcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvbmV4dF9idXR0b24uanNcIjtcclxuaW1wb3J0IFJldHJ5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvcmV0cnlfYnV0dG9uLmpzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVEYXRhLCBzZXREYXRhVG9TdG9yYWdlIH0gZnJvbSBcIi4uL2RhdGEvcHJvZmlsZS1kYXRhLmpzXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlSW50ZWdyYXRpb24gfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VfaW50ZWdyYXRpb24uanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxudmFyIGF1ZGlvVXJsID0ge1xyXG4gICAgbGV2ZWxXaW46IFwiLi9hc3NldHMvYXVkaW9zL0xldmVsV2luRmFuZmFyZS5tcDNcIixcclxuICAgIGxldmVsTG9zZTogXCIuL2Fzc2V0cy9hdWRpb3MvTGV2ZWxMb3NlRmFuZmFyZS5tcDNcIixcclxuICAgIGludHJvOiBcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIixcclxufTtcclxuZXhwb3J0IGNsYXNzIExldmVsRW5kU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBzY29yZSwgbW9uc3RlciwgbGV2ZWxFbmRDYWxsQmFjaywgbGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgbW9uc3RlclBoYXNlTnVtYmVyLCBsZXZlbFN0YXJ0VGltZSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyID0gbW9uc3RlcjtcclxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IGxldmVsRGF0YTtcclxuICAgICAgICB0aGlzLmlzR2FtZVBhdXNlID0gaXNHYW1lUGF1c2U7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgPSBtb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnRUaW1lID0gbGV2ZWxTdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcclxuICAgICAgICB0aGlzLnN0YXJDb3VudCA9XHJcbiAgICAgICAgICAgIHNjb3JlID09IDIwMFxyXG4gICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICA6IHNjb3JlID09IDMwMFxyXG4gICAgICAgICAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICAgICAgICAgIDogc2NvcmUgPT0gNDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNjb3JlID09IDUwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmxldmVsRW5kRmlyZWJhc2VFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmxldmVsRW5kQ2FsbEJhY2sgPSBsZXZlbEVuZENhbGxCYWNrO1xyXG4gICAgICAgIHNldERhdGFUb1N0b3JhZ2UobmV3IFByb2ZpbGVEYXRhKGxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxUeXBlLCBsZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyLCBzY29yZSwgdGhpcy5zdGFyQ291bnQpKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFyQ291bnQgPD0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubGV2ZWxMb3NlLCBMZXZlbEVuZEF1ZGlvKTtcclxuICAgICAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL3NhZDFcIiArIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc2NlbmUuYXVkaW8ucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL2ludHJvLndhdlwiLCBJbnRyb011c2ljKTtcclxuICAgICAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2hhcHB5MVwiICsgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNjZW5lLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5sZXZlbFdpbiwgTGV2ZWxFbmRBdWRpbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIiwgSW50cm9NdXNpYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wYXVzZVNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZVppbmRleCg5KTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgTGV2ZWxFbmRMYXllcik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLnpJbmRleCA9IFwiOFwiO1xyXG4gICAgICAgIHRoaXMuYm90dG9uTGF5ZXIgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIExldmVsRW5kQnV0dG9uc0xheWVyKTtcclxuICAgICAgICB0aGlzLmJvdHRvbkNvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJvdHRvbkxheWVyKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3R0b25MYXllcikuc3R5bGUuekluZGV4ID1cclxuICAgICAgICAgICAgXCI5XCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cclxuICAgICAgICAgICAgXCIjMDA0MDdCXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vYXNzZXRzL2ltYWdlcy9XSU5fc2NyZWVuX2JnLnBuZycpXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZFNpemUgPVxyXG4gICAgICAgICAgICBcImNvbnRhaW5cIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPVxyXG4gICAgICAgICAgICBcImNlbnRlclwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPVxyXG4gICAgICAgICAgICBcIm5vLXJlcGVhdFwiO1xyXG4gICAgICAgIHZhciBzdGFyMSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHN0YXIxLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIxLnBuZ1wiO1xyXG4gICAgICAgIHZhciBzdGFyMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHN0YXIyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIyLnBuZ1wiO1xyXG4gICAgICAgIHZhciBzdGFyMyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHN0YXIzLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIzLnBuZ1wiO1xyXG4gICAgICAgIHNlbGYuZHJhd1N0YXJ0cyhzZWxmLCBzdGFyMSwgc3RhcjIsIHN0YXIzKTtcclxuICAgICAgICBzZWxmLm5leHRCdXR0b24gPVxyXG4gICAgICAgICAgICBzZWxmLnN0YXJDb3VudCA+PSAyXHJcbiAgICAgICAgICAgICAgICA/IG5ldyBOZXh0QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC44IC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjcpXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgc2VsZi5yZXRyeUJ1dHRvbiA9IG5ldyBSZXRyeUJ1dHRvbihzZWxmLmNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLnN0YXJDb3VudCA+PSAyXHJcbiAgICAgICAgICAgID8gc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDJcclxuICAgICAgICAgICAgOiBzZWxmLmNhbnZhcy53aWR0aCAqIDAuOCAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC43KTtcclxuICAgICAgICBzZWxmLmNsb3NlQnV0dG9uID0gbmV3IENsb3NlQnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC4yIC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYm90dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxmLmJvdHRvbkxheWVyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLm5leHRCdXR0b24gJiYgc2VsZi5uZXh0QnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcIm5leHRfYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnJldHJ5QnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcInJldHJ5X2J1dHRvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wYXVzZVNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kQ2FsbEJhY2soXCJjbG9zZV9idXR0b25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRyYXdTdGFydHMoc2VsZiwgc3RhcjEsIHN0YXIyLCBzdGFyMykge1xyXG4gICAgICAgIHN0YXIxLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXJDb3VudCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHN0YXIxLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGFyMi5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zdGFyQ291bnQgPD0gMyAmJiBzZWxmLnN0YXJDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2Uoc3RhcjIsIHNlbGYuY2FudmFzLndpZHRoICogMC41IC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjE1LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RhcjMub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc3RhckNvdW50ID49IDMpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2Uoc3RhcjMsIHNlbGYuY2FudmFzLndpZHRoICogMC44MiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoc2VsZikge1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmJvdHRvbkxheWVyKTtcclxuICAgIH1cclxuICAgIGxldmVsRW5kRmlyZWJhc2VFdmVudHMoKSB7XHJcbiAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5jdXN0b21FdmVudHMoXCJsZXZlbF9jb21wbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICBkYXRlX3RpbWU6IHRoaXMubGV2ZWxFbmRUaW1lLmdldERhdGUoKSArXHJcbiAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRW5kVGltZS5nZXRNb250aCgpICtcclxuICAgICAgICAgICAgICAgIDEgK1xyXG4gICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUuZ2V0RnVsbFllYXIoKSArXHJcbiAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRW5kVGltZS5nZXRIb3VycygpICtcclxuICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxFbmRUaW1lLmdldE1pbnV0ZXMoKSArXHJcbiAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRW5kVGltZS5nZXRTZWNvbmRzKCksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3Nfb3JfZmFpbHVyZTogdGhpcy5zdGFyQ291bnQgPj0gMyA/IFwic3VjY2Vzc1wiIDogXCJmYWlsdXJlXCIsXHJcbiAgICAgICAgICAgIGxldmVsX251bWJlcjogdGhpcy5sZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyLFxyXG4gICAgICAgICAgICBudW1iZXJfb2Zfc3VjY2Vzc2Z1bF9wdXp6bGVzOiB0aGlzLnNjb3JlIC8gMTAwLFxyXG4gICAgICAgICAgICBmdG1fbGFuZ3VhZ2U6IGxhbmcsXHJcbiAgICAgICAgICAgIHByb2ZpbGVfbnVtYmVyOiAwLFxyXG4gICAgICAgICAgICB2ZXJzaW9uX251bWJlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJzaW9uLWluZm8taWRcIikuaW5uZXJIVE1MLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogTWF0aC5hYnMoTWF0aC5jZWlsKCh0aGlzLmxldmVsRW5kVGltZS5nZXRUaW1lKCkgLSB0aGlzLmxldmVsU3RhcnRUaW1lKSAvIDEwMDApKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBMZXZlbENvbmZpZyB9IGZyb20gXCIuLi9jb21tb24vbGV2ZWwtY29uZmlnLmpzXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkNsaWNrLCBJbnRyb011c2ljLCBMZXZlbFNlbGVjdGlvbkxheWVyLCBQcmV2aW91c1BsYXllZExldmVsLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY29tbW9uL3NvdW5kLmpzXCI7XHJcbmltcG9ydCB7IGdldERhdGFmcm9tU3RvcmFnZSB9IGZyb20gXCIuLi9kYXRhL3Byb2ZpbGUtZGF0YS5qc1wiO1xyXG52YXIgbWFwSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG5tYXBJY29uLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcEljb24ucG5nXCI7XHJcbnZhciBtYXBMb2NrID0gbmV3IEltYWdlKCk7XHJcbm1hcExvY2suc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwTG9jay5wbmdcIjtcclxudmFyIG1hcCA9IG5ldyBJbWFnZSgpO1xyXG5tYXAuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwLmpwZ1wiO1xyXG52YXIgc3RhciA9IG5ldyBJbWFnZSgpO1xyXG5zdGFyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3N0YXIucG5nXCI7XHJcbnZhciBuZXh0YnRuID0gbmV3IEltYWdlKCk7XHJcbm5leHRidG4uc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbmV4dF9idG4ucG5nXCI7XHJcbnZhciBiYWNrYnRuID0gbmV3IEltYWdlKCk7XHJcbmJhY2tidG4uc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja19idG4ucG5nXCI7XHJcbnZhciBsZXZlbE51bWJlcjtcclxudmFyIHNlbGY7XHJcbnZhciB1bmxvY2tMZXZlbEluZGV4ID0gLTE7XHJcbnZhciBwcmV2aW91c1BsYXllZExldmVsID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oUHJldmlvdXNQbGF5ZWRMZXZlbCkpIHwgMDtcclxudmFyIGxldmVsO1xyXG5pZiAocHJldmlvdXNQbGF5ZWRMZXZlbCAhPSBudWxsKSB7XHJcbiAgICBsZXZlbCA9IDEwICogTWF0aC5mbG9vcihwcmV2aW91c1BsYXllZExldmVsIC8gMTApO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBMZXZlbFNlbGVjdGlvblNjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmxldmVsc1NlY3Rpb25Db3VudCA9XHJcbiAgICAgICAgICAgIHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTAgPiBNYXRoLmZsb29yKHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTApXHJcbiAgICAgICAgICAgICAgICA/IE1hdGguZmxvb3Ioc2VsZi5kYXRhLmxldmVscy5sZW5ndGggLyAxMCkgKyAxXHJcbiAgICAgICAgICAgICAgICA6IE1hdGguZmxvb3Ioc2VsZi5kYXRhLmxldmVscy5sZW5ndGggLyAxMCk7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3RhcnMoKTtcclxuICAgIH1cclxuICAgIGdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChidXR0b25fbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibmV4dF9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUoKGxldmVsTnVtYmVyICs9IDEpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXRyeV9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUobGV2ZWxOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlX2J1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNvdW5kLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIiwgSW50cm9NdXNpYyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXdTdGFycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuc291bmQucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL2ludHJvLndhdlwiLCBJbnRyb011c2ljKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc291bmQuYWN0aXZlU2NyZWVuKCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBMZXZlbFNlbGVjdGlvbkxheWVyKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgICAgIHRoaXMuc3RhcnNJZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIExldmVsU2VsZWN0aW9uTGF5ZXIgKyAxKTtcclxuICAgICAgICB0aGlzLnN0YXJzQ2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZCk7XHJcbiAgICAgICAgdGhpcy5zdGFyc0NvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhcnNDYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiM1wiO1xyXG4gICAgICAgIHRoaXMubGV2ZWxCdXR0b25wb3MgPSBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMF0sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEwXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDIuOCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMCxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gM10sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDNdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMyArIHRoaXMuY2FudmFzLndpZHRoIC8gMi44LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDMsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMTAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOF0sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzICsgdGhpcy5jYW52YXMud2lkdGggLyAyLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS44LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDIuNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVUb3VjaFN0YXJ0LCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZClcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHhEb3duID0gbnVsbDtcclxuICAgICAgICB2YXIgeURvd24gPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvdWNoZXMoZXZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoZXZ0LnRvdWNoZXMgfHwgLy8gYnJvd3NlciBBUElcclxuICAgICAgICAgICAgICAgIGV2dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMpOyAvLyBqUXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RUb3VjaCA9IGdldFRvdWNoZXMoZXZ0KVswXTtcclxuICAgICAgICAgICAgeERvd24gPSBmaXJzdFRvdWNoLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHlEb3duID0gZmlyc3RUb3VjaC5jbGllbnRZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmICgheERvd24gfHwgIXlEb3duKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHhVcCA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciB5VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgICAgICAgICB2YXIgeERpZmYgPSB4RG93biAtIHhVcDtcclxuICAgICAgICAgICAgdmFyIHlEaWZmID0geURvd24gLSB5VXA7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGlmZikgPiBNYXRoLmFicyh5RGlmZikpIHtcclxuICAgICAgICAgICAgICAgIC8qbW9zdCBzaWduaWZpY2FudCovXHJcbiAgICAgICAgICAgICAgICBpZiAoeERpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgKyAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3KGxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kb3duQnV0dG9uKGxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLyogcmlnaHQgc3dpcGUgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgLSAxMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3KGxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogbGVmdCBzd2lwZSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHlEaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGRvd24gc3dpcGUgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHVwIHN3aXBlICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogcmVzZXQgdmFsdWVzICovXHJcbiAgICAgICAgICAgIHhEb3duID0gbnVsbDtcclxuICAgICAgICAgICAgeURvd24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBpZiAoeCA+PSBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNyAmJlxyXG4gICAgICAgICAgICAgICAgeCA8IHNlbGYuY2FudmFzLndpZHRoICogMC43ICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTAgJiZcclxuICAgICAgICAgICAgICAgIHkgPiBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgJiZcclxuICAgICAgICAgICAgICAgIHkgPCBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgKyBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgKyAxMDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA+PSBzZWxmLmNhbnZhcy53aWR0aCAvIDEwICYmXHJcbiAgICAgICAgICAgICAgICB4IDwgc2VsZi5jYW52YXMud2lkdGggLyAxMCArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwICYmXHJcbiAgICAgICAgICAgICAgICB5ID4gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICYmXHJcbiAgICAgICAgICAgICAgICB5IDwgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTApIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbCAtIDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHNlbGYubGV2ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54IC0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMjApICpcclxuICAgICAgICAgICAgICAgICAgICAoeCAtIHMueCAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSArXHJcbiAgICAgICAgICAgICAgICAgICAgKHkgLSBzLnkgLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoeSAtIHMueSAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSkgPCA0NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmluZGV4ICsgbGV2ZWwgLSAxIDw9IHVubG9ja0xldmVsSW5kZXggKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiLCBCdXR0b25DbGljayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQucGF1c2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE51bWJlciA9IHMuaW5kZXggKyBsZXZlbCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRHYW1lKGxldmVsTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVMZXZlbEJ1dHRvbnModGhpcy5sZXZlbEJ1dHRvbnBvcyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVMZXZlbEJ1dHRvbnMobGV2ZWxCdXR0b25wb3MpIHtcclxuICAgICAgICB2YXIgcG9zcyA9IGxldmVsQnV0dG9ucG9zWzBdO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IDEwOyBzKyspIHtcclxuICAgICAgICAgICAgdmFyIG5zID0gbmV3IExldmVsQ29uZmlnKHBvc3NbaV1bMF0sIHBvc3NbaV1bMV0sIGkgKyAxKTtcclxuICAgICAgICAgICAgc2VsZi5sZXZlbHMucHVzaChucyk7XHJcbiAgICAgICAgICAgIGkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3KGxldmVsKTtcclxuICAgICAgICB0aGlzLmRvd25CdXR0b24obGV2ZWwpO1xyXG4gICAgfVxyXG4gICAgZHJhdyhsZXZlbCkge1xyXG4gICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3bGV2ZWwocywgc2VsZi5jYW52YXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvd25CdXR0b24obGV2ZWwpIHtcclxuICAgICAgICB2YXIgaW1hZ2VTaXplID0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTA7XHJcbiAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG5leHRidG4sIHRoaXMuY2FudmFzLndpZHRoICogMC43LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjMsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldmVsICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShiYWNrYnRuLCB0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjMsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKGxldmVsICE9IDApIHtcclxuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMzAwLCA1MDAsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5yb3RhdGUoOTApO1xyXG4gICAgICAgIC8vICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShuZXh0LCAzMDAsIDUwMCwgaW1hZ2VTaXplLCBpbWFnZVNpemUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGRyYXdsZXZlbChzLCBjYW52YXMpIHtcclxuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XHJcbiAgICAgICAgdmFyIHRleHRGb250U2l6ZSA9IGltYWdlU2l6ZSAvIDY7XHJcbiAgICAgICAgaWYgKHMuaW5kZXggKyBsZXZlbCA8PSBzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG1hcEljb24sIHMueCwgcy55LCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gdGV4dEZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHMuaW5kZXggKyBsZXZlbCwgcy54ICsgaW1hZ2VTaXplIC8gMy41LCBzLnkgKyBpbWFnZVNpemUgLyAzKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgLSBpbWFnZVNpemUgLyAzMCArIFwicHggQXJpYWxcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRoaXMuZGF0YS5sZXZlbHNbcy5pbmRleCArIGxldmVsIC0gMV0ubGV2ZWxNZXRhLmxldmVsVHlwZSwgcy54ICsgaW1hZ2VTaXplIC8gMy41LCBzLnkgKyBpbWFnZVNpemUgLyAxLjMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZShsZXZlbF9udW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlU291bmQoKTtcclxuICAgICAgICBuZXcgR2FtZSh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCBzZWxmLmRhdGEubGV2ZWxzW2xldmVsX251bWJlcl0sIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2spO1xyXG4gICAgfVxyXG4gICAgZHJhd1N0YXJzKCkge1xyXG4gICAgICAgIGxldCBnYW1lTGV2ZWxEYXRhID0gZ2V0RGF0YWZyb21TdG9yYWdlKCk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHZhciBjYW5hdnNFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWxTZWxlY3Rpb25DYW52YXMxXCIpKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IGNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGlmIChnYW1lTGV2ZWxEYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVMZXZlbERhdGEubGVuZ3RoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiBnYW1lTGV2ZWxEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVubG9ja0xldmVsSW5kZXggPCBwYXJzZUludChnYW1lLmxldmVsTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmxldmVsU3RhciA+PSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICh1bmxvY2tMZXZlbEluZGV4ID0gcGFyc2VJbnQoZ2FtZS5sZXZlbE51bWJlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmluZGV4ICsgbGV2ZWwgPD0gc2VsZi5kYXRhLmxldmVscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmluZGV4ICsgbGV2ZWwgLSAxID4gdW5sb2NrTGV2ZWxJbmRleCArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb250ZXh0LmRyYXdJbWFnZShtYXBMb2NrLCBzLngsIHMueSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTMsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGV2ZWxEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmluZGV4IC0gMSArIGxldmVsID09IHBhcnNlSW50KGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTdGFyKHMsIGNhbnZhcywgZ2FtZUxldmVsRGF0YVtpXS5sZXZlbFN0YXIsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3U3RhcihzLCBjYW52YXMsIHN0YXJDb3VudCwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBjYW52YXMuaGVpZ2h0IC8gNTtcclxuICAgICAgICBpZiAoc3RhckNvdW50ID49IDEpIHtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXJDb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54ICsgaW1hZ2VTaXplIC8gMi41LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXJDb3VudCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHN0YXIsIHMueCArIGltYWdlU2l6ZSAvIDUsIHMueSAtIGltYWdlU2l6ZSAqIDAuMSwgaW1hZ2VTaXplIC8gNSwgaW1hZ2VTaXplIC8gNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgTW9uc3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vbnN0ZXIuanNcIjtcclxuaW1wb3J0IHsgVGltZXJUaWNraW5nIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGltZXItdGlja2luZy5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgU3RvbmVzTGF5ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RvbmVzLWxheWVyLmpzXCI7XHJcbmltcG9ydCB7IFByb21wdFRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9tcHQtdGV4dC5qc1wiO1xyXG5pbXBvcnQgUGF1c2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9wYXVzZV9idXR0b24uanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxJbmRpY2F0b3JzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGV2ZWwtaW5kaWNhdG9ycy5qc1wiO1xyXG5pbXBvcnQgeyBMZXZlbEVuZEJ1dHRvbnNMYXllciwgTGV2ZWxFbmRMYXllciwgbG9hZEltYWdlcywgbG9hZGluZ1NjcmVlbiwgU3RvbmVMYXllciwgVGltZXRpY2tlckxheWVyLCBQcm9tcHRUZXh0TGF5ZXIsIFByZXZpb3VzUGxheWVkTGV2ZWwsIFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyLCBCdXR0b25DbGljaywgRmVlZGJhY2tBdWRpbywgUGhyYXNlQXVkaW8sIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxTdGFydExheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgR2FtZUVuZFNjZW5lIH0gZnJvbSBcIi4vZ2FtZS1lbmQtc2NlbmUuanNcIjtcclxuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9jb21tb24vc291bmQuanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxFbmRTY2VuZSB9IGZyb20gXCIuL2xldmVsLWVuZC1zY2VuZS5qc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRhZnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi4vZGF0YS9wcm9maWxlLWRhdGEuanNcIjtcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlSW50ZWdyYXRpb24gfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VfaW50ZWdyYXRpb24uanNcIjtcclxuaW1wb3J0IHsgVHV0b3JpYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90dXRvcmlhbC5qc1wiO1xyXG52YXIgaW1hZ2VzID0ge1xyXG4gICAgYmdJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2JnX3YwMS5qcGdcIixcclxuICAgIGhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2hpbGxfdjAxLnBuZ1wiLFxyXG4gICAgdGltZXJfZW1wdHk6IFwiLi9hc3NldHMvaW1hZ2VzL3RpbWVyX2VtcHR5LnBuZ1wiLFxyXG4gICAgcGlsbGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9Ub3RlbV92MDJfdjAxLnBuZ1wiLFxyXG4gICAgZ3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiLFxyXG4gICAgcm90YXRpbmdfY2xvY2s6IFwiLi9hc3NldHMvaW1hZ2VzL3RpbWVyLnBuZ1wiLFxyXG4gICAgZmVuY2hJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2ZlbmNlX3YwMS5wbmdcIixcclxuICAgIHByb21wdEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvcHJvbXB0VGV4dEJnLnBuZ1wiLFxyXG4gICAgZmFudGFzdGljOiBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvZmFudGFzdGljXzAxLnBuZ1wiLFxyXG4gICAgZ3JlYXQ6IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2ltYWdlcy9ncmVhdF8wMS5wbmdcIixcclxuICAgIGF1dHVtbkJnSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fYmdfdjAxLmpwZ1wiLFxyXG4gICAgYXV0dW1uSGlsbEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX2hpbGxfdjAxLnBuZ1wiLFxyXG4gICAgYXV0dW1uU2lnbkltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX3NpZ25fdjAxLnBuZ1wiLFxyXG4gICAgYXV0dW1uR3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9GR192MDEucG5nXCIsXHJcbiAgICBhdXR1bW5GZW5jZUltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX2ZlbmNlX3YwMS5wbmdcIixcclxuICAgIGF1dHVtblBpbGxlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX3NpZ25fdjAxLnBuZ1wiLFxyXG4gICAgd2ludGVyQmdJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9iZ18wMS5qcGdcIixcclxuICAgIHdpbnRlckhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9oaWxsX3YwMS5wbmdcIixcclxuICAgIHdpbnRlclNpZ25JbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9zaWduX3YwMS5wbmdcIixcclxuICAgIHdpbnRlckdyYXNzSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfRkdfdjAxLnBuZ1wiLFxyXG4gICAgd2ludGVyRmVuY2VJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9mZW5jZV92MDEucG5nXCIsXHJcbiAgICB3aW50ZXJQaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9zaWduX3YwMS5wbmdcIixcclxufTtcclxudmFyIGF1ZGlvVXJsID0ge1xyXG4gICAgcGhyYXNlQXVkaW9zOiBbXHJcbiAgICAgICAgXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvYXVkaW9zL2ZhbnRhc3RpYy5XQVZcIixcclxuICAgICAgICAvLyBcIi4vYXNzZXRzL2F1ZGlvcy9nb29kIGpvYi5XQVZcIixcclxuICAgICAgICBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9hdWRpb3MvZ3JlYXQud2F2XCIsXHJcbiAgICBdLFxyXG4gICAgbW9uc3RlclNwbGl0OiBcIi4vYXNzZXRzL2F1ZGlvcy9Nb25zdGVyIFNwaXRzIHdyb25nIHN0b25lcy0wMS5tcDNcIixcclxuICAgIG1vbnN0ZXJIYXBweTogXCIuL2Fzc2V0cy9hdWRpb3MvQ2hlZXJpbmctMDIubXAzXCIsXHJcbiAgICBtb25zdGVyU2FkOiBcIi4vYXNzZXRzL2F1ZGlvcy9EaXNhcG9pbnRlZC0wNS5tcDNcIixcclxuICAgIGJ1dHRvbkNsaWNrOiBcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIixcclxufTtcclxudmFyIHNlbGY7XHJcbnZhciB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcclxudmFyIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcclxudmFyIHNjb3JlID0gMDtcclxudmFyIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xyXG52YXIgaXNHYW1lUGF1c2UgPSBmYWxzZTtcclxudmFyIG5vTW9yZVRhcmdldCA9IGZhbHNlO1xyXG52YXIgaXNMZXZlbEVuZGVkID0gZmFsc2U7XHJcbmV4cG9ydCBjbGFzcyBMZXZlbFN0YXJ0U2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCBsZXZlbERhdGEsIGxldmVsU3RhcnRDYWxsQmFjaywgbW9uc3RlclBoYXNlTnVtYmVyLCB9KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubW9uc3RlciA9IG5ldyBNb25zdGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudHV0b3JpYWwgPSBuZXcgVHV0b3JpYWwoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgPSBtb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcclxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IGxldmVsRGF0YTtcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnRDYWxsQmFjayA9IGxldmVsU3RhcnRDYWxsQmFjaztcclxuICAgICAgICB0aGlzLnRpbWVyVGlja2luZyA9IG5ldyBUaW1lclRpY2tpbmcoZ2FtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRUZXh0ID0gbmV3IFByb21wdFRleHQoZ2FtZSwgdGhpcywgbGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLCBsZXZlbERhdGEpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5zaG93VHV0b3JpYWwgPSAoZ2V0RGF0YWZyb21TdG9yYWdlKCkubGVuZ3RoID09IHVuZGVmaW5lZCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgKHRoaXMuc2hvd1R1dG9yaWFsKSA/IHRoaXMudHV0b3JpYWwuY3JlYXRlQ2FudmFzKCkgOiAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5zdG9uZXMgPSBuZXcgU3RvbmVzTGF5ZXIoZ2FtZSwgbGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLCB0aGlzLnBhdXNlQnV0dG9uLCB0aGlzLnJlZHJhd09mU3RvbmVzLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBsZXZlbERhdGEucHV6emxlcztcclxuICAgIH1cclxuICAgIGxldmVsRW5kQ2FsbEJhY2soYnV0dG9uX25hbWUpIHtcclxuICAgICAgICBpZiAoIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGlzTGV2ZWxFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgaXNMZXZlbEVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpc0dhbWVQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudF9wdXp6bGVfaW5kZXggPT0gc2VsZi5wdXp6bGVEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vTW9yZVRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9Nb3JlVGFyZ2V0ICYmIGJ1dHRvbl9uYW1lICE9IFwiY2xvc2VfYnV0dG9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuc2V0Q3VycnJlbnRQdXp6bGVEYXRhKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwuYnV0dG9uQ2xpY2ssIEJ1dHRvbkNsaWNrKTtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgaXNHYW1lUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG4gICAgcmVkcmF3T2ZTdG9uZXMoZHJhZ0FuaW1hdGlvbiwgc3RhdHVzLCBlbXB0eVRhcmdldCwgcGlja2VkX3N0b25lLCBwaWNrZWRfc3RvbmVzKSB7XHJcbiAgICAgICAgaWYgKGRyYWdBbmltYXRpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZHJhZ0FuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZHJhZ01vbnN0ZXJBbmltYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvRHJhZ0FuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzdG9wRHJhZ01vbnN0ZXJBbmltYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvSWRsZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvSWRsZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub01vcmVUYXJnZXQgPSBlbXB0eVRhcmdldDtcclxuICAgICAgICAgICAgdmFyIGZudHN0aWNPckdydEluZGV4ID0gc2VsZi5nZXRSYW5kb21JbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VUb0VhdEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlckhhcHB5LCBQaHJhc2VBdWRpbyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1wdHlUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnB1enpsZUVuZEZpcmViYXNlRXZlbnRzKFwic3VjY2Vzc1wiLCBjdXJyZW50X3B1enpsZV9pbmRleCwgcGlja2VkX3N0b25lcywgc2VsZi5sZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0udGFyZ2V0U3RvbmVzLCBzZWxmLmxldmVsRGF0YS5wdXp6bGVzW2N1cnJlbnRfcHV6emxlX2luZGV4XS5mb2lsU3RvbmVzLCBzZWxmLnB1enpsZVN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXVkaW8ucGxheVNvdW5kKGF1ZGlvVXJsLnBocmFzZUF1ZGlvc1tmbnRzdGljT3JHcnRJbmRleF0sIEZlZWRiYWNrQXVkaW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuc2hvd0ZhbnRhc3RpY09yR3JlYXQoZm50c3RpY09yR3J0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gcGlja2VkX3N0b25lLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLnN0b3BUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGYucHJvbXB0VGV4dC5kcmF3KCh3b3JkX2Ryb3BwZWRfc3RvbmVzICs9IDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZSArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCh3b3JkX2Ryb3BwZWRfc3RvbmVzICs9IHBpY2tlZF9zdG9uZS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLnN0b3BUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvU3BpdEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlclNhZCwgUGhyYXNlQXVkaW8pO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wdXp6bGVFbmRGaXJlYmFzZUV2ZW50cyhcImZhaWx1cmVcIiwgY3VycmVudF9wdXp6bGVfaW5kZXgsIHBpY2tlZF9zdG9uZXMsIHNlbGYubGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLnRhcmdldFN0b25lcywgc2VsZi5sZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0uZm9pbFN0b25lcywgc2VsZi5wdXp6bGVTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlclNwbGl0LCBQaHJhc2VBdWRpbyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRfcHV6emxlX2luZGV4ID09IHNlbGYucHV6emxlRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGkgKiAxMzAwLjY2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHV6emxlU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHV6emxlRGF0YShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaSAqIDEzMDAuNjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldmVsRW5kZWQoKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsU3RhcnNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1vbnN0ZXJQaGFzZU51bWJlciA9IHNlbGYubW9uc3RlclBoYXNlTnVtYmVyIHx8IDE7XHJcbiAgICAgICAgdmFyIGdhbWVMZXZlbERhdGEgPSBnZXREYXRhZnJvbVN0b3JhZ2UoKTtcclxuICAgICAgICB0aGlzLnNob3dUdXRvcmlhbCA9IChnYW1lTGV2ZWxEYXRhLmxlbmd0aCA9PSB1bmRlZmluZWQpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmIChnYW1lTGV2ZWxEYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGV2ZWxEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbFN0YXJzQ291bnQgPSB0b3RhbFN0YXJzQ291bnQgKyBnYW1lTGV2ZWxEYXRhW2ldLmxldmVsU3RhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb25zdGVyUGhhc2VOdW1iZXIgPSBNYXRoLmZsb29yKHRvdGFsU3RhcnNDb3VudCAvIDEyKSArIDEgfHwgMTtcclxuICAgICAgICAgICAgaWYgKHNlbGYubW9uc3RlclBoYXNlTnVtYmVyIDwgbW9uc3RlclBoYXNlTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9uc3RlclBoYXNlTnVtYmVyIDw9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciA9IG1vbnN0ZXJQaGFzZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yZU1vbnN0ZXJQaGFzZU51bWJlciwgbW9uc3RlclBoYXNlTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlUGhhc2VOdW1iZXIobW9uc3RlclBoYXNlTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciA9IDQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soKTtcclxuICAgICAgICBpZiAoc2VsZi5sZXZlbERhdGEubGV2ZWxOdW1iZXIgPT0gMTQ5KSB7XHJcbiAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcclxuICAgICAgICAgICAgbmV3IEdhbWVFbmRTY2VuZShzZWxmLmdhbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXcgTGV2ZWxFbmRTY2VuZShzZWxmLmdhbWUsIHNjb3JlLCBzZWxmLm1vbnN0ZXIsIHNlbGYubGV2ZWxFbmRDYWxsQmFjaywgc2VsZi5sZXZlbERhdGEsIGlzR2FtZVBhdXNlLCBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciwgdGhpcy5sZXZlbFN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0xldmVsRW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnB1enpsZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBtb25zdGVyUGhhc2VOdW1iZXIgPSB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciB8fCAxO1xyXG4gICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgc2VsZi5kZWxldGVPYmplY3RzKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBMZXZlbFN0YXJ0TGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDM7XHJcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbiA9IG5ldyBQYXVzZUJ1dHRvbih0aGlzLmNvbnRleHQsIHRoaXMuY2FuYXZzRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEluZGljYXRvcnMgPSBuZXcgTGV2ZWxJbmRpY2F0b3JzKHRoaXMuY29udGV4dCwgdGhpcy5jYW5hdnNFbGVtZW50LCAwKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxmLmlkKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBwcmV2aW91c1BsYXllZExldmVsID0gc2VsZi5sZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFByZXZpb3VzUGxheWVkTGV2ZWwsIHByZXZpb3VzUGxheWVkTGV2ZWwpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICBleGl0QWxsU2NyZWVucygpIHtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKExldmVsRW5kTGF5ZXIpO1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoTGV2ZWxFbmRCdXR0b25zTGF5ZXIpO1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoTGV2ZWxTdGFydExheWVyKTtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFN0b25lTGF5ZXIpO1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoVGltZXRpY2tlckxheWVyKTtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFByb21wdFRleHRMYXllcik7XHJcbiAgICAgICAgLy8gc2VsZi5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2lkbGU0LnBuZ1wiKTtcclxuICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIHNlbGYubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCIpO1xyXG4gICAgICAgIHNlbGYubW9uc3Rlci5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICBzZWxmLmRlbGV0ZU9iamVjdHMoKTtcclxuICAgICAgICB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcclxuICAgIH1cclxuICAgIGRlbGV0ZU9iamVjdHMoKSB7XHJcbiAgICAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcclxuICAgICAgICBkZWxldGUgc2VsZi5hdWRpbztcclxuICAgICAgICBkZWxldGUgc2VsZi5sZXZlbEluZGljYXRvcnM7XHJcbiAgICAgICAgZGVsZXRlIHNlbGYucGF1c2VCdXR0b247XHJcbiAgICAgICAgZGVsZXRlIHNlbGYuc3RvbmVzO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLnRpbWVyVGlja2luZztcclxuICAgICAgICBkZWxldGUgc2VsZi5jYW52YXNTdGFjaztcclxuICAgICAgICBkZWxldGUgc2VsZi5tb25zdGVyO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLnByb21wdFRleHQ7XHJcbiAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggPSAwO1xyXG4gICAgICAgIHNjb3JlID0gMDtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmJnSW1nLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnBpbGxlckltZywgdGhpcy53aWR0aCAqIDAuNiwgdGhpcy5oZWlnaHQgLyA2LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5mZW5jaEltZywgLXRoaXMud2lkdGggKiAwLjQsIHRoaXMuaGVpZ2h0IC8gMywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaGlsbEltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmdyYXNzSW1nLCAtdGhpcy53aWR0aCAqIDAuMjUsIHRoaXMuaGVpZ2h0IC8gMiArICh0aGlzLmhlaWdodCAvIDIpICogMC4xLCB0aGlzLndpZHRoICogMS41LCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy50aW1lcl9lbXB0eSwgMCwgdGhpcy5oZWlnaHQgKiAwLjEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICogMC4wNSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnJvdGF0aW5nX2Nsb2NrLCA1LCB0aGlzLmhlaWdodCAqIDAuMDksIHRoaXMud2lkdGggKiAwLjEyLCB0aGlzLmhlaWdodCAqIDAuMDYpO1xyXG4gICAgICAgIHRoaXMudGltZXJUaWNraW5nLmNyZWF0ZUJhY2tncm91ZCgpO1xyXG4gICAgICAgIHRoaXMuc3RvbmVzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmxldmVsSW5kaWNhdG9ycy5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRUZXh0LmNyZWF0ZUJhY2tncm91bmQoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBzZWxmLnRpbWVyVGlja2luZyA/IHNlbGYudGltZXJUaWNraW5nLnVwZGF0ZSgpIDogbnVsbDtcclxuICAgIH1cclxuICAgIGNoYW5nZVB1enpsZSgpIHtcclxuICAgICAgICBpZiAoc2VsZi50aW1lclRpY2tpbmcuaXNUaW1lckVuZGVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc3RvbmVzLmlzVGltZXJFbmRlZCgpO1xyXG4gICAgICAgICAgICB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcclxuICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgc2VsZi5zdG9uZXMuY2FudmFzLnNjZW5lLmxldmVsSW5kaWNhdG9ycy5zZXRJbmRpY2F0b3JzKGN1cnJlbnRfcHV6emxlX2luZGV4KTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRfcHV6emxlX2luZGV4ID09IHNlbGYucHV6emxlRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTGV2ZWxFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi50aW1lclRpY2tpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExldmVsRW5kU2NlbmUoc2VsZi5nYW1lLCBzY29yZSwgc2VsZi5tb25zdGVyLCBzZWxmLmxldmVsRW5kQ2FsbEJhY2ssIHNlbGYubGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIsIHRoaXMubGV2ZWxTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLnByb21wdFRleHQuc2V0Q3VycnJlbnRQcm9tcHRUZXh0KFxyXG4gICAgICAgICAgICAgICAgLy8gICBzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdLnByb21wdC5wcm9tcHRUZXh0XHJcbiAgICAgICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wdXp6bGVTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nID8gKHNlbGYudGltZXJUaWNraW5nLmlzVGltZXJFbmRlZCA9IGZhbHNlKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVCYWNrZ3JvdW5kVHlwZXMgPSBbXCJTdW1tZXJcIiwgXCJBdXR1bW5cIiwgXCJXaW50ZXJcIl07XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmRUeXBlID0gTWF0aC5mbG9vcihzZWxmLmxldmVsRGF0YS5sZXZlbE51bWJlciAvIDEwKSAlXHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUJhY2tncm91bmRUeXBlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyID49IDMwKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUeXBlID0gYmFja2dyb3VuZFR5cGUgJSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkaW5nU2NyZWVuKHRydWUpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIGxvYWRJbWFnZXMoaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChhdmFpbGFibGVCYWNrZ3JvdW5kVHlwZXNbYmFja2dyb3VuZFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiV2ludGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJCZ0ltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLndpbnRlclBpbGxlckltZywgd2lkdGggKiAwLjM4LCBoZWlnaHQgLyA2LCB3aWR0aCAvIDEuMiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLndpbnRlckZlbmNlSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDQsIHdpZHRoLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVySGlsbEltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJHcmFzc0ltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiArIChoZWlnaHQgLyAyKSAqIDAuMSwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBdXR1bW5cIjpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYXV0dW1uUGlsbGVySW1nLCB3aWR0aCAqIDAuMzgsIGhlaWdodCAvIDYsIHdpZHRoIC8gMS4yLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYXV0dW1uRmVuY2VJbWcsIC13aWR0aCAqIDAuNCwgaGVpZ2h0IC8gNCwgd2lkdGgsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5IaWxsSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UucGlsbGVySW1nLCB3aWR0aCAqIDAuNiwgaGVpZ2h0IC8gNiwgd2lkdGgsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5mZW5jaEltZywgLXdpZHRoICogMC40LCBoZWlnaHQgLyAzLCB3aWR0aCwgaGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuZ3Jhc3NJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgKyAoaGVpZ2h0IC8gMikgKiAwLjEsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UudGltZXJfZW1wdHksIDAsIGhlaWdodCAqIDAuMSwgd2lkdGgsIGhlaWdodCAqIDAuMDUpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5yb3RhdGluZ19jbG9jaywgNSwgaGVpZ2h0ICogMC4wOSwgd2lkdGggKiAwLjEyLCBoZWlnaHQgKiAwLjA2KTtcclxuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuY3JlYXRlQmFja2dyb3VkKCk7XHJcbiAgICAgICAgICAgIHNlbGYuc3RvbmVzLmRyYXcoKTtcclxuICAgICAgICAgICAgc2VsZi5wYXVzZUJ1dHRvbi5kcmF3KCk7XHJcbiAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLmRyYXcoKTtcclxuICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmNyZWF0ZUJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbihmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdXp6bGVFbmRGaXJlYmFzZUV2ZW50cyhzdWNjZXNzX29yX2ZhaWx1cmUsIHB1enpsZV9udW1iZXIsIGl0ZW1fc2VsZWN0ZWQsIHRhcmdldCwgZm9pbHMsIHJlc3BvbnNlX3RpbWUpIHtcclxuICAgICAgICB2YXIgcHV6emxlRW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5jdXN0b21FdmVudHMoXCJwdXp6bGVfY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgICAgZGF0ZV90aW1lOiBwdXp6bGVFbmRUaW1lLmdldERhdGUoKSArXHJcbiAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICBwdXp6bGVFbmRUaW1lLmdldE1vbnRoKCkgK1xyXG4gICAgICAgICAgICAgICAgMSArXHJcbiAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICBwdXp6bGVFbmRUaW1lLmdldEZ1bGxZZWFyKCkgK1xyXG4gICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgcHV6emxlRW5kVGltZS5nZXRIb3VycygpICtcclxuICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0TWludXRlcygpICtcclxuICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0U2Vjb25kcygpLFxyXG4gICAgICAgICAgICBzdWNjZXNzX29yX2ZhaWx1cmU6IHN1Y2Nlc3Nfb3JfZmFpbHVyZSxcclxuICAgICAgICAgICAgbGV2ZWxfbnVtYmVyOiB0aGlzLmxldmVsRGF0YS5sZXZlbE51bWJlcixcclxuICAgICAgICAgICAgcHV6emxlX251bWJlcjogcHV6emxlX251bWJlcixcclxuICAgICAgICAgICAgaXRlbV9zZWxlY3RlZDogaXRlbV9zZWxlY3RlZCxcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgIGZvaWxzOiBmb2lscyxcclxuICAgICAgICAgICAgcHJvZmlsZV9udW1iZXI6IDAsXHJcbiAgICAgICAgICAgIGZ0bV9sYW5ndWFnZTogbGFuZyxcclxuICAgICAgICAgICAgdmVyc2lvbl9udW1iZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyc2lvbi1pbmZvLWlkXCIpLmlubmVySFRNTCxcclxuICAgICAgICAgICAgcmVzcG9uc2VfdGltZTogTWF0aC5hYnMoTWF0aC5jZWlsKChwdXp6bGVFbmRUaW1lLmdldFRpbWUoKSAtIHJlc3BvbnNlX3RpbWUpIC8gMTAwMCkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgQnV0dG9uQ2xpY2ssIEZpcmViYXNlVXNlckNsaWNrZWQsIFBsYXlCdXR0b25MYXllciwgUFdBSW5zdGFsbFN0YXR1cywgU3RhcnRTY2VuZUxheWVyLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY29tbW9uL3NvdW5kLmpzXCI7XHJcbmltcG9ydCBJbnN0YWxsQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvaW5zdGFsbF9idXR0b24uanNcIjtcclxuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9wbGF5X2J1dG9vbi5qc1wiO1xyXG5pbXBvcnQgeyBNb25zdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9uc3Rlci5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBMZXZlbFNlbGVjdGlvblNjcmVlbiB9IGZyb20gXCIuL2xldmVsLXNlbGVjdGlvbi1zY2VuZS5qc1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxudmFyIGJnSW1nID0gbmV3IEltYWdlKCk7XHJcbmJnSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2JnX3YwMS5qcGdcIjtcclxudmFyIGhpbGxJbWcgPSBuZXcgSW1hZ2UoKTtcclxuaGlsbEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9oaWxsX3YwMS5wbmdcIjtcclxudmFyIHBpbGxlckltZyA9IG5ldyBJbWFnZSgpO1xyXG5waWxsZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvVG90ZW1fdjAyX3YwMS5wbmdcIjtcclxudmFyIGdyYXNzSW1nID0gbmV3IEltYWdlKCk7XHJcbmdyYXNzSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiO1xyXG52YXIgZmVuY2hJbWcgPSBuZXcgSW1hZ2UoKTtcclxuZmVuY2hJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZmVuY2VfdjAxLnBuZ1wiO1xyXG52YXIgdGl0bGUgPSBuZXcgSW1hZ2UoKTtcclxudGl0bGUuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL3RpdGxlLnBuZ1wiO1xyXG52YXIgcHJvZmlsZU1vbnN0ZXIgPSBuZXcgSW1hZ2UoKTtcclxucHJvZmlsZU1vbnN0ZXIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTQucG5nXCI7XHJcbnZhciBzZWxmO1xyXG5sZXQgcHdhX2luc3RhbGxfc3RhdHVzO1xyXG5jb25zdCBhYm91dENvbXBhbnlFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtY29tcGFueVwiKSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcHdhX2luc3RhbGxfc3RhdHVzID0gZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMsIFwiZmFsc2VcIik7XHJcbn0pO1xyXG5leHBvcnQgY2xhc3MgU3RhcnRTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGRhdGEsIGZpcmViYXNlX2FuYWx5dGljcykge1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLm1vbnN0ZXIgPSBuZXcgTW9uc3Rlcih0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5wd2Ffc3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlX2FuYWx5dGljcyA9IGZpcmViYXNlX2FuYWx5dGljcztcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgU3RhcnRTY2VuZUxheWVyKTtcclxuICAgICAgICBhYm91dENvbXBhbnlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgYWJvdXRDb21wYW55RWxlbWVudC5pbm5lckhUTUwgPSBnbG9iYWxUaGlzLmFib3V0Q29tcGFueTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS5ib3R0b20gPSAwO1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShiZ0ltZywgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UocGlsbGVySW1nLCB0aGlzLndpZHRoICogMC42LCB0aGlzLmhlaWdodCAvIDYsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShmZW5jaEltZywgLXRoaXMud2lkdGggKiAwLjQsIHRoaXMuaGVpZ2h0IC8gMywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGhpbGxJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoICogMS41LCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoZ3Jhc3NJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyICsgKHRoaXMuaGVpZ2h0IC8gMikgKiAwLjEsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aXRsZSwgdGhpcy53aWR0aCAqIDAsIHRoaXMuaGVpZ2h0IC8gNTAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nLXNjcmVlblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVQbGF5QnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXlCdXR0b25MYXllckVsZW1lbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUGxheUJ1dHRvbkxheWVyKSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIHZhciBwbGF5QnV0dG9uSWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBQbGF5QnV0dG9uTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsYXlCdXR0b25JZCk7XHJcbiAgICAgICAgdGhpcy5idXR0b25Db250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gNztcclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG4gICAgICAgICAgICBzZWxmLnBsYXlCdXR0b24gPSBuZXcgUGxheUJ1dHRvbihzZWxmLmJ1dHRvbkNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUsIHNlbGYuY2FudmFzLmhlaWdodCAvIDcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5wbGF5QnV0dG9uID0gbmV3IEluc3RhbGxCdXR0b24oc2VsZi5idXR0b25Db250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjM1LCBzZWxmLmNhbnZhcy5oZWlnaHQgLyA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQbGF5QnV0dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnBsYXlCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5maXJlYmFzZV9hbmFseXRpY3MubG9nRXZlbnQoRmlyZWJhc2VVc2VyQ2xpY2tlZCwgXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VyQ2xpY2tlZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTb3VuZCgpLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIiwgQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExldmVsU2VsZWN0aW9uU2NyZWVuKHNlbGYuY2FudmFzLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFBsYXlCdXR0b25MYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdGFydFNjZW5lTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLnB3YV9zdGF0dXMgPT0gXCJmYWxzZVwiIHx8ICFzZWxmLnB3YV9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHB3YV9pbnN0YWxsX3N0YXR1cy5wcm9tcHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHsgb3V0Y29tZSB9ID0gYXdhaXQgcHdhX2luc3RhbGxfc3RhdHVzLnVzZXJDaG9pY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAob3V0Y29tZSA9PT0gXCJhY2NlcHRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHB3YV9pbnN0YWxsX3N0YXR1cyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VySW5zdGFsbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGV2ZW50OiBcImluc3RhbGxfY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgRmlyZWJhc2VVc2VySW5zdGFsbCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgXCJJbnN0YWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZicShcInRyYWNrQ3VzdG9tXCIsIFVzZXJDYW5jZWxsZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJjYW5jZWxfY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChVc2VyQ2FuY2VsbGVkLCBcIkNhbmNlbGxlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAhd2luZG93Lm1hdGNoTWVkaWEoXCIoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKVwiKS5tYXRjaGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYucHdhX3N0YXR1cyA9PSBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFsZXJ0KFwiUFdBIGlzIGluc3RhbGxlZCBvbiB5b3VyIGRldmljZSBcXG5QbGVhc2UgcGxheSBmcm9tIHRoZXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWJvdXRDb21wYW55RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5ldyBTb3VuZCgpLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuZXcgTGV2ZWxTZWxlY3Rpb25TY3JlZW4oc2VsZi5jYW52YXMsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFBsYXlCdXR0b25MYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYubW9uc3Rlci5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdGFydFNjZW5lTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgQ2FudmFzU3RhY2s7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGNsYXNzIExheWVyIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7IGNhbnZhc0lELCBjYW52YXNFbGVtZW50LCB9KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBjYW52YXNJRDtcclxuICAgICAgICAgICAgdGhpcy5jRWxlbSA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ09iamVjdHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDYW52YXNTdGFjayA9IGNsYXNzIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihjdnNJRCwgc3RhY2tMaW1pdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzYXZUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5jSWQgPSBjdnNJRDtcclxuICAgICAgICAgICAgdGhpcy5zdGFja0xpbWl0ID0gc3RhY2tMaW1pdCB8fCAxMjtcclxuICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdnNJRCk7XHJcbiAgICAgICAgICAgIHRoaXMucmF3V2lkdGggPSB0aGlzLmJrZ0NhbnZhcy5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5yYXdIZWlnaHQgPSB0aGlzLmJrZ0NhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwibGF5ZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBia2dMID0gbmV3IExheWVyKHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXNJRDogdGhpcy5jSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzRWxlbWVudDogdGhpcy5ia2dDYW52YXMsXHJcbiAgICAgICAgICAgICAgICB9KTsgLy8gYmtnQ2FudmFzIGlzIGFsd2F5cyBsYXllclswXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzWzBdID0gYmtnTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwidW5pcXVlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy51bmlxdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUxheWVyKGhlaWdodCwgd2lkdGgsIGxheWVySWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTGF5ZXJFeGlzdChsYXllcklkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IHdpZHRoICsgXCJweFwiLCBoID0gaGVpZ2h0ICsgXCJweFwiLCBuTHlycyA9IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IC8vIGJrZyBpcyBsYXllciAwIHNvIGF0IGxlYXN0IDFcclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aCA+PSB0aGlzLnN0YWNrTGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzU3RhY2s6IHRvbyBtYW55IGxheWVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy51bmlxdWUgKz0gMTsgLy8gYSBwcml2YXRlIHN0YXRpYyB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdW5pcXVlVGFnID0gdGhpcy5ia2dDYW52YXMudW5pcXVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBvdmxJZCA9IHRoaXMuY0lkICsgXCJfb3ZsX1wiICsgdW5pcXVlVGFnO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSWQgPSBsYXllcklkO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSFRNTCA9IFwiPGNhbnZhcyBpZD0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIG92bElkICtcclxuICAgICAgICAgICAgICAgICAgICBcIicgc3R5bGU9J3Bvc2l0aW9uOmFic29sdXRlJyB3aWR0aD0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJyBoZWlnaHQ9J1wiICtcclxuICAgICAgICAgICAgICAgICAgICBoICtcclxuICAgICAgICAgICAgICAgICAgICBcIic+PC9jYW52YXM+XCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BDdnMgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnNbbkx5cnMgLSAxXS5jRWxlbTtcclxuICAgICAgICAgICAgICAgIHRvcEN2cy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBvdmxIVE1MKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG92bElkKTtcclxuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUubGVmdCA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgMCUpXCI7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUuaGVpZ2h0ID0gaDtcclxuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS53aWR0aCA9IHc7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3TCA9IG5ldyBMYXllcih7IGNhbnZhc0lEOiBvdmxJZCwgY2FudmFzRWxlbWVudDogbmV3Q3ZzIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgSUQgaW4gYW4gYXJyYXkgdG8gZmFjaWxpdGF0ZSByZW1vdmFsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMucHVzaChuZXdMKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdmxJZDsgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlTGF5ZXIob3ZseUlkKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGJhY2tncm91bmQgY2FudmFzIGlzIHN0aWxsIHRoZXJlXHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5pZCA9PT0gb3ZseUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG92bE5vZGUgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnNbaV0uY0VsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92bE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBub3cgZGVsZXRlIGxheWVycyBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzLnNwbGljZShpLCAxKTsgLy8gZGVsZXRlIHRoZSBMYXllciBvYmplY3RcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGVBbGxMYXllcnMoKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92bE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3JwaGFuID0gb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ycGhhbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBub3cgZGVsZXRlIGxheWVycyBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGFueSByZXNpemUgY2FsbGJhY2tzLCB0aGUgbGF5ZXJzIGFyZSBnb25lXHJcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucy5sZW5ndGggPSAwOyAvLyByZW1vdmUgYW55IGFkZGVkIGhhbmRsZXJzLCBsZWF2ZSB0aGUgYmFzaWNcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNMYXllckV4aXN0KGxheWVySUQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJrZ0NhbnZhcy5sYXllcnNbaV0uaWQgPT09IGxheWVySUQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcbiIsInRyeXtzZWxmW1wid29ya2JveDp3aW5kb3c6NC4zLjFcIl0mJl8oKX1jYXRjaChuKXt9dmFyIG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSl7dmFyIGU9bmV3IE1lc3NhZ2VDaGFubmVsO2UucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKG4pe3JldHVybiBpKG4uZGF0YSl9LG4ucG9zdE1lc3NhZ2UodCxbZS5wb3J0Ml0pfSl9O2Z1bmN0aW9uIHQobix0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIGU9dFtpXTtlLmVudW1lcmFibGU9ZS5lbnVtZXJhYmxlfHwhMSxlLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBlJiYoZS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sZS5rZXksZSl9fWZ1bmN0aW9uIGkobil7aWYodm9pZCAwPT09bil0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIG59dHJ5e3NlbGZbXCJ3b3JrYm94OmNvcmU6NC4zLjFcIl0mJl8oKX1jYXRjaChuKXt9dmFyIGU9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMucHJvbWlzZT1uZXcgUHJvbWlzZShmdW5jdGlvbih0LGkpe24ucmVzb2x2ZT10LG4ucmVqZWN0PWl9KX0scj1mdW5jdGlvbihuLHQpe3JldHVybiBuZXcgVVJMKG4sbG9jYXRpb24pLmhyZWY9PT1uZXcgVVJMKHQsbG9jYXRpb24pLmhyZWZ9LG89ZnVuY3Rpb24obix0KXtPYmplY3QuYXNzaWduKHRoaXMsdCx7dHlwZTpufSl9O2Z1bmN0aW9uIHUobil7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGk9MDtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXRbaV09YXJndW1lbnRzW2ldO3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4uYXBwbHkodGhpcyx0KSl9Y2F0Y2gobil7cmV0dXJuIFByb21pc2UucmVqZWN0KG4pfX19ZnVuY3Rpb24gYShuLHQsaSl7cmV0dXJuIGk/dD90KG4pOm46KG4mJm4udGhlbnx8KG49UHJvbWlzZS5yZXNvbHZlKG4pKSx0P24udGhlbih0KTpuKX1mdW5jdGlvbiBzKCl7fXZhciBjPWZ1bmN0aW9uKGMpe3ZhciBmLGg7ZnVuY3Rpb24gdihuLHQpe3ZhciByO3JldHVybiB2b2lkIDA9PT10JiYodD17fSksKHI9Yy5jYWxsKHRoaXMpfHx0aGlzKS50PW4sci5pPXQsci5vPTAsci51PW5ldyBlLHIucz1uZXcgZSxyLmg9bmV3IGUsci52PXIudi5iaW5kKGkoaShyKSkpLHIubD1yLmwuYmluZChpKGkocikpKSxyLmc9ci5nLmJpbmQoaShpKHIpKSksci5tPXIubS5iaW5kKGkoaShyKSkpLHJ9aD1jLChmPXYpLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSxmLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1mLGYuX19wcm90b19fPWg7dmFyIGwsdyxnLGQ9di5wcm90b3R5cGU7cmV0dXJuIGQucmVnaXN0ZXI9dShmdW5jdGlvbihuKXt2YXIgdCxpLGU9dGhpcyx1PSh2b2lkIDA9PT1uP3t9Om4pLmltbWVkaWF0ZSxjPXZvaWQgMCE9PXUmJnU7cmV0dXJuIHQ9ZnVuY3Rpb24oKXtyZXR1cm4gZS5wPUJvb2xlYW4obmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciksZS5QPWUuUigpLGEoZS5rKCksZnVuY3Rpb24obil7ZS5CPW4sZS5QJiYoZS5PPWUuUCxlLnMucmVzb2x2ZShlLlApLGUuaC5yZXNvbHZlKGUuUCksZS5qKGUuUCksZS5QLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLGUubCx7b25jZTohMH0pKTt2YXIgdD1lLkIud2FpdGluZztyZXR1cm4gdCYmcih0LnNjcmlwdFVSTCxlLnQpJiYoZS5PPXQsUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe2UuZGlzcGF0Y2hFdmVudChuZXcgbyhcIndhaXRpbmdcIix7c3c6dCx3YXNXYWl0aW5nQmVmb3JlUmVnaXN0ZXI6ITB9KSl9KSksZS5PJiZlLnUucmVzb2x2ZShlLk8pLGUuQi5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlZm91bmRcIixlLmcpLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250cm9sbGVyY2hhbmdlXCIsZS5tLHtvbmNlOiEwfSksXCJCcm9hZGNhc3RDaGFubmVsXCJpbiBzZWxmJiYoZS5DPW5ldyBCcm9hZGNhc3RDaGFubmVsKFwid29ya2JveFwiKSxlLkMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixlLnYpKSxuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUudiksZS5CfSl9LChpPWZ1bmN0aW9uKCl7aWYoIWMmJlwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUpcmV0dXJuIGZ1bmN0aW9uKG4sdCl7aWYoIXQpcmV0dXJuIG4mJm4udGhlbj9uLnRoZW4ocyk6UHJvbWlzZS5yZXNvbHZlKCl9KG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pe3JldHVybiBhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG4pfSkpfSgpKSYmaS50aGVuP2kudGhlbih0KTp0KGkpfSksZC5nZXRTVz11KGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuT3x8dGhpcy51LnByb21pc2V9KSxkLm1lc3NhZ2VTVz11KGZ1bmN0aW9uKHQpe3JldHVybiBhKHRoaXMuZ2V0U1coKSxmdW5jdGlvbihpKXtyZXR1cm4gbihpLHQpfSl9KSxkLlI9ZnVuY3Rpb24oKXt2YXIgbj1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyO2lmKG4mJnIobi5zY3JpcHRVUkwsdGhpcy50KSlyZXR1cm4gbn0sZC5rPXUoZnVuY3Rpb24oKXt2YXIgbj10aGlzO3JldHVybiBmdW5jdGlvbihuLHQpe3RyeXt2YXIgaT1uKCl9Y2F0Y2gobil7cmV0dXJuIHQobil9cmV0dXJuIGkmJmkudGhlbj9pLnRoZW4odm9pZCAwLHQpOml9KGZ1bmN0aW9uKCl7cmV0dXJuIGEobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIobi50LG4uaSksZnVuY3Rpb24odCl7cmV0dXJuIG4uTD1wZXJmb3JtYW5jZS5ub3coKSx0fSl9LGZ1bmN0aW9uKG4pe3Rocm93IG59KX0pLGQuaj1mdW5jdGlvbih0KXtuKHQse3R5cGU6XCJXSU5ET1dfUkVBRFlcIixtZXRhOlwid29ya2JveC13aW5kb3dcIn0pfSxkLmc9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLkIuaW5zdGFsbGluZzt0aGlzLm8+MHx8IXIobi5zY3JpcHRVUkwsdGhpcy50KXx8cGVyZm9ybWFuY2Uubm93KCk+dGhpcy5MKzZlND8odGhpcy5XPW4sdGhpcy5CLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLHRoaXMuZykpOih0aGlzLk89bix0aGlzLnUucmVzb2x2ZShuKSksKyt0aGlzLm8sbi5hZGRFdmVudExpc3RlbmVyKFwic3RhdGVjaGFuZ2VcIix0aGlzLmwpfSxkLmw9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxpPW4udGFyZ2V0LGU9aS5zdGF0ZSxyPWk9PT10aGlzLlcsdT1yP1wiZXh0ZXJuYWxcIjpcIlwiLGE9e3N3Omksb3JpZ2luYWxFdmVudDpufTshciYmdGhpcy5wJiYoYS5pc1VwZGF0ZT0hMCksdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKHUrZSxhKSksXCJpbnN0YWxsZWRcIj09PWU/dGhpcy5fPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcImluc3RhbGxlZFwiPT09ZSYmdC5CLndhaXRpbmc9PT1pJiZ0LmRpc3BhdGNoRXZlbnQobmV3IG8odStcIndhaXRpbmdcIixhKSl9LDIwMCk6XCJhY3RpdmF0aW5nXCI9PT1lJiYoY2xlYXJUaW1lb3V0KHRoaXMuXykscnx8dGhpcy5zLnJlc29sdmUoaSkpfSxkLm09ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5PO3Q9PT1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyJiYodGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwiY29udHJvbGxpbmdcIix7c3c6dCxvcmlnaW5hbEV2ZW50Om59KSksdGhpcy5oLnJlc29sdmUodCkpfSxkLnY9ZnVuY3Rpb24obil7dmFyIHQ9bi5kYXRhO3RoaXMuZGlzcGF0Y2hFdmVudChuZXcgbyhcIm1lc3NhZ2VcIix7ZGF0YTp0LG9yaWdpbmFsRXZlbnQ6bn0pKX0sbD12LCh3PVt7a2V5OlwiYWN0aXZlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucy5wcm9taXNlfX0se2tleTpcImNvbnRyb2xsaW5nXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaC5wcm9taXNlfX1dKSYmdChsLnByb3RvdHlwZSx3KSxnJiZ0KGwsZyksdn0oZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7dGhpcy5EPXt9fXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlQobikuYWRkKHQpfSx0LnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlQobikuZGVsZXRlKHQpfSx0LmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24obil7bi50YXJnZXQ9dGhpcyx0aGlzLlQobi50eXBlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0KG4pfSl9LHQuVD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5EW25dPXRoaXMuRFtuXXx8bmV3IFNldH0sbn0oKSk7ZXhwb3J0e2MgYXMgV29ya2JveCxuIGFzIG1lc3NhZ2VTV307XG4vLyMgc291cmNlTWFwcGluZ1VSTD13b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3NyYy9kYXRhL2FwaS1kYXRhLmpzXCI7XHJcbmltcG9ydCB7IERhdGFNb2RhbCB9IGZyb20gXCIuL3NyYy9kYXRhL2RhdGEtbW9kYWwuanNcIjtcclxuaW1wb3J0IHsgU3RhcnRTY2VuZSB9IGZyb20gXCIuL3NyYy9zY2VuZXMvc3RhcnQtc2NlbmUuanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi9zcmMvdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IHsgQ2FjaGVkTGFuZ3VhZ2VzIH0gZnJvbSBcIi4vc3JjL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgV29ya2JveCB9IGZyb20gXCJ3b3JrYm94LXdpbmRvd1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUludGVncmF0aW9uIH0gZnJvbSBcIi4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2ludGVncmF0aW9uLmpzXCI7XHJcbmNvbnN0IGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChcIm15LWNoYW5uZWxcIik7XHJcbmxldCBjYWNoZWRfbGFuZ3VhZ2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKVxyXG4gICAgPyBuZXcgTWFwKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKSkpXHJcbiAgICA6IG5ldyBNYXAoKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBGaXJlYmFzZUludGVncmF0aW9uLnNlc3Npb25FbmQoKTtcclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHJlZ2lzdGVyV29ya2JveCgpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aCA+IDQyMCA/IDQyMCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCBkYXRhID0geWllbGQgZ2V0RGF0YSgpO1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGFNb2RhbChkYXRhLk90aGVyQXVkaW9zLCBkYXRhLkxldmVscywgZGF0YS5GZWVkYmFja1RleHRzLCBkYXRhLlJpZ2h0VG9MZWZ0LCBkYXRhLkZlZWRiYWNrQXVkaW9zKTtcclxuICAgICAgICBpZiAod2luZG93LkFuZHJvaWQpIHtcclxuICAgICAgICAgICAgd2luZG93LkFuZHJvaWQucmVjZWl2ZURhdGEoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykgPyBjYWNoZWRfbGFuZ3VhZ2VzLmdldChsYW5nKSA6IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbG9iYWxUaGlzLmFib3V0Q29tcGFueSA9IGRhdGEuYWJvdXRDb21wYW55O1xyXG4gICAgICAgIGdsb2JhbFRoaXMuZGVzY3JpcHRpb25UZXh0ID0gZGF0YS5kZXNjcmlwdGlvblRleHQ7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5pbml0aWFsaXplRmlyZWJhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoID4gNDIwID8gNDIwIDogd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5tb25zdGVyO1xyXG4gICAgICAgICAgICAgICAgbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpLmRlbGV0ZUFsbExheWVycygpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhcnRTY2VuZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IG5ldyBTdGFydFNjZW5lKGNhbnZhcywgZCwgdGhpcy5hbmFseXRpY3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGlmIChjYWNoZWRfbGFuZ3VhZ2VzLmhhcyhsYW5nKSkge1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5pbml0aWFsaXplRmlyZWJhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NlbmUgPSBuZXcgU3RhcnRTY2VuZShjYW52YXMsIGQsIHRoaXMuYW5hbHl0aWNzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyV29ya2JveCgpIHtcclxuICAgIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBsZXQgd2IgPSBuZXcgV29ya2JveChcIi4vc3cuanNcIiwge30pO1xyXG4gICAgICAgIHdiLnJlZ2lzdGVyKCkudGhlbihoYW5kbGVTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKTtcclxuICAgICAgICBpZiAoIWNhY2hlZF9sYW5ndWFnZXMuaGFzKGxhbmcpKSB7XHJcbiAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoeyBjb21tYW5kOiBcIkNhY2hlXCIsIGRhdGE6IGxhbmcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZVNlcnZpY2VXb3JrZXJNZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgaWYgKHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nKSB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uLmluc3RhbGxpbmcucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlJlZ2lzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogbGFuZyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTZXJ2aWNlV29ya2VyTWVzc2FnZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmRhdGEubXNnID09IFwiTG9hZGluZ1wiKSB7XHJcbiAgICAgICAgaGFuZGxlTG9hZGluZ01lc3NhZ2UoZXZlbnQuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuZGF0YS5tc2cgPT0gXCJVcGRhdGUgRm91bmRcIikge1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZUZvdW5kTWVzc2FnZSgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmdNZXNzYWdlKGRhdGEpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ19udW1iZXJcIikuaW5uZXJIVE1MID1cclxuICAgICAgICBcIiBcIiArIFwiIGRvd25sb2FkaW5nLi4uIFwiICsgZGF0YS5kYXRhICsgXCIlXCI7XHJcbiAgICBpZiAoZGF0YS5kYXRhID09IDEwMCkge1xyXG4gICAgICAgIGNhY2hlZF9sYW5ndWFnZXMuc2V0KGxhbmcsIFwidHJ1ZVwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDYWNoZWRMYW5ndWFnZXMsIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20oY2FjaGVkX2xhbmd1YWdlcy5lbnRyaWVzKCkpKSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUZvdW5kTWVzc2FnZSgpIHtcclxuICAgIGxldCB0ZXh0ID0gXCJVcGRhdGUgRm91bmRcXG5QcmVzcyBvayB0byB1cGRhdGUuXCI7XHJcbiAgICBpZiAoY29uZmlybSh0ZXh0KSA9PSB0cnVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0ZXh0ID0gXCJZb3UgY2FuY2VsZWQhXCI7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9