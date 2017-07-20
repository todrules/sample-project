/* tslint:disable */

import { Injectable } from '@angular/core';
import { Mutation } from './mutation';
import { Connection } from './connection';
import * as Config from './data/config';
import { Neuron } from './neuron';
import { CostActions } from './actions/cost.actions';
import { LearningRateActions } from './actions/learning-rate.actions';
import { Layer } from './layer';
import { Group } from './group';
import { Evo } from '../game/evo';

@Injectable()
export class Network {

  public inputsize;
  public outputsize;
  public neurons = [];
  public connections = [];
  public gates = [];
  public selfconns = [];
  public dropout = 0;
  public score;
  constructor (inputSize: number, outputSize: number) {
    if (!inputSize || !outputSize) {
      throw new Error('No input or output size given');
    } else {
      this.inputsize = inputSize;
      this.outputsize = outputSize;
    }
    for (let i = 0; i < this.inputsize + this.outputsize; i++) {
      const type = (i < this.inputsize) ? 'input' : 'output';
      this.neurons.push(new Neuron(type));
    }

    // Connect input neurons with output neurons directly
    for (let i = 0; i < this.inputsize; i++) {
      for (let j = this.inputsize; j < this.outputsize + this.inputsize; j++) {
        // https://stats.stackexchange.com/a/248040/147931
        const weight = Math.random() * this.inputsize * Math.sqrt(2 / this.inputsize);
        this.connect(this.neurons[i], this.neurons[j], weight);
      }
    }
  }

  public static create (list) {
    // Create a network
    const network = new Network(0, 0);

    // Transform all groups into neurons
    let nodes = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i] instanceof Group) {
        for (let j = 0; j < list[i].nodes.length; j++) {
          nodes.push(list[i].nodes[j]);
        }
      } else if (list[i] instanceof Layer) {
        for (let j = 0; j < list[i].nodes.length; j++) {
          for (let k = 0; k < list[i].nodes[j].nodes.length; k++) {
            nodes.push(list[i].nodes[j].nodes[k]);
          }
        }
      } else if (list[i] instanceof Neuron) {
        nodes.push(list[i]);
      }
    }

    // Determine input and output neurons
    const inputs = [];
    const outputs = [];
    for (let i = nodes.length - 1; i >= 0; i--) {
      if (nodes[i].type === 'output' || nodes[i].connections.out.length + nodes[i].connections.gated.length === 0) {
        nodes[i].type = 'output';
        network.outputsize++;
        outputs.push(nodes[i]);
        nodes.splice(i, 1);
      } else if (nodes[i].type === 'input' || !nodes[i].connections.in.length) {
        nodes[i].type = 'input';
        network.inputsize++;
        inputs.push(nodes[i]);
        nodes.splice(i, 1);
      }
    }

    // Input neurons are always first, output neurons are always last
    nodes = inputs.concat(nodes).concat(outputs);

    if (network.inputsize === 0 || network.outputsize === 0) {
      throw new Error('Given neurons have no clear input/output node!');
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes[i].connections.out.length; j++) {
        network.connections.push(nodes[i].connections.out[j]);
      }
      for (let j = 0; j < nodes[i].connections.gated.length; j++) {
        network.gates.push(nodes[i].connections.gated[j]);
      }
      if (nodes[i].connections.self.weight !== 0) {
        network.selfconns.push(nodes[i].connections.self);
      }
    }
    network.neurons = nodes;
    return network;

  }
  /**
   * Activates the network
   */
  activate (actInputSize, training?) {
    const actOutputSize = [];
    // Activate neurons chronologically
    for (let i = 0; i < this.neurons.length; i++) {
      if (this.neurons[i].type === 'input') {
        this.neurons[i].activate(actInputSize[i]);
      } else if (this.neurons[i].type === 'output') {
        const activation = this.neurons[i].activate();
        actOutputSize.push(activation);
      } else {
        if (training) {this.neurons[i].mask = Math.random() < this.dropout ? 0 : 1;}
        this.neurons[i].activate();
      }
    }
    return actOutputSize;
  }

  /**
   * Backpropagate the network
   */
  propagate (rate, momentum, update, target) {
    if (typeof target !== 'undefined' && target.length !== this.outputsize) {
      throw new Error('Output target length should match network output length');
    }

    let targetIndex = target.length;

    // Propagate output neurons
    for (let i = this.neurons.length - 1; i >= this.neurons.length - this.outputsize; i--) {
      this.neurons[i].propagate(rate, momentum, update, target[--targetIndex]);
    }

    // Propagate hidden and input neurons
    for (let i = this.neurons.length - this.outputsize - 1; i >= this.inputsize; i--) {
      this.neurons[i].propagate(rate, momentum, update);
    }
  }

  /**
   * Clear the context of the network
   */
  clear () {
    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].clear();
    }
  }

  /**
   * Connects the from node to the to node
   */
  public connect (from, to, weight?) {
    const connections = from.connect(to, weight);

    for (let i = 0; i < connections.length; i++) {
      if (from !== to) {
        this.connections.push(connections[i]);
      } else {
        this.selfconns.push(connections[i]);
      }
    }
    return connections;
  }

  /**
   * Disconnects the from node from the to node
   */
  disconnect (from, to) {
    // Deconste the connection in the network's connection array
    const connections = from === to ? this.selfconns : this.connections;

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (connection.from === from && connection.to === to) {
        if (connection.gater !== null) {this.ungate(connection);}
        connections.splice(i, 1);
        break;
      }
    }

    // Deconste the connection at the sending and receiving neuron
    from.disconnect(to);
  }

  /**
   * Gate a connection with a node
   */
  gate (node, connection) {
    if (this.neurons.indexOf(node) === -1) {
      throw new Error('This node is not part of the network!');
    } else if (connection.gater != null) {
      if (Config.warnings) {console.warn('This connection is already gated!');}
      return;
    }
    node.gate(connection);
    this.gates.push(connection);
  }

  /**
   *  Remove the gate of a connection
   */
  ungate (connection) {
    const index = this.gates.indexOf(connection);
    if (index === -1) {
      throw new Error('This connection is not gated!');
    }

    this.gates.splice(index, 1);
    connection.gater.ungate(connection);
  }

  /**
   *  Removes a node from the network
   */
  remove(node) {
    const index = this.neurons.indexOf(node);

    if (index === -1) {
      throw new Error('This node does not exist in the network!');
    }

    // Keep track of gaters
    const gaters = [];

    // Remove selfconnections from this.selfconns
    this.disconnect(node, node);

    // Get all its inputting neurons
    const inputs = [];

    for (let i = node.connections.in.length - 1; i >= 0; i--) {
      const connection = node.connections.in[i];
      if (Mutation.SUB_NODE.keep_gates && connection.gater !== null && connection.gater !== node) {
        gaters.push(connection.gater);
      }
      inputs.push(connection.from);
      this.disconnect(connection.from, node);
    }

    // Get all its outputing neurons
    const outputs = [];
    for (let i = node.connections.out.length - 1; i >= 0; i--) {
      const connection = node.connections.out[i];
      if (Mutation.SUB_NODE.keep_gates && connection.gater !== null && connection.gater !== node) {
        gaters.push(connection.gater);
      }
      outputs.push(connection.to);
      this.disconnect(node, connection.to);
    }

    // Connect the input neurons to the output neurons (if not already connected)
    const connections = [];
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      for (let j = 0; j < outputs.length; j++) {
        const output = outputs[j];
        if (!input.isProjectingTo(output)) {
          const conn = this.connect(input, output);
          connections.push(conn[0]);
        }
      }
    }

    // Gate random connections with gaters
    for (let i = 0; i < gaters.length; i++) {
      if (connections.length === 0) {break;}

      const gater = gaters[i];
      const connIndex = Math.floor(Math.random() * connections.length);

      this.gate(gater, connections[connIndex]);
      connections.splice(connIndex, 1);
    }

    // Remove gated connections gated by this node
    for (let i = node.connections.gated.length - 1; i >= 0; i--) {
      const conn = node.connections.gated[i];
      this.ungate(conn);
    }

    // Remove selfconnection
    this.disconnect(node, node);

    // Remove the node from this.neurons
    this.neurons.splice(index, 1);
  };

  /**
   * Mutates the network with the given method
   */
  mutate (method) {
    if (typeof method === 'undefined') {
      throw new Error('No (correct) mutate method given!');
    }

    switch (method) {
      case Mutation.ADD_NODE:
        this.addNode();
        break;
      case Mutation.SUB_NODE:
        this.subNode();
        break;
      case Mutation.ADD_CONN:
        this.addConn();
        break;
      case Mutation.SUB_CONN:
        this.subConn();
        break;
      case Mutation.MOD_WEIGHT:
        this.modWeight(method);
        break;
      case Mutation.MOD_BIAS:
        this.modBias(method);
        break;
      case Mutation.MOD_ACTIVATION:
        this.modActivation(method);
        break;
      case Mutation.ADD_SELF_CONN:
        this.addSelfConn();
        break;
      case Mutation.SUB_SELF_CONN:
        this.subSelfConn();
        break;
      case Mutation.ADD_GATE:
        this.addGate();
        break;
      case Mutation.SUB_GATE:
        this.subGate();
        break;
      case Mutation.ADD_BACK_CONN:
        this.addBackConn();
        break;
      case Mutation.SUB_BACK_CONN:
        this.subBackConn();
        break;
      case Mutation.SWAP_NODES:
        this.swapNodes(method);
        break;
      default:
        break;
    }
  }

  addNode() {
    let connection;
    let node;
    // Look for an existing connection and place a node in between
    connection = this.connections[Math.floor(Math.random() * this.connections.length)];
    const gater = connection.gater;
    this.disconnect(connection.from, connection.to);

    // Insert the new node right before the old connection.to
    const toIndex = this.neurons.indexOf(connection.to);
    node = new Neuron('hidden');

    // Random squash function
    node.mutate(Mutation.MOD_ACTIVATION);

    // Place it in this.neurons
    const minBound = Math.min(toIndex, this.neurons.length - this.outputsize);
    this.neurons.splice(minBound, 0, node);

    // Now create two new connections
    const newConn1 = this.connect(connection.from, node)[0];
    const newConn2 = this.connect(node, connection.to)[0];

    // Check if the original connection was gated
    if (gater != null) {
      this.gate(gater, Math.random() >= 0.5 ? newConn1 : newConn2);
    }
  }

  subNode() {

    // Check if there are neurons left to remove
    if (this.neurons.length === this.inputsize + this.outputsize) {
      if (Config.warnings) {console.warn('No more neurons left to remove!');}
      return;
    }

    // Select a node which isn't an input or output node
    const index = Math.floor(Math.random() * (this.neurons.length - this.outputsize - this.inputsize) + this.inputsize);
    this.remove(this.neurons[index]);
  }

  addConn() {

    // Create an array of all uncreated (feedforward) connections
    const available = [];
    for (let i = 0; i < this.neurons.length - this.outputsize; i++) {
      const node1 = this.neurons[i];
      for (let j = Math.max(i + 1, this.inputsize); j < this.neurons.length; j++) {
        const node2 = this.neurons[j];
        if (!node1.isProjectingTo(node2)) {available.push([node1, node2]);}
      }
    }

    if (available.length === 0) {
      if (Config.warnings) {console.warn('No more connections to be made!');}
      return;
    }

    const pair = available[Math.floor(Math.random() * available.length)];
    this.connect(pair[0], pair[1]);
  }

  subConn() {
    // List of possible connections that can be removed
    const possible = [];

    for (let i = 0; i < this.connections.length; i++) {
      const conn = this.connections[i];
      // Check if it is not disabling a node
      if (conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1 && this.neurons.indexOf(conn.to) > this.neurons.indexOf(conn.from)) {
        possible.push(conn);
      }
    }

    if (possible.length === 0) {
      if (Config.warnings) {console.warn('No connections to remove!');}
      return;
    }

    const randomConn = possible[Math.floor(Math.random() * possible.length)];
    this.disconnect(randomConn.from, randomConn.to);
  }

  modWeight(method) {
    const connection = this.connections[Math.floor(Math.random() * this.connections.length)];
    connection.weight += Math.random() * (method.max - method.min) + method.min;
  }

  modBias(method) {
    // Has no effect on input node, so they are excluded
    const index = Math.floor(Math.random() * (this.neurons.length - this.inputsize) + this.inputsize);
    const node = this.neurons[index];
    node.mutate(method);
  }

  modActivation(method) {
    // Has no effect on input node, so they are excluded
    if (!method.mutateOutput && this.inputsize + this.outputsize === this.neurons.length) {
      if (Config.warnings) {console.warn('No neurons that allow mutation of activation function');}
      return;
    }

    const index = Math.floor(Math.random() * (this.neurons.length - (method.mutateOutput ? 0 : this.outputsize) - this.inputsize) + this.inputsize);
    const node = this.neurons[index];

    node.mutate(method);
  }

  addSelfConn() {
    // Check which neurons aren't selfconnected yet
    const possible = [];
    for (let i = this.inputsize; i < this.neurons.length; i++) {
      const node = this.neurons[i];
      if (this.selfconns.indexOf(node.connections.self) === -1) {
        possible.push(node);
      }
    }

    if (possible.length === 0) {
      if (Config.warnings) {console.warn('No more self-connections to add!');}
      return;
    }

    // Select a random node
    const node = possible[Math.floor(Math.random() * possible.length)];

    // Connect it to himself
    this.connect(node, node);
  }

  subSelfConn() {
    if (this.selfconns.length === 0) {
      if (Config.warnings) {console.warn('No more self-connections to remove!');}
      return;
    }
    const conn = this.selfconns[Math.floor(Math.random() * this.selfconns.length)];
    this.disconnect(conn.from, conn.to);
  }

  addGate() {
    const allconnections = this.connections.concat(this.selfconns);

    // Create a list of all non-gated connections
    const possible = [];
    for (let i = 0; i < allconnections.length; i++) {
      const conn = allconnections[i];
      if (conn.gater === null) {
        possible.push(conn);
      }
    }

    if (possible.length === 0) {
      if (Config.warnings) {console.warn('No more connections to gate!');}
      return;
    }

    // Select a random gater node and connection
    const node = this.neurons[Math.floor(Math.random() * this.neurons.length)];
    const conn = possible[Math.floor(Math.random() * possible.length)];

    // Gate the connection with the node
    this.gate(node, conn);
  }

  subGate() {
    // Select a random gated connection
    if (this.gates.length === 0) {
      if (Config.warnings) {console.warn('No more connections to ungate!');}
      return;
    }

    const index = Math.floor(Math.random() * this.gates.length);
    const gatedconn = this.gates[index];

    this.ungate(gatedconn);
  }

  addBackConn() {
    // Create an array of all uncreated (backfed) connections
    const available = [];
    for (let i = this.inputsize; i < this.neurons.length; i++) {
      const node1 = this.neurons[i];
      for (let j = this.inputsize; j < i; j++) {
        const node2 = this.neurons[j];
        if (!node1.isProjectingTo(node2)) {available.push([node1, node2]);}
      }
    }

    if (available.length === 0) {
      if (Config.warnings) {console.warn('No more connections to be made!');}
      return;
    }

    const pair = available[Math.floor(Math.random() * available.length)];
    this.connect(pair[0], pair[1]);
  }

  subBackConn() {
    // List of possible connections that can be removed
    const possible = [];

    for (let i = 0; i < this.connections.length; i++) {
      const conn = this.connections[i];
      // Check if it is not disabling a node
      if (conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1 && this.neurons.indexOf(conn.from) > this.neurons.indexOf(conn.to)) {
        possible.push(conn);
      }
    }

    if (possible.length === 0) {
      if (Config.warnings) {console.warn('No connections to remove!');}
      return;
    }

    const randomConn = possible[Math.floor(Math.random() * possible.length)];
    this.disconnect(randomConn.from, randomConn.to);
  }

  swapNodes(method) {
    // Has no effect on input node, so they are excluded
    if ((method.mutateOutput && this.neurons.length - this.inputsize < 2) ||
      (!method.mutateOutput && this.neurons.length - this.inputsize - this.outputsize < 2)) {
      if (Config.warnings) {console.warn('No neurons that allow swapping of bias and activation function');}
      return;
    }

    let index = Math.floor(Math.random() * (this.neurons.length - (method.mutateOutput ? 0 : this.outputsize) - this.inputsize) + this.inputsize);
    const node1 = this.neurons[index];
    index = Math.floor(Math.random() * (this.neurons.length - (method.mutateOutput ? 0 : this.outputsize) - this.inputsize) + this.inputsize);
    const node2 = this.neurons[index];

    const biasTemp = node1.bias;
    const squashTemp = node1.squash;

    node1.bias = node2.bias;
    node1.squash = node2.squash;
    node2.bias = biasTemp;
    node2.squash = squashTemp;
  }

  /**
   * Train the given set to this network
   */
  train (set, options?) {

    if (set[0].input.length !== this.inputsize || set[0].output.length !== this.outputsize) {
      throw new Error('Dataset input/output size should be same as network input/output size!');
    }

    options = options || {};

    // Warning messages
    if (typeof options.rate === 'undefined') {
      if (Config.warnings) {console.warn('Using default learning rate, please define a rate!');}
    }

    if (typeof options.iterations === 'undefined') {
      if (Config.warnings) {console.warn('No target iterations given, running until error is reached!');}
    }



    // Configure given options
    let targetError = options.error || 0.05;
    const cost = options.cost || CostActions.MSE;
    const baseRate = options.rate || 0.3;
    const shuffle = options.shuffle || false;
    const iterations = options.iterations || 0;
    const crossValidate = options.crossValidate || false;
    const clear = options.clear || false;
    const dropout = options.dropout || 0;
    const momentum = options.momentum || 0;
    const batchSize = options.batchSize || 1; // online learning
    const ratePolicy = options.ratePolicy || LearningRateActions.FIXED;
    const schedule = options.schedule;
    const start = Date.now();

    if (batchSize > set.length) {throw new Error('Batch size must be smaller or equal to dataset length!');}

    if (typeof options.iterations === 'undefined' && typeof options.error === 'undefined') {
      if (Config.warnings) {console.warn('At least one of the following options must be specified: error, iterations');}
    } else if (typeof options.error === 'undefined') {
      targetError = -1; // run until iterations
    }

    // Save to network
    this.dropout = dropout;
    let trainSet;
    let testSet;
    let testError;
    if (crossValidate) {
      const testSize = options.crossValidate.testSize;
      testError = options.crossValidate.testError;
      const numTrain = Math.ceil((1 - testSize) * set.length);
      trainSet = set.slice(0, numTrain);
      testSet = set.slice(numTrain);
    }

    // Loops the training process
    let currentRate = baseRate;
    let iteration = 0;
    let error = 1;

    let i, j, x;
    while (error > targetError && (iterations === 0 || iteration < iterations)) {
      if (crossValidate && error <= testError) {break;}

      iteration++;

      // Update the rate
      currentRate = ratePolicy(baseRate, iteration);

      error = 0;

      // Checks if cross validation is enabled
      if (crossValidate) {
        this._trainSet(trainSet, batchSize, currentRate, momentum, cost);
        if (clear) {this.clear();}
        error += this.test(testSet, cost).error;
        if (clear) {this.clear();}
      } else {
        error += this._trainSet(set, batchSize, currentRate, momentum, cost);
        if (clear) {this.clear();}
      }

      // Checks for options such as scheduled logs and shuffling
      if (shuffle) {
        for (let j, x, ii = set.length; ii; j = Math.floor(Math.random() * ii), x = set[--ii], set[ii] = set[j], set[j] = x) {}
      }

      if (schedule && iteration % schedule.iterations === 0) {
        schedule.function({
          error: error,
          iteration: iteration
        });
      }
    }

    if (clear) {this.clear();}

    if (dropout) {
      for (let i = 0; i < this.neurons.length; i++) {
        if (this.neurons[i].type === 'hidden' || this.neurons[i].type === 'constant') {
          this.neurons[i].mask = 1 - this.dropout;
        }
      }
    }

    // Creates an object of the results
    return {
      error: error,
      iterations: iteration,
      time: Date.now() - start
    };

  }

  /**
   * Performs one training epoch and returns the error
   * private function used in this.train
   */
  _trainSet (set, batchSize, currentRate, momentum, costFunction) {
    let errorSum = 0;
    for (let i = 0; i < set.length; i++) {
      const input = set[i].input;
      const target = set[i].output;

      const update = !!((i + 1) % batchSize === 0 || (i + 1) === set.length);

      const output = this.activate(input, true);
      this.propagate(currentRate, momentum, update, target);

      errorSum += costFunction(target, output);
    }
    return errorSum / set.length;
  }

  /**
   * Tests a set and returns the error and elapsed time
   */
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

  /**
   * Creates a json that can be used to create a graph with d3 and webcola
   */
  graph (width, height) {
    let input = 0;
    let output = 0;

    const json = {
      nodes: [],
      links: [],
      constraints: [{
        type: 'alignment',
        axis: 'x',
        offsets: []
      }, {
        type: 'alignment',
        axis: 'y',
        offsets: []
      }]
    };


    for (let i = 0; i < this.neurons.length; i++) {
      const node = this.neurons[i];

      if (node.type === 'input') {
        if (this.inputsize === 1) {
          json.constraints[0].offsets.push({
            node: i,
            offset: 0
          });
        } else {
          json.constraints[0].offsets.push({
            node: i,
            offset: 0.8 * width / (this.inputsize - 1) * input++
          });
        }
        json.constraints[1].offsets.push({
          node: i,
          offset: 0
        });
      } else if (node.type === 'output') {
        if (this.outputsize === 1) {
          json.constraints[0].offsets.push({
            node: i,
            offset: 0
          });
        } else {
          json.constraints[0].offsets.push({
            node: i,
            offset: 0.8 * width / (this.outputsize - 1) * output++
          });
        }
        json.constraints[1].offsets.push({
          node: i,
          offset: -0.8 * height
        });
      }

      json.nodes.push({
        id: i,
        name: node.type === 'hidden' ? node.squash.name : node.type.toUpperCase(),
        activation: node.activation,
        bias: node.bias
      });
    }

    const connections = this.connections.concat(this.selfconns);
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (connection.gater == null) {
        json.links.push({
          source: this.neurons.indexOf(connection.from),
          target: this.neurons.indexOf(connection.to),
          weight: connection.weight
        });
      } else {
        // Add a gater 'node'
        const index = json.nodes.length;
        json.nodes.push({
          id: index,
          activation: connection.gater.activation,
          name: 'GATE'
        });
        json.links.push({
          source: this.neurons.indexOf(connection.from),
          target: index,
          weight: 1 / 2 * connection.weight
        });
        json.links.push({
          source: index,
          target: this.neurons.indexOf(connection.to),
          weight: 1 / 2 * connection.weight
        });
        json.links.push({
          source: this.neurons.indexOf(connection.gater),
          target: index,
          weight: connection.gater.activation,
          gate: true
        });
      }
    }

    return json;
  }

  /**
   * Convert the network to a json object
   */
  toJSON () {
    const json = {
      nodes: [],
      connections: [],
      input: this.inputsize,
      output: this.outputsize,
      dropout: this.dropout
    };

    // So we don't have to use expensive .indexOf()

    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].index = i;
    }

    for (let i = 0; i < this.neurons.length; i++) {
      const node = this.neurons[i];
      const tojson = node.toJSON();
      tojson.index = i;
      json.nodes.push(tojson);

      if (node.connections.self.weight !== 0) {
        const tojson = node.connections.self.toJSON();
        tojson.from = i;
        tojson.to = i;

        tojson.gater = node.connections.self.gater != null ? node.connections.self.gater.index : null;
        json.connections.push(tojson);
      }
    }

    for (let i = 0; i < this.connections.length; i++) {
      const conn = this.connections[i];
      const tojson = conn.toJSON();
      tojson.from = conn.from.index;
      tojson.to = conn.to.index;

      tojson.gater = conn.gater != null ? conn.gater.index : null;

      json.connections.push(tojson);
    }

    return json;
  }

  /**
   * Sets the value of a property for every node in this network
   */
  set (values) {
    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].bias = values.bias || this.neurons[i].bias;
      this.neurons[i].squash = values.squash || this.neurons[i].squash;
    }
  }

  /**
   * Evolves the network to reach a lower error on a dataset
   */
  evolve (set, options) {
    options = options || {};
    const cost = options.cost || CostActions.MSE;
    const amount = options.amount || 1;
    const growth = typeof options.growth !== 'undefined' ? options.growth : 0.0001;
    const iterations = options.iterations || 0;
    const targetError = typeof options.error !== 'undefined' ? options.error : 0.005;
    const log = options.log || 0;
    const clear = options.clear || false;
    const schedule = options.schedule;
    const start = Date.now();

    function fitnessFunction (genome) {
      let score = 0;
      for (let i = 0; i < amount; i++) {
        score -= genome.test(set, cost).error;
      }

      score -= (genome.nodes.length - genome.input - genome.output + genome.connections.length + genome.gates.length) * growth;

      score = isNaN(score) ? -Infinity : score; // this can cause problems with fitness proportionate selection
      return score / amount;
    }

    options.network = this;
    const neat = new Evo();

    let error = -Infinity;
    let bestFitness = -Infinity;
    let bestGenome = null;

    while (error < -targetError && (iterations === 0 || neat.generation < iterations)) {
      neat.evolveGenomePool();
      const fittest = neat.getFittestGenomes();
      const fitness = fittest.score;
      error = fitness + (fittest.nodes.length - fittest.input - fittest.output + fittest.connections.length + fittest.gates.length) * growth;

      if (fitness > bestFitness) {
        bestFitness = fitness;
        bestGenome = fittest;
      }

      if (log && neat.generation % log === 0) {
        console.log('generation', neat.generation, 'fitness', fitness, 'error', -error);
      }

      if (schedule && neat.generation % schedule.iterations === 0) {
        schedule.function({
          fitness: fitness,
          error: -error,
          iteration: neat.generation
        });
      }
    }

    if (clear) {bestGenome.clear();}

    const results = {
      error: bestFitness,
      generations: neat.generation,
      time: Date.now() - start
    };

    if (bestGenome != null) {
      this.neurons = bestGenome.nodes;
      this.connections = bestGenome.connections;
      this.gates = bestGenome.gates;
      this.selfconns = bestGenome.selfconns;
    }

    return results;
  }


  /**
   * Creates a standalone function of the network which can be run without the
   * need of a library
   */
  standalone () {
    const present = [];
    const activations = [];
    const states = [];
    const lines = [];
    const functions = [];

    for (let i = 0; i < this.inputsize; i++) {
      const node = this.neurons[i];
      activations.push(node.activation);
      states.push(node.state);
    }

    lines.push('for(let i = 0; i < input.length; i++) A[i] = input[i];');

    // So we don't have to use expensive .indexOf()
    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].index = i;
    }

    for (let i = this.inputsize; i < this.neurons.length; i++) {
      const node = this.neurons[i];
      activations.push(node.activation);
      states.push(node.state);

      let functionIndex = present.indexOf(node.squash.name);

      if (present.indexOf(node.squash.name) === -1) {
        functionIndex = present.length;
        present.push(node.squash.name);
        functions.push(node.squash.toString());
      }

      const incoming = [];
      for (let j = 0; j < node.connections.in.length; j++) {
        const conn = node.connections.in[j];
        let computation = `A[${conn.from.index}] * ${conn.weight}`;

        if (conn.gater != null) {
          computation += ` * A[${conn.gater.index}]`;
        }

        incoming.push(computation);
      }

      if (node.connections.self.weight) {
        const conn = node.connections.self;
        let computation = `S[${i}] * ${conn.weight}`;

        if (conn.gater != null) {
          computation += ` * A[${conn.gater.index}]`;
        }

        incoming.push(computation);
      }

      const line1 = `S[${i}] = ${incoming.join(' + ')} + ${node.bias};`;
      const line2 = `A[${i}] = F[${functionIndex}](S[${i}])${!node.mask ? ' * ' + node.mask : ''};`;
      lines.push(line1);
      lines.push(line2);
    }

    let output = [];
    for (let i = this.neurons.length - this.outputsize; i < this.neurons.length; i++) {
      output.push(`A[${i}]`);
    }

   // output = `return [${output.join(',')}];`;
    lines.push(output);

    var total = '';
    total += `var F = [${functions.toString()}];\r\n`;
    total += `var A = [${activations.toString()}];\r\n`;
    total += `var S = [${states.toString()}];\r\n`;
    total += `function activate(input){\r\n${lines.join('\r\n')}\r\n}`;

    return total;
  }

  /**
   * Serialize to send to workers efficiently
   */
  serialize () {
    let activations = [];
    let states = [];
    let conns = [];
    const squashes = [
      'LOGISTIC', 'TANH', 'IDENTITY', 'STEP', 'RELU', 'SOFTSIGN', 'SINUSOID',
      'GAUSSIAN', 'BENT_IDENTITY', 'BIPOLAR', 'BIPOLAR_SIGMOID', 'HARD_TANH',
      'ABSOLUTE', 'INVERSE', 'SELU'
    ];

    conns.push(this.inputsize);
    conns.push(this.outputsize);


    for (let i = 0; i < this.neurons.length; i++) {
      const node = this.neurons[i];
      node.index = i;
      activations.push(node.activation);
      states.push(node.states);
    }

    for (let i = this.inputsize; i < this.neurons.length; i++) {
      const node = this.neurons[i];
      conns.push(node.index);
      conns.push(node.bias);
      conns.push(squashes.indexOf(node.squash.name));

      for (let j = 0; j < node.connections.in.length; j++) {
        const conn = node.connections.in[j];

        conns.push(conn.from.index);
        conns.push(conn.weight);
        conns.push(conn.gater == null ? -1 : conn.gater.index);
      }
      conns.push(-2); // stop token -> next node
    }

    // Convert to Float64Arrays
    const activationsFloat = new Float64Array(activations);
    const statesFloat = new Float64Array(states);
    const connsFloat = new Float64Array(conns);

    return [activationsFloat, statesFloat, connsFloat];
  }

  public static fromJSON(json) {
    const network = new Network(json.input, json.output);
    network.dropout = json.dropout;
    network.neurons = [];
    network.connections = [];


    for (let i = 0; i < json.nodes.length; i++) {
      network.neurons.push(Neuron.fromJSON(json.nodes[i]));
    }

    for (let i = 0; i < json.connections.length; i++) {
      const conn = json.connections[i];

      const connection = network.connect(network.neurons[conn.from], network.neurons[conn.to])[0];
      connection.weight = conn.weight;

      if (conn.gater != null) {
        network.gate(network.neurons[conn.gater], connection);
      }
    }

    return network;
  };

  merge = function (network1, network2) {
    // Create a copy of the networks
    network1 = this.network.fromJSON(network1.toJSON());
    network2 = this.network.fromJSON(network2.toJSON());

    // Check if output and input size are the same
    if (network1.output !== network2.input) {
      throw new Error('Output size of network1 should be the same as the input size of network2!');
    }

    // Redirect all connections from network2 input from network1 output
    for (let i = 0; i < network2.connections.length; i++) {
      const conn = network2.connections[i];
      if (conn.from.type === 'input') {
        const index = network2.nodes.indexOf(conn.from);

        // redirect
        conn.from = network1.nodes[network1.nodes.length - 1 - index];
      }
    }

    // Deconste input neurons of network2
    for (let i = network2.input - 1; i >= 0; i--) {
      network2.nodes.splice(i, 1);
    }

    // Change the node type of network1's output neurons (now hidden)
    for (let i = network1.nodes.length - network1.output; i < network1.nodes.length; i++) {
      network1.nodes[i].type = 'hidden';
    }

    // Create one network from both networks
    network1.connections = network1.connections.concat(network2.connections);
    network1.nodes = network1.nodes.concat(network2.nodes);

    return network1;
  };

  public static crossOver = function (network1, network2, equal) {
    if (network1.input !== network2.input || network1.output !== network2.output) {
      throw new Error('Networks don\'t have the same input or output size!');
    }

    // Initialise offspring
    const offspring = new Network(network1.input, network1.output);
    offspring.connections = [];
    offspring.neurons = [];

    // Save scores and create a copy
    const score1 = network1.score || 0;
    const score2 = network2.score || 0;

    // Determine offspring node size
    let size;
    if (equal || score1 === score2) {
      const max = Math.max(network1.nodes.length, network2.nodes.length);
      const min = Math.min(network1.nodes.length, network2.nodes.length);
      size = Math.floor(Math.random() * (max - min + 1) + min);
    } else if (score1 > score2) {
      size = network1.nodes.length;
    } else {
      size = network2.nodes.length;
    }

    // Rename some variables for easier reading
    const outputSize = network1.output;

    // Set indexes so we don't need indexOf
    for (let i = 0; i < network1.nodes.length; i++) {
      network1.nodes[i].index = i;
    }

    for (let i = 0; i < network2.nodes.length; i++) {
      network2.nodes[i].index = i;
    }

    // Assign neurons from parents to offspring
    for (let i = 0; i < size; i++) {
      // Determine if an output node is needed
      let node;
      if (i < size - outputSize) {
        const random = Math.random();
        node = random >= 0.5 ? network1.nodes[i] : network2.nodes[i];
        const other = random < 0.5 ? network1.nodes[i] : network2.nodes[i];

        if (typeof node === 'undefined' || node.type === 'output') {
          node = other;
        }
      } else {
        if (Math.random() >= 0.5) {
          node = network1.nodes[network1.nodes.length + i - size];
        } else {
          node = network2.nodes[network2.nodes.length + i - size];
        }
      }

      const newNode = new Neuron();
      newNode.bias = node.bias;
      newNode.squash = node.squash;
      newNode.type = node.type;

      offspring.neurons.push(newNode);
    }

    // Create arrays of connection genes
    const n1conns = {};
    const n2conns = {};

    // Normal connections
    for (let i = 0; i < network1.connections.length; i++) {
      const conn = network1.connections[i];
      const data = {
        weight: conn.weight,
        from: conn.from.index,
        to: conn.to.index,
        gater: conn.gater != null ? conn.gater.index : -1
      };
      n1conns[Connection.innovationId(data.from, data.to)] = data;
    }

    // Selfconnections
    for (let i = 0; i < network1.selfconns.length; i++) {
      const conn = network1.selfconns[i];
      const data = {
        weight: conn.weight,
        from: conn.from.index,
        to: conn.to.index,
        gater: conn.gater != null ? conn.gater.index : -1
      };
      n1conns[Connection.innovationId(data.from, data.to)] = data;
    }

    // Normal connections
    for (let i = 0; i < network2.connections.length; i++) {
      const conn = network2.connections[i];
      const data = {
        weight: conn.weight,
        from: conn.from.index,
        to: conn.to.index,
        gater: conn.gater != null ? conn.gater.index : -1
      };
      n2conns[Connection.innovationId(data.from, data.to)] = data;
    }

    // Selfconnections
    for (let i = 0; i < network2.selfconns.length; i++) {
      const conn = network2.selfconns[i];
      const data = {
        weight: conn.weight,
        from: conn.from.index,
        to: conn.to.index,
        gater: conn.gater != null ? conn.gater.index : -1
      };
      n2conns[Connection.innovationId(data.from, data.to)] = data;
    }

    // Split common conn genes from disjoint or excess conn genes
    const connections = [];
    const keys1 = Object.keys(n1conns);
    const keys2 = Object.keys(n2conns);
    for (let i = keys1.length - 1; i >= 0; i--) {
      // Common gene
      if (typeof n2conns[keys1[i]] !== 'undefined') {
        const conn = Math.random() >= 0.5 ? n1conns[keys1[i]] : n2conns[keys1[i]];
        connections.push(conn);

        // Because deconsting is expensive, just set it to some value
        n2conns[keys1[i]] = undefined;
        break;
      } else if (score1 >= score2 || equal) {
        connections.push(n1conns[keys1[i]]);
      }
    }

    // Excess/disjoint gene
    if (score2 >= score1 || equal) {
      for (let i = 0; i < keys2.length; i++) {
        if (typeof n2conns[keys2[i]] !== 'undefined') {
          connections.push(n2conns[keys2[i]]);
        }
      }
    }

    // Add common conn genes uniformly
    for (let i = 0; i < connections.length; i++) {
      const connData = connections[i];
      if (connData.to < size && connData.from < size) {
        const from = offspring.neurons[connData.from];
        const to = offspring.neurons[connData.to];
        const conn = offspring.connect(from, to)[0];

        conn.weight = connData.weight;

        if (connData.gater !== -1 && connData.gater < size) {
          offspring.gate(offspring.neurons[connData.gater], conn);
        }
      }
    }
  };
}
