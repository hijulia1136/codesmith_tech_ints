/* ********************************************* Problem A ********************************************* */

/*
Declare a variable 'myNums' and set it to an object.
On that object you will have two key-value pairs. One key will be 'favoriteNumber' and its value will be your favorite number.
The other key will be 'randomNumber' and its value will be 12.
*/

const myNums = { favoriteNumber: 8, randomNumber: 12 };

/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps.
'largestSwap' should return a boolean.
For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
*/

const largestSwap = num => {
  numReversed = Number(
    num
      .toString()
      .split('')
      .reverse()
      .join('')
  );
  return num >= numReversed;
};

// Check that your 'largestSwap' function is working correctly by passing the value of 'randomNumber' on your 'myNums' object to your 'largestSwap' function

console.log(`largestSwap: `, largestSwap(myNums.randomNumber));

/* ********************************************* Problem B ********************************************* */

// Declare a variable 'names' and set it to an array with the values 'Chris', 'Samantha', 'Richard', and  'Kyle' in it.

const names = ['Chris', 'Samantha', 'Richard', 'Kyle'];

/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function 'societyName' that takes in an array of names and returns the name of the secret society.
For example, if our input is ['Adam', 'Sarah', 'Malcolm'] then 'societyName' should return the string 'AMS'
*/

const societyName = array => {
  let result = '';
  const sorted = array.sort();
  sorted.forEach(el => {
    result += el[0];
  });

  return result;
};

// Check that your 'societyName' function is working correctly by passing the value of 'names' to the function 'societyName'

console.log('societyName: ', societyName(names));

/* ********************************************* Problem C ********************************************* */

// Decare a variable 'randomString' and set it to the string 'Hello World'

const randomString = 'Hello World';

/*
Create a function 'isVowel' that takes in a string (this string will be a single character) as an argument. "isVowel" should return true if the string is a vowel false if it is not. This function should consider letters a, e, i, o, and u to be vowels.
*/

const isVowel = str => /[aeiouAEIOU]/.test(str);

/*
Create a function 'firstVowel' that uses your 'isVowel' function to return the index of the first vowel in a string.
For example, if our input to 'firstVowel' is 'apple' then 'firstVowel' should return 0.
If there is no vowel present in the string your function should return the string 'there is no vowel present'.
*/

const firstVowel = str => {
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) return i;
  }
  return 'there is no vowel present';
};

// Check that your 'firstVowel' function is working correctly by passing the value of 'randomString' to it.

console.log(`firstVowel: `, firstVowel(randomString));
