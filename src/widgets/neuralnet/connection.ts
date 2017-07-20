import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Neuron } from './neuron';

@Injectable()
export class Connection {

  private originatingNode: Neuron;
  private destinationNode: Neuron;
  public gain;
  public weight;
  public gater = null;
  public elegibility = 0;
  public previousDeltaWeight = 0;
  public totalDeltaWeight = 0;
  public xtrace = {
    nodes: [],
    values: []
  };

  constructor (public origNode: Neuron, public destNode: Neuron, public connectWeight?: any) {
  //  console.log('Connecting Something');
    if(origNode === destNode) {
 //     console.log('Connecting Self');
    }
    this.originatingNode = origNode;
    this.destinationNode = destNode;
    this.gain = 1;
    if (connectWeight) {
      this.weight = connectWeight;
    } else {
      this.weight = Math.random() * 0.2 - 0.1;
    }

  }

  public toJSON () {
    return {
      weight: this.weight
    }
  }

  public static innovationId = (a, b) => {
    return 1 / 2 * (a + b) * (a + b + 1) + b;
  };

}
