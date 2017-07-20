import { Injectable } from '@angular/core';
import 'rxjs/add/observable/from';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
// import { RateState } from './rate.models';

const initialState = {};

@Injectable()
export class LearningRateActions {

  public rate$: Observable<any>;
  public source;

  constructor (private storage: Storage) {
  }

  /****************
   * INIT Rate
   ****************/
  public static INIT_RATE = 'INIT_RATE';
  public static INIT_RATE_SUCCESS = 'INIT_RATE_SUCCESS';
  public static INIT_RATE_ERROR = 'INIT_RATE_ERROR';

  public initRate (initState = initialState) {
    if (this._initRate(initState)) {
      this._initRateSuccess(initState);
    }
  }

  private _initRate (initState): boolean {
 //   this.store.dispatch({
 //     type: RateActions.INIT_RATE,
//      payload: initState
//    });
    this.storage.set('rate', initState);
    return true;
  }

  private _initRateSuccess (state): void {
 //   this.store.dispatch({
//      type: RateActions.INIT_RATE_SUCCESS,
 //     payload: state
 //   });

  }

  private _initRateError (errMsg: any) {
 //   this.store.dispatch(RateActions.handleError(errMsg, RateActions.INIT_RATE_ERROR));
    return Observable.create(errMsg);
  }

  /****************
   * FIXED
   ****************/
  public static FIXED = function () {
    return function(baseRate, iteration) { return baseRate; };
  };

  public fixed (baseRate, iteration) {
    this._fixed(baseRate);
    return baseRate;
  }

  private _fixed (baseRate) {
  //  this.store.dispatch({
 //     type: RateActions.FIXED,
 //     payload: baseRate
//    });
  }

  /****************
   * STEP
   ****************/
  public static STEP = 'STEP';

  public step (gamma, stepSize) {
    const newgamma = gamma || 0.9;
    const newstep = stepSize || 100;
    this._step(gamma);
    return stepSize;
  }

  private _step (baseRate) {
//    this.store.dispatch({
 //     type: RateActions.STEP,
//      payload: baseRate
 //   });
  }

  public static RMSProp = function () {
    return function (cache, decay) {
      cache = decay * cache + (1 - decay) ;
    }
  }

  public static INV = function (base, iteration, gamma, power) {
      return base * Math.pow(1 + gamma * iteration, -power);
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
