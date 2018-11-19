const validMove = require('../src/validWords');
const assert = require('assert');
const DICT_2 = require('../dictonary/dict2');
describe('Valid Words from array', () => {

  const expect_1 = ['cot'];
  it(`Should return "${expect_1}"`, () => {
    const res = validMove('cat', ['cot', 'cog', 'toc']);
    assert.deepEqual(res, expect_1);
  });

  const expect_2 =  ['lead', 'goad'];
  const param_2 = 'load';
  it('When given ' + param_2 + ' should return ' + expect_2, () => {
    const res = validMove(param_2, DICT_2);
    assert.deepEqual(res, expect_2, res);;
  });

});
