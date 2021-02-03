// Function to compare two arrays to determine if equal: true or false output
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

// Function to console.log a statement whether or not two input arrays are equal of different
const assertArraysEqual = (arrayA, arrayB) => {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log("👍 Arrays are Equal");
  } else {
    console.log("👎 Arrays are Different");
  }
};

//Function to remove unwanted elements from an array, and returns new array w/o unwanted elements
const without = (source, itemsToRemove) => {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    let removeFlag = true;  
    for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] !== itemsToRemove[i]) {
          removeFlag = false;
        }
      }
      if (!removeFlag) {
        newArray.push(source[i]);
      }
    }
  return newArray;
};

// Test Results

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//Testing Scenarios

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]