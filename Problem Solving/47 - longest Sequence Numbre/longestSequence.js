// [23] Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.

function longestSequence(arr) {
  // YOUR CODE HERE

  let largestCount = 0;
  let currentCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      currentCount = 0;
    } else {
      currentCount++;
    }
    if (currentCount > largestCount) largestCount = currentCount;
  }
  return largestCount;
}
console.log(longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1])); // => 4
console.log(longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1])); // => 2
console.log(longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1])); // => 3
console.log(longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1])); // => 4
console.log(longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1])); // => 5
console.log(longestSequence([1, 0, 0, 1])); // => 1
console.log(longestSequence([0, 0, 0, 0])); // => 'There is no one sequenced'
