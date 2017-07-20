import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { D3Service, D3 } from 'd3-ng2-service';
import { LSTM } from './lstm';
import { TRAINING_DATA } from './data/training';
import { Id, D3Node, D3Links, D3Graph} from './models';


@Component({
  selector: 'page-net',
  templateUrl: 'net.html'
})
export class NetComponent implements OnInit {

  @ViewChild('mycanvas') mycanvas;

  colorScheme = 'vivid';
  autoScale = true;

  public stats = [
    {
      'name': 'Loss', 'series': [
      { name: '0', value: 0 }, { name: '1', value: 1 }
    ]
    },
    {
      'name': 'Learning Rate', 'series': [
      { name: '0', value: 0 }, { name: '1', value: 1 }
    ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Stats';
  public svg;
  public color;

  private d3: D3;
  private parentNativeElement: any;
  public simulation;
  public graph: D3Graph;
  public width;
  public height;
  public link;
  public node;
  public myNetwork: LSTM;
  public lr;
  public loss;
  public iter;

  constructor (element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
    this.graph = { nodes: [], links: [] };
    Object.assign(this, this.stats);
  }

  ngOnInit () {

  }

  createNetwork (inputSize = 2, outputSize = 1, numMemBlocks = 3, MemBlockSize = 4) {

    this.myNetwork = new LSTM(inputSize, outputSize, numMemBlocks, MemBlockSize);
    console.log(this.myNetwork);
    this.initGraphs();
  }

  initGraphs () {

    this.stats[0].series = this.myNetwork.loss;
    this.stats[1].series = this.myNetwork.lr;

    const sub = this.myNetwork.stat$.subscribe(stats => {
      this.stats[0].series = stats.loss;
      this.stats[1].series = stats.lr;
      this.stats = [...this.stats];
      const loss = stats.loss[stats.loss.length - 1];
      this.loss = loss.value;
      const lr = stats.lr[stats.lr.length - 1];
      this.lr = lr.value;
      this.iter = lr.name;
    });

    this.myNetwork.neurons.forEach((obj, index) => {
      const neuron = { id: obj.uuid, group: obj.guid };
      this.graph.nodes.push(neuron);
    });
    this.myNetwork.connections.forEach((obj, index) => {
      const conn = {
        source: obj.origNode.uuid,
        target: obj.destNode.uuid,
        value: Math.sqrt(obj.weight * obj.weight)
      };
      this.graph.links.push(conn);
    });
    this.svg = this.d3.select('#mynet');
    this.width = +this.svg.attr('width');
    this.height = +this.svg.attr('height');
    this.color = this.d3.scaleOrdinal(this.d3.schemeCategory20);

    this.simulation = this.d3.forceSimulation()
      .force('link', this.d3.forceLink()
        .id((d) => {
          const id = d as Id;
          return id.id;
        })
        .distance(15)
        .strength(0.1))
      .force('charge', this.d3.forceManyBody())
      .force('center', this.d3.forceCenter(this.width / 2, this.height / 2));

    this.render(this.graph);

  }

  ticked () {
    this.link
      .attr('x1', function (d) { return d.source.x; })
      .attr('y1', function (d) { return d.source.y; })
      .attr('x2', function (d) { return d.target.x; })
      .attr('y2', function (d) { return d.target.y; });

    this.node
      .attr('cx', function (d) { return d.x; })
      .attr('cy', function (d) { return d.y; });
  }

  render (graph) {
    this.link = this.svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graph.links)
      .enter().append('line')
      .attr('stroke-width', function (d) { return Math.sqrt(d.value); });

    this.node = this.svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(graph.nodes)
      .enter().append('circle')
      .attr('r', 5)
      .attr('fill', (d) => { return this.color(d.group); })
      .call(this.d3.drag()
        .on('start', (d) => {return this.dragstarted(d);})
        .on('drag', (d) => {return this.dragged(d);})
        .on('end', (d) => {return this.dragended(d);}));

    this.node.append('title')
      .text(function (d) { return d.id; });

    this.simulation
      .nodes(graph.nodes)
      .on('tick', () => {return this.ticked()});

    this.simulation.force('link')
      .links(graph.links);
  }

  dragged (d) {
    d.fx = this.d3.event.x;
    d.fy = this.d3.event.y;
  }

  dragended (d) {
    if (!this.d3.event.active) {this.simulation.alphaTarget(0);}
    d.fx = null;
    d.fy = null;
  }

  dragstarted (d) {
    if (!this.d3.event.active) {this.simulation.alphaTarget(0.3).restart();}
    d.fx = d.x;
    d.fy = d.y;
  }

}
