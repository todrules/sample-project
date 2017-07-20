import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { StaticCrossover, StaticSelection } from '../neuralnet/data/config';
import { Mutation } from '../neuralnet/mutation';
import { NNOptions } from '../neuralnet/models';
import { Network } from '../neuralnet/network';

@Injectable()
export class Evo implements OnInit, OnDestroy {

  private inputsize: number;
  private outputsize: number;
  private fitnessfunc: any;
  private options: NNOptions;
  private equal: boolean;
  private clear: boolean;
  private popsize: number;
  private elitism: number;
  private provenance: number;
  private mutationRate: number;
  private mutationAmount: number;
  private selection: any;
  private crossover: any;
  private mutation: any;
  private template: any;
  public population;
  public generation;

  constructor () {
    this.inputsize = 2;
    this.outputsize = 1;
    this.fitnessfunc = null;
    this.options = {};
    this.equal = this.options.equal || false;
    this.clear = this.options.clear || false;
    this.popsize = this.options.popsize || 50;
    this.elitism = this.options.elitism || 0;
    this.provenance = this.options.provenance || 0;
    this.mutationRate = this.options.mutationRate || 0.3;
    this.mutationAmount = this.options.mutationAmount || 1;
    this.selection = this.options.selection || StaticSelection.POWER;
    this.crossover = this.options.crossover || [
      StaticCrossover.SINGLE_POINT,
      StaticCrossover.TWO_POINT,
      StaticCrossover.UNIFORM,
      StaticCrossover.AVERAGE
    ];
    this.mutation = this.options.mutation || Mutation.FFW;
    this.template = this.options.network || false;

  }

  public createGenomePool (network) {
    this.population = [];
    let copy;
    for (let i = 0; i < this.popsize; i++) {
      if (this.template) {
        copy = Network.fromJSON(network.toJSON());
      } else {
        copy = new Network(this.inputsize, this.outputsize);
      }
      copy.score = null;
      this.population.push(copy);
    }
  }

  public evolveGenomePool () {
    const newPopulation = [];
    const elitists = [];
    if (this.population[this.population.length - 1].score === null) {
      this.evaluateGenomes();
    }
    this.sortGenomes();
    // Elitism
    for (let i = 0; i < this.elitism; i++) {
      elitists.push(this.population[i]);
    }
    // Provenance
    for (let i = 0; i < this.provenance; i++) {
      newPopulation.push(Network.fromJSON(this.template.toJSON()));
    }
    // Breed the next individuals
    for (let i = 0; i < this.popsize - this.elitism - this.provenance; i++) {
      newPopulation.push(this.getChildren());
    }
    // Replace the old population with the new population
    this.population = newPopulation;
    this.mutateGenomes();

    for (let i = 0; i < elitists.length; i++) {
      this.population.push(elitists[i]);
    }
    // Reset the scores
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].score = null;
    }

    this.generation++;
  }

  getChildren () {
    return Network.crossOver(this.getParent(), this.getParent(), this.equal);
  }

  mutateGenomes () {
    for (let i = 0; i < this.population.length; i++) {
      if (Math.random() <= this.mutationRate) {
        for (let j = 0; j < this.mutationAmount; j++) {
          const mutationMethod = this.mutation[Math.floor(Math.random() * this.mutation.length)];
          this.population[i].mutate(mutationMethod);
        }
      }
    }
  }

  evaluateGenomes () {
    for (let i = 0; i < this.population.length; i++) {
      const genome = this.population[i];
      if (this.clear) {
        genome.clear();
      }
      this.population[i].score = this.fitnessfunc(genome);
    }
  }

  sortGenomes () {
    this.population.sort(function (a, b) {
      return b.score - a.score;
    });
  }

  getFittestGenomes () {
    if (this.population[this.population.length - 1].score === null) {
      this.evaluateGenomes();
    }
    this.sortGenomes();
    return this.population[0];
  }

  getAverageFitness () {
    if (this.population[this.population.length - 1].score == null) {
      this.evaluateGenomes();
    }
    let score = 0;
    for (let i = 0; i < this.population.length; i++) {
      score += this.population[i].score;
    }
    return score / this.population.length;
  }

  getParent () {
    switch (this.selection) {
      case StaticSelection.POWER:
        if (this.population[0].score < this.population[1].score) {
          this.sortGenomes();
        }
        const index = Math.floor(Math.pow(Math.random(), this.selection.power) * this.population.length);
        return this.population[index];

      case StaticSelection.FITNESS_PROPORTIONATE:
        // As negative fitnesses are possible
        // https://stackoverflow.com/questions/16186686/genetic-algorithm-handling-negative-fitness-values
        // this is unnecessarily run for every individual, should be changed
        let totalFitness = 0;
        let minimalFitness = 0;
        for (let i = 0; i < this.population.length; i++) {
          const score = this.population[i].score;
          minimalFitness = score < minimalFitness ? score : minimalFitness;
          totalFitness += score;
        }

        minimalFitness = Math.abs(minimalFitness);
        totalFitness += minimalFitness * this.population.length;
        const random = Math.random() * totalFitness;
        let value = 0;

        for (let i = 0; i < this.population.length; i++) {
          const genome = this.population[i];
          value += genome.score + minimalFitness;
          if (random < value) {
            return genome;
          }
        }
        return this.population[Math.floor(Math.random() * this.population.length)];

      case StaticSelection.TOURNAMENT:
        if (this.selection.size > this.popsize) {
          throw new Error('Your tournament size should be lower than the population size, please change Methods.Selection.TOURNAMENT.size');
        }
        // Create a tournament
        const individuals = [];
        for (let i = 0; i < this.selection.size; i++) {
          const randomPop = this.population[Math.floor(Math.random() * this.population.length)];
          individuals.push(randomPop);
        }

        // Sort the tournament individuals by score
        individuals.sort(function (a, b) {
          return b.score - a.score;
        });

        // Select an individual
        for (let i = 0; i < this.selection.size; i++) {
          if (Math.random() < this.selection.probability || i === this.selection.size - 1) {
            return individuals[i];
          }
        }
    }
  }

  exportPopulation () {
    const json = [];
    for (let i = 0; i < this.population.length; i++) {
      json.push(this.population[i].toJSON());
    }
    return json;
  }

  importPopulation (json) {
    const population = [];
    for (let i = 0; i < json.length; i++) {
      population.push(Network.fromJSON(json[i]));
    }
    this.population = population;
    this.popsize = population.length;
  }

  ngOnInit () {

  }

  ngOnDestroy () {

  }

}
