/* ********************************************* Problem A ******************************************** */

// Declare a variable 'number' and set it to the value 10.

const number = 10;

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

const addNumbers = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function

console.log(`addNumbers: `, addNumbers(number));

/* ********************************************* Problem B ******************************************** */

// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

const randomNums = [1, 14, 7, 21, -6];

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

const minAndMax = array => {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }
  return [min, max];
};

//  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function

console.log(`minAndMax: `, minAndMax(randomNums));

/* ********************************************* Problem C ******************************************** */

// Declare a variable 'myString' and set it equal to the string 'I love programming'

const myString = 'I love programming';

/*
Create a function 'charCount' that takes two arguments (the first argument is a single character) and
returns the number of times the character is found in the second argument.
For example, charCount('i', 'Codesmith') should return the number 1
*/

const charCount = (str1, str2) => {
  let total = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1 === str2[i]) total++;
  }
  return total;
};

/*
Check that your 'charCount' function is working correctly by passing the string 'o' as the first argument
and your variable 'myString' as the second argument to the 'charCount' function
*/

console.log(`charCount: `, charCount('o', myString));
