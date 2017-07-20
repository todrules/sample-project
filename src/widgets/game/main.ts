/* tslint:disable */

import { population } from './population';
import { Player } from './player';
import { Mutation } from '../neuralnet/mutation';
import { Evo } from './evo';
import { NeuralNet } from '../neuralnet/neuralnet';


/** Settings */
export const WIDTH = document.body.clientWidth;
export const HEIGHT = 800;

export const MAX_AREA = 10000;
export const MIN_AREA = 400;

export const RELATIVE_SIZE = 1.1;
export const DECREASE_SIZE = 0.998;

export const DETECTION_RADIUS = 150;
export const FOOD_DETECTION = 3;
export const PLAYER_DETECTION = 3;

export const MIN_SPEED = 0.6;
export const SPEED = 3;

export const FOOD_AREA = 80;
export const FOOD_AMOUNT = Math.round(WIDTH * HEIGHT * 4e-4);

// GA settings
export const PLAYER_AMOUNT = Math.round(WIDTH * HEIGHT * 8e-5);
export const ITERATIONS = 1000;
export const START_HIDDEN_SIZE = 0;
export const MUTATION_RATE = 0.3;
export const ELITISM_PERCENT = 0.1;

// Trained population
export const USE_TRAINED_POP = true;

// Global export consts
export let neat;

/** Construct the genetic algorithm */
export function initNeat () {
  console.log('starting initNeat');
  neat = new Evo(

  );

  if (USE_TRAINED_POP) {
    neat.population = population;
  }
}

/** Start the evaluation of the current generation */
export function startEvaluation () {

  for (let genome in neat.population) {
    if(neat.population.hasOwnProperty(genome)) {
      genome = neat.population[genome];
      const player = new Player(genome);
    }
  }
}

/** End the evaluation of the current generation */
export function endEvaluation () {
  console.log('Generation:', neat.generation, '- average score:', neat.getAverage());

  neat.sort();
  const newPopulation = [];

  // Elitism
  for (let i = 0; i < neat.elitism; i++) {
    newPopulation.push(neat.population[i]);
  }

  // Breed the next individuals
  for (let i = 0; i < neat.popsize - neat.elitism; i++) {
    newPopulation.push(neat.getOffspring());
  }

  // Replace the old population with the new population
  neat.population = newPopulation;
  neat.mutate();

  neat.generation++;
  startEvaluation();
}
