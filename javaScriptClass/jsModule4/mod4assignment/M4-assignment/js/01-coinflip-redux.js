/*
Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
Create a for loop that loops a certain amount of times. The amount of times that the for loop executes will be collected from the user via a prompt.
Within the for loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number.
Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
Note: Unlike the previous assignment, you’re not prompting the user for their choice. You’re simply displaying the coin flip results in the console.

*/

let coinFlip
let x = parseInt(prompt('How many flips do you want to try for?'))

for (i = 1; i <= x; i++) {
    coinFlip = Math.round(Math.random()) 
        if (coinFlip < 1) 
            console.log('Flip is Heads!')
         else 
            console.log('Coin flip is Tails!')
        }
    

console.log(`The coin has been flipped ${x} times!`) 
