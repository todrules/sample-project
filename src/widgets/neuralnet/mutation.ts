import { MutationType } from './models';
import { ActivationActions } from './actions/activation.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class Mutation {

  public static ADD_NODE: MutationType = {
    name: 'ADD_NODE'
  };

  public static SUB_NODE: MutationType = {
    name: 'SUB_NODE',
    keep_gates: true
  };

  public static ADD_CONN: MutationType = {
    name: 'ADD_CONN'
  };

  public static SUB_CONN: MutationType = {
    name: 'REMOVE_CONN'
  };

  public static MOD_WEIGHT: MutationType = {
    name: 'MOD_WEIGHT',
    min: -1,
    max: 1
  };

  public static MOD_BIAS: MutationType = {
    name: 'MOD_BIAS',
    min: -1,
    max: 1
  };

  public static MOD_ACTIVATION: MutationType = {
    name: 'MOD_ACTIVATION',
    mutateOutput: true,
    allowed: [
      ActivationActions.LOGISTIC,
      ActivationActions.TANH,
      ActivationActions.RELU,
      ActivationActions.IDENTITY,
      ActivationActions.STEP,
      ActivationActions.SOFTSIGN,
      ActivationActions.SINUSOID,
      ActivationActions.GAUSSIAN,
      ActivationActions.BENT_IDENTITY,
      ActivationActions.BIPOLAR,
      ActivationActions.BIPOLAR_SIGMOID,
      ActivationActions.HARD_TANH,
      ActivationActions.ABSOLUTE,
      ActivationActions.INVERSE,
      ActivationActions.SELU
    ]
  };

  public static ADD_SELF_CONN: MutationType = {
    name: 'ADD_SELF_CONN'
  };

  public static SUB_SELF_CONN: MutationType = {
    name: 'SUB_SELF_CONN'
  };

  public static ADD_GATE: MutationType = {
    name: 'ADD_GATE'
  };

  public static SUB_GATE: MutationType = {
    name: 'SUB_GATE'
  };

  public static ADD_BACK_CONN: MutationType = {
    name: 'ADD_BACK_CONN'
  };

  public static SUB_BACK_CONN: MutationType = {
    name: 'SUB_BACK_CONN'
  };

  public static SWAP_NODES: MutationType = {
    name: 'SWAP_NODES',
    mutateOutput: true
  };

  public static ALL: MutationType[] = [
    Mutation.ADD_NODE,
    Mutation.SUB_NODE,
    Mutation.ADD_CONN,
    Mutation.SUB_CONN,
    Mutation.MOD_WEIGHT,
    Mutation.MOD_BIAS,
    Mutation.MOD_ACTIVATION,
    Mutation.ADD_GATE,
    Mutation.SUB_GATE,
    Mutation.ADD_SELF_CONN,
    Mutation.SUB_SELF_CONN,
    Mutation.ADD_BACK_CONN,
    Mutation.SUB_BACK_CONN,
    Mutation.SWAP_NODES
  ];

  public static FFW: MutationType[] = [
    Mutation.ADD_NODE,
    Mutation.SUB_NODE,
    Mutation.ADD_CONN,
    Mutation.SUB_CONN,
    Mutation.MOD_WEIGHT,
    Mutation.MOD_BIAS,
    Mutation.MOD_ACTIVATION,
    Mutation.SWAP_NODES
  ];

}
