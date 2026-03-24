

/* teacher code in class: */

//GLOBAL FUNCTION
let result



// ADD A FUNCTION CALLED CALCULATE
function calculate (x, y, o) {
    switch (o) {
        case '+':
            return x + y 
        case '-':
            return x - y 
        case  '*':
            return x * y  
        case '/':
            return x / y 
        default:
            return 0
    }
}


// COLLECT FIRST NUMBER FROM USER
const num1 = parseFloat(prompt('Enter first number'))

// COLLECT SECOND NUMBER FROM USER
const num2 = parseFloat(prompt('Enter second number'))
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
const operator = (prompt('Enter operator (+, -, *, / '))
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

console.log(calculate(num1, num2, operator))

//Calculator assignment for java script class mod5 assign 5 3of 3


//  calculation logic function






/*

/*. my attempt that I submitted for class */ 
/*
function calculate(x, y, operation) {
    let result;


    
    // Switch statement to do the correct math
    switch (operation) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
    }
    
    return result;
}


*/

// Var for user's data

let firstNum, secondNum, userOperation;

// A flag to keep track of whether the user typed a valid operation
let isValid = false;

/*
do {
   

    firstNum = parseFloat(prompt("Enter your first number:"));
    
    secondNum = parseFloat(prompt("Enter your second number:"));
    
    userOperation = prompt("What operation would you like to perform? (add, subtract, multiply, divide)").toLowerCase();
    
    // Check user input:

    if (userOperation === "add" || userOperation === "subtract" || userOperation === "multiply" || userOperation === "divide") {
        
        let finalResult = calculate(firstNum, secondNum, userOperation)
        alert(`The result is: ${finalResult}`);
        isValid = true;
        
    } else {
        alert("Invalid operation! You must type add, subtract, multiply, or divide. Let's try again.");
        isValid = false; 
    }
    
} while (isValid === false);

*/