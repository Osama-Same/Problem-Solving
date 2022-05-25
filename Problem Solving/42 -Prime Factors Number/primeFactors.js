// [29] How could you find all prime factors of a number?
const primeFactors = (n) => {
  let factors = [];
  divisor = 2;
  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
};
console.log(primeFactors(12)); //[2,2,3] = 12
console.log(primeFactors(69)); // [3 , 23] = 69
console.log(primeFactors(100)); // [2,2,5,5] = 100
console.log(primeFactors(101)); // [101]
console.log(primeFactors(103)); // [103]
console.log(primeFactors(104)); // [2,2,2,13]
console.log(primeFactors(105)); // [ 3, 5, 7 ]
