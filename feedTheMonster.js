import { LevelSelectionScreen } from "./src/scenes/level-selection-scene.js";
import { getData } from "./src/data/api-data.js";
import { DataModal } from "./src/data/data-modal.js";
import { StartScene } from "./src/scenes/start-scene.js";
import { CanvasStack } from "./src/utility/canvas-stack.js";
import { FirebaseIntegration } from "./src/firebase/firebase_integration.js";
window.addEventListener("load", async function () {
  this.firebase = new FirebaseIntegration();
  const canvas = document.getElementById("canvas");
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

  window.addEventListener("resize", async () => {
    canvas.height = window.innerHeight;
    canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
    new CanvasStack("canvas").deleteAllLayers();
    delete this.startScene;
    this.startScene = new StartScene(canvas, d, this.firebase);
  });
  this.startScene = new StartScene(canvas, d, this.firebase);
  
});
