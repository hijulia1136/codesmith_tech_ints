/* ********************************************* Problem A ******************************************** */

/*
Write a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter deep the object is nested.
Example:
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                        // -> false
console.log(copyOfTools[0] === tools[0]);                                  // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
*/

// Hack Solution (not ideal)
const deepCopy = (object) => JSON.parse(JSON.stringify(object));

// Better Solution
const betterDeepCopy = (object) => {
  //return the input object if not an object and end function
  if (typeof object !== 'object') return object;

  //create copy variable
  let copy = object;

  //use isArray to check if object is array
  //if so set copy to an empty array where we will push elements
  //for of loop to iterate through object
  //if conditional to check if the type of element is an object and if so push to copy array the result of calling function again passing in the element
  //otherwise push the element to copy immediately
  if (Array.isArray(object)) {
    copy = [];
    for (const element of object) {
      if (typeof element === 'object') copy.push(betterDeepCopy(element));
      else copy.push(element);
    }

    //else if the typeof object is an object
    //create copy as an object
    //for in loop with key of object
    //declare new variable value and set it to the object key
    //if theh type of value is an object set copy at that key to the invoked value of deepcopy passing in value
    //otherwise set copy at key to the value
  } else if (typeof object === 'object') {
    copy = {};
    for (const key in object) {
      const value = object[key];
      if (typeof value === 'object') copy[key] = betterDeepCopy(value);
      else copy[key] = value;
    }
  }
  //return copy
  return copy;
};
const tools = [
  { editor: { favorite: { mine: { name: 'vscode' } } } },
  { shell: 'zsh' },
];

console.log(betterDeepCopy(tools));

/* ********************************************* Problem B ********************************************* */

/*
Write a function 'subsetSum' that is given an array of integers and a target number. It should return true if there is a subset of the array that sums up to the target and returns false otherwise. A subset can be any size and the elements do not have to appear consecutively in the array.

Examples:
subsetSum([3, 7, 4, 2], 5)           -> true (3 + 2 = 5)
subsetSum([3, 34, 4, 12, 5, 12], 32) -> true (3 + 12 + 5 + 12 = 32)
subsetSum([8, 2, 4, 12], 13)         -> false
subsetSum([8, -2, 1, -3], 6)         -> true (8 + 1 + (-3) = 6)
*/

const subsetSum = (array, target) => {
  //if the target === 0 return true
  if (target === 0) return true;
  //if array.length = 0 return false
  if (array.length === 0) return false;
  return (
    //recursive call call in take it or leave it approach
    //slice off 1 element passing in array, target - array at element 0
    subsetSum(array.slice(1), target - array[0]) ||
    subsetSum(array.slice(1), target)
  );
};

/* ********************************************* Problem C ********************************************* */

/*
Write a function called 'debounce' that accepts a function and returns a new function that only allows invocation of the given function after 'wait' milliseconds have passed since the last time the returned function ran. Additional calls to the returned function within the 'wait' time should not be invoked or queued, but the timer should still get reset.

Example:
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi' ///after 3 miliseconds
setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
*/

//declare debounce function with callback and interval passed in
const debounce = (callback, interval) => {
  //declare a variable set to a new Date
  let timerStart = new Date();
  //return with anonymous function
  return () => {
    //set a time variable also to new date
    //if that time less than the first time variable results in a timer greater than the interval passed in
    //then reset the first time variable to a new date and return the callback passed in function

    const invocationTime = new Date();
    if (invocationTime - timerStart > interval) {
      timerStart = new Date();
      return callback();

      //otherwise first time variable should be set to the 2nd time variable
      //returning undefined
    } else {
      timerStart = invocationTime;
      return undefined;
    }
  };
};
function giveHi() {
  return 'hi';
}

const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes());
