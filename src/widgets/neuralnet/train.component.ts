import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { D3Service, D3 } from 'd3-ng2-service';
import { LSTM } from './lstm';
import { TRAINING_DATA } from './data/training';
import { Id, D3Node, D3Links, D3Graph } from './models';
import { NetComponent } from './net.component';


@Component({
  selector: 'page-train',
  templateUrl: 'train.html',
  providers: [NetComponent]
})
export class TrainComponent implements OnInit {

  @ViewChild('mycanvas') mycanvas;

  colorScheme = 'vivid';
  autoScale = true;

  public stats = [
    {'name': 'Loss',
      'series':
      [
        { name: '0', value: 0 },
        { name: '1', value: 1 }]},
    {'name': 'Learning Rate',
      'series':
      [
        { name: '0', value: 0 },
        { name: '1', value: 1 }]}
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
  public lr;
  public loss;
  public iter;
  public myNetwork: LSTM;
  constructor (element: ElementRef, d3Service: D3Service, Net: NetComponent) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
    this.graph = { nodes: [], links: [] };
    Object.assign(this, this.stats);
    this.myNetwork = Net.myNetwork;
  }

  ngOnInit () {

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

  train (iterations = 1000, loss = 0.03, lr = 0.7, gamma = 0.0002, power = 1.5) {
    this.myNetwork.train(TRAINING_DATA, {
      error: loss,
      iterations: iterations,
      rate: lr,
      gamma: gamma,
      power: power
    });
  }

  test () {
    console.log(this.myNetwork);
    console.log(this.myNetwork.activate([0, 0]));
    console.log(this.myNetwork.activate([0, 1]));
    console.log(this.myNetwork.activate([1, 0]));
    console.log(this.myNetwork.activate([1, 1]));
  }

}
