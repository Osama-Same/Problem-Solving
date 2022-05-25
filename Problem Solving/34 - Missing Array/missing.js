// [1] Find a missing number in a given integer array of 1 to 100?
const missingNumber = (num) => {
  let result = [];
  for (let i = 0; i <= num.length; i++) {
    if (num.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
};
console.log(missingNumber([1, 2, 3, 5, 6, 9, 10, 11])); // [ 0, 4, 7, 8 ]
