/* ********************************************* Problem A ********************************************* */

/*
Create a function "concatWithSpace" that takes in two arguments (both will be strings).
"concatWithSpace" should return the two strings concatenated with a space in between them.
For example, if the arguments are "hello" and "world" then "concatWithSpace" should return "hello world".
*/

const concatWithSpace = (str1, str2) => `${str1} ${str2}`;

/*
Create a function called "shorten". "shorten" takes three arguments (an array, a function, and an initial value). "shorten" is designed to shorten this array's multiple values to just one value by applying the callback function to each of the values in the array.
This is how it works:
- The shorten function will have an "accumulator value" which will initially be set to the initialValue argument. Its job is to accumulate the outputs of each call to the callback function.
- The array is iterated over, passing the accumulator value and the next array element to the callback function.
- The callback function's returned value becomes the new accumulator value
- The next loop executes with the new accumulator value.
*/

const shorten = (arr, callback, initialValue) => {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
};

/*
Check that your 'shorten' function is working correctly by passing an array to it with the string values 'is', 'so', 'much' and 'fun!' as the first argument.
Pass your concatWithSpace function as our callback and the string 'Programming' as the initialValue argument. The result of this call to shorten should be the string 'Programming is so much fun!'
*/

console.log(
  shorten(['is', 'so', 'much', 'fun!'], concatWithSpace, 'Programming')
);

/* ********************************************* Problem B ********************************************* */

/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

const countTimes = (arr, value) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) total += 1;
  }
  return total;
};

/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.

Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/

const wordSearchLetterCounter = (wordSearch, letter) => {
  let total = 0;
  for (let i = 0; i < wordSearch.length; i++) {
    const row = wordSearch[i];
    total += countTimes(row, letter);
  }
  return total;
};

/* ********************************************* Problem C ********************************************* */

/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.

Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

const changeCase = letter => {
  const newLetter =
    letter.toUpperCase() === letter
      ? letter.toLowerCase()
      : letter.toUpperCase();
  return newLetter;
};

/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

const effectString = (string, cb) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    result += cb(string[i]);
  }
  return result;
};

// Check to that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"

console.log('effectString: ', effectString('aBCDef', changeCase));
