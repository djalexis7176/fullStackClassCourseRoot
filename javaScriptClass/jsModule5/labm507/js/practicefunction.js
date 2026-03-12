
/* defining the function */


function writeMessage(name) {
    console.log(`Hello ${name}`)
}


/*calling the function */

writeMessage('zak')
writeMessage('Sally')
writeMessage('Mark')
writeMessage('Pedro')


/* you can call the function before you define it because the declared / defined function are put to the very top  "hoisted"   for example:  
writeMessage()
 then after its called you can have it defined:  
function writeMessage() {
    console.log('Hello Class!')
}
    and it will still run the same. because java will put the defined function at the top nomatter where it is written and execute as if it were defined firsta nd called second.


*/

/*function displayCar(color, make, model)  {

    console.log(`I own a ${color} ${make} ${model}.`)
}

    displayCar('white', 'Toyota' , 'Tundra')

    /* if the function accepts parameters, those parameters must be accounted for otherwise you will recive an undefined error.   */

    /* this is how you can have a default parameter by using th e= sign. this is a new js function for es6 ?  */

    function displayCarInfo(make, model, color = 'white')  {

    console.log(`I own a  ${make} ${model} that is ${color}.`)
}

    displayCarInfo('Toyota' , 'Tundra')
    displayCarInfo('Ford', 'ranger', 'green')

const displayCarInfo2 = function (make, model) {
    return `you own a ${make}  ${model}`
}
console.log(displayCarInfo2('Toyota' , 'Tundra'))


/* why use a variable assignment function OVER a named function declaration if hey both look and act same/similar *

/