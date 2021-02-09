const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// middle Function to return the middle of an array, in a new array (less the tail and head)

const middle = (array) => {
  const newMidArray = [];
  const midPoint = ((array.length - 1) / 2);
  // console.log(midPoint);
  if (array.length < 3) {
    return newMidArray;
  }
  // Test for odd or even
  if (array.length % 2 === 0) {
    let midPoint1 = midPoint - 0.5;
    let midPoint2 = midPoint + 0.5;
    // console.log("MP1: ", midPoint1, "MP2: ", midPoint2);
    newMidArray.push(array[midPoint1]);
    newMidArray.push(array[midPoint2]);
    // console.log(newMidArray);
    return newMidArray;
  } else {
    newMidArray.push(array[midPoint]);
  }
  return newMidArray;
};

module.exports = middle;

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

// Returns an empty array if input array is less than three elements - check!
// Returns an array with only the middle element(s) of the provided array
// --> If odd number of elements, return singular "middle" value in new array
// --> If even number of elements, return both "middle" values in new array

