import { EventEmitter, Injectable, Output } from '@angular/core';
import { Group } from './group';
import { MemOptions } from './models';
import { StaticConnection, StaticGating } from './data/config';
import { NeuralNet } from './neuralnet';
import { Neuron } from './neuron';
import { CostActions } from './actions/cost.actions';
import { LearningRateActions } from './actions/learning-rate.actions';
import * as seedrandom from 'seedrandom';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LSTM {

  @Output() onIteration = new EventEmitter<any>();

  public inputsize: number;
  public outputsize: number;
  public neurons = [];
  public connections = [];
  public gates = [];
  public selfconns = [];
  public dropout = 0;
  public score;
  public hiddensize;
  public numMemBlocks;
  public memBlockSize;
  public origInput = 0;
  public origOutput = 0;
  public loss;
  public iteration;
  public lr;
  public stats: Subject<any> = new Subject<any>();
  public stat$: Observable<any>;
  constructor(inputSize: number, outputSize: number, numMemoryBlocks: number, memBlockSize: number) {
    this.origInput = inputSize;
    this.origOutput = outputSize;
    this.numMemBlocks = numMemoryBlocks;
    this.memBlockSize = memBlockSize;

    this.lr = [];
    this.loss = [];
    this.stat$ = this.stats.asObservable();
    return this.init(inputSize, outputSize, numMemoryBlocks, memBlockSize);
  }

  init(inputSize: number, outputSize: number, numMemoryBlocks: number, memBlockSize: number) {
  //  console.log('init LSTM');
  //  console.log(inputSize, outputSize);

 //   console.log('create Input layer');
    const inputLayer = new Group(inputSize);

    inputLayer.set({
      type: 'input'
    });

 //   console.log('create Output layer');
    const outputLayer = new Group(outputSize);

    outputLayer.set({
      type: 'output'
    });

    const options: MemOptions = {};
    options.memoryToMemory = false;
    options.outputToMemory = false;
    options.outputToGates = false;
    options.inputToOutput = true;
    options.inputToDeep = true;

    const neurons = [];
    neurons.push(inputLayer);

    let previous = inputLayer;
    for (let i = 0; i < numMemoryBlocks; i++) {
   //   console.log('numMemoryBlocks: ' + numMemoryBlocks);
   //   console.log('memBlockSize: ' + memBlockSize);
    //  console.log('i: ' + i);
    //  console.log('creating Memory Blocks');

   //   console.group();
   //   console.info('creating inputGate');
      const inputGate = new Group(memBlockSize);
   //   console.groupEnd();

  //    console.group();
  //    console.info('creating forgetGate');
      const forgetGate = new Group(memBlockSize);
  //    console.groupEnd();

  //    console.group();
  //    console.info('creating memoryCell');
      const memoryCell = new Group(memBlockSize);
   //   console.groupEnd();

  //    console.group();
   //   console.info('creating outputGate');
      const outputGate = new Group(memBlockSize);
  //    console.groupEnd();

  //    console.group();
  //    console.info('creating outputBlock');
      const outputBlock = i === numMemoryBlocks - 1 ? outputLayer : new Group(memBlockSize);
  //    console.groupEnd();

      inputGate.set({
        bias: 1
      });
      forgetGate.set({
        bias: 1
      });
      outputGate.set({
        bias: 1
      });

      // Connect the input with all the neurons
      const input = previous.connectGroup(memoryCell, StaticConnection.ALL_TO_ALL);
      previous.connectGroup(inputGate, StaticConnection.ALL_TO_ALL);
      previous.connectGroup(outputGate, StaticConnection.ALL_TO_ALL);
      previous.connectGroup(forgetGate, StaticConnection.ALL_TO_ALL);

      // Set up internal connections
      memoryCell.connectGroup(inputGate, StaticConnection.ALL_TO_ALL);
      memoryCell.connectGroup(forgetGate, StaticConnection.ALL_TO_ALL);
      memoryCell.connectGroup(outputGate, StaticConnection.ALL_TO_ALL);
      const forget = memoryCell.connectGroup(memoryCell, StaticConnection.ONE_TO_ONE);
      const output = memoryCell.connectGroup(outputBlock, StaticConnection.ALL_TO_ALL);

      // Set up gates
      inputGate.gate(input, StaticGating.INPUT);
      forgetGate.gate(forget, StaticGating.SELF);
      outputGate.gate(output, StaticGating.OUTPUT);

      // Input to all memory cells
      if (options.inputToDeep && i > 0) {
        const inputConn = inputLayer.connectGroup(memoryCell, StaticConnection.ALL_TO_ALL);
        inputGate.gate(inputConn, StaticGating.INPUT);
      }

      // Optional connections
      if (options.memoryToMemory) {
        const inputConn = memoryCell.connectGroup(memoryCell, StaticConnection.ALL_TO_ELSE);
        inputGate.gate(inputConn, StaticGating.INPUT);
      }

      if (options.outputToMemory) {
        const inputConn = outputLayer.connectGroup(memoryCell, StaticConnection.ALL_TO_ALL);
        inputGate.gate(inputConn, StaticGating.INPUT);
      }

      if (options.outputToGates) {
        outputLayer.connectGroup(inputGate, StaticConnection.ALL_TO_ALL);
        outputLayer.connectGroup(forgetGate, StaticConnection.ALL_TO_ALL);
        outputLayer.connectGroup(outputGate, StaticConnection.ALL_TO_ALL);
      }

      // Add to array
      neurons.push(inputGate);
      neurons.push(forgetGate);
      neurons.push(memoryCell);
      neurons.push(outputGate);
      if (i !== numMemoryBlocks - 1) {
        neurons.push(outputBlock);
      }
   //   console.log(neurons);
      previous = outputBlock;
    }

    // input to output direct connection
    if (options.inputToOutput) {
      inputLayer.connectGroup(outputLayer, StaticConnection.ALL_TO_ALL);
    }

    neurons.push(outputLayer);
  //  console.log(neurons);
   return this.create(neurons);
  //  return neurons;
  }

  public create (list) {

    // Transform all groups into neurons
    let neurons = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i] instanceof Group) {
        for (let j = 0; j < list[i].neurons.length; j++) {
   //       console.log('push neuron');
          neurons.push(list[i].neurons[j]);
   //       console.log('neurons: ');
   //       console.log(neurons);
        }
      } else if (list[i] instanceof Neuron) {
  //      console.log('push neuron');
        neurons.push(list[i]);
      }
    }

    // Determine input and output neurons
    const inputs = [];
    const outputs = [];
    for (let i = neurons.length - 1; i >= 0; i--) {
      if (neurons[i].type === 'output' || neurons[i].connections.out.length + neurons[i].connections.gated.length === 0) {
        neurons[i].type = 'output';
        this.outputsize++;
        outputs.push(neurons[i]);
        neurons.splice(i, 1);
      } else if (neurons[i].type === 'input' || !neurons[i].connections.in.length) {
        neurons[i].type = 'input';
        this.inputsize++;
        inputs.push(neurons[i]);
        neurons.splice(i, 1);
      }
 //     console.log(neurons);
    }

    // Input neurons are always first, output neurons are always last
    neurons = inputs.concat(neurons).concat(outputs);
 //   console.log(neurons);
    if (this.inputsize === 0 || this.outputsize === 0) {
      throw new Error('Given neurons have no clear input/output node!');
    }
    for (let i = 0; i < neurons.length; i++) {
      for (let j = 0; j < neurons[i].connections.out.length; j++) {
        this.connections.push(neurons[i].connections.out[j]);
      }
      for (let j = 0; j < neurons[i].connections.gated.length; j++) {
        this.gates.push(neurons[i].connections.gated[j]);
      }
      if (neurons[i].connections.self.weight !== 0) {
        this.selfconns.push(neurons[i].connections.self);
      }
    }
    this.neurons = neurons;
 //   console.log(this);
    return this;

  }

  train (set, options?) {


    if (+set[0].input.length !== +this.origInput || +set[0].output.length !== +this.origOutput) {
      console.warn('Dataset input/output size should be same as network input/output size!');
    }

    this.loss = [];
    this.lr = [];
    options = options || {};

    // Configure given options
    const targetError = options.error || 0.05;
    const cost = options.cost || CostActions.MSE;
    const baseRate = options.rate || 0.3;
    const iterations = options.iterations || 100;
    const dropout = options.dropout || 0;
    const momentum = options.momentum || 0;
    const ratePolicy = options.ratePolicy || LearningRateActions.INV;
    const gamma = options.gamma || 0.001;
    const power = options.power || 2;
    const start = Date.now();

    this.dropout = dropout;
    console.log(baseRate);
    // Loops the training process
    let currentRate = baseRate;
    let iteration = 0;
    let error = 1;

    while (error > targetError && (iterations === 0 || iteration < iterations)) {

      iteration++;
    //  console.log(iteration);
      // Update the rate
      currentRate = ratePolicy(baseRate, iteration, gamma, power);
    //  console.log('rate: ' + currentRate);
      error = 0;
      error += this._trainSet(set, currentRate, momentum, cost);
      this.loss.push({name: iteration, value: error});
      this.lr.push({ name: iteration, value: currentRate });

      this.stats.next({
        loss: this.loss,
        lr: this.lr
      });
    //  console.log('error: ' + error);

    }
    console.log('done');
    // Creates an object of the results
    console.log({
      error: error,
      iterations: iteration,
      time: Date.now() - start});
    return {
      error: error,
      iterations: iteration,
      time: Date.now() - start
    };

  }

  _trainSet (set, currentRate, momentum, costFunction) {
    let errorSum = 0;
    for (let i = 0; i < set.length; i++) {
      const input = set[i].input;
      const target = set[i].output;
      const update = (i + 1) === set.length;
      const output = this.activate(input, true);
      this.propagate(currentRate, momentum, update, target);

      errorSum += costFunction(target, output);
    }
    return errorSum / set.length;
  }

  test (set, cost) {
    // Check if dropout is enabled, set correct mask

    if (this.dropout) {
      for (let i = 0; i < this.neurons.length; i++) {
        if (this.neurons[i].type === 'hidden' || this.neurons[i].type === 'constant') {
          this.neurons[i].mask = 1 - this.dropout;
        }
      }
    }

    cost = cost || CostActions.MSE;
    let error = 0;
    const start = Date.now();

    for (let i = 0; i < set.length; i++) {
      const input = set[i].input;
      const target = set[i].output;
      const output = this.activate(input);
      error += cost(target, output);
    }

    error /= set.length;

    return {
      error: error,
      time: Date.now() - start
    };
  }

  clear () {
    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].clear();
    }
  }

  activate (input, training?) {
    const output = [];
    // Activate neurons chronologically
    for (let i = 0; i < this.neurons.length; i++) {
      if (this.neurons[i].type === 'input') {
        this.neurons[i].activateNeuron(input[i]);
      } else if (this.neurons[i].type === 'output') {
        const activation = this.neurons[i].activateNeuron();
        output.push(activation);
      } else {
        const rand = seedrandom.alea(Math.random());
        if (training) {this.neurons[i].mask = 1;}
        this.neurons[i].activateNeuron();
      }
    }
    return output;
  }

  /**
   * Backpropagate the network
   */
  propagate (rate, momentum, update, target) {
   // console.log('start propagate');
    if (typeof target !== 'undefined' && +target.length !== +this.origOutput) {
      throw new Error('Output target length should match network output length');
    }

    let targetIndex = target.length;
   // console.log(targetIndex);
  //  console.log(rate);
  //  console.log(momentum);
    // Propagate output neurons
    for (let i = this.neurons.length - 1; i >= this.neurons.length - this.origOutput; i--) {
      this.neurons[i].propagateNeuron(rate, momentum, update, target[--targetIndex]);
    }

    // Propagate hidden and input neurons
    for (let i = this.neurons.length - this.origOutput - 1; i >= this.origInput; i--) {
      this.neurons[i].propagateNeuron(rate, momentum, update);
    }
  }

}
