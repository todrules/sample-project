import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { REPORT } from '../../assets/data';
import * as ChartData from '../../config/charts';

export interface ChartReadyEvent {
  message: string;
}

@Component({
  selector: 'page-speed',
  templateUrl: 'speed.html'
})
export class PageSpeed implements OnInit {

  public title = 'Page Speed';
  public data = REPORT;
  public score;
  public gaugeChartData;
  public sortedResults = [];
  constructor(public navCtrl: NavController) {
    this.score = this.data.ruleGroups.SPEED.score;
    this.gaugeChartData = ChartData.gaugeChartData;
    this.gaugeChartData.dataTable[1][1] = this.data.ruleGroups.SPEED.score;
  }

  ngOnInit() {
    const results = [];
    const ruleResults = this.data.formattedResults.ruleResults;
    for (const obj in ruleResults) {
      if(ruleResults.hasOwnProperty(obj)) {
        const ruleResult = ruleResults[obj];
        // Don't display lower-impact suggestions.
        if (ruleResult.ruleImpact < 3.0 || ruleResult.localizedRuleName.length > 26) {continue;}
        results.push({
          name: ruleResult.localizedRuleName,
          impact: ruleResult.ruleImpact
        });
      }

    }
    this.sortedResults = results.sort(this.sortByImpact);
    console.log(this.sortedResults);
    return this.sortedResults;

  }

  sortByImpact (a, b) { return b.impact - a.impact; }

}
