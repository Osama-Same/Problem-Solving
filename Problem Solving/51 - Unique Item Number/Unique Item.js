/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/
const uniqueItems = (num) => {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (result.indexOf(num[i]) === -1) {
      result.push(num[i]);
    }
  }
  return result;
};

console.log(uniqueItems([1, 1, 1, 1, 1])); // [1]=> 1
console.log(uniqueItems([3, 3, 5, 3])); //[3,5] => 2
console.log(uniqueItems([5, 1, 1, 5, 1])); //[1,6,7] => 2
console.log(uniqueItems([1, 6, 7])); // [] => 3
console.log(uniqueItems([1, 2, 3, 1, 2, 3])); // => 3
console.log(uniqueItems([5, 1, 2, 2, 1, 5])); // => 3
console.log(uniqueItems([5, 77, 1, 3])); // => 4
