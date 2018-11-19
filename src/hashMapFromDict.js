// should take an array of words to return an object with a key for each word with values that are a valid move.
const validWords = require('./validWords');

function toHashMap(arr) {
  /*
  return arr.reduce((a, b) => {
    a[b] = validMoves(b, arr);
    return a;
  }, {});
  */
  const hashMap = new Map();
  for(let i = 0; i < arr.length; i += 1) {
    const key = arr[i];
    const values = validWords(key, arr);
    if(values.length) {
      hashMap.set(key, values);
    }
  }
  return hashMap;
}

module.exports = toHashMap;
