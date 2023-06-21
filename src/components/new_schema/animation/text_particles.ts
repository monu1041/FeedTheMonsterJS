import { Effects } from "./text_effects.js";

export class TextParticle {
  private effect: Effects;
  private x: number;
  private y: number;
  private color: string;
  private originX: number;
  private originY: number;
  private size: number;
  private ease: number;

  constructor(effect: Effects, x: number, y: number, color: string) {
    this.effect = effect;
    this.x = Math.random() * this.effect.canvasWidth;
    this.y = 0;
    this.color = color;
    this.originX = x;
    this.originY = y;
    this.size = this.effect.gap;
    this.ease = Math.random() * 0.1 + 0.005;
  }

  public draw(): void {
    this.effect.context.fillStyle = this.color;
    this.effect.context.fillRect(this.x, this.y, this.size, this.size);
  }

  public update(): void {
    this.x += (this.originX - this.x) * this.ease;
    this.y += this.originY - this.y;
  }
}
