export interface NNOptions {
  equal?: boolean;
  clear?: boolean;
  popsize?: number;
  elitism?: number;
  provenance?: number;
  mutationRate?: number;
  mutationAmount?: number;
  selection?: any;
  crossover?: any;
  mutation?: any;
  network?: any;
}

export interface MemOptions {
  memoryToMemory?: boolean;
  outputToMemory?: boolean;
  outputToGates?: boolean;
  inputToOutput?: boolean;
  inputToDeep?: boolean;

}

export interface CostState {
  error?: number;
  misses?: any;
}

export type CostFunc = (target: number, output: number[]) => CostState;

export type ActivationFunc = (x: number, derivate: boolean) => ActivationState;

export interface ActivationState {
  activation?: number;
}

export interface ConnectionType {
  name: string;
}

export interface ConnectionInf {
  ALL_TO_ALL?: ConnectionType;
  ALL_TO_ELSE?: ConnectionType;
  ONE_TO_ONE?: ConnectionType;
}

export interface CrossoverType {
  name: string;
  config?: number[];
}

export interface CrossOverInf {
  SINGLE_POINT?: CrossoverType;
  TWO_POINT?: CrossoverType;
  UNIFORM?: CrossoverType;
  AVERAGE?: CrossoverType;
}

export interface GatingType {
  name: string;
}

export interface GatingInf {
  OUTPUT?: GatingType;
  INPUT?: GatingType;
  SELF?: GatingType;
}

export interface SelectionType {
  name: string;
  power?: number;
  size?: number;
  probability?: number;
}

export interface SelectionInf {
  FITNESS_PROPORTIONATE?: SelectionType;
  POWER?: SelectionType;
  TOURNAMENT?: SelectionType;
}

export interface MutationType {
  name: string;
  min?: number;
  max?: number;
  keep_gates?: boolean;
  mutateOutput?: boolean;
  allowed?: any[];
}

export interface Id {
  id: any;
}

export interface D3Node {
  id: number;
  group?: number;

}

export interface D3Links {
  source: number;
  target: number;
  value: number;
}

export interface D3Graph {
  nodes: D3Node[];
  links: D3Links[];
}
