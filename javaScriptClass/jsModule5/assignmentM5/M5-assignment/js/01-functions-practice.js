

//STEP 1. 

/* teachers result in class */
const halfNumber = function(a) {
    console.log(`half of ${a} is ${a / 2}`)
}

halfNumber(10)
/*

/* my submitted assignment */

/*
function halfNumber (num) {
    num = prompt('enter in a number')
    
    let result = num /2
    console.log(`half of ${num} is ${result}`)
return result
}
halfNumber()

*/


//STEP 2 : Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

/* teachers result in class */

/*const squareNumber = function(a) {
    console.log(`the result of squaring the number:  ${a} is ${Math.pow(a ,2)}`)
}

squareNumber(10)
*/

/* my submitted assignment */

/*
function squareNumber (num2) {
    num2 = prompt('put in a number to be squared')
    let result = num2 * num2
    console.log(`the number ${num2} squared is ${result}`)
    alert(`the number ${num2} squared is ${result}`)
}
squareNumber() 
*/



//STEP 3:  Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

/* teachers result in class */

/*
function percentOf (a, b) {
    console.log(`${a / b} is 50% of ${a}`)
}
percentOf(4, 2)
*/


/* my submitted assignment */

/*
function percentOf (num3a, num3b) {

num3a = prompt('enter a number to start with. this  number will be calculated as  a percentage of the next number you put in')

num3b = prompt(`put in the second number now.  We will figure out what percentage your number ${num3a} is of this second number`)

let result = num3a / num3b * 100

console.log(`the number ${num3a} is ${result} percent of ${num3b} `)

alert(`the number ${num3a} is ${result} percent of ${num3b} `)
}
percentOf()

/*

//STEP 4 : Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10." 

*/

/* teachers result in class */

function findModulus(a, b) {
    console.log(`${b % a} is the modulus of ${a} and ${b}`)
}
findModulus(4, 10)



/* my submitted assignment */

/*
function findModulus (num4a, num4b) {

    num4a = prompt('enter a first number')
    num4b = prompt('enter in a second number')
    let result = num4b % num4a
   console.log(`${result} is the modulus of ${num4a} and of ${num4b}`)
   alert(`${result} is the modulus of ${num4a} and of ${num4b}`)
   return result
}
findModulus()
*/
