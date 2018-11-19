module.exports = function diffrentByOneLetter(str1, str2) {
  if(str1.length !== str2.length) { return false; }
  let count = str1.length;
  // let order = false;
  for(let i = 0; i < str1.length; i += 1) {
    if (str1[i] === str2[i]) { count -= 1; }
  }
  return count === 1;
}
