import { Injectable } from '@angular/core';
import 'rxjs/add/observable/from';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { ActivationState, ActivationFunc } from '../models'

const initialState: ActivationState = {
  activation: 0
};

@Injectable()
export class ActivationActions {

  public cost$: Observable<any>;
  public source;

  constructor (private storage: Storage) {
  }

  /****************
   * INIT Cost
   ****************/
  public static INIT_ACTIVATION = 'INIT_ACTIVATION';
  public static INIT_ACTIVATION_SUCCESS = 'INIT_ACTIVATION_SUCCESS';
  public static INIT_ACTIVATION_ERROR = 'INIT_ACTIVATION_ERROR';

  public initActivation (initState: ActivationState = initialState) {
    if (this._initActivation(initState)) {
      this._initActivationSuccess(initState);
    }
  };

  private _initActivation (initState: ActivationState): boolean {
 //   this.store.dispatch({
  //    type: ActivationActions.INIT_ACTIVATION,
 //     payload: initState
 //   });
    this.storage.set('activation', initState);
    return true;
  }

  private _initActivationSuccess (state: ActivationState): void {
 //   this.store.dispatch({
 //     type: ActivationActions.INIT_ACTIVATION_SUCCESS,
 //     payload: state
 //   });
  }

  private _initActivationError (errMsg: any) {
 //   this.store.dispatch(ActivationActions.handleError(errMsg, ActivationActions.INIT_ACTIVATION_ERROR));
    return Observable.create(errMsg);
  }

  /****************
   * LOGISTIC
   ****************/
  public static LOGISTIC = function (x, derivate) {
    let fx = 1 / (1 + Math.exp(-x));
    if (derivate) {
      fx = fx * (1 - fx);
    }
    return fx;
  };

  public static logistic: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = 1 / (1 + Math.exp(-x));
    if (derivate) {
      fx = fx * (1 - fx);
    }
    return fx;
  };

  private _logistic (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.LOGISTIC,
 //     payload: fx
 //   });
  }

  /****************
   * TANH
   ****************/
  public static TANH = 'TANH';

  public tanh: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = Math.tanh(x);
    if (derivate) {
      fx = 1 - Math.pow(fx, 2);
    }
    this._tanh(fx);
    return fx;
  };

  private _tanh (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.TANH,
 //     payload: fx
 //   });
  }

  /****************
   * IDENTITY
   ****************/
  public static IDENTITY = 'IDENTITY';

  public identity: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = x;
    if (derivate) {
      fx = 1;
    }
    this._identity(fx);
    return fx;
  };

  private _identity (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.IDENTITY,
 //     payload: fx
 //   });
  }

  /****************
   * STEP
   ****************/
  public static STEP = 'STEP';

  public step: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = x;
    if (derivate) {
      fx = 0;
    } else {
      fx = fx > 0 ? 1 : 0;
    }
    this._step(fx);
    return fx;
  };

  private _step (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.STEP,
 //     payload: fx
 //   });
  }

  /****************
   * RELU
   ****************/
  public static RELU = 'RELU';

  public relu: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = x;
    if (derivate) {
      fx = fx > 0 ? 1 : 0;
    } else {
      fx = fx > 0 ? fx : 0;
    }
    this._relu(fx);
    return fx;
  };

  private _relu (fx) {
 //   this.store.dispatch({
//     type: ActivationActions.RELU,
 //     payload: fx
 //   });
  }

  /****************
   * SOFTSIGN
   ****************/
  public static SOFTSIGN = 'SOFTSIGN';

  public softsign: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = 1 + Math.abs(x);
    if (derivate) {
      fx = x / Math.pow(fx, 2);
    } else {
      fx = x / fx;
    }
    this._softsign(fx);
    return fx;
  };

  private _softsign (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.SOFTSIGN,
 //     payload: fx
 //   });
  }

  /****************
   * SINUSOID
   ****************/
  public static SINUSOID = 'SINUSOID';

  public sinusoid: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx;
    if (derivate) {
      fx = Math.cos(x);
    } else {
      fx = Math.sin(x);
    }
    this._sinusoid(fx);
    return fx;
  };

  private _sinusoid (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.SINUSOID,
 //     payload: fx
 //   });
  }

  /****************
   * GAUSSIAN
   ****************/
  public static GAUSSIAN = 'GAUSSIAN';

  public gaussian: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = Math.exp(-Math.pow(x, 2));
    if (derivate) {
      fx = (-2 * x * fx);
    }
    this._gaussian(fx);
    return fx;
  };

  private _gaussian (fx) {
 //   this.store.dispatch({
//     type: ActivationActions.GAUSSIAN,
 //     payload: fx
 //   });
  }

  /****************
   * BENT_IDENTITY
   ****************/
  public static BENT_IDENTITY = 'BENT_IDENTITY';

  public bentIdentity: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = Math.sqrt(Math.pow(x, 2) + 1);
    if (derivate) {
      fx = (x / (2 * fx) + 1);
    } else {
      fx = ((fx - 1) / 2) + x;
    }
    this._bentIdentity(fx);
    return fx;
  };

  private _bentIdentity (fx) {
//    this.store.dispatch({
 //     type: ActivationActions.BENT_IDENTITY,
 //     payload: fx
 //   });
  }

  /****************
   * BIPOLAR
   ****************/
  public static BIPOLAR = 'BIPOLAR';

  public bipolar: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = 1;
    if (derivate) {
      fx = 0;
    } else {
      fx = fx > 0 ? fx : -1;
    }
    this._bipolar(fx);
    return fx;
  };

  private _bipolar (fx) {
 //   this.store.dispatch({
//      type: ActivationActions.BIPOLAR,
//      payload: fx
//    });
  }

  /****************
   * BIPOLAR_SIGMOID
   ****************/
  public static BIPOLAR_SIGMOID = 'BIPOLAR_SIGMOID';

  public bipolarSigmoid: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = 2 / (1 + Math.exp(-x)) - 1;
    if (derivate) {
      fx = 1 / 2 * (1 + fx) * (1 - fx);
    }
    this._bipolarSigmoid(fx);
    return fx;
  };

  private _bipolarSigmoid (fx) {
 //   this.store.dispatch({
  //    type: ActivationActions.BIPOLAR_SIGMOID,
 //     payload: fx
 //   });
  }

  /****************
   * HARD_TANH
   ****************/
  public static HARD_TANH = 'HARD_TANH';

  public hardTanh: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx;
    if (derivate) {
      fx = (x > -1 && x < 1) ? 1 : 0;
    } else {
      fx = Math.max(-1, Math.min(1, x));
    }
    this._hardTanh(fx);
    return fx;
  };

  private _hardTanh (fx) {
 //   this.store.dispatch({
  //    type: ActivationActions.HARD_TANH,
 //     payload: fx
 //   });
  }

  /****************
   * ABSOLUTE
   ****************/
  public static ABSOLUTE = 'ABSOLUTE';

  public absolute: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx;
    if (derivate) {
      fx = x < 0 ? -1 : 1;
    } else {
      fx = Math.abs(x);
    }
    this._absolute(fx);
    return fx;
  };

  private _absolute (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.ABSOLUTE,
 //     payload: fx
 //   });
  }

  /****************
   * INVERSE
   ****************/
  public static INVERSE = 'INVERSE';

  public inverse: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    let fx = -1;
    if (!derivate) {
      fx = 1 - x;
    }
    this._inverse(fx);
    return fx;
  };

  private _inverse (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.INVERSE,
 //     payload: fx
 //   });
  }

  /****************
   * SELU
   * @link https://arxiv.org/pdf/1706.02515.pdf
   ****************/
  public static SELU = 'SELU';

  public selu: ActivationFunc = (x: number, derivate: boolean): ActivationState => {
    const alpha = 1.6732632423543772848170429916717;
    const scale = 1.0507009873554804934193349852946;
    let fx = x > 0 ? x : alpha * Math.exp(x) - alpha;
    if (derivate) {
      fx = x > 0 ? scale : (fx + alpha) * scale;
    } else {
      fx = fx * scale;
    }
    this._selu(fx);
    return fx;
  };

  private _selu (fx) {
 //   this.store.dispatch({
 //     type: ActivationActions.SELU,
 //     payload: fx
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
