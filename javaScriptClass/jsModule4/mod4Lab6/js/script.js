
let investment
let rate
let years
let futureValue
let i  
    

investment = parseFloat(prompt('Enter investment amount as xxxx.xx'))
rate = parseFloat(prompt('enter inetrest rate as xx.x '))
years = parseInt(prompt('Enter the number of years you want to invest'))

futureValue = investment
for (i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate /100)
}
document.write(`Investment amount : $${investment.toFixed(2)} <br>`)
document.write(`Interest rate : ${rate.toFixed(2)}% <br>`)
document.write(`Number of years : ${years} <br>`)
document.write(`Future value : $${futureValue.toFixed(2)} <br>`)