export default class Monster {
  public canvas: { width: any; height?: number };
  public frameX: number;
  public frameY: number;
  public x: number;
  public y: number;
  public context: CanvasRenderingContext2D;
  public maxFrame = 6;
  public fps = 10;
  public frameInterval = 1000 / this.fps;
  public frameTimer = 0;
  public monster_image: any;
  public image: HTMLImageElement;

  constructor(
    canvas: { width: number; height?: number },
    context: CanvasRenderingContext2D
  ) {
    this.context = context;
    this.x = canvas.width / 2 - canvas.width * 0.243;
    this.y = canvas.width / 3;
    this.canvas = canvas;
    this.frameX = 0;
    this.frameY = 0;
    this.image = document.getElementById("monster") as HTMLImageElement;
    this.draw();

    // this.monsterWorker = new Worker("./workers/monster_worker.js");

    // this.monsterWorker.addEventListener("message", (event) => {
    //   const imageData = event.data;
    //   this.frameX = imageData.frameX;
    //   this.draw(this.context);
    // });
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
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(
      this.image,
      770 * this.frameX,
      1386 * this.frameY,
      768,
      1386,
      this.x,
      this.y * 0.8,
      this.canvas.width / 2,
      this.canvas.height / 1.5
    );
  }
}
