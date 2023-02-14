import { Howl } from "howler";

let inactive_screen = false;
export default class Sound {
  public audio: HTMLAudioElement;
  public audio1: HTMLAudioElement;
  public audio2: HTMLAudioElement;
  public introAudio: Howl;

  constructor() {
    this.audio = new Audio();
    this.introAudio = new Howl({
      src: ["./assets/audios/intro.wav"],
    });
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
  activeScreen() {
    if (inactive_screen) {
      inactive_screen = false;
    } else {
      this.pauseSound();
      inactive_screen = true;
    }
  }
  pauseSound() {
    this.introAudio.pause();
    this.audio ? this.audio.pause() : null;
    this.audio2 ? this.audio1.pause() : null;
    this.audio2 ? this.audio2.pause() : null;
  }
  changeSourse(src) {
    this.audio.src = src;
    this.playSound(src);
  }
  playLevelEndHappyAudio(levelWinAudio) {
    this.audio.src = levelWinAudio;
    this.playSound(levelWinAudio);
    setTimeout(() => {
      this.introAudio.play();
    }, 700);
  }
}
