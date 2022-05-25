//  Implement the Bubble Sort algorithm?

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  return arr;
};
console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
