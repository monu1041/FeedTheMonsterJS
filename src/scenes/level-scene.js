import { Monster } from "../common/monster.js";
import { TimerTicking } from "../common/timer-ticking.js";
import { CanvasStack } from "../utility/canvas-stack.js"

export class LevelScene {
    constructor(game) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        this.canvasStack = new CanvasStack("canvas");
        this.createCanvas();
        this.timerTicking = new TimerTicking(game);
        this.monster = new Monster(game);
       
    }

    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 5;
    }

    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.bgImg, 0, 0, this.width, this.height);
        this.context.drawImage(
            this.pillerImg,
            this.width * 0.6,
            this.height / 6,
            this.width,
            this.height / 2
        );
        this.context.drawImage(
            this.fenchImg,
            -this.width * 0.4,
            this.height / 3,
            this.width,
            this.height / 3
        );
        this.context.drawImage(
            this.hillImg,
            -this.width * 0.25,
            this.height / 2,
            this.width * 1.5,
            this.height / 2
        );
        this.context.drawImage(
            this.grassImg,
            -this.width * 0.25,
            this.height / 2 + (this.height / 2) * 0.1,
            this.width * 1.5,
            this.height / 2
        );
        this.context.drawImage(
            this.timer_empty,
            0,
            this.height * 0.1,
            this.width,
            this.height * 0.05
        );
        this.context.drawImage(
            this.rotating_clock,
            5,
            this.height * 0.09,
            this.width * 0.12,
            this.height * 0.06
        );

        this.timerTicking.createBackgroud();
    }

    createBackgroud() {
        var self = this;
        this.bgImg = new Image();
        this.bgImg.src = "./assets/images/bg_v01.jpg";
        this.bgImg.onload = function (e) {
            self.draw();
        };

        this.hillImg = new Image();
        this.hillImg.src = "./assets/images/hill_v01.png";
        this.hillImg.onload = function (e) {
            self.draw();
        };

        this.timer_empty = new Image();
        this.timer_empty.src = "./assets/images/timer_empty.png";
        this.timer_empty.onload = function (e) {
            self.draw();
        };

        this.pillerImg = new Image();
        this.pillerImg.src = "./assets/images/Totem_v02_v01.png";
        this.pillerImg.onload = function (e) {
            self.draw();
        };

        this.grassImg = new Image();
        this.grassImg.src = "./assets/images/FG_a_v01.png";
        this.grassImg.onload = function (e) {
            self.draw();
        };
        this.rotating_clock = new Image();
        this.rotating_clock.src = "./assets/images/timer.png";
        this.rotating_clock.onload = function (e) {
            self.draw();
        };
        // this.timer_full = new Image();
        // this.timer_full.src = "./assets/images/timer_full.png";
        // this.timer_full.onload = function (e) {
        //     createBackground1();
        // };

        this.fenchImg = new Image();
        this.fenchImg.src = "./assets/images/fence_v01.png";
        this.fenchImg.onload = function (e) {
            self.draw();
        };
    }
}