//[3] Implement Selection Sort  Algorithm?

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([5, 2, 4, 6, 1, 3])); // [ 1, 2, 3, 4, 5, 6 ]
console.log(selectionSort([10, -40, 50, -124, 0, 21, 7])); // [ -124, -40, 0, 7, 21, 100, 500 ]
