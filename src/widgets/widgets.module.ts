import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as Chart from 'chart.js/dist/Chart.bundle';
import { ChartsModule } from 'ng2-charts';
import { PaymentComponent } from './payment/payment.component';
import { NeuralNet } from './neuralnet/neuralnet';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { PageSpeed } from './pagespeed/speed';
import { Rank } from './rank/rank';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { TabsPage } from './tabs/tabs';
import { TrainComponent } from './neuralnet/train.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    FlexLayoutModule,
    ChartsModule,
    CreditCardDirectivesModule,
    Ng2GoogleChartsModule

  ],
  declarations: [
    DashboardComponent,
    PaymentComponent,
    PageSpeed,
    Rank,
    TabsPage,
    TrainComponent
  ],
  entryComponents: [
    DashboardComponent,
    PaymentComponent,
    PageSpeed,
    Rank,
    TabsPage,
    TrainComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DashboardComponent,
    ChartsModule,
    IonicModule,
    CreditCardDirectivesModule,
    PageSpeed,
    Rank,
    Ng2GoogleChartsModule,
    TabsPage,
    TrainComponent
  ]
})
export class WidgetsModule {}
