
/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
    // YOUR CODE HERE
    return arr[Math.floor(arr.length/2)];
  }
  
  console.log(ArrayMiddle([200, 5, 100])); // => 5
  console.log(ArrayMiddle([2, 3, 2, 3, 2])); // => 2
  console.log(ArrayMiddle([2, 3])); // => 2.5