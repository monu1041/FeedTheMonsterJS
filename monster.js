export class GameScene {
    constructor(game) {
        this.game = game
        this.width = this.game.width;
        this.height = this.game.height;
        this.image = document.getElementById("monster");
        this.frameX = 0;
        this.maxFrame = 6;
        this.fps = 10;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0
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
    }

    draw(context) {
        context.drawImage(this.image, 50 + 768 * this.frameX, 50, 768, 900, this.width/2 - 70, this.height/3, this.width/2.5, this.height/2.5);
    }

    changeImage() {
        this.image.src = "./assets/images/eat3.png"
    }
}