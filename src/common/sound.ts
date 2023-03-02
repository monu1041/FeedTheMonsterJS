import {
  ButtonClick,
  FeedbackAudio,
  IntroMusic,
  LevelEndAudio,
  MonsterAudio,
  PhraseAudio,
  PromptAudio,
  StoneMusic,
  TimeOver,
} from "./common.js";

let inactive_screen = false;
export default class Sound {
  public monster_audio: HTMLAudioElement;
  public feedback_audio: HTMLAudioElement;
  public intro_music: HTMLAudioElement;
  public prompt_audio: HTMLAudioElement;
  public button_click: HTMLAudioElement;
  public time_over: HTMLAudioElement;
  public stone_music: HTMLAudioElement;
  public phrase_audio: HTMLAudioElement;
  public level_end_audio: HTMLAudioElement;

  constructor() {
    this.monster_audio = document.getElementById(
      MonsterAudio
    ) as HTMLAudioElement;
    this.feedback_audio = document.getElementById(
      FeedbackAudio
    ) as HTMLAudioElement;
    this.intro_music = document.getElementById(IntroMusic) as HTMLAudioElement;
    this.prompt_audio = document.getElementById(
      PromptAudio
    ) as HTMLAudioElement;
    this.button_click = document.getElementById(
      ButtonClick
    ) as HTMLAudioElement;
    this.time_over = document.getElementById(TimeOver) as HTMLAudioElement;
    this.stone_music = document.getElementById(StoneMusic) as HTMLAudioElement;
    this.phrase_audio = document.getElementById(
      PhraseAudio
    ) as HTMLAudioElement;
    this.level_end_audio = document.getElementById(
      PhraseAudio
    ) as HTMLAudioElement;
  }
  playSound(src, type) {
    switch (type) {
      case MonsterAudio: {
        this.monster_audio.src = src;
        this.monster_audio.play();
        break;
      }
      case FeedbackAudio: {
        this.feedback_audio.src = src;
        this.feedback_audio.play();
        break;
      }
      case IntroMusic: {
        this.intro_music.src = src;
        this.intro_music.play();
        break;
      }
      case PromptAudio: {
        this.prompt_audio.src = src;
        this.prompt_audio.play();
        break;
      }
      case ButtonClick: {
        this.button_click.src = src;
        this.button_click.play();
        break;
      }
      case TimeOver: {
        this.time_over.src = src;
        this.time_over.play();
        break;
      }
      case StoneMusic: {
        this.stone_music.src = src;
        this.stone_music.play();
        break;
      }
      case PhraseAudio: {
        this.phrase_audio.src = src;
        this.phrase_audio.play();
        break;
      }
      case LevelEndAudio: {
        this.level_end_audio.src = src;
        this.level_end_audio.play();
        break;
      }

      default:
        break;
    }
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
    this.monster_audio.pause();
    this.feedback_audio.pause();
    this.intro_music.pause();
    this.level_end_audio.pause();
    this.phrase_audio.pause();
    this.time_over.pause()
    this.stone_music.pause()
    this.prompt_audio.pause()
    this.button_click.pause()
    this.time_over.pause()
    // this.introAudio.pause();
    // this.audio ? this.audio.pause() : null;
    // this.audio2 ? this.audio1.pause() : null;
    // this.audio2 ? this.audio2.pause() : null;
  }
  changeSourse(src) {
    // this.audio.src = src;
    // this.playSound(src);
  }
  playLevelEndHappyAudio(levelWinAudio) {
    // this.audio.src = levelWinAudio;
    // this.playSound(levelWinAudio);
    // setTimeout(() => {
    //   this.introAudio.play();
    // }, 700);
  }
}
