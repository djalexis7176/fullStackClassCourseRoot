let miles
let gallons
let mpg
let again = 'y'

do {
    miles = parseFloat(prompt('Enter the number of miles you have driven'))
    gallons = parseFloat(prompt('how many gallons does your vehicle hold?'))
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons 
        console.log(`Your car get ${mpg.toFixed(2)} miles per gallon`)
    } else {
        alert('One or both of your entries are invalid. Please Enter in a number greater than zero!')
    }
    again = prompt('Do you want to calculate again? (y/n)').toLowerCase()
} while (again === 'y')
    console.log('Application has ended')
