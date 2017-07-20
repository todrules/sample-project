import { Component } from '@angular/core';
import { NetComponent } from '../neuralnet/net.component';
import { TrainComponent } from '../neuralnet/train.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NetComponent;
  tab2Root = TrainComponent;

  constructor () {

  }
}
