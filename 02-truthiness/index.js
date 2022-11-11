
let arr1 = [1, 2]
let arr2 = arr1

console.log("arr1 === arr2", arr1 === arr2) // true! 
  // because both vars "arr1" and "arr2" point to the SAME box!

arr2.push("a")

console.log(arr2)
console.log(arr1) // by changing arr2 we changed the original array arr1 too!!!! 
  // they both are now linked forever... :-O 


arr1 = [1,2]
arr2 = new Array(...arr1) // creates a COPY of arr1 (=> a NEW box!)
// [1,2]  = [...arr1] // new Array(...arr1) // => all do the same! create a NEW box [1,2]

console.log("arr1 === arr2", arr1 === arr2); // false! because both arrays are SEPARATE boxes
console.log(arr1, arr2)

// prepare array with exactly 10 items  
const arrWeKnowExactlyHowManyThingsWeStuffInsideHere = new Array(10).fill("0")
arrWeKnowExactlyHowManyThingsWeStuffInsideHere[1] = "25"
console.log(arrWeKnowExactlyHowManyThingsWeStuffInsideHere);

