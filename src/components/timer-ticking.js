import { TimetickerLayer } from "../common/common.js";
import { CanvasStack } from "../utility/canvas-stack.js"

export class TimerTicking {
    constructor(game) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        this.widthToClear = canvas.width/3.4;
        this.fps = 10;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.maxFrame = 6;
        this.canvasStack = new CanvasStack("canvas");
        this.createCanvas();
    }

    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width,TimetickerLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 4;
    }

    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(
            this.timer_full,
            this.game.width * 0.12,
            this.height * 0.099,
            this.game.width - 50,
            this.height * 0.05
          );
    }

    createBackgroud() {
        var self = this;
        this.timer_full = new Image();
        this.timer_full.src = "./assets/images/timer_full.png";
        this.timer_full.onload = function (e) {
            self.draw();
            self.update()
        };
        
    }

    update(deltaTime) {
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            this.widthToClear = this.widthToClear - 0.2;
        } else {
            console.log(this.frameTimer)
            this.frameTimer += deltaTime;
        }
        this.context.clearRect(canvas.width * 1.3 - this.widthToClear, 0, this.width, this.height)
    }
    
}