/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/
const sumArrayOdd = (arr) => {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(sumArrayOdd([1, 2, 3, 4, 5])); // => 9
console.log(sumArrayOdd([1, 5, 3, 4, 5])); // => 14
console.log(sumArrayOdd([12, 2, 3, 4, 5, 0])); // => 8
