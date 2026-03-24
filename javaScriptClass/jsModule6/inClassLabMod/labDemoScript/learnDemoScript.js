let buttons = document.getElementById('buttons')

/*
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
*/


buttons.addEventListener('click', (e) => {
    console.log(`You clicked on ${e.target.innerText}`)
})
/*
btn2.addEventListener('click', (e) => {
    console.log(`You clicked on ${e.currentTarget.innerText}`)
})
btn3.addEventListener('click', (e) => {
    console.log(`You clicked on ${e.currentTarget.innerText}`)
})
btn4.addEventListener('click', (e) => {
    console.log(`You clicked on ${e.currentTarget.innerText}`)
})
btn5.addEventListener('click', (e) => {
    console.log(`You clicked on ${e.currentTarget.innerText}`)
})
*/