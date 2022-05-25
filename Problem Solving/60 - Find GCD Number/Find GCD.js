// [8] Find GCD of two numbers using Euclid's Algorithm?

const findGCD = (num1, num2) => {
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    while (a && b && a !== b) {
      if (a > b) {
        [a, b] = [a - b, b];
      } else {
        [a, b] = [a, b - a];
      }
    }
    return a || b;
  };
  console.log(findGCD(252, 105)); // 21
  console.log(findGCD(54, 24)); // 6
  
  