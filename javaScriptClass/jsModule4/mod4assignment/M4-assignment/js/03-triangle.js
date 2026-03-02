/*Looping a Triangle

Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######
*/

let hash = '#'

do {
    console.log(hash)
    hash += '#'
}
    while (hash.length <= 7)
console.log('You made a hash tree!')

