// Implement a Merge Sort Algorithm?
const merge = (left, right) => {
  // the sorted elements will go here
  let arr = [];
  while (left.length && right.length) {
      // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};
function mergeSort(arr) {
  const half = arr.length / 2;
  if (arr.length <= 1) {
    return arr;
  }
  // the first half of the array
  const left = arr.splice(0, half);
  const rigth = arr;
  return merge(mergeSort(left), mergeSort(rigth));
}
console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]));
// [ -124, -40,   0, 7,  21, 100,500]
