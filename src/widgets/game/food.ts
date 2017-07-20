import { FOOD_AREA, HEIGHT, WIDTH } from './main';
import { Game } from './game';
import { Info } from './info';

export class Food {

  public x;
  public y;
  public area;
  public color;
  public game: Game;
  public info: Info;
  constructor(game?: Game, info?: Info) {
    this.x = Math.floor(Math.random() * WIDTH);
    this.y = Math.floor(Math.random() * HEIGHT);
    this.area = FOOD_AREA;
    this.game = game;
    this.color = [
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255),
      Math.round(Math.random() * 255)
    ];
    this.info = info;

    this.info.foods.push(this);
  }

  show() {
    const radius = Math.sqrt(this.area / Math.PI);

    this.game.ctx.fill(this.color[0], this.color[1], this.color[2]);
    this.game.ctx.noStroke();
    this.game.ctx.ellipse(this.x, this.y, radius);
  }

  /** Restart from new position */
  restart() {
    this.x = Math.floor(Math.random() * WIDTH);
    this.y = Math.floor(Math.random() * HEIGHT);
  }
}

