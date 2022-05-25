// [8] Perform a binary search in a given array?

const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] < value) {
      // Search the right half
      start = middle + 1;
    } else if (arr[middle] > value) {
      // Search the left half
      end = middle - 1;
    } else if (arr[middle] === value) {
      // Found target
      return middle;
    }
  }

  // value not found
  return -1;
};

console.log(binarySearch([1, 2, 3, 4], 1)); // 1
console.log(binarySearch([1, 2, 3, 5, 9], 4)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([0, 3], 3)); // 1
