
import { AfterViewInit, Component, Injectable, ViewChild } from '@angular/core';
import { Food } from './food';
import { FOOD_AMOUNT, HEIGHT, initNeat, ITERATIONS, neat, startEvaluation, endEvaluation, USE_TRAINED_POP, WIDTH } from './main';
import { Info } from './info';

@Component({
  selector: 'bot-game',
  templateUrl: './game.template.html'
})
export class Game implements AfterViewInit {
  @ViewChild('mycanvas') mycanvas;

  public canvas;
  public ctx;
  info: Info;
  constructor(info?: Info) {
    this.info = info;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setup();
    }, 2000);
  }

  setup () {
    this.canvas = this.mycanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    initNeat();

    // Create some food
    for (let i = 0; i < FOOD_AMOUNT; i++) {
      const food = new Food();
    }

    // Do some initial mutation
    if (!USE_TRAINED_POP) {
      for (let i = 0; i < 100; i++) {neat.mutate();}
    }
    this.info.players = [];
    this.info.highestScore = 0;
    startEvaluation();

  }

  draw () {
    this.ctx.clear();
    this.squareGrid();

    // Check if evaluation is done
    if (this.info.iteration === ITERATIONS) {
      endEvaluation();
      this.info.iteration = 0;
    }

    // Update and visualise players
    for (let i = this.info.players.length - 1; i >= 0; i--) {
      const player = this.info.players[i];

      // Some players are eaten during the iteration
      player.update();
      player.show();
    }

    // Update and visualise food
    for (let i = this.info.foods.length - 1; i >= 0; i--) {
     this.info.foods[i].show();
    }

    this.info.iteration++;
  }
  squareGrid () {
    this.ctx.stroke(204, 204, 204, 160);
    this.ctx.fill(255);
    for (let x = 0; x < WIDTH / 40; x++) {
      this.ctx.line(x * 40, 0, x * 40, HEIGHT);
    }
    for (let y = 0; y < HEIGHT / 40; y++) {
      this.ctx.line(0, y * 40, WIDTH, y * 40);
    }
    this.ctx.noStroke();
  }

  distance (x1, y1, x2, y2) {
    const dx = x1 - x2;
    const dy = y1 - y2;

    return Math.sqrt(dx * dx + dy * dy);
  }

  /** Get a relative color between red and green */
  activationColor = (value, max) => {
    const power = 1 - Math.min(value / max, 1);
    const color = [255, 255, 0]

    if (power < 0.5) {
      color[0] = 2 * power * 255;
    } else {
      color[1] = (1.0 - 2 * (power - 0.5)) * 255;
    }

    return color;
  }

  angleToPoint (x1, y1, x2, y2) {
    const d = this.distance(x1, y1, x2, y2);
    const  dx = (x2 - x1) / d;
    const dy = (y2 - y1) / d;

    let a = Math.acos(dx);
    a = dy < 0 ? 2 * Math.PI - a : a;
    return a;
  }

}



