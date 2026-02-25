


   
        /* The “Coin Flip” Game
        
        Usage: Use nested conditional statements
        
        In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math        
        Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number: */

        /*
        let randomNum = Math.round(Math.random()) */
        
        let coinFlip = Math.round(Math.random())
        
        
        /*
        Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
        */

        let choice = prompt('Choose heads or tails (h/t)').toLowerCase()

//math.round rounds decimals to either exactly 0 or exactly 1... so coin flip is either 0 (less than 1) or 1. so the only choice is less than 1.. else its not less than 1.  i chose less than 1 as heads.

        if (coinFlip < 1) {

            if (choice === 'h') {
                alert('The flip was heads and you chose heads...you win!')
            } else if (choice === 't') {
                alert('The flip was heads but you chose tails...you lose!')
            }

        } else  {

            if (choice === 'h') {
                alert('The flip was tails but you chose heads...you lose!')
            } else if (choice === 't') {
                alert('The flip was tails and you chose tails...you win!')
            }
        }





/*
        Use a conditional to check the result of the coin flip.
        
        
        If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.


        If the result is heads and the user selects heads, display the following message within an alert:
        The flip was heads and you chose heads...you win!


        If the result is heads and the user selects tails, display the following message within an alert:
        The flip was heads but you chose tails...you lose!

        If the result is tails and the user selects heads, display the following message within an alert:
        The flip was tails but you chose heads...you lose!

        If the result is tails and the user selects tails, display the following message within an alert:
        The flip was tails and you chose tails...you win! */


