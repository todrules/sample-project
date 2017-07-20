export const gaugeChartData:any = {
  chartType: 'Gauge',
  dataTable: [
    ['Label', 'Value'],
    ['Value', 0]
  ],
  options: {
    animation: { easing: 'out' },
    width: 150, height: 150,
    greenFrom: 80, greenTo: 100,
    yellowFrom: 65, yellowTo: 79,
    redFrom: 0, redTo: 64,
    minorTicks: 5,
    min: 0, max: 100,
    majorTicks: ['0', '20', '40', '60', '80', '100'],
    greenColor: '#C6D8D3',
    redColor: '#D85F87',
    yellowColor: '#FDF0D5'
  }
};

export const PAChartData:any = {
  chartType: 'AreaChart',
  dataTable: [
    ['Month', 'Page Authority'],
    ['January', 21],
    ['February', 25],
    ['March', 26],
    ['April', 28],
    ['May', 31],
    ['June', 32]
  ],
  options: {
    curveType: 'function',
    title: 'Page Rank',
    legend: { position: 'none' },
    backgroundColor: {fill: '#657ED4', strokeWidth: 0},
    chartArea: { backgroundColor: '#657ED4', top: 0, left: 0, width: '100%', height: '100%'},
    colors: ['#ffffff'],
    hAxis: {
      gridlines: {count: 0},
      minorGridlines: {count: 0},
      textPosition: 'none',
      title: null
    },
    vAxis: {
      gridlines: { count: 0 },
      minorGridlines: { count: 0 },
      textPosition: 'none',
      title: null
    }

  }
};

export const MozRankChartData: any = {
  chartType: 'AreaChart',
  dataTable: [
    ['Month', 'MozRank'],
    ['January', 3.86],
    ['February', 3.93],
    ['March', 3.96],
    ['April', 4.01],
    ['May', 4.09],
    ['June', 4.12]
  ],
  options: {
    curveType: 'function',
    title: 'Page Rank',
    legend: { position: 'none' },
    backgroundColor: { fill: '#657ED4', strokeWidth: 0 },
    chartArea: { backgroundColor: '#657ED4', top: 0, left: 0, width: '100%', height: '100%' },
    colors: ['#ffffff'],
    hAxis: {
      gridlines: { count: 0 },
      minorGridlines: { count: 0 },
      textPosition: 'none',
      title: null
    },
    vAxis: {
      gridlines: { count: 0 },
      minorGridlines: { count: 0 },
      textPosition: 'none',
      title: null
    }
  }
};

export const MozTrustChartData: any = {
  chartType: 'AreaChart',
  dataTable: [
    ['Month', 'MozTrust'],
    ['January', 3.53],
    ['February', 3.60],
    ['March', 3.65],
    ['April', 3.73],
    ['May', 3.75],
    ['June', 3.81]
  ],
  options: {
    curveType: 'function',
    title: 'Page Rank',
    legend: { position: 'none' },
    backgroundColor: { fill: '#657ED4', strokeWidth: 0 },
    chartArea: { backgroundColor: '#657ED4', top: 0, left: 0, width: '100%', height: '100%' },
    colors: ['#ffffff'],
    hAxis: {
      gridlines: { count: 0 },
      minorGridlines: { count: 0 },
      textPosition: 'none',
      title: null
    },
    vAxis: {
      gridlines: { count: 0 },
      minorGridlines: { count: 0 },
      textPosition: 'none',
      title: null
    }
  }
};

export const lineChartData: any = {
  chartType: 'LineChart',
  dataTable: [
    ['Month', 'Page Authority', 'MozRank', 'MozTrust'],
    ['January', 21, 3.86, 3.53],
    ['February', 25, 3.93, 3.60],
    ['March', 26, 3.96, 3.65],
    ['April', 28, 4.01, 3.73],
    ['May', 31, 4.09, 3.75],
    ['June', 32, 4.12, 3.81]
  ],
  options: { title: 'Company Performance' }
};
