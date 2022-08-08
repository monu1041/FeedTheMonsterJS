import { CanvasStack } from "../utility/canvas-stack.js"

export class TimerTicking {
    constructor(game) {
        this.game = game;
        this.width = game.width;
        this.height = game.height * 0.2;
        this.canvasStack = new CanvasStack("canvas");
        this.createCanvas();
    }

    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.top = "10%"
        this.canavsElement.style.zIndex = 6;
    }

    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(
            this.timer_full,
            this.game.width * 0.13,
            this.game.height * 0.099,
            this.game.width - 50,
            this.height * 0.24
          );
    }

    createBackgroud() {
        var self = this;
        this.timer_full = new Image();
        this.timer_full.src = "./assets/images/timer_full.png";
        this.timer_full.onload = function (e) {
            self.draw();
        };

    }

    update() {

    }
}