
export default class GameScene {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.width = width;

    this.height = height;
    this.canvasStack = new CanvasStack(this.canvas);
  }
  createCanvas() {
    console.log(this);
    this.id = this.canvasStack.createLayer(this.height, this.width);
    this.context = document.getElementById(this.id).getContext("2d");
    document.getElementById(this.id).style.zIndex = 5;
  }
  deleteCanvas() {
    var self = this;
    this.canvasStack.deleteLayer(this.id);
  }
  draw(image) {
    console.log();
    this.context.drawImage(image, 0, 0, this.width, this.height);
  }
 
  changeScene() {
    // var self = this;
    // document.getElementById(this.id).addEventListener(
    //   "click",
    //   function (event) {
    //     console.log(self);
    //     self.canvasStack.deleteLayer(self.id);
    //   },
    //   false
    // );
  }
  update() {}
}
