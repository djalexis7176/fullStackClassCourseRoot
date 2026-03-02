/*Odd or Even?

Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
*/

let num

for (num = 1; num <= 15; num++) {
    if (num % 2 === 0) {
        console.log (`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
}
  console.log(`the final number is ${num - 1}`)
    