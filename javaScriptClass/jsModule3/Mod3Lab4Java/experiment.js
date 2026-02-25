let beerType
let beerAbv 
let beerSize 
let beerNum
let alcoholNum 
let alcoholTotal




document.write(`<h3>Welcome To the Beer Alcohol Calculator!</h3>`)

beerType = prompt(`What is your beer type preference (ipa/lager/dark)?`).toLowerCase()

beerSize = parseFloat(prompt(`what size are you drinking In milliliters (500/375)?`))

if (beerType === `ipa`) {
beerAbv =  0.065
}  else if (beerType === `lager`) {
beerAbv =  0.045
}  else if (beerType === `dark`) {
beerAbv =  0.055
}
beerNum = parseFloat(prompt(`How many beers will you drink?`))

alcoholNum = (beerSize * beerAbv)
alcoholTotal = (alcoholNum * beerNum)

document.write(`If you drink ${beerNum} ${beerType}'s then you will have consumed ${alcoholTotal} milliliters of alcohol!`)