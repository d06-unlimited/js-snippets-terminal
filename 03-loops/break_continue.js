// BREAK CONTINUE

const fruits = ["apple", "apple", "needle", "cherry"]

// forEach und map => hier gibt es kein Break oder Continue!!!!

// for(let i=0; i<fruits.length; i++)
for(let fruit of fruits) {
  console.log(fruit)
  if(fruit === "needle") break; // stop once we found the f**** needle!
}
console.log()

for (let fruit of fruits) {
  if (fruit === "needle") continue; // ignore the f***** needle

  console.log("Eat ", fruit) // just care about our homies
}