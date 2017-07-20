import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LSTM } from './lstm';
import { Network } from './network';
import { Layer } from './layer';
import { ActivationActions } from './actions/activation.actions';
import { Mutation } from './mutation';

import { NetComponent } from './net.component';
import { IonicModule, IonicApp } from 'ionic-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { NeuralActions } from './neural.actions';
// import { NeuralRoutingModule } from './neural-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgxChartsModule
    // NeuralRoutingModule
  ],
  declarations: [
    NetComponent
  ],
  providers: [
    LSTM,
    Network,
    Layer,
    ActivationActions,
    Mutation
  ],
  exports: [
    CommonModule,
    NetComponent,
    IonicModule
    // NeuralRoutingModule

  ],
  entryComponents: [
    NetComponent
  ]
})
export class NeuralModule {}
