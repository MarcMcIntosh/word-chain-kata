const jsc = require('jsverify');
const diffrentByOneLetter = require('../src/diffrentByOneLetter');

// arbitrary char

describe('Testing diffrentByOneLetter, by generating random single characters', () => {
	it("Should only return true if there is a one letter diffrence", () => {
		return jsc.assertForall(jsc.char, jsc.char, (a, b) => {
			return (a !== b) === diffrentByOneLetter(a, b);
		});
	});
});
