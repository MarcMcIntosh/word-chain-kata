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
	
	// console.log(nextWords);
	
	for(let i = 0; i < nextWords.length; i += 1) {
		const tryNext = walk(nextWords[i], endWord, path, depth + 1);
		
		if (tryNext.indexOf(endWord) !== -1) {
			
			path = tryNext;
			break;
		}
	}
	
	return path;

}

