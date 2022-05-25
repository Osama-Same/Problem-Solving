/* Array Clone */

/*  
Write a JavaScript function to clone an array.
*/

function array_Clone(num) {
  return [...num];
}

console.log(array_Clone([1, 2, 3])); // =>[1,2,3]
console.log(array_Clone([1, 9, 8])); // =>[1,9,8]
