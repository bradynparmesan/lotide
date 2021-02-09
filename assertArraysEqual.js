
const eqArrays = require('./eqArrays');

const assertArraysEqual = (arrayA, arrayB) => {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log("👍 Arrays are Equal");
  } else {
    console.log("👎 Arrays are Different");
  }
};

module.exports = assertArraysEqual;



