// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const findKeyByValue = require('./findKeyByValue');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKey = require('./findKey');
const takeUntil = require('./takeUntil');
const eqObjects = require('./eqObjects');


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  findKeyByValue,
  assertObjectsEqual,
  findKey,
  takeUntil,
  eqObjects
};