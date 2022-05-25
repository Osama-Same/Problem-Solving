// [6] Find the most significant prime factor of a given integral number?

const largetPrimeFactor1 = (n) => {
  let i = 2;
  while (i * i < n) {
    while (n % i == 0) {
      n /= i;
    }
    i++;
  }
  return n;
};

console.log(largetPrimeFactor1(6)); // 3
console.log(largetPrimeFactor1(15)); // 5
console.log(largetPrimeFactor1(392832)); //31
console.log(largetPrimeFactor1(1787866)); //893933
