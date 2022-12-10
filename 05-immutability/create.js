const coffees = [
  { name: "Crema", price: 1.49 }, // 0
  { name: "Espresso", price: 1.49 }, // 1
  { name: "Cappuccino", price: 1.99 }, // 2
  { name: "Flat White", price: 4 }, // 3
];

const coffeeNew = { name: "Latte Macchiato", price: 2.5 };

// C - Create
// mutation
// coffees.push(coffeeNew) // changes the original array! DON'T allowed!

// change by creating and changing a COPY instead...
// let coffeesCopy = [...coffees]
// coffeesCopy.push(coffeeNew)

// create copy and add item in one step
let coffeesCopy = [...coffees, coffeeNew]; 

console.log(coffeesCopy);
console.log(coffees);

