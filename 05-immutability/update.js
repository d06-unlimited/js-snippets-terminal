// IMMUTABILITY 

// MUTATION => changing the original
// IMMUTABLE CHANGE => create a copy of the array and change that copy

const coffees = [
  { name: "Crema", price: 1.49 }, // 0
  { name: "Espresso", price: 1.49 }, // 1
  { name: "Cappuccino", price: 1.99 }, // 2 => 5.99  (1.99 + 4)
  { name: "Flat White", price: 4 }, // 3
];


// U - UPDATE

// change on original!!! => not allowed!
// coffees[2].price += 4

// this here changes original too! 
// even though we got a new BOX for our items (new array) the objects in the box till are identical 
// const coffeesCopy = [...coffees]
// coffeesCopy[2].price += 4;

// const coffeesCopy = []
// coffees.forEach( coffee => {
//   const coffeeCopy = { ...coffee };
//   coffeesCopy.push(coffeeCopy)
// })
// coffeesCopy[2].price += 4;

// Immutable update with map
const coffeesCopy = coffees.map(coffee => {
  // check if we found the item we want to update
  if(coffee.name === "Cappuccino") {
    // create copy of the item we want to update
    // THIS copy creation will be the trigger to update this item in the browser (later :D)
    const coffeeCopy = { ...coffee }
    // update the copy
    coffeeCopy.price += 4 
    // return the copy
    return coffeeCopy
  }
  // we are not changing this item => justkeep original as it is
  return coffee
})

console.log(coffees)
console.log(coffeesCopy)




