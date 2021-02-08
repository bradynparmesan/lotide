// lotide library - findKeyByValue.js - function to return instance of a specific key property

const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
  let findThisKey = ""; //initialize variable as empty string
  let keyOfObject = Object.keys(object);
  // iterate through each of the keys to return matching property relative to the query
  for (let i = 0; i < keyOfObject.length; i++) {
    if (object[keyOfObject[i]] === value) {
      findThisKey = keyOfObject[i];
    } else {
      findThisKey = undefined; // returns undefined if key is not found in object
    }
  } return findThisKey;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;