import { Injectable } from '@angular/core';
import { Connection } from './connection';
import * as seedrandom from 'seedrandom';
import { ActivationActions } from './actions/activation.actions';

@Injectable()
export class Neuron {

  public bias;
  public squash;
  public type;
  public activation = 0;
  public state = 0;
  public old = 0;
  public mask = 1;
  public uuid;
  public previousDeltaBias = 0;
  public totalDeltaBias = 0;
  public derivative;
  public loss = {
    responsibility: 0,
    projected: 0,
    gated: 0
  };
  public rand;
  public guid;
  public connections = {
    in: [],
    out: [],
    gated: [],
    self: null
  };

  constructor (public neurontype?: string) {
  //  console.log('creating Neuron');
    this.squash = ActivationActions.LOGISTIC;
    this.rand = seedrandom.alea(Math.random());
    this.uuid = this.rand();
    this.rand = seedrandom.alea(this.uuid);
    this.bias = (neurontype === 'input') ? 0 : this.rand() * 0.2 - 0.1;
  //  this.squash = ActivationActions.LOGISTIC;
    this.type = neurontype || 'hidden';
    this.connections = {
      in: [],
      out: [],
      gated: [],
      self: new Connection(this, this, 0)
    };
  }

  public connectNeurons (target, weight) {
  //  console.log('Connecting Neurons');
    const myconnections = [];
    if (target.bias) { // must be a node!
      if (target === this) {
        // Turn on the self connection by setting the weight
        if (this.connections.self.weight !== 0) {
          console.warn('This connection already exists!');
        } else {
          this.connections.self.weight = weight || 1;
        }
        myconnections.push(this.connections.self);
      } else if (this.isProjectingTo(target)) {
        throw new Error('Already projecting a connection to this node!');
      } else {
        const connection = new Connection(this, target, weight);
        target.connections.in.push(connection);
        this.connections.out.push(connection);

        myconnections.push(connection);
      }
    } else { // should be a group
      for (let i = 0; i < target.nodes.length; i++) {
        const connect = new Connection(this, target.nodes[i], weight);
        target.nodes[i].connections.in.push(connect);
        this.connections.out.push(connect);
        target.connections.in.push(connect);

        myconnections.push(connect);
      }
    }
    return myconnections;
  }

  public isProjectingTo (neuron) {
    for (let i = 0; i < this.connections.out.length; i++) {
      const conn = this.connections.out[i];
      if (conn.to === neuron) {
        return true;
      }
    }
    return (neuron === this && this.connections.self.weight !== 0);
  }

  gate(connections) {
    if (!Array.isArray(connections)) {
      connections = [connections];
    }

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];

      this.connections.gated.push(connection);
      connection.gater = this;
    }
  }

  public activateNeuron (input?) {
    // Check if an input is given
    if (input) {
      this.activation = input;
      return input;
    }
    this.old = this.state;

    // All activation sources coming from the node itself
    this.state = this.connections.self.gain * this.connections.self.weight * this.state + this.bias;
    // Activation sources coming from connections
    for (let i = 0; i < this.connections.in.length; i++) {
      this.state += this.connections.in[i].originatingNode.activation * this.connections.in[i].weight * this.connections.in[i].gain;
    }

    // Squash the values received
    this.activation = this.squash(this.state) * this.mask;
    this.derivative = this.squash(this.state, true);

    // Update traces
    const nodes = [];
    const influences = [];

    for (let i = 0; i < this.connections.gated.length; i++) {
      const index = nodes.indexOf(this.connections.gated[i].destinationNode);
      if (index > -1) {
        influences[index] += this.connections.gated[i].weight * this.connections.gated[i].originatingNode.activation;
      } else {
        nodes.push(this.connections.gated[i].destinationNode);
        influences.push(this.connections.gated[i].weight * this.connections.gated[i].originatingNode.activation +
          (this.connections.gated[i].destinationNode.connections.self.gater === this ? this.connections.gated[i].destinationNode.old : 0));
      }
      this.connections.gated[i].gain = this.activation;
    }

    for (let i = 0; i < this.connections.in.length; i++) {
      // Elegibility trace
      this.connections.in[i].elegibility =
        (this.connections.self.gain * this.connections.self.weight * this.connections.in[i].elegibility) +
        (this.connections.in[i].originatingNode.activation * this.connections.in[i].gain);

      // Extended trace
      for (let j = 0; j < nodes.length; j++) {
        const index = this.connections.in[i].xtrace.nodes.indexOf(nodes[j]);

        if (index > -1) {
          this.connections.in[i].xtrace.values[index] =
            (nodes[j].connections.self.gain * nodes[j].connections.self.weight * this.connections.in[i].xtrace.values[index]) +
            (this.derivative * this.connections.in[i].elegibility * influences[j]);

        } else {
          this.connections.in[i].xtrace.nodes.push(nodes[j]);
          this.connections.in[i].xtrace.values.push(this.derivative * this.connections.in[i].elegibility * influences[j]);
        }
      }
    }

    return this.activation;
  }

  public propagateNeuron (rate: number, momentum: number, update, target) {
    momentum = momentum || 0;
    rate = rate || 0.3;

    // Error accumulator
    let lossAcc = 0;

    // Output neurons get their error from the enviroment
    if (this.type === 'output') {
      this.loss.responsibility = this.loss.projected = target - this.activation;
    } else { // the rest of the neurons compute their error responsibilities by backpropagation
      // error responsibilities from all the connections projected from this node
      for (let i = 0; i < this.connections.out.length; i++) {
        const connect = this.connections.out[i];
        const node = connect.destinationNode;
        // Eq. 21
        lossAcc += node.loss.responsibility * connect.weight * connect.gain;
      }

      // Projected error responsibility
      this.loss.projected = this.derivative * lossAcc;

      // Error responsibilities from all connections gated by this neuron
      lossAcc = 0;

      for (let i = 0; i < this.connections.gated.length; i++) {
        const conn = this.connections.gated[i];
        const node = conn.destinationNode;
        let influence = node.connections.self.gater === this ? node.old : 0;
        influence += conn.weight * conn.originatingNode.activation;
        lossAcc += node.loss.responsibility * influence;
      }

      // Gated error responsibility
      this.loss.gated = this.derivative * lossAcc;

      // Error responsibility
      this.loss.responsibility = this.loss.projected + this.loss.gated;
    }

    if (this.type === 'constant') {return;}

    // Adjust all the node's incoming connections
    for (let i = 0; i < this.connections.in.length; i++) {
      const incConnection = this.connections.in[i];

      let gradient = this.loss.projected * incConnection.elegibility;

      for (let j = 0; j < incConnection.xtrace.nodes.length; j++) {
        const node = incConnection.xtrace.nodes[j];
        const value = incConnection.xtrace.values[j];
        gradient += node.loss.responsibility * value;
      }

      // Adjust weight
      incConnection.totalDeltaWeight += rate * gradient * this.mask;
      if (update) {
        incConnection.totalDeltaWeight += momentum * incConnection.previousDeltaWeight;
        incConnection.weight += incConnection.totalDeltaWeight;
        incConnection.previousDeltaWeight = incConnection.totalDeltaWeight;
        incConnection.totalDeltaWeight = 0;
      }
    }

    // note: MINI_BATCH SHALL BE OPTIMIZED SOON

    // Adjust bias
    this.totalDeltaBias += rate * this.loss.responsibility;
    if (update) {
      this.totalDeltaBias += momentum * this.previousDeltaBias;
      this.bias += this.totalDeltaBias;
      this.previousDeltaBias = this.totalDeltaBias;
      this.totalDeltaBias = 0;
    }
  }

  public static fromJSON (json) {
    const node = new Neuron();
    node.bias = json.bias;
    node.type = json.type;
    node.mask = json.mask;
    node.squash = ActivationActions[json.squash];
    return node;
  }
}
