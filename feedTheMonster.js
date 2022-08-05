import { GameScene } from './monster.js'
import { preloadImages } from './utility.js'

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas");
    const changeAnim = document.getElementById("change-anim");
    const context = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
    var self;
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            self = this;
            this.gameScene = new GameScene(this);
        }

        update(deltaTime) {
            this.gameScene.update(deltaTime);
        }

        render() {
            this.gameScene.draw(context)
        }

        // onLoadGame() {
        //     preloadImages([
        //         './assets/images/bg_v01.jpg',
        //         './assets/images/fence_v01.png',
        //         './assets/images/FG_a_v01.png',
        //         './assets/images/hill_v01.png',
        //         './assets/images/Totem_v02_v01.png',
        //         './assets/images/timer_empty.png',
        //         './assets/images/timer_full.png',
        //         './assets/images/timer.png'

        //     ], function(){
        //         console.log('All images were loaded');
        //     });
        // }

    }

    const game = new Game(canvas.width, canvas.height);
    game.render();
    // var bgImg = new Image();
    // bgImg.src = "./assets/images/player.png";
    // bgImg.onload = function() {
    //     game.render(bgImg)
    // }

    let lastTime = 0;

    function animation(timeStamp) {
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        context.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.render();
        requestAnimationFrame(animation)
        
    }

    animation(0);

    changeAnim.addEventListener("click", function(e) {
        self.gameScene.changeImage();
        e.preventDefault();
    });
    

    
})