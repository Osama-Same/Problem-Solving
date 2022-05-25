/* Is Power Of Two */

/*  
Write a function that returns YES if a number is a power of 2, and NO otherwise.
*/
const isPowerOfTwo = (num) => {
  return Math.log2(num) % 1 ===0
};
console.log(isPowerOfTwo(0)); // => 'NO'
console.log(isPowerOfTwo(1)); // => 'YES'
console.log(isPowerOfTwo(2)); // => 'YES'
console.log(isPowerOfTwo(4)); // => 'YES'
console.log(isPowerOfTwo(6)); // => 'NO'
isPowerOfTwo(11); // => 'NO'
isPowerOfTwo(16); // => 'YES'
isPowerOfTwo(18); // => 'NO'
isPowerOfTwo(24); // => 'NO'
isPowerOfTwo(25); // => 'NO'
isPowerOfTwo(28); // => 'NO'
isPowerOfTwo(32); // => 'YES'
isPowerOfTwo(63); // => 'NO'
isPowerOfTwo(64); // => 'YES'
isPowerOfTwo(1023); // => 'NO'
isPowerOfTwo(1024); // => 'YES'
