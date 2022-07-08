# REQUIRED FOR EVERY INTERVIEW: BRIEF THE APPLICANT

"I will paste an endless series of increasingly difficult challenges into the editor.
Your task is to figure them out as best as you can, and remember that we're looking for
qualities beyond how many questions you get through, such as technical communication and engineering best practices.

- Feel free to use any online resources that you normally would, e.g. Google, Stack Overflow, documentation pages.
  Just don't look up the solution directly. And when you do look something up, let me know what you are looking up
  so I can understand your thought process. There are no penalties for looking things up.

- There are also no penalties for errors, so don't be afraid to run your code with an expected outcome
  and use any error messages to your advantage in refactoring to get the desired outcome.

- Remember the importance of testing your code as some of the problems will build on each other,
  so you want to make sure it works before moving on.

- Lastly, be sure to verbalize your thought process, as your technical communication is something we're looking for.
  As you're thinking through it, be sure to keep me updated on your overall strategy. This will help me to assess
  how you might work in a pair programming session or group environment.

- I'm not able to give any technical feedback today, but you will receive feedback and the result of your interview
  directly from an Admissions Team Member within one week.

- Do you have any questions now regarding the format of the interview?"

## IF YOU ARE CONDUCTING AN ONLINE INTERVIEW, ALSO READ THIS TO THE INTERVIEWEE:

"I will be having you share your screen with me through the duration of the interview,
so please close out of all unnecessary screens and turn off any distracting notifications"

Set timer for 60 mins

## Confirm these things before starting

- INTERVIEWEE'S NAME:
- INTERVIEWEE'S EMAIL:
- PREFERRED COHORT:
- ONLINE OR IN PERSON:
- INTERVIEW NUMBER:

# Technical Interview Notes:

Level 1 Challenges

Problem A: sumOfCubes
Time Started:

Prompt 1:
// Declare a variable myNumbers and set it to array containing the numbers 8, 3, and 14

Prompt 2:
/_
Create a function 'cubeNum' that takes in a number as an argument and returns the number cubed.
For example, if we pass the number 3 to 'cubeNum' it will return 27 because 3 _ 3 _ 3 = 27
_/

Prompt 3:
/_
Create a function 'sumOfCubes' that takes in an array of numbers as and argument and uses your 'cubeNum' function.
'sumOfCubes' should return the sum of the array's elements cubed.
For example, if we pass the array [1,5,9] to the function 'sumOfCubes' it should return 855 because 1^3 + 5^3 + 9^3 = 855
_/

Prompt 4:
// Check that your 'sumOfCubes' function is working correctly by passing the value of 'myNumbers' to it

NOTES:
[+/-]

Problem B: doubleChar
Time Started:

Prompt 1:
// Declare a variable 'myRandomString' and set it to the value 'Codesmith'

Prompt 2:
/_
Create a function 'doubleChar' that takes a string as an argument and returns a string in which each character is repeated once.
For example, if we pass the string 'Hello World!!' to 'doubleChar' it should return the string 'HHeelllloo WWoorrlldd!!'
_/

Prompt 3:
// Check that your 'doubleChar' function is working correctly by passing the value of 'myRandomString' to it

NOTES:
[+/-]

Problem C: amplify
Time Started:

Prompt 1:
// Declare a variable 'randomNumber' and set it equal to the number 10

Prompt 2:
/_
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]
_/

Prompt 3:
// Check that your 'amplify' function is working correctly by passing the value of 'randomNumber' to the 'amplify' function

NOTES:
[+/-]

Level 2 Challenges

Problem A: screen/containsJ
Time Started:

Prompt 1:
// Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.

Prompt 2:
/_
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
_/

Prompt 3:
/_
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
_/

Prompt 4:
// Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function

NOTES:
[+/-]

Problem B: atLeastOne
Time Started:

Prompt 1:
// Declare a variable 'numbers' and set it equal to an array containing the values 2, -14, -8, 22, 97, and 88

Prompt 2:
/_
Declare a function 'isOdd' that takes one input (a number) and return a boolean indicating whether or not the number is odd.
For example, if we call 'isOdd' with an input of 3 it will return true.
_/

Prompt 3:
/_
Create a function 'atLeastOne' that takes in two inputs (an array and a callback function).
The callback function will return a boolean value.
The callback function will be called on every element in the array. If the callback function being called returns true for any of the elements in the array then 'atLeastOne' should return true. Otherwise it should return false.
_/

Prompt 4:
// Check that your 'atLeastOne' function is working correctly by passing it your 'numbers' array and your 'isOdd' function.

NOTES:
[+/-]

Problem C: doToEachElement/countChars
Time Started:

Prompt 1:
/_
Create a function "countChars" that takes argument (a string).
"countChars" should return the number of characters in the string. You should not count whitespace as characters.
_/

Prompt 2:
/_
Create a function "doToEachElement" that takes two arguments (an array and a callback function).
"doToEachElement" should return a new array containing the returned values from running the callback function on each element in the array.
_/

Prompt 3:
/_
Check that your "doToEachElement" function is working properly by calling it with the array containing the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy" and your "countChars" function.
_/

NOTES:
[+/-]

Level 3 Challenges

Problem A: memoryMaker
Time Started:

Prompt 1:
/\*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.

example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
\*/

NOTES:
[+/-]

Problem B: sumAllElements
Time Started:

Prompt 1:
/\*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.

Example:
sumAllElements([1,2,3,4], 10) -> 20

Note: Do NOT use any native JS methods, or loops
\*/

NOTES:
[+/-]

Problem C: fastCache
Time Started:

Prompt 1:
/_
Create a function "fastCache" that takes one argument (a function) and returns a function. When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
example:
SINGLE ARGUMENT CASE
const multiplyBy2 = num => num _ 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
cachedMultiplyBy2(100); // -> 200
cachedMultiplyBy2(150); // -> 300
cachedMultiplyBy2(100); // -> 200 // from the cache object

MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 _ (num1 + num2);
const cachedSumMultiplyBy2 = fastCacheMult(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object
_/

NOTES:
[+/-]

Level 4 Challenges

Problem A: anagrams
Time Started:

Prompt 1:
/_
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
_/

NOTES:
[+/-]

Problem B: Pascal's Triangle
Time Started:

Prompt 1:
/\*
Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row is represented as an array of numbers.

https://en.wikipedia.org/wiki/Pascal%27s_triangle

e.g.
pascalTriangle(1):
[[1]]

pascalTriangle(2):
[
[1],
[1, 1]
]

pascalTriangle(3) :
[
[1],
[1,1],
[1,2,1]
]

pascalTriangle(6) :
[
[1],
[1,1],
[1,2,1],
[1,3,3,1],
[1,4,6,4,1],
[1,5,10,10,5,1]
]
\*/

NOTES:
[+/-]

Problem C: bestProfit
Time Started:

Prompt 1:
/\*
I have an array stock_prices_yesterday where:

- The indices are the time in minutes past trade opening time, which was 9:30am local time
- The values are the prices in dollars of Apple stock at the time

For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;

Write a function 'bestProfit' for computing the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday

Return 0 if no profit is possible OR if input is invalid.

More examples:
bestProfit([ 100, 1, 123, 120 ]); // 122
bestProfit([ 100, 100, 100, 100 ]); // 0
bestProfit([ 100, 88, 44, 2 ]); // 0
bestProfit([ 100, 88, 99, 300 ]); // 212
\*/

NOTES:
[+/-]
