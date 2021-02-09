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
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  findKeyByValue: findKeyByValue,
  assertObjectsEqual: assertObjectsEqual,
  findKey: findKey,
  takeUntil: takeUntil,
  eqObjects: eqObjects
};