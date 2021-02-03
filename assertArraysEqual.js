
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

const assertArraysEqual = (arrayA, arrayB) => {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log("👍 Arrays are Equal");
  } else {
    console.log("👎 Arrays are Different");
  }
};

assertArraysEqual([3, 2, 1], [3, 2, 1]);
assertArraysEqual([3, 1, 1], [3, 2, 1]);
