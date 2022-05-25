// Implement the Counting Sort Algorithm?
const CountingSort = (arr, min, max) => {
  let i;
  let z = 0;
  const count = [];
  for (i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
    }
  }
  return arr;
};
let arr1 = [60, 40, 30, 20, 10, 40, 30, 60, 60, 20, 40, 30, 40]; // [ 10, 20, 20, 30, 30, 30,40, 40, 40, 40, 60, 60,60]
var arr = [3, 0, 2, 5, -1, 4, 1, 400, 2, 39739, 32, -45, 647, 84, 90, 484, -100];
const min = Math.min(...arr); //using the ES2015 new spread operator.
const max = Math.max(...arr); //using the ES2015 new spread operator

console.log(CountingSort(arr1, min, max));
