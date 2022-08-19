import { LevelSelectionScreen } from './src/scenes/level-selection-scene.js';
import {getData} from './src/data/api-data.js'
import { DataModal } from './src/data/data-modal.js';


window.addEventListener('load', async function() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const eat = document.getElementById("change-anim-eat");
    const spit = document.getElementById("change-anim-spit");
    const idle = document.getElementById("change-anim-idle");

    canvas.height = window.innerHeight;
    canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;

    let data =  await getData();
    let d = new DataModal(data.OtherAudios, data.Levels, data.FeedbackTexts, data.RightToLeft, data.FeedbackAudios);

    new  LevelSelectionScreen(canvas,d)

   


    eat.addEventListener("click", function(e) {
        document.getElementById("monster").src = "./assets/images/eat4.png"
        // game.scene.monster.changeImage();
        e.preventDefault();
    });

    idle.addEventListener("click", function(e) {
        document.getElementById("monster").src = "./assets/images/idle4.png"
        // game.scene.monster.changeImage();
        e.preventDefault();
    });

    spit.addEventListener("click", function(e) {
        document.getElementById("monster").src = "./assets/images/spit4.png"
        // game.scene.monster.changeImage();
        e.preventDefault();
    });
})