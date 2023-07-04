export class StoneConfig {
    public x: number;
    public y: number;
    public origx: number;
    public origy: number;
    // public drawready: boolean;
    public text: string;
    public img: CanvasImageSource;
    public imageSize: number;
    public textFontSize: number;
    public canvasWidth: number;
    public canvasHeight: number;
    public imageCenterOffsetX: number;
    public imageCenterOffsetY: number;
    public context: CanvasRenderingContext2D;

    constructor(context, canvasWidth, canvasHeight, stoneLetter, xPos, yPos, img) {
        this.x = xPos;
        this.y = yPos;
        this.origx = xPos;
        this.origy = yPos;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        // this.drawready = false;
        this.text = stoneLetter;
        this.img = img;
        this.context = context;
        // this.imageSize = this.context.measureText(this.text).width * 1.1;
        this.calculateImageAndFontSize();
        this.imageCenterOffsetX = this.imageSize / 2.3;
        this.imageCenterOffsetY = this.imageSize / 1.5;
        // this.img.src = "./assets/images/stone_pink_v02.png";

    }

    calculateImageAndFontSize() {
        if (
            this.context.measureText(this.text).width * 1.4 >
            this.canvasHeight / 13
        ) {
            this.imageSize = this.context.measureText(this.text).width * 1.1;
            this.textFontSize = this.canvasHeight / 25;
        } else {
            this.imageSize = this.canvasHeight / 13;
            this.textFontSize = this.canvasHeight / 20;
        }
    }

    draw() {
        this.context.drawImage(
            this.img,
            this.x - this.imageCenterOffsetX,
            this.y - this.imageCenterOffsetY,
            this.imageSize,
            this.imageSize
        );
        // if (Math.round(this.x) == stoneConfig.targetX) {
        //     //reached its original position
        // }
        this.context.fillStyle = "white";
        this.context.font = this.textFontSize + "px Arial";
        this.context.textAlign = "center";
        this.context.fillText(this.text, this.x, this.y);
    }

    update() {
        // update stone apearing animation
    }
}
