/* Largest Possible Sum */

/*  
Write a function that calculates the largest possible sum of any n consecutive numbers in an array arr of integers (where n ≥ 1).
*/


const largestPossibleSum = (arr, size) => {
  if (size > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i + size - 1 < arr.length; i++) {
    let value = arr[i];
    for (let j = 1; j < size; j++) {
      value += arr[i + j];
    }
    if (max < value) {
      max = value;
    }
  }
  return max;
};
console.log(largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1)); // 10 => 10
console.log(largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2)); // 10 + 4 => 14
console.log(largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3)); // => 16
console.log(largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4)); // => 20
console.log(largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5)); // => 23
console.log(largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1)); // => 10
console.log(largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2)); // => 14
console.log(largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3)); // => 22
console.log(largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4)); // => 26
console.log(largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5)); // => 29
console.log(largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1)); // => 10
console.log(largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2)); // => 19
console.log(largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3)); // => 22
console.log(largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4)); // => 32
console.log(largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5)); // => 36
