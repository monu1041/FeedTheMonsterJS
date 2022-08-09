import { LevelStartScene } from './src/scenes/level-start-scene.js';
// import { preloadImages } from './utility.js'

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;

    var self;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            self = this;
            this.scene = new LevelStartScene(this);
        }

        update(deltaTime) {
            this.scene.monster.update(deltaTime)
            this.scene.stones.update()
        }

        render() {
            this.scene.createBackgroud();
        }

    }

    const game = new Game(canvas.width, canvas.height);
    game.render();

    let lastTime = 0;

    function animation(timeStamp) {
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        context.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime)
        requestAnimationFrame(animation)
        
    }

    animation(0);
})