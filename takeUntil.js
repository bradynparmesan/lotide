/* lotide library function - takeUntil.js - function to return a slice of array elements taken from the beginning of an array up to a specified point/character */

const takeUntil = function(arr, callback) {
  actualArr = [];
  newArr = [];
  // iterate through array until point specified by callback function
  for (const value of arr) {
    actualArr.push(callback(value));
  } //create new array 
  for (let i = 0; i < arr.length; i++) {
    if (!actualArr[i]) {
      newArr.push(arr[i]);
    } else {
      return newArr;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

//expected output --> [1, 2, 5, 7, 2]

console.log('---');

const data2 =  ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//expected output --> ['I\'ve', 'been', 'to', 'Hollywood']

module.exports = takeUntil.js;