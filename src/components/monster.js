import { CanvasStack } from "../utility/canvas-stack.js"

export class Monster {
    constructor(game) {
        this.game = game
        this.width = this.game.width;
        this.height = this.game.height - game.width * 0.2;
        this.image = document.getElementById("monster");
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 6;
        this.x = this.game.width/2 - this.game.width * 0.243;
        this.y = this.game.height/9
        this.fps = 10;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0
        this.canvasStack = new CanvasStack("canvas");
        this.createCanvas();
    }

    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 5;
        this.canavsElement.style.bottom = 0;
        this.draw();
    }

    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }

    update(deltaTime) {
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) {
                this.frameX++;
            } else {
                this.frameX = 0;
            }
        } else {
            this.frameTimer += deltaTime;
        }

        this.draw();
    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.drawImage(this.image, 770 * this.frameX, 1386 * this.frameY, 768, 1386, this.x, this.y, this.width/2, this.height/1.5);
    }

    changeImage(src) {
        if (this.frameY == 1) {
            this.frameY = 0;
        } else {
            this.frameY = 1;
        }
    }

    changeToEatAnimation() {
        this.image.src = "./assets/images/eat4.png";
        setTimeout(() => {
            this.changeToIdleAnimation();
        }, 2000);
    }

    changeToIdleAnimation() {
        this.image.src = "./assets/images/idle4.png";
    }

    changeToSadAnimation() {
        this.image.src = "./assets/images/spit4.png";
        setTimeout(() => {
            this.changeToIdleAnimation();
        }, 2000);
    }
}