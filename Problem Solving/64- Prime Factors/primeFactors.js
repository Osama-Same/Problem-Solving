

// [4] Find all prime factors of a given number?

function primeFactors(n) {
    let result = [];
    let divisor = 2;
    while (n > 2) {
      if (n % divisor == 0) {
        result.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return result;
  }
  console.log(primeFactors(100)); //[ 2, 2, 5, 5 ]
  console.log(primeFactors(20)); //[ 2, 2, 5]
  console.log(primeFactors(35)); //[ 5,7]