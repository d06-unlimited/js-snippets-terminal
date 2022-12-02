const coffees = [
  { name: "Crema", price: 1.49 }, // 0
  { name: "Espresso", price: 1.49 }, // 1
  { name: "Cappuccino", price: 1.99 }, // 2
  { name: "Flat White", price: 4 }, // 3
]

// OUTPUT: SUMME aller prices

let summe = 0

// FOR I ist out! benutzt man nur, wenn die POSITION des Items wichtig ist!
// for(let i=0; i<coffees.length; i++) {
//   const coffee = coffees[i]
//   summe += coffee.price
// }

// For of Loop ist perfekt, um über Arrays zu loopen und mit jedem Object etwas zu machen
for(let coffee of coffees) {
  summe += coffee.price
}

console.log({ summe }) // { summe: summe }

// alle Names uppercases
for (let coffee of coffees) {  
  coffee.name = coffee.name.toUpperCase(); // CREMA
  // coffee.name = coffee.name.toLowerCase()
}

console.log(coffees)

// eine Zahl um Prozent erhöhen
const increasePercent = (num, factor) => {
  // toFixed => rundet Zahl auf zwei Nachkommastellen
  // Number() function => konvertiert gerundeten String zurück in eine Number
  // return => gibt die Number zurück
  return Number((num * factor).toFixed(2))
}

// alle Items => Preiserhöhung! Inflationsalarm! 0.50 druff!
for (let coffee of coffees) {
  // coffee.price = coffee.price + 0.5
  coffee.price += 0.5
  // coffee.price *= 1.2; // increae by 20%
  // coffee.price = increasePercent(coffee.price, 1.1)  // coffee.name = coffee.name.toLowerCase()
}

console.log(coffees)