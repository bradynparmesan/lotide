// assertEqual function to verify if strings are equal or not
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Function to Count Letters in a String

const countLetters = (inputString) => {
  const results = {};

  for (const item of inputString) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }


  return results;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("hello"));

assertEqual(countLetters("hello")["e"], 1);