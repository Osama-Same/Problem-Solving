/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/
function largestProductOfThree(array) {
    const arr = array.sort();
    result = 1;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] >= 0) {
        result *= Math.max(arr[index]);
      }
    }
    return result;
}
console.log(largestProductOfThree([2, 1, 3, 7])); // => 42
console.log(largestProductOfThree([0, 2, 3])); // => 0
console.log(largestProductOfThree([2, 3, 5])); // => 30
