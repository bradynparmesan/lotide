// lotide library function - findKey.js - function to find a key within an object

const assertEqual = require("./assertEqual");

const findKey = function(object, callback) {
  let keyOfObject = Object.keys(object);
  let trueKey = [];
  let findThisKey; // returns undefined if no key is found, by default
  // iterates through keys to search for desired key
  for (let x = 0; x < keyOfObject.length; x++) {
    trueKey.push(callback(object[keyOfObject[x]]));
  }
  for (let j = 0; j < trueKey.length; j++) {
    if (trueKey[j]) {
      findThisKey = keyOfObject[j];
      return findThisKey;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

assertEqual(findKey())


module.exports = findKey;