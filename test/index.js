const assert = require('assert');
const main = require('../');
const DICT_1 = require('../dictonary/dict1');
const DICT_2 = require('../dictonary/dict2');
const DICT_3 = require('../dictonary/dict3');


describe('Word chain', function() {
 const PARAMS_1 = ['cat', 'dog'];
 const PARAMS_2 = ['lead', 'gold'];
 const PARAMS_3 = ['ruby', 'code'];

 // util
 const mkString = (params, res) => `When given params: ${params.join(' ')}
 main function should return ${res.join(' ')}`;

 // tests
 function runTest(func, params, expect) {
   const description = mkString(params, expect);
   const result = func.apply(null, params);
   return it(description, () => {
     return assert.deepEqual(result, expect);
   })
 }

 runTest(main, PARAMS_1, DICT_1);
 runTest(main, PARAMS_2, DICT_2);
 runTest(main, PARAMS_3, DICT_3);

});
