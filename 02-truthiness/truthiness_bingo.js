
console.log("'' == true ", '' == true) // false
console.log("'' == true ", '' == false) // true

console.log("[] == true", [] == true) // false
console.log("[1] == true", [1] == true) // true
console.log("[2] == true", [2] == true) // false
console.log("1 == true", 1 == true) // true
console.log("'1' == true", '1' == true) // true

console.log("0 == false", 0 == false) // true
console.log("undefined == false", undefined == false) // false
console.log("undefined == true", undefined == true) // false

console.log("undefined == null", undefined == null) // true

// lesson: avoid the mindfuck alltogether!
// just use === (strict equality operator) to check if something is really (!) equal the other

