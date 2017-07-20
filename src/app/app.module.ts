import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WidgetsModule } from '../widgets/widgets.module';
import { HttpModule } from '@angular/http';
import { VoiceService } from '../services/voices.service';
import { NeuralModule } from '../widgets/neuralnet/neural.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { D3Service } from 'd3-ng2-service';
import { CreditCardDirectivesModule } from 'angular-cc-library';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NgxChartsModule,
    WidgetsModule,
    NeuralModule,
    CreditCardDirectivesModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VoiceService,
    D3Service
  ],
  exports: [
    NeuralModule,
    NgxChartsModule,
    IonicModule,
    CreditCardDirectivesModule
  ]
})
export class AppModule {}
