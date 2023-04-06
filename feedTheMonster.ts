import * as Sentry from "@sentry/browser";
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
import { CachedLanguages, PWAInstallStatus } from "./src/common/common.js";
import { Workbox } from "workbox-window";
import { lang } from "./global-variables.js";
import { FirebaseIntegration } from "./src/firebase/firebase_integration.js";
declare const window: any;
declare const app: any;

declare global {
  var aboutCompany: string;
  var descriptionText: string;
}
const channel = new BroadcastChannel("my-channel");
let cached_languages = localStorage.getItem(CachedLanguages)
  ? new Map(JSON.parse(localStorage.getItem(CachedLanguages)))
  : new Map();
window.addEventListener("beforeunload", (event) => {
  FirebaseIntegration.sessionEnd();
});
window.addEventListener("load", async function () {
  registerWorkbox();
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
  if (window.Android) {
    window.Android.receiveData(
      cached_languages.has(lang) ? cached_languages.get(lang) : null
    );
  }
  globalThis.aboutCompany = data.aboutCompany;
  globalThis.descriptionText = data.descriptionText;
  window.addEventListener("resize", async () => {
    if (cached_languages.has(lang)) {
      if (navigator.onLine) {
        FirebaseIntegration.initializeFirebase();
      }
      canvas.height = window.innerHeight;
      canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
      delete this.monster;
      new CanvasStack("canvas").deleteAllLayers();
      delete this.startScene;
      this.startScene = new StartScene(canvas, d, this.analytics);
    }
  });
  if (cached_languages.has(lang)) {
    if (navigator.onLine) {
      FirebaseIntegration.initializeFirebase();
    }
    this.startScene = new StartScene(canvas, d, this.analytics);
  }
});
Sentry.init({
  dsn: "https://b9be4420e3f449bdb00a0ac861357746@o4504951275651072.ingest.sentry.io/4504951279058944",
  integrations: [new Sentry.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
function registerWorkbox(): void {
  if ("serviceWorker" in navigator) {
    let wb = new Workbox("./sw.js", {});
    wb.register().then(handleServiceWorkerRegistration);
    if (!cached_languages.has(lang)) {
      channel.postMessage({ command: "Cache", data: lang });
    }
    navigator.serviceWorker.addEventListener(
      "message",
      handleServiceWorkerMessage
    );
  }
}
function handleServiceWorkerRegistration(registration): void {
  if (registration.installing) {
    registration.installing.postMessage({
      type: "Registration",
      value: lang,
    });
  }
}
function handleServiceWorkerMessage(event): void {
  if (event.data.msg == "Loading") {
    handleLoadingMessage(event.data);
  }
  if (event.data.msg == "Update Found") {
    handleUpdateFoundMessage();
  }
}
function handleLoadingMessage(data): void {
  document.getElementById("loading_number").innerHTML =
    " " + " downloading... " + data.data + "%";
  if (data.data == 100) {
    cached_languages.set(lang, "true");
    localStorage.setItem(
      CachedLanguages,
      JSON.stringify(Array.from(cached_languages.entries()))
    );
    window.location.reload();
  }
}
function handleUpdateFoundMessage(): void {
  let text = "Update Found\nPress ok to update.";
  if (confirm(text) == true) {
    localStorage.removeItem(CachedLanguages);
    window.location.reload();
  } else {
    text = "You canceled!";
  }
}
