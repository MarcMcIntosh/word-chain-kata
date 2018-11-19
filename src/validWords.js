// Should take a word, and an array of words and return the an array of words that are difrent by only one letter.
const diffrentByOneLetter = require('./diffrentByOneLetter');
module.exports = function validWords(str, arr) {
  return arr.filter(d => diffrentByOneLetter(str, d));
  /* return arr.filter((word) => {
    if(str.length !== word.length) { return false; }

    let count = 0;
    let order = true;


    for(let i = 0; i < word.length; i += 1) {
      if(str.indexOf(word[i]) === -1) {
        count += 1;
        continue;
      } else if(str[i] !== word[i]) {
        let order = false;
        break;
      }
    }

    return order && count === 1;
  }); */
};
