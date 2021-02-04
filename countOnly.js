// assertEqual function to verify if strings are equal or not
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual("Happy", "Happy");
// assertEqual(3,4);
// assertEqual("Buzz", "Fizz");
// assertEqual(2,2);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"

];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
//assertEqual(result1["Agouhanna"], undefined);