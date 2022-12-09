// R - READ / FILTER
const coffees = [
  { name: "Crema", price: 1.49 }, // 0
  { name: "Espresso", price: 1.49 }, // 1
  { name: "Cappuccino", price: 2.99 }, // 2
  { name: "Flat White", price: 4 }, // 3
];

// Search ONE item => find

// Search MULTIPLE Items => filter

// filter items by price 
const coffeesCopy = coffees.filter( coffee => {
  return coffee.price >= 2
} )

console.log(coffees)
console.log(coffeesCopy)

// const coffeesCopy = coffees.filter( coffee => coffee.price >= 2 )
