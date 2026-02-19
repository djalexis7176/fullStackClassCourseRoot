// --- STEP 1: DECLARE 9 VARIABLES (Hungarian Notation & Camel Case) ---
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let strZipCode; // Stored as string to preserve leading zeros
let intAge;
let strReferralSource;
let blnMayWeContactYou;

// --- STEP 2: THREE WAYS TO DECLARE AND ASSIGN ---
// Method 1: Declare then assign later
let strFavoriteFood;
strFavoriteFood = "Pizza";

// Method 2: Declare and assign on one line
let intLuckyNumber = 7;

// Method 3: Declare and assign multiple on one line
let strCarMake = "Toyota", strCarModel = "Camry";

// --- STEP 3 & 4: COERCION (NUMBER + STRING) ---
let numAndString = 10 + " apples";
console.log("Step 4 Coercion (Number + String):", numAndString);

// --- STEP 5 & 6: COERCION (BOOLEAN + STRING / NUMBER + BOOLEAN) ---
let blnAndString = true + " is the answer";
console.log("Step 6a Coercion (Boolean + String):", blnAndString);

let numAndBln = 20 + true; // true evaluates to 1
console.log("Step 6b Coercion (Number + Boolean):", numAndBln);

// --- STEP 7: FIXING THE STRING LITERAL ---
//* ORIGINAL: let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
   //ISSUE: The single quote in "I'm" closes the string prematurely.
   //FIX: Use backticks as a wrapper for the string to allow both single and double quotes without needing to escape them.
   
let someString = ` Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former." `;
console.log("Step 7 (Fixed String):", someString);

// --- STEP 8: NULL AND UNDEFINED ---
let nullValue = null;
console.log("Step 8 (Null):", nullValue);

let undefinedValue;
console.log("Step 8 (Undefined):", undefinedValue);

// --- STEP 9: TYPEOF OPERATOR ---
console.log("Step 9 (typeof string):", typeof "Hello");
console.log("Step 9 (typeof number):", typeof 42);
console.log("Step 9 (typeof Boolean):", typeof false);
console.log("Step 9 (typeof object):", typeof {name: "David"});
console.log("Step 9 (typeof undefined):", typeof undefined);

// --- STEPS 10 - 15: ALERTS, PROMPTS, AND CONCATENATION ---
// 10-12: Name variable and concatenation
let strName = "David Sepulveda";
let strCourse = "JavaScript";

// 13-14: Reworking with \n for line break
// 15: Adding Prompts
strName = prompt("What is your name?");
strCourse = prompt("What class are you taking?");

alert("Hello " + strName + ".\nWelcome to the " + strCourse + " class!");

// --- STEP 16 - 19: ARITHMETIC OPERATORS ---
let x = 10;
let y = 20;
console.log("Step 16 (Sum):", x + y);

x = 20;
x += 20; // Add and assign
console.log("Step 17 (Add/Assign):", x);

x = 20;
x *= 5; // Multiply and assign
console.log("Step 18 (Multiply/Assign):", x);

x = 20 % 3; // Remainder is 2
x /= 1;     // Divide and assign 1
console.log("Step 19 (Remainder/Divide):", x);

// --- STEP 20 & 21: LOGICAL OPERATORS ---
// Evaluates to true
console.log("Step 20 (True Logic):", (10 > 5) && (1 === 1));

// Evaluates to false (using different operators)
console.log("Step 21 (False Logic):", (100 <= 50) || (5 != 5));
