//      Fragen/Themen:
//
//
//      #############################
//      BLOCK 1: BEDINGTE ALGORITHMEN
//      #############################

//      (Includes: if/else, Switch Case, Ternäre Fragen)

//      1. STRING: Übung 94: Q1-6 AND Übung 115: Q3
//      ********************************************

//      Ü94

//      Q1
//      Declare a variable named `parkWalkStr` with the value "I can walk in the park all day!".
//      Print the word "park" to the console.

//      Q2
//      Declare a variable named `helloStr` with the value "Hello World".
//      Covert the value to upper case and print the converted value to the console.

//      Q3
//      Declare another variable named `earthlingsStr` with the value "Hello Earthling".
//      Convert the value to lower case and print the converted value to the console.

//      Q4
//      Declare a variable named `jsStr` with the value "JavaScript".
//      Use a string method to print the characters "aSc" from your declared variable.

const jsStr = "JavaScript"; // OUTPUT: aSc
console.log(jsStr.substring(3, 6));

//      Q5
//      Declare a variable named `niceShoesStr` with the value "nice shoes".
//      Use a string method to check if the sentence "nice shoes" contains the letters l or n.
//      Print the result of each check to the console.

const niceShoesStr = "nice shoes";
// const result = niceShoesStr.includes("l" || "n") // KLAPPT NICHT
// const result = niceShoesStr.includes(("l") || ("n")) // KLAPPT NICHT
const result1 = niceShoesStr.includes("l");
const result2 = niceShoesStr.includes("n");

const result = niceShoesStr.includes("l") || niceShoesStr.includes("n"); // KLAPPT
console.log(result);

//      Q6
//      Create a variable named `oldStr` and assign a word of your choice as its value.
//      Create another variable named `newStr` and as its value assign the value of `oldStr` with
//      the first character of the string added at the front and back, i.e.: Bananas => BBananasB

const oldStr = "Cherry"; // CCherryC"
const newStr = oldStr[0] + oldStr + oldStr[0]; // 100 POINTS to Alex
console.log(newStr);

//      Ü115

//      Q3 String Check
//      Create a function named `isStrStartOfWord` that takes 2 strings as parameters,
//      where the second string is a word and returns `true` or `false` depending on whether
//      the word starts with the string passed to the first parameter.

//      Examples:
//                  * `isStrStartOfWord("bu", "button")` ➞ true
//                  * `isStrStartOfWord("tri", "triplet")` ➞ true
//                  * `isStrStartOfWord("let", "triplet")` ➞ false
//                  * `isStrStartOfWord("beau", "pastry")` ➞ false

const isStrStartOfWord = (search, word) => {
  const result = word.startsWith(search); // 100 Points Elias  + Badge => String Professional
  console.log(result);
  return result;
};
isStrStartOfWord("bu", "button"); // true
isStrStartOfWord("tri", "triplet"); // true
isStrStartOfWord("let", "triplet"); // false
isStrStartOfWord("beau", "pastry"); // false

//      Solution:

//      2. NUMBER: Übung 109
//      *********************

//      Ü109

//      Programming Basics: Fizzbuzz (using simple if conditionals)
//      - write your answers in `solution.js`

//      Let's play mini FizzBuzz! For any given number (assigned to a variable named `myNum`),
//      if the number is:
//                         - divisible by 3, print "Fizz".
//                         - divisible by "5", print "Buzz".
//                         - divisible by both 3 and 5, print "FizzBuzz".

console.log()

const fizzBuzz = (num) => {

  // CHECK specialized case first !
  if( num % 3 === 0 && num % 5 === 0 ) {
    console.log(num, "FizzBuzz")
  }
  // durch 3 teilbar?
  else if( num % 3 === 0 ) {
    console.log(num, "Fizz")
  }
  // durch 5 teilbar?
  else if( num % 5 === 0 ) {
    console.log(num, "Buzz")
  }
  else {
    console.log( num )
  }
  
};

fizzBuzz(1); // 1
fizzBuzz(3); // Fizz
fizzBuzz(5); // Buzz
fizzBuzz(7); // 7
fizzBuzz(10); // Buzz
fizzBuzz(15); // FizzBuzz

//      That is, if any of the above conditions apply, print the above words *instead of the number*.
//      - Otherwise, just print the number.

//      Solution:

//      3. EQUATION: Übung 91: Q4-8
//      ****************************

//      Ü91

//      Geometry Formulas

//      Q4
//      Calculate the perimeter of a square. Assume each side is 4.75cm.

//      Q5
//      Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

//      Q6
//      Calculate the area of a square. Each side is 5cm.

//      Q7
//      Calculate the area of an [right-angled triangle](https://en.wikipedia.org/wiki/Right_triangle).
//      Assume the length of the sides are 3cm, 4cm, 5cm.

//      Q8
//      Calculate the volume of a cube. Length of each side is 9cm.

//      4. TERNÄRE: Übung 106: Q1-2
//      ****************************

//      Ü106

//      Q1
//      Rewrite this conditional statement using the ternary operator `?`:

//      let result;
//      let a=3;
//      let b=6;
//      if (a + b < 4) {
//      result = 'Below';
//      } else {
//      result = 'Over';
//      }
//     console.log(result)

//      Solution:

//      Q2
//      Rewrite the code below to use the ternary operator (?:)
//      (you should be able to condense the if-else logic into one line).

//      let score = 42;
//      let msg = "";

//      if (score > 1337)
//      {
//          msg = "This is a new highscore!";
//      }
//      else
//      {
//          msg = "You need more points to beat the highscore!";
//      }
//      console.log(msg)

//      Solution:

//      ##################
//      BLOCK 2: SCHLEIFEN
//      ##################

//      5. SEQUENZEN 1: Übung 111: Q2, 3, 4, 6, (7); Übung 113, Übung 118: Q8
//      **********************************************************************

//      Ü111

//      Q2
//      There are i bottles of beer on the wall
//      Write a program that will output, "There is 1 bottle of beer on the wall."
//      "There are 2 bottles of beer on the wall" up until there are five bottles.

//      Solution:

//      Q3
//      The odd/even reporter
//      Write a program that will iterate from 0 to 20. For each iteration,
//      it will check if the current number is even or odd, and
//      report that to the screen (e.g. "2 is even").

//      Solution:

//      Q4
//      Multiplication Tables
//      Write a program that will iterate from 0 to 10.
//      For each iteration of the for loop, it will multiply
//      the number by 9 and log the result (e.g. "2 * 9 = 18").

//      **Bonus:** Use a nested for loop to show the tables for
//                 every multiplier from 1 to 10 (100 results total).

//      Solution:

//      Q6
//      Sum of Multiples
//      Write a program to add the multiples of 3 and 5 under 1000.

//      Solution:

//      Q7 (Bonus)
//      Write programs that produce the following outputs:
//      >100 200 300 400 500 600 700 800 900 1000
//      >
//      >0 2 4 6 8 10
//      >
//      >3 6 9 12 15
//      >
//      >9 8 7 6 5 4 3 2 1 0
//      >
//      >1 1 1 2 2 2 3 3 3 4 4 4
//      >
//      >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

//      Solution:

//      Ü113

//      Function Scope

//      Q1
//      Print Exponential Values
//      In the file `index.js` write a function called `printExponentialValues` that
//      accepts two numbers as parameters

//      * It should calulate a series of exponential numbers where the first argument
//       is the base number for the calculation and the second argument designates
//       how many numbers should be generated.
//      * The function should print the resulting series of numbers to the terminal
//      as a single string separated by space.
//      * If one or both of the passed arguments are not a number, the message
//      `"x or y is not a number"` should be printed to the terminal.
//      * For example if we have function(3, 5), The function should print `3 9 27 81 243`
//      (Prints 5 exponential values of 3).
//      * function(2, 8) prints `2 4 8 16 32 64 128 256` (Prints 8 exponential values of 2).

//      Solution:

//      Q2
//      Fruits
//      * Create a function named `printFavoriteFruit`. Declare a variable called
//       `fruit` outside of the function and store your favorite fruit as a value.
//       Reassign the variable within the function and print "My favorite fruit is: _x_".

//      Solution:

//      Q3
//      Multiply a Number by Itself
//      * Create a function named `exponent` that takes two numbers as parameters.
//      The second parameter defines how many times the first number should be multiplied by itself.
//      Save the output in a variable named `result` inside the function.
//      * Then, try to access the variable `result` outside of the `exponent` function.
//      Is this possible? Why/Why not? Comment your answer in the `index.js` file.

//      Solution:

//      Ü118

//      Q8
//      Even Number Generator
//      Create a function named `getEvenNums` that finds all even numbers from 1 to the given number.

//      Examples:
//      * `getEvenNums(8)` ➞ [2, 4, 6, 8]
//      * `getEvenNums(4)` ➞ [2, 4]
//      * `getEvenNums(2)` ➞ [2]

//      **Notes:**
//      * If there are no even numbers, return an empty array.
//      * Do not include 0.

//      Solution:

//      ##############
//      BLOCK 3: MATHE
//      ##############

//      7. MATHE METHODE: Übung 115: Q6, Übung 117
//      ******************************************

//      115

//      Q6
//      X To The Power of X
//      Create a function named `calcBaseToExponent` that takes a base number and
//      an exponent number as parameters and returns the result.
//      **NB:** All test inputs will be positive integers.

//      Examples:
//      * `calcBaseToExponent(5, 3)` ➞ 125
//      * `calcBaseToExponent(10, 10)` ➞ 10000000000
//      * `calcBaseToExponent(3, 3)` ➞ 27

//      Solution:

//      117

//      Function Return

//      Q1
//      Check age
//      Write a function named `checkAge` that returns true if the passed number is greater than 18.
//      Otherwise returns false:
//
//      checkAge(10) → false;
//      checkAge(19) → true;
//      checkAge(18) → false;

//      Solution:

//      Q2
//      Lower number
//      Write a function `min(a,b)` which returns the lower of two numbers.

//      For instance:
//         min(2, 5) → 2
//         min(3, -1) → -1
//         min(1, 1) → 1

//      Solution:

//      Q3
//      To the power of
//      Write a function `pow(x,n)` that returns x in power n. Or, in other words,
//      multiplies x by itself n times and returns the result.

//      pow(3, 2) (3 * 3) → 9
//      pow(3, 3) (3 * 3 * 3) → 27
//      pow(1, 100) (1 * 1 * ...* 1) → 1

//      Solution:

//      ######################
//      BLOCK 4: PROBLEM LÖSEN
//      ######################

//      8. ALLE: Übung 115: Q5, Übung 118: Q4, 5, 7
//      *******************************************

//      115

//      Q5
//      Count Occurrences
//      Create a function named `countOccurrences` that accepts two arguments:
//      a string and a letter. The function should return the number of occurrences
//      of that letter in the string.

//      Example:
//      * `countOccurrences("this is a string", "i")` ➞ 3

//      Solution:

//      118

//      Q4
//      "AEIOU": Vowels
//      Create a function named `vowelCounter` that takes a string in as the
//      parameter and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

//      i.e. `vowelCounter("this is a string")` ➞ 4

//      Solution:

//      Q5
//      Missing Number
//      Create a function named `findMissingNum`:
//      - as an argument, it takes an array of the sequence of integers between 1 and N (N ≤ 10) excluding one random number.
//      - it returns the missing integer.

//      Examples:
//      * `findMissingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])` ➞ 5
//      * `findMissingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])` ➞ 10
//      * `findMissingNum([[2, 1, 3, 4, 6, 7, 8]])` ➞ 5

//      Solution:

//      Q7
//      Dictionary
//      Create a function named `dictionary ` that takes an initial string and
//      an array of words, and returns a filtered array of the words that start with
//      the same letters as the initial string.

//      Notes:
//      * If none of the words match, return an empty array.
//      * Keep the filtered array in the same relative order as the original array of words.

//      Examples:
//      * `dictionary("bu", ["button", "breakfast", "border"])` ➞ ["button"]
//      * `dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])` ➞ ["triplet", "tries", trip"]
//      * `dictionary("beau", ["pastry", "delicious", "name", "boring"])` ➞ []

//      Solution:
