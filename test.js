const assert = require('assert');

require('./index');

let arr = [4,2,1,10,9,3];
arr.mergeSort();
const arr2 = 
assert.deepEqual(arr, [1,2,3,4,9,10]);