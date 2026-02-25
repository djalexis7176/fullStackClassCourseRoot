/*The Word Translator

 Usage: Use simple conditional statements

Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

Hello World translated in French is: Bonjour le monde 
*/

let esGreet = "Hola Mundo"
let deGreet = "Hallo Welt"
let enGreet = "Hello World"
let frGreet = "Bonjour le monde"

let langCode


langCode = prompt('Please enter your language code as either: "es", "de", "en", or "fr"')

let greet = (`Hello World translated in `)

if (langCode === "es") {
    document.write(`${greet} Spanish is: ${esGreet}`)
}
else if (langCode === "de") {
    document.write(`${greet} German is: ${deGreet}`)
}
else if (langCode === "en") {
    document.write(`${greet} English is: ${enGreet}`)
}
else if (langCode === "fr") {
    document.write(`${greet} French is: ${frGreet}`)
}
else {
    document.write(`${greet} English is: ${enGreet}`)
}
