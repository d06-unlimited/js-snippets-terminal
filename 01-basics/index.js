// common names for initial script => index.js / main.js / script.js / app.js

const person = { 
  name: "Maddy", // property / key "name" => value "Maddy"
  isAdmin: true
};

// object
console.log(person);
console.log(person.name);
console.log(person.nameyyyyyyy);

// strings / numbers

const str = "10"
const numby = 5
console.log( str+numby, typeof (str+numby), typeof str, typeof numby) // 105 ???

const str2 = +"10"
const numby2 = 5
console.log( str2+numby2, typeof (str2+numby2), typeof str2, typeof numby2) // 105 ???

console.log() // no parameter to console log produces NEWLINE in console / terminal

const inputText = "20 Äpfel" // here we can parse the number out, using parse int => 20
// const inputText = "Äpfel 20" // here we cannot use parseInt to extract number
// const inputNumber = +inputText
const inputNumber = parseInt(inputText);  // "Äpfel 20" => produziert NaN (Not a Number)

console.log(inputText, inputNumber, numby+inputNumber, typeof inputText, typeof inputNumber)

// text / string properties
console.log( "Length of string:", inputText, inputText.length ) // 8

// text functions

console.log()
const inputTextUppercase = inputText.toUpperCase();
console.log( "Uppercase:", inputText, inputTextUppercase)
console.log(inputText)
console.log( "Lowercase:", inputText, inputText.toLowerCase() )
console.log()

// operators 
// modulo und ternary
console.log( "10 % 5", 10 % 5 ) // 0
console.log( "10 % 3", 10 % 3 ) // 1
console.log( "10 % 1", 10 % 1 ) // 0
console.log()

// prozentrechnung
console.log( 25 / 200 ) // => 0.125 => 12.5 Prozent
console.log( 100 * (25/200) ) // 12.5
console.log( (25 * 100) / 200 ) // 12.5
console.log( 200 * 0.1, "10 Prozent von 200" ) 
console.log( 200 * 0.30, "30 Prozent von 200" )
console.log( 200 * 2.5, "250 Prozent von 200" )

