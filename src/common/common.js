import { CanvasStack } from "../utility/canvas-stack.js";

export function loadImages(sources, callback) {
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
export function loadingScreen(loading) {
  if (loading) {
    document.getElementById("loading").style.display = "block";
    delete new CanvasStack("canvas").bkgCanvas.layers.forEach((element) => {
      document.getElementById(element.id).style.display = "none";
    });
  } else {
    document.getElementById("loading").style.display = "none";
    delete new CanvasStack("canvas").bkgCanvas.layers.forEach((element) => {
      document.getElementById(element.id).style.display = "flex";
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
