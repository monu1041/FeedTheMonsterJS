import { TextEffects } from "./text_effects.js";

export class TextParticle {
  private textEffect: TextEffects;
  private x: number;
  private y: number;
  private color: string;
  private originX: number;
  private originY: number;
  private size: number;
  private ease: number;

  constructor(textEffect: TextEffects, x: number, y: number, color: string) {
    this.textEffect = textEffect;
    this.x = Math.random() * this.textEffect.canvasWidth;
    this.y = 0;
    this.color = color;
    this.originX = x;
    this.originY = y;
    this.size = this.textEffect.gap;
    this.ease = Math.random() * 0.1 + 0.055;
  }

  public draw(): void {
    this.textEffect.context.fillStyle = this.color;
    this.textEffect.context.fillRect(this.x, this.y, this.size, this.size);
  }

  public update(): void {
    this.x += (this.originX - this.x) * this.ease;
    this.y += this.originY - this.y;
  }
}
