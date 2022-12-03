// FOREACH vs MAP - what to use when?

// INPUT: Array ? Number ? String?
// OUTPUT: Array ? Number? String?
// => INPUT OUTPUT geben uns einen sehr guten Hinweis, welche Array Method / Loop wir nutzen sollten!

// SZENARIO 1: 
// INPUT: ARRAY: ['apple', 'banana', 'cherry', 'pineapple', 'peach']
// OUTPUT: ARRAY ['apple', 'apple', 'apple']

//   Case 1:
//   Es soll ein Array rauskommen, mit GENAUSO VIELEN ITEMS wie im INPUT
//   => map ("mappt" jedes Item in einem Array in ein anders formatiertes Item)

//   Case 2:
//   Es soll ein Array rauskommen, mit WENIGER Items wie im INPUT
//   => forEach, filter

// SZENARIO 2: 
// INPUT: ARRAY ['apple', 'apple', 'cherry', 'pineapple', 'apple']
// OUTPUT: NUMBER // Example: Sum of apples // 3 
// Which method? forEach, reduce

//   Case 1: Change Items in ORIGINAL Array
//            forEach, map
//   Case 2: Create NEW Array with new format of each item
//            map 

// SZENARIO 3:
// INPUT: NUMBER
// OUTPUT: ARRAY

// Example: 
// Tausche EUR in Array von 50 Cent Stücken
// INPUT: NUMBER // => 2 EUR
// OUTPUT: ARRAY // => [50, 50, 50, 50]

// Tool: keine Array Methods! (klappt nur wenn INPUT Array ist)
// Tool: WHILE LOOP => we dont know how often we need to loop


const fruits = ["apple", "banana", "cherry", "apple", "apple", "pineapple", "peach"];

// OUTPUT: ['apple', 'apple', 'apple']

let apples = []

// wichtig: forEach returned keine Werte (es gibt kein return in forEach)
// daher müssen wir den OUTPUT vorher als Variable anlegen 
fruits.forEach((fruit) => {
  if (fruit === "apple") {
    // add fruit to apples korb
    apples.push(fruit);
    // apples += fruit // this here makes "secretly" a string out of the arrray! Outch!
  }
})
console.log(apples)
console.log()

// Example 2: From [2, 4, 6] => [4,6,8]
// Loope durch alle Items und erhöhe um 2
// 1) Erzeuge NEUEN Array (dont touch original) => map
// 2) Change the ORIGINAL! => forEach

const numbys = [2, 4, 6]

const numbysMapped = numbys.map((num) => {
  console.log(num);
  num += 2

  return num // hand back the changed thingy to map
  // return undefined // if you dont return anything => map will see this as returning "undefined"
});

console.log(numbys) // [2,4,6]
console.log(numbysMapped) // ???
