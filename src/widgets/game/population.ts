import { PLAYER_AMOUNT } from './main';
import { Network } from '../neuralnet/network';

export const population = [
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.7720866327218414,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': 11
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': 0.040529167694171475,
        'type': 'hidden',
        'squash': 'RELU',
        'index': '16'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '17'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '18'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 18,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 18,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 18,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.028472043972609412,
        'from': 8,
        'to': 18,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 18,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 18,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 18,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 18,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 17,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.059514645508516664,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.008616698980009468,
        'from': 16,
        'to': 18,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.031123400422858716,
        'from': 16,
        'to': 17,
        'gater': 0
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': 11
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.048629215983209045,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': 1,
        'from': '17',
        'to': '17',
        'gater': null
      },
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.01636191553373663,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.048629215983209045,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.048629215983209045,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.07623454218397559,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'TANH',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.062063537579453154,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.06400114126666279,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': 11
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.4666144667781344,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.041440394790798245,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': 11
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.01636191553373663,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.03226929236372622,
        'from': 13,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.035507973704412166,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.5411052196882778,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.031123400422858716,
        'from': 16,
        'to': 17,
        'gater': 0
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': 11
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': 8
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.09277510317981347,
        'from': 13,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': 11
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.4666144667781344,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.048629215983209045,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.06400114126666279,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': -0.22115847009287437,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': 5
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': -0.22115847009287437,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': 1,
        'from': '17',
        'to': '17',
        'gater': null
      },
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': -0.05831571100501525,
        'from': 0,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.25440656353450486,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.5411052196882778,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04823154862817334,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.5411052196882778,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': -0.6134351458932366,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': 0.006330555912326119,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.031123400422858716,
        'from': 16,
        'to': 17,
        'gater': 0
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.041440394790798245,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': 0
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.6552225583963397,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 1.2515240304540414,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.048629215983209045,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05724869156011511,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.03226929236372622,
        'from': 13,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -0.04563341160455297,
        'type': 'hidden',
        'squash': 'IDENTITY',
        'index': '16'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '17'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '18'
      }
    ],
    'connections': [
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 18,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 18,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 18,
        'gater': 4
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 18,
        'gater': 1
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 18,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 18,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 18,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 18,
        'gater': null
      },
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.06400114126666279,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.0181113313454333,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 18,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.041440394790798245,
        'from': 17,
        'to': 18,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.028472043972609412,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.3533792976609607,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.01636191553373663,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'TANH',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.002893178380447378,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.4666144667781344,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.048629215983209045,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': 1
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.06400114126666279,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.028472043972609412,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'LOGISTIC',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.01690810962568659,
        'from': 16,
        'to': 17,
        'gater': 15
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': -1.4400212676737092,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': 0
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.4068723913490687,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.0058927706667381285,
        'from': 9,
        'to': 17,
        'gater': 14
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.041440394790798245,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.398685952675371,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': 11
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.034970101142611745,
        'from': 16,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 16,
        'gater': 6
      }
    ],
    'input': 16,
    'output': 2
  },
  {
    'nodes': [
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '0'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '1'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '2'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '3'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '4'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '5'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '6'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '7'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '8'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '9'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '10'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '11'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '12'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '13'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '14'
      },
      {
        'bias': 0,
        'type': 'input',
        'squash': 'LOGISTIC',
        'index': '15'
      },
      {
        'bias': -1.4717517509742422,
        'type': 'output',
        'squash': 'GAUSSIAN',
        'index': '16'
      },
      {
        'bias': 0.3087436497338314,
        'type': 'output',
        'squash': 'HLIM',
        'index': '17'
      }
    ],
    'connections': [
      {
        'weight': -0.03099810573835496,
        'from': 0,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.042673416967570876,
        'from': 2,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.045008688836155025,
        'from': 1,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.08728755494684406,
        'from': 3,
        'to': 16,
        'gater': null
      },
      {
        'weight': 1.4402201419923903,
        'from': 2,
        'to': 17,
        'gater': 15
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 16,
        'gater': 1
      },
      {
        'weight': 0.05184046817163149,
        'from': 5,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.05091566974540393,
        'from': 4,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.04729527424867816,
        'from': 5,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.25185140261031774,
        'from': 6,
        'to': 17,
        'gater': 4
      },
      {
        'weight': 0.056206289109127255,
        'from': 8,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.003276566860253502,
        'from': 7,
        'to': 17,
        'gater': 1
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.03852615092597875,
        'from': 8,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.030357374200478654,
        'from': 9,
        'to': 17,
        'gater': null
      },
      {
        'weight': -0.035414690266642526,
        'from': 11,
        'to': 16,
        'gater': null
      },
      {
        'weight': 0.0492182017687659,
        'from': 10,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.019086008191027834,
        'from': 12,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.5024907442751645,
        'from': 11,
        'to': 17,
        'gater': null
      },
      {
        'weight': 1.0069164221380793,
        'from': 14,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.06147474963938953,
        'from': 13,
        'to': 17,
        'gater': 6
      },
      {
        'weight': 0.06400114126666279,
        'from': 15,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.04206229870333389,
        'from': 15,
        'to': 17,
        'gater': null
      },
      {
        'weight': 0.036226918338303216,
        'from': 17,
        'to': 16,
        'gater': null
      },
      {
        'weight': -0.032562723951449754,
        'from': 16,
        'to': 17,
        'gater': null
      }
    ],
    'input': 16,
    'output': 2
  }
];

export function newPop() {
  for (let i = 0; i < PLAYER_AMOUNT; i++) {
    const json = population[i % population.length];
    newPop[i] = Network.fromJSON(json);
  }

}
