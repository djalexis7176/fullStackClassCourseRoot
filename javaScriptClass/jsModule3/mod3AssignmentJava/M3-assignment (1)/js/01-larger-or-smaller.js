/*Larger or Smaller?

Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.*/

let intFirst
let intSecond

intFirst = parseInt(prompt(`Please enter a number: `))

intSecond = parseInt(prompt(`Now enter a second number`))

if (intFirst === intSecond) {
document.write(`your first number, ${intFirst} is equal to your second number, ${intSecond}.`)
} else if (intFirst > intSecond) {
    document.write(`${intFirst} `)
}
else {
    document.write(`${intSecond} `)
}
