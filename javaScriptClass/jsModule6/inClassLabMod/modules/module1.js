const add = (x, y) => {
    return x + y
}

const sub = (x, y) => {
    return x - y
}

const multiply = (x, y) => {
    return x * y 
}

/* export const divide = (x, y) => {
    return x / y
} example putting keyword: export before each and every function looks like this
    */ 
    
const divide = (x, y) => {
    return x / y
}

/* 
OR 
you can put export before each function or you can put a export keyword 
or
you can put export keyword and curly brackets with the name of each function in the brackets seperated by commas ] */

export {add, sub, multiply, divide}

/* you can also use:
export default {add,sub, multiply,divide}. 
makes it so when you import on app.js you don't have to say import * as calc from '/modules/module1.js'
you can just say 
import calc from '/modules/module1.js'
then 
example:
cosole.log(calc.add(5,5)). for calling the function into the action
so default oonly helps eliminate:  * as
*/


