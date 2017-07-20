import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dashboard.template.html'
})
export class DashboardComponent implements OnInit {
  title = 'Sample Dashboard';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Q1 2016', 'Q2 2016', 'Q3 2016', 'Q4 2016', 'Q1 2017', 'Q2 2017'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [], label: 'Hamburger Sales' },
    { data: [], label: 'Hot Dog Sales' }
  ];

  public barChartData0: any[] = [
    { data: [59, 80, 81, 56, 55, 40], label: 'Hamburger Sales' },
    { data: [48, 40, 19, 86, 27, 90], label: 'Hot Dog Sales' }
  ];
  public barChartData1: any[] = [
    { data: [65, 75, 60, 45, 48, 57], label: 'Hamburger Sales' },
    { data: [52, 38, 40, 71, 42, 78], label: 'Hot Dog Sales' }
  ];
  public barChartData2: any[] = [
    { data: [71, 65, 70, 75, 40, 80], label: 'Hamburger Sales' },
    { data: [78, 68, 40, 65, 52, 75], label: 'Hot Dog Sales' }
  ];
  public barSeries = 1;
  private partial = '45,125,210';
  public barChartColors = [
    {
      backgroundColor: [`rgba(${this.partial},0.6)`, `rgba(${this.partial},0.6)`, `rgba(${this.partial},0.6)`, `rgba(${this.partial},0.6)`, `rgba(${this.partial},0.6)`, `rgba(${this.partial},0.6)`],
      borderColor: [`rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`],
      hoverBackgroundColor: [`rgba(${this.partial},0.7)`, `rgba(${this.partial},0.7)`, `rgba(${this.partial},0.7)`, `rgba(${this.partial},0.7)`, `rgba(${this.partial},0.7)`, `rgba(${this.partial},0.7)`],
      hoverBorderColor: [`rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`, `rgba(${this.partial},0.9)`]
    },
    { // dark grey
      backgroundColor: ['rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)', 'rgba(55,59,109,0.6)'],
      borderColor: ['rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)'],
      hoverBackgroundColor: ['rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)', 'rgba(55,59,109,0.7)'],
      hoverBorderColor: ['rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)', 'rgba(55,59,109,0.9)']
    }
  ];
  public doughnutChartLabels: string[] = ['Credit Card', 'ACH Debit', 'Bitcoin', 'Apple Pay'];
  public doughnutChartData: number[] = [];
  public doughnutChartData0: number[] = [220, 12, 64, 45];
  public doughnutChartData1: number[] = [180, 48, 100, 120];
  public doughnutChartData2: number[] = [150, 52, 36, 38];
  public doughSeries = 1;
  public doughnutChartType = 'doughnut';
  public doughnutChartColors = [
    { // grey
      backgroundColor: ['rgba(179,186,189,0.6)', 'rgba(49,54,56,0.6)', 'rgba(76,84,87,0.6)', 'rgba(114,126,131,0.6)', 'rgba(28,32,33,0.6)'],
      borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(207,79,156,0.3)'],
      hoverBackgroundColor: ['rgba(179,186,189,0.9)', 'rgba(49,54,56,0.9)', 'rgba(76,84,87,0.9)', 'rgba(114,126,131,0.9)', 'rgba(28,32,33,0.9)'],
      hoverBorderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)']
    }
  ];
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Utilities' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Payroll' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Food Cost' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
    series: {
      0: {
        color: 'rgba(55,34,72,1)'
      },
      1: {
        color: 'rgba(68,53,91,1)'
      },
      2: {
        color: 'rgba(61,43,61,1)'
      }
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(55,34,72,0.2)',
      borderColor: 'rgba(55,34,72,1)',
      pointBackgroundColor: 'rgba(55,34,72,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(55,34,72,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(68,53,91,0.2)',
      borderColor: 'rgba(68,53,91,1)',
      pointBackgroundColor: 'rgba(68,53,91,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(68,53,91,1)'
    },
    { // grey
      backgroundColor: 'rgba(61,43,61,0.2)',
      borderColor: 'rgba(61,43,61,1)',
      pointBackgroundColor: 'rgba(61,43,61,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(61,43,61,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize (): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  public chartClicked (e: any): void {
    console.log(e);
  }

  public chartHovered (e: any): void {
    console.log(e);
  }

  public updatePieChart () {
    switch(this.doughSeries) {
      case 0:
      console.log('zero');
        this.doughSeries++;
        return this.doughnutChartData = this.doughnutChartData0;
      case 1:
        this.doughSeries++;
        return this.doughnutChartData = this.doughnutChartData1;
      case 2:
        this.doughSeries = 0;
        return this.doughnutChartData = this.doughnutChartData2;
      default:
        return this.doughnutChartData = this.doughnutChartData0;
    }

  }

  public updateBarChart () {
    switch (this.barSeries) {
      case 0:
        console.log('zero');
        this.barSeries++;
        return this.barChartData = this.barChartData0;
      case 1:
        this.barSeries++;
        return this.barChartData = this.barChartData1;
      case 2:
        this.barSeries = 0;
        return this.barChartData = this.barChartData2;
      default:
        return this.barChartData = this.barChartData0;
    }

  }

  ngOnInit() {
    Object.assign(this.barChartData, this.barChartData0);
    Object.assign(this.doughnutChartData, this.doughnutChartData0);
  }
}
