import { DECREASE_SIZE, DETECTION_RADIUS, FOOD_DETECTION, HEIGHT, MAX_AREA, MIN_AREA, MIN_SPEED, PLAYER_DETECTION, RELATIVE_SIZE, SPEED, WIDTH } from './main';
import { Game } from './game';
import { Observable } from 'rxjs/Observable';
import { Info } from './info';

export class Player {

  public x;
  public y;
  public vx;
  public vy;

  public brain;
  public area;
  public visualarea;
  public info: Info;
  public game: Game;
  constructor(genome, info?: Info, game?: Game) {
    this.x = Math.floor(Math.random() * WIDTH);
    this.y = Math.floor(Math.random() * HEIGHT);
    this.vx = 0;
    this.vy = 0;
    this.game = game;
    this.brain = genome;
    this.brain.score = 0;

    this.area = MIN_AREA;
    this.visualarea = this.area;
    this.info = info;
    this.info.players.push(this);


  }
  /** Update the stats */
  update() {
    if (this.area > MAX_AREA) {
      this.area = MAX_AREA;
    }
    if (this.area < MIN_AREA) {
      this.area = MIN_AREA;
    }

    const input = this.detect();
    const output = this.brain.activate(input);

    const moveangle = output[0] * 2 * Math.PI;
    const movespeed = output[1] > 1 ? 1 : output[1] < 0 ? 0 : output[1];

    this.vx = movespeed * Math.cos(moveangle) * SPEED;
    this.vy = movespeed * Math.sin(moveangle) * SPEED;

    // Large blobs move slower
    this.vx *= Math.max(1 - (this.area / MAX_AREA), MIN_SPEED / SPEED);
    this.vy *= Math.max(1 - (this.area / MAX_AREA), MIN_SPEED / SPEED);

    this.x += this.vx;
    this.y += this.vy;

    // Limit position to width and height
    this.x = this.x >= WIDTH ? this.x % WIDTH : this.x <= 0 ? this.x + WIDTH : this.x;
    this.y = this.y >= HEIGHT ? this.y % HEIGHT : this.y <= 0 ? this.y + HEIGHT : this.y;

    this.area *= DECREASE_SIZE;

    // Replace highest score to visualise
    this.brain.score = this.area;
    this.info.highestScore = this.brain.score > this.info.highestScore ? this.brain.score : this.info.highestScore;
  }

  /** Restart from new position */
  restart() {
    this.x = Math.floor(Math.random() * WIDTH);
    this.y = Math.floor(Math.random() * HEIGHT);
    this.vx = 0;
    this.vy = 0;
    this.area = MIN_AREA;
    this.visualarea = this.area;
  }

  /** Display the player on the field */
  show() {
    this.visualarea = this.game.ctx.lerp(this.visualarea, this.area, 0.2);
    const radius = Math.sqrt(this.visualarea / Math.PI);
    const color = this.game.activationColor(this.brain.score, this.info.highestScore);

    this.game.ctx.fill(color);
    this.game.ctx.ellipse(this.x, this.y, radius);
  }

  /** Visualies the detection of the brain */
  showDetection(detected) {
    this.game.ctx.noFill();
    for (let object in detected) {
      if(detected.hasOwnProperty(object)) {
        object = detected[object];
        if (object !== 'undefined') {
          this.game.ctx.stroke(object as any instanceof Player ? 'red' : 'lightgreen');
          this.game.ctx.line(this.x, this.y, object['x'], object['y']);
        }
      }

    }

    const color = this.game.activationColor(this.brain.score, this.info.highestScore);
    this.game.ctx.stroke(color);
    this.game.ctx.ellipse(this.x, this.y, DETECTION_RADIUS * 2);
  }

  /* Checks if object can be eaten */
  eat(object) {
    const dist = this.game.distance(this.x, this.y, object.x, object.y);

    const radius1 = Math.sqrt(this.area / Math.PI);
    const radius2 = Math.sqrt(object.area / Math.PI);
    if (dist < (radius1 + radius2) / 2 && this.area > object.area * RELATIVE_SIZE) {
      this.area += object.area;
      object.restart();
      return true;
    }
    return false;
  }

  /** Detect other genomes around */
  detect() {
    // Detect nearest objects
    const nearestPlayers = [];
    const playerDistances = Array.apply(null, Array(PLAYER_DETECTION)).map(Number.prototype.valueOf, Infinity);

    for (let player in this.info.players) {
      if(this.info.players.hasOwnProperty(player)) {
        player = this.info.players[player];
        // if (player === this || this.eat(player)) continue;

        const dist = this.game.distance(this.x, this.y, player['x'], player['y']);
        if (dist < DETECTION_RADIUS) {
          // Check if closer than any other object
          const maxNearestDistance = Math.max.apply(null, playerDistances);
          const index = playerDistances.indexOf(maxNearestDistance);

          if (dist < maxNearestDistance) {
            playerDistances[index] = dist;
            nearestPlayers[index] = player;
          }
        }
      }

    }

    // Detect nearest foods
    const nearestFoods = [];
    const foodDistances = Array.apply(null, Array(FOOD_DETECTION)).map(Number.prototype.valueOf, Infinity);

    for (let food in this.info.foods) {
      if(this.info.foods.hasOwnProperty(food)) {
        food = this.info.foods[food];
        if (this.eat(food)) {continue;}

        const dist = this.game.distance(this.x, this.y, food['x'], food['y']);
        if (dist < DETECTION_RADIUS) {
          // Check if closer than any other object
          const maxNearestDistance = Math.max.apply(null, foodDistances);
          const index = foodDistances.indexOf(maxNearestDistance);

          if (dist < maxNearestDistance) {
            foodDistances[index] = dist;
            nearestFoods[index] = food;
          }
        }
      }

    }

    // Create and normalize input
    let output = [this.area / MAX_AREA];

    for (let i = 0; i < PLAYER_DETECTION; i++) {
      const player = nearestPlayers[i];
      const dist = playerDistances[i];

      if (player === 'undefined') {
        output = output.concat([0, 0, 0]);
      } else {
        output.push(this.game.angleToPoint(this.x, this.y, player.x, player.y) / (2 * Math.PI));
        output.push(dist / DETECTION_RADIUS);
        output.push(player.area / MAX_AREA);
      }
    }

    for (let i = 0; i < FOOD_DETECTION; i++) {
      const food = nearestFoods[i];
      const dist = foodDistances[i];

      if (food === 'undefined') {
        output = output.concat([0, 0]);
      } else {
        output.push(this.game.angleToPoint(this.x, this.y, food.x, food.y) / (2 * Math.PI));
        output.push(dist / DETECTION_RADIUS);
      }
    }
    const mouseDown = Observable.fromEvent(this.game.canvas, 'mousedown');

    mouseDown.subscribe((start: MouseEvent) => {
      if (this.game.distance(start.clientX, start.clientY, this.x, this.y) < Math.sqrt(this.visualarea / Math.PI)) {
        const detected = nearestPlayers.concat(nearestFoods);
        this.showDetection(detected);
      }
    });



    return output;
  }
}
