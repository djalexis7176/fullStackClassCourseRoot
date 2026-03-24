//GLOBAL VARIABLES 

let monthlyRate
let monthlyInterest
let months
let futureValue


let investment //FROM THE FORM
let rate  //FROM THE FORM
let years  //FROM THE FORM
let calculate  //FROM THE FORM
let output  //FROM THE FORM

// HELPER FUNCTION TO GET THE DOM ELEMMENTS

//DO THIS BY WRITING A CONST WITH $ SYMBOL.  EXTRACTING THEIR VALUES BY THE DOLLAR SYMBOL

//OPTION 1 : USE THE HELPE FUNCTION : 

const $ = (id) => document.getElementById(id)

investment           = $('investment')
rate                = $('rate')
years                = $('years')
calculate               = $('calculate')
output                = $('output')


//OPTION 2: each element (or variable?) gets to go through the document to get the elemennt by id...  
/*
investment           = document.getElementById('investment')
rate                = document.getElementById('rate')
years                = document.getElementById('years')
calculate               = document.getElementById('calculate')
output                = document.getElementById('output')

*/

function calculateInvestment(investment, rate, years)   {
    monthlyRate = rate / 12 / 100
    months = years * 12

    for (let i = 0; i < months; i++)  {
        monthlyInterest = investment * monthlyRate 
        investment += monthlyInterest
    }

    return investment
}
calculate.addEventListener ('click', () => {
    futureValue = calculateInvestment (
        parseFloat(investment.value),
        parseFloat(rate.value),
        parseFloat (years.value)
    )
    output.innerHTML = `Future value on investment: $${futureValue.toFixed(2)}`
})