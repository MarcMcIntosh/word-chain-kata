const DICT = require('./dictonary');
const hashMapFromDict = require('./src/hashMapFromDict');

const hashMap = hashMapFromDict(DICT);

module.exports = function walk(startWord, endWord, path = [], depth = 0) {
  path.push(startWord);
  // console.log({startWord, path, depth });
  if (startWord === endWord) { return path; }

  const lastWord = path[path.length - 1];
  const nextWords = hashMap.get(lastWord).filter(d => path.indexOf(d) === -1);

  if(!nextWords.length) {
    return path;
  } else if (nextWords.indexOf(endWord) !== -1) {
    return walk(endWord, endWord, path, depth + 1);
  };
  // };
  // console.log(nextWords);
  for(let i = 0; i < nextWords.length; i += 1) {
    const tryNext = walk(nextWords[i], endWord, path, depth + 1);
    if (tryNext.indexOf(endWord) !== -1) {
      path = tryNext;
      break;
    }
  }

  return path;

  /*
  const curr = path.concat()
  return path;
  let curr = path;
  for(let i = 0; i < nextWords.length; i += 1) {

    const currentWord = nextWords[i];
    if(path.indexOf(currentWord) === -1) {
      curr = walk(currentWord, endWord, path);
    }
    if (curr[curr.length -1] === endWord) {
       break;
    }
  }
  return curr; */

}

// const t1 = walk('cat', 'cat');
// console.log(t1);
// const t2 = walk('cat', 'cot');
// console.log(t2);
// const t3 = walk('cat', 'cog')
// console.log(t3);
// const t4 = walk('cat', 'dog');
// console.log(t4);
