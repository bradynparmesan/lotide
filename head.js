const assertEqual = require('./assertEqual');


const head = (array) => {
  firstElement = "";
  firstElement = array[0];
  return firstElement;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hi");
