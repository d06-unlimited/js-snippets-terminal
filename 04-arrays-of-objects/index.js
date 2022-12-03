// eine Zahl um Prozent erhöhen
const increasePercent = (num, factor) => {
  // toFixed(2) => rundet Zahl auf 2 Nachkommastellen
  // Number() function => konvertiert gerundeten String zurück in eine Number
  // return => gibt die Number zurück
  return Number((num * factor).toFixed(2));
};

// DATEN (Array of objects)
const coffees = [
  { name: "Crema", price: 1.49 }, // 0
  { name: "Espresso", price: 1.49 }, // 1
  { name: "Cappuccino", price: 1.99 }, // 2
  { name: "Flat White", price: 4 }, // 3
];

// if we know EXACTLY where an item in the array is
// => we can manipulate it directly // (by index) without a loop!
// coffees[1].price += 2

// OUTPUT: SUMME aller prices

let summe = 0;

// FOR I ist out! benutzt man nur, wenn die POSITION des Items wichtig ist!
// for(let i=0; i<coffees.length; i++) {
//   const coffee = coffees[i]
//   summe += coffee.price
// }

// For of Loop ist perfekt, um über Arrays zu loopen und mit jedem Object etwas zu machen
for (let coffee of coffees) {
  summe += coffee.price;
}

console.log({ summe }); // { summe: summe }

// alle Names uppercases
for (let coffee of coffees) {
  coffee.name = coffee.name.toUpperCase(); // CREMA
  // coffee.name = coffee.name.toLowerCase()
}

console.log(coffees);

// alle Items => Preiserhöhung! Inflationsalarm! 0.50 druff!
for (let coffee of coffees) {
  // coffee.price = coffee.price + 0.5
  coffee.price += 0.5; // short version of line above

  // coffee.price *= 1.2; // increase price by 20 percent (but will not round!!!)
  // coffee.price = Number((coffee.price * 1.2).toFixed(2)) // this will round the numby!
  // coffee.price = increasePercent(coffee.price, 1.2)  // outsourced crazy rounding into a function
}

console.log(coffees);

// make espresso great again => 2 EUR druff!
// THREESOME to update a special item
// LOOP => IF => OBJECT UPDATE
for (let coffee of coffees) {
  // hardcoded check for an item ==> DISADVANTAGE: not reusable!
  if (coffee.name === "Espresso") {
    coffee.price += 2;
  }
}


console.log(coffees);

// LAST StEP => from LOOP to REUSABLE FUNCTION
const increaseCoffeePrice = (coffeeName, priceUpcount) => {
  for (let coffee of coffees) {
    if (coffee.name.toLowerCase() === coffeeName.toLowerCase()) {
      coffee.price += priceUpcount;
    }
  }
};

console.log(coffees);
increaseCoffeePrice("Espresso", 10);
increaseCoffeePrice("Espresso", 10);
increaseCoffeePrice("Espresso", -10);
increaseCoffeePrice("Crema", 0.5);
console.log(coffees);

// Add sugar to Crema coffee
// THREESOME:
// - X LOOP
// - IF
// - UPDATE

// LOOP
for (let coffee of coffees) {
  // IF
  if (coffee.name.toLowerCase() === "Crema".toLowerCase()) {
    // UPDATE
    coffee.sugar = true;
  }
}

// Name function by what it does
const addSugar = (coffees, coffeeName) => {
  for (let coffee of coffees) {
    // IF
    if (coffee.name.toLowerCase() === coffeeName.toLowerCase()) {
      // UPDATE
      coffee.sugar = true;
    }
  }
};

console.log(coffees);
addSugar(coffees, "Flat White")
addSugar(coffees, "Espresso");
console.log(coffees);


// SEARCH coffees by criteria => price => 4
// Search does not UPDATE anything
// Search FILTERS items out!

let searchResult = []
for(let coffee of coffees) {
  if(coffee.price >= 4) {
    searchResult.push( coffee )
  }
}
// console.log(searchResult)

const searchByPrice = (coffees, price) => {
  const searchResult = [];
  for (let coffee of coffees) {
    if (coffee.price >= price) {
      searchResult.push(coffee);
    }
  }
  return searchResult; // [... coffee objects matching search....]
};

searchResult = searchByPrice(coffees, 4)
console.log(searchResult)

searchResult = searchByPrice(coffees, 10);
console.log(searchResult);
