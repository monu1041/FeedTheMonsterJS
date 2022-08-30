export default class Sound {
  constructor() {
    this.audio = new Audio();
  }
  playSound(src) {
    this.audio.play().catch((e) => {
      this.audio1 = new Audio();
      this.audio1.src = src;
      this.audio1.play().catch((e) => {
        this.audio2 = new Audio();
        this.audio2.src = src;
        this.audio2.play();
      });
    });
  }
  pauseSound() {
    this.audio ? this.audio.pause() : null;
    this.audio2 ? this.audio1.pause() : null;
    this.audio2 ? this.audio2.pause() : null;
  }
  changeSourse(src) {
    this.audio.src = src;
    this.playSound(src);
  }
}
