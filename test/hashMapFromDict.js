const assert = require('assert');
const hashMapfromDict = require('../src/hashMapFromDict');
const DICT_1 = require('../dictonary/dict1');

describe('Generating a hashMap from word list', () => {
  const hashMap = hashMapfromDict(DICT_1);
  it('Checking enties are in map, and each has an array', () => {
    DICT_1.forEach(word => {
      assert.ok(hashMap.has(word), '[NOT FOUND] Key: ' + word + ' ');
      const values = hashMap.get(word);
      assert.ok(Array.isArray(values), '[Value is not an Array] key: ' + word + ', value: ' + values);
    });
  });

  it('Checking values from hashMap', () => {
    const expect = ['cot'];
    assert.deepEqual(hashMap.get('cat'), expect, 'Values are not as expected');
  });
});
