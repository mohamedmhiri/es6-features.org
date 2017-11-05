'use strict'

import * as math from './modules'

//  someApp.js
console.log('2π = ' + math.sum(math.pi, math.pi))

//  otherApp.js
import { sum, pi } from './modules'
console.log('2π = ' + sum(pi, pi))
