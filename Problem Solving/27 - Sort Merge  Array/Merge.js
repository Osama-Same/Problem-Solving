// [1] How would you merge two sorted array?

function mergeSortedArray(a, b) {
  return [...a, ...b].sort((a, b) => a - b);
}
console.log(mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]));
//[1, 2, 2, 3, 5, 6, 9, 29]
