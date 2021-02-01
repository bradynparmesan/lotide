const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (array) => {
  let tailArray = [];
  for (let i = 1; i < array.length; i++)
    tailArray = array[i];
  return tailArray;
};

// Test Case

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!