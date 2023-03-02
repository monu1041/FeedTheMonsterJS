import { Howl } from "howler";

let inactive_screen = false;
export default class Sound {
  public playingSources: Array<AudioBufferSourceNode> = [];
  public audioContext: AudioContext = new AudioContext();
  playSound(src) {
    fetch(src)
      .then((response) => response.arrayBuffer())
      .then((buffer) => this.audioContext.decodeAudioData(buffer))
      .then((audioBuffer) => {
        var source = this.audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this.audioContext.destination);
        this.playingSources.push(source);
        console.log("Started", source);
        source.start();
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
    for (var i = 0; i < this.playingSources.length; i++) {
      console.log("Playing", this.playingSources[i]);
      this.playingSources[i].stop();
    }
    this.playingSources = [];
  }
  changeSourse(src) {
    // this.audio.src = src;
    this.playSound(src);
  }
  playLevelEndHappyAudio(levelWinAudio) {
    // this.audio.src = levelWinAudio;
    // this.playSound(levelWinAudio);
    // setTimeout(() => {
    //   this.introAudio.play();
    // }, 700);
  }
}
