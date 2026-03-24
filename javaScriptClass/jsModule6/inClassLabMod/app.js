/*
one way is to write out each function name from module1.js  as in:

import {add, sub, multiply, divide} from './modules/modules1.js'
 or
*/

import * as calc from './modules/module1.js'

/*  
IMPORT * =everything AS (name the import of all functions together in one group as "calculator" or "calc") CALC FROM the module1.js module document

"calc" becomes an alias for the module

*= everything from model1.js named as calculator */ 
console.log(calc.add(5,5))
console.log(calc.sub(10,5))
console.log(calc.multiply(10,5))
console.log(calc.divide(10,5))
