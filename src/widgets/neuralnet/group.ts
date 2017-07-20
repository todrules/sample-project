
import { Injectable } from '@angular/core';
import { Neuron } from './neuron';
import { StaticConnection, StaticGating } from './data/config';
import * as seedrandom from 'seedrandom';

@Injectable()
export class Group {

  public neurons = [];
  public connections = {
    in: [],
    out: [],
    self: []
  }
  public rand;
  public uuid;

  constructor(size) {
 //   console.log('creating Group');

    for (let i = 0; i < size; i++) {
      this.neurons.push(new Neuron());
    }
  }

  set (values) {
    this.rand = seedrandom.alea(Math.random());
    this.uuid = this.rand();
    for (let i = 0; i < this.neurons.length; i++) {
      if (values.bias) {
        this.neurons[i].bias = values.bias;
      }
      this.neurons[i].squash = values.squash || this.neurons[i].squash;
      this.neurons[i].type = values.type || this.neurons[i].type;
      this.neurons[i].guid = this.uuid;
    }
  }

  connectGroup (target, method?, weight?) {
  //  console.warn('Connecting Group');
    const connections = [];

    if (target instanceof Group) {

      if (method === StaticConnection.ALL_TO_ALL || method === StaticConnection.ALL_TO_ELSE) {

        for (let i = 0; i < this.neurons.length; i++) {

          for (let j = 0; j < target.neurons.length; j++) {

            if (method === StaticConnection.ALL_TO_ELSE && this.neurons[i] === target.neurons[j]) {continue;}
            const connection = this.neurons[i].connectNeurons(target.neurons[j], weight);
            this.connections.out.push(connection[0]);
            target.connections.in.push(connection[0]);
            connections.push(connection[0]);
          }
        }
      } else if (method === StaticConnection.ONE_TO_ONE) {

        if (this.neurons.length !== target.neurons.length) {
          throw new Error('From and To group must be the same size!');
        }
        for (let i = 0; i < this.neurons.length; i++) {
          const connection = this.neurons[i].connectNeurons(target.neurons[i], weight);
          this.connections.self.push(connection[0]);
          connections.push(connection[0]);
        }
      }
    } else {
      for (let i = 0; i < this.neurons.length; i++) {
        const connection = this.neurons[i].connectNeurons(target, weight);
        this.connections.out.push(connection[0]);
        connections.push(connection[0]);
      }
    }
    return connections;
  }

  gate (connections, method) {
//    console.group();
 //   console.log('starting gate');
//    console.log(connections);
    if (!Array.isArray(connections)) {
      connections = [connections];
    }

    const neurons1: Array<any> = [];
    const neurons2: Array<any> = [];

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
//      console.log(connection);
 //     console.log(connection.originatingNode);
//      console.log(connection.destinationNode);
      if (!neurons1.includes(connection.originatingNode)) {
        neurons1.push(connection.originatingNode);
      }
      if (!neurons2.includes(connection.destinationNode)) {
        neurons2.push(connection.destinationNode);
      }
    }

    switch (method) {
      case StaticGating.INPUT:
        for (let i = 0; i < neurons2.length; i++) {
          const node = neurons2[i];
          const gater = this.neurons[i % this.neurons.length];
          for (let j = 0; j < node.connections.in.length; j++) {
            const conn = node.connections.in[j];
            if (connections.includes(conn)) {
              gater.gate(conn);
            }
          }
        }
        break;
      case StaticGating.OUTPUT:
        for (let i = 0; i < neurons1.length; i++) {
          const node = neurons1[i];
          const gater = this.neurons[i % this.neurons.length];

          for (let j = 0; j < node.connections.out.length; j++) {
            const conn = node.connections.out[j];
            if (connections.includes(conn)) {
              gater.gate(conn);
            }
          }
        }
        break;
      case StaticGating.SELF:
        for (let i = 0; i < neurons1.length; i++) {
          const node = neurons1[i];
          const gater = this.neurons[i % this.neurons.length];

          if (connections.includes(node.connections.self)) {
            gater.gate(node.connections.self);
          }
        }
    }
//    console.groupEnd();
  }


}
