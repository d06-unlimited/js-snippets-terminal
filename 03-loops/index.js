const coffees = [
  "Crema", // 0
  "Cappuccino", // 1
  "Latte Macchiato", // 2
  "Crema", // 3
  "Crema", // 4
  "Espresso", // 5
  "Frappuccino Triple Grande Strawberry Cheesecake Vanilla Flavored", // 6
];

// console.log("Array size / length", coffees.length)

// console.log( coffees[2] ) // Array Item an Position 2 => Latte Macchiato

// LOOP mit Uppercasen
for (let i = 0; i < coffees.length; i++) {
  // console.log(i, coffees[i])
  const coffeeUc = coffees[i].toUpperCase();
  console.log(coffeeUc);
}

console.log();

// LOOP und uppercase nur (!) CREMAS
for (let i = 0; i < coffees.length; i++) {
  // in a loop we usually never touch the WHOLE ARRAY
  // in a loop we typically just take a look at the CURRENT item (at i) and do something with it

  // wenn item crema => uppercases logged. wenn nicht => normal case
  if (coffees[i] === "Crema") {
    // console.log("Crema gefunden! Geil!")
    console.log(coffees[i].toUpperCase()); // Crema => CREMA
  } else {
    console.log(coffees[i]);
  }
}

console.log();

// LOOP mit TEXT SUCHE
for (let i = 0; i < coffees.length; i++) {
  // Crema => crema => c => drin!
  if (coffees[i].toLowerCase().includes("c")) {
    console.log(coffees[i], "-", "Geil! Hat C drin!");
  } else {
    console.log(coffees[i], "-", "Kein Vitamin C. Ungesund");
  }
}
