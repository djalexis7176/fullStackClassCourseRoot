/*
// STEP 1 
// 
let someMonth
function theMonth
let currentMonth
let summerMonth
let myLibraryFunction

//STEP 2.      Give me an example of:
//  a numeric literal expression,  number encompaases integers and decimals,: 100 , 3.14 or -250
//  a string literal expression, this is words put together in quotes: 'I am starting to get this!' , 'Yes I am!'
// a Boolean literal expression, a Boolean is expressed as either true or false: true 
// and a null literal expression. expresses a deliberate nothing or empty value that is negative on purpose or in action (it is different from undefined because that is something that has a value but has not been assigned yet). the null expression is: null

// STEP 3 Give me two examples of complex / variable expressions.
let x = 10;
let y = 5;
let sum = x + y; // This is a complex expression that adds two variables together.

let strFirstName = "John";
let strMiddleName = "Jacob";
let strLastName = "Hinkle Heimer Schmidt";
let strFullName = strFirstName + " " + strMiddleName + " " + strLastName; // This is a complex expression that concatenates three string variables to create a full name.
console.log(strFullName)

// STEP 4.    Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let strZipCode;
let intYourAge;
let strReferral_Source;
let blnMayWeContactYou

//STEP 5.     Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
let strFirstName;
strFirstName = "John"; // Method 1: Declare then assign afterward

let strLastName = "Doe"; // Method 2: Declare and assign in the same statement
let intYourAge = 30;

let strAddress = "3030 Hawthorne St", strCity = "San Diego", strState = "CA";// Method 3: Declare and assign multiple on one line. single expressions that are seperated by commas.

// STEP 6.     Create a variable.
let description = "Section" + 8;
console.log(description)
//Add a number and a string and display the coerced result in the browser’s console window.


//STEP 7    Create two variables.
//For the first variable, add a Boolean and a string and display the coerced result. The assignment only said to display it but did not say displat it in. the console. So I will display it in the browser window using document.write() instead of console.log().
let blnOfTruth = true + "that this is tricky to get at first"
document.write (blnOfTruth)

//For the second variable, add a number and a Boolean and display the coerced result. The assignment only said to display it but did not say displat it in. the console. So I will display it in the browser window using document.write() instead of console.log().
let intOfLies = 10 + false  
document.write(intOfLies)

//STEP 8.    Is the following string literal valid? If not, how would you fix it?

let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
console.log(someString)
//EXPLANATION:   though you can combine single quotes and double quotes there has to be an opening and a closing for each one.  and the apostrophe in  ( I'm  ) acts as a closing single quote..maybe? so to fix this I would have to escape the apostrophe with a backslash or contain the whole line in backticks instead of single or double quotes. I'm using backticks as a container:

let someStringFixed = `Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."`;
console.log(someStringFixed)

//STEP 9.  Create a variable that produces a null value in the console window.
let nullGenius = null;
console.log(nullGenius)

//Then, create a variable that produces an undefined value in the console window.
let undefinedSubject;
console.log(undefinedSubject)

//STEP 10.     Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
console.log(typeof "This is going to be a string");
console.log(typeof 50);
console(typeof true);
console.log(typeof null);
console.log(typeof undefined);


//STEP 11.     Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
//Hello Zak Ruvalcaba, welcome to the JavaScript class!
alert("Hello " + "Zak Ruvalcaba, "+ "welcome to the JavaScript class!")
alert("Hello " + "David Sepulveda, "+ "welcome to the JavaScript class!")
//Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

//STEP 12.  Declare a variable called name and set it equal to your name.
let yourName = "David Sepulveda";
alert("Hello " + yourName + ", welcome to the JavaScript class!")
//Substitute your name in the previous alert string with the variable instead.

//STEP 13.  Declare a variable called course and set it equal to “JavaScript”.
let course= "JavaScript";
alert("Hello "+ yourName + ", \nwelcome to the " + course + " class!")
/
//Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
//STEP 14. Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
//Hello Zak Ruvalcaba.
//Welcome to the JavaScript class!

//STEP 15.   Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
yourName = prompt("what is your name?")
course = prompt("what class are you taking?")
alert("hello "+yourName +", \nwelcome to " + course + " class!")
//STEP 16.      Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
course = prompt("what class are you taking?")
alert("hello "+yourName +", \nwelcome to " + course + " class!")

//STEP 17.    Declare a variable called x and assign it a value of 10.
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum)
//Display the sum of those two numbers in the console window.
console.log(x + y)

//STEP 18.    Declare a variable called X and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.
let x = 20;
x +=20;
console.log(x)

//STEP 19.    Declare a variable called x and assign it a value of 20.
//Multiply and assign 5 to that variable and display the result in the console window.
//The result should be 100.
x = 20;
x *= 5;
console.log(x)

//STEP 20.  Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variable and display the result in the console window.
//The result should be 2. If you got 6.66 try again.
let x = 20 % 3;
x /= 1;
console.log(x)

//STEP 21.   Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
console.log(100>99 && 3=="3")

//STEP 22.   Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
console.log(100<20 || 5!=5)