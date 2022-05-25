// [1]  Find all pairs of integer arrays whose sum is equal to a given number?

const twoSum = (array, sum) => {
  let hashMap = {};
  let results = [];

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push([hashMap[array[i]], array[i]]);
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }
  return results;
};
console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 50)); //[ [ 10, 40 ], [ 20, 30 ] ]
console.log(twoSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); //[ [ 4, 6 ], [ 3, 7 ], [ 2, 8 ], [ 1, 9 ] ]
