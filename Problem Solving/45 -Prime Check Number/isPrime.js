// [1] How would you verify a prime number?

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

console.log(isPrime(1)); // returns false
console.log(isPrime(2)); // returns true
console.log(isPrime(9)); // returns false
console.log(isPrime(11)); // returns true
console.log(isPrime(237)); // returns fales
console.log(isPrime(137)); // returns True
