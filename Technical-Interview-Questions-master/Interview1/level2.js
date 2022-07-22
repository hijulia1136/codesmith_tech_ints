/* ********************************************* Problem A ******************************************** */

/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
/*
Create a function "passAllTests" that takes two arguments, an array of functions as well as a value.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/
/*
Use your "passAllTests" function to test if the number 300 is between 50 and 500,
evenly divisible by 100, and a negative OR even number. Then test the number 250.
*/

const between50And500 = (num) => num > 50 && num < 500;

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

const divBy100 = (num) => num % 100 === 0;

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

const negativeOrEven = (num) => num < 0 || num % 2 === 0;

/*
Create a function "passAllTests" that takes two arguments, an array of functions as well as a value.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/
/*
Use your "passAllTests" function to test if the number 300 is between 50 and 500,
evenly divisible by 100, and a negative OR even number. Then test the number 250.
*/
/*
Use your "passAllTests" function to test if the number 300 is between 50 and 500,
evenly divisible by 100, and a negative OR even number. Then test the number 250.
*/

const passAllTests = (arrOfFuncs, value) => {
  for (let i = 0; i < arrOfFuncs.length; i++) {
    if (!arrOfFuncs[i](value)) return false;
  }
  return true;
};

/*
Use your "passAllTests" function to test if the number 300 is between 50 and 500,
evenly divisible by 100, and a negative OR even number. Then test the number 250.
*/

console.log(
  `passAllTests: `,
  passAllTests([between50And500, divBy100, negativeOrEven], 300)
);

console.log(
  `passAllTests: `,
  passAllTests([between50And500, divBy100, negativeOrEven], 250)
);

/* ********************************************* Problem B ******************************************** */

// Create a function "addOne" that takes a number as and argument and returns that number plus one

const addOne = (num) => num + 1;
// Create a function "addOne" that takes a number as and argument and returns that number plus one
// Create a function "subtractOne" that takes a number as and argument and returns that number minus one

const subtractOne = (num) => num - 1;

/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") ➞ "47751"
  3 grows to 4, 8 shrinks to 7
usePotions("9999B") ➞ "9998"
usePotions("9A123") ➞ "10123"
usePotions("567") ➞ "567"
*/

const usePotions = (value) => {
  let i = 0;
  const result = [];
  while (i < value.length) {
    if (value[i] === 'A') {
      result[i - 1] = addOne(Number(value[i - 1]));
      i += 1;
    }
    if (value[i + 1] === 'B') {
      result[i] = subtractOne(Number(value[i]));
      i += 1;
    } else {
      result.push(value[i]);
    }
    i += 1;
  }
  return result.join('');
};

/* ********************************************* Problem C ******************************************** */

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

const isPalindrome = (word) => {
  let i = 0;
  let j = word.length - 1;

  while (i <= j) {
    if (word[i++] !== word[j--]) return false;
  }
  return true;
};
