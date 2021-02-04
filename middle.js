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

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

// Returns an empty array if input array is less than three elements - check!
// Returns an array with only the middle element(s) of the provided array
// --> If odd number of elements, return singular "middle" value in new array
// --> If even number of elements, return both "middle" values in new array

// Test Cases

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 3, "A", "R", 5, 6, 8, "Happy"]));