import { LevelSelectionScreen } from "./src/scenes/level-selection-scene.js";
import { getData } from "./src/data/api-data.js";
import { DataModal } from "./src/data/data-modal.js";
import { StartScene } from "./src/scenes/start-scene.js";
import { CanvasStack } from "./src/utility/canvas-stack.js";
import { firebaseConfig } from "./src/firebase/firebase_config.js";
import {
  getDatafromStorage,
  ProfileData,
  setDataToStorage,
} from "./src/data/profile-data.js";
import { CachedData, PWAInstallStatus } from "./src/common/common.js";
import { Workbox } from "workbox-window";
import { lang } from "./global-variables.js";
declare const window: any;
declare const app: any;
declare global {
  var aboutCompany: string;
  var descriptionText: string;
}
window.addEventListener("load", async function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", function (event) {
      if (event.data.msg == "Loading") {
        document.getElementById("loading_number").innerHTML =
          " " + " downloading... " + event.data.data + "%";
        if (event.data.data == 100) {
          localStorage.setItem(CachedData, "true");
          window.location.reload();
        }
      }
    });
    navigator.serviceWorker.addEventListener("message", function (event) {
      if (event.data.msg == "Update Found") {
        let text = "Update Found\nPress ok to update.";
        if (confirm(text) == true) {
          window.location.reload();
          localStorage.setItem(CachedData, "false");
        } else {
          text = "You canceled!";
        }
      }
    });

    let wb = new Workbox("./sw.js");
    wb.register();
  }

  if (navigator.onLine) {
    this.app = firebase.initializeApp(firebaseConfig);
    this.analytics = firebase.analytics(this.app);
  }
  const canvas: any = <HTMLElement>document.getElementById("canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;

  let data = await getData();
  let d = new DataModal(
    data.OtherAudios,
    data.Levels,
    data.FeedbackTexts,
    data.RightToLeft,
    data.FeedbackAudios
  );
  let isDataCached = localStorage.getItem(CachedData);
  console.log(isDataCached);
  if (window.Android) {
    window.Android.receiveData(isDataCached);
  }
  globalThis.aboutCompany = data.aboutCompany;
  globalThis.descriptionText = data.descriptionText;

  window.addEventListener("resize", async () => {
    canvas.height = window.innerHeight;
    canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
    delete this.monster;
    new CanvasStack("canvas").deleteAllLayers();
    delete this.startScene;
    this.startScene = new StartScene(canvas, d, this.analytics);
  });
  this.startScene = new StartScene(canvas, d, this.analytics);
});
