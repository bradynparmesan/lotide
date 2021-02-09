// const assertEqual = require('assertEqual');
const assertEqual = require('./assertEqual');

const tail = (array) => {
  let tailArray = [];
  for (let i = 1; i < array.length; i++)
    tailArray = array[i];
  return tailArray;
};

module.exports = tail;