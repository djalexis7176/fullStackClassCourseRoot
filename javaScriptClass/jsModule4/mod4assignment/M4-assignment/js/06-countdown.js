/* Countdown

Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on. 
*/


let i
let num = parseInt(prompt('Give me a number to countdown from '))

for (i = num; i >=0; i--) {
    console.log(i)
} 
console.log('this is the end of your countdown')


