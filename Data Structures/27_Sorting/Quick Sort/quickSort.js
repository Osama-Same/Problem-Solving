// [1]  Sort an integer array in place using the QuickSort algorithm ?
// Quick sort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.

function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }
  const left = [];
  const rigth = [];
  const pivot = arr[0]; // index first
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      rigth.push(arr[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(rigth));
}
console.log(quickSort([9, 0, 2, 7, -2, 6, 1])); // [ -2, 0, 1, 2, 6, 7, 9 ]
console.log(quickSort([-1,9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9)); // [-1, 1, 2, 3, 4,5, 6, 7, 8, 9]
console.log(quickSort([-2,34, 32, 43, 12, 11, 32, 22, 21, 32],0,9)); // [-2, 11, 12, 21, 22,32, 32, 32, 34, 43]
