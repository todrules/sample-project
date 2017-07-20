import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as ChartData from '../../config/charts';

@Component({
  selector: 'page-rank',
  templateUrl: 'rank.html'
})
export class Rank {

  public title = 'Website Rank';

  public paChartData;
  public moztrustChartData;
  public mozrankChartData;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paChartData = ChartData.PAChartData;
    this.mozrankChartData = ChartData.MozRankChartData;
    this.moztrustChartData = ChartData.MozTrustChartData;

  }


}
