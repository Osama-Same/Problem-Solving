/*is_array   */

/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/
//
//Array.isArray([])
function is_array(num) {
  return Array.isArray(num);
}

console.log(is_array("w3resource")); // => false
console.log(is_array([1, 2, 4, 0])); // => true
