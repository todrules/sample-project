import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evo } from './evo';
import { Game } from './game';
import { Info } from './info';
import { IonicModule, IonicApp } from 'ionic-angular';


// import { NeuralComponent } from './neural.component';
// import { NeuralActions } from './neural.actions';
// import { NeuralRoutingModule } from './neural-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule

    // NeuralRoutingModule
  ],
  declarations: [
    Game
  ],
  providers: [
    Evo,
    Info
  ],
  exports: [
    CommonModule,
    Game
    // NeuralRoutingModule

  ],
  entryComponents: [
    Game
  ]
})
export class GameModule {}
