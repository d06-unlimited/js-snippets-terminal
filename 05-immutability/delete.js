// IMMUTABILITY

// MUTATION => changing the original
// IMMUTABLE CHANGE => create a copy of the array and change that copy

const coffees = [
  { name: "Crema", price: 1.49 }, // 0
  { name: "Espresso", price: 1.49 }, // 1
  { name: "Cappuccino", price: 1.99 }, // 2
  { name: "Flat White", price: 4 }, // 3
];


// coffees.splice(1,1) // direct mutation => NOT allowed!

// 1st method: create a copy of array and splice item out
// const coffeesCopy = [...coffees]
// coffeesCopy.splice(1,1) // disadvantage: We have to know position of item we want to delete

// delete an item by using filter
// immutable change => not touching original
const coffeesCopy = coffees.filter( coffee => coffee.name != "Espresso" )

console.log(coffees)
console.log(coffeesCopy)
