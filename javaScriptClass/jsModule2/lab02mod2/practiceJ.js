let carType = prompt ("What kind of car do you drive?");
let milesDriven = prompt("How many miles have you driven?");
let gallons = prompt("How many gallons of fuel does your car hold?");
let mpg = milesDriven / gallons;
document.write(`Your ${carType} gets ${mpg.toFixed(2)} miles per gallon.`);


