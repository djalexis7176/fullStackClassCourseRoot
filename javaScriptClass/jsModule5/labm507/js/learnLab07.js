


/* named fucntion declarartion.You start with the function keyword, give it a name, and write your code */

function displayTitle () {
    alert('Welcome to the Guess the Number Game ')


}
function playGame() {
   /* let number = Math.floor(Math.random)  creates a random number between 0 and 1  such as 0.523 and then Mat.floor uses the first number in that random number so for 0.523 it would be 0 .  this would therefore be zro everytime. 

   let number = Math.random() * 10   this will create the random number between 0 and 1 so for example 0.325 and then multiply it  times 10 gives you 3.25. so when you use floo it will give you the first number = 3.  add 1 on it so its never zero! */

   let number = Math.floor(Math.random() * 10 +1)
   let count = 1
   let guess

   alert('I\'m guessing. number between 1 and 10')
   while (true) {
    guess = prompt('Enter your guess')
    if (number > guess ) {
        alert('Too Low')
        count ++
    }  else if (number < guess) {
        alert('Too High')
        count++
    } else {
        alert(`You guessed it! It took you ${count} tries.`)
        return
    }
   }
   }




function init() {
    displayTitle()
    let playAgain = 'y'
    do  {
        playGame()
        playAgain = prompt('Do you want to play again (y/n)?')


    } while (playAgain === 'y')
        alert('thanks for playing')


}

/* firs thing we will do is call the function named :  init 
where everything starts from*/

init ()