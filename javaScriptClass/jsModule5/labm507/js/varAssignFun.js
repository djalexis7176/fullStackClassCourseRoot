


/* const = because variable assignment function values are immutable

$ = name of the variable 
= is a function
with a parameter named id
{ = will run the following: 
 return document


const $ = function (id) {
    return document.getElementById(id)

}
    /* <!-- an element:  <input .....> has a UNIQUE Identifier:   id=fname that the .getElementById will go get this element by its Unique Identifier (id = fname) from the html:

     <input type="text" name="" id="fname" value="Sam">

     */

const $ = id => document.getElementById(id)

console.log($('fname').value, $('lname').value)
console.log($('address').value)
console.log($('city').value, $('state').value,  $('zip').value)