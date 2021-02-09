const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([3, 2, 1], [3, 2, 1]);
assertArraysEqual([3, 1, 1], [3, 2, 1]);