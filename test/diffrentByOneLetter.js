const assert = require('assert');
const diffrentByOneLetter = require('../src/diffrentByOneLetter');

describe('Diffrent By One Letter, when given two words that are diffrent bu one letter it should return true', () => {
  it('load and goad should be true', () => {
    const res1 = diffrentByOneLetter('load', 'goad');
    const res2 = diffrentByOneLetter('load', 'gold');
    console.log(res1);
    assert.equal(res1, true, 'Recived: ' + res1)
    assert.equal(res2, false, 'Recived: ' + res2);
  });
});
