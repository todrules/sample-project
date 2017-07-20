import { Injectable } from '@angular/core';
import { Neuron } from './neuron';
import * as seedrandom from 'seedrandom';
import { Group } from './group';
import { Mutation } from './mutation';
import { Network } from './network';

@Injectable()
export class NeuralNet {

  public inputsize: number;
  public outputsize: number;
  public neurons = [];
  public connections = [];
  public gates = [];
  public selfconns = [];
  public dropout = 0;
  public score;
  public hiddensize;

  constructor (inputSize: number, outputSize: number) {
    console.log('Creating Network');
    /*
    if (!inputSize || !outputSize) {
      throw new Error('No input or output size given');
    } else {
      this.inputsize = inputSize;
      this.outputsize = outputSize;
      this.hiddensize = this.inputsize + this.outputsize;
    }
    for (let i = 0; i < this.hiddensize; i++) {
      const type = (i < this.inputsize) ? 'input' : 'output';
      this.neurons.push(new Neuron(type));
    }

    // Connect input neurons with output neurons directly
    for (let i = 0; i < this.inputsize; i++) {
      for (let j = this.inputsize; j < this.hiddensize; j++) {
        const rand = seedrandom.alea(Math.random());
        const weight = rand() * this.inputsize * Math.sqrt(2 / this.inputsize);
        this.connectNetwork(this.neurons[i], this.neurons[j], weight);
      }
    }
    */
  }

  public connectNetwork (origNeuron, destNeuron, weight?) {
  //  console.log('Connecting Network');
    const connections = origNeuron.connectNeurons(destNeuron, weight);

    for (let i = 0; i < connections.length; i++) {
      if (origNeuron !== destNeuron) {
        this.connections.push(connections[i]);
      } else {
        this.selfconns.push(connections[i]);
      }
    }
    return connections;
  }

  public create (list) {
    // Create a network
    const network = new NeuralNet(0, 0);

    // Transform all groups into neurons
    let neurons = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i] instanceof Group) {
        for (let j = 0; j < list[i].neurons.length; j++) {
          console.log('push neuron');
          neurons.push(list[i].neurons[j]);
          console.log('neurons: ');
          console.log(neurons);
        }
      } else if (list[i] instanceof Neuron) {
        console.log('push neuron');
        neurons.push(list[i]);
      }
    }

    // Determine input and output neurons
    const inputs = [];
    const outputs = [];
    for (let i = neurons.length - 1; i >= 0; i--) {
      if (neurons[i].type === 'output' || neurons[i].connections.out.length + neurons[i].connections.gated.length === 0) {
        neurons[i].type = 'output';
        network.outputsize++;
        outputs.push(neurons[i]);
        neurons.splice(i, 1);
      } else if (neurons[i].type === 'input' || !neurons[i].connections.in.length) {
        neurons[i].type = 'input';
        network.inputsize++;
        inputs.push(neurons[i]);
        neurons.splice(i, 1);
      }
      console.log(neurons);
    }

    // Input neurons are always first, output neurons are always last
    neurons = inputs.concat(neurons).concat(outputs);
    console.log(neurons);
    if (network.inputsize === 0 || network.outputsize === 0) {
      throw new Error('Given neurons have no clear input/output node!');
    }
    for (let i = 0; i < neurons.length; i++) {
      for (let j = 0; j < neurons[i].connections.out.length; j++) {
        network.connections.push(neurons[i].connections.out[j]);
      }
      for (let j = 0; j < neurons[i].connections.gated.length; j++) {
        network.gates.push(neurons[i].connections.gated[j]);
      }
      if (neurons[i].connections.self.weight !== 0) {
        network.selfconns.push(neurons[i].connections.self);
      }
    }
    network.neurons = neurons;
    console.log(network);
    return network;

  }

  init(inputSize: number, outputSize: number, numMemoryBlocks: number, memBlockSize: number) {

  }

  public static initRandom (input, hidden, output?, options?) {
    options = options || {};

    const connections = options.connections || hidden * 2;
    const backconnections = options.backconnections || 0;
    const selfconnections = options.selfconnections || 0;
    const gates = options.gates || 0;

    const network = new Network(input, output);

    for (let i = 0; i < hidden; i++) {
      network.mutate(Mutation.ADD_NODE);
    }

    for (let i = 0; i < connections - hidden; i++) {
      network.mutate(Mutation.ADD_CONN);
    }

    for (let i = 0; i < backconnections; i++) {
      network.mutate(Mutation.ADD_BACK_CONN);
    }

    for (let i = 0; i < selfconnections; i++) {
      network.mutate(Mutation.ADD_SELF_CONN);
    }

    for (let i = 0; i < gates; i++) {
      network.mutate(Mutation.ADD_GATE);
    }

    return network;

  }

}
