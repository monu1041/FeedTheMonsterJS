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
/* harmony export */   "Debugger": () => (/* binding */ Debugger),
/* harmony export */   "lang": () => (/* binding */ lang)
/* harmony export */ });
/* harmony import */ var _src_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/common.js */ "./src/common/common.js");
//const urlParams = new URLSearchParams(window.location.search);

//export var lang = urlParams.get("ftm_language");
var lang = "english";
console.log("Url = ", window.location.href);
const Debugger = {
    DevelopmentLink: window.location.href.includes(_src_common_common_js__WEBPACK_IMPORTED_MODULE_0__.DevelopmentServer)
        ? true
        : false,
    DebugMode: false,
};


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
/* harmony export */   "DevelopmentServer": () => (/* binding */ DevelopmentServer),
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
const DevelopmentServer = "https://devcuriousreader.wpcomstaging.com/testing/";


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


let cached_languages = localStorage.getItem(_common_js__WEBPACK_IMPORTED_MODULE_1__.CachedLanguages)
    ? new Map(JSON.parse(localStorage.getItem(_common_js__WEBPACK_IMPORTED_MODULE_1__.CachedLanguages)))
    : new Map();
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
            if (source.buffer == null) {
                this.fetchFromServer(src);
            }
            source.connect(audioContext.destination);
            source.start(0);
            this.playingSources.push(source);
        }
        else {
            this.fetchFromServer(src);
        }
    }
    fetchFromServer(src) {
        fetch(src)
            .then((response) => response.arrayBuffer())
            .then((buffer) => this.audioContext.decodeAudioData(buffer))
            .then((audioBuffer) => {
            var source = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.audioContext.destination);
            this.playingSources.push(source);
            source.start();
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
    "./assets/audios/intro.mp3",
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
let loadPromises = audioUrls.map((url) => loadAudio(url).catch((err) => { }));
Promise.all(loadPromises).then(() => {
    if (cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang)) {
        (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.loadingScreen)(false);
    }
    // You can now use the audioBuffers object to play the preloaded audio files
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
        if (navigator.onLine) {
            this.analytics.logEvent("session_end");
        }
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
    intro: "./assets/audios/intro.mp3",
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
            this.canvas.scene.audio.playSound("./assets/audios/intro.mp3", _common_common_js__WEBPACK_IMPORTED_MODULE_1__.IntroMusic);
            this.monster.changeImage("./assets/images/happy1" + this.monsterPhaseNumber + ".png");
            this.canvas.scene.audio.playSound(audioUrl.levelWin, _common_common_js__WEBPACK_IMPORTED_MODULE_1__.LevelEndAudio);
        }
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState === "visible") {
                self.canvas.scene.audio.playSound("./assets/audios/intro.mp3", _common_common_js__WEBPACK_IMPORTED_MODULE_1__.IntroMusic);
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
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");







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
                self.sound.playSound("./assets/audios/intro.mp3", _common_common_js__WEBPACK_IMPORTED_MODULE_3__.IntroMusic);
                self.drawStars();
            }
        }
    }
    createCanvas() {
        console.log("Debuger", _global_variables_js__WEBPACK_IMPORTED_MODULE_6__.Debugger.DebugMode);
        this.sound.playSound("./assets/audios/intro.mp3", _common_common_js__WEBPACK_IMPORTED_MODULE_3__.IntroMusic);
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
                    if (_global_variables_js__WEBPACK_IMPORTED_MODULE_6__.Debugger.DebugMode) {
                        self.sound.playSound("./assets/audios/ButtonClick.wav", _common_common_js__WEBPACK_IMPORTED_MODULE_3__.ButtonClick);
                        self.sound.pauseSound();
                        levelNumber = s.index + level - 1;
                        self.startGame(levelNumber);
                    }
                    else if (s.index + level - 1 <= unlockLevelIndex + 1) {
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
            _global_variables_js__WEBPACK_IMPORTED_MODULE_6__.Debugger.DebugMode
                ? this.context.fillText(this.data.levels[s.index + level - 1].levelMeta.levelType, s.x + imageSize / 3.5, s.y + imageSize / 1.3)
                : null;
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
                    if (!_global_variables_js__WEBPACK_IMPORTED_MODULE_6__.Debugger.DebugMode) {
                        s.index + level - 1 > unlockLevelIndex + 1
                            ? context.drawImage(mapLock, s.x, s.y, this.canvas.height / 13, this.canvas.height / 13)
                            : null;
                    }
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
const toggleBtn = document.getElementById("toggle-btn");
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
        toggleBtn.addEventListener("click", () => {
            toggleBtn.classList.toggle("on");
            if (toggleBtn.classList.contains("on")) {
                console.log('Entered');
                _global_variables_js__WEBPACK_IMPORTED_MODULE_7__.Debugger.DebugMode = true;
                toggleBtn.innerText = "Dev";
            }
            else {
                _global_variables_js__WEBPACK_IMPORTED_MODULE_7__.Debugger.DebugMode = false;
                toggleBtn.innerText = "Dev";
            }
        });
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
        // loadingScreen(false);
        //  document.getElementById("loading-screen").style.display = "none";
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
                    toggleBtn.style.display = "none";
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
                _global_variables_js__WEBPACK_IMPORTED_MODULE_6__.Debugger.DevelopmentLink
                    ? (document.getElementById("toggle-btn").style.display = "block")
                    : null;
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
            _global_variables_js__WEBPACK_IMPORTED_MODULE_6__.Debugger.DevelopmentLink
                ? (document.getElementById("toggle-btn").style.display = "block")
                : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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Q2hDLG9CQUFvQiw4REFBUztBQUM3QjtBQUNBLDREQUE0RCxzREFBSSx5QkFBeUIsc0RBQUk7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUk7QUFDekMsZ0JBQWdCLDBFQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUdBQXNDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFFQUFXO0FBQy9CO0FBQ0Esc0NBQXNDLGtFQUFVO0FBQ2hEO0FBQ0EsU0FBUztBQUNULGlDQUFpQyxzREFBSTtBQUNyQztBQUNBLGdCQUFnQix5R0FBc0M7QUFDdEQ7QUFDQSxZQUFZLDBFQUF3QjtBQUNwQztBQUNBO0FBQ0Esa0NBQWtDLGtFQUFVO0FBQzVDO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EscUJBQXFCLG1EQUFPLGNBQWM7QUFDMUM7QUFDQSxrQ0FBa0Msc0RBQUk7QUFDdEMsa0NBQWtDLHdCQUF3QixzREFBSSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQUk7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQUk7QUFDakMsNkJBQTZCLGtFQUFlO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrRUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vZ2xvYmFsLXZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vbGV2ZWwtY29uZmlnLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tbW9uL3NvdW5kLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tbW9uL3N0b25lcy1jb25maWcuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvY2FuY2VsX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jbG9zZV9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaW5zdGFsbF9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvbmV4dF9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcGF1c2VfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3BsYXlfYnV0b29uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL3JldHJ5X2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvbGV2ZWwtaW5kaWNhdG9ycy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvbW9uc3Rlci5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvcGF1c2UtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3Byb21wdC10ZXh0LmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9zdG9uZXMtbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3RpbWVyLXRpY2tpbmcuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3R1dG9yaWFsLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvZGF0YS9hcGktZGF0YS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvZGF0YS1tb2RhbC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvcHJvZmlsZS1kYXRhLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2VfY29uZmlnLnRzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvZmlyZWJhc2UvZmlyZWJhc2VfaW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvZ2FtZS1lbmQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9sZXZlbC1lbmQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvbGV2ZWwtc2VsZWN0aW9uLXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2xldmVsLXN0YXJ0LXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL3N0YXJ0LXNjZW5lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvdXRpbGl0eS9jYW52YXMtc3RhY2suanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL25vZGVfbW9kdWxlcy93b3JrYm94LXdpbmRvdy9idWlsZC93b3JrYm94LXdpbmRvdy5wcm9kLmVzNS5tanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9mZWVkVGhlTW9uc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5pbXBvcnQgeyBEZXZlbG9wbWVudFNlcnZlciB9IGZyb20gXCIuL3NyYy9jb21tb24vY29tbW9uLmpzXCI7XG4vL2V4cG9ydCB2YXIgbGFuZyA9IHVybFBhcmFtcy5nZXQoXCJmdG1fbGFuZ3VhZ2VcIik7XG5leHBvcnQgdmFyIGxhbmcgPSBcImVuZ2xpc2hcIjtcbmNvbnNvbGUubG9nKFwiVXJsID0gXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbmV4cG9ydCBjb25zdCBEZWJ1Z2dlciA9IHtcbiAgICBEZXZlbG9wbWVudExpbms6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKERldmVsb3BtZW50U2VydmVyKVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBmYWxzZSxcbiAgICBEZWJ1Z01vZGU6IGZhbHNlLFxufTtcbiIsImltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2VzKHNvdXJjZXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGltYWdlcyA9IHt9O1xuICAgIHZhciBsb2FkZWRJbWFnZXMgPSAwO1xuICAgIHZhciBudW1JbWFnZXMgPSAwO1xuICAgIC8vIGdldCBudW0gb2Ygc291cmNlc1xuICAgIGZvciAodmFyIHNyYyBpbiBzb3VyY2VzKSB7XG4gICAgICAgIG51bUltYWdlcysrO1xuICAgIH1cbiAgICBmb3IgKHZhciBzcmMgaW4gc291cmNlcykge1xuICAgICAgICBpbWFnZXNbc3JjXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZXNbc3JjXS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKytsb2FkZWRJbWFnZXMgPj0gbnVtSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaW1hZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2VzW3NyY10uc3JjID0gc291cmNlc1tzcmNdO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkaW5nU2NyZWVuKGxvYWRpbmcpIHtcbiAgICBjb25zdCBsb2FkaW5nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZy1zY3JlZW5cIik7XG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdfdGV4dFwiKTtcbiAgICBsb2FkaW5nVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpLmJrZ0NhbnZhcy5sYXllcnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkKTtcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsb2FkaW5nRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKS5ia2dDYW52YXMubGF5ZXJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCk7XG4gICAgICAgICAgICBodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBNb25zdGVyTGF5ZXIgPSBcIm1vbnN0ZXJDYW52YXNcIjtcbmV4cG9ydCBjb25zdCBUdXRvcmlhbExheWVyID0gXCJ0dXRvcmlhbENhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFBhdXNlUG9wdXBMYXllciA9IFwicGF1c2Vwb3B1cENhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFN0b25lTGF5ZXIgPSBcInN0b25lQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgVGltZXRpY2tlckxheWVyID0gXCJ0aW1ldGlja0NhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IExldmVsRW5kTGF5ZXIgPSBcImxldmVsRW5kQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgTGV2ZWxFbmRCdXR0b25zTGF5ZXIgPSBcImxldmVsRW5kQnV0dG9uc0NhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IExldmVsU2VsZWN0aW9uTGF5ZXIgPSBcImxldmVsU2VsZWN0aW9uQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgTGV2ZWxTdGFydExheWVyID0gXCJsZXZlbFN0YXJ0Q2FudmFzXCI7XG5leHBvcnQgY29uc3QgU3RhcnRTY2VuZUxheWVyID0gXCJzdGFydFNjZW5lQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgUGxheUJ1dHRvbkxheWVyID0gXCJwbGF5QnV0dG9uQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgR2FtZUVuZExheWVyID0gXCJHYW1lRW5kQ2FudmFzXCI7XG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VyQ2xpY2tlZCA9IFwidXNlcl9jbGlja2VkXCI7XG5leHBvcnQgY29uc3QgRmlyZWJhc2VVc2VySW5zdGFsbCA9IFwidXNlcl9pbnN0YWxsZWRcIjtcbmV4cG9ydCBjb25zdCBQcm9tcHRUZXh0TGF5ZXIgPSBcInByb21wdFRleHRDYW52YXNcIjtcbmV4cG9ydCBjb25zdCBQV0FJbnN0YWxsU3RhdHVzID0gXCJwd2FfaW5zdGFsbGVkX3N0YXR1c1wiO1xuZXhwb3J0IGNvbnN0IFVzZXJDYW5jZWxsZWQgPSBcInVzZXJfY2FuY2VsX2luc3RhbGxhdGlvblwiO1xuZXhwb3J0IGNvbnN0IE5hdGl2ZVBsYXlCdXR0b24gPSBcIm5hdGl2ZV9wbGF5YnV0dG9uX2NsaWNrZWRcIjtcbmV4cG9ydCBjb25zdCBQcmV2aW91c1BsYXllZExldmVsID0gXCJzdG9yZVByZXZpb3VzUGxheWVkTGV2ZWxcIiArIGxhbmc7XG5leHBvcnQgY29uc3QgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgPSBcInN0b3JlTW9uc3RlclBoYXNlTnVtYmVyXCIgKyBsYW5nO1xuZXhwb3J0IGNvbnN0IENhY2hlZExhbmd1YWdlcyA9IFwiY2FjaGVkX2xhbmd1YWdlc1wiO1xuZXhwb3J0IGNvbnN0IE1vbnN0ZXJBdWRpbyA9IFwibW9uc3Rlcl9hdWRpb1wiO1xuZXhwb3J0IGNvbnN0IEZlZWRiYWNrQXVkaW8gPSBcImZlZWRiYWNrX2F1ZGlvXCI7XG5leHBvcnQgY29uc3QgSW50cm9NdXNpYyA9IFwiaW50cm9fbXVzaWNcIjtcbmV4cG9ydCBjb25zdCBQcm9tcHRBdWRpbyA9IFwicHJvbXB0X2F1ZGlvXCI7XG5leHBvcnQgY29uc3QgQnV0dG9uQ2xpY2sgPSBcImJ1dHRvbl9jbGlja1wiO1xuZXhwb3J0IGNvbnN0IFRpbWVPdmVyID0gXCJ0aW1lX292ZXJcIjtcbmV4cG9ydCBjb25zdCBTdG9uZU11c2ljID0gXCJzdG9uZV9tdXNpY1wiO1xuZXhwb3J0IGNvbnN0IFBocmFzZUF1ZGlvID0gXCJwaHJhc2VfYXVkaW9cIjtcbmV4cG9ydCBjb25zdCBMZXZlbEVuZEF1ZGlvID0gXCJsZXZlbF9lbmRfYXVkaW9cIjtcbmV4cG9ydCBjb25zdCBEZXZlbG9wbWVudFNlcnZlciA9IFwiaHR0cHM6Ly9kZXZjdXJpb3VzcmVhZGVyLndwY29tc3RhZ2luZy5jb20vdGVzdGluZy9cIjtcbiIsImV4cG9ydCBjbGFzcyBMZXZlbENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoeFBvcywgeVBvcywgaW5kZXgpIHtcbiAgICAgICAgdGhpcy54ID0geFBvcztcbiAgICAgICAgdGhpcy55ID0geVBvcztcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBJY29uLnBuZ1wiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xuaW1wb3J0IHsgQ2FjaGVkTGFuZ3VhZ2VzLCBsb2FkaW5nU2NyZWVuLCBQcm9tcHRBdWRpbywgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcbmxldCBjYWNoZWRfbGFuZ3VhZ2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKVxuICAgID8gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKENhY2hlZExhbmd1YWdlcykpKVxuICAgIDogbmV3IE1hcCgpO1xubGV0IGluYWN0aXZlX3NjcmVlbiA9IGZhbHNlO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXlpbmdTb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIH1cbiAgICBwbGF5U291bmQoc3JjLCB0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlICE9IFByb21wdEF1ZGlvKSB7XG4gICAgICAgICAgICBsZXQgc291cmNlID0gYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGF1ZGlvQnVmZmVyc1tzcmNdO1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5idWZmZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hGcm9tU2VydmVyKHNyYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3VyY2UuY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgc291cmNlLnN0YXJ0KDApO1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nU291cmNlcy5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoRnJvbVNlcnZlcihzcmMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZldGNoRnJvbVNlcnZlcihzcmMpIHtcbiAgICAgICAgZmV0Y2goc3JjKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAgICAgLnRoZW4oKGJ1ZmZlcikgPT4gdGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlcikpXG4gICAgICAgICAgICAudGhlbigoYXVkaW9CdWZmZXIpID0+IHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgICAgIHNvdXJjZS5idWZmZXIgPSBhdWRpb0J1ZmZlcjtcbiAgICAgICAgICAgIHNvdXJjZS5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucGxheWluZ1NvdXJjZXMucHVzaChzb3VyY2UpO1xuICAgICAgICAgICAgc291cmNlLnN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhY3RpdmVTY3JlZW4oKSB7XG4gICAgICAgIGlmIChpbmFjdGl2ZV9zY3JlZW4pIHtcbiAgICAgICAgICAgIGluYWN0aXZlX3NjcmVlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXVzZVNvdW5kKCk7XG4gICAgICAgICAgICBpbmFjdGl2ZV9zY3JlZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdXNlU291bmQoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5aW5nU291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5aW5nU291cmNlc1tpXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5aW5nU291cmNlcyA9IFtdO1xuICAgIH1cbiAgICBjaGFuZ2VTb3Vyc2Uoc3JjKSB7XG4gICAgICAgIC8vIHRoaXMuYXVkaW8uc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnBsYXlTb3VuZChzcmMpO1xuICAgIH1cbiAgICBwbGF5TGV2ZWxFbmRIYXBweUF1ZGlvKGxldmVsV2luQXVkaW8pIHtcbiAgICAgICAgLy8gdGhpcy5hdWRpby5zcmMgPSBsZXZlbFdpbkF1ZGlvO1xuICAgICAgICAvLyB0aGlzLnBsYXlTb3VuZChsZXZlbFdpbkF1ZGlvKTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgdGhpcy5pbnRyb0F1ZGlvLnBsYXkoKTtcbiAgICAgICAgLy8gfSwgNzAwKTtcbiAgICB9XG59XG5sZXQgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xubGV0IGF1ZGlvQnVmZmVycyA9IHt9O1xubGV0IGF1ZGlvVXJscyA9IFtcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby5tcDNcIixcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9DaGVlcmluZy0wMi5tcDNcIixcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9vbkRyYWcubXAzXCIsXG4gICAgXCIuL2Fzc2V0cy9hdWRpb3MvdGltZW91dC5tcDNcIixcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbFdpbkZhbmZhcmUubXAzXCIsXG4gICAgXCIuL2Fzc2V0cy9hdWRpb3MvTGV2ZWxMb3NlRmFuZmFyZS5tcDNcIixcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIixcbiAgICBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9hdWRpb3MvZmFudGFzdGljLldBVlwiLFxuICAgIFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2F1ZGlvcy9ncmVhdC53YXZcIixcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9Nb25zdGVyIFNwaXRzIHdyb25nIHN0b25lcy0wMS5tcDNcIixcbiAgICBcIi4vYXNzZXRzL2F1ZGlvcy9EaXNhcG9pbnRlZC0wNS5tcDNcIixcbl07XG5mdW5jdGlvbiBsb2FkQXVkaW8odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGF1ZGlvQnVmZmVyc1t1cmxdID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiRXJyb3IgbG9hZGluZyBhdWRpbyBmaWxlXCIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfSk7XG59XG5sZXQgbG9hZFByb21pc2VzID0gYXVkaW9VcmxzLm1hcCgodXJsKSA9PiBsb2FkQXVkaW8odXJsKS5jYXRjaCgoZXJyKSA9PiB7IH0pKTtcblByb21pc2UuYWxsKGxvYWRQcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgaWYgKGNhY2hlZF9sYW5ndWFnZXMuaGFzKGxhbmcpKSB7XG4gICAgICAgIGxvYWRpbmdTY3JlZW4oZmFsc2UpO1xuICAgIH1cbiAgICAvLyBZb3UgY2FuIG5vdyB1c2UgdGhlIGF1ZGlvQnVmZmVycyBvYmplY3QgdG8gcGxheSB0aGUgcHJlbG9hZGVkIGF1ZGlvIGZpbGVzXG59KTtcbiIsImV4cG9ydCBjbGFzcyBTdG9uZUNvbmZpZyB7XG4gICAgY29uc3RydWN0b3Ioc3RvbmVMZXR0ZXIsIHhQb3MsIHlQb3MpIHtcbiAgICAgICAgdGhpcy54ID0geFBvcztcbiAgICAgICAgdGhpcy55ID0geVBvcztcbiAgICAgICAgdGhpcy5vcmlneCA9IHhQb3M7XG4gICAgICAgIHRoaXMub3JpZ3kgPSB5UG9zO1xuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRleHQgPSBzdG9uZUxldHRlcjtcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc3RvbmVfcGlua192MDIucG5nXCI7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FuY2VsQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gY2FudmFzLndpZHRoICogMC4xICsgKGNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMjtcbiAgICAgICAgdGhpcy5wb3NZID0gY2FudmFzLmhlaWdodCAqIDAuMjtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Nsb3NlX2J0bi5wbmdcIjtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwX2J0bi5wbmdcIjtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdGFsbEJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9JbnN0YWxsX2J1dHRvbi5wbmdcIjtcbiAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoIC8gMywgc2VsZi5jYW52YXMud2lkdGggLyA2KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyAxMikgKlxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDEyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuY2FudmFzLndpZHRoIC8gOCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0QnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHBvc1gsIHBvc1kpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL25leHRfYnRuLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IGNhbnZhcy53aWR0aCAtIGNhbnZhcy5oZWlnaHQgKiAwLjA5O1xuICAgICAgICB0aGlzLnBvc1kgPSAwO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGF1c2VfdjAxLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIG9uQ2xpY2soeENsaWNrLCB5Q2xpY2spIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMikgKlxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9QbGF5X2J1dHRvbi5wbmdcIjtcbiAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBhdXNlX2J1dHRvbl9pbWFnZSwgc2VsZi5wb3NYLCBzZWxmLnBvc1ksIHNlbGYuY2FudmFzLndpZHRoIC8gMywgc2VsZi5jYW52YXMud2lkdGggLyAzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAoeENsaWNrIC0gdGhpcy5wb3NYIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSArXG4gICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtIHRoaXMuY2FudmFzLndpZHRoIC8gNikpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLmNhbnZhcy53aWR0aCAvIDgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0cnlCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcmV0cnlfYnRuLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTGV2ZWxJbmRpY2F0b3JzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIGFjdGl2ZUluZGljYXRvcnMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9ycyA9IGFjdGl2ZUluZGljYXRvcnM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBzZXRJbmRpY2F0b3JzKGludCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGljYXRvcnMgPSBpbnQ7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBsZXZlbF9pbmRpY2F0b3IgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV2ZWxfaW5kaWNhdG9yLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2xldmVsc192MDEucG5nXCI7XG4gICAgICAgIHZhciBiYXJfZW1wdHkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFyX2VtcHR5LnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2Jhcl9lbXB0eV92MDEucG5nXCI7XG4gICAgICAgIGxldmVsX2luZGljYXRvci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShsZXZlbF9pbmRpY2F0b3IsIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgMCwgc2VsZi5jYW52YXMud2lkdGggKiAwLjM1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KTtcbiAgICAgICAgICAgIGJhcl9lbXB0eS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UoYmFyX2VtcHR5LCAoKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyA3KSAqIChpICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyIC0gKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gNiwgKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyAxMCwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKHNlbGYpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUoc2VsZikge1xuICAgICAgICB2YXIgYmFyX2Z1bGwgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFyX2Z1bGwuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmFyX2Z1bGxfdjAxLnBuZ1wiO1xuICAgICAgICBiYXJfZnVsbC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFjdGl2ZUluZGljYXRvcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UoYmFyX2Z1bGwsICgoc2VsZi5jYW52YXMud2lkdGggKiAwLjM1KSAvIDcpICogKGkgKyAxKSArIHNlbGYuY2FudmFzLndpZHRoICogMC4xNSwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMiAtIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDYsIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gMTAsIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vbnN0ZXJMYXllciwgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbnZhciBsYXN0VGltZSA9IDA7XG52YXIgc2VsZjtcbnZhciBhbmltYXRpb25GcmFtZTtcbnZhciBtb25zdGVyUGhhc2VOdW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yZU1vbnN0ZXJQaGFzZU51bWJlcikgfHwgMTtcbmNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+LlwiKTtcbmNvbnNvbGUubG9nKG1vbnN0ZXJQaGFzZU51bWJlcik7XG52YXIgZWF0SW1nID0gbmV3IEltYWdlKCk7XG5lYXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZWF0MVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XG52YXIgaWRsZUltZyA9IG5ldyBJbWFnZSgpO1xuaWRsZUltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XG52YXIgc3BpdEltZyA9IG5ldyBJbWFnZSgpO1xuc3BpdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zcGl0MVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XG52YXIgZHJhZ0ltZyA9IG5ldyBJbWFnZSgpO1xuZHJhZ0ltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9kcmFnMVwiICsgbW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCI7XG5jb25zb2xlLmxvZyhcIm1vbnN0ZXJleGVjdXRpbmdcIik7XG5leHBvcnQgY2xhc3MgTW9uc3RlciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgemluZGV4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnppbmRleCA9IHppbmRleDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmdhbWUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb25zdGVyXCIpO1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgdGhpcy5tYXhGcmFtZSA9IDY7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS53aWR0aCAvIDIgLSB0aGlzLmdhbWUud2lkdGggKiAwLjI0MztcbiAgICAgICAgdGhpcy55ID0gdGhpcy5nYW1lLndpZHRoIC8gMztcbiAgICAgICAgdGhpcy5mcHMgPSAxMDtcbiAgICAgICAgdGhpcy5mcmFtZUludGVydmFsID0gMTAwMCAvIHRoaXMuZnBzO1xuICAgICAgICB0aGlzLmZyYW1lVGltZXIgPSAwO1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBNb25zdGVyTGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiNlwiO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbigwKTtcbiAgICB9XG4gICAgY2hhbmdlWmluZGV4KGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSBpbmRleDtcbiAgICB9XG4gICAgZGVsZXRlQ2FudmFzKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVUaW1lciA+IHRoaXMuZnJhbWVJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IHRoaXMubWF4RnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWVyICs9IGRlbHRhVGltZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgNzcwICogdGhpcy5mcmFtZVgsIDEzODYgKiB0aGlzLmZyYW1lWSwgNzY4LCAxMzg2LCB0aGlzLngsIHRoaXMueSAqIDAuOCwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMS41KTtcbiAgICB9XG4gICAgY2hhbmdlSW1hZ2Uoc3JjKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKDApO1xuICAgICAgICAvLyBpZiAodGhpcy5mcmFtZVkgPT0gMSkge1xuICAgICAgICAvLyAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBzcmM7XG4gICAgfVxuICAgIGNoYW5nZVBoYXNlTnVtYmVyKG1vbnN0ZXJQaGFzZU51bSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vbnN0ZXIgY2hhbmdpbmdcIik7XG4gICAgICAgIGVhdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBlYXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZWF0MVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XG4gICAgICAgIGlkbGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWRsZUltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XG4gICAgICAgIHNwaXRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3BpdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zcGl0MVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XG4gICAgICAgIGRyYWdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZHJhZ0ltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9kcmFnMVwiICsgbW9uc3RlclBoYXNlTnVtICsgXCIucG5nXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGVhdEltZy5zcmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhpZGxlSW1nLnNyYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNwaXRJbWcuc3JjKTtcbiAgICAgICAgY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcbiAgICB9XG4gICAgY2hhbmdlVG9EcmFnQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmltYWdlID0gZHJhZ0ltZztcbiAgICB9XG4gICAgY2hhbmdlVG9FYXRBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBlYXRJbWc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0lkbGVBbmltYXRpb24oKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIGNoYW5nZVRvSWRsZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGlkbGVJbWc7XG4gICAgfVxuICAgIGNoYW5nZVRvU3BpdEFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IHNwaXRJbWc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0lkbGVBbmltYXRpb24oKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIGFuaW1hdGlvbih0aW1lU3RhbXApIHtcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIGxhc3RUaW1lO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgc2VsZi51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2VsZi5hbmltYXRpb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhdXNlUG9wdXBMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IENhbmNlbEJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2NhbmNlbF9idXR0b24uanNcIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL2Nsb3NlX2J1dHRvbi5qc1wiO1xuaW1wb3J0IFJldHJ5QnV0dG9uIGZyb20gXCIuL2J1dHRvbnMvcmV0cnlfYnV0dG9uLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZVBvcFVwIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGxldmVsU3RhcnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMuY2FudmFzLndpZHRoLCBQYXVzZVBvcHVwTGF5ZXIpO1xuICAgICAgICBjb25zdCBzZWxmSWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHNlbGZJZEVsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBzZWxmSWRFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiMTFcIjtcbiAgICAgICAgc2VsZklkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICB2YXIgcG9wX3VwX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBvcF91cF9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9wb3B1cF9iZ192MDEucG5nXCI7XG4gICAgICAgIHBvcF91cF9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwb3BfdXBfaW1hZ2UsIHNlbGYuY2FudmFzLndpZHRoICogMC4xLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIsIHNlbGYuY2FudmFzLndpZHRoICogMC44LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuOCk7XG4gICAgICAgICAgICBzZWxmLmNhbmNlbEJ1dHRvbiA9IG5ldyBDYW5jZWxCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcyk7XG4gICAgICAgICAgICBzZWxmLnJldHJ5QnV0dG9uID0gbmV3IFJldHJ5QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC41NSwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yICtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNCAtXG4gICAgICAgICAgICAgICAgKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKTtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjI1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIgK1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLndpZHRoICogMC40IC1cbiAgICAgICAgICAgICAgICAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmSWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZklkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChzZWxmLmNhbmNlbEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LnRpbWVyVGlja2luZy5yZXN1bWVUaW1lcigpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5sZXZlbEVuZENhbGxCYWNrKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5yZXRyeUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soXCJjbG9zZV9idXR0b25cIik7XG4gICAgICAgICAgICAgICAgc2VsZi5kZWxldGVDYW52YXMoc2VsZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoc2VsZikge1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xuICAgIH1cbiAgICBkcmF3KCkgeyB9XG4gICAgdXBkYXRlKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBQcm9tcHRUZXh0TGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xudmFyIHNlbGY7XG5leHBvcnQgY2xhc3MgUHJvbXB0VGV4dCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgbGV2ZWxTdGFydCwgY3VycmVudFB1enpsZURhdGEsIGxldmVsRGF0YSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBsZXZlbERhdGE7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0ID0gY3VycmVudFB1enpsZURhdGEucHJvbXB0LnByb21wdFRleHQ7XG4gICAgICAgIHRoaXMuY3VycmVudFB1enpsZURhdGEgPSBjdXJyZW50UHV6emxlRGF0YTtcbiAgICAgICAgdGhpcy5mbnRzdE9yR3J0SW1nQXJyID0gW107XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIHRoaXMubG9hZEZhbnRhc3RpY0FuZEdyZWF0SW1hZ2UoKTtcbiAgICB9XG4gICAgbG9hZEZhbnRhc3RpY0FuZEdyZWF0SW1hZ2UoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5mYW50YXN0aWNfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5mYW50YXN0aWNfaW1hZ2Uuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2ZhbnRhc3RpY18wMS5wbmdcIjtcbiAgICAgICAgdGhpcy5mbnRzdE9yR3J0SW1nQXJyLnB1c2godGhpcy5mYW50YXN0aWNfaW1hZ2UpO1xuICAgICAgICB0aGlzLmdyZWF0X2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuZ3JlYXRfaW1hZ2Uuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL2dyZWF0XzAxLnBuZ1wiO1xuICAgICAgICB0aGlzLmZudHN0T3JHcnRJbWdBcnIucHVzaCh0aGlzLmdyZWF0X2ltYWdlKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgUHJvbXB0VGV4dExheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSA1O1xuICAgIH1cbiAgICBzZXRDdXJycmVudFB1enpsZURhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQdXp6bGVEYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvbXB0VGV4dCA9IGRhdGEucHJvbXB0LnByb21wdFRleHQ7XG4gICAgfVxuICAgIHNob3dGYW50YXN0aWNPckdyZWF0KGltYWdlSW5kZXgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHRoaXMuZ2FtZS53aWR0aCAvIDIgLSAodGhpcy5nYW1lLndpZHRoICogMC41KSAvIDIsIHRoaXMuaGVpZ2h0ICogMC4xNSwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMjUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHNlbGYuZm50c3RPckdydEltZ0FycltpbWFnZUluZGV4XSwgdGhpcy5nYW1lLndpZHRoIC0gdGhpcy5nYW1lLndpZHRoICogMC43NSwgdGhpcy5oZWlnaHQgKiAwLjIsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5oZWlnaHQgKiAwLjEpO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIGRyYXcoZHJvcHBlZFN0b25lcyA9IDApIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5wcm9tcHRfaW1hZ2UsIHRoaXMuZ2FtZS53aWR0aCAvIDIgLSAodGhpcy5nYW1lLndpZHRoICogMC41KSAvIDIsIHRoaXMuaGVpZ2h0ICogMC4xNSwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMjUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IDMwICsgXCJweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY29uc3QgcHJvbXB0VGV4dExldHRlcnMgPSB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0LnNwbGl0KFwiXCIpO1xuICAgICAgICBjb25zdCB4ID0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmhlaWdodCAqIDAuMjY7XG4gICAgICAgIHZhciBmb250U2l6ZSA9IDIwO1xuICAgICAgICB2YXIgbGV0dGVySGlnaGxpZ2h0ID0gdGhpcy5jdXJyZW50UHV6emxlRGF0YS50YXJnZXRTdG9uZXNbMF0uc3BsaXQoXCJcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkxldHRlckluV29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXR0ZXJIaWdobGlnaHQuaW5jbHVkZXMocHJvbXB0VGV4dExldHRlcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJIaWdobGlnaHQgPSBsZXR0ZXJIaWdobGlnaHQuc2xpY2UoMSwgbGV0dGVySGlnaGxpZ2h0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiV29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcm9wcGVkU3RvbmVzID4gaSB8fCBkcm9wcGVkU3RvbmVzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocHJvbXB0VGV4dExldHRlcnNbaV0sIGZvbnRTaXplICogaSArIHggLSBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGggKiA2LCB5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxUZXh0KFxuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50UHJvbXB0VGV4dCxcbiAgICAgICAgLy8gICB0aGlzLndpZHRoIC8gMi4xLFxuICAgICAgICAvLyAgIHRoaXMuaGVpZ2h0ICogMC4yNlxuICAgICAgICAvLyApO1xuICAgIH1cbiAgICBjcmVhdGVCYWNrZ3JvdW5kKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNlbGYucHJvbXB0X2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3Byb21wdFRleHRCZy5wbmdcIjtcbiAgICAgICAgc2VsZi5wcm9tcHRfaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuZHJhdygpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2dyb3VuZCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFByb21wdEF1ZGlvLCBTdG9uZUxheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IFN0b25lQ29uZmlnIH0gZnJvbSBcIi4uL2NvbW1vbi9zdG9uZXMtY29uZmlnLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IFBhdXNlUG9wVXAgZnJvbSBcIi4vcGF1c2UtcG9wdXAuanNcIjtcbmltcG9ydCB7IFR1dG9yaWFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdHV0b3JpYWwuanNcIjtcbmltcG9ydCB7IGdldERhdGFmcm9tU3RvcmFnZSB9IGZyb20gXCIuLi9kYXRhL3Byb2ZpbGUtZGF0YS5qc1wiO1xudmFyIGdzID0ge1xuICAgIG1vZGU6IFwiZ2FtZXBsYXlcIixcbiAgICBsZXZlbG51bTogMCxcbn07XG5ncy5wdXp6bGUgPSB7XG4gICAgdGFyZ2V0OiBbXSxcbiAgICBzdG9uZXM6IFtdLFxufTtcbmdzLnN0b25lcyA9IFtdO1xudmFyIHBpY2tlZFN0b25lO1xudmFyIG9mZnNldENvb3JkaW5hdGVWYWx1ZSA9IDMyO1xuY29uc3QgZHJhZ0F1ZGlvID0gbmV3IEF1ZGlvKCk7XG5kcmFnQXVkaW8uc3JjID0gXCIuL2Fzc2V0cy9hdWRpb3Mvb25EcmFnLm1wM1wiO1xuZHJhZ0F1ZGlvLnByZWxvYWQgPSBcImF1dG9cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b25lc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHB1enpsZURhdGEsIHBhdXNlYnV0dG9uLCBjYWxsQmFjaywgbGV2ZWxTdGFydCwgcHV6emxlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5waWNrZWRTdG9uZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMucGF1c2VidXR0b24gPSBwYXVzZWJ1dHRvbjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBwdXp6bGVEYXRhO1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRQdXp6bGUoKTtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IGNhbGxCYWNrO1xuICAgICAgICB0aGlzLnB1enpsZUluZGV4ID0gcHV6emxlSW5kZXg7XG4gICAgICAgIC8vIHRoaXMudGFyZ2V0U3RvbmVQb3NpdGlvbnMgPSB0aGlzLmdldFRhcmdldFN0b25lUG9zaXRpb24oZ3Muc3RvbmVzKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbCA9IG5ldyBUdXRvcmlhbChjYW52YXMpO1xuICAgICAgICB0aGlzLnNob3dUdXRvcmlhbCA9IChnZXREYXRhZnJvbVN0b3JhZ2UoKS5sZW5ndGggPT0gdW5kZWZpbmVkKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy50dXRvcmlhbC51cGRhdGVUYXJnZXRTdG9uZVBvc2l0aW9ucyh0aGlzLmdldFRhcmdldFN0b25lUG9zaXRpb24oZ3Muc3RvbmVzKSk7XG4gICAgICAgIHRoaXMudHV0b3JpYWwuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIHNldE5ld1B1enpsZShjdXJyZW50UHV6emxlKSB7XG4gICAgICAgIHRoaXMucHV6emxlRGF0YSA9IGN1cnJlbnRQdXp6bGU7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFB1enpsZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVN0b25lcyh0aGlzLnN0b25lcG9zKTtcbiAgICB9XG4gICAgc3RvbmVwb3Moc3RvbmVwb3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHNldEN1cnJlbnRQdXp6bGUoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydC5hdWRpby5wbGF5U291bmQodGhpcy5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRBdWRpbywgUHJvbXB0QXVkaW8pO1xuICAgICAgICBncy5wdXp6bGUuc3RvbmVzID0gW107XG4gICAgICAgIGdzLnB1enpsZS50YXJnZXQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGFyZ2V0IG9mIHRoaXMucHV6emxlRGF0YS50YXJnZXRTdG9uZXMpIHtcbiAgICAgICAgICAgIGdzLnB1enpsZS50YXJnZXQucHVzaCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGdzLnB1enpsZS5zdG9uZXMgPSB0aGlzLmdhbWVTdG9uZU9wdGlvbnModGhpcy5wdXp6bGVEYXRhLmZvaWxTdG9uZXMsIHRoaXMucHV6emxlRGF0YS50YXJnZXRTdG9uZXMpO1xuICAgICAgICBncy5wdXp6bGUucHJvbXB0ID0gdGhpcy5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRUZXh0O1xuICAgIH1cbiAgICBpc1RpbWVyRW5kZWQoKSB7XG4gICAgICAgIHBpY2tlZFN0b25lID0gbnVsbDtcbiAgICAgICAgdGhpcy5waWNrZWRTdG9uZXMgPSBbXTtcbiAgICB9XG4gICAgZ2FtZVN0b25lT3B0aW9ucyhmb2lsU3RvbmVzLCB0YXJnZXRTdG9uZXMpIHtcbiAgICAgICAgdGFyZ2V0U3RvbmVzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIGZvaWxTdG9uZXMuaW5kZXhPZihlKSAhPSAtMVxuICAgICAgICAgICAgICAgID8gZm9pbFN0b25lcy5zcGxpY2UoZm9pbFN0b25lcy5pbmRleE9mKGUpLCAxKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhcmdldFN0b25lcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBmb2lsU3RvbmVzLnB1c2goZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9pbFN0b25lcy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFN0b25lTGF5ZXIpO1xuICAgICAgICBjb25zdCBzZWxmRWxlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gc2VsZkVsZWxlbWVudElkLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLnN0eWxlLnpJbmRleCA9IFwiN1wiO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgICAgIHRoaXMuc3RvbmVwb3MgPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDUgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjE1IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMuNSArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLVxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjIgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNCAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4yOCAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyA3IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjUgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMi4zICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMi4xIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS45IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMyArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuNDIgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNiAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4xNSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgXTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZkVsZWxlbWVudElkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgaWYgKE1hdGguc3FydCh4IC0gdGhpcy53aWR0aCAvIDMpIDwgMTIgJiZcbiAgICAgICAgICAgICAgICBNYXRoLnNxcnQoeSAtIHRoaXMuaGVpZ2h0IC8gNS41KSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmF1ZGlvLnBsYXlTb3VuZChzZWxmLnB1enpsZURhdGEucHJvbXB0LnByb21wdEF1ZGlvLCBQcm9tcHRBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gdGhpcy53aWR0aCAvIDIgLSAodGhpcy53aWR0aCAqIDAuMykgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHggLSB0aGlzLndpZHRoIC8gMiAtICh0aGlzLndpZHRoICogMC4zKSAvIDIpKSArXG4gICAgICAgICAgICAgICAgKHkgLSB0aGlzLmhlaWdodCAqIDAuMTUpICogKHkgLSB0aGlzLmhlaWdodCAqIDAuMTUpIDw9XG4gICAgICAgICAgICAgICAgMTAwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvbXB0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC50aW1lclRpY2tpbmcucmVzdW1lVGltZXIoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnBhdXNlYnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQudGltZXJUaWNraW5nLnBhdXNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQubGV2ZWxFbmRDYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgIG5ldyBQYXVzZVBvcFVwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuaWQpLCBzZWxmLmxldmVsU3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBncy5zdG9uZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54KSAqICh4IC0gcy54KSArICh5IC0gcy55KSAqICh5IC0gcy55KSkgPD0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ0F1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ0F1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBzO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrKCdkcmFnTW9uc3RlckFuaW1hdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoKHggLVxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueCAtXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci53aWR0aCAvIDQpICpcbiAgICAgICAgICAgICAgICAoeCAtXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueCAtXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIud2lkdGggLyA0KSArXG4gICAgICAgICAgICAgICAgKHkgLVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLnkgLVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLmhlaWdodCAvIDIuNykgKlxuICAgICAgICAgICAgICAgICAgICAoeSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLnkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci5oZWlnaHQgLyAyLjcpKSA8PSA2MCkge1xuICAgICAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS54ID0gLTkwMDtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IC05MDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZS50ZXh0ID09IGdzLnB1enpsZS50YXJnZXRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGlja2VkU3RvbmVzLnB1c2gocGlja2VkU3RvbmUudGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBncy5wdXp6bGUudGFyZ2V0LnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3MucHV6emxlLnRhcmdldC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzLnN0b25lcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2sodW5kZWZpbmVkLCB0cnVlLCB0cnVlLCBwaWNrZWRTdG9uZS50ZXh0LCBzZWxmLnBpY2tlZFN0b25lcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5waWNrZWRTdG9uZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2sodW5kZWZpbmVkLCB0cnVlLCBmYWxzZSwgcGlja2VkU3RvbmUudGV4dCwgc2VsZi5waWNrZWRTdG9uZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5waWNrZWRTdG9uZXMucHVzaChwaWNrZWRTdG9uZS50ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdzLnN0b25lcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjayh1bmRlZmluZWQsIGZhbHNlLCB0cnVlLCBwaWNrZWRTdG9uZS50ZXh0LCBzZWxmLnBpY2tlZFN0b25lcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBpY2tlZFN0b25lcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSBwaWNrZWRTdG9uZS5vcmlneDtcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS55ID0gcGlja2VkU3RvbmUub3JpZ3k7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjaygnc3RvcERyYWdNb25zdGVyQW5pbWF0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwaWNrZWRTdG9uZSA9IG51bGw7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnggPSB4O1xuICAgICAgICAgICAgICAgIHBpY2tlZFN0b25lLnkgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmRWxlbGVtZW50SWQuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNlbW92ZVwiLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaC5jbGllbnRZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmRWxlbGVtZW50SWQuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIiwge1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZkVsZWxlbWVudElkLmRpc3BhdGNoRXZlbnQobW91c2VFdmVudCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTdG9uZXModGhpcy5zdG9uZXBvcyk7XG4gICAgfVxuICAgIGdldFRhcmdldFN0b25lUG9zaXRpb24oc3RvbmVzKSB7XG4gICAgICAgIGxldCB0YXJnZXRQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncy5zdG9uZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChncy5zdG9uZXNbaV0udGV4dCA9PSBncy5wdXp6bGUudGFyZ2V0WzBdKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UG9zaXRpb25zLnB1c2goZ3Muc3RvbmVzW2ldLm9yaWd4KTtcbiAgICAgICAgICAgICAgICB0YXJnZXRQb3NpdGlvbnMucHVzaChncy5zdG9uZXNbaV0ub3JpZ3kpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXRQb3NpdGlvbnM7XG4gICAgfVxuICAgIHNldFByb21wdCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0aGlzLndpZHRoICogMC4wOSArIFwicHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChncy5wdXp6bGUucHJvbXB0LCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjI3KTtcbiAgICB9XG4gICAgZGVsZXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBmb3IgKGxldCBzIG9mIGdzLnN0b25lcykge1xuICAgICAgICAgICAgdGhpcy5kcmF3c3RvbmUocywgdGhpcy5jYW52YXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdzdG9uZShzLCBjYW52YXMpIHtcbiAgICAgICAgdmFyIGltYWdlU2l6ZSA9IGNhbnZhcy5oZWlnaHQgLyAxMztcbiAgICAgICAgdmFyIHRleHRGb250U2l6ZSA9IGNhbnZhcy5oZWlnaHQgLyAyMDtcbiAgICAgICAgdmFyIGltYWdlQ2VudGVyT2Zmc2V0WCA9IGltYWdlU2l6ZSAvIDIuMztcbiAgICAgICAgdmFyIGltYWdlQ2VudGVyT2Zmc2V0WSA9IGltYWdlU2l6ZSAvIDEuNTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShzLmltZywgcy54IC0gaW1hZ2VDZW50ZXJPZmZzZXRYLCBzLnkgLSBpbWFnZUNlbnRlck9mZnNldFksIGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQocy50ZXh0LCBzLngsIHMueSk7XG4gICAgfVxuICAgIGNyZWF0ZVN0b25lcyhzdG9uZXBvcykge1xuICAgICAgICB2YXIgcG9zcyA9IHN0b25lcG9zWzBdO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGdzLnN0b25lcy5zcGxpY2UoMCwgZ3Muc3RvbmVzLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IHMgb2YgZ3MucHV6emxlLnN0b25lcykge1xuICAgICAgICAgICAgdmFyIG5zID0gbmV3IFN0b25lQ29uZmlnKHMsIHBvc3NbaV1bMF0sIHBvc3NbaV1bMV0pO1xuICAgICAgICAgICAgZ3Muc3RvbmVzLnB1c2gobnMpO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnR1dG9yaWFsLnVwZGF0ZVRhcmdldFN0b25lUG9zaXRpb25zKHRoaXMuZ2V0VGFyZ2V0U3RvbmVQb3NpdGlvbihncy5zdG9uZXMpKTtcbiAgICAgICAgKHRoaXMuc2hvd1R1dG9yaWFsICYmIHRoaXMucHV6emxlSW5kZXggPT0gMCkgPyB0aGlzLnR1dG9yaWFsLmFuaW1hdGVJbWFnZSgpIDogKCkgPT4geyB9O1xuICAgICAgICAvLyB9LCA1MDApO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUaW1lT3ZlciwgVGltZXRpY2tlckxheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG5leHBvcnQgY2xhc3MgVGltZXJUaWNraW5nIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBsZXZlbFN0YXJ0KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoVG9DbGVhciA9IHRoaXMuZ2FtZS53aWR0aCAvIDMuNDtcbiAgICAgICAgdGhpcy5tYXhMaW1pdEV4aGF1c3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVGltZXJFbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xuICAgICAgICB0aGlzLmlzVGltZXJSdW5uaW5nT3V0ID0gZmFsc2U7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgVGltZXRpY2tlckxheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSBcIjRcIjtcbiAgICAgICAgLy8gdGhpcy5hbmltYXRpb24oMCk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICB9XG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudGltZXJfZnVsbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnRpbWVyX2Z1bGwuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXJfZnVsbC5wbmdcIjtcbiAgICAgICAgdGhpcy50aW1lcl9mdWxsLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmRyYXcoKTtcbiAgICAgICAgICAgIHNlbGYuYmVnaW5UaW1lck9uU3RhcnQoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1RpbWVyU3RhcnRlZCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5BbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciArPSAwLjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyICs9IDAuMDY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPiA1NSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QodGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA8IDEwMCAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyID4gNTQgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5pc1RpbWVyUnVubmluZ091dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lclJ1bm5pbmdPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxTdGFydC5hdWRpby5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvdGltZW91dC5tcDNcIiwgVGltZU92ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyIDwgNTUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA+IDU0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyUnVubmluZ091dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lckVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJFbmRlZCA/IHRoaXMubGV2ZWxTdGFydC5jaGFuZ2VQdXp6bGUoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmVnaW5UaW1lck9uU3RhcnQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGF1c2VCdXR0b25DbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzVGltZXJTdGFydGVkICYmIHNlbGYudGltZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc1RpbWVyU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDAwKTtcbiAgICB9XG4gICAgc3RvcFRpbWVyKCkge1xuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGltZXIgU3RvcHBlZFwiKTtcbiAgICB9XG4gICAgcGF1c2VUaW1lcigpIHtcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uQ2xpY2tlZCA9IHRydWU7XG4gICAgfVxuICAgIHJlc3VtZVRpbWVyKCkge1xuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbkNsaWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnRpbWVyX2Z1bGwsIHRoaXMuZ2FtZS53aWR0aCAqIDAuMTIsIHRoaXMuaGVpZ2h0ICogMC4wOTksIHRoaXMuZ2FtZS53aWR0aCAtIDUwLCB0aGlzLmhlaWdodCAqIDAuMDUpO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5iZWdpblRpbWVyT25TdGFydCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFR1dG9yaWFsTGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbnZhciBzZWxmO1xudmFyIHR1dG9yaWFsSW1nID0gbmV3IEltYWdlKCk7XG50dXRvcmlhbEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy90dXRvcmlhbF9oYW5kLnBuZ1wiO1xubGV0IHN0YXJ0WCA9IDA7XG5sZXQgc3RhcnRZID0gMDtcbmxldCBlbmRYID0gMjAwO1xubGV0IGVuZFkgPSAxMDA7XG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHppbmRleCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy56aW5kZXggPSB6aW5kZXg7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmdhbWUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5nYW1lLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5zdGFydHggPSBzdGFydFg7XG4gICAgICAgIHRoaXMuc3RhcnR5ID0gc3RhcnRZO1xuICAgICAgICB0aGlzLmVuZHggPSB0aGlzLmdhbWUud2lkdGggLyAyO1xuICAgICAgICB0aGlzLmVuZHkgPSB0aGlzLmdhbWUuaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgVHV0b3JpYWxMYXllcik7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI2XCI7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICAgICAgZW5kWCA9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICBlbmRZID0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICAvLyB0aGlzLmFuaW1hdGVJbWFnZSgpO1xuICAgICAgICBzZWxmLmVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQgYW5kIHRvdWNoZWQnKTtcbiAgICAgICAgICAgIHNlbGYuZGVsZXRlQ2FudmFzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVUYXJnZXRTdG9uZVBvc2l0aW9ucyh0YXJnZXRTdG9uZVBvc2l0aW9uKSB7XG4gICAgICAgIHN0YXJ0WCA9IHRhcmdldFN0b25lUG9zaXRpb25bMF0gLSAyMjtcbiAgICAgICAgc3RhcnRZID0gdGFyZ2V0U3RvbmVQb3NpdGlvblsxXSAtIDUwO1xuICAgICAgICB0aGlzLnN0YXJ0eCA9IHRhcmdldFN0b25lUG9zaXRpb25bMF0gLSAyMjtcbiAgICAgICAgdGhpcy5zdGFydHkgPSB0YXJnZXRTdG9uZVBvc2l0aW9uWzFdIC0gNTA7XG4gICAgfVxuICAgIGNoYW5nZVppbmRleChpbmRleCkge1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICB9XG4gICAgaXNNb2JpbGUoKSB7XG4gICAgICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuICAgIGFuaW1hdGVJbWFnZSgpIHtcbiAgICAgICAgbGV0IHggPSBzdGFydFg7XG4gICAgICAgIGxldCB5ID0gc3RhcnRZO1xuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmVuZHggLSB0aGlzLnN0YXJ0eCkgLyA2MDtcbiAgICAgICAgY29uc3QgZHkgPSAodGhpcy5lbmR5IC0gdGhpcy5zdGFydHkpIC8gNjA7XG4gICAgICAgIGxldCBhYnNkeCA9ICh0aGlzLmlzTW9iaWxlKCkpID8gTWF0aC5hYnMoZHgpICogMyA6IE1hdGguYWJzKGR4KTtcbiAgICAgICAgbGV0IGFic2R5ID0gKHRoaXMuaXNNb2JpbGUoKSkgPyBNYXRoLmFicyhkeSkgKiAzIDogTWF0aC5hYnMoZHkpO1xuICAgICAgICBmdW5jdGlvbiBiZXR3ZWVuKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJldHdlZW4oeCwgdGhpcy5zdGFydHggLSAxNSwgc3RhcnRYICsgMTUpICYmIGJldHdlZW4oeSwgdGhpcy5zdGFydHkgLSAxNSwgc3RhcnRZICsgMTUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlWmluZGV4KDcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VaaW5kZXgoNik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoeCA8PSB0aGlzLmVuZHggKyBhYnNkeCAmJiB4ID49IHRoaXMuZW5keCAtIGFic2R4KSAmJlxuICAgICAgICAgICAgICAgICAgICAoeSA8PSB0aGlzLmVuZHkgKyBhYnNkeSAmJiB5ID49IHRoaXMuZW5keSAtIGFic2R5KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gdGhpcy5zdGFydHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gdGhpcy5zdGFydHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlWmluZGV4KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltYXRpb25GcmFtZT1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuZGVsZXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sNTAwKVxuICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZGVsZXRlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeCA9IChkeCA+PSAwKSA/IHggKyBhYnNkeCA6IHggLSBhYnNkeDtcbiAgICAgICAgICAgICAgICB5ID0gKGR5ID49IDApID8geSArIGFic2R5IDogeSAtIGFic2R5O1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhdyh4LCB5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgIH1cbiAgICBkcmF3KHgsIHkpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7IC8vIENsZWFyIHRoZSBjYW52YXNcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0dXRvcmlhbEltZywgeCwgeSk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcbmNvbnN0IFVSTCA9IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2Z0bV9cIiArIGxhbmcgKyBcIi5qc29uXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnRtRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goVVJMLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gbGV0IGQgPSB7XG4gICAgICAgIC8vICAgICBcIk90aGVyQXVkaW9zXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrVGV4dHNcIjogbnVsbCxcbiAgICAgICAgLy8gICAgIFwiTGV2ZWxzXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrQXVkaW9zXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIlJpZ2h0VG9MZWZ0XCI6IG51bGxcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4geWllbGQgZ2V0RnRtRGF0YSgpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGNsYXNzIERhdGFNb2RhbCB7XG4gICAgY29uc3RydWN0b3Iob3RoZXJBdWRpb3MsIGxldmVscywgZmVlZGJhY2tUZXh0cywgcmlnaHRUb0xlZnQsIGZlZWRiYWNrQXVkaW9zKSB7XG4gICAgICAgIHRoaXMub3RoZXJBdWRpb3MgPSBuZXcgT3RoZXJBdWRpb3Mob3RoZXJBdWRpb3MpO1xuICAgICAgICB0aGlzLmxldmVscyA9IHRoaXMuZ2V0TGV2ZWxzKGxldmVscyk7XG4gICAgICAgIHRoaXMuRmVlZGJhY2tUZXh0cyA9IG5ldyBGZWVkYmFja1RleHRzKGZlZWRiYWNrVGV4dHMpO1xuICAgICAgICB0aGlzLkZlZWRiYWNrQXVkaW9zID0gbmV3IEZlZWRiYWNrQXVkaW9zKGZlZWRiYWNrQXVkaW9zKTtcbiAgICAgICAgdGhpcy5yaWdodFRvTGVmdCA9IHJpZ2h0VG9MZWZ0O1xuICAgIH1cbiAgICBnZXRMZXZlbHMobGV2ZWxzKSB7XG4gICAgICAgIGxldCBsZXZlbEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXZlbEFycmF5LnB1c2gobmV3IExldmVscyhsZXZlbHNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWxBcnJheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgT3RoZXJBdWRpb3Mge1xuICAgIGNvbnN0cnVjdG9yKG90aGVyQXVkaW9zKSB7XG4gICAgICAgIHRoaXMuc2VsY3RZb3VyUGxheWVyID0gb3RoZXJBdWRpb3NbXCJTZWxlY3QgeW91ciBwbGF5ZXJcIl07XG4gICAgICAgIHRoaXMud2F0Y2hNZUdyb3cgPSBvdGhlckF1ZGlvc1tcIldhdGNoIG1lIGdyb3dcIl07XG4gICAgICAgIHRoaXMuYXJlWW91U3VyZSA9IG90aGVyQXVkaW9zW1wiQXJlIHlvdSBzdXJlXCJdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGZWVkYmFja1RleHRzIHtcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja1RleHRzKSB7XG4gICAgICAgIHRoaXMuZmFudGFzdGljID0gZmVlZGJhY2tUZXh0c1swXTtcbiAgICAgICAgdGhpcy5ncmVhdCA9IGZlZWRiYWNrVGV4dHNbMV07XG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrVGV4dHNbMl07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrQXVkaW9zIHtcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja0F1ZGlvcykge1xuICAgICAgICB0aGlzLmZhbnRhc3RpYyA9IGZlZWRiYWNrQXVkaW9zWzBdO1xuICAgICAgICB0aGlzLmdyZWF0ID0gZmVlZGJhY2tBdWRpb3NbMV07XG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrQXVkaW9zWzJdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZXZlbHMge1xuICAgIGNvbnN0cnVjdG9yKGxldmVscykge1xuICAgICAgICB0aGlzLnB1enpsZXMgPSB0aGlzLmdldFB1enpsZURhdGEobGV2ZWxzKTtcbiAgICAgICAgdGhpcy5sZXZlbE1ldGEgPSBuZXcgTGV2ZWxNZXRhKGxldmVscy5MZXZlbE1ldGEpO1xuICAgICAgICB0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxzLkxldmVsTnVtYmVyO1xuICAgIH1cbiAgICBnZXRQdXp6bGVEYXRhKGxldmVscykge1xuICAgICAgICBsZXQgcHV6emxlT2JqZWN0cyA9IFtdO1xuICAgICAgICBsZXZlbHMuUHV6emxlcy5tYXAoKHB1enpsZURhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwdXp6bGVPYmplY3RzLnB1c2gobmV3IFB1enpsZXMocHV6emxlRGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHB1enpsZU9iamVjdHM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFB1enpsZXMge1xuICAgIGNvbnN0cnVjdG9yKHB1enpsZSkge1xuICAgICAgICB0aGlzLnNlZ21lbnROdW1iZXIgPSBwdXp6bGUuU2VnbWVudE51bWJlcjtcbiAgICAgICAgdGhpcy5wcm9tcHQgPSBuZXcgUHJvbXB0KHB1enpsZS5wcm9tcHQpO1xuICAgICAgICB0aGlzLmZvaWxTdG9uZXMgPSB0aGlzLmdldEZvaWxTdG9uZXMocHV6emxlKTtcbiAgICAgICAgdGhpcy50YXJnZXRTdG9uZXMgPSB0aGlzLmdldFRhcmdldFN0b25lcyhwdXp6bGUpO1xuICAgIH1cbiAgICBnZXRGb2lsU3RvbmVzKHB1enpsZSkge1xuICAgICAgICBsZXQgZm9pbFN0b25lQXJyYXkgPSBbXTtcbiAgICAgICAgcHV6emxlLmZvaWxzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBmb2lsU3RvbmVBcnJheS5wdXNoKHN0b25lcy5TdG9uZVRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvaWxTdG9uZUFycmF5O1xuICAgIH1cbiAgICBnZXRUYXJnZXRTdG9uZXMocHV6emxlKSB7XG4gICAgICAgIGxldCB0YXJnZXRTdG9uZUFycmF5ID0gW107XG4gICAgICAgIHB1enpsZS50YXJnZXRzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRTdG9uZUFycmF5LnB1c2goc3RvbmVzLlN0b25lVGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3RvbmVBcnJheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9pbFN0b25lIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9uZVRleHQpIHtcbiAgICAgICAgdGhpcy5zdG9uZVRleHQgPSBzdG9uZVRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRhcmdldFN0b25lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdG9uZVRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb21wdCB7XG4gICAgY29uc3RydWN0b3IocHJvbXB0KSB7XG4gICAgICAgIHRoaXMucHJvbXB0VGV4dCA9IHByb21wdC5Qcm9tcHRUZXh0O1xuICAgICAgICB0aGlzLnByb21wdEF1ZGlvID0gcHJvbXB0LlByb21wdEF1ZGlvO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZXZlbE1ldGEge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsTWV0YSkge1xuICAgICAgICB0aGlzLnByb21wdEZhZGVPdXQgPSBsZXZlbE1ldGEuUHJvbXB0RmFkZW91dDtcbiAgICAgICAgdGhpcy5sZXR0ZXJHcm91cCA9IGxldmVsTWV0YS5MZXR0ZXJHcm91cDtcbiAgICAgICAgdGhpcy5sZXZlbE51bWJlciA9IGxldmVsTWV0YS5MZXZlbE51bWJlcjtcbiAgICAgICAgdGhpcy5wcm90b1R5cGUgPSBsZXZlbE1ldGEuUHJvbXB0VHlwZTtcbiAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBsZXZlbE1ldGEuTGV2ZWxUeXBlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xuZXhwb3J0IGNsYXNzIFByb2ZpbGVEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbE5hbWUsIGxldmVsTnVtYmVyLCBsZXZlbFNjb3JlLCBsZXZlbFN0YXIpIHtcbiAgICAgICAgKHRoaXMubGV2ZWxOYW1lID0gbGV2ZWxOYW1lKSxcbiAgICAgICAgICAgICh0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxOdW1iZXIpLFxuICAgICAgICAgICAgKHRoaXMubGV2ZWxTY29yZSA9IGxldmVsU2NvcmUpLFxuICAgICAgICAgICAgKHRoaXMubGV2ZWxTdGFyID0gbGV2ZWxTdGFyKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0YVRvU3RvcmFnZShwcm9maWxlRGF0YSkge1xuICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IGdldERhdGFmcm9tU3RvcmFnZSgpXG4gICAgICAgID8ganNvblRvQXJyYXkoZ2V0RGF0YWZyb21TdG9yYWdlKCkpXG4gICAgICAgIDogW107XG4gICAgcHJvZmlsZURhdGEgPyBkYXRhUHVzaFRvQXJyYXkoZXhpc3RpbmdEYXRhLCBwcm9maWxlRGF0YSkgOiBudWxsO1xuICAgIGV4aXN0aW5nRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmxldmVsTnVtYmVyID4gYi5sZXZlbE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdEYXRhKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsYW5nICsgXCJQcm9maWxlXCIsIGRhdGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGpzb25Ub0FycmF5KGpzb24pIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIGZvciAodmFyIGkgaW4ganNvbikge1xuICAgICAgICBkYXRhLnB1c2goanNvbltpXSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuZnVuY3Rpb24gZGF0YVB1c2hUb0FycmF5KGpzb25EYXRhLCBwcm9maWxlRGF0YSkge1xuICAgIHZhciBkYXRhTm90RXhpc3QgPSB0cnVlO1xuICAgIGpzb25EYXRhLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlSW50KGRhdGEubGV2ZWxOdW1iZXIpID09IHBhcnNlSW50KHByb2ZpbGVEYXRhLmxldmVsTnVtYmVyKSkge1xuICAgICAgICAgICAgZGF0YU5vdEV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBkYXRhLmxldmVsU2NvcmUgPCBwcm9maWxlRGF0YS5sZXZlbFNjb3JlXG4gICAgICAgICAgICAgICAgPyAoZGF0YS5sZXZlbFNjb3JlID0gcHJvZmlsZURhdGEubGV2ZWxTY29yZSlcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBkYXRhLmxldmVsU3RhciA8IHByb2ZpbGVEYXRhLmxldmVsU3RhclxuICAgICAgICAgICAgICAgID8gKGRhdGEubGV2ZWxTdGFyID0gcHJvZmlsZURhdGEubGV2ZWxTdGFyKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRhdGFOb3RFeGlzdCA/IGpzb25EYXRhLnB1c2gocHJvZmlsZURhdGEpIDogbnVsbDtcbiAgICByZXR1cm4ganNvbkRhdGE7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YWZyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxhbmcgKyBcIlByb2ZpbGVcIikgfHwgXCJ7fVwiKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsImV4cG9ydCBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUI4YzJsQlZpMjZ1N1lSTDlzeE9QOTdVYXEzeU44aFRsNFwiLFxuICBhdXRoRG9tYWluOiBcImZ0bS1iOWQ5OS5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9mdG0tYjlkOTkuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcImZ0bS1iOWQ5OVwiLFxuICBzdG9yYWdlQnVja2V0OiBcImZ0bS1iOWQ5OS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2MDI0MDIzODc5NDFcIixcbiAgYXBwSWQ6IFwiMTo2MDI0MDIzODc5NDE6d2ViOmE2M2Y0ZWFkZGM5NDlmNTM5ZGUxMGNcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUZWTFNON0Q3Tk1cIixcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGZpcmViYXNlQ29uZmlnIH0gZnJvbSBcIi4vZmlyZWJhc2VfY29uZmlnXCI7XG5leHBvcnQgY2xhc3MgRmlyZWJhc2VJbnRlZ3JhdGlvbiB7XG4gICAgc3RhdGljIGluaXRpYWxpemVGaXJlYmFzZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWJhc2VBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzID0gZmlyZWJhc2UuYW5hbHl0aWNzKHRoaXMuZmlyZWJhc2VBcHApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHNlc3Npb25FbmQoKSB7XG4gICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5dGljcy5sb2dFdmVudChcInNlc3Npb25fZW5kXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjdXN0b21FdmVudHMoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmFuYWx5dGljcy5sb2dFdmVudChrZXksIHZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IHsgR2FtZUVuZExheWVyLCBsb2FkSW1hZ2VzIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbnZhciBpbWFnZXMgPSB7XG4gICAgYmdJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2JnX3YwMS5qcGdcIixcbiAgICBoaWxsSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9oaWxsX3YwMS5wbmdcIixcbiAgICB0aW1lcl9lbXB0eTogXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXJfZW1wdHkucG5nXCIsXG4gICAgcGlsbGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9Ub3RlbV92MDJfdjAxLnBuZ1wiLFxuICAgIGdyYXNzSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9GR19hX3YwMS5wbmdcIixcbiAgICBmZW5jaEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvZmVuY2VfdjAxLnBuZ1wiLFxuICAgIGJpZ01vbnN0ZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2Z0bV9ib251c19sZXZlbF9tb25zdGVycy5wbmdcIlxufTtcbnZhciBzZWxmO1xuZXhwb3J0IGNsYXNzIEdhbWVFbmRTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIEdhbWVFbmRMYXllcik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gJzMnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NyaXB0aW9uLXRleHRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjcmlwdGlvbi10ZXh0XCIpLmlubmVySFRNTCA9IGdsb2JhbFRoaXMuZGVzY3JpcHRpb25UZXh0O1xuICAgICAgICB0aGlzLmNyZWF0ZUJhY2tncm91ZCgpO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY3JpcHRpb24tdGV4dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgICAgIC8vZGVsZXRlIHRoaXM7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgfVxuICAgIGNyZWF0ZUJhY2tncm91ZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBsb2FkSW1hZ2VzKGltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5iZ0ltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5waWxsZXJJbWcsIHdpZHRoICogMC42LCBoZWlnaHQgLyA2LCB3aWR0aCwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5mZW5jaEltZywgLXdpZHRoICogMC40LCBoZWlnaHQgLyAzLCB3aWR0aCwgaGVpZ2h0IC8gMyk7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5oaWxsSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5ncmFzc0ltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiArIChoZWlnaHQgLyAyKSAqIDAuMSwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYmlnTW9uc3RlckltZywgd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyIC0gaGVpZ2h0ICogMC4yNSwgd2lkdGggLyAxLjcsIGhlaWdodCAvIDIuNSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IExldmVsU3RhcnRTY2VuZSB9IGZyb20gXCIuL2xldmVsLXN0YXJ0LXNjZW5lLmpzXCI7XG52YXIgYW5pbWF0aW9uRnJhbWU7XG52YXIgc2VsZjtcbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBwdXp6bGVEYXRhLCBnYW1lU2NlbmVDYWxsQmFjaykge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciA9XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdG9yZU1vbnN0ZXJQaGFzZU51bWJlcikgfHwgMTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBMZXZlbFN0YXJ0U2NlbmUoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcyxcbiAgICAgICAgICAgIGxldmVsRGF0YTogcHV6emxlRGF0YSxcbiAgICAgICAgICAgIGxldmVsU3RhcnRDYWxsQmFjazogdGhpcy5sZXZlbFN0YXJ0Q2FsbEJhY2ssXG4gICAgICAgICAgICBtb25zdGVyUGhhc2VOdW1iZXI6IHRoaXMubW9uc3RlclBoYXNlTnVtYmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lU2NlbmVDYWxsQmFjayA9IGdhbWVTY2VuZUNhbGxCYWNrO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5hbmltYXRpb24oKTtcbiAgICB9XG4gICAgbGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgc2VsZi5nYW1lU2NlbmVDYWxsQmFjayhidXR0b25fbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHNlbGYuc2NlbmUgPyAoc2VsZi5zY2VuZS5zdG9uZXMgPyBzZWxmLnNjZW5lLnN0b25lcy51cGRhdGUoKSA6IG51bGwpIDogbnVsbDtcbiAgICAgICAgc2VsZi5zY2VuZSA/IHNlbGYuc2NlbmUudXBkYXRlKCkgOiBudWxsO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jcmVhdGVCYWNrZ3JvdWQoKTtcbiAgICB9XG4gICAgYW5pbWF0aW9uKCkge1xuICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzZWxmLmFuaW1hdGlvbik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XG5pbXBvcnQgeyBJbnRyb011c2ljLCBMZXZlbEVuZEF1ZGlvLCBMZXZlbEVuZEJ1dHRvbnNMYXllciwgTGV2ZWxFbmRMYXllciwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzXCI7XG5pbXBvcnQgTmV4dEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL25leHRfYnV0dG9uLmpzXCI7XG5pbXBvcnQgUmV0cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9yZXRyeV9idXR0b24uanNcIjtcbmltcG9ydCB7IFByb2ZpbGVEYXRhLCBzZXREYXRhVG9TdG9yYWdlIH0gZnJvbSBcIi4uL2RhdGEvcHJvZmlsZS1kYXRhLmpzXCI7XG5pbXBvcnQgeyBGaXJlYmFzZUludGVncmF0aW9uIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlX2ludGVncmF0aW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xudmFyIGF1ZGlvVXJsID0ge1xuICAgIGxldmVsV2luOiBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbFdpbkZhbmZhcmUubXAzXCIsXG4gICAgbGV2ZWxMb3NlOiBcIi4vYXNzZXRzL2F1ZGlvcy9MZXZlbExvc2VGYW5mYXJlLm1wM1wiLFxuICAgIGludHJvOiBcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby5tcDNcIixcbn07XG5leHBvcnQgY2xhc3MgTGV2ZWxFbmRTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBzY29yZSwgbW9uc3RlciwgbGV2ZWxFbmRDYWxsQmFjaywgbGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgbW9uc3RlclBoYXNlTnVtYmVyLCBsZXZlbFN0YXJ0VGltZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5tb25zdGVyID0gbW9uc3RlcjtcbiAgICAgICAgdGhpcy5sZXZlbERhdGEgPSBsZXZlbERhdGE7XG4gICAgICAgIHRoaXMuaXNHYW1lUGF1c2UgPSBpc0dhbWVQYXVzZTtcbiAgICAgICAgdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgPSBtb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0VGltZSA9IGxldmVsU3RhcnRUaW1lO1xuICAgICAgICB0aGlzLmxldmVsRW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5zdGFyQ291bnQgPVxuICAgICAgICAgICAgc2NvcmUgPT0gMjAwXG4gICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgOiBzY29yZSA9PSAzMDBcbiAgICAgICAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgICAgICAgIDogc2NvcmUgPT0gNDAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogc2NvcmUgPT0gNTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbEVuZEZpcmViYXNlRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZXZlbEVuZENhbGxCYWNrID0gbGV2ZWxFbmRDYWxsQmFjaztcbiAgICAgICAgc2V0RGF0YVRvU3RvcmFnZShuZXcgUHJvZmlsZURhdGEobGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbFR5cGUsIGxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxOdW1iZXIsIHNjb3JlLCB0aGlzLnN0YXJDb3VudCkpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJDb3VudCA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubGV2ZWxMb3NlLCBMZXZlbEVuZEF1ZGlvKTtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9zYWQxXCIgKyB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNjZW5lLmF1ZGlvLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby5tcDNcIiwgSW50cm9NdXNpYyk7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaGFwcHkxXCIgKyB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnNjZW5lLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5sZXZlbFdpbiwgTGV2ZWxFbmRBdWRpbyk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ubXAzXCIsIEludHJvTXVzaWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VaaW5kZXgoOSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgTGV2ZWxFbmRMYXllcik7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuekluZGV4ID0gXCI4XCI7XG4gICAgICAgIHRoaXMuYm90dG9uTGF5ZXIgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIExldmVsRW5kQnV0dG9uc0xheWVyKTtcbiAgICAgICAgdGhpcy5ib3R0b25Db250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3R0b25MYXllcikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJvdHRvbkxheWVyKS5zdHlsZS56SW5kZXggPVxuICAgICAgICAgICAgXCI5XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICBcIiMwMDQwN0JcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKCcuL2Fzc2V0cy9pbWFnZXMvV0lOX3NjcmVlbl9iZy5wbmcnKVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9XG4gICAgICAgICAgICBcImNvbnRhaW5cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgICAgIFwiY2VudGVyXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJmaXhlZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID1cbiAgICAgICAgICAgIFwibm8tcmVwZWF0XCI7XG4gICAgICAgIHZhciBzdGFyMSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzdGFyMS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9waW5TdGFyMS5wbmdcIjtcbiAgICAgICAgdmFyIHN0YXIyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN0YXIyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIyLnBuZ1wiO1xuICAgICAgICB2YXIgc3RhcjMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3RhcjMuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGluU3RhcjMucG5nXCI7XG4gICAgICAgIHNlbGYuZHJhd1N0YXJ0cyhzZWxmLCBzdGFyMSwgc3RhcjIsIHN0YXIzKTtcbiAgICAgICAgc2VsZi5uZXh0QnV0dG9uID1cbiAgICAgICAgICAgIHNlbGYuc3RhckNvdW50ID49IDJcbiAgICAgICAgICAgICAgICA/IG5ldyBOZXh0QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC44IC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjcpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBzZWxmLnJldHJ5QnV0dG9uID0gbmV3IFJldHJ5QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuc3RhckNvdW50ID49IDJcbiAgICAgICAgICAgID8gc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDJcbiAgICAgICAgICAgIDogc2VsZi5jYW52YXMud2lkdGggKiAwLjggLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuNyk7XG4gICAgICAgIHNlbGYuY2xvc2VCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuNyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYm90dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5ib3R0b25MYXllcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAoc2VsZi5uZXh0QnV0dG9uICYmIHNlbGYubmV4dEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcIm5leHRfYnV0dG9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYucmV0cnlCdXR0b24ub25DbGljayh4LCB5KSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcImNsb3NlX2J1dHRvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTdGFydHMoc2VsZiwgc3RhcjEsIHN0YXIyLCBzdGFyMykge1xuICAgICAgICBzdGFyMS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuc3RhckNvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN0YXIyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5zdGFyQ291bnQgPD0gMyAmJiBzZWxmLnN0YXJDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMTUsIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc3RhcjMub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXJDb3VudCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2Uoc3RhcjMsIHNlbGYuY2FudmFzLndpZHRoICogMC44MiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcyhzZWxmKSB7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5ib3R0b25MYXllcik7XG4gICAgfVxuICAgIGxldmVsRW5kRmlyZWJhc2VFdmVudHMoKSB7XG4gICAgICAgIEZpcmViYXNlSW50ZWdyYXRpb24uY3VzdG9tRXZlbnRzKFwibGV2ZWxfY29tcGxldGVkXCIsIHtcbiAgICAgICAgICAgIGRhdGVfdGltZTogdGhpcy5sZXZlbEVuZFRpbWUuZ2V0RGF0ZSgpICtcbiAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUuZ2V0TW9udGgoKSArXG4gICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxFbmRUaW1lLmdldEZ1bGxZZWFyKCkgK1xuICAgICAgICAgICAgICAgIFwiLFwiICtcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsRW5kVGltZS5nZXRIb3VycygpICtcbiAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUuZ2V0TWludXRlcygpICtcbiAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbEVuZFRpbWUuZ2V0U2Vjb25kcygpLFxuICAgICAgICAgICAgc3VjY2Vzc19vcl9mYWlsdXJlOiB0aGlzLnN0YXJDb3VudCA+PSAzID8gXCJzdWNjZXNzXCIgOiBcImZhaWx1cmVcIixcbiAgICAgICAgICAgIGxldmVsX251bWJlcjogdGhpcy5sZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyLFxuICAgICAgICAgICAgbnVtYmVyX29mX3N1Y2Nlc3NmdWxfcHV6emxlczogdGhpcy5zY29yZSAvIDEwMCxcbiAgICAgICAgICAgIGZ0bV9sYW5ndWFnZTogbGFuZyxcbiAgICAgICAgICAgIHByb2ZpbGVfbnVtYmVyOiAwLFxuICAgICAgICAgICAgdmVyc2lvbl9udW1iZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyc2lvbi1pbmZvLWlkXCIpLmlubmVySFRNTCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBNYXRoLmFicyhNYXRoLmNlaWwoKHRoaXMubGV2ZWxFbmRUaW1lLmdldFRpbWUoKSAtIHRoaXMubGV2ZWxTdGFydFRpbWUpIC8gMTAwMCkpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxDb25maWcgfSBmcm9tIFwiLi4vY29tbW9uL2xldmVsLWNvbmZpZy5qc1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCB7IEJ1dHRvbkNsaWNrLCBJbnRyb011c2ljLCBMZXZlbFNlbGVjdGlvbkxheWVyLCBQcmV2aW91c1BsYXllZExldmVsLCB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4uL2NvbW1vbi9zb3VuZC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGF0YWZyb21TdG9yYWdlIH0gZnJvbSBcIi4uL2RhdGEvcHJvZmlsZS1kYXRhLmpzXCI7XG5pbXBvcnQgeyBEZWJ1Z2dlciB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XG52YXIgbWFwSWNvbiA9IG5ldyBJbWFnZSgpO1xubWFwSWNvbi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBJY29uLnBuZ1wiO1xudmFyIG1hcExvY2sgPSBuZXcgSW1hZ2UoKTtcbm1hcExvY2suc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbWFwTG9jay5wbmdcIjtcbnZhciBtYXAgPSBuZXcgSW1hZ2UoKTtcbm1hcC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXAuanBnXCI7XG52YXIgc3RhciA9IG5ldyBJbWFnZSgpO1xuc3Rhci5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zdGFyLnBuZ1wiO1xudmFyIG5leHRidG4gPSBuZXcgSW1hZ2UoKTtcbm5leHRidG4uc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbmV4dF9idG4ucG5nXCI7XG52YXIgYmFja2J0biA9IG5ldyBJbWFnZSgpO1xuYmFja2J0bi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9iYWNrX2J0bi5wbmdcIjtcbnZhciBsZXZlbE51bWJlcjtcbnZhciBzZWxmO1xudmFyIHVubG9ja0xldmVsSW5kZXggPSAtMTtcbnZhciBwcmV2aW91c1BsYXllZExldmVsID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oUHJldmlvdXNQbGF5ZWRMZXZlbCkpIHwgMDtcbnZhciBsZXZlbDtcbmlmIChwcmV2aW91c1BsYXllZExldmVsICE9IG51bGwpIHtcbiAgICBsZXZlbCA9IDEwICogTWF0aC5mbG9vcihwcmV2aW91c1BsYXllZExldmVsIC8gMTApO1xufVxuZXhwb3J0IGNsYXNzIExldmVsU2VsZWN0aW9uU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWxzU2VjdGlvbkNvdW50ID1cbiAgICAgICAgICAgIHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTAgPiBNYXRoLmZsb29yKHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTApXG4gICAgICAgICAgICAgICAgPyBNYXRoLmZsb29yKHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTApICsgMVxuICAgICAgICAgICAgICAgIDogTWF0aC5mbG9vcihzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCAvIDEwKTtcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLmRyYXdTdGFycygpO1xuICAgIH1cbiAgICBnYW1lU2NlbmVDYWxsQmFjayhidXR0b25fbmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGJ1dHRvbl9uYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwibmV4dF9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRHYW1lKChsZXZlbE51bWJlciArPSAxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwicmV0cnlfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0R2FtZShsZXZlbE51bWJlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLnNvdW5kLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby5tcDNcIiwgSW50cm9NdXNpYyk7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVidWdlclwiLCBEZWJ1Z2dlci5EZWJ1Z01vZGUpO1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby5tcDNcIiwgSW50cm9NdXNpYyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuc291bmQuYWN0aXZlU2NyZWVuKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIExldmVsU2VsZWN0aW9uTGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgICAgdGhpcy5zdGFyc0lkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgTGV2ZWxTZWxlY3Rpb25MYXllciArIDEpO1xuICAgICAgICB0aGlzLnN0YXJzQ2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZCk7XG4gICAgICAgIHRoaXMuc3RhcnNDb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5zdGFyc0NhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCIzXCI7XG4gICAgICAgIHRoaXMubGV2ZWxCdXR0b25wb3MgPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMTAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEwXSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEwXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMyArIHRoaXMuY2FudmFzLndpZHRoIC8gMi44LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzXSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDNdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzICsgdGhpcy5jYW52YXMud2lkdGggLyAyLjgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDMsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS44XSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAyLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDIuOCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS44LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjNdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgXTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZClcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICB2YXIgeERvd24gPSBudWxsO1xuICAgICAgICB2YXIgeURvd24gPSBudWxsO1xuICAgICAgICBmdW5jdGlvbiBnZXRUb3VjaGVzKGV2dCkge1xuICAgICAgICAgICAgcmV0dXJuIChldnQudG91Y2hlcyB8fCAvLyBicm93c2VyIEFQSVxuICAgICAgICAgICAgICAgIGV2dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMpOyAvLyBqUXVlcnlcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2dCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RUb3VjaCA9IGdldFRvdWNoZXMoZXZ0KVswXTtcbiAgICAgICAgICAgIHhEb3duID0gZmlyc3RUb3VjaC5jbGllbnRYO1xuICAgICAgICAgICAgeURvd24gPSBmaXJzdFRvdWNoLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2dCkge1xuICAgICAgICAgICAgaWYgKCF4RG93biB8fCAheURvd24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgeFVwID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHZhciB5VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgdmFyIHhEaWZmID0geERvd24gLSB4VXA7XG4gICAgICAgICAgICB2YXIgeURpZmYgPSB5RG93biAtIHlVcDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4RGlmZikgPiBNYXRoLmFicyh5RGlmZikpIHtcbiAgICAgICAgICAgICAgICAvKm1vc3Qgc2lnbmlmaWNhbnQqL1xuICAgICAgICAgICAgICAgIGlmICh4RGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgKyAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvKiByaWdodCBzd2lwZSAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8qIGxlZnQgc3dpcGUgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoeURpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGRvd24gc3dpcGUgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIHVwIHN3aXBlICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogcmVzZXQgdmFsdWVzICovXG4gICAgICAgICAgICB4RG93biA9IG51bGw7XG4gICAgICAgICAgICB5RG93biA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGFyc0lkKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAoeCA+PSBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNyAmJlxuICAgICAgICAgICAgICAgIHggPCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuNyArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwICYmXG4gICAgICAgICAgICAgICAgeSA+IHNlbGYuY2FudmFzLmhlaWdodCAvIDEuMyAmJlxuICAgICAgICAgICAgICAgIHkgPCBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgKyBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMCkge1xuICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSBzZWxmLmxldmVsc1NlY3Rpb25Db3VudCAqIDEwIC0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IGxldmVsICsgMTA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhdyhsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHggPj0gc2VsZi5jYW52YXMud2lkdGggLyAxMCAmJlxuICAgICAgICAgICAgICAgIHggPCBzZWxmLmNhbnZhcy53aWR0aCAvIDEwICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTAgJiZcbiAgICAgICAgICAgICAgICB5ID4gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICYmXG4gICAgICAgICAgICAgICAgeSA8IHNlbGYuY2FudmFzLmhlaWdodCAvIDEuMyArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbCAtIDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xuICAgICAgICAgICAgICAgIHNlbGYuZG93bkJ1dHRvbihsZXZlbCk7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3U3RhcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54IC0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMjApICpcbiAgICAgICAgICAgICAgICAgICAgKHggLSBzLnggLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkgK1xuICAgICAgICAgICAgICAgICAgICAoeSAtIHMueSAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAoeSAtIHMueSAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSkgPCA0NSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoRGVidWdnZXIuRGVidWdNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNvdW5kLnBsYXlTb3VuZChcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIiwgQnV0dG9uQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zb3VuZC5wYXVzZVNvdW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbE51bWJlciA9IHMuaW5kZXggKyBsZXZlbCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YXJ0R2FtZShsZXZlbE51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocy5pbmRleCArIGxldmVsIC0gMSA8PSB1bmxvY2tMZXZlbEluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zb3VuZC5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvQnV0dG9uQ2xpY2sud2F2XCIsIEJ1dHRvbkNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxOdW1iZXIgPSBzLmluZGV4ICsgbGV2ZWwgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUobGV2ZWxOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGV2ZWxCdXR0b25zKHRoaXMubGV2ZWxCdXR0b25wb3MpO1xuICAgIH1cbiAgICBjcmVhdGVMZXZlbEJ1dHRvbnMobGV2ZWxCdXR0b25wb3MpIHtcbiAgICAgICAgdmFyIHBvc3MgPSBsZXZlbEJ1dHRvbnBvc1swXTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IDEwOyBzKyspIHtcbiAgICAgICAgICAgIHZhciBucyA9IG5ldyBMZXZlbENvbmZpZyhwb3NzW2ldWzBdLCBwb3NzW2ldWzFdLCBpICsgMSk7XG4gICAgICAgICAgICBzZWxmLmxldmVscy5wdXNoKG5zKTtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcobGV2ZWwpO1xuICAgICAgICB0aGlzLmRvd25CdXR0b24obGV2ZWwpO1xuICAgIH1cbiAgICBkcmF3KGxldmVsKSB7XG4gICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2xldmVsKHMsIHNlbGYuY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb3duQnV0dG9uKGxldmVsKSB7XG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMDtcbiAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShuZXh0YnRuLCB0aGlzLmNhbnZhcy53aWR0aCAqIDAuNywgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoYmFja2J0biwgdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDMwMCwgNTAwLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIC8vICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQucm90YXRlKDkwKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG5leHQsIDMwMCwgNTAwLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZHJhd2xldmVsKHMsIGNhbnZhcykge1xuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XG4gICAgICAgIHZhciB0ZXh0Rm9udFNpemUgPSBpbWFnZVNpemUgLyA2O1xuICAgICAgICBpZiAocy5pbmRleCArIGxldmVsIDw9IHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG1hcEljb24sIHMueCwgcy55LCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChzLmluZGV4ICsgbGV2ZWwsIHMueCArIGltYWdlU2l6ZSAvIDMuNSwgcy55ICsgaW1hZ2VTaXplIC8gMyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRleHRGb250U2l6ZSAtIGltYWdlU2l6ZSAvIDMwICsgXCJweCBBcmlhbFwiO1xuICAgICAgICAgICAgRGVidWdnZXIuRGVidWdNb2RlXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNvbnRleHQuZmlsbFRleHQodGhpcy5kYXRhLmxldmVsc1tzLmluZGV4ICsgbGV2ZWwgLSAxXS5sZXZlbE1ldGEubGV2ZWxUeXBlLCBzLnggKyBpbWFnZVNpemUgLyAzLjUsIHMueSArIGltYWdlU2l6ZSAvIDEuMylcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRHYW1lKGxldmVsX251bWJlcikge1xuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlU291bmQoKTtcbiAgICAgICAgbmV3IEdhbWUodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgc2VsZi5kYXRhLmxldmVsc1tsZXZlbF9udW1iZXJdLCBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKTtcbiAgICB9XG4gICAgZHJhd1N0YXJzKCkge1xuICAgICAgICBsZXQgZ2FtZUxldmVsRGF0YSA9IGdldERhdGFmcm9tU3RvcmFnZSgpO1xuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIHZhciBjYW5hdnNFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWxTZWxlY3Rpb25DYW52YXMxXCIpKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGlmIChnYW1lTGV2ZWxEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChnYW1lTGV2ZWxEYXRhLmxlbmd0aCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBnYW1lIG9mIGdhbWVMZXZlbERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVubG9ja0xldmVsSW5kZXggPCBwYXJzZUludChnYW1lLmxldmVsTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5sZXZlbFN0YXIgPj0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHVubG9ja0xldmVsSW5kZXggPSBwYXJzZUludChnYW1lLmxldmVsTnVtYmVyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHNlbGYubGV2ZWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuaW5kZXggKyBsZXZlbCA8PSBzZWxmLmRhdGEubGV2ZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIURlYnVnZ2VyLkRlYnVnTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5pbmRleCArIGxldmVsIC0gMSA+IHVubG9ja0xldmVsSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb250ZXh0LmRyYXdJbWFnZShtYXBMb2NrLCBzLngsIHMueSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTMsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVMZXZlbERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmluZGV4IC0gMSArIGxldmVsID09IHBhcnNlSW50KGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxOdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3RhcihzLCBjYW52YXMsIGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxTdGFyLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3U3RhcihzLCBjYW52YXMsIHN0YXJDb3VudCwgY29udGV4dCkge1xuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XG4gICAgICAgIGlmIChzdGFyQ291bnQgPj0gMSkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhckNvdW50ID4gMSkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54ICsgaW1hZ2VTaXplIC8gMi41LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhckNvdW50ID09IDMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHN0YXIsIHMueCArIGltYWdlU2l6ZSAvIDUsIHMueSAtIGltYWdlU2l6ZSAqIDAuMSwgaW1hZ2VTaXplIC8gNSwgaW1hZ2VTaXplIC8gNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb25zdGVyLmpzXCI7XG5pbXBvcnQgeyBUaW1lclRpY2tpbmcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90aW1lci10aWNraW5nLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IFN0b25lc0xheWVyIGZyb20gXCIuLi9jb21wb25lbnRzL3N0b25lcy1sYXllci5qc1wiO1xuaW1wb3J0IHsgUHJvbXB0VGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb21wdC10ZXh0LmpzXCI7XG5pbXBvcnQgUGF1c2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9wYXVzZV9idXR0b24uanNcIjtcbmltcG9ydCB7IExldmVsSW5kaWNhdG9ycyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xldmVsLWluZGljYXRvcnMuanNcIjtcbmltcG9ydCB7IExldmVsRW5kQnV0dG9uc0xheWVyLCBMZXZlbEVuZExheWVyLCBsb2FkSW1hZ2VzLCBsb2FkaW5nU2NyZWVuLCBTdG9uZUxheWVyLCBUaW1ldGlja2VyTGF5ZXIsIFByb21wdFRleHRMYXllciwgUHJldmlvdXNQbGF5ZWRMZXZlbCwgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIsIEJ1dHRvbkNsaWNrLCBGZWVkYmFja0F1ZGlvLCBQaHJhc2VBdWRpbywgVHV0b3JpYWxMYXllciwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxTdGFydExheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IEdhbWVFbmRTY2VuZSB9IGZyb20gXCIuL2dhbWUtZW5kLXNjZW5lLmpzXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4uL2NvbW1vbi9zb3VuZC5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxFbmRTY2VuZSB9IGZyb20gXCIuL2xldmVsLWVuZC1zY2VuZS5qc1wiO1xuaW1wb3J0IHsgZ2V0RGF0YWZyb21TdG9yYWdlIH0gZnJvbSBcIi4uL2RhdGEvcHJvZmlsZS1kYXRhLmpzXCI7XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcbmltcG9ydCB7IEZpcmViYXNlSW50ZWdyYXRpb24gfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VfaW50ZWdyYXRpb24uanNcIjtcbnZhciBpbWFnZXMgPSB7XG4gICAgYmdJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2JnX3YwMS5qcGdcIixcbiAgICBoaWxsSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9oaWxsX3YwMS5wbmdcIixcbiAgICB0aW1lcl9lbXB0eTogXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXJfZW1wdHkucG5nXCIsXG4gICAgcGlsbGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9Ub3RlbV92MDJfdjAxLnBuZ1wiLFxuICAgIGdyYXNzSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9GR19hX3YwMS5wbmdcIixcbiAgICByb3RhdGluZ19jbG9jazogXCIuL2Fzc2V0cy9pbWFnZXMvdGltZXIucG5nXCIsXG4gICAgZmVuY2hJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2ZlbmNlX3YwMS5wbmdcIixcbiAgICBwcm9tcHRJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL3Byb21wdFRleHRCZy5wbmdcIixcbiAgICBmYW50YXN0aWM6IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2ltYWdlcy9mYW50YXN0aWNfMDEucG5nXCIsXG4gICAgZ3JlYXQ6IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2ltYWdlcy9ncmVhdF8wMS5wbmdcIixcbiAgICBhdXR1bW5CZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX2JnX3YwMS5qcGdcIixcbiAgICBhdXR1bW5IaWxsSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5faGlsbF92MDEucG5nXCIsXG4gICAgYXV0dW1uU2lnbkltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX3NpZ25fdjAxLnBuZ1wiLFxuICAgIGF1dHVtbkdyYXNzSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fRkdfdjAxLnBuZ1wiLFxuICAgIGF1dHVtbkZlbmNlSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9BdXR1bW5fZmVuY2VfdjAxLnBuZ1wiLFxuICAgIGF1dHVtblBpbGxlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX3NpZ25fdjAxLnBuZ1wiLFxuICAgIHdpbnRlckJnSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfYmdfMDEuanBnXCIsXG4gICAgd2ludGVySGlsbEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX2hpbGxfdjAxLnBuZ1wiLFxuICAgIHdpbnRlclNpZ25JbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9zaWduX3YwMS5wbmdcIixcbiAgICB3aW50ZXJHcmFzc0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX0ZHX3YwMS5wbmdcIixcbiAgICB3aW50ZXJGZW5jZUltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX2ZlbmNlX3YwMS5wbmdcIixcbiAgICB3aW50ZXJQaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9zaWduX3YwMS5wbmdcIixcbn07XG52YXIgYXVkaW9VcmwgPSB7XG4gICAgcGhyYXNlQXVkaW9zOiBbXG4gICAgICAgIFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2F1ZGlvcy9mYW50YXN0aWMuV0FWXCIsXG4gICAgICAgIC8vIFwiLi9hc3NldHMvYXVkaW9zL2dvb2Qgam9iLldBVlwiLFxuICAgICAgICBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9hdWRpb3MvZ3JlYXQud2F2XCIsXG4gICAgXSxcbiAgICBtb25zdGVyU3BsaXQ6IFwiLi9hc3NldHMvYXVkaW9zL01vbnN0ZXIgU3BpdHMgd3Jvbmcgc3RvbmVzLTAxLm1wM1wiLFxuICAgIG1vbnN0ZXJIYXBweTogXCIuL2Fzc2V0cy9hdWRpb3MvQ2hlZXJpbmctMDIubXAzXCIsXG4gICAgbW9uc3RlclNhZDogXCIuL2Fzc2V0cy9hdWRpb3MvRGlzYXBvaW50ZWQtMDUubXAzXCIsXG4gICAgYnV0dG9uQ2xpY2s6IFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiLFxufTtcbnZhciBzZWxmO1xudmFyIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xudmFyIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcbnZhciBzY29yZSA9IDA7XG52YXIgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XG52YXIgaXNHYW1lUGF1c2UgPSBmYWxzZTtcbnZhciBub01vcmVUYXJnZXQgPSBmYWxzZTtcbnZhciBpc0xldmVsRW5kZWQgPSBmYWxzZTtcbmV4cG9ydCBjbGFzcyBMZXZlbFN0YXJ0U2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKHsgZ2FtZSwgbGV2ZWxEYXRhLCBsZXZlbFN0YXJ0Q2FsbEJhY2ssIG1vbnN0ZXJQaGFzZU51bWJlciwgfSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLndpZHRoID0gZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBnYW1lLmhlaWdodDtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubW9uc3RlciA9IG5ldyBNb25zdGVyKGdhbWUpO1xuICAgICAgICB0aGlzLmF1ZGlvID0gbmV3IFNvdW5kKCk7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyID0gbW9uc3RlclBoYXNlTnVtYmVyIHx8IDE7XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gbGV2ZWxEYXRhO1xuICAgICAgICB0aGlzLmxldmVsU3RhcnRDYWxsQmFjayA9IGxldmVsU3RhcnRDYWxsQmFjaztcbiAgICAgICAgdGhpcy50aW1lclRpY2tpbmcgPSBuZXcgVGltZXJUaWNraW5nKGdhbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLnByb21wdFRleHQgPSBuZXcgUHJvbXB0VGV4dChnYW1lLCB0aGlzLCBsZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0sIGxldmVsRGF0YSk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIHRoaXMuc3RvbmVzID0gbmV3IFN0b25lc0xheWVyKGdhbWUsIGxldmVsRGF0YS5wdXp6bGVzW2N1cnJlbnRfcHV6emxlX2luZGV4XSwgdGhpcy5wYXVzZUJ1dHRvbiwgdGhpcy5yZWRyYXdPZlN0b25lcywgdGhpcywgY3VycmVudF9wdXp6bGVfaW5kZXgpO1xuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBsZXZlbERhdGEucHV6emxlcztcbiAgICB9XG4gICAgbGV2ZWxFbmRDYWxsQmFjayhidXR0b25fbmFtZSkge1xuICAgICAgICBpZiAoIWlzR2FtZVBhdXNlKSB7XG4gICAgICAgICAgICBpc0dhbWVQYXVzZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNMZXZlbEVuZGVkKSB7XG4gICAgICAgICAgICAgICAgaXNMZXZlbEVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXNHYW1lUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50X3B1enpsZV9pbmRleCA9PSBzZWxmLnB1enpsZURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vTW9yZVRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gaWYgKG5vTW9yZVRhcmdldCAmJiBidXR0b25fbmFtZSAhPSBcImNsb3NlX2J1dHRvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xuICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLnByb21wdFRleHQuc2V0Q3VycnJlbnRQdXp6bGVEYXRhKFxuICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF1cbiAgICAgICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi50aW1lclRpY2tpbmcuZHJhdygpO1xuICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLnByb21wdFRleHQuZHJhdygpO1xuICAgICAgICAgICAgICAgIC8vICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuYXVkaW8ucGxheVNvdW5kKGF1ZGlvVXJsLmJ1dHRvbkNsaWNrLCBCdXR0b25DbGljayk7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uX25hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgc2VsZi5leGl0QWxsU2NyZWVucygpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJyZXRyeV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBpc0dhbWVQYXVzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cbiAgICByZWRyYXdPZlN0b25lcyhkcmFnQW5pbWF0aW9uLCBzdGF0dXMsIGVtcHR5VGFyZ2V0LCBwaWNrZWRfc3RvbmUsIHBpY2tlZF9zdG9uZXMpIHtcbiAgICAgICAgaWYgKGRyYWdBbmltYXRpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGRyYWdBbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZHJhZ01vbnN0ZXJBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlVG9EcmFnQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwic3RvcERyYWdNb25zdGVyQW5pbWF0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVRvSWRsZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlVG9JZGxlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9Nb3JlVGFyZ2V0ID0gZW1wdHlUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgZm50c3RpY09yR3J0SW5kZXggPSBzZWxmLmdldFJhbmRvbUludCgwLCAxKTtcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXIuY2hhbmdlVG9FYXRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5tb25zdGVySGFwcHksIFBocmFzZUF1ZGlvKTtcbiAgICAgICAgICAgICAgICBpZiAoZW1wdHlUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHV6emxlRW5kRmlyZWJhc2VFdmVudHMoXCJzdWNjZXNzXCIsIGN1cnJlbnRfcHV6emxlX2luZGV4LCBwaWNrZWRfc3RvbmVzLCBzZWxmLmxldmVsRGF0YS5wdXp6bGVzW2N1cnJlbnRfcHV6emxlX2luZGV4XS50YXJnZXRTdG9uZXMsIHNlbGYubGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLmZvaWxTdG9uZXMsIHNlbGYucHV6emxlU3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXVkaW8ucGxheVNvdW5kKGF1ZGlvVXJsLnBocmFzZUF1ZGlvc1tmbnRzdGljT3JHcnRJbmRleF0sIEZlZWRiYWNrQXVkaW8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNob3dGYW50YXN0aWNPckdyZWF0KGZudHN0aWNPckdydEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gcGlja2VkX3N0b25lLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gMSkpO1xuICAgICAgICAgICAgICAgICAgICBzY29yZSArPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3B1enpsZV9pbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKHdvcmRfZHJvcHBlZF9zdG9uZXMgKz0gcGlja2VkX3N0b25lLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLnN0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VUb1NwaXRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvLnBsYXlTb3VuZChhdWRpb1VybC5tb25zdGVyU2FkLCBQaHJhc2VBdWRpbyk7XG4gICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wdXp6bGVFbmRGaXJlYmFzZUV2ZW50cyhcImZhaWx1cmVcIiwgY3VycmVudF9wdXp6bGVfaW5kZXgsIHBpY2tlZF9zdG9uZXMsIHNlbGYubGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLnRhcmdldFN0b25lcywgc2VsZi5sZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0uZm9pbFN0b25lcywgc2VsZi5wdXp6bGVTdGFydFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hdWRpby5wbGF5U291bmQoYXVkaW9VcmwubW9uc3RlclNwbGl0LCBQaHJhc2VBdWRpbyk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50X3B1enpsZV9pbmRleCA9PSBzZWxmLnB1enpsZURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbEluZGljYXRvcnMuc2V0SW5kaWNhdG9ycyhjdXJyZW50X3B1enpsZV9pbmRleCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMyAmJiAhaXNHYW1lUGF1c2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgaSAqIDEzMDAuNjYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsSW5kaWNhdG9ycy5zZXRJbmRpY2F0b3JzKGN1cnJlbnRfcHV6emxlX2luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAzICYmICFpc0dhbWVQYXVzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0b25lcy5zZXROZXdQdXp6bGUoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHV6emxlU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpICogMTMwMC42Nik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV2ZWxFbmRlZCgpIHtcbiAgICAgICAgbGV0IHRvdGFsU3RhcnNDb3VudCA9IDA7XG4gICAgICAgIGxldCBtb25zdGVyUGhhc2VOdW1iZXIgPSBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciB8fCAxO1xuICAgICAgICB2YXIgZ2FtZUxldmVsRGF0YSA9IGdldERhdGFmcm9tU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnNob3dUdXRvcmlhbCA9IGdhbWVMZXZlbERhdGEubGVuZ3RoID09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgaWYgKGdhbWVMZXZlbERhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lTGV2ZWxEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdG90YWxTdGFyc0NvdW50ID0gdG90YWxTdGFyc0NvdW50ICsgZ2FtZUxldmVsRGF0YVtpXS5sZXZlbFN0YXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb25zdGVyUGhhc2VOdW1iZXIgPSBNYXRoLmZsb29yKHRvdGFsU3RhcnNDb3VudCAvIDEyKSArIDEgfHwgMTtcbiAgICAgICAgICAgIGlmIChzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciA8IG1vbnN0ZXJQaGFzZU51bWJlcikge1xuICAgICAgICAgICAgICAgIGlmIChtb25zdGVyUGhhc2VOdW1iZXIgPD0gNCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciA9IG1vbnN0ZXJQaGFzZU51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIsIG1vbnN0ZXJQaGFzZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VQaGFzZU51bWJlcihtb25zdGVyUGhhc2VOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIHNlbGYubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9uc3RlclBoYXNlTnVtYmVyID0gNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5sZXZlbFN0YXJ0Q2FsbEJhY2soKTtcbiAgICAgICAgaWYgKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyID09IDE0OSkge1xuICAgICAgICAgICAgc2VsZi5leGl0QWxsU2NyZWVucygpO1xuICAgICAgICAgICAgbmV3IEdhbWVFbmRTY2VuZShzZWxmLmdhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3IExldmVsRW5kU2NlbmUoc2VsZi5nYW1lLCBzY29yZSwgc2VsZi5tb25zdGVyLCBzZWxmLmxldmVsRW5kQ2FsbEJhY2ssIHNlbGYubGV2ZWxEYXRhLCBpc0dhbWVQYXVzZSwgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIsIHRoaXMubGV2ZWxTdGFydFRpbWUpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNMZXZlbEVuZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmxldmVsU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMucHV6emxlU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBtb25zdGVyUGhhc2VOdW1iZXIgPSB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciB8fCAxO1xuICAgICAgICB0aGlzLm1vbnN0ZXIuY2hhbmdlSW1hZ2UoXCIuL2Fzc2V0cy9pbWFnZXMvaWRsZTFcIiArIG1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgc2VsZi5kZWxldGVPYmplY3RzKCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIExldmVsU3RhcnRMYXllcik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gMztcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbiA9IG5ldyBQYXVzZUJ1dHRvbih0aGlzLmNvbnRleHQsIHRoaXMuY2FuYXZzRWxlbWVudCk7XG4gICAgICAgIHRoaXMubGV2ZWxJbmRpY2F0b3JzID0gbmV3IExldmVsSW5kaWNhdG9ycyh0aGlzLmNvbnRleHQsIHRoaXMuY2FuYXZzRWxlbWVudCwgMCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxmLmlkKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBwcmV2aW91c1BsYXllZExldmVsID0gc2VsZi5sZXZlbERhdGEubGV2ZWxNZXRhLmxldmVsTnVtYmVyO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQcmV2aW91c1BsYXllZExldmVsLCBwcmV2aW91c1BsYXllZExldmVsKTtcbiAgICB9XG4gICAgZGVsZXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xuICAgIH1cbiAgICBleGl0QWxsU2NyZWVucygpIHtcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihMZXZlbEVuZExheWVyKTtcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihMZXZlbEVuZEJ1dHRvbnNMYXllcik7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoTGV2ZWxTdGFydExheWVyKTtcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihTdG9uZUxheWVyKTtcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihUaW1ldGlja2VyTGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFByb21wdFRleHRMYXllcik7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoVHV0b3JpYWxMYXllcik7XG4gICAgICAgIC8vIHNlbGYubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9pZGxlNC5wbmdcIik7XG4gICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIik7XG4gICAgICAgIHNlbGYubW9uc3Rlci5kZWxldGVDYW52YXMoKTtcbiAgICAgICAgc2VsZi5kZWxldGVPYmplY3RzKCk7XG4gICAgICAgIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xuICAgIH1cbiAgICBkZWxldGVPYmplY3RzKCkge1xuICAgICAgICBkZWxldGUgc2VsZi5tb25zdGVyO1xuICAgICAgICBkZWxldGUgc2VsZi5hdWRpbztcbiAgICAgICAgZGVsZXRlIHNlbGYubGV2ZWxJbmRpY2F0b3JzO1xuICAgICAgICBkZWxldGUgc2VsZi5wYXVzZUJ1dHRvbjtcbiAgICAgICAgZGVsZXRlIHNlbGYuc3RvbmVzO1xuICAgICAgICBkZWxldGUgc2VsZi50aW1lclRpY2tpbmc7XG4gICAgICAgIGRlbGV0ZSBzZWxmLmNhbnZhc1N0YWNrO1xuICAgICAgICBkZWxldGUgc2VsZi5tb25zdGVyO1xuICAgICAgICBkZWxldGUgc2VsZi5wcm9tcHRUZXh0O1xuICAgICAgICBjdXJyZW50X3B1enpsZV9pbmRleCA9IDA7XG4gICAgICAgIHNjb3JlID0gMDtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5iZ0ltZywgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMucGlsbGVySW1nLCB0aGlzLndpZHRoICogMC42LCB0aGlzLmhlaWdodCAvIDYsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5mZW5jaEltZywgLXRoaXMud2lkdGggKiAwLjQsIHRoaXMuaGVpZ2h0IC8gMywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAzKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmhpbGxJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoICogMS41LCB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuZ3Jhc3NJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyICsgKHRoaXMuaGVpZ2h0IC8gMikgKiAwLjEsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy50aW1lcl9lbXB0eSwgMCwgdGhpcy5oZWlnaHQgKiAwLjEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICogMC4wNSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5yb3RhdGluZ19jbG9jaywgNSwgdGhpcy5oZWlnaHQgKiAwLjA5LCB0aGlzLndpZHRoICogMC4xMiwgdGhpcy5oZWlnaHQgKiAwLjA2KTtcbiAgICAgICAgdGhpcy50aW1lclRpY2tpbmcuY3JlYXRlQmFja2dyb3VkKCk7XG4gICAgICAgIHRoaXMuc3RvbmVzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5kcmF3KCk7XG4gICAgICAgIHRoaXMubGV2ZWxJbmRpY2F0b3JzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5wcm9tcHRUZXh0LmNyZWF0ZUJhY2tncm91bmQoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBzZWxmLnRpbWVyVGlja2luZyA/IHNlbGYudGltZXJUaWNraW5nLnVwZGF0ZSgpIDogbnVsbDtcbiAgICB9XG4gICAgY2hhbmdlUHV6emxlKCkge1xuICAgICAgICBpZiAoc2VsZi50aW1lclRpY2tpbmcuaXNUaW1lckVuZGVkKSB7XG4gICAgICAgICAgICBzZWxmLnN0b25lcy5pc1RpbWVyRW5kZWQoKTtcbiAgICAgICAgICAgIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xuICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggKz0gMTtcbiAgICAgICAgICAgIHNlbGYuc3RvbmVzLmNhbnZhcy5zY2VuZS5sZXZlbEluZGljYXRvcnMuc2V0SW5kaWNhdG9ycyhjdXJyZW50X3B1enpsZV9pbmRleCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudF9wdXp6bGVfaW5kZXggPT0gc2VsZi5wdXp6bGVEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpc0xldmVsRW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi50aW1lclRpY2tpbmc7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBMZXZlbEVuZFNjZW5lKHNlbGYuZ2FtZSwgc2NvcmUsIHNlbGYubW9uc3Rlciwgc2VsZi5sZXZlbEVuZENhbGxCYWNrLCBzZWxmLmxldmVsRGF0YSwgaXNHYW1lUGF1c2UsIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyLCB0aGlzLmxldmVsU3RhcnRUaW1lKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFByb21wdFRleHQoXG4gICAgICAgICAgICAgICAgLy8gICBzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdLnByb21wdC5wcm9tcHRUZXh0XG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICBzZWxmLnB1enpsZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5zZXRDdXJycmVudFB1enpsZURhdGEoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuZHJhdygpO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcgPyAoc2VsZi50aW1lclRpY2tpbmcuaXNUaW1lckVuZGVkID0gZmFsc2UpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVCYWNrZ3JvdWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlQmFja2dyb3VuZFR5cGVzID0gW1wiU3VtbWVyXCIsIFwiQXV0dW1uXCIsIFwiV2ludGVyXCJdO1xuICAgICAgICB2YXIgYmFja2dyb3VuZFR5cGUgPSBNYXRoLmZsb29yKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyIC8gMTApICVcbiAgICAgICAgICAgIGF2YWlsYWJsZUJhY2tncm91bmRUeXBlcy5sZW5ndGg7XG4gICAgICAgIGlmIChzZWxmLmxldmVsRGF0YS5sZXZlbE51bWJlciA+PSAzMCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZFR5cGUgPSBiYWNrZ3JvdW5kVHlwZSAlIDM7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZ1NjcmVlbih0cnVlKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgbG9hZEltYWdlcyhpbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgc3dpdGNoIChhdmFpbGFibGVCYWNrZ3JvdW5kVHlwZXNbYmFja2dyb3VuZFR5cGVdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIldpbnRlclwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJCZ0ltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJQaWxsZXJJbWcsIHdpZHRoICogMC4zOCwgaGVpZ2h0IC8gNiwgd2lkdGggLyAxLjIsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVyRmVuY2VJbWcsIC13aWR0aCAqIDAuNCwgaGVpZ2h0IC8gNCwgd2lkdGgsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVySGlsbEltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2Uud2ludGVyR3Jhc3NJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgKyAoaGVpZ2h0IC8gMikgKiAwLjEsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXV0dW1uXCI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtblBpbGxlckltZywgd2lkdGggKiAwLjM4LCBoZWlnaHQgLyA2LCB3aWR0aCAvIDEuMiwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5GZW5jZUltZywgLXdpZHRoICogMC40LCBoZWlnaHQgLyA0LCB3aWR0aCwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5IaWxsSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5hdXR1bW5HcmFzc0ltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiArIChoZWlnaHQgLyAyKSAqIDAuMSwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnBpbGxlckltZywgd2lkdGggKiAwLjYsIGhlaWdodCAvIDYsIHdpZHRoLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmZlbmNoSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDMsIHdpZHRoLCBoZWlnaHQgLyAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS50aW1lcl9lbXB0eSwgMCwgaGVpZ2h0ICogMC4xLCB3aWR0aCwgaGVpZ2h0ICogMC4wNSk7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5yb3RhdGluZ19jbG9jaywgNSwgaGVpZ2h0ICogMC4wOSwgd2lkdGggKiAwLjEyLCBoZWlnaHQgKiAwLjA2KTtcbiAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLmNyZWF0ZUJhY2tncm91ZCgpO1xuICAgICAgICAgICAgc2VsZi5zdG9uZXMuZHJhdygpO1xuICAgICAgICAgICAgc2VsZi5wYXVzZUJ1dHRvbi5kcmF3KCk7XG4gICAgICAgICAgICBzZWxmLmxldmVsSW5kaWNhdG9ycy5kcmF3KCk7XG4gICAgICAgICAgICBzZWxmLnByb21wdFRleHQuY3JlYXRlQmFja2dyb3VuZCgpO1xuICAgICAgICAgICAgbG9hZGluZ1NjcmVlbihmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdXp6bGVFbmRGaXJlYmFzZUV2ZW50cyhzdWNjZXNzX29yX2ZhaWx1cmUsIHB1enpsZV9udW1iZXIsIGl0ZW1fc2VsZWN0ZWQsIHRhcmdldCwgZm9pbHMsIHJlc3BvbnNlX3RpbWUpIHtcbiAgICAgICAgdmFyIHB1enpsZUVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBGaXJlYmFzZUludGVncmF0aW9uLmN1c3RvbUV2ZW50cyhcInB1enpsZV9jb21wbGV0ZWRcIiwge1xuICAgICAgICAgICAgZGF0ZV90aW1lOiBwdXp6bGVFbmRUaW1lLmdldERhdGUoKSArXG4gICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0TW9udGgoKSArXG4gICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0RnVsbFllYXIoKSArXG4gICAgICAgICAgICAgICAgXCIsXCIgK1xuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0SG91cnMoKSArXG4gICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgIHB1enpsZUVuZFRpbWUuZ2V0TWludXRlcygpICtcbiAgICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgICAgcHV6emxlRW5kVGltZS5nZXRTZWNvbmRzKCksXG4gICAgICAgICAgICBzdWNjZXNzX29yX2ZhaWx1cmU6IHN1Y2Nlc3Nfb3JfZmFpbHVyZSxcbiAgICAgICAgICAgIGxldmVsX251bWJlcjogdGhpcy5sZXZlbERhdGEubGV2ZWxOdW1iZXIsXG4gICAgICAgICAgICBwdXp6bGVfbnVtYmVyOiBwdXp6bGVfbnVtYmVyLFxuICAgICAgICAgICAgaXRlbV9zZWxlY3RlZDogaXRlbV9zZWxlY3RlZCxcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgZm9pbHM6IGZvaWxzLFxuICAgICAgICAgICAgcHJvZmlsZV9udW1iZXI6IDAsXG4gICAgICAgICAgICBmdG1fbGFuZ3VhZ2U6IGxhbmcsXG4gICAgICAgICAgICB2ZXJzaW9uX251bWJlcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJzaW9uLWluZm8taWRcIikuaW5uZXJIVE1MLFxuICAgICAgICAgICAgcmVzcG9uc2VfdGltZTogTWF0aC5hYnMoTWF0aC5jZWlsKChwdXp6bGVFbmRUaW1lLmdldFRpbWUoKSAtIHJlc3BvbnNlX3RpbWUpIC8gMTAwMCkpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJ1dHRvbkNsaWNrLCBGaXJlYmFzZVVzZXJDbGlja2VkLCBQbGF5QnV0dG9uTGF5ZXIsIFBXQUluc3RhbGxTdGF0dXMsIFN0YXJ0U2NlbmVMYXllciwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9jb21tb24vc291bmQuanNcIjtcbmltcG9ydCBJbnN0YWxsQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvaW5zdGFsbF9idXR0b24uanNcIjtcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvcGxheV9idXRvb24uanNcIjtcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb25zdGVyLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxTZWxlY3Rpb25TY3JlZW4gfSBmcm9tIFwiLi9sZXZlbC1zZWxlY3Rpb24tc2NlbmUuanNcIjtcbmltcG9ydCB7IERlYnVnZ2VyLCBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcbnZhciBiZ0ltZyA9IG5ldyBJbWFnZSgpO1xuYmdJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiO1xudmFyIGhpbGxJbWcgPSBuZXcgSW1hZ2UoKTtcbmhpbGxJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvaGlsbF92MDEucG5nXCI7XG52YXIgcGlsbGVySW1nID0gbmV3IEltYWdlKCk7XG5waWxsZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvVG90ZW1fdjAyX3YwMS5wbmdcIjtcbnZhciBncmFzc0ltZyA9IG5ldyBJbWFnZSgpO1xuZ3Jhc3NJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvRkdfYV92MDEucG5nXCI7XG52YXIgZmVuY2hJbWcgPSBuZXcgSW1hZ2UoKTtcbmZlbmNoSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2ZlbmNlX3YwMS5wbmdcIjtcbnZhciB0aXRsZSA9IG5ldyBJbWFnZSgpO1xudGl0bGUuc3JjID0gXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvaW1hZ2VzL3RpdGxlLnBuZ1wiO1xudmFyIHByb2ZpbGVNb25zdGVyID0gbmV3IEltYWdlKCk7XG5wcm9maWxlTW9uc3Rlci5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9pZGxlNC5wbmdcIjtcbnZhciBzZWxmO1xubGV0IHB3YV9pbnN0YWxsX3N0YXR1cztcbmNvbnN0IGFib3V0Q29tcGFueUVsZW1lbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1jb21wYW55XCIpKTtcbmNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLWJ0blwiKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwd2FfaW5zdGFsbF9zdGF0dXMgPSBlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMsIFwiZmFsc2VcIik7XG59KTtcbmV4cG9ydCBjbGFzcyBTdGFydFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGRhdGEsIGZpcmViYXNlX2FuYWx5dGljcykge1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5tb25zdGVyID0gbmV3IE1vbnN0ZXIodGhpcy5jYW52YXMpO1xuICAgICAgICB0aGlzLnB3YV9zdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQV0FJbnN0YWxsU3RhdHVzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQbGF5QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuZmlyZWJhc2VfYW5hbHl0aWNzID0gZmlyZWJhc2VfYW5hbHl0aWNzO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcbiAgICAgICAgICAgIGlmICh0b2dnbGVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW50ZXJlZCcpO1xuICAgICAgICAgICAgICAgIERlYnVnZ2VyLkRlYnVnTW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQnRuLmlubmVyVGV4dCA9IFwiRGV2XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBEZWJ1Z2dlci5EZWJ1Z01vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b2dnbGVCdG4uaW5uZXJUZXh0ID0gXCJEZXZcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBTdGFydFNjZW5lTGF5ZXIpO1xuICAgICAgICBhYm91dENvbXBhbnlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGFib3V0Q29tcGFueUVsZW1lbnQuaW5uZXJIVE1MID0gZ2xvYmFsVGhpcy5hYm91dENvbXBhbnk7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGJnSW1nLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UocGlsbGVySW1nLCB0aGlzLndpZHRoICogMC42LCB0aGlzLmhlaWdodCAvIDYsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoZmVuY2hJbWcsIC10aGlzLndpZHRoICogMC40LCB0aGlzLmhlaWdodCAvIDMsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gMyk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaGlsbEltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoZ3Jhc3NJbWcsIC10aGlzLndpZHRoICogMC4yNSwgdGhpcy5oZWlnaHQgLyAyICsgKHRoaXMuaGVpZ2h0IC8gMikgKiAwLjEsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGl0bGUsIHRoaXMud2lkdGggKiAwLCB0aGlzLmhlaWdodCAvIDUwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDYpO1xuICAgICAgICAvLyBsb2FkaW5nU2NyZWVuKGZhbHNlKTtcbiAgICAgICAgLy8gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZy1zY3JlZW5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBjcmVhdGVQbGF5QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBwbGF5QnV0dG9uTGF5ZXJFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFBsYXlCdXR0b25MYXllcikpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgcGxheUJ1dHRvbklkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgUGxheUJ1dHRvbkxheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheUJ1dHRvbklkKTtcbiAgICAgICAgdGhpcy5idXR0b25Db250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDc7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXlCdXR0b24gPSBuZXcgUGxheUJ1dHRvbihzZWxmLmJ1dHRvbkNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUsIHNlbGYuY2FudmFzLmhlaWdodCAvIDcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5wbGF5QnV0dG9uID0gbmV3IEluc3RhbGxCdXR0b24oc2VsZi5idXR0b25Db250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjM1LCBzZWxmLmNhbnZhcy5oZWlnaHQgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0c3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFBsYXlCdXR0b25MYXllcikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuaWQpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnBsYXlCdXR0b24ub25DbGljayh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcmViYXNlX2FuYWx5dGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChGaXJlYmFzZVVzZXJDbGlja2VkLCBcImNsaWNrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZicShcInRyYWNrQ3VzdG9tXCIsIEZpcmViYXNlVXNlckNsaWNrZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICBhYm91dENvbXBhbnlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNvdW5kKCkucGxheVNvdW5kKFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiLCBCdXR0b25DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBMZXZlbFNlbGVjdGlvblNjcmVlbihzZWxmLmNhbnZhcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoUGxheUJ1dHRvbkxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi5tb25zdGVyO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFN0YXJ0U2NlbmVMYXllcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLnB3YV9zdGF0dXMgPT0gXCJmYWxzZVwiIHx8ICFzZWxmLnB3YV9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwd2FfaW5zdGFsbF9zdGF0dXMucHJvbXB0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgeyBvdXRjb21lIH0gPSBhd2FpdCBwd2FfaW5zdGFsbF9zdGF0dXMudXNlckNob2ljZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAob3V0Y29tZSA9PT0gXCJhY2NlcHRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwd2FfaW5zdGFsbF9zdGF0dXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cywgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VySW5zdGFsbCwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJpbnN0YWxsX2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgID8gc2VsZi5maXJlYmFzZV9hbmFseXRpY3MubG9nRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICBGaXJlYmFzZVVzZXJJbnN0YWxsLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgXCJJbnN0YWxsXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgVXNlckNhbmNlbGxlZCwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJjYW5jZWxfY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5maXJlYmFzZV9hbmFseXRpY3NcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChVc2VyQ2FuY2VsbGVkLCBcIkNhbmNlbGxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICF3aW5kb3cubWF0Y2hNZWRpYShcIihkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpXCIpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYucHdhX3N0YXR1cyA9PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWxlcnQoXCJQV0EgaXMgaW5zdGFsbGVkIG9uIHlvdXIgZGV2aWNlIFxcblBsZWFzZSBwbGF5IGZyb20gdGhlcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmV3IFNvdW5kKCkuY2hhbmdlU291cnNlKFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzZWxmLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuZXcgTGV2ZWxTZWxlY3Rpb25TY3JlZW4oc2VsZi5jYW52YXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihQbGF5QnV0dG9uTGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoU3RhcnRTY2VuZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgQ2FudmFzU3RhY2s7XG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGNsYXNzIExheWVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoeyBjYW52YXNJRCwgY2FudmFzRWxlbWVudCwgfSkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGNhbnZhc0lEO1xuICAgICAgICAgICAgdGhpcy5jRWxlbSA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmRyYWdPYmplY3RzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU3RhY2sgPSBjbGFzcyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGN2c0lELCBzdGFja0xpbWl0KSB7XG4gICAgICAgICAgICBjb25zdCBzYXZUaGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY0lkID0gY3ZzSUQ7XG4gICAgICAgICAgICB0aGlzLnN0YWNrTGltaXQgPSBzdGFja0xpbWl0IHx8IDEyO1xuICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdnNJRCk7XG4gICAgICAgICAgICB0aGlzLnJhd1dpZHRoID0gdGhpcy5ia2dDYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLnJhd0hlaWdodCA9IHRoaXMuYmtnQ2FudmFzLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucyA9IFtdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJrZ0NhbnZhcy5oYXNPd25Qcm9wZXJ0eShcImxheWVyc1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVycyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBia2dMID0gbmV3IExheWVyKHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzSUQ6IHRoaXMuY0lkLFxuICAgICAgICAgICAgICAgICAgICBjYW52YXNFbGVtZW50OiB0aGlzLmJrZ0NhbnZhcyxcbiAgICAgICAgICAgICAgICB9KTsgLy8gYmtnQ2FudmFzIGlzIGFsd2F5cyBsYXllclswXVxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVyc1swXSA9IGJrZ0w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwidW5pcXVlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMudW5pcXVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVMYXllcihoZWlnaHQsIHdpZHRoLCBsYXllcklkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXllckV4aXN0KGxheWVySWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IHdpZHRoICsgXCJweFwiLCBoID0gaGVpZ2h0ICsgXCJweFwiLCBuTHlycyA9IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IC8vIGJrZyBpcyBsYXllciAwIHNvIGF0IGxlYXN0IDFcbiAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmJrZ0NhbnZhcyAmJiB0aGlzLmJrZ0NhbnZhcy5sYXllcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGggPj0gdGhpcy5zdGFja0xpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXNTdGFjazogdG9vIG1hbnkgbGF5ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnVuaXF1ZSArPSAxOyAvLyBhIHByaXZhdGUgc3RhdGljIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdW5pcXVlVGFnID0gdGhpcy5ia2dDYW52YXMudW5pcXVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgb3ZsSWQgPSB0aGlzLmNJZCArIFwiX292bF9cIiArIHVuaXF1ZVRhZztcbiAgICAgICAgICAgICAgICBjb25zdCBvdmxJZCA9IGxheWVySWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSFRNTCA9IFwiPGNhbnZhcyBpZD0nXCIgK1xuICAgICAgICAgICAgICAgICAgICBvdmxJZCArXG4gICAgICAgICAgICAgICAgICAgIFwiJyBzdHlsZT0ncG9zaXRpb246YWJzb2x1dGUnIHdpZHRoPSdcIiArXG4gICAgICAgICAgICAgICAgICAgIHcgK1xuICAgICAgICAgICAgICAgICAgICBcIicgaGVpZ2h0PSdcIiArXG4gICAgICAgICAgICAgICAgICAgIGggK1xuICAgICAgICAgICAgICAgICAgICBcIic+PC9jYW52YXM+XCI7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQ3ZzID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW25MeXJzIC0gMV0uY0VsZW07XG4gICAgICAgICAgICAgICAgdG9wQ3ZzLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyZW5kXCIsIG92bEhUTUwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG92bElkKTtcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgMCUpXCI7XG4gICAgICAgICAgICAgICAgbmV3Q3ZzLnN0eWxlLmhlaWdodCA9IGg7XG4gICAgICAgICAgICAgICAgbmV3Q3ZzLnN0eWxlLndpZHRoID0gdztcbiAgICAgICAgICAgICAgICBsZXQgbmV3TCA9IG5ldyBMYXllcih7IGNhbnZhc0lEOiBvdmxJZCwgY2FudmFzRWxlbWVudDogbmV3Q3ZzIH0pO1xuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIElEIGluIGFuIGFycmF5IHRvIGZhY2lsaXRhdGUgcmVtb3ZhbFxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVycy5wdXNoKG5ld0wpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdmxJZDsgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlTGF5ZXIob3ZseUlkKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBiYWNrZ3JvdW5kIGNhbnZhcyBpcyBzdGlsbCB0aGVyZVxuICAgICAgICAgICAgaWYgKCEodGhpcy5ia2dDYW52YXMgJiYgdGhpcy5ia2dDYW52YXMubGF5ZXJzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5pZCA9PT0gb3ZseUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZsTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdyBkZWxldGUgbGF5ZXJzIGFycmF5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzLnNwbGljZShpLCAxKTsgLy8gZGVsZXRlIHRoZSBMYXllciBvYmplY3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlQWxsTGF5ZXJzKCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5ia2dDYW52YXMgJiYgdGhpcy5ia2dDYW52YXMubGF5ZXJzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xuICAgICAgICAgICAgICAgIGlmIChvdmxOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcnBoYW4gPSBvdmxOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3ZsTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ycGhhbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG5vdyBkZWxldGUgbGF5ZXJzIGFycmF5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2xlYXIgYW55IHJlc2l6ZSBjYWxsYmFja3MsIHRoZSBsYXllcnMgYXJlIGdvbmVcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucy5sZW5ndGggPSAwOyAvLyByZW1vdmUgYW55IGFkZGVkIGhhbmRsZXJzLCBsZWF2ZSB0aGUgYmFzaWNcbiAgICAgICAgfVxuICAgICAgICBpc0xheWVyRXhpc3QobGF5ZXJJRCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmlkID09PSBsYXllcklEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuIiwidHJ5e3NlbGZbXCJ3b3JrYm94OndpbmRvdzo0LjMuMVwiXSYmXygpfWNhdGNoKG4pe312YXIgbj1mdW5jdGlvbihuLHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpKXt2YXIgZT1uZXcgTWVzc2FnZUNoYW5uZWw7ZS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24obil7cmV0dXJuIGkobi5kYXRhKX0sbi5wb3N0TWVzc2FnZSh0LFtlLnBvcnQyXSl9KX07ZnVuY3Rpb24gdChuLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgZT10W2ldO2UuZW51bWVyYWJsZT1lLmVudW1lcmFibGV8fCExLGUuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGUmJihlLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixlLmtleSxlKX19ZnVuY3Rpb24gaShuKXtpZih2b2lkIDA9PT1uKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gbn10cnl7c2VsZltcIndvcmtib3g6Y29yZTo0LjMuMVwiXSYmXygpfWNhdGNoKG4pe312YXIgZT1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5wcm9taXNlPW5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsaSl7bi5yZXNvbHZlPXQsbi5yZWplY3Q9aX0pfSxyPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBVUkwobixsb2NhdGlvbikuaHJlZj09PW5ldyBVUkwodCxsb2NhdGlvbikuaHJlZn0sbz1mdW5jdGlvbihuLHQpe09iamVjdC5hc3NpZ24odGhpcyx0LHt0eXBlOm59KX07ZnVuY3Rpb24gdShuKXtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10saT0wO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspdFtpXT1hcmd1bWVudHNbaV07dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUobi5hcHBseSh0aGlzLHQpKX1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fX1mdW5jdGlvbiBhKG4sdCxpKXtyZXR1cm4gaT90P3Qobik6bjoobiYmbi50aGVufHwobj1Qcm9taXNlLnJlc29sdmUobikpLHQ/bi50aGVuKHQpOm4pfWZ1bmN0aW9uIHMoKXt9dmFyIGM9ZnVuY3Rpb24oYyl7dmFyIGYsaDtmdW5jdGlvbiB2KG4sdCl7dmFyIHI7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSwocj1jLmNhbGwodGhpcyl8fHRoaXMpLnQ9bixyLmk9dCxyLm89MCxyLnU9bmV3IGUsci5zPW5ldyBlLHIuaD1uZXcgZSxyLnY9ci52LmJpbmQoaShpKHIpKSksci5sPXIubC5iaW5kKGkoaShyKSkpLHIuZz1yLmcuYmluZChpKGkocikpKSxyLm09ci5tLmJpbmQoaShpKHIpKSkscn1oPWMsKGY9dikucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpLGYucHJvdG90eXBlLmNvbnN0cnVjdG9yPWYsZi5fX3Byb3RvX189aDt2YXIgbCx3LGcsZD12LnByb3RvdHlwZTtyZXR1cm4gZC5yZWdpc3Rlcj11KGZ1bmN0aW9uKG4pe3ZhciB0LGksZT10aGlzLHU9KHZvaWQgMD09PW4/e306bikuaW1tZWRpYXRlLGM9dm9pZCAwIT09dSYmdTtyZXR1cm4gdD1mdW5jdGlvbigpe3JldHVybiBlLnA9Qm9vbGVhbihuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSxlLlA9ZS5SKCksYShlLmsoKSxmdW5jdGlvbihuKXtlLkI9bixlLlAmJihlLk89ZS5QLGUucy5yZXNvbHZlKGUuUCksZS5oLnJlc29sdmUoZS5QKSxlLmooZS5QKSxlLlAuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXRlY2hhbmdlXCIsZS5sLHtvbmNlOiEwfSkpO3ZhciB0PWUuQi53YWl0aW5nO3JldHVybiB0JiZyKHQuc2NyaXB0VVJMLGUudCkmJihlLk89dCxQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7ZS5kaXNwYXRjaEV2ZW50KG5ldyBvKFwid2FpdGluZ1wiLHtzdzp0LHdhc1dhaXRpbmdCZWZvcmVSZWdpc3RlcjohMH0pKX0pKSxlLk8mJmUudS5yZXNvbHZlKGUuTyksZS5CLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLGUuZyksbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRyb2xsZXJjaGFuZ2VcIixlLm0se29uY2U6ITB9KSxcIkJyb2FkY2FzdENoYW5uZWxcImluIHNlbGYmJihlLkM9bmV3IEJyb2FkY2FzdENoYW5uZWwoXCJ3b3JrYm94XCIpLGUuQy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUudikpLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZS52KSxlLkJ9KX0sKGk9ZnVuY3Rpb24oKXtpZighYyYmXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZSlyZXR1cm4gZnVuY3Rpb24obix0KXtpZighdClyZXR1cm4gbiYmbi50aGVuP24udGhlbihzKTpQcm9taXNlLnJlc29sdmUoKX0obmV3IFByb21pc2UoZnVuY3Rpb24obil7cmV0dXJuIGFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbil9KSl9KCkpJiZpLnRoZW4/aS50aGVuKHQpOnQoaSl9KSxkLmdldFNXPXUoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5PfHx0aGlzLnUucHJvbWlzZX0pLGQubWVzc2FnZVNXPXUoZnVuY3Rpb24odCl7cmV0dXJuIGEodGhpcy5nZXRTVygpLGZ1bmN0aW9uKGkpe3JldHVybiBuKGksdCl9KX0pLGQuUj1mdW5jdGlvbigpe3ZhciBuPW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXI7aWYobiYmcihuLnNjcmlwdFVSTCx0aGlzLnQpKXJldHVybiBufSxkLms9dShmdW5jdGlvbigpe3ZhciBuPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKG4sdCl7dHJ5e3ZhciBpPW4oKX1jYXRjaChuKXtyZXR1cm4gdChuKX1yZXR1cm4gaSYmaS50aGVuP2kudGhlbih2b2lkIDAsdCk6aX0oZnVuY3Rpb24oKXtyZXR1cm4gYShuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihuLnQsbi5pKSxmdW5jdGlvbih0KXtyZXR1cm4gbi5MPXBlcmZvcm1hbmNlLm5vdygpLHR9KX0sZnVuY3Rpb24obil7dGhyb3cgbn0pfSksZC5qPWZ1bmN0aW9uKHQpe24odCx7dHlwZTpcIldJTkRPV19SRUFEWVwiLG1ldGE6XCJ3b3JrYm94LXdpbmRvd1wifSl9LGQuZz1mdW5jdGlvbigpe3ZhciBuPXRoaXMuQi5pbnN0YWxsaW5nO3RoaXMubz4wfHwhcihuLnNjcmlwdFVSTCx0aGlzLnQpfHxwZXJmb3JtYW5jZS5ub3coKT50aGlzLkwrNmU0Pyh0aGlzLlc9bix0aGlzLkIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWZvdW5kXCIsdGhpcy5nKSk6KHRoaXMuTz1uLHRoaXMudS5yZXNvbHZlKG4pKSwrK3RoaXMubyxuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLHRoaXMubCl9LGQubD1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGk9bi50YXJnZXQsZT1pLnN0YXRlLHI9aT09PXRoaXMuVyx1PXI/XCJleHRlcm5hbFwiOlwiXCIsYT17c3c6aSxvcmlnaW5hbEV2ZW50Om59OyFyJiZ0aGlzLnAmJihhLmlzVXBkYXRlPSEwKSx0aGlzLmRpc3BhdGNoRXZlbnQobmV3IG8odStlLGEpKSxcImluc3RhbGxlZFwiPT09ZT90aGlzLl89c2V0VGltZW91dChmdW5jdGlvbigpe1wiaW5zdGFsbGVkXCI9PT1lJiZ0LkIud2FpdGluZz09PWkmJnQuZGlzcGF0Y2hFdmVudChuZXcgbyh1K1wid2FpdGluZ1wiLGEpKX0sMjAwKTpcImFjdGl2YXRpbmdcIj09PWUmJihjbGVhclRpbWVvdXQodGhpcy5fKSxyfHx0aGlzLnMucmVzb2x2ZShpKSl9LGQubT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLk87dD09PW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXImJih0aGlzLmRpc3BhdGNoRXZlbnQobmV3IG8oXCJjb250cm9sbGluZ1wiLHtzdzp0LG9yaWdpbmFsRXZlbnQ6bn0pKSx0aGlzLmgucmVzb2x2ZSh0KSl9LGQudj1mdW5jdGlvbihuKXt2YXIgdD1uLmRhdGE7dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwibWVzc2FnZVwiLHtkYXRhOnQsb3JpZ2luYWxFdmVudDpufSkpfSxsPXYsKHc9W3trZXk6XCJhY3RpdmVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zLnByb21pc2V9fSx7a2V5OlwiY29udHJvbGxpbmdcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oLnByb21pc2V9fV0pJiZ0KGwucHJvdG90eXBlLHcpLGcmJnQobCxnKSx2fShmdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXt0aGlzLkQ9e319dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihuLHQpe3RoaXMuVChuKS5hZGQodCl9LHQucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihuLHQpe3RoaXMuVChuKS5kZWxldGUodCl9LHQuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihuKXtuLnRhcmdldD10aGlzLHRoaXMuVChuLnR5cGUpLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQobil9KX0sdC5UPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLkRbbl09dGhpcy5EW25dfHxuZXcgU2V0fSxufSgpKTtleHBvcnR7YyBhcyBXb3JrYm94LG4gYXMgbWVzc2FnZVNXfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdvcmtib3gtd2luZG93LnByb2QuZXM1Lm1qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vc3JjL2RhdGEvYXBpLWRhdGEuanNcIjtcbmltcG9ydCB7IERhdGFNb2RhbCB9IGZyb20gXCIuL3NyYy9kYXRhL2RhdGEtbW9kYWwuanNcIjtcbmltcG9ydCB7IFN0YXJ0U2NlbmUgfSBmcm9tIFwiLi9zcmMvc2NlbmVzL3N0YXJ0LXNjZW5lLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuL3NyYy91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IHsgQ2FjaGVkTGFuZ3VhZ2VzIH0gZnJvbSBcIi4vc3JjL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IFdvcmtib3ggfSBmcm9tIFwid29ya2JveC13aW5kb3dcIjtcbmltcG9ydCB7IERlYnVnZ2VyLCBsYW5nIH0gZnJvbSBcIi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xuaW1wb3J0IHsgRmlyZWJhc2VJbnRlZ3JhdGlvbiB9IGZyb20gXCIuL3NyYy9maXJlYmFzZS9maXJlYmFzZV9pbnRlZ3JhdGlvbi5qc1wiO1xuY29uc3QgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKFwibXktY2hhbm5lbFwiKTtcbmxldCBjYWNoZWRfbGFuZ3VhZ2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKVxuICAgID8gbmV3IE1hcChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKENhY2hlZExhbmd1YWdlcykpKVxuICAgIDogbmV3IE1hcCgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgRmlyZWJhc2VJbnRlZ3JhdGlvbi5zZXNzaW9uRW5kKCk7XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmVnaXN0ZXJXb3JrYm94KCk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoID4gNDIwID8gNDIwIDogd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGxldCBkYXRhID0geWllbGQgZ2V0RGF0YSgpO1xuICAgICAgICBsZXQgZCA9IG5ldyBEYXRhTW9kYWwoZGF0YS5PdGhlckF1ZGlvcywgZGF0YS5MZXZlbHMsIGRhdGEuRmVlZGJhY2tUZXh0cywgZGF0YS5SaWdodFRvTGVmdCwgZGF0YS5GZWVkYmFja0F1ZGlvcyk7XG4gICAgICAgIGlmICh3aW5kb3cuQW5kcm9pZCkge1xuICAgICAgICAgICAgd2luZG93LkFuZHJvaWQucmVjZWl2ZURhdGEoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykgPyBjYWNoZWRfbGFuZ3VhZ2VzLmdldChsYW5nKSA6IG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFRoaXMuYWJvdXRDb21wYW55ID0gZGF0YS5hYm91dENvbXBhbnk7XG4gICAgICAgIGdsb2JhbFRoaXMuZGVzY3JpcHRpb25UZXh0ID0gZGF0YS5kZXNjcmlwdGlvblRleHQ7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRfbGFuZ3VhZ2VzLmhhcyhsYW5nKSkge1xuICAgICAgICAgICAgICAgIERlYnVnZ2VyLkRldmVsb3BtZW50TGlua1xuICAgICAgICAgICAgICAgICAgICA/IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1idG5cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIilcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIEZpcmViYXNlSW50ZWdyYXRpb24uaW5pdGlhbGl6ZUZpcmViYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aCA+IDQyMCA/IDQyMCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1vbnN0ZXI7XG4gICAgICAgICAgICAgICAgbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpLmRlbGV0ZUFsbExheWVycygpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXJ0U2NlbmU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gbmV3IFN0YXJ0U2NlbmUoY2FudmFzLCBkLCB0aGlzLmFuYWx5dGljcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKGNhY2hlZF9sYW5ndWFnZXMuaGFzKGxhbmcpKSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICAgICAgICAgIEZpcmViYXNlSW50ZWdyYXRpb24uaW5pdGlhbGl6ZUZpcmViYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBEZWJ1Z2dlci5EZXZlbG9wbWVudExpbmtcbiAgICAgICAgICAgICAgICA/IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1idG5cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIilcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NlbmUgPSBuZXcgU3RhcnRTY2VuZShjYW52YXMsIGQsIHRoaXMuYW5hbHl0aWNzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5mdW5jdGlvbiByZWdpc3Rlcldvcmtib3goKSB7XG4gICAgaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICAgICAgICBsZXQgd2IgPSBuZXcgV29ya2JveChcIi4vc3cuanNcIiwge30pO1xuICAgICAgICB3Yi5yZWdpc3RlcigpLnRoZW4oaGFuZGxlU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbik7XG4gICAgICAgIGlmICghY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoeyBjb21tYW5kOiBcIkNhY2hlXCIsIGRhdGE6IGxhbmcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlU2VydmljZVdvcmtlck1lc3NhZ2UpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgaWYgKHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nKSB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiUmVnaXN0cmF0aW9uXCIsXG4gICAgICAgICAgICB2YWx1ZTogbGFuZyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlU2VydmljZVdvcmtlck1lc3NhZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YS5tc2cgPT0gXCJMb2FkaW5nXCIpIHtcbiAgICAgICAgaGFuZGxlTG9hZGluZ01lc3NhZ2UoZXZlbnQuZGF0YSk7XG4gICAgfVxuICAgIGlmIChldmVudC5kYXRhLm1zZyA9PSBcIlVwZGF0ZSBGb3VuZFwiKSB7XG4gICAgICAgIGhhbmRsZVVwZGF0ZUZvdW5kTWVzc2FnZSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmdNZXNzYWdlKGRhdGEpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdfbnVtYmVyXCIpLmlubmVySFRNTCA9XG4gICAgICAgIFwiIFwiICsgXCIgZG93bmxvYWRpbmcuLi4gXCIgKyBkYXRhLmRhdGEgKyBcIiVcIjtcbiAgICBpZiAoZGF0YS5kYXRhID09IDEwMCkge1xuICAgICAgICBjYWNoZWRfbGFuZ3VhZ2VzLnNldChsYW5nLCBcInRydWVcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENhY2hlZExhbmd1YWdlcywgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShjYWNoZWRfbGFuZ3VhZ2VzLmVudHJpZXMoKSkpKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUZvdW5kTWVzc2FnZSgpIHtcbiAgICBsZXQgdGV4dCA9IFwiVXBkYXRlIEZvdW5kXFxuUHJlc3Mgb2sgdG8gdXBkYXRlLlwiO1xuICAgIGlmIChjb25maXJtKHRleHQpID09IHRydWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGV4dCA9IFwiWW91IGNhbmNlbGVkIVwiO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==