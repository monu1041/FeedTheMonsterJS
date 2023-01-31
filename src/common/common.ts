import { CanvasStack } from "../utility/canvas-stack.js";
import { lang } from "../../global-variables.js";

export function loadImages(sources: any, callback: any) {
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
export function loadingScreen(loading: boolean) {
  const loadingElement = <HTMLElement>document.getElementById("loading-screen");
  const loadingText = <HTMLElement>document.getElementById("loading_text");
  const loadingNumber = <HTMLElement>document.getElementById("loading_number");
  loadingText.style.display = "none";
  loadingNumber.style.display = "none";
  if (loading) {
    loadingElement.style.display = "block";
    new CanvasStack("canvas").bkgCanvas.layers.forEach((element) => {
      const htmlElement = <HTMLElement>document.getElementById(element.id);
      htmlElement.style.display = "none";
    });
  } else {
    loadingElement.style.display = "none";
    new CanvasStack("canvas").bkgCanvas.layers.forEach((element) => {
      const htmlElement = <HTMLElement>document.getElementById(element.id);
      htmlElement.style.display = "flex";
    });
  }
}

export const MonsterLayer = "monsterCanvas";
export const PausePopupLayer = "pausepopupCanvas";
export const StoneLayer = "stoneCanvas";
export const TimetickerLayer = "timetickCanvas";
export const LevelEndLayer = "levelEndCanvas";
export const LevelEndButtonsLayer = "levelEndButtonsCanvas";
export const LevelSelectionLayer = "levelSelectionCanvas";
export const LevelStartLayer = "levelStartCanvas";
export const StartSceneLayer = "startSceneCanvas";
export const PlayButtonLayer = "playButtonCanvas";
export const GameEndLayer = "GameEndCanvas";
export const FirebaseUserClicked = "user_clicked";
export const FirebaseUserInstall = "user_installed";
export const PromptTextLayer = "promptTextCanvas";
export const PWAInstallStatus = "pwa_installed_status";
export const UserCancelled = "user_cancel_installation";
export const NativePlayButton = "native_playbutton_clicked";
export const PreviousPlayedLevel = "storePreviousPlayedLevel" + lang;
export const StoreMonsterPhaseNumber = "storeMonsterPhaseNumber" + lang;
export const CachedData = "cachedData" + lang;
