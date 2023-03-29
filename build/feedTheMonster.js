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
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "./src/common/common.js");


let inactive_screen = false;
class Sound {
    constructor() {
        this.playingSources = [];
        this.audioContext = new AudioContext();
    }
    playSound(src, type) {
        if (type != _common_js__WEBPACK_IMPORTED_MODULE_1__.PromptAudio) {
            let source = audioContext.createBufferSource();
            source.buffer = audioBuffers[src];
            source.connect(audioContext.destination);
            source.start(0);
            this.playingSources.push(source);
        }
        else {
            fetch(src)
                .then((response) => response.arrayBuffer())
                .then((buffer) => this.audioContext.decodeAudioData(buffer))
                .then((audioBuffer) => {
                var source = this.audioContext.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(this.audioContext.destination);
                if (type == "Intro") {
                    this.playingSources.push(source);
                }
                else {
                    this.playingSources.push(source);
                }
                source.start();
            });
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
        for (var i = 0; i < this.playingSources.length; i++) {
            this.playingSources[i].stop();
        }
        this.playingSources = [];
    }
    changeSourse(src) {
        // this.audio.src = src;
        this.playSound(src);
    }
    playLevelEndHappyAudio(levelWinAudio) {
        // this.audio.src = levelWinAudio;
        // this.playSound(levelWinAudio);
        // setTimeout(() => {
        //   this.introAudio.play();
        // }, 700);
    }
}
let audioContext = new AudioContext();
let audioBuffers = {};
let audioUrls = [
    "./assets/audios/intro.wav",
    "./assets/audios/Cheering-02.mp3",
    "./assets/audios/onDrag.mp3",
    "./assets/audios/timeout.mp3",
    "./assets/audios/LevelWinFanfare.mp3",
    "./assets/audios/LevelLoseFanfare.mp3",
    "./assets/audios/ButtonClick.wav",
    "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + "/audios/fantastic.WAV",
    "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + "/audios/great.wav",
    "./assets/audios/Monster Spits wrong stones-01.mp3",
    "./assets/audios/Disapointed-05.mp3",
];
function loadAudio(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        request.onload = function () {
            audioContext.decodeAudioData(request.response, function (buffer) {
                audioBuffers[url] = buffer;
                resolve();
            });
        };
        request.onerror = function () {
            reject(new Error("Error loading audio file"));
        };
        request.send();
    });
}
let loadPromises = audioUrls.map((url) => loadAudio(url));
Promise.all(loadPromises)
    .then(() => {
    console.log("All audio files preloaded");
    // You can now use the audioBuffers object to play the preloaded audio files
})
    .catch((error) => {
    console.error(error);
});


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
/* harmony import */ var _components_tutorial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tutorial.js */ "./src/components/tutorial.js");
/* harmony import */ var _data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/profile-data.js */ "./src/data/profile-data.js");






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
    constructor(canvas, puzzleData, pausebutton, callBack, levelStart, puzzleIndex) {
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
        this.puzzleIndex = puzzleIndex;
        // this.targetStonePositions = this.getTargetStonePosition(gs.stones);
        this.tutorial = new _components_tutorial_js__WEBPACK_IMPORTED_MODULE_4__.Tutorial(canvas);
        this.showTutorial = ((0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__.getDatafromStorage)().length == undefined) ? true : false;
        this.createCanvas();
        this.tutorial.updateTargetStonePositions(this.getTargetStonePosition(gs.stones));
        this.tutorial.createCanvas();
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
    getTargetStonePosition(stones) {
        let targetPositions = [];
        for (let i = 0; i < gs.stones.length; i++) {
            if (gs.stones[i].text == gs.puzzle.target[0]) {
                targetPositions.push(gs.stones[i].origx);
                targetPositions.push(gs.stones[i].origy);
                break;
            }
        }
        return targetPositions;
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
        // setTimeout(() => {
        this.tutorial.updateTargetStonePositions(this.getTargetStonePosition(gs.stones));
        (this.showTutorial && this.puzzleIndex == 0) ? this.tutorial.animateImage() : () => { };
        // }, 500);
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
        this.startx = startX;
        this.starty = startY;
        this.endx = this.game.width / 2;
        this.endy = this.game.height / 2;
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.TutorialLayer);
        this.elementId = document.getElementById(this.id);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = "6";
        this.canavsElement.style.bottom = "0";
        endX = this.width / 2;
        endY = this.height / 2;
        // this.animateImage();
        self.elementId.addEventListener('click', function (event) {
            console.log('Clicked and touched');
            self.deleteCanvas();
        });
    }
    updateTargetStonePositions(targetStonePosition) {
        startX = targetStonePosition[0] - 22;
        startY = targetStonePosition[1] - 50;
        this.startx = targetStonePosition[0] - 22;
        this.starty = targetStonePosition[1] - 50;
    }
    changeZindex(index) {
        this.canavsElement.style.zIndex = index;
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    animateImage() {
        let x = startX;
        let y = startY;
        const dx = (this.endx - this.startx) / 60;
        const dy = (this.endy - this.starty) / 60;
        let absdx = (this.isMobile()) ? Math.abs(dx) * 3 : Math.abs(dx);
        let absdy = (this.isMobile()) ? Math.abs(dy) * 3 : Math.abs(dy);
        function between(x, min, max) {
            return x >= min && x <= max;
        }
        setTimeout(() => {
            const startTime = performance.now();
            const animate = () => {
                if (between(x, this.startx - 15, startX + 15) && between(y, this.starty - 15, startY + 15)) {
                    this.changeZindex(7);
                }
                else {
                    this.changeZindex(6);
                }
                if ((x <= this.endx + absdx && x >= this.endx - absdx) &&
                    (y <= this.endy + absdy && y >= this.endy - absdy)) {
                    // setTimeout(() => {
                    setTimeout(() => {
                        x = this.startx;
                        y = this.starty;
                        cancelAnimationFrame(this.animationFrame);
                        this.changeZindex(0);
                        // this.animationFrame=requestAnimationFrame(animate)
                    }, 500);
                    // setTimeout(()=>{
                    //   this.deleteCanvas();
                    // },500)
                    // requestAnimationFrame(animate);
                    // this.deleteCanvas();
                    // }, 500);
                    return;
                }
                x = (dx >= 0) ? x + absdx : x - absdx;
                y = (dy >= 0) ? y + absdy : y - absdy;
                this.draw(x, y);
                this.animationFrame = requestAnimationFrame(animate);
            };
            this.animationFrame = requestAnimationFrame(animate);
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
        if (navigator.onLine) {
            this.levelEndFirebaseEvents();
        }
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
        this.stones = new _components_stones_layer_js__WEBPACK_IMPORTED_MODULE_3__["default"](game, levelData.puzzles[current_puzzle_index], this.pauseButton, this.redrawOfStones, this, current_puzzle_index);
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
                // if (noMoreTarget && button_name != "close_button") {
                //   setTimeout(() => {
                //     self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
                //     self.promptText.setCurrrentPuzzleData(
                //       self.puzzleData[current_puzzle_index]
                //     );
                //     self.timerTicking.draw();
                //     self.promptText.draw();
                //   }, 1000);
                // }
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
                case "dragMonsterAnimation": {
                    self.monster.changeToDragAnimation();
                    break;
                }
                case "stopDragMonsterAnimation": {
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
                    if (navigator.onLine) {
                        self.puzzleEndFirebaseEvents("success", current_puzzle_index, picked_stones, self.levelData.puzzles[current_puzzle_index].targetStones, self.levelData.puzzles[current_puzzle_index].foilStones, self.puzzleStartTime);
                    }
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
                if (navigator.onLine) {
                    self.puzzleEndFirebaseEvents("failure", current_puzzle_index, picked_stones, self.levelData.puzzles[current_puzzle_index].targetStones, self.levelData.puzzles[current_puzzle_index].foilStones, self.puzzleStartTime);
                }
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
        this.showTutorial = gameLevelData.length == undefined ? true : false;
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
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.TutorialLayer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZFRoZU1vbnN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZrRDtBQUNSO0FBQzFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVc7QUFDdkI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxzREFBSTtBQUM3RCw0REFBNEQsc0RBQUk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaUQ7QUFDUDtBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtREFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQUk7QUFDcEIsZ0JBQWdCLHNEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckdNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzRFO0FBQ25CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzRUFBdUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlFQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSwyREFBWTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SHNEO0FBQ0c7QUFDSDtBQUNGO0FBQ0E7QUFDckM7QUFDZjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsOERBQWU7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpRUFBWTtBQUNoRCxtQ0FBbUMsZ0VBQVc7QUFDOUM7QUFDQTtBQUNBLG1DQUFtQyxnRUFBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RHNEO0FBQ0c7QUFDUjtBQUNqRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNEQUFJO0FBQ25EO0FBQ0E7QUFDQSwyQ0FBMkMsc0RBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLDhEQUFlO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHOEQ7QUFDTDtBQUNBO0FBQ2Y7QUFDVztBQUNRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlFQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBUTtBQUNwQyw2QkFBNkIseUVBQWtCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLDBEQUFXO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSx5REFBVTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiwwREFBVztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUVBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0U2dFO0FBQ1A7QUFDbEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLDhEQUFlO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsdURBQVE7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdGb0Q7QUFDSztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlFQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSw0REFBYTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNpRDtBQUNqRCx3QkFBd0Isc0RBQUksYUFBYSxzREFBSTtBQUN0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdpRDtBQUMxQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaURBQWlELHNEQUFJLG9CQUFvQjtBQUN6RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDbUQ7QUFDNUM7QUFDUDtBQUNBO0FBQ0Esc0RBQXNELDREQUFjO0FBQ3BFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ5RDtBQUNNO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlFQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSwyREFBWTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQ4RDtBQUNMO0FBQ3pEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNFQUF1QjtBQUN4RCx5QkFBeUIsa0VBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EaUQ7QUFDcUQ7QUFDdEM7QUFDRjtBQUNFO0FBQ1E7QUFDRTtBQUNqQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsK0JBQStCLGlFQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBZ0IsS0FBSyw4REFBVztBQUN4QztBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsNERBQWE7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLHlEQUFVO0FBQ3JGO0FBQ0EsaUVBQWlFLDREQUFhO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSx5REFBVTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esc0ZBQXNGLDREQUFhO0FBQ25HO0FBQ0E7QUFDQSwrRkFBK0YsbUVBQW9CO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEVBQVU7QUFDaEM7QUFDQSwrQkFBK0IsMkVBQVc7QUFDMUM7QUFDQTtBQUNBLCtCQUErQiwyRUFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrRkFBZ0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS3lEO0FBQ0Q7QUFDdkI7QUFDd0U7QUFDbEU7QUFDc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGtFQUFtQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSx5REFBVTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHlEQUFVO0FBQ3BFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0VBQXdFLGtFQUFtQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLGtFQUFtQjtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsMERBQVc7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyx5QkFBeUIsZ0VBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFJO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNEQUFJO0FBQ2pDLDZCQUE2QixrRUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL2dsb2JhbC12YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tbW9uL2xldmVsLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9zb3VuZC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9zdG9uZXMtY29uZmlnLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2NhbmNlbF9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2luc3RhbGxfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL25leHRfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3BhdXNlX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9wbGF5X2J1dG9vbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9yZXRyeV9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2xldmVsLWluZGljYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL21vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3BhdXNlLXBvcHVwLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9wcm9tcHQtdGV4dC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvc3RvbmVzLWxheWVyLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy90aW1lci10aWNraW5nLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy90dXRvcmlhbC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvYXBpLWRhdGEuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9kYXRhL2RhdGEtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9kYXRhL3Byb2ZpbGUtZGF0YS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2NvbmZpZy50cyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2ludGVncmF0aW9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2dhbWUtZW5kLXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvbGV2ZWwtZW5kLXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2xldmVsLXNlbGVjdGlvbi1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9sZXZlbC1zdGFydC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9zdGFydC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9ub2RlX21vZHVsZXMvd29ya2JveC13aW5kb3cvYnVpbGQvd29ya2JveC13aW5kb3cucHJvZC5lczUubWpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vZmVlZFRoZU1vbnN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4vL2V4cG9ydCB2YXIgbGFuZyA9IHVybFBhcmFtcy5nZXQoXCJmdG1fbGFuZ3VhZ2VcIik7XHJcbmV4cG9ydCB2YXIgbGFuZyA9IFwiZW5nbGlzaFwiO1xyXG4iLCJpbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZXMoc291cmNlcywgY2FsbGJhY2spIHtcclxuICAgIHZhciBpbWFnZXMgPSB7fTtcclxuICAgIHZhciBsb2FkZWRJbWFnZXMgPSAwO1xyXG4gICAgdmFyIG51bUltYWdlcyA9IDA7XHJcbiAgICAvLyBnZXQgbnVtIG9mIHNvdXJjZXNcclxuICAgIGZvciAodmFyIHNyYyBpbiBzb3VyY2VzKSB7XHJcbiAgICAgICAgbnVtSW1hZ2VzKys7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBzcmMgaW4gc291cmNlcykge1xyXG4gICAgICAgIGltYWdlc1tzcmNdID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2VzW3NyY10ub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoKytsb2FkZWRJbWFnZXMgPj0gbnVtSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpbWFnZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWFnZXNbc3JjXS5zcmMgPSBzb3VyY2VzW3NyY107XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRpbmdTY3JlZW4obG9hZGluZykge1xyXG4gICAgY29uc3QgbG9hZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmctc2NyZWVuXCIpO1xyXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdfdGV4dFwiKTtcclxuICAgIGxvYWRpbmdUZXh0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgbG9hZGluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuYmtnQ2FudmFzLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCk7XHJcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxvYWRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuYmtnQ2FudmFzLmxheWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCk7XHJcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgTW9uc3RlckxheWVyID0gXCJtb25zdGVyQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBUdXRvcmlhbExheWVyID0gXCJ0dXRvcmlhbENhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgUGF1c2VQb3B1cExheWVyID0gXCJwYXVzZXBvcHVwQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBTdG9uZUxheWVyID0gXCJzdG9uZUNhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgVGltZXRpY2tlckxheWVyID0gXCJ0aW1ldGlja0NhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgTGV2ZWxFbmRMYXllciA9IFwibGV2ZWxFbmRDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IExldmVsRW5kQnV0dG9uc0xheWVyID0gXCJsZXZlbEVuZEJ1dHRvbnNDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IExldmVsU2VsZWN0aW9uTGF5ZXIgPSBcImxldmVsU2VsZWN0aW9uQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBMZXZlbFN0YXJ0TGF5ZXIgPSBcImxldmVsU3RhcnRDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IFN0YXJ0U2NlbmVMYXllciA9IFwic3RhcnRTY2VuZUNhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgUGxheUJ1dHRvbkxheWVyID0gXCJwbGF5QnV0dG9uQ2FudmFzXCI7XHJcbmV4cG9ydCBjb25zdCBHYW1lRW5kTGF5ZXIgPSBcIkdhbWVFbmRDYW52YXNcIjtcclxuZXhwb3J0IGNvbnN0IEZpcmViYXNlVXNlckNsaWNrZWQgPSBcInVzZXJfY2xpY2tlZFwiO1xyXG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VySW5zdGFsbCA9IFwidXNlcl9pbnN0YWxsZWRcIjtcclxuZXhwb3J0IGNvbnN0IFByb21wdFRleHRMYXllciA9IFwicHJvbXB0VGV4dENhbnZhc1wiO1xyXG5leHBvcnQgY29uc3QgUFdBSW5zdGFsbFN0YXR1cyA9IFwicHdhX2luc3RhbGxlZF9zdGF0dXNcIjtcclxuZXhwb3J0IGNvbnN0IFVzZXJDYW5jZWxsZWQgPSBcInVzZXJfY2FuY2VsX2luc3RhbGxhdGlvblwiO1xyXG5leHBvcnQgY29uc3QgTmF0aXZlUGxheUJ1dHRvbiA9IFwibmF0aXZlX3BsYXlidXR0b25fY2xpY2tlZFwiO1xyXG5leHBvcnQgY29uc3QgUHJldmlvdXNQbGF5ZWRMZXZlbCA9IFwic3RvcmVQcmV2aW91c1BsYXllZExldmVsXCIgKyBsYW5nO1xyXG5leHBvcnQgY29uc3QgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgPSBcInN0b3JlTW9uc3RlclBoYXNlTnVtYmVyXCIgKyBsYW5nO1xyXG5leHBvcnQgY29uc3QgQ2FjaGVkTGFuZ3VhZ2VzID0gXCJjYWNoZWRfbGFuZ3VhZ2VzXCI7XHJcbmV4cG9ydCBjb25zdCBNb25zdGVyQXVkaW8gPSBcIm1vbnN0ZXJfYXVkaW9cIjtcclxuZXhwb3J0IGNvbnN0IEZlZWRiYWNrQXVkaW8gPSBcImZlZWRiYWNrX2F1ZGlvXCI7XHJcbmV4cG9ydCBjb25zdCBJbnRyb011c2ljID0gXCJpbnRyb19tdXNpY1wiO1xyXG5leHBvcnQgY29uc3QgUHJvbXB0QXVkaW8gPSBcInByb21wdF9hdWRpb1wiO1xyXG5leHBvcnQgY29uc3QgQnV0dG9uQ2xpY2sgPSBcImJ1dHRvbl9jbGlja1wiO1xyXG5leHBvcnQgY29uc3QgVGltZU92ZXIgPSBcInRpbWVfb3ZlclwiO1xyXG5leHBvcnQgY29uc3QgU3RvbmVNdXNpYyA9IFwic3RvbmVfbXVzaWNcIjtcclxuZXhwb3J0IGNvbnN0IFBocmFzZUF1ZGlvID0gXCJwaHJhc2VfYXVkaW9cIjtcclxuZXhwb3J0IGNvbnN0IExldmVsRW5kQXVkaW8gPSBcImxldmVsX2VuZF9hdWRpb1wiO1xyXG4iLCJleHBvcnQgY2xhc3MgTGV2ZWxDb25maWcge1xyXG4gICAgY29uc3RydWN0b3IoeFBvcywgeVBvcywgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnggPSB4UG9zO1xyXG4gICAgICAgIHRoaXMueSA9IHlQb3M7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuZHJhd3JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBJY29uLnBuZ1wiO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBQcm9tcHRBdWRpbyB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xyXG5sZXQgaW5hY3RpdmVfc2NyZWVuID0gZmFsc2U7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGxheWluZ1NvdXJjZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuICAgIH1cclxuICAgIHBsYXlTb3VuZChzcmMsIHR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZSAhPSBQcm9tcHRBdWRpbykge1xyXG4gICAgICAgICAgICBsZXQgc291cmNlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG4gICAgICAgICAgICBzb3VyY2UuYnVmZmVyID0gYXVkaW9CdWZmZXJzW3NyY107XHJcbiAgICAgICAgICAgIHNvdXJjZS5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICAgICAgICAgIHNvdXJjZS5zdGFydCgwKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5aW5nU291cmNlcy5wdXNoKHNvdXJjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmZXRjaChzcmMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoYnVmZmVyKSA9PiB0aGlzLmF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChhdWRpb0J1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGF1ZGlvQnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJJbnRyb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nU291cmNlcy5wdXNoKHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmdTb3VyY2VzLnB1c2goc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNvdXJjZS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhY3RpdmVTY3JlZW4oKSB7XHJcbiAgICAgICAgaWYgKGluYWN0aXZlX3NjcmVlbikge1xyXG4gICAgICAgICAgICBpbmFjdGl2ZV9zY3JlZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VTb3VuZCgpO1xyXG4gICAgICAgICAgICBpbmFjdGl2ZV9zY3JlZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBhdXNlU291bmQoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXlpbmdTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWluZ1NvdXJjZXNbaV0uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXlpbmdTb3VyY2VzID0gW107XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTb3Vyc2Uoc3JjKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hdWRpby5zcmMgPSBzcmM7XHJcbiAgICAgICAgdGhpcy5wbGF5U291bmQoc3JjKTtcclxuICAgIH1cclxuICAgIHBsYXlMZXZlbEVuZEhhcHB5QXVkaW8obGV2ZWxXaW5BdWRpbykge1xyXG4gICAgICAgIC8vIHRoaXMuYXVkaW8uc3JjID0gbGV2ZWxXaW5BdWRpbztcclxuICAgICAgICAvLyB0aGlzLnBsYXlTb3VuZChsZXZlbFdpbkF1ZGlvKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgIHRoaXMuaW50cm9BdWRpby5wbGF5KCk7XHJcbiAgICAgICAgLy8gfSwgNzAwKTtcclxuICAgIH1cclxufVxyXG5sZXQgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG5sZXQgYXVkaW9CdWZmZXJzID0ge307XHJcbmxldCBhdWRpb1VybHMgPSBbXHJcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIixcclxuICAgIFwiLi9hc3NldHMvYXVkaW9zL0NoZWVyaW5nLTAyLm1wM1wiLFxyXG4gICAgXCIuL2Fzc2V0cy9hdWRpb3Mvb25EcmFnLm1wM1wiLFxyXG4gICAgXCIuL2Fzc2V0cy9hdWRpb3MvdGltZW91dC5tcDNcIixcclxuICAgIFwiLi9hc3NldHMvYXVkaW9zL0xldmVsV2luRmFuZmFyZS5tcDNcIixcclxuICAgIFwiLi9hc3NldHMvYXVkaW9zL0xldmVsTG9zZUZhbmZhcmUubXAzXCIsXHJcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIixcclxuICAgIFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2F1ZGlvcy9mYW50YXN0aWMuV0FWXCIsXHJcbiAgICBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9hdWRpb3MvZ3JlYXQud2F2XCIsXHJcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9Nb25zdGVyIFNwaXRzIHdyb25nIHN0b25lcy0wMS5tcDNcIixcclxuICAgIFwiLi9hc3NldHMvYXVkaW9zL0Rpc2Fwb2ludGVkLTA1Lm1wM1wiLFxyXG5dO1xyXG5mdW5jdGlvbiBsb2FkQXVkaW8odXJsKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgZnVuY3Rpb24gKGJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9CdWZmZXJzW3VybF0gPSBidWZmZXI7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiRXJyb3IgbG9hZGluZyBhdWRpbyBmaWxlXCIpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgfSk7XHJcbn1cclxubGV0IGxvYWRQcm9taXNlcyA9IGF1ZGlvVXJscy5tYXAoKHVybCkgPT4gbG9hZEF1ZGlvKHVybCkpO1xyXG5Qcm9taXNlLmFsbChsb2FkUHJvbWlzZXMpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFsbCBhdWRpbyBmaWxlcyBwcmVsb2FkZWRcIik7XHJcbiAgICAvLyBZb3UgY2FuIG5vdyB1c2UgdGhlIGF1ZGlvQnVmZmVycyBvYmplY3QgdG8gcGxheSB0aGUgcHJlbG9hZGVkIGF1ZGlvIGZpbGVzXHJcbn0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxufSk7XHJcbiIsImV4cG9ydCBjbGFzcyBTdG9uZUNvbmZpZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdG9uZUxldHRlciwgeFBvcywgeVBvcykge1xyXG4gICAgICAgIHRoaXMueCA9IHhQb3M7XHJcbiAgICAgICAgdGhpcy55ID0geVBvcztcclxuICAgICAgICB0aGlzLm9yaWd4ID0geFBvcztcclxuICAgICAgICB0aGlzLm9yaWd5ID0geVBvcztcclxuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHN0b25lTGV0dGVyO1xyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc3RvbmVfcGlua192MDIucG5nXCI7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FuY2VsQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IGNhbnZhcy53aWR0aCAqIDAuMSArIChjYW52YXMud2lkdGggKiAwLjE1KSAvIDI7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gY2FudmFzLmhlaWdodCAqIDAuMjtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9jbG9zZV9idG4ucG5nXCI7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBfYnRuLnBuZ1wiO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcclxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgK1xyXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0YWxsQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9JbnN0YWxsX2J1dHRvbi5wbmdcIjtcclxuICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoIC8gMywgc2VsZi5jYW52YXMud2lkdGggLyA2KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICpcclxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikgK1xyXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyAxMikgKlxyXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtIHRoaXMuY2FudmFzLndpZHRoIC8gMTIpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLmNhbnZhcy53aWR0aCAvIDgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcclxuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25leHRfYnRuLnBuZ1wiO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcclxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgK1xyXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZUJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLnBvc1ggPSBjYW52YXMud2lkdGggLSBjYW52YXMuaGVpZ2h0ICogMC4wOTtcclxuICAgICAgICB0aGlzLnBvc1kgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BhdXNlX3YwMS5wbmdcIjtcclxuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwYXVzZV9idXR0b25faW1hZ2UsIHNlbGYucG9zWCwgc2VsZi5wb3NZLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSAqXHJcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMikpO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcclxuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL1BsYXlfYnV0dG9uLnBuZ1wiO1xyXG4gICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggLyAzLCBzZWxmLmNhbnZhcy53aWR0aCAvIDMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLmNhbnZhcy53aWR0aCAvIDgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHJ5QnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9yZXRyeV9idG4ucG5nXCI7XHJcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxyXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSArXHJcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcclxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpKTtcclxuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBMZXZlbEluZGljYXRvcnMge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBhY3RpdmVJbmRpY2F0b3JzKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGljYXRvcnMgPSBhY3RpdmVJbmRpY2F0b3JzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgc2V0SW5kaWNhdG9ycyhpbnQpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGljYXRvcnMgPSBpbnQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcyk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgbGV2ZWxfaW5kaWNhdG9yID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgbGV2ZWxfaW5kaWNhdG9yLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2xldmVsc192MDEucG5nXCI7XHJcbiAgICAgICAgdmFyIGJhcl9lbXB0eSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGJhcl9lbXB0eS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9iYXJfZW1wdHlfdjAxLnBuZ1wiO1xyXG4gICAgICAgIGxldmVsX2luZGljYXRvci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKGxldmVsX2luZGljYXRvciwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCAwLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpO1xyXG4gICAgICAgICAgICBiYXJfZW1wdHkub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShiYXJfZW1wdHksICgoc2VsZi5jYW52YXMud2lkdGggKiAwLjM1KSAvIDcpICogKGkgKyAxKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMiAtIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDYsIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gMTAsIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZShzZWxmKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKHNlbGYpIHtcclxuICAgICAgICB2YXIgYmFyX2Z1bGwgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBiYXJfZnVsbC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9iYXJfZnVsbF92MDEucG5nXCI7XHJcbiAgICAgICAgYmFyX2Z1bGwub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFjdGl2ZUluZGljYXRvcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShiYXJfZnVsbCwgKChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gNykgKiAoaSArIDEpICsgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyIC0gKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gNiwgKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyAxMCwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vbnN0ZXJMYXllciwgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG52YXIgbGFzdFRpbWUgPSAwO1xyXG52YXIgc2VsZjtcclxudmFyIGFuaW1hdGlvbkZyYW1lO1xyXG52YXIgbW9uc3RlclBoYXNlTnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIpIHx8IDE7XHJcbmNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+LlwiKTtcclxuY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcclxudmFyIGVhdEltZyA9IG5ldyBJbWFnZSgpO1xyXG5lYXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZWF0MVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XHJcbnZhciBpZGxlSW1nID0gbmV3IEltYWdlKCk7XHJcbmlkbGVJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIG1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiO1xyXG52YXIgc3BpdEltZyA9IG5ldyBJbWFnZSgpO1xyXG5zcGl0SW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3NwaXQxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIjtcclxudmFyIGRyYWdJbWcgPSBuZXcgSW1hZ2UoKTtcclxuZHJhZ0ltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9kcmFnMVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XHJcbmNvbnNvbGUubG9nKFwibW9uc3RlcmV4ZWN1dGluZ1wiKTtcclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgemluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnppbmRleCA9IHppbmRleDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5nYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5nYW1lLmhlaWdodDtcclxuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb25zdGVyXCIpO1xyXG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhGcmFtZSA9IDY7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLndpZHRoIC8gMiAtIHRoaXMuZ2FtZS53aWR0aCAqIDAuMjQzO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2FtZS53aWR0aCAvIDM7XHJcbiAgICAgICAgdGhpcy5mcHMgPSAxMDtcclxuICAgICAgICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcHM7XHJcbiAgICAgICAgdGhpcy5mcmFtZVRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIE1vbnN0ZXJMYXllcik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI2XCI7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKDApO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlWmluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lVGltZXIgPiB0aGlzLmZyYW1lSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgdGhpcy5tYXhGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyICs9IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgNzcwICogdGhpcy5mcmFtZVgsIDEzODYgKiB0aGlzLmZyYW1lWSwgNzY4LCAxMzg2LCB0aGlzLngsIHRoaXMueSAqIDAuOCwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMS41KTtcclxuICAgIH1cclxuICAgIGNoYW5nZUltYWdlKHNyYykge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKDApO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmZyYW1lWSA9PSAxKSB7XHJcbiAgICAgICAgLy8gICB0aGlzLmZyYW1lWSA9IDA7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIHRoaXMuZnJhbWVZID0gMTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBzcmM7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VQaGFzZU51bWJlcihtb25zdGVyUGhhc2VOdW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vbnN0ZXIgY2hhbmdpbmdcIik7XHJcbiAgICAgICAgZWF0SW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgZWF0SW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2VhdDFcIiArIG1vbnN0ZXJQaGFzZU51bSArIFwiLnBuZ1wiO1xyXG4gICAgICAgIGlkbGVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpZGxlSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2lkbGUxXCIgKyBtb25zdGVyUGhhc2VOdW0gKyBcIi5wbmdcIjtcclxuICAgICAgICBzcGl0SW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgc3BpdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zcGl0MVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XHJcbiAgICAgICAgZHJhZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGRyYWdJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZHJhZzFcIiArIG1vbnN0ZXJQaGFzZU51bSArIFwiLnBuZ1wiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVhdEltZy5zcmMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkbGVJbWcuc3JjKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzcGl0SW1nLnNyYyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcclxuICAgIH1cclxuICAgIGNoYW5nZVRvRHJhZ0FuaW1hdGlvbigpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gZHJhZ0ltZztcclxuICAgIH1cclxuICAgIGNoYW5nZVRvRWF0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBlYXRJbWc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9JZGxlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VUb0lkbGVBbmltYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGlkbGVJbWc7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VUb1NwaXRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHNwaXRJbWc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9JZGxlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRpb24odGltZVN0YW1wKSB7XHJcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIGxhc3RUaW1lO1xyXG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgICAgIHNlbGYudXBkYXRlKGRlbHRhVGltZSk7XHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2VsZi5hbmltYXRpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBhdXNlUG9wdXBMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbmltcG9ydCBDYW5jZWxCdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9jYW5jZWxfYnV0dG9uLmpzXCI7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2Nsb3NlX2J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgUmV0cnlCdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9yZXRyeV9idXR0b24uanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF1c2VQb3BVcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGxldmVsU3RhcnQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgUGF1c2VQb3B1cExheWVyKTtcclxuICAgICAgICBjb25zdCBzZWxmSWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gc2VsZklkRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgc2VsZklkRWxlbWVudC5zdHlsZS56SW5kZXggPSBcIjExXCI7XHJcbiAgICAgICAgc2VsZklkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xyXG4gICAgICAgIHZhciBwb3BfdXBfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBwb3BfdXBfaW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcG9wdXBfYmdfdjAxLnBuZ1wiO1xyXG4gICAgICAgIHBvcF91cF9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBvcF91cF9pbWFnZSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjEsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjgsIHNlbGYuY2FudmFzLndpZHRoICogMC44KTtcclxuICAgICAgICAgICAgc2VsZi5jYW5jZWxCdXR0b24gPSBuZXcgQ2FuY2VsQnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMpO1xyXG4gICAgICAgICAgICBzZWxmLnJldHJ5QnV0dG9uID0gbmV3IFJldHJ5QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC41NSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yICtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLndpZHRoICogMC40IC1cclxuICAgICAgICAgICAgICAgIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMik7XHJcbiAgICAgICAgICAgIHNlbGYuY2xvc2VCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjI1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIgK1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMud2lkdGggKiAwLjQgLVxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlbGZJZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZJZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jYW5jZWxCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LnRpbWVyVGlja2luZy5yZXN1bWVUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGVsZXRlQ2FudmFzKHNlbGYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnJldHJ5QnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5sZXZlbEVuZENhbGxCYWNrKFwicmV0cnlfYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuY2xvc2VCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJjbG9zZV9idXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRlbGV0ZUNhbnZhcyhzZWxmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKHNlbGYpIHtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHsgfVxyXG4gICAgdXBkYXRlKCkgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvbXB0VGV4dExheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XHJcbnZhciBzZWxmO1xyXG5leHBvcnQgY2xhc3MgUHJvbXB0VGV4dCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBsZXZlbFN0YXJ0LCBjdXJyZW50UHV6emxlRGF0YSwgbGV2ZWxEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcclxuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IGxldmVsRGF0YTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0ID0gY3VycmVudFB1enpsZURhdGEucHJvbXB0LnByb21wdFRleHQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHV6emxlRGF0YSA9IGN1cnJlbnRQdXp6bGVEYXRhO1xyXG4gICAgICAgIHRoaXMuZm50c3RPckdydEltZ0FyciA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkRmFudGFzdGljQW5kR3JlYXRJbWFnZSgpO1xyXG4gICAgfVxyXG4gICAgbG9hZEZhbnRhc3RpY0FuZEdyZWF0SW1hZ2UoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmFudGFzdGljX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5mYW50YXN0aWNfaW1hZ2Uuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2ZhbnRhc3RpY18wMS5wbmdcIjtcclxuICAgICAgICB0aGlzLmZudHN0T3JHcnRJbWdBcnIucHVzaCh0aGlzLmZhbnRhc3RpY19pbWFnZSk7XHJcbiAgICAgICAgdGhpcy5ncmVhdF9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JlYXRfaW1hZ2Uuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2dyZWF0XzAxLnBuZ1wiO1xyXG4gICAgICAgIHRoaXMuZm50c3RPckdydEltZ0Fyci5wdXNoKHRoaXMuZ3JlYXRfaW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBQcm9tcHRUZXh0TGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDU7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJycmVudFB1enpsZURhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFB1enpsZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb21wdFRleHQgPSBkYXRhLnByb21wdC5wcm9tcHRUZXh0O1xyXG4gICAgfVxyXG4gICAgc2hvd0ZhbnRhc3RpY09yR3JlYXQoaW1hZ2VJbmRleCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRoaXMuZ2FtZS53aWR0aCAvIDIgLSAodGhpcy5nYW1lLndpZHRoICogMC41KSAvIDIsIHRoaXMuaGVpZ2h0ICogMC4xNSwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMjUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2Uoc2VsZi5mbnRzdE9yR3J0SW1nQXJyW2ltYWdlSW5kZXhdLCB0aGlzLmdhbWUud2lkdGggLSB0aGlzLmdhbWUud2lkdGggKiAwLjc1LCB0aGlzLmhlaWdodCAqIDAuMiwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcclxuICAgIH1cclxuICAgIGRyYXcoZHJvcHBlZFN0b25lcyA9IDApIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMucHJvbXB0X2ltYWdlLCB0aGlzLmdhbWUud2lkdGggLyAyIC0gKHRoaXMuZ2FtZS53aWR0aCAqIDAuNSkgLyAyLCB0aGlzLmhlaWdodCAqIDAuMTUsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5oZWlnaHQgKiAwLjI1KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gMzAgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY29uc3QgcHJvbXB0VGV4dExldHRlcnMgPSB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0LnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHggPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB5ID0gdGhpcy5oZWlnaHQgKiAwLjI2O1xyXG4gICAgICAgIHZhciBmb250U2l6ZSA9IDIwO1xyXG4gICAgICAgIHZhciBsZXR0ZXJIaWdobGlnaHQgPSB0aGlzLmN1cnJlbnRQdXp6bGVEYXRhLnRhcmdldFN0b25lc1swXS5zcGxpdChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMZXR0ZXJJbldvcmRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJIaWdobGlnaHQuaW5jbHVkZXMocHJvbXB0VGV4dExldHRlcnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlckhpZ2hsaWdodCA9IGxldHRlckhpZ2hsaWdodC5zbGljZSgxLCBsZXR0ZXJIaWdobGlnaHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHByb21wdFRleHRMZXR0ZXJzW2ldLCBmb250U2l6ZSAqIGkgKyB4IC0gcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoICogNiwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIldvcmRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkcm9wcGVkU3RvbmVzID4gaSB8fCBkcm9wcGVkU3RvbmVzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFRleHQoXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFByb21wdFRleHQsXHJcbiAgICAgICAgLy8gICB0aGlzLndpZHRoIC8gMi4xLFxyXG4gICAgICAgIC8vICAgdGhpcy5oZWlnaHQgKiAwLjI2XHJcbiAgICAgICAgLy8gKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgc2VsZi5wcm9tcHRfaW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcHJvbXB0VGV4dEJnLnBuZ1wiO1xyXG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZHJhdygpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCYWNrZ3JvdW5kKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvbXB0QXVkaW8sIFN0b25lTGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBTdG9uZUNvbmZpZyB9IGZyb20gXCIuLi9jb21tb24vc3RvbmVzLWNvbmZpZy5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgUGF1c2VQb3BVcCBmcm9tIFwiLi9wYXVzZS1wb3B1cC5qc1wiO1xyXG5pbXBvcnQgeyBUdXRvcmlhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3R1dG9yaWFsLmpzXCI7XHJcbmltcG9ydCB7IGdldERhdGFmcm9tU3RvcmFnZSB9IGZyb20gXCIuLi9kYXRhL3Byb2ZpbGUtZGF0YS5qc1wiO1xyXG52YXIgZ3MgPSB7XHJcbiAgICBtb2RlOiBcImdhbWVwbGF5XCIsXHJcbiAgICBsZXZlbG51bTogMCxcclxufTtcclxuZ3MucHV6emxlID0ge1xyXG4gICAgdGFyZ2V0OiBbXSxcclxuICAgIHN0b25lczogW10sXHJcbn07XHJcbmdzLnN0b25lcyA9IFtdO1xyXG52YXIgcGlja2VkU3RvbmU7XHJcbnZhciBvZmZzZXRDb29yZGluYXRlVmFsdWUgPSAzMjtcclxuY29uc3QgZHJhZ0F1ZGlvID0gbmV3IEF1ZGlvKCk7XHJcbmRyYWdBdWRpby5zcmMgPSBcIi4vYXNzZXRzL2F1ZGlvcy9vbkRyYWcubXAzXCI7XHJcbmRyYWdBdWRpby5wcmVsb2FkID0gXCJhdXRvXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b25lc0xheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgcHV6emxlRGF0YSwgcGF1c2VidXR0b24sIGNhbGxCYWNrLCBsZXZlbFN0YXJ0LCBwdXp6bGVJbmRleCkge1xyXG4gICAgICAgIHRoaXMucGlja2VkU3RvbmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcclxuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMucGF1c2VidXR0b24gPSBwYXVzZWJ1dHRvbjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBwdXp6bGVEYXRhO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFB1enpsZSgpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxCYWNrO1xyXG4gICAgICAgIHRoaXMucHV6emxlSW5kZXggPSBwdXp6bGVJbmRleDtcclxuICAgICAgICAvLyB0aGlzLnRhcmdldFN0b25lUG9zaXRpb25zID0gdGhpcy5nZXRUYXJnZXRTdG9uZVBvc2l0aW9uKGdzLnN0b25lcyk7XHJcbiAgICAgICAgdGhpcy50dXRvcmlhbCA9IG5ldyBUdXRvcmlhbChjYW52YXMpO1xyXG4gICAgICAgIHRoaXMuc2hvd1R1dG9yaWFsID0gKGdldERhdGFmcm9tU3RvcmFnZSgpLmxlbmd0aCA9PSB1bmRlZmluZWQpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy50dXRvcmlhbC51cGRhdGVUYXJnZXRTdG9uZVBvc2l0aW9ucyh0aGlzLmdldFRhcmdldFN0b25lUG9zaXRpb24oZ3Muc3RvbmVzKSk7XHJcbiAgICAgICAgdGhpcy50dXRvcmlhbC5jcmVhdGVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIHNldE5ld1B1enpsZShjdXJyZW50UHV6emxlKSB7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVEYXRhID0gY3VycmVudFB1enpsZTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRQdXp6bGUoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVN0b25lcyh0aGlzLnN0b25lcG9zKTtcclxuICAgIH1cclxuICAgIHN0b25lcG9zKHN0b25lcG9zKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50UHV6emxlKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydC5hdWRpby5wbGF5U291bmQodGhpcy5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRBdWRpbywgUHJvbXB0QXVkaW8pO1xyXG4gICAgICAgIGdzLnB1enpsZS5zdG9uZXMgPSBbXTtcclxuICAgICAgICBncy5wdXp6bGUudGFyZ2V0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGFyZ2V0IG9mIHRoaXMucHV6emxlRGF0YS50YXJnZXRTdG9uZXMpIHtcclxuICAgICAgICAgICAgZ3MucHV6emxlLnRhcmdldC5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdzLnB1enpsZS5zdG9uZXMgPSB0aGlzLmdhbWVTdG9uZU9wdGlvbnModGhpcy5wdXp6bGVEYXRhLmZvaWxTdG9uZXMsIHRoaXMucHV6emxlRGF0YS50YXJnZXRTdG9uZXMpO1xyXG4gICAgICAgIGdzLnB1enpsZS5wcm9tcHQgPSB0aGlzLnB1enpsZURhdGEucHJvbXB0LnByb21wdFRleHQ7XHJcbiAgICB9XHJcbiAgICBpc1RpbWVyRW5kZWQoKSB7XHJcbiAgICAgICAgcGlja2VkU3RvbmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGlja2VkU3RvbmVzID0gW107XHJcbiAgICB9XHJcbiAgICBnYW1lU3RvbmVPcHRpb25zKGZvaWxTdG9uZXMsIHRhcmdldFN0b25lcykge1xyXG4gICAgICAgIHRhcmdldFN0b25lcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGZvaWxTdG9uZXMuaW5kZXhPZihlKSAhPSAtMVxyXG4gICAgICAgICAgICAgICAgPyBmb2lsU3RvbmVzLnNwbGljZShmb2lsU3RvbmVzLmluZGV4T2YoZSksIDEpXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFyZ2V0U3RvbmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZm9pbFN0b25lcy5wdXNoKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmb2lsU3RvbmVzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBTdG9uZUxheWVyKTtcclxuICAgICAgICBjb25zdCBzZWxmRWxlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5zdHlsZS56SW5kZXggPSBcIjdcIjtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuc3R5bGUuYm90dG9tID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5zdG9uZXBvcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjkgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjE1IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMuNSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjIgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNCAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjI4IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDcgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS41IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMi4xIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjMgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjQyIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDYgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4xNSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoeCAtIHRoaXMud2lkdGggLyAzKSA8IDEyICYmXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNxcnQoeSAtIHRoaXMuaGVpZ2h0IC8gNS41KSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQuYXVkaW8ucGxheVNvdW5kKHNlbGYucHV6emxlRGF0YS5wcm9tcHQucHJvbXB0QXVkaW8sIFByb21wdEF1ZGlvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gdGhpcy53aWR0aCAvIDIgLSAodGhpcy53aWR0aCAqIDAuMykgLyAyKSAqXHJcbiAgICAgICAgICAgICAgICAoeCAtIHRoaXMud2lkdGggLyAyIC0gKHRoaXMud2lkdGggKiAwLjMpIC8gMikpICtcclxuICAgICAgICAgICAgICAgICh5IC0gdGhpcy5oZWlnaHQgKiAwLjE1KSAqICh5IC0gdGhpcy5oZWlnaHQgKiAwLjE1KSA8PVxyXG4gICAgICAgICAgICAgICAgMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9tcHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQudGltZXJUaWNraW5nLnJlc3VtZVRpbWVyKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnBhdXNlYnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC50aW1lclRpY2tpbmcucGF1c2VUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgIG5ldyBQYXVzZVBvcFVwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuaWQpLCBzZWxmLmxldmVsU3RhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHMgb2YgZ3Muc3RvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54KSAqICh4IC0gcy54KSArICh5IC0gcy55KSAqICh5IC0gcy55KSkgPD0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkcmFnQXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdBdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2soJ2RyYWdNb25zdGVyQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoKHggLVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci54IC1cclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIud2lkdGggLyA0KSAqXHJcbiAgICAgICAgICAgICAgICAoeCAtXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci54IC1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLndpZHRoIC8gNCkgK1xyXG4gICAgICAgICAgICAgICAgKHkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueSAtXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci5oZWlnaHQgLyAyLjcpICpcclxuICAgICAgICAgICAgICAgICAgICAoeSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIuaGVpZ2h0IC8gMi43KSkgPD0gNjApIHtcclxuICAgICAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSAtOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnkgPSAtOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZS50ZXh0ID09IGdzLnB1enpsZS50YXJnZXRbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5waWNrZWRTdG9uZXMucHVzaChwaWNrZWRTdG9uZS50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3MucHV6emxlLnRhcmdldC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3MucHV6emxlLnRhcmdldC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Muc3RvbmVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrKHVuZGVmaW5lZCwgdHJ1ZSwgdHJ1ZSwgcGlja2VkU3RvbmUudGV4dCwgc2VsZi5waWNrZWRTdG9uZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5waWNrZWRTdG9uZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2sodW5kZWZpbmVkLCB0cnVlLCBmYWxzZSwgcGlja2VkU3RvbmUudGV4dCwgc2VsZi5waWNrZWRTdG9uZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBpY2tlZFN0b25lcy5wdXNoKHBpY2tlZFN0b25lLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncy5zdG9uZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjayh1bmRlZmluZWQsIGZhbHNlLCB0cnVlLCBwaWNrZWRTdG9uZS50ZXh0LCBzZWxmLnBpY2tlZFN0b25lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGlja2VkU3RvbmVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueCA9IHBpY2tlZFN0b25lLm9yaWd4O1xyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IHBpY2tlZFN0b25lLm9yaWd5O1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjaygnc3RvcERyYWdNb25zdGVyQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBudWxsO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBpZiAocGlja2VkU3RvbmUpIHtcclxuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSB4O1xyXG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXTtcclxuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGZFbGVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIHZhciBtb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJtb3VzZW1vdmVcIiwge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmRWxlbGVtZW50SWQuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgICAgICAgICB2YXIgbW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLCB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGZFbGVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVN0b25lcyh0aGlzLnN0b25lcG9zKTtcclxuICAgIH1cclxuICAgIGdldFRhcmdldFN0b25lUG9zaXRpb24oc3RvbmVzKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvc2l0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3Muc3RvbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChncy5zdG9uZXNbaV0udGV4dCA9PSBncy5wdXp6bGUudGFyZ2V0WzBdKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRQb3NpdGlvbnMucHVzaChncy5zdG9uZXNbaV0ub3JpZ3gpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0UG9zaXRpb25zLnB1c2goZ3Muc3RvbmVzW2ldLm9yaWd5KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRQb3NpdGlvbnM7XHJcbiAgICB9XHJcbiAgICBzZXRQcm9tcHQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRoaXMud2lkdGggKiAwLjA5ICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChncy5wdXp6bGUucHJvbXB0LCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjI3KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGZvciAobGV0IHMgb2YgZ3Muc3RvbmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd3N0b25lKHMsIHRoaXMuY2FudmFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3c3RvbmUocywgY2FudmFzKSB7XHJcbiAgICAgICAgdmFyIGltYWdlU2l6ZSA9IGNhbnZhcy5oZWlnaHQgLyAxMztcclxuICAgICAgICB2YXIgdGV4dEZvbnRTaXplID0gY2FudmFzLmhlaWdodCAvIDIwO1xyXG4gICAgICAgIHZhciBpbWFnZUNlbnRlck9mZnNldFggPSBpbWFnZVNpemUgLyAyLjM7XHJcbiAgICAgICAgdmFyIGltYWdlQ2VudGVyT2Zmc2V0WSA9IGltYWdlU2l6ZSAvIDEuNTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHMuaW1nLCBzLnggLSBpbWFnZUNlbnRlck9mZnNldFgsIHMueSAtIGltYWdlQ2VudGVyT2Zmc2V0WSwgaW1hZ2VTaXplLCBpbWFnZVNpemUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHMudGV4dCwgcy54LCBzLnkpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU3RvbmVzKHN0b25lcG9zKSB7XHJcbiAgICAgICAgdmFyIHBvc3MgPSBzdG9uZXBvc1swXTtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgZ3Muc3RvbmVzLnNwbGljZSgwLCBncy5zdG9uZXMubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBzIG9mIGdzLnB1enpsZS5zdG9uZXMpIHtcclxuICAgICAgICAgICAgdmFyIG5zID0gbmV3IFN0b25lQ29uZmlnKHMsIHBvc3NbaV1bMF0sIHBvc3NbaV1bMV0pO1xyXG4gICAgICAgICAgICBncy5zdG9uZXMucHVzaChucyk7XHJcbiAgICAgICAgICAgIGkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50dXRvcmlhbC51cGRhdGVUYXJnZXRTdG9uZVBvc2l0aW9ucyh0aGlzLmdldFRhcmdldFN0b25lUG9zaXRpb24oZ3Muc3RvbmVzKSk7XHJcbiAgICAgICAgKHRoaXMuc2hvd1R1dG9yaWFsICYmIHRoaXMucHV6emxlSW5kZXggPT0gMCkgPyB0aGlzLnR1dG9yaWFsLmFuaW1hdGVJbWFnZSgpIDogKCkgPT4geyB9O1xyXG4gICAgICAgIC8vIH0sIDUwMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGltZU92ZXIsIFRpbWV0aWNrZXJMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XHJcbmV4cG9ydCBjbGFzcyBUaW1lclRpY2tpbmcge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgbGV2ZWxTdGFydCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGdhbWUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoVG9DbGVhciA9IHRoaXMuZ2FtZS53aWR0aCAvIDMuNDtcclxuICAgICAgICB0aGlzLm1heExpbWl0RXhoYXVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVyRW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xyXG4gICAgICAgIHRoaXMuaXNUaW1lclJ1bm5pbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgVGltZXRpY2tlckxheWVyKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSBcIjRcIjtcclxuICAgICAgICAvLyB0aGlzLmFuaW1hdGlvbigwKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnRpbWVyX2Z1bGwgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnRpbWVyX2Z1bGwuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXJfZnVsbC5wbmdcIjtcclxuICAgICAgICB0aGlzLnRpbWVyX2Z1bGwub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5kcmF3KCk7XHJcbiAgICAgICAgICAgIHNlbGYuYmVnaW5UaW1lck9uU3RhcnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGltZXJTdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuQW5kcm9pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciArPSAwLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyICs9IDAuMDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyID4gNTUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QodGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPCAxMDAgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyID4gNTQgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLmlzVGltZXJSdW5uaW5nT3V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJSdW5uaW5nT3V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxTdGFydC5hdWRpby5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvdGltZW91dC5tcDNcIiwgVGltZU92ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA8IDU1ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA+IDU0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJSdW5uaW5nT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJFbmRlZCA/IHRoaXMubGV2ZWxTdGFydC5jaGFuZ2VQdXp6bGUoKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJlZ2luVGltZXJPblN0YXJ0KCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhdXNlQnV0dG9uQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzVGltZXJTdGFydGVkICYmIHNlbGYudGltZXIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNUaW1lclN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9XHJcbiAgICBzdG9wVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGltZXIgU3RvcHBlZFwiKTtcclxuICAgIH1cclxuICAgIHBhdXNlVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b25DbGlja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlc3VtZVRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b25DbGlja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMudGltZXJfZnVsbCwgdGhpcy5nYW1lLndpZHRoICogMC4xMiwgdGhpcy5oZWlnaHQgKiAwLjA5OSwgdGhpcy5nYW1lLndpZHRoIC0gNTAsIHRoaXMuaGVpZ2h0ICogMC4wNSk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWdpblRpbWVyT25TdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFR1dG9yaWFsTGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG52YXIgc2VsZjtcclxudmFyIHR1dG9yaWFsSW1nID0gbmV3IEltYWdlKCk7XHJcbnR1dG9yaWFsSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3R1dG9yaWFsX2hhbmQucG5nXCI7XHJcbmxldCBzdGFydFggPSAwO1xyXG5sZXQgc3RhcnRZID0gMDtcclxubGV0IGVuZFggPSAyMDA7XHJcbmxldCBlbmRZID0gMTAwO1xyXG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgemluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnppbmRleCA9IHppbmRleDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5nYW1lLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5nYW1lLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhcnR4ID0gc3RhcnRYO1xyXG4gICAgICAgIHRoaXMuc3RhcnR5ID0gc3RhcnRZO1xyXG4gICAgICAgIHRoaXMuZW5keCA9IHRoaXMuZ2FtZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5lbmR5ID0gdGhpcy5nYW1lLmhlaWdodCAvIDI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFR1dG9yaWFsTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI2XCI7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xyXG4gICAgICAgIGVuZFggPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICBlbmRZID0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbWF0ZUltYWdlKCk7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQgYW5kIHRvdWNoZWQnKTtcclxuICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRhcmdldFN0b25lUG9zaXRpb25zKHRhcmdldFN0b25lUG9zaXRpb24pIHtcclxuICAgICAgICBzdGFydFggPSB0YXJnZXRTdG9uZVBvc2l0aW9uWzBdIC0gMjI7XHJcbiAgICAgICAgc3RhcnRZID0gdGFyZ2V0U3RvbmVQb3NpdGlvblsxXSAtIDUwO1xyXG4gICAgICAgIHRoaXMuc3RhcnR4ID0gdGFyZ2V0U3RvbmVQb3NpdGlvblswXSAtIDIyO1xyXG4gICAgICAgIHRoaXMuc3RhcnR5ID0gdGFyZ2V0U3RvbmVQb3NpdGlvblsxXSAtIDUwO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlWmluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICB9XHJcbiAgICBpc01vYmlsZSgpIHtcclxuICAgICAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfVxyXG4gICAgYW5pbWF0ZUltYWdlKCkge1xyXG4gICAgICAgIGxldCB4ID0gc3RhcnRYO1xyXG4gICAgICAgIGxldCB5ID0gc3RhcnRZO1xyXG4gICAgICAgIGNvbnN0IGR4ID0gKHRoaXMuZW5keCAtIHRoaXMuc3RhcnR4KSAvIDYwO1xyXG4gICAgICAgIGNvbnN0IGR5ID0gKHRoaXMuZW5keSAtIHRoaXMuc3RhcnR5KSAvIDYwO1xyXG4gICAgICAgIGxldCBhYnNkeCA9ICh0aGlzLmlzTW9iaWxlKCkpID8gTWF0aC5hYnMoZHgpICogMyA6IE1hdGguYWJzKGR4KTtcclxuICAgICAgICBsZXQgYWJzZHkgPSAodGhpcy5pc01vYmlsZSgpKSA/IE1hdGguYWJzKGR5KSAqIDMgOiBNYXRoLmFicyhkeSk7XHJcbiAgICAgICAgZnVuY3Rpb24gYmV0d2Vlbih4LCBtaW4sIG1heCkge1xyXG4gICAgICAgICAgICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChiZXR3ZWVuKHgsIHRoaXMuc3RhcnR4IC0gMTUsIHN0YXJ0WCArIDE1KSAmJiBiZXR3ZWVuKHksIHRoaXMuc3RhcnR5IC0gMTUsIHN0YXJ0WSArIDE1KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlWmluZGV4KDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VaaW5kZXgoNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKHggPD0gdGhpcy5lbmR4ICsgYWJzZHggJiYgeCA+PSB0aGlzLmVuZHggLSBhYnNkeCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoeSA8PSB0aGlzLmVuZHkgKyBhYnNkeSAmJiB5ID49IHRoaXMuZW5keSAtIGFic2R5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gdGhpcy5zdGFydHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0aGlzLnN0YXJ0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlWmluZGV4KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFuaW1hdGlvbkZyYW1lPXJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9LDUwMClcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHggPSAoZHggPj0gMCkgPyB4ICsgYWJzZHggOiB4IC0gYWJzZHg7XHJcbiAgICAgICAgICAgICAgICB5ID0gKGR5ID49IDApID8geSArIGFic2R5IDogeSAtIGFic2R5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuICAgIGRyYXcoeCwgeSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAvLyBDbGVhciB0aGUgY2FudmFzXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0dXRvcmlhbEltZywgeCwgeSk7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxuY29uc3QgVVJMID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvZnRtX1wiICsgbGFuZyArIFwiLmpzb25cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ0bURhdGEoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goVVJMLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIC8vIGxldCBkID0ge1xyXG4gICAgICAgIC8vICAgICBcIk90aGVyQXVkaW9zXCI6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIFwiRmVlZGJhY2tUZXh0c1wiOiBudWxsLFxyXG4gICAgICAgIC8vICAgICBcIkxldmVsc1wiOiBudWxsLFxyXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrQXVkaW9zXCI6IG51bGwsXHJcbiAgICAgICAgLy8gICAgIFwiUmlnaHRUb0xlZnRcIjogbnVsbFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4geWllbGQgZ2V0RnRtRGF0YSgpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERhdGFNb2RhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvdGhlckF1ZGlvcywgbGV2ZWxzLCBmZWVkYmFja1RleHRzLCByaWdodFRvTGVmdCwgZmVlZGJhY2tBdWRpb3MpIHtcclxuICAgICAgICB0aGlzLm90aGVyQXVkaW9zID0gbmV3IE90aGVyQXVkaW9zKG90aGVyQXVkaW9zKTtcclxuICAgICAgICB0aGlzLmxldmVscyA9IHRoaXMuZ2V0TGV2ZWxzKGxldmVscyk7XHJcbiAgICAgICAgdGhpcy5GZWVkYmFja1RleHRzID0gbmV3IEZlZWRiYWNrVGV4dHMoZmVlZGJhY2tUZXh0cyk7XHJcbiAgICAgICAgdGhpcy5GZWVkYmFja0F1ZGlvcyA9IG5ldyBGZWVkYmFja0F1ZGlvcyhmZWVkYmFja0F1ZGlvcyk7XHJcbiAgICAgICAgdGhpcy5yaWdodFRvTGVmdCA9IHJpZ2h0VG9MZWZ0O1xyXG4gICAgfVxyXG4gICAgZ2V0TGV2ZWxzKGxldmVscykge1xyXG4gICAgICAgIGxldCBsZXZlbEFycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV2ZWxBcnJheS5wdXNoKG5ldyBMZXZlbHMobGV2ZWxzW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZXZlbEFycmF5O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPdGhlckF1ZGlvcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihvdGhlckF1ZGlvcykge1xyXG4gICAgICAgIHRoaXMuc2VsY3RZb3VyUGxheWVyID0gb3RoZXJBdWRpb3NbXCJTZWxlY3QgeW91ciBwbGF5ZXJcIl07XHJcbiAgICAgICAgdGhpcy53YXRjaE1lR3JvdyA9IG90aGVyQXVkaW9zW1wiV2F0Y2ggbWUgZ3Jvd1wiXTtcclxuICAgICAgICB0aGlzLmFyZVlvdVN1cmUgPSBvdGhlckF1ZGlvc1tcIkFyZSB5b3Ugc3VyZVwiXTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tUZXh0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja1RleHRzKSB7XHJcbiAgICAgICAgdGhpcy5mYW50YXN0aWMgPSBmZWVkYmFja1RleHRzWzBdO1xyXG4gICAgICAgIHRoaXMuZ3JlYXQgPSBmZWVkYmFja1RleHRzWzFdO1xyXG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrVGV4dHNbMl07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrQXVkaW9zIHtcclxuICAgIGNvbnN0cnVjdG9yKGZlZWRiYWNrQXVkaW9zKSB7XHJcbiAgICAgICAgdGhpcy5mYW50YXN0aWMgPSBmZWVkYmFja0F1ZGlvc1swXTtcclxuICAgICAgICB0aGlzLmdyZWF0ID0gZmVlZGJhY2tBdWRpb3NbMV07XHJcbiAgICAgICAgdGhpcy5hbWF6aW5nID0gZmVlZGJhY2tBdWRpb3NbMl07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIExldmVscyB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXZlbHMpIHtcclxuICAgICAgICB0aGlzLnB1enpsZXMgPSB0aGlzLmdldFB1enpsZURhdGEobGV2ZWxzKTtcclxuICAgICAgICB0aGlzLmxldmVsTWV0YSA9IG5ldyBMZXZlbE1ldGEobGV2ZWxzLkxldmVsTWV0YSk7XHJcbiAgICAgICAgdGhpcy5sZXZlbE51bWJlciA9IGxldmVscy5MZXZlbE51bWJlcjtcclxuICAgIH1cclxuICAgIGdldFB1enpsZURhdGEobGV2ZWxzKSB7XHJcbiAgICAgICAgbGV0IHB1enpsZU9iamVjdHMgPSBbXTtcclxuICAgICAgICBsZXZlbHMuUHV6emxlcy5tYXAoKHB1enpsZURhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHB1enpsZU9iamVjdHMucHVzaChuZXcgUHV6emxlcyhwdXp6bGVEYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHB1enpsZU9iamVjdHM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFB1enpsZXMge1xyXG4gICAgY29uc3RydWN0b3IocHV6emxlKSB7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50TnVtYmVyID0gcHV6emxlLlNlZ21lbnROdW1iZXI7XHJcbiAgICAgICAgdGhpcy5wcm9tcHQgPSBuZXcgUHJvbXB0KHB1enpsZS5wcm9tcHQpO1xyXG4gICAgICAgIHRoaXMuZm9pbFN0b25lcyA9IHRoaXMuZ2V0Rm9pbFN0b25lcyhwdXp6bGUpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0U3RvbmVzID0gdGhpcy5nZXRUYXJnZXRTdG9uZXMocHV6emxlKTtcclxuICAgIH1cclxuICAgIGdldEZvaWxTdG9uZXMocHV6emxlKSB7XHJcbiAgICAgICAgbGV0IGZvaWxTdG9uZUFycmF5ID0gW107XHJcbiAgICAgICAgcHV6emxlLmZvaWxzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGZvaWxTdG9uZUFycmF5LnB1c2goc3RvbmVzLlN0b25lVGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZvaWxTdG9uZUFycmF5O1xyXG4gICAgfVxyXG4gICAgZ2V0VGFyZ2V0U3RvbmVzKHB1enpsZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXRTdG9uZUFycmF5ID0gW107XHJcbiAgICAgICAgcHV6emxlLnRhcmdldHN0b25lcy5tYXAoKHN0b25lcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGFyZ2V0U3RvbmVBcnJheS5wdXNoKHN0b25lcy5TdG9uZVRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXRTdG9uZUFycmF5O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGb2lsU3RvbmUge1xyXG4gICAgY29uc3RydWN0b3Ioc3RvbmVUZXh0KSB7XHJcbiAgICAgICAgdGhpcy5zdG9uZVRleHQgPSBzdG9uZVRleHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRhcmdldFN0b25lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RvbmVUZXh0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9tcHQge1xyXG4gICAgY29uc3RydWN0b3IocHJvbXB0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRUZXh0ID0gcHJvbXB0LlByb21wdFRleHQ7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRBdWRpbyA9IHByb21wdC5Qcm9tcHRBdWRpbztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGV2ZWxNZXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKGxldmVsTWV0YSkge1xyXG4gICAgICAgIHRoaXMucHJvbXB0RmFkZU91dCA9IGxldmVsTWV0YS5Qcm9tcHRGYWRlb3V0O1xyXG4gICAgICAgIHRoaXMubGV0dGVyR3JvdXAgPSBsZXZlbE1ldGEuTGV0dGVyR3JvdXA7XHJcbiAgICAgICAgdGhpcy5sZXZlbE51bWJlciA9IGxldmVsTWV0YS5MZXZlbE51bWJlcjtcclxuICAgICAgICB0aGlzLnByb3RvVHlwZSA9IGxldmVsTWV0YS5Qcm9tcHRUeXBlO1xyXG4gICAgICAgIHRoaXMubGV2ZWxUeXBlID0gbGV2ZWxNZXRhLkxldmVsVHlwZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVEYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKGxldmVsTmFtZSwgbGV2ZWxOdW1iZXIsIGxldmVsU2NvcmUsIGxldmVsU3Rhcikge1xyXG4gICAgICAgICh0aGlzLmxldmVsTmFtZSA9IGxldmVsTmFtZSksXHJcbiAgICAgICAgICAgICh0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxOdW1iZXIpLFxyXG4gICAgICAgICAgICAodGhpcy5sZXZlbFNjb3JlID0gbGV2ZWxTY29yZSksXHJcbiAgICAgICAgICAgICh0aGlzLmxldmVsU3RhciA9IGxldmVsU3Rhcik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGFUb1N0b3JhZ2UocHJvZmlsZURhdGEpIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IGdldERhdGFmcm9tU3RvcmFnZSgpXHJcbiAgICAgICAgPyBqc29uVG9BcnJheShnZXREYXRhZnJvbVN0b3JhZ2UoKSlcclxuICAgICAgICA6IFtdO1xyXG4gICAgcHJvZmlsZURhdGEgPyBkYXRhUHVzaFRvQXJyYXkoZXhpc3RpbmdEYXRhLCBwcm9maWxlRGF0YSkgOiBudWxsO1xyXG4gICAgZXhpc3RpbmdEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS5sZXZlbE51bWJlciA+IGIubGV2ZWxOdW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdEYXRhKTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGFuZyArIFwiUHJvZmlsZVwiLCBkYXRhKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBqc29uVG9BcnJheShqc29uKSB7XHJcbiAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiBqc29uKSB7XHJcbiAgICAgICAgZGF0YS5wdXNoKGpzb25baV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZnVuY3Rpb24gZGF0YVB1c2hUb0FycmF5KGpzb25EYXRhLCBwcm9maWxlRGF0YSkge1xyXG4gICAgdmFyIGRhdGFOb3RFeGlzdCA9IHRydWU7XHJcbiAgICBqc29uRGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGRhdGEubGV2ZWxOdW1iZXIpID09IHBhcnNlSW50KHByb2ZpbGVEYXRhLmxldmVsTnVtYmVyKSkge1xyXG4gICAgICAgICAgICBkYXRhTm90RXhpc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGF0YS5sZXZlbFNjb3JlIDwgcHJvZmlsZURhdGEubGV2ZWxTY29yZVxyXG4gICAgICAgICAgICAgICAgPyAoZGF0YS5sZXZlbFNjb3JlID0gcHJvZmlsZURhdGEubGV2ZWxTY29yZSlcclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgZGF0YS5sZXZlbFN0YXIgPCBwcm9maWxlRGF0YS5sZXZlbFN0YXJcclxuICAgICAgICAgICAgICAgID8gKGRhdGEubGV2ZWxTdGFyID0gcHJvZmlsZURhdGEubGV2ZWxTdGFyKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGF0YU5vdEV4aXN0ID8ganNvbkRhdGEucHVzaChwcm9maWxlRGF0YSkgOiBudWxsO1xyXG4gICAgcmV0dXJuIGpzb25EYXRhO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhZnJvbVN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsYW5nICsgXCJQcm9maWxlXCIpIHx8IFwie31cIik7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUI4YzJsQlZpMjZ1N1lSTDlzeE9QOTdVYXEzeU44aFRsNFwiLFxyXG4gIGF1dGhEb21haW46IFwiZnRtLWI5ZDk5LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZnRtLWI5ZDk5LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImZ0bS1iOWQ5OVwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZnRtLWI5ZDk5LmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjAyNDAyMzg3OTQxXCIsXHJcbiAgYXBwSWQ6IFwiMTo2MDI0MDIzODc5NDE6d2ViOmE2M2Y0ZWFkZGM5NDlmNTM5ZGUxMGNcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctRlZMU043RDdOTVwiLFxyXG59O1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGZpcmViYXNlQ29uZmlnIH0gZnJvbSBcIi4vZmlyZWJhc2VfY29uZmlnXCI7XHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUludGVncmF0aW9uIHtcclxuICAgIHN0YXRpYyBpbml0aWFsaXplRmlyZWJhc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlYmFzZUFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5dGljcyA9IGZpcmViYXNlLmFuYWx5dGljcyh0aGlzLmZpcmViYXNlQXBwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXNzaW9uRW5kKCkge1xyXG4gICAgICAgIHRoaXMuYW5hbHl0aWNzLmxvZ0V2ZW50KFwic2Vzc2lvbl9lbmRcIik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3VzdG9tRXZlbnRzKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmFuYWx5dGljcy5sb2dFdmVudChrZXksIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBHYW1lRW5kTGF5ZXIsIGxvYWRJbWFnZXMgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG52YXIgaW1hZ2VzID0ge1xyXG4gICAgYmdJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2JnX3YwMS5qcGdcIixcclxuICAgIGhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2hpbGxfdjAxLnBuZ1wiLFxyXG4gICAgdGltZXJfZW1wdHk6IFwiLi9hc3NldHMvaW1hZ2VzL3RpbWVyX2VtcHR5LnBuZ1wiLFxyXG4gICAgcGlsbGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9Ub3RlbV92MDJfdjAxLnBuZ1wiLFxyXG4gICAgZ3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiLFxyXG4gICAgZmVuY2hJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2ZlbmNlX3YwMS5wbmdcIixcclxuICAgIGJpZ01vbnN0ZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2Z0bV9ib251c19sZXZlbF9tb25zdGVycy5wbmdcIlxyXG59O1xyXG52YXIgc2VsZjtcclxuZXhwb3J0IGNsYXNzIEdhbWVFbmRTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgR2FtZUVuZExheWVyKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjcmlwdGlvbi10ZXh0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjcmlwdGlvbi10ZXh0XCIpLmlubmVySFRNTCA9IGdsb2JhbFRoaXMuZGVzY3JpcHRpb25UZXh0O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2dyb3VkKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjcmlwdGlvbi10ZXh0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgICAgIC8vZGVsZXRlIHRoaXM7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBsb2FkSW1hZ2VzKGltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UucGlsbGVySW1nLCB3aWR0aCAqIDAuNiwgaGVpZ2h0IC8gNiwgd2lkdGgsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5mZW5jaEltZywgLXdpZHRoICogMC40LCBoZWlnaHQgLyAzLCB3aWR0aCwgaGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuZ3Jhc3NJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgKyAoaGVpZ2h0IC8gMikgKiAwLjEsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYmlnTW9uc3RlckltZywgd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyIC0gaGVpZ2h0ICogMC4yNSwgd2lkdGggLyAxLjcsIGhlaWdodCAvIDIuNSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgeyBMZXZlbFN0YXJ0U2NlbmUgfSBmcm9tIFwiLi9sZXZlbC1zdGFydC1zY2VuZS5qc1wiO1xyXG52YXIgYW5pbWF0aW9uRnJhbWU7XHJcbnZhciBzZWxmO1xyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBwdXp6bGVEYXRhLCBnYW1lU2NlbmVDYWxsQmFjaykge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciA9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyKSB8fCAxO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgTGV2ZWxTdGFydFNjZW5lKHtcclxuICAgICAgICAgICAgZ2FtZTogdGhpcyxcclxuICAgICAgICAgICAgbGV2ZWxEYXRhOiBwdXp6bGVEYXRhLFxyXG4gICAgICAgICAgICBsZXZlbFN0YXJ0Q2FsbEJhY2s6IHRoaXMubGV2ZWxTdGFydENhbGxCYWNrLFxyXG4gICAgICAgICAgICBtb25zdGVyUGhhc2VOdW1iZXI6IHRoaXMubW9uc3RlclBoYXNlTnVtYmVyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lQ2FsbEJhY2sgPSBnYW1lU2NlbmVDYWxsQmFjaztcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBsZXZlbFN0YXJ0Q2FsbEJhY2soYnV0dG9uX25hbWUpIHtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAoYnV0dG9uX25hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlX2J1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXRyeV9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lU2NlbmVDYWxsQmFjayhidXR0b25fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBzZWxmLnNjZW5lID8gKHNlbGYuc2NlbmUuc3RvbmVzID8gc2VsZi5zY2VuZS5zdG9uZXMudXBkYXRlKCkgOiBudWxsKSA6IG51bGw7XHJcbiAgICAgICAgc2VsZi5zY2VuZSA/IHNlbGYuc2NlbmUudXBkYXRlKCkgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmNyZWF0ZUJhY2tncm91ZCgpO1xyXG4gICAgfVxyXG4gICAgYW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHNlbGYudXBkYXRlKCk7XHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2VsZi5hbmltYXRpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBJbnRyb011c2ljLCBMZXZlbEVuZEF1ZGlvLCBMZXZlbEVuZEJ1dHRvbnNMYXllciwgTGV2ZWxFbmRMYXllciwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9jbG9zZV9idXR0b24uanNcIjtcclxuaW1wb3J0IE5leHRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9uZXh0X2J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgUmV0cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9yZXRyeV9idXR0b24uanNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZURhdGEsIHNldERhdGFUb1N0b3JhZ2UgfSBmcm9tIFwiLi4vZGF0YS9wcm9maWxlLWRhdGEuanNcIjtcclxuaW1wb3J0IHsgRmlyZWJhc2VJbnRlZ3JhdGlvbiB9IGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZV9pbnRlZ3JhdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG52YXIgYXVkaW9VcmwgPSB7XHJcbiAgICBsZXZlbFdpbjogXCIuL2Fzc2V0cy9hdWRpb3MvTGV2ZWxXaW5GYW5mYXJlLm1wM1wiLFxyXG4gICAgbGV2ZWxMb3NlOiBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbExvc2VGYW5mYXJlLm1wM1wiLFxyXG4gICAgaW50cm86IFwiLi9hc3NldHMvYXVkaW9zL2ludHJvLndhdlwiLFxyXG59O1xyXG5leHBvcnQgY2xhc3MgTGV2ZWxFbmRTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHNjb3JlLCBtb25zdGVyLCBsZXZlbEVuZENhbGxCYWNrLCBsZXZlbERhdGEsIGlzR2FtZVBhdXNlLCBtb25zdGVyUGhhc2VOdW1iZXIsIGxldmVsU3RhcnRUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLm1vbnN0ZXIgPSBtb25zdGVyO1xyXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gbGV2ZWxEYXRhO1xyXG4gICAgICAgIHRoaXMuaXNHYW1lUGF1c2UgPSBpc0dhbWVQYXVzZTtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciA9IG1vbnN0ZXJQaGFzZU51bWJlciB8fCAxO1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydFRpbWUgPSBsZXZlbFN0YXJ0VGltZTtcclxuICAgICAgICB0aGlzLmxldmVsRW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xyXG4gICAgICAgIHRoaXMuc3RhckNvdW50ID1cclxuICAgICAgICAgICAgc2NvcmUgPT0gMjAwXHJcbiAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgIDogc2NvcmUgPT0gMzAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAyXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzY29yZSA9PSA0MDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2NvcmUgPT0gNTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxFbmRGaXJlYmFzZUV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxldmVsRW5kQ2FsbEJhY2sgPSBsZXZlbEVuZENhbGxCYWNrO1xyXG4gICAgICAgIHNldERhdGFUb1N0b3JhZ2UobmV3IFByb2ZpbGVEYXRhKGxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxUeXBlLCBsZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyLCBzY29yZSwgdGhpcy5zdGFyQ291bnQpKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFyQ291bnQgPD0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubGV2ZWxMb3NlLCBMZXZlbEVuZEF1ZGlvKTtcclxuICAgICAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL3NhZDFcIiArIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc2NlbmUuYXVkaW8ucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL2ludHJvLndhdlwiLCBJbnRyb011c2ljKTtcclxuICAgICAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2hhcHB5MVwiICsgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNjZW5lLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5sZXZlbFdpbiwgTGV2ZWxFbmRBdWRpbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIiwgSW50cm9NdXNpYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wYXVzZVNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZVppbmRleCg5KTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgTGV2ZWxFbmRMYXllcik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLnpJbmRleCA9IFwiOFwiO1xyXG4gICAgICAgIHRoaXMuYm90dG9uTGF5ZXIgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIExldmVsRW5kQnV0dG9uc0xheWVyKTtcclxuICAgICAgICB0aGlzLmJvdHRvbkNvbnRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJvdHRvbkxheWVyKS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3R0b25MYXllcikuc3R5bGUuekluZGV4ID1cclxuICAgICAgICAgICAgXCI5XCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cclxuICAgICAgICAgICAgXCIjMDA0MDdCXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4vYXNzZXRzL2ltYWdlcy9XSU5fc2NyZWVuX2JnLnBuZycpXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZFNpemUgPVxyXG4gICAgICAgICAgICBcImNvbnRhaW5cIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPVxyXG4gICAgICAgICAgICBcImNlbnRlclwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPVxyXG4gICAgICAgICAgICBcIm5vLXJlcGVhdFwiO1xyXG4gICAgICAgIHZhciBzdGFyMSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHN0YXIxLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIxLnBuZ1wiO1xyXG4gICAgICAgIHZhciBzdGFyMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHN0YXIyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIyLnBuZ1wiO1xyXG4gICAgICAgIHZhciBzdGFyMyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHN0YXIzLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIzLnBuZ1wiO1xyXG4gICAgICAgIHNlbGYuZHJhd1N0YXJ0cyhzZWxmLCBzdGFyMSwgc3RhcjIsIHN0YXIzKTtcclxuICAgICAgICBzZWxmLm5leHRCdXR0b24gPVxyXG4gICAgICAgICAgICBzZWxmLnN0YXJDb3VudCA+PSAyXHJcbiAgICAgICAgICAgICAgICA/IG5ldyBOZXh0QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC44IC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjcpXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgc2VsZi5yZXRyeUJ1dHRvbiA9IG5ldyBSZXRyeUJ1dHRvbihzZWxmLmNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLnN0YXJDb3VudCA+PSAyXHJcbiAgICAgICAgICAgID8gc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDJcclxuICAgICAgICAgICAgOiBzZWxmLmNhbnZhcy53aWR0aCAqIDAuOCAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC43KTtcclxuICAgICAgICBzZWxmLmNsb3NlQnV0dG9uID0gbmV3IENsb3NlQnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC4yIC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjcpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYm90dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxmLmJvdHRvbkxheWVyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLm5leHRCdXR0b24gJiYgc2VsZi5uZXh0QnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcIm5leHRfYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnJldHJ5QnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcInJldHJ5X2J1dHRvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wYXVzZVNvdW5kKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kQ2FsbEJhY2soXCJjbG9zZV9idXR0b25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRyYXdTdGFydHMoc2VsZiwgc3RhcjEsIHN0YXIyLCBzdGFyMykge1xyXG4gICAgICAgIHN0YXIxLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXJDb3VudCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHN0YXIxLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGFyMi5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zdGFyQ291bnQgPD0gMyAmJiBzZWxmLnN0YXJDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2Uoc3RhcjIsIHNlbGYuY2FudmFzLndpZHRoICogMC41IC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjE1LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RhcjMub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc3RhckNvdW50ID49IDMpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2Uoc3RhcjMsIHNlbGYuY2FudmFzLndpZHRoICogMC44MiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYW52YXMoc2VsZikge1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XHJcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmJvdHRvbkxheWVyKTtcclxuICAgIH1cclxuICAgIGxldmVsRW5kRmlyZWJhc2VFdmVudHMoKSB7XHJcbiAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5jdXN0b21FdmVudHMoXCJsZXZlbF9jb21wbGV0ZWRcIiwge1xyXG4gICAgICAgICAgICBkYXRlX3RpbWU6IHRoaXMubGV2ZWxFbmRUaW1lLmdldERhdGUoKSArXHJcbiAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRW5kVGltZS5nZXRNb250aCgpICtcclxuICAgICAgICAgICAgICAgIDEgK1xyXG4gICAgICAgICAgICAgICAgXCIvXCIgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUuZ2V0RnVsbFllYXIoKSArXHJcbiAgICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRW5kVGltZS5nZXRIb3VycygpICtcclxuICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxFbmRUaW1lLmdldE1pbnV0ZXMoKSArXHJcbiAgICAgICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRW5kVGltZS5nZXRTZWNvbmRzKCksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3Nfb3JfZmFpbHVyZTogdGhpcy5zdGFyQ291bnQgPj0gMyA/IFwic3VjY2Vzc1wiIDogXCJmYWlsdXJlXCIsXHJcbiAgICAgICAgICAgIGxldmVsX251bWJlcjogdGhpcy5sZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyLFxyXG4gICAgICAgICAgICBudW1iZXJfb2Zfc3VjY2Vzc2Z1bF9wdXp6bGVzOiB0aGlzLnNjb3JlIC8gMTAwLFxyXG4gICAgICAgICAgICBmdG1fbGFuZ3VhZ2U6IGxhbmcsXHJcbiAgICAgICAgICAgIHByb2ZpbGVfbnVtYmVyOiAwLFxyXG4gICAgICAgICAgICB2ZXJzaW9uX251bWJlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJzaW9uLWluZm8taWRcIikuaW5uZXJIVE1MLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogTWF0aC5hYnMoTWF0aC5jZWlsKCh0aGlzLmxldmVsRW5kVGltZS5nZXRUaW1lKCkgLSB0aGlzLmxldmVsU3RhcnRUaW1lKSAvIDEwMDApKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBMZXZlbENvbmZpZyB9IGZyb20gXCIuLi9jb21tb24vbGV2ZWwtY29uZmlnLmpzXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbkNsaWNrLCBJbnRyb011c2ljLCBMZXZlbFNlbGVjdGlvbkxheWVyLCBQcmV2aW91c1BsYXllZExldmVsLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY29tbW9uL3NvdW5kLmpzXCI7XHJcbmltcG9ydCB7IGdldERhdGFmcm9tU3RvcmFnZSB9IGZyb20gXCIuLi9kYXRhL3Byb2ZpbGUtZGF0YS5qc1wiO1xyXG52YXIgbWFwSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG5tYXBJY29uLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcEljb24ucG5nXCI7XHJcbnZhciBtYXBMb2NrID0gbmV3IEltYWdlKCk7XHJcbm1hcExvY2suc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwTG9jay5wbmdcIjtcclxudmFyIG1hcCA9IG5ldyBJbWFnZSgpO1xyXG5tYXAuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwLmpwZ1wiO1xyXG52YXIgc3RhciA9IG5ldyBJbWFnZSgpO1xyXG5zdGFyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3N0YXIucG5nXCI7XHJcbnZhciBuZXh0YnRuID0gbmV3IEltYWdlKCk7XHJcbm5leHRidG4uc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbmV4dF9idG4ucG5nXCI7XHJcbnZhciBiYWNrYnRuID0gbmV3IEltYWdlKCk7XHJcbmJhY2tidG4uc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja19idG4ucG5nXCI7XHJcbnZhciBsZXZlbE51bWJlcjtcclxudmFyIHNlbGY7XHJcbnZhciB1bmxvY2tMZXZlbEluZGV4ID0gLTE7XHJcbnZhciBwcmV2aW91c1BsYXllZExldmVsID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oUHJldmlvdXNQbGF5ZWRMZXZlbCkpIHwgMDtcclxudmFyIGxldmVsO1xyXG5pZiAocHJldmlvdXNQbGF5ZWRMZXZlbCAhPSBudWxsKSB7XHJcbiAgICBsZXZlbCA9IDEwICogTWF0aC5mbG9vcihwcmV2aW91c1BsYXllZExldmVsIC8gMTApO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBMZXZlbFNlbGVjdGlvblNjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmxldmVsc1NlY3Rpb25Db3VudCA9XHJcbiAgICAgICAgICAgIHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTAgPiBNYXRoLmZsb29yKHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTApXHJcbiAgICAgICAgICAgICAgICA/IE1hdGguZmxvb3Ioc2VsZi5kYXRhLmxldmVscy5sZW5ndGggLyAxMCkgKyAxXHJcbiAgICAgICAgICAgICAgICA6IE1hdGguZmxvb3Ioc2VsZi5kYXRhLmxldmVscy5sZW5ndGggLyAxMCk7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U3RhcnMoKTtcclxuICAgIH1cclxuICAgIGdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChidXR0b25fbmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibmV4dF9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUoKGxldmVsTnVtYmVyICs9IDEpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXRyeV9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUobGV2ZWxOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlX2J1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNvdW5kLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIiwgSW50cm9NdXNpYyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXdTdGFycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuc291bmQucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL2ludHJvLndhdlwiLCBJbnRyb011c2ljKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc291bmQuYWN0aXZlU2NyZWVuKCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBMZXZlbFNlbGVjdGlvbkxheWVyKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgICAgIHRoaXMuc3RhcnNJZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIExldmVsU2VsZWN0aW9uTGF5ZXIgKyAxKTtcclxuICAgICAgICB0aGlzLnN0YXJzQ2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZCk7XHJcbiAgICAgICAgdGhpcy5zdGFyc0NvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhcnNDYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiM1wiO1xyXG4gICAgICAgIHRoaXMubGV2ZWxCdXR0b25wb3MgPSBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMF0sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEwXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDIuOCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMCxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gM10sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDNdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMyArIHRoaXMuY2FudmFzLndpZHRoIC8gMi44LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDMsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMTAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOF0sXHJcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzICsgdGhpcy5jYW52YXMud2lkdGggLyAyLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS44LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDIuNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVUb3VjaFN0YXJ0LCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZClcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlLCBmYWxzZSk7XHJcbiAgICAgICAgdmFyIHhEb3duID0gbnVsbDtcclxuICAgICAgICB2YXIgeURvd24gPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvdWNoZXMoZXZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoZXZ0LnRvdWNoZXMgfHwgLy8gYnJvd3NlciBBUElcclxuICAgICAgICAgICAgICAgIGV2dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMpOyAvLyBqUXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RUb3VjaCA9IGdldFRvdWNoZXMoZXZ0KVswXTtcclxuICAgICAgICAgICAgeERvd24gPSBmaXJzdFRvdWNoLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHlEb3duID0gZmlyc3RUb3VjaC5jbGllbnRZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmICgheERvd24gfHwgIXlEb3duKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHhVcCA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHZhciB5VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgICAgICAgICB2YXIgeERpZmYgPSB4RG93biAtIHhVcDtcclxuICAgICAgICAgICAgdmFyIHlEaWZmID0geURvd24gLSB5VXA7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGlmZikgPiBNYXRoLmFicyh5RGlmZikpIHtcclxuICAgICAgICAgICAgICAgIC8qbW9zdCBzaWduaWZpY2FudCovXHJcbiAgICAgICAgICAgICAgICBpZiAoeERpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgKyAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3KGxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kb3duQnV0dG9uKGxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLyogcmlnaHQgc3dpcGUgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgLSAxMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3KGxldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogbGVmdCBzd2lwZSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHlEaWZmID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGRvd24gc3dpcGUgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHVwIHN3aXBlICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogcmVzZXQgdmFsdWVzICovXHJcbiAgICAgICAgICAgIHhEb3duID0gbnVsbDtcclxuICAgICAgICAgICAgeURvd24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICAgICAgICBpZiAoeCA+PSBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNyAmJlxyXG4gICAgICAgICAgICAgICAgeCA8IHNlbGYuY2FudmFzLndpZHRoICogMC43ICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTAgJiZcclxuICAgICAgICAgICAgICAgIHkgPiBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgJiZcclxuICAgICAgICAgICAgICAgIHkgPCBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgKyBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgKyAxMDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA+PSBzZWxmLmNhbnZhcy53aWR0aCAvIDEwICYmXHJcbiAgICAgICAgICAgICAgICB4IDwgc2VsZi5jYW52YXMud2lkdGggLyAxMCArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwICYmXHJcbiAgICAgICAgICAgICAgICB5ID4gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICYmXHJcbiAgICAgICAgICAgICAgICB5IDwgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTApIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbCAtIDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHNlbGYubGV2ZWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54IC0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMjApICpcclxuICAgICAgICAgICAgICAgICAgICAoeCAtIHMueCAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSArXHJcbiAgICAgICAgICAgICAgICAgICAgKHkgLSBzLnkgLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoeSAtIHMueSAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSkgPCA0NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmluZGV4ICsgbGV2ZWwgLSAxIDw9IHVubG9ja0xldmVsSW5kZXggKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiLCBCdXR0b25DbGljayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQucGF1c2VTb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE51bWJlciA9IHMuaW5kZXggKyBsZXZlbCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRHYW1lKGxldmVsTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVMZXZlbEJ1dHRvbnModGhpcy5sZXZlbEJ1dHRvbnBvcyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVMZXZlbEJ1dHRvbnMobGV2ZWxCdXR0b25wb3MpIHtcclxuICAgICAgICB2YXIgcG9zcyA9IGxldmVsQnV0dG9ucG9zWzBdO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IDEwOyBzKyspIHtcclxuICAgICAgICAgICAgdmFyIG5zID0gbmV3IExldmVsQ29uZmlnKHBvc3NbaV1bMF0sIHBvc3NbaV1bMV0sIGkgKyAxKTtcclxuICAgICAgICAgICAgc2VsZi5sZXZlbHMucHVzaChucyk7XHJcbiAgICAgICAgICAgIGkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3KGxldmVsKTtcclxuICAgICAgICB0aGlzLmRvd25CdXR0b24obGV2ZWwpO1xyXG4gICAgfVxyXG4gICAgZHJhdyhsZXZlbCkge1xyXG4gICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3bGV2ZWwocywgc2VsZi5jYW52YXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvd25CdXR0b24obGV2ZWwpIHtcclxuICAgICAgICB2YXIgaW1hZ2VTaXplID0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTA7XHJcbiAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG5leHRidG4sIHRoaXMuY2FudmFzLndpZHRoICogMC43LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjMsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxldmVsICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShiYWNrYnRuLCB0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjMsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKGxldmVsICE9IDApIHtcclxuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMzAwLCA1MDAsIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcclxuICAgICAgICAvLyAgIHRoaXMuY29udGV4dC5yb3RhdGUoOTApO1xyXG4gICAgICAgIC8vICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShuZXh0LCAzMDAsIDUwMCwgaW1hZ2VTaXplLCBpbWFnZVNpemUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGRyYXdsZXZlbChzLCBjYW52YXMpIHtcclxuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XHJcbiAgICAgICAgdmFyIHRleHRGb250U2l6ZSA9IGltYWdlU2l6ZSAvIDY7XHJcbiAgICAgICAgaWYgKHMuaW5kZXggKyBsZXZlbCA8PSBzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG1hcEljb24sIHMueCwgcy55LCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gdGV4dEZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHMuaW5kZXggKyBsZXZlbCwgcy54ICsgaW1hZ2VTaXplIC8gMy41LCBzLnkgKyBpbWFnZVNpemUgLyAzKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgLSBpbWFnZVNpemUgLyAzMCArIFwicHggQXJpYWxcIjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRoaXMuZGF0YS5sZXZlbHNbcy5pbmRleCArIGxldmVsIC0gMV0ubGV2ZWxNZXRhLmxldmVsVHlwZSwgcy54ICsgaW1hZ2VTaXplIC8gMy41LCBzLnkgKyBpbWFnZVNpemUgLyAxLjMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZShsZXZlbF9udW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlU291bmQoKTtcclxuICAgICAgICBuZXcgR2FtZSh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCBzZWxmLmRhdGEubGV2ZWxzW2xldmVsX251bWJlcl0sIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2spO1xyXG4gICAgfVxyXG4gICAgZHJhd1N0YXJzKCkge1xyXG4gICAgICAgIGxldCBnYW1lTGV2ZWxEYXRhID0gZ2V0RGF0YWZyb21TdG9yYWdlKCk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIHZhciBjYW5hdnNFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWxTZWxlY3Rpb25DYW52YXMxXCIpKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IGNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGlmIChnYW1lTGV2ZWxEYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVMZXZlbERhdGEubGVuZ3RoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZ2FtZSBvZiBnYW1lTGV2ZWxEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVubG9ja0xldmVsSW5kZXggPCBwYXJzZUludChnYW1lLmxldmVsTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmxldmVsU3RhciA+PSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICh1bmxvY2tMZXZlbEluZGV4ID0gcGFyc2VJbnQoZ2FtZS5sZXZlbE51bWJlcikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLmluZGV4ICsgbGV2ZWwgPD0gc2VsZi5kYXRhLmxldmVscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmluZGV4ICsgbGV2ZWwgLSAxID4gdW5sb2NrTGV2ZWxJbmRleCArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb250ZXh0LmRyYXdJbWFnZShtYXBMb2NrLCBzLngsIHMueSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTMsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGV2ZWxEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmluZGV4IC0gMSArIGxldmVsID09IHBhcnNlSW50KGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTdGFyKHMsIGNhbnZhcywgZ2FtZUxldmVsRGF0YVtpXS5sZXZlbFN0YXIsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3U3RhcihzLCBjYW52YXMsIHN0YXJDb3VudCwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBjYW52YXMuaGVpZ2h0IC8gNTtcclxuICAgICAgICBpZiAoc3RhckNvdW50ID49IDEpIHtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXJDb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54ICsgaW1hZ2VTaXplIC8gMi41LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXJDb3VudCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHN0YXIsIHMueCArIGltYWdlU2l6ZSAvIDUsIHMueSAtIGltYWdlU2l6ZSAqIDAuMSwgaW1hZ2VTaXplIC8gNSwgaW1hZ2VTaXplIC8gNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgTW9uc3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL21vbnN0ZXIuanNcIjtcclxuaW1wb3J0IHsgVGltZXJUaWNraW5nIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGltZXItdGlja2luZy5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgU3RvbmVzTGF5ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RvbmVzLWxheWVyLmpzXCI7XHJcbmltcG9ydCB7IFByb21wdFRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9tcHQtdGV4dC5qc1wiO1xyXG5pbXBvcnQgUGF1c2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9wYXVzZV9idXR0b24uanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxJbmRpY2F0b3JzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGV2ZWwtaW5kaWNhdG9ycy5qc1wiO1xyXG5pbXBvcnQgeyBMZXZlbEVuZEJ1dHRvbnNMYXllciwgTGV2ZWxFbmRMYXllciwgbG9hZEltYWdlcywgbG9hZGluZ1NjcmVlbiwgU3RvbmVMYXllciwgVGltZXRpY2tlckxheWVyLCBQcm9tcHRUZXh0TGF5ZXIsIFByZXZpb3VzUGxheWVkTGV2ZWwsIFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyLCBCdXR0b25DbGljaywgRmVlZGJhY2tBdWRpbywgUGhyYXNlQXVkaW8sIFR1dG9yaWFsTGF5ZXIsIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxTdGFydExheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgR2FtZUVuZFNjZW5lIH0gZnJvbSBcIi4vZ2FtZS1lbmQtc2NlbmUuanNcIjtcclxuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9jb21tb24vc291bmQuanNcIjtcclxuaW1wb3J0IHsgTGV2ZWxFbmRTY2VuZSB9IGZyb20gXCIuL2xldmVsLWVuZC1zY2VuZS5qc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRhZnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi4vZGF0YS9wcm9maWxlLWRhdGEuanNcIjtcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlSW50ZWdyYXRpb24gfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VfaW50ZWdyYXRpb24uanNcIjtcclxudmFyIGltYWdlcyA9IHtcclxuICAgIGJnSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9iZ192MDEuanBnXCIsXHJcbiAgICBoaWxsSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9oaWxsX3YwMS5wbmdcIixcclxuICAgIHRpbWVyX2VtcHR5OiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lcl9lbXB0eS5wbmdcIixcclxuICAgIHBpbGxlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvVG90ZW1fdjAyX3YwMS5wbmdcIixcclxuICAgIGdyYXNzSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9GR19hX3YwMS5wbmdcIixcclxuICAgIHJvdGF0aW5nX2Nsb2NrOiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lci5wbmdcIixcclxuICAgIGZlbmNoSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9mZW5jZV92MDEucG5nXCIsXHJcbiAgICBwcm9tcHRJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL3Byb21wdFRleHRCZy5wbmdcIixcclxuICAgIGZhbnRhc3RpYzogXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2ZhbnRhc3RpY18wMS5wbmdcIixcclxuICAgIGdyZWF0OiBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvZ3JlYXRfMDEucG5nXCIsXHJcbiAgICBhdXR1bW5CZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX2JnX3YwMS5qcGdcIixcclxuICAgIGF1dHVtbkhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9oaWxsX3YwMS5wbmdcIixcclxuICAgIGF1dHVtblNpZ25JbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9zaWduX3YwMS5wbmdcIixcclxuICAgIGF1dHVtbkdyYXNzSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fRkdfdjAxLnBuZ1wiLFxyXG4gICAgYXV0dW1uRmVuY2VJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9mZW5jZV92MDEucG5nXCIsXHJcbiAgICBhdXR1bW5QaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9zaWduX3YwMS5wbmdcIixcclxuICAgIHdpbnRlckJnSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfYmdfMDEuanBnXCIsXHJcbiAgICB3aW50ZXJIaWxsSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfaGlsbF92MDEucG5nXCIsXHJcbiAgICB3aW50ZXJTaWduSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfc2lnbl92MDEucG5nXCIsXHJcbiAgICB3aW50ZXJHcmFzc0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX0ZHX3YwMS5wbmdcIixcclxuICAgIHdpbnRlckZlbmNlSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfZmVuY2VfdjAxLnBuZ1wiLFxyXG4gICAgd2ludGVyUGlsbGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfc2lnbl92MDEucG5nXCIsXHJcbn07XHJcbnZhciBhdWRpb1VybCA9IHtcclxuICAgIHBocmFzZUF1ZGlvczogW1xyXG4gICAgICAgIFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2F1ZGlvcy9mYW50YXN0aWMuV0FWXCIsXHJcbiAgICAgICAgLy8gXCIuL2Fzc2V0cy9hdWRpb3MvZ29vZCBqb2IuV0FWXCIsXHJcbiAgICAgICAgXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvYXVkaW9zL2dyZWF0LndhdlwiLFxyXG4gICAgXSxcclxuICAgIG1vbnN0ZXJTcGxpdDogXCIuL2Fzc2V0cy9hdWRpb3MvTW9uc3RlciBTcGl0cyB3cm9uZyBzdG9uZXMtMDEubXAzXCIsXHJcbiAgICBtb25zdGVySGFwcHk6IFwiLi9hc3NldHMvYXVkaW9zL0NoZWVyaW5nLTAyLm1wM1wiLFxyXG4gICAgbW9uc3RlclNhZDogXCIuL2Fzc2V0cy9hdWRpb3MvRGlzYXBvaW50ZWQtMDUubXAzXCIsXHJcbiAgICBidXR0b25DbGljazogXCIuL2Fzc2V0cy9hdWRpb3MvQnV0dG9uQ2xpY2sud2F2XCIsXHJcbn07XHJcbnZhciBzZWxmO1xyXG52YXIgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XHJcbnZhciBjdXJyZW50X3B1enpsZV9pbmRleCA9IDA7XHJcbnZhciBzY29yZSA9IDA7XHJcbnZhciB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcclxudmFyIGlzR2FtZVBhdXNlID0gZmFsc2U7XHJcbnZhciBub01vcmVUYXJnZXQgPSBmYWxzZTtcclxudmFyIGlzTGV2ZWxFbmRlZCA9IGZhbHNlO1xyXG5leHBvcnQgY2xhc3MgTGV2ZWxTdGFydFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgbGV2ZWxEYXRhLCBsZXZlbFN0YXJ0Q2FsbEJhY2ssIG1vbnN0ZXJQaGFzZU51bWJlciwgfSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGdhbWUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm1vbnN0ZXIgPSBuZXcgTW9uc3RlcihnYW1lKTtcclxuICAgICAgICB0aGlzLmF1ZGlvID0gbmV3IFNvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciA9IG1vbnN0ZXJQaGFzZU51bWJlciB8fCAxO1xyXG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gbGV2ZWxEYXRhO1xyXG4gICAgICAgIHRoaXMubGV2ZWxTdGFydENhbGxCYWNrID0gbGV2ZWxTdGFydENhbGxCYWNrO1xyXG4gICAgICAgIHRoaXMudGltZXJUaWNraW5nID0gbmV3IFRpbWVyVGlja2luZyhnYW1lLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnByb21wdFRleHQgPSBuZXcgUHJvbXB0VGV4dChnYW1lLCB0aGlzLCBsZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0sIGxldmVsRGF0YSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgICAgICB0aGlzLnN0b25lcyA9IG5ldyBTdG9uZXNMYXllcihnYW1lLCBsZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0sIHRoaXMucGF1c2VCdXR0b24sIHRoaXMucmVkcmF3T2ZTdG9uZXMsIHRoaXMsIGN1cnJlbnRfcHV6emxlX2luZGV4KTtcclxuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBsZXZlbERhdGEucHV6emxlcztcclxuICAgIH1cclxuICAgIGxldmVsRW5kQ2FsbEJhY2soYnV0dG9uX25hbWUpIHtcclxuICAgICAgICBpZiAoIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGlzTGV2ZWxFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgaXNMZXZlbEVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpc0dhbWVQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudF9wdXp6bGVfaW5kZXggPT0gc2VsZi5wdXp6bGVEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vTW9yZVRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAobm9Nb3JlVGFyZ2V0ICYmIGJ1dHRvbl9uYW1lICE9IFwiY2xvc2VfYnV0dG9uXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwuYnV0dG9uQ2xpY2ssIEJ1dHRvbkNsaWNrKTtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgICAgaXNHYW1lUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgfVxyXG4gICAgcmVkcmF3T2ZTdG9uZXMoZHJhZ0FuaW1hdGlvbiwgc3RhdHVzLCBlbXB0eVRhcmdldCwgcGlja2VkX3N0b25lLCBwaWNrZWRfc3RvbmVzKSB7XHJcbiAgICAgICAgaWYgKGRyYWdBbmltYXRpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZHJhZ0FuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRyYWdNb25zdGVyQW5pbWF0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlVG9EcmFnQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RvcERyYWdNb25zdGVyQW5pbWF0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlVG9JZGxlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvSWRsZUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBub01vcmVUYXJnZXQgPSBlbXB0eVRhcmdldDtcclxuICAgICAgICAgICAgdmFyIGZudHN0aWNPckdydEluZGV4ID0gc2VsZi5nZXRSYW5kb21JbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VUb0VhdEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlckhhcHB5LCBQaHJhc2VBdWRpbyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1wdHlUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnB1enpsZUVuZEZpcmViYXNlRXZlbnRzKFwic3VjY2Vzc1wiLCBjdXJyZW50X3B1enpsZV9pbmRleCwgcGlja2VkX3N0b25lcywgc2VsZi5sZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0udGFyZ2V0U3RvbmVzLCBzZWxmLmxldmVsRGF0YS5wdXp6bGVzW2N1cnJlbnRfcHV6emxlX2luZGV4XS5mb2lsU3RvbmVzLCBzZWxmLnB1enpsZVN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5waHJhc2VBdWRpb3NbZm50c3RpY09yR3J0SW5kZXhdLCBGZWVkYmFja0F1ZGlvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNob3dGYW50YXN0aWNPckdyZWF0KGZudHN0aWNPckdydEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCh3b3JkX2Ryb3BwZWRfc3RvbmVzICs9IHBpY2tlZF9zdG9uZS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5zdG9wVGltZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLnByb21wdFRleHQuZHJhdygod29yZF9kcm9wcGVkX3N0b25lcyArPSAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuZHJhdygod29yZF9kcm9wcGVkX3N0b25lcyArPSBwaWNrZWRfc3RvbmUubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5zdG9wVGltZXIoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VUb1NwaXRBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYXVkaW8ucGxheVNvdW5kKGF1ZGlvVXJsLm1vbnN0ZXJTYWQsIFBocmFzZUF1ZGlvKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wdXp6bGVFbmRGaXJlYmFzZUV2ZW50cyhcImZhaWx1cmVcIiwgY3VycmVudF9wdXp6bGVfaW5kZXgsIHBpY2tlZF9zdG9uZXMsIHNlbGYubGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLnRhcmdldFN0b25lcywgc2VsZi5sZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0uZm9pbFN0b25lcywgc2VsZi5wdXp6bGVTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlclNwbGl0LCBQaHJhc2VBdWRpbyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRfcHV6emxlX2luZGV4ID09IHNlbGYucHV6emxlRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGkgKiAxMzAwLjY2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLnNldEluZGljYXRvcnMoY3VycmVudF9wdXp6bGVfaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDMgJiYgIWlzR2FtZVBhdXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHV6emxlU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHV6emxlRGF0YShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaSAqIDEzMDAuNjYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldmVsRW5kZWQoKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsU3RhcnNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1vbnN0ZXJQaGFzZU51bWJlciA9IHNlbGYubW9uc3RlclBoYXNlTnVtYmVyIHx8IDE7XHJcbiAgICAgICAgdmFyIGdhbWVMZXZlbERhdGEgPSBnZXREYXRhZnJvbVN0b3JhZ2UoKTtcclxuICAgICAgICB0aGlzLnNob3dUdXRvcmlhbCA9IGdhbWVMZXZlbERhdGEubGVuZ3RoID09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAoZ2FtZUxldmVsRGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxldmVsRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdG90YWxTdGFyc0NvdW50ID0gdG90YWxTdGFyc0NvdW50ICsgZ2FtZUxldmVsRGF0YVtpXS5sZXZlbFN0YXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW9uc3RlclBoYXNlTnVtYmVyID0gTWF0aC5mbG9vcih0b3RhbFN0YXJzQ291bnQgLyAxMikgKyAxIHx8IDE7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciA8IG1vbnN0ZXJQaGFzZU51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnN0ZXJQaGFzZU51bWJlciA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgPSBtb25zdGVyUGhhc2VOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIsIG1vbnN0ZXJQaGFzZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVBoYXNlTnVtYmVyKG1vbnN0ZXJQaGFzZU51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5tb25zdGVyLmNoYW5nZUltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIHNlbGYubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgPSA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKCk7XHJcbiAgICAgICAgaWYgKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyID09IDE0OSkge1xyXG4gICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XHJcbiAgICAgICAgICAgIG5ldyBHYW1lRW5kU2NlbmUoc2VsZi5nYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3IExldmVsRW5kU2NlbmUoc2VsZi5nYW1lLCBzY29yZSwgc2VsZi5tb25zdGVyLCBzZWxmLmxldmVsRW5kQ2FsbEJhY2ssIHNlbGYubGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIsIHRoaXMubGV2ZWxTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNMZXZlbEVuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmxldmVsU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5wdXp6bGVTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbW9uc3RlclBoYXNlTnVtYmVyID0gdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcclxuICAgICAgICB0aGlzLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIG1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZGVsZXRlT2JqZWN0cygpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgTGV2ZWxTdGFydExheWVyKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAzO1xyXG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24gPSBuZXcgUGF1c2VCdXR0b24odGhpcy5jb250ZXh0LCB0aGlzLmNhbmF2c0VsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxJbmRpY2F0b3JzID0gbmV3IExldmVsSW5kaWNhdG9ycyh0aGlzLmNvbnRleHQsIHRoaXMuY2FuYXZzRWxlbWVudCwgMCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcHJldmlvdXNQbGF5ZWRMZXZlbCA9IHNlbGYubGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbE51bWJlcjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQcmV2aW91c1BsYXllZExldmVsLCBwcmV2aW91c1BsYXllZExldmVsKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZXhpdEFsbFNjcmVlbnMoKSB7XHJcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihMZXZlbEVuZExheWVyKTtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKExldmVsRW5kQnV0dG9uc0xheWVyKTtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKExldmVsU3RhcnRMYXllcik7XHJcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdG9uZUxheWVyKTtcclxuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFRpbWV0aWNrZXJMYXllcik7XHJcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihQcm9tcHRUZXh0TGF5ZXIpO1xyXG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoVHV0b3JpYWxMYXllcik7XHJcbiAgICAgICAgLy8gc2VsZi5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2lkbGU0LnBuZ1wiKTtcclxuICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIHNlbGYubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCIpO1xyXG4gICAgICAgIHNlbGYubW9uc3Rlci5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICBzZWxmLmRlbGV0ZU9iamVjdHMoKTtcclxuICAgICAgICB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcclxuICAgIH1cclxuICAgIGRlbGV0ZU9iamVjdHMoKSB7XHJcbiAgICAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcclxuICAgICAgICBkZWxldGUgc2VsZi5hdWRpbztcclxuICAgICAgICBkZWxldGUgc2VsZi5sZXZlbEluZGljYXRvcnM7XHJcbiAgICAgICAgZGVsZXRlIHNlbGYucGF1c2VCdXR0b247XHJcbiAgICAgICAgZGVsZXRlIHNlbGYuc3RvbmVzO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLnRpbWVyVGlja2luZztcclxuICAgICAgICBkZWxldGUgc2VsZi5jYW52YXNTdGFjaztcclxuICAgICAgICBkZWxldGUgc2VsZi5tb25zdGVyO1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLnByb21wdFRleHQ7XHJcbiAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggPSAwO1xyXG4gICAgICAgIHNjb3JlID0gMDtcclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmJnSW1nLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnBpbGxlckltZywgdGhpcy53aWR0aCAqIDAuNiwgdGhpcy5oZWlnaHQgLyA2LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5mZW5jaEltZywgLXRoaXMud2lkdGggKiAwLjQsIHRoaXMuaGVpZ2h0IC8gMywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaGlsbEltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmdyYXNzSW1nLCAtdGhpcy53aWR0aCAqIDAuMjUsIHRoaXMuaGVpZ2h0IC8gMiArICh0aGlzLmhlaWdodCAvIDIpICogMC4xLCB0aGlzLndpZHRoICogMS41LCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy50aW1lcl9lbXB0eSwgMCwgdGhpcy5oZWlnaHQgKiAwLjEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICogMC4wNSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnJvdGF0aW5nX2Nsb2NrLCA1LCB0aGlzLmhlaWdodCAqIDAuMDksIHRoaXMud2lkdGggKiAwLjEyLCB0aGlzLmhlaWdodCAqIDAuMDYpO1xyXG4gICAgICAgIHRoaXMudGltZXJUaWNraW5nLmNyZWF0ZUJhY2tncm91ZCgpO1xyXG4gICAgICAgIHRoaXMuc3RvbmVzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmxldmVsSW5kaWNhdG9ycy5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5wcm9tcHRUZXh0LmNyZWF0ZUJhY2tncm91bmQoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBzZWxmLnRpbWVyVGlja2luZyA/IHNlbGYudGltZXJUaWNraW5nLnVwZGF0ZSgpIDogbnVsbDtcclxuICAgIH1cclxuICAgIGNoYW5nZVB1enpsZSgpIHtcclxuICAgICAgICBpZiAoc2VsZi50aW1lclRpY2tpbmcuaXNUaW1lckVuZGVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc3RvbmVzLmlzVGltZXJFbmRlZCgpO1xyXG4gICAgICAgICAgICB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcclxuICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggKz0gMTtcclxuICAgICAgICAgICAgc2VsZi5zdG9uZXMuY2FudmFzLnNjZW5lLmxldmVsSW5kaWNhdG9ycy5zZXRJbmRpY2F0b3JzKGN1cnJlbnRfcHV6emxlX2luZGV4KTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRfcHV6emxlX2luZGV4ID09IHNlbGYucHV6emxlRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTGV2ZWxFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi50aW1lclRpY2tpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExldmVsRW5kU2NlbmUoc2VsZi5nYW1lLCBzY29yZSwgc2VsZi5tb25zdGVyLCBzZWxmLmxldmVsRW5kQ2FsbEJhY2ssIHNlbGYubGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIsIHRoaXMubGV2ZWxTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLnByb21wdFRleHQuc2V0Q3VycnJlbnRQcm9tcHRUZXh0KFxyXG4gICAgICAgICAgICAgICAgLy8gICBzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdLnByb21wdC5wcm9tcHRUZXh0XHJcbiAgICAgICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wdXp6bGVTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nID8gKHNlbGYudGltZXJUaWNraW5nLmlzVGltZXJFbmRlZCA9IGZhbHNlKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVCYWNrZ3JvdW5kVHlwZXMgPSBbXCJTdW1tZXJcIiwgXCJBdXR1bW5cIiwgXCJXaW50ZXJcIl07XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmRUeXBlID0gTWF0aC5mbG9vcihzZWxmLmxldmVsRGF0YS5sZXZlbE51bWJlciAvIDEwKSAlXHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUJhY2tncm91bmRUeXBlcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyID49IDMwKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRUeXBlID0gYmFja2dyb3VuZFR5cGUgJSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkaW5nU2NyZWVuKHRydWUpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIGxvYWRJbWFnZXMoaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChhdmFpbGFibGVCYWNrZ3JvdW5kVHlwZXNbYmFja2dyb3VuZFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiV2ludGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJCZ0ltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLndpbnRlclBpbGxlckltZywgd2lkdGggKiAwLjM4LCBoZWlnaHQgLyA2LCB3aWR0aCAvIDEuMiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLndpbnRlckZlbmNlSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDQsIHdpZHRoLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVySGlsbEltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJHcmFzc0ltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiArIChoZWlnaHQgLyAyKSAqIDAuMSwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBdXR1bW5cIjpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYXV0dW1uUGlsbGVySW1nLCB3aWR0aCAqIDAuMzgsIGhlaWdodCAvIDYsIHdpZHRoIC8gMS4yLCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYXV0dW1uRmVuY2VJbWcsIC13aWR0aCAqIDAuNCwgaGVpZ2h0IC8gNCwgd2lkdGgsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5IaWxsSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UucGlsbGVySW1nLCB3aWR0aCAqIDAuNiwgaGVpZ2h0IC8gNiwgd2lkdGgsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5mZW5jaEltZywgLXdpZHRoICogMC40LCBoZWlnaHQgLyAzLCB3aWR0aCwgaGVpZ2h0IC8gMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuZ3Jhc3NJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgKyAoaGVpZ2h0IC8gMikgKiAwLjEsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UudGltZXJfZW1wdHksIDAsIGhlaWdodCAqIDAuMSwgd2lkdGgsIGhlaWdodCAqIDAuMDUpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5yb3RhdGluZ19jbG9jaywgNSwgaGVpZ2h0ICogMC4wOSwgd2lkdGggKiAwLjEyLCBoZWlnaHQgKiAwLjA2KTtcclxuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuY3JlYXRlQmFja2dyb3VkKCk7XHJcbiAgICAgICAgICAgIHNlbGYuc3RvbmVzLmRyYXcoKTtcclxuICAgICAgICAgICAgc2VsZi5wYXVzZUJ1dHRvbi5kcmF3KCk7XHJcbiAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLmRyYXcoKTtcclxuICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmNyZWF0ZUJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbihmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdXp6bGVFbmRGaXJlYmFzZUV2ZW50cyhzdWNjZXNzX29yX2ZhaWx1cmUsIHB1enpsZV9udW1iZXIsIGl0ZW1fc2VsZWN0ZWQsIHRhcmdldCwgZm9pbHMsIHJlc3BvbnNlX3RpbWUpIHtcclxuICAgICAgICB2YXIgcHV6emxlRW5kVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5jdXN0b21FdmVudHMoXCJwdXp6bGVfY29tcGxldGVkXCIsIHtcclxuICAgICAgICAgICAgZGF0ZV90aW1lOiBwdXp6bGVFbmRUaW1lLmdldERhdGUoKSArXHJcbiAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICBwdXp6bGVFbmRUaW1lLmdldE1vbnRoKCkgK1xyXG4gICAgICAgICAgICAgICAgMSArXHJcbiAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICBwdXp6bGVFbmRUaW1lLmdldEZ1bGxZZWFyKCkgK1xyXG4gICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgcHV6emxlRW5kVGltZS5nZXRIb3VycygpICtcclxuICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0TWludXRlcygpICtcclxuICAgICAgICAgICAgICAgIFwiOlwiICtcclxuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0U2Vjb25kcygpLFxyXG4gICAgICAgICAgICBzdWNjZXNzX29yX2ZhaWx1cmU6IHN1Y2Nlc3Nfb3JfZmFpbHVyZSxcclxuICAgICAgICAgICAgbGV2ZWxfbnVtYmVyOiB0aGlzLmxldmVsRGF0YS5sZXZlbE51bWJlcixcclxuICAgICAgICAgICAgcHV6emxlX251bWJlcjogcHV6emxlX251bWJlcixcclxuICAgICAgICAgICAgaXRlbV9zZWxlY3RlZDogaXRlbV9zZWxlY3RlZCxcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgIGZvaWxzOiBmb2lscyxcclxuICAgICAgICAgICAgcHJvZmlsZV9udW1iZXI6IDAsXHJcbiAgICAgICAgICAgIGZ0bV9sYW5ndWFnZTogbGFuZyxcclxuICAgICAgICAgICAgdmVyc2lvbl9udW1iZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyc2lvbi1pbmZvLWlkXCIpLmlubmVySFRNTCxcclxuICAgICAgICAgICAgcmVzcG9uc2VfdGltZTogTWF0aC5hYnMoTWF0aC5jZWlsKChwdXp6bGVFbmRUaW1lLmdldFRpbWUoKSAtIHJlc3BvbnNlX3RpbWUpIC8gMTAwMCkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgQnV0dG9uQ2xpY2ssIEZpcmViYXNlVXNlckNsaWNrZWQsIFBsYXlCdXR0b25MYXllciwgUFdBSW5zdGFsbFN0YXR1cywgU3RhcnRTY2VuZUxheWVyLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XHJcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY29tbW9uL3NvdW5kLmpzXCI7XHJcbmltcG9ydCBJbnN0YWxsQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvaW5zdGFsbF9idXR0b24uanNcIjtcclxuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9wbGF5X2J1dG9vbi5qc1wiO1xyXG5pbXBvcnQgeyBNb25zdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9uc3Rlci5qc1wiO1xyXG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xyXG5pbXBvcnQgeyBMZXZlbFNlbGVjdGlvblNjcmVlbiB9IGZyb20gXCIuL2xldmVsLXNlbGVjdGlvbi1zY2VuZS5qc1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcclxudmFyIGJnSW1nID0gbmV3IEltYWdlKCk7XHJcbmJnSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2JnX3YwMS5qcGdcIjtcclxudmFyIGhpbGxJbWcgPSBuZXcgSW1hZ2UoKTtcclxuaGlsbEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9oaWxsX3YwMS5wbmdcIjtcclxudmFyIHBpbGxlckltZyA9IG5ldyBJbWFnZSgpO1xyXG5waWxsZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvVG90ZW1fdjAyX3YwMS5wbmdcIjtcclxudmFyIGdyYXNzSW1nID0gbmV3IEltYWdlKCk7XHJcbmdyYXNzSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiO1xyXG52YXIgZmVuY2hJbWcgPSBuZXcgSW1hZ2UoKTtcclxuZmVuY2hJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZmVuY2VfdjAxLnBuZ1wiO1xyXG52YXIgdGl0bGUgPSBuZXcgSW1hZ2UoKTtcclxudGl0bGUuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL3RpdGxlLnBuZ1wiO1xyXG52YXIgcHJvZmlsZU1vbnN0ZXIgPSBuZXcgSW1hZ2UoKTtcclxucHJvZmlsZU1vbnN0ZXIuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTQucG5nXCI7XHJcbnZhciBzZWxmO1xyXG5sZXQgcHdhX2luc3RhbGxfc3RhdHVzO1xyXG5jb25zdCBhYm91dENvbXBhbnlFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtY29tcGFueVwiKSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcHdhX2luc3RhbGxfc3RhdHVzID0gZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMsIFwiZmFsc2VcIik7XHJcbn0pO1xyXG5leHBvcnQgY2xhc3MgU3RhcnRTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGRhdGEsIGZpcmViYXNlX2FuYWx5dGljcykge1xyXG4gICAgICAgIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLm1vbnN0ZXIgPSBuZXcgTW9uc3Rlcih0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5wd2Ffc3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlX2FuYWx5dGljcyA9IGZpcmViYXNlX2FuYWx5dGljcztcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgU3RhcnRTY2VuZUxheWVyKTtcclxuICAgICAgICBhYm91dENvbXBhbnlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgYWJvdXRDb21wYW55RWxlbWVudC5pbm5lckhUTUwgPSBnbG9iYWxUaGlzLmFib3V0Q29tcGFueTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS5ib3R0b20gPSAwO1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShiZ0ltZywgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UocGlsbGVySW1nLCB0aGlzLndpZHRoICogMC42LCB0aGlzLmhlaWdodCAvIDYsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShmZW5jaEltZywgLXRoaXMud2lkdGggKiAwLjQsIHRoaXMuaGVpZ2h0IC8gMywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGhpbGxJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoICogMS41LCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoZ3Jhc3NJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyICsgKHRoaXMuaGVpZ2h0IC8gMikgKiAwLjEsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aXRsZSwgdGhpcy53aWR0aCAqIDAsIHRoaXMuaGVpZ2h0IC8gNTAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nLXNjcmVlblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVQbGF5QnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXlCdXR0b25MYXllckVsZW1lbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUGxheUJ1dHRvbkxheWVyKSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIHZhciBwbGF5QnV0dG9uSWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBQbGF5QnV0dG9uTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsYXlCdXR0b25JZCk7XHJcbiAgICAgICAgdGhpcy5idXR0b25Db250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gNztcclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG4gICAgICAgICAgICBzZWxmLnBsYXlCdXR0b24gPSBuZXcgUGxheUJ1dHRvbihzZWxmLmJ1dHRvbkNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUsIHNlbGYuY2FudmFzLmhlaWdodCAvIDcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5wbGF5QnV0dG9uID0gbmV3IEluc3RhbGxCdXR0b24oc2VsZi5idXR0b25Db250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjM1LCBzZWxmLmNhbnZhcy5oZWlnaHQgLyA1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQbGF5QnV0dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnBsYXlCdXR0b24ub25DbGljayh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5maXJlYmFzZV9hbmFseXRpY3MubG9nRXZlbnQoRmlyZWJhc2VVc2VyQ2xpY2tlZCwgXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VyQ2xpY2tlZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjbGlja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBTb3VuZCgpLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIiwgQnV0dG9uQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExldmVsU2VsZWN0aW9uU2NyZWVuKHNlbGYuY2FudmFzLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFBsYXlCdXR0b25MYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdGFydFNjZW5lTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLnB3YV9zdGF0dXMgPT0gXCJmYWxzZVwiIHx8ICFzZWxmLnB3YV9zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHB3YV9pbnN0YWxsX3N0YXR1cy5wcm9tcHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHsgb3V0Y29tZSB9ID0gYXdhaXQgcHdhX2luc3RhbGxfc3RhdHVzLnVzZXJDaG9pY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAob3V0Y29tZSA9PT0gXCJhY2NlcHRlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHB3YV9pbnN0YWxsX3N0YXR1cyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VySW5zdGFsbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGV2ZW50OiBcImluc3RhbGxfY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgRmlyZWJhc2VVc2VySW5zdGFsbCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgXCJJbnN0YWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZicShcInRyYWNrQ3VzdG9tXCIsIFVzZXJDYW5jZWxsZWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJjYW5jZWxfY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChVc2VyQ2FuY2VsbGVkLCBcIkNhbmNlbGxlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAhd2luZG93Lm1hdGNoTWVkaWEoXCIoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKVwiKS5tYXRjaGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYucHdhX3N0YXR1cyA9PSBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFsZXJ0KFwiUFdBIGlzIGluc3RhbGxlZCBvbiB5b3VyIGRldmljZSBcXG5QbGVhc2UgcGxheSBmcm9tIHRoZXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWJvdXRDb21wYW55RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5ldyBTb3VuZCgpLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuZXcgTGV2ZWxTZWxlY3Rpb25TY3JlZW4oc2VsZi5jYW52YXMsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFBsYXlCdXR0b25MYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYubW9uc3Rlci5kZWxldGVDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdGFydFNjZW5lTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB2YXIgQ2FudmFzU3RhY2s7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGNsYXNzIExheWVyIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7IGNhbnZhc0lELCBjYW52YXNFbGVtZW50LCB9KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBjYW52YXNJRDtcclxuICAgICAgICAgICAgdGhpcy5jRWxlbSA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ09iamVjdHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBDYW52YXNTdGFjayA9IGNsYXNzIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihjdnNJRCwgc3RhY2tMaW1pdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzYXZUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5jSWQgPSBjdnNJRDtcclxuICAgICAgICAgICAgdGhpcy5zdGFja0xpbWl0ID0gc3RhY2tMaW1pdCB8fCAxMjtcclxuICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdnNJRCk7XHJcbiAgICAgICAgICAgIHRoaXMucmF3V2lkdGggPSB0aGlzLmJrZ0NhbnZhcy5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5yYXdIZWlnaHQgPSB0aGlzLmJrZ0NhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwibGF5ZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBia2dMID0gbmV3IExheWVyKHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXNJRDogdGhpcy5jSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzRWxlbWVudDogdGhpcy5ia2dDYW52YXMsXHJcbiAgICAgICAgICAgICAgICB9KTsgLy8gYmtnQ2FudmFzIGlzIGFsd2F5cyBsYXllclswXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzWzBdID0gYmtnTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwidW5pcXVlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy51bmlxdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUxheWVyKGhlaWdodCwgd2lkdGgsIGxheWVySWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTGF5ZXJFeGlzdChsYXllcklkKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IHdpZHRoICsgXCJweFwiLCBoID0gaGVpZ2h0ICsgXCJweFwiLCBuTHlycyA9IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IC8vIGJrZyBpcyBsYXllciAwIHNvIGF0IGxlYXN0IDFcclxuICAgICAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aCA+PSB0aGlzLnN0YWNrTGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzU3RhY2s6IHRvbyBtYW55IGxheWVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy51bmlxdWUgKz0gMTsgLy8gYSBwcml2YXRlIHN0YXRpYyB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdW5pcXVlVGFnID0gdGhpcy5ia2dDYW52YXMudW5pcXVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBvdmxJZCA9IHRoaXMuY0lkICsgXCJfb3ZsX1wiICsgdW5pcXVlVGFnO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSWQgPSBsYXllcklkO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSFRNTCA9IFwiPGNhbnZhcyBpZD0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIG92bElkICtcclxuICAgICAgICAgICAgICAgICAgICBcIicgc3R5bGU9J3Bvc2l0aW9uOmFic29sdXRlJyB3aWR0aD0nXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJyBoZWlnaHQ9J1wiICtcclxuICAgICAgICAgICAgICAgICAgICBoICtcclxuICAgICAgICAgICAgICAgICAgICBcIic+PC9jYW52YXM+XCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BDdnMgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnNbbkx5cnMgLSAxXS5jRWxlbTtcclxuICAgICAgICAgICAgICAgIHRvcEN2cy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBvdmxIVE1MKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG92bElkKTtcclxuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUubGVmdCA9IFwiNTAlXCI7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgMCUpXCI7XHJcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUuaGVpZ2h0ID0gaDtcclxuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS53aWR0aCA9IHc7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3TCA9IG5ldyBMYXllcih7IGNhbnZhc0lEOiBvdmxJZCwgY2FudmFzRWxlbWVudDogbmV3Q3ZzIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB0aGUgSUQgaW4gYW4gYXJyYXkgdG8gZmFjaWxpdGF0ZSByZW1vdmFsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMucHVzaChuZXdMKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdmxJZDsgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlTGF5ZXIob3ZseUlkKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGJhY2tncm91bmQgY2FudmFzIGlzIHN0aWxsIHRoZXJlXHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5pZCA9PT0gb3ZseUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG92bE5vZGUgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnNbaV0uY0VsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92bE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBub3cgZGVsZXRlIGxheWVycyBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzLnNwbGljZShpLCAxKTsgLy8gZGVsZXRlIHRoZSBMYXllciBvYmplY3RcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGVBbGxMYXllcnMoKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuYmtnQ2FudmFzICYmIHRoaXMuYmtnQ2FudmFzLmxheWVycykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92bE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3JwaGFuID0gb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ycGhhbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBub3cgZGVsZXRlIGxheWVycyBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGFueSByZXNpemUgY2FsbGJhY2tzLCB0aGUgbGF5ZXJzIGFyZSBnb25lXHJcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucy5sZW5ndGggPSAwOyAvLyByZW1vdmUgYW55IGFkZGVkIGhhbmRsZXJzLCBsZWF2ZSB0aGUgYmFzaWNcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNMYXllckV4aXN0KGxheWVySUQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJrZ0NhbnZhcy5sYXllcnNbaV0uaWQgPT09IGxheWVySUQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pKCk7XHJcbiIsInRyeXtzZWxmW1wid29ya2JveDp3aW5kb3c6NC4zLjFcIl0mJl8oKX1jYXRjaChuKXt9dmFyIG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oaSl7dmFyIGU9bmV3IE1lc3NhZ2VDaGFubmVsO2UucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKG4pe3JldHVybiBpKG4uZGF0YSl9LG4ucG9zdE1lc3NhZ2UodCxbZS5wb3J0Ml0pfSl9O2Z1bmN0aW9uIHQobix0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl7dmFyIGU9dFtpXTtlLmVudW1lcmFibGU9ZS5lbnVtZXJhYmxlfHwhMSxlLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBlJiYoZS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sZS5rZXksZSl9fWZ1bmN0aW9uIGkobil7aWYodm9pZCAwPT09bil0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIG59dHJ5e3NlbGZbXCJ3b3JrYm94OmNvcmU6NC4zLjFcIl0mJl8oKX1jYXRjaChuKXt9dmFyIGU9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMucHJvbWlzZT1uZXcgUHJvbWlzZShmdW5jdGlvbih0LGkpe24ucmVzb2x2ZT10LG4ucmVqZWN0PWl9KX0scj1mdW5jdGlvbihuLHQpe3JldHVybiBuZXcgVVJMKG4sbG9jYXRpb24pLmhyZWY9PT1uZXcgVVJMKHQsbG9jYXRpb24pLmhyZWZ9LG89ZnVuY3Rpb24obix0KXtPYmplY3QuYXNzaWduKHRoaXMsdCx7dHlwZTpufSl9O2Z1bmN0aW9uIHUobil7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGk9MDtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXRbaV09YXJndW1lbnRzW2ldO3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4uYXBwbHkodGhpcyx0KSl9Y2F0Y2gobil7cmV0dXJuIFByb21pc2UucmVqZWN0KG4pfX19ZnVuY3Rpb24gYShuLHQsaSl7cmV0dXJuIGk/dD90KG4pOm46KG4mJm4udGhlbnx8KG49UHJvbWlzZS5yZXNvbHZlKG4pKSx0P24udGhlbih0KTpuKX1mdW5jdGlvbiBzKCl7fXZhciBjPWZ1bmN0aW9uKGMpe3ZhciBmLGg7ZnVuY3Rpb24gdihuLHQpe3ZhciByO3JldHVybiB2b2lkIDA9PT10JiYodD17fSksKHI9Yy5jYWxsKHRoaXMpfHx0aGlzKS50PW4sci5pPXQsci5vPTAsci51PW5ldyBlLHIucz1uZXcgZSxyLmg9bmV3IGUsci52PXIudi5iaW5kKGkoaShyKSkpLHIubD1yLmwuYmluZChpKGkocikpKSxyLmc9ci5nLmJpbmQoaShpKHIpKSksci5tPXIubS5iaW5kKGkoaShyKSkpLHJ9aD1jLChmPXYpLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGgucHJvdG90eXBlKSxmLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1mLGYuX19wcm90b19fPWg7dmFyIGwsdyxnLGQ9di5wcm90b3R5cGU7cmV0dXJuIGQucmVnaXN0ZXI9dShmdW5jdGlvbihuKXt2YXIgdCxpLGU9dGhpcyx1PSh2b2lkIDA9PT1uP3t9Om4pLmltbWVkaWF0ZSxjPXZvaWQgMCE9PXUmJnU7cmV0dXJuIHQ9ZnVuY3Rpb24oKXtyZXR1cm4gZS5wPUJvb2xlYW4obmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlciksZS5QPWUuUigpLGEoZS5rKCksZnVuY3Rpb24obil7ZS5CPW4sZS5QJiYoZS5PPWUuUCxlLnMucmVzb2x2ZShlLlApLGUuaC5yZXNvbHZlKGUuUCksZS5qKGUuUCksZS5QLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLGUubCx7b25jZTohMH0pKTt2YXIgdD1lLkIud2FpdGluZztyZXR1cm4gdCYmcih0LnNjcmlwdFVSTCxlLnQpJiYoZS5PPXQsUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpe2UuZGlzcGF0Y2hFdmVudChuZXcgbyhcIndhaXRpbmdcIix7c3c6dCx3YXNXYWl0aW5nQmVmb3JlUmVnaXN0ZXI6ITB9KSl9KSksZS5PJiZlLnUucmVzb2x2ZShlLk8pLGUuQi5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlZm91bmRcIixlLmcpLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250cm9sbGVyY2hhbmdlXCIsZS5tLHtvbmNlOiEwfSksXCJCcm9hZGNhc3RDaGFubmVsXCJpbiBzZWxmJiYoZS5DPW5ldyBCcm9hZGNhc3RDaGFubmVsKFwid29ya2JveFwiKSxlLkMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixlLnYpKSxuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUudiksZS5CfSl9LChpPWZ1bmN0aW9uKCl7aWYoIWMmJlwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUpcmV0dXJuIGZ1bmN0aW9uKG4sdCl7aWYoIXQpcmV0dXJuIG4mJm4udGhlbj9uLnRoZW4ocyk6UHJvbWlzZS5yZXNvbHZlKCl9KG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4pe3JldHVybiBhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG4pfSkpfSgpKSYmaS50aGVuP2kudGhlbih0KTp0KGkpfSksZC5nZXRTVz11KGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuT3x8dGhpcy51LnByb21pc2V9KSxkLm1lc3NhZ2VTVz11KGZ1bmN0aW9uKHQpe3JldHVybiBhKHRoaXMuZ2V0U1coKSxmdW5jdGlvbihpKXtyZXR1cm4gbihpLHQpfSl9KSxkLlI9ZnVuY3Rpb24oKXt2YXIgbj1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyO2lmKG4mJnIobi5zY3JpcHRVUkwsdGhpcy50KSlyZXR1cm4gbn0sZC5rPXUoZnVuY3Rpb24oKXt2YXIgbj10aGlzO3JldHVybiBmdW5jdGlvbihuLHQpe3RyeXt2YXIgaT1uKCl9Y2F0Y2gobil7cmV0dXJuIHQobil9cmV0dXJuIGkmJmkudGhlbj9pLnRoZW4odm9pZCAwLHQpOml9KGZ1bmN0aW9uKCl7cmV0dXJuIGEobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIobi50LG4uaSksZnVuY3Rpb24odCl7cmV0dXJuIG4uTD1wZXJmb3JtYW5jZS5ub3coKSx0fSl9LGZ1bmN0aW9uKG4pe3Rocm93IG59KX0pLGQuaj1mdW5jdGlvbih0KXtuKHQse3R5cGU6XCJXSU5ET1dfUkVBRFlcIixtZXRhOlwid29ya2JveC13aW5kb3dcIn0pfSxkLmc9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLkIuaW5zdGFsbGluZzt0aGlzLm8+MHx8IXIobi5zY3JpcHRVUkwsdGhpcy50KXx8cGVyZm9ybWFuY2Uubm93KCk+dGhpcy5MKzZlND8odGhpcy5XPW4sdGhpcy5CLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLHRoaXMuZykpOih0aGlzLk89bix0aGlzLnUucmVzb2x2ZShuKSksKyt0aGlzLm8sbi5hZGRFdmVudExpc3RlbmVyKFwic3RhdGVjaGFuZ2VcIix0aGlzLmwpfSxkLmw9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxpPW4udGFyZ2V0LGU9aS5zdGF0ZSxyPWk9PT10aGlzLlcsdT1yP1wiZXh0ZXJuYWxcIjpcIlwiLGE9e3N3Omksb3JpZ2luYWxFdmVudDpufTshciYmdGhpcy5wJiYoYS5pc1VwZGF0ZT0hMCksdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKHUrZSxhKSksXCJpbnN0YWxsZWRcIj09PWU/dGhpcy5fPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcImluc3RhbGxlZFwiPT09ZSYmdC5CLndhaXRpbmc9PT1pJiZ0LmRpc3BhdGNoRXZlbnQobmV3IG8odStcIndhaXRpbmdcIixhKSl9LDIwMCk6XCJhY3RpdmF0aW5nXCI9PT1lJiYoY2xlYXJUaW1lb3V0KHRoaXMuXykscnx8dGhpcy5zLnJlc29sdmUoaSkpfSxkLm09ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5PO3Q9PT1uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyJiYodGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwiY29udHJvbGxpbmdcIix7c3c6dCxvcmlnaW5hbEV2ZW50Om59KSksdGhpcy5oLnJlc29sdmUodCkpfSxkLnY9ZnVuY3Rpb24obil7dmFyIHQ9bi5kYXRhO3RoaXMuZGlzcGF0Y2hFdmVudChuZXcgbyhcIm1lc3NhZ2VcIix7ZGF0YTp0LG9yaWdpbmFsRXZlbnQ6bn0pKX0sbD12LCh3PVt7a2V5OlwiYWN0aXZlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucy5wcm9taXNlfX0se2tleTpcImNvbnRyb2xsaW5nXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaC5wcm9taXNlfX1dKSYmdChsLnByb3RvdHlwZSx3KSxnJiZ0KGwsZyksdn0oZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7dGhpcy5EPXt9fXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlQobikuYWRkKHQpfSx0LnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24obix0KXt0aGlzLlQobikuZGVsZXRlKHQpfSx0LmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24obil7bi50YXJnZXQ9dGhpcyx0aGlzLlQobi50eXBlKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0KG4pfSl9LHQuVD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5EW25dPXRoaXMuRFtuXXx8bmV3IFNldH0sbn0oKSk7ZXhwb3J0e2MgYXMgV29ya2JveCxuIGFzIG1lc3NhZ2VTV307XG4vLyMgc291cmNlTWFwcGluZ1VSTD13b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3NyYy9kYXRhL2FwaS1kYXRhLmpzXCI7XHJcbmltcG9ydCB7IERhdGFNb2RhbCB9IGZyb20gXCIuL3NyYy9kYXRhL2RhdGEtbW9kYWwuanNcIjtcclxuaW1wb3J0IHsgU3RhcnRTY2VuZSB9IGZyb20gXCIuL3NyYy9zY2VuZXMvc3RhcnQtc2NlbmUuanNcIjtcclxuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi9zcmMvdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcclxuaW1wb3J0IHsgQ2FjaGVkTGFuZ3VhZ2VzIH0gZnJvbSBcIi4vc3JjL2NvbW1vbi9jb21tb24uanNcIjtcclxuaW1wb3J0IHsgV29ya2JveCB9IGZyb20gXCJ3b3JrYm94LXdpbmRvd1wiO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUludGVncmF0aW9uIH0gZnJvbSBcIi4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2ludGVncmF0aW9uLmpzXCI7XHJcbmNvbnN0IGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChcIm15LWNoYW5uZWxcIik7XHJcbmxldCBjYWNoZWRfbGFuZ3VhZ2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKVxyXG4gICAgPyBuZXcgTWFwKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKSkpXHJcbiAgICA6IG5ldyBNYXAoKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBGaXJlYmFzZUludGVncmF0aW9uLnNlc3Npb25FbmQoKTtcclxufSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHJlZ2lzdGVyV29ya2JveCgpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aCA+IDQyMCA/IDQyMCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCBkYXRhID0geWllbGQgZ2V0RGF0YSgpO1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGFNb2RhbChkYXRhLk90aGVyQXVkaW9zLCBkYXRhLkxldmVscywgZGF0YS5GZWVkYmFja1RleHRzLCBkYXRhLlJpZ2h0VG9MZWZ0LCBkYXRhLkZlZWRiYWNrQXVkaW9zKTtcclxuICAgICAgICBpZiAod2luZG93LkFuZHJvaWQpIHtcclxuICAgICAgICAgICAgd2luZG93LkFuZHJvaWQucmVjZWl2ZURhdGEoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykgPyBjYWNoZWRfbGFuZ3VhZ2VzLmdldChsYW5nKSA6IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnbG9iYWxUaGlzLmFib3V0Q29tcGFueSA9IGRhdGEuYWJvdXRDb21wYW55O1xyXG4gICAgICAgIGdsb2JhbFRoaXMuZGVzY3JpcHRpb25UZXh0ID0gZGF0YS5kZXNjcmlwdGlvblRleHQ7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5pbml0aWFsaXplRmlyZWJhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoID4gNDIwID8gNDIwIDogd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5tb25zdGVyO1xyXG4gICAgICAgICAgICAgICAgbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpLmRlbGV0ZUFsbExheWVycygpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhcnRTY2VuZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IG5ldyBTdGFydFNjZW5lKGNhbnZhcywgZCwgdGhpcy5hbmFseXRpY3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGlmIChjYWNoZWRfbGFuZ3VhZ2VzLmhhcyhsYW5nKSkge1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5pbml0aWFsaXplRmlyZWJhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NlbmUgPSBuZXcgU3RhcnRTY2VuZShjYW52YXMsIGQsIHRoaXMuYW5hbHl0aWNzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyV29ya2JveCgpIHtcclxuICAgIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBsZXQgd2IgPSBuZXcgV29ya2JveChcIi4vc3cuanNcIiwge30pO1xyXG4gICAgICAgIHdiLnJlZ2lzdGVyKCkudGhlbihoYW5kbGVTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKTtcclxuICAgICAgICBpZiAoIWNhY2hlZF9sYW5ndWFnZXMuaGFzKGxhbmcpKSB7XHJcbiAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoeyBjb21tYW5kOiBcIkNhY2hlXCIsIGRhdGE6IGxhbmcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZVNlcnZpY2VXb3JrZXJNZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgaWYgKHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nKSB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uLmluc3RhbGxpbmcucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlJlZ2lzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogbGFuZyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVTZXJ2aWNlV29ya2VyTWVzc2FnZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmRhdGEubXNnID09IFwiTG9hZGluZ1wiKSB7XHJcbiAgICAgICAgaGFuZGxlTG9hZGluZ01lc3NhZ2UoZXZlbnQuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuZGF0YS5tc2cgPT0gXCJVcGRhdGUgRm91bmRcIikge1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZUZvdW5kTWVzc2FnZSgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmdNZXNzYWdlKGRhdGEpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ19udW1iZXJcIikuaW5uZXJIVE1MID1cclxuICAgICAgICBcIiBcIiArIFwiIGRvd25sb2FkaW5nLi4uIFwiICsgZGF0YS5kYXRhICsgXCIlXCI7XHJcbiAgICBpZiAoZGF0YS5kYXRhID09IDEwMCkge1xyXG4gICAgICAgIGNhY2hlZF9sYW5ndWFnZXMuc2V0KGxhbmcsIFwidHJ1ZVwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDYWNoZWRMYW5ndWFnZXMsIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20oY2FjaGVkX2xhbmd1YWdlcy5lbnRyaWVzKCkpKSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUZvdW5kTWVzc2FnZSgpIHtcclxuICAgIGxldCB0ZXh0ID0gXCJVcGRhdGUgRm91bmRcXG5QcmVzcyBvayB0byB1cGRhdGUuXCI7XHJcbiAgICBpZiAoY29uZmlybSh0ZXh0KSA9PSB0cnVlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0ZXh0ID0gXCJZb3UgY2FuY2VsZWQhXCI7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9