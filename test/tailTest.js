
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs', 'Bootcamp']", () => {
    assert.deepEqual(tail(["Welcome!", "Lighthouse", "Labs", "Bootcamp"]), ["Lighthouse", "Labs", "Bootcamp"]);
  });
});

