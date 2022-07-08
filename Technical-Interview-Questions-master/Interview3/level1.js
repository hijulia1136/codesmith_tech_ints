/* ********************************************* Problem A ********************************************* */

// Declare a variable myNumbers and set it to array containing the numbers 8, 3, and 14

const myNumbers = [8, 3, 14];

/*
Create a function 'cubeNum' that takes in a number as an argument and returns the number cubed.
For example, if we pass the number 3 to 'cubeNum' it will return 27 because 3 * 3 * 3 = 27
*/

const cubeNum = num => num ** 3;

/*
Create a function 'sumOfCubes' that takes in an array of numbers as and argument and uses your 'cubeNum' function.
'sumOfCubes' should return the sum of the array's elements cubed.
For example, if we pass the array [1,5,9] to the function 'sumOfCubes' it should return 855 because 1^3 + 5^3 + 9^3 = 855
*/

const sumOfCubes = array => array.reduce((acc, curr) => acc + cubeNum(curr), 0);

// Check that your 'sumOfCubes' function is working correctly by passing the value of 'myNumbers' to it

console.log(`sumOfCubes: `, sumOfCubes(myNumbers));

/* ********************************************* Problem B ********************************************* */

// Declare a variable 'myRandomString' and set it to the value 'Codesmith'

const myRandomString = 'Codesmith';

/*
Create a function 'doubleChar' that takes a string as an argument and returns a string in which each character is repeated once.
For example, if we pass the string 'Hello World!!' to 'doubleChar' it should return the string 'HHeelllloo  WWoorrlldd!!'
*/

const doubleChar = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    result += str[i];
  }
  return result;
};

// Check that your 'doubleChar' function is working correctly by passing the value of 'myRandomString' to it
console.log('doubleChar: ', doubleChar(myRandomString));

/* ********************************************* Problem C ********************************************* */

// Declare a variable 'randomNumber' and set it equal to the number 10

const randomNumber = 10;

/*
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]
*/

const amplify = num => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    i % 4 === 0 ? result.push(i * 10) : result.push(i);
  }
  return result;
};

// Check that your 'amplify' function is working correctly by passing the value of 'randomNumber' to the 'amplify' function

console.log('amplify: ', amplify(randomNumber));
