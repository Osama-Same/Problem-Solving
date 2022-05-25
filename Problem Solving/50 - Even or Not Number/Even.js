/* Even or Not */

/*  
Write a function that returns true if a number is even, and false otherwise.
*/

const evenOrNot = (num) => {
  if (num % 2 == 0) {
    return true;
  } else if (num % 2 == 1) {
    return false;
  } else {
    return false;
  }
};
console.log(evenOrNot(1)); // => false
console.log(evenOrNot(2)); // => true
console.log(evenOrNot(5)); // => false
console.log(evenOrNot(99)); // => false
console.log(evenOrNot(0)); // => true
