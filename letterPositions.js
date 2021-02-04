// eqArrays Function to evaluate equality of two arrays
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual Function to test equality of two arrays and output message (yes or no)
const assertArraysEqual = (arrayA, arrayB) => {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log("👍 Arrays are Equal");
  } else {
    console.log("👎 Arrays are Different");
  }
};

//Function to return indices of letter positions within a string

const letterPositions = (inputString) => {
  const results = {};
    for (let i = 0; i < inputString.length; i++) {
      const character = inputString[i];
      if (results[character] && Array.isArray(results[character])) {
        results[character].push(i);
      } else {
        results[character] = [i]; // sets up the array for our index values
      }
    }
    return results;
};

letterPositions("hello");

assertArraysEqual(letterPositions("hello").e, [1]);