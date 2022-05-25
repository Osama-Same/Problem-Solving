/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

const evenOccurrence = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      result.push(arr[i]);
    }
  }
  return result[0];
};
console.log(evenOccurrence([1, 2, 6, 6])); // => 6
console.log(evenOccurrence([1, 2, 9, 8, 8, 6, 6])); // => 8
console.log(evenOccurrence([1, 9, 7, 3, 6, 6, 8, 9, 9])); // => 6
