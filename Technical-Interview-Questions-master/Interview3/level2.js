/* ********************************************* Problem A ********************************************* */
// Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.

const programmingLanguages = ['C++', 'Java', 'Python', 'Javascript', 'Swift'];

/*
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/

const containsJ = string => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'j' || string[i] === 'J') return true;
  }
  return false;
};

/*
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/

const screen = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) result.push(array[i]);
  }
  return result;
};

// Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function

console.log(`screen: `, screen(programmingLanguages, containsJ));

/* ********************************************* Problem B ********************************************* */

// Declare a variable 'numbers' and set it equal to an array containing the values 2, -14, -8, 22, 97, and 88

const numbers = [2, -14, -8, 22, 97, 88];

/*
Declare a function 'isOdd' that takes one input (a number) and return a boolean indicating whether or not the number is odd.
For example, if we call 'isOdd' with an input of 3 it will return true.
*/

const isOdd = num => num % 2 === 1;

/*
Create a function 'atLeastOne' that takes in two inputs (an array and a callback function).
The callback function will return a boolean value.
The callback function will be called on every element in the array. If the callback function being called returns true for any of the elements in the array then 'atLeastOne' should return true. Otherwise it should return false.
*/

const atLeastOne = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return true;
  }
  return false;
};

// Check that your 'atLeastOne' function is working correctly by passing it your 'numbers' array and your 'isOdd' function.

console.log('atLeastOne: ', atLeastOne(numbers, isOdd));

/* ********************************************* Problem C ********************************************* */

/*
Create a function "countChars" that takes argument (a string).
"countChars" should return the number of characters in the string. You should not count whitespace as characters.
*/

const countChars = word => {
  let total = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ') total++;
  }
  return total;
};

/*
Create a function "doToEachElement" that takes two arguments (an array and a callback function).
"doToEachElement" should return a new array containing the returned values from running the callback function on each element in the array.
*/

const doToEachElement = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
};

/*
Check that your "doToEachElement" function is working properly by calling it with the array containing the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy" and your "countChars" function.
*/

console.log(
  doToEachElement(
    ['hello world', 'I love programming', 'Twin Snakes are my favorite candy'],
    countChars
  )
);
