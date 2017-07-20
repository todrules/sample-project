
import { Injectable } from '@angular/core';

@Injectable()
export class Info {

  private _players: Array<any>;

  get players(): Array<any> {
    return this._players;
  }
  set players(val: Array<any>) {
    this._players = val;
  }

  private _foods: Array<any>;

  get foods (): Array<any> {
    return this._foods;
  }

  set foods (val: Array<any>) {
    this._foods = val;
  }

  private _iteration: number;

  get iteration (): number {
    return this._iteration;
  }

  set iteration (val: number) {
    this._iteration = val;
  }

  private _highestScore: number;

  get highestScore (): number {
    return this._highestScore;
  }

  set highestScore (val: number) {
    this._highestScore = val;
  }

  constructor() {
    this.highestScore = 0;
    this.iteration = 0;
    this.foods = [];
    this.players = [];
  }
}
