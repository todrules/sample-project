import { Injectable } from '@angular/core';
import 'rxjs/add/observable/from';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { CostFunc, CostState } from '../models';

const initialState: CostState = {
  error: 0
};

@Injectable()
export class CostActions {

  public cost$: Observable<any>;
  public source;
  localState = { transition: 'in' };

  constructor (private storage: Storage) {
  }

  /****************
   * INIT Cost
   ****************/
  public static INIT_COST = 'INIT_COST';
  public static INIT_COST_SUCCESS = 'INIT_COST_SUCCESS';
  public static INIT_COST_ERROR = 'INIT_COST_ERROR';

  public initCost (initState: CostState = initialState) {
    if (this._initCost(initState)) {
      this._initCostSuccess(initState);
    }
  };

  private _initCost (initState: CostState): boolean {
 //   this.store.dispatch({
 //     type: CostActions.INIT_COST,
 //     payload: initState
 //   });
    this.storage.set('cost', initState);
    return true;
  }

  private _initCostSuccess (state: CostState): void {
 //   this.store.dispatch({
//      type: CostActions.INIT_COST_SUCCESS,
//      payload: state
//    });
  }

  private _initCostError (errMsg: any) {
//    this.store.dispatch(CostActions.handleError(errMsg, CostActions.INIT_COST_ERROR));
    return Observable.create(errMsg);
  }

  /****************
   * CROSS ENTROPY
   * Cross Entropy Error
   ****************/
  public static CROSS_ENTROPY = 'CROSS_ENTROPY';

  public crossEntropy: CostFunc = (target: number, output: number[]): CostState => {
    let error = 0;
    for (let i = 0; i < output.length; i++) {
      error -= target[i] * Math.log(Math.max(output[i], 1e-15)) + (1 - target[i]) * Math.log(1 - Math.max(output[i], 1e-15));
    }
    this._crossEntropy(error);
    return error;
  };

  private _crossEntropy (error) {
 //   this.store.dispatch({
 //     type: CostActions.CROSS_ENTROPY,
 //     payload: error
 //   });
  }

  /****************
   * MSE
   * Mean Squared Error
   ****************/
  public static MSE = function(target: number, output: number[]) {
    let error = 0;
    for (let i = 0; i < output.length; i++) {
      error += Math.pow(target[i] - output[i], 2);
    }
    return error / output.length;
  };


  public mse: CostFunc = (target: number, output: number[]): CostState => {
    let error = 0;
    for (let i = 0; i < output.length; i++) {
      error += Math.pow(target[i] - output[i], 2);
    }
    error = error / output.length;
    this._mse(error);
    return error;
  };

  private _mse (error) {
 //   this.store.dispatch({
 //     type: CostActions.MSE,
 //     payload: error
 //   });
  }

  /****************
   * BINARY
   * Binary Error
   ****************/
  public static BINARY = 'BINARY';

  public binary: CostFunc = (target: number, output: number[]): CostState => {
    let misses;
    misses = 0;
    for (let i = 0; i < output.length; i++) {
      misses += Math.round(target[i] * 2) !== Math.round(output[i] * 2);
    }
    this._binary(misses);
    return misses;
  };

  private _binary (misses) {
 //   this.store.dispatch({
 //     type: CostActions.BINARY,
 //     payload: misses
 //   });
  }

  /****************
   * MAE
   * Mean Absolute Error
   ****************/
  public static MAE = 'MAE';

  public mae: CostFunc = (target: number, output: number[]): CostState => {
    let error = 0;
    for (let i = 0; i < output.length; i++) {
      error += Math.abs(target[i] - output[i]);
    }
    error = error / output.length;
    this._mae(error);
    return error;
  };

  private _mae (error) {
 //   this.store.dispatch({
 //     type: CostActions.MAE,
 //     payload: error
 //   });
  }

  /****************
   * MAPE
   * Mean Absolute Percentage Error
   ****************/
  public static MAPE = 'MAPE';

  public mape: CostFunc = (target: number, output: number[]): CostState => {
    let error = 0;
    for (let i = 0; i < output.length; i++) {
      error += Math.abs((output[i] - target[i]) / Math.max(target[i], 1e-15));
    }
    error = error / output.length;
    this._mape(error);
    return error;
  };

  private _mape (error) {
//    this.store.dispatch({
 //     type: CostActions.MAPE,
 //     payload: error
//    });
  }

  /****************
   * MSLE
   * Mean Squared Logarithmic Error
   ****************/
  public static MSLE = 'MSLE';

  public msle: CostFunc = (target: number, output: number[]): CostState => {
    let error = 0;
    for (let i = 0; i < output.length; i++) {
      error += Math.log(Math.max(target[i], 1e-15)) - Math.log(Math.max(output[i], 1e-15));
    }
    this._msle(error);
    return error;
  };

  private _msle (error) {
//    this.store.dispatch({
//      type: CostActions.MSLE,
//      payload: error
 //   });
  }

  /****************
   * HINGE
   * Hinge Loss - for classifiers
   ****************/
  public static HINGE = 'HINGE';

  public hinge: CostFunc = (target: number, output: number[]): CostState => {
    let error = 0;
    for (let i = 0; i < output.length; i++) {
      error += Math.max(0, 1 - target[i] * output[i]);
    }
    this._hinge(error);
    return error;
  };

  private _hinge (error) {
 //   this.store.dispatch({
 //     type: CostActions.HINGE,
 //     payload: error
 //   });
  }

  /****************
   * HELPER METHODS
   ****************/

  static handleError (errMsg: string, type: string) {
    return {
      type: type,
      payload: errMsg
    };
  }

}
