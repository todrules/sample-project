import { Injectable } from '@angular/core';
import { ActivationActions } from './actions/activation.actions';
import { Neuron } from './neuron';
import { Group } from './group';
import { StaticConnection, StaticGating } from './data/config';

@Injectable()
export class Layer {

  public output = null;
  public input = null;
  public connections = {
    in: [],
    out: [],
    self: []
  }
  public neurons = [];

  constructor () {

  }

  activate (value) {
    const values = [];

    if (typeof value !== 'undefined' && value.length !== this.neurons.length) {
      throw new Error('Array with values should be same as the amount of neurons!');
    }

    for (let i = 0; i < this.neurons.length; i++) {
      let activation;
      if (typeof value === 'undefined') {
        activation = this.neurons[i].activate();
      } else {
        activation = this.neurons[i].activate(value[i]);
      }

      values.push(activation);
    }

    return values;
  }

  propagate (rate, momentum, target) {
    if (typeof target !== 'undefined' && target.length !== this.neurons.length) {
      throw new Error('Array with values should be same as the amount of neurons!');
    }

    for (let i = this.neurons.length - 1; i >= 0; i--) {
      if (typeof target === 'undefined') {
        this.neurons[i].propagate(rate, momentum);
      } else {
        this.neurons[i].propagate(rate, momentum, target[i]);
      }
    }
  }

  gate (connections, method) {
    this.output.gate(connections, method);
  }

  set (values) {
    for (let i = 0; i < this.neurons.length; i++) {
      const node = this.neurons[i];

      if (node instanceof Neuron) {
        if (typeof values.bias !== 'undefined') {
          node.bias = values.bias;
        }

        node.squash = values.squash || node.squash;
        node.type = values.type || node.type;
      } else if (node instanceof Group) {
        node.set(values);
      }
    }
  }

  connect (target, method, weight?) {
    let connections;
    if (target instanceof Group || target instanceof Node) {
      connections = this.output.connect(target, method, weight);
    } else if (target instanceof Layer) {
      connections = target.input(this, method, weight);
    }

    return connections;
  }

  disconnect (target, twosided) {
    twosided = twosided || false;
    if (target instanceof Group) {
      for (let i = 0; i < this.neurons.length; i++) {
        for (let j = 0; j < target.neurons.length; j++) {
          this.neurons[i].disconnect(target.neurons[j], twosided);

          for (let k = this.connections.out.length - 1; k >= 0; k--) {
            const conn = this.connections.out[k];

            if (conn.from === this.neurons[i] && conn.to === target.neurons[j]) {
              this.connections.out.splice(k, 1);
              break;
            }
          }

          if (twosided) {
            for (let k = this.connections.in.length - 1; k >= 0; k--) {
              const conn = this.connections.in[k];

              if (conn.from === target.neurons[j] && conn.to === this.neurons[i]) {
                this.connections.in.splice(k, 1);
                break;
              }
            }
          }
        }
      }
    } else if (target instanceof Node) {
      for (let i = 0; i < this.neurons.length; i++) {
        this.neurons[i].disconnect(target, twosided);

        for (let j = this.connections.out.length - 1; j >= 0; j--) {
          const conn = this.connections.out[j];

          if (conn.from === this.neurons[i] && conn.to === target) {
            this.connections.out.splice(j, 1);
            break;
          }
        }

        if (twosided) {
          for (let k = this.connections.in.length - 1; k >= 0; k--) {
            const conn = this.connections.in[k];

            if (conn.from === target && conn.to === this.neurons[i]) {
              this.connections.in.splice(k, 1);
              break;
            }
          }
        }
      }
    }
  }

  clear () {
    for (let i = 0; i < this.neurons.length; i++) {
      this.neurons[i].clear();
    }
  }

  createDenseLayer (size): Layer {
    // Create the layer
    const layer = new Layer();

    // Init required neurons (in activation order)
    const block = new Group(size);

    layer.neurons.push(block);
    layer.output = block;

    layer.input = function (from, method, weight) {
      if (from instanceof Layer) {from = from.output;}
      method = method || StaticConnection.ALL_TO_ALL;
      return from.connect(block, method, weight);
    };

    return layer;
  }

}

