// [31] How would you find the greatest common divisor of two numbers?
// (GCD)
function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}
console.log(greatestCommonDivisor(2, 4)); //2
console.log(greatestCommonDivisor(3, 6)); //3
console.log(greatestCommonDivisor(2, 4)); //2
console.log(greatestCommonDivisor(10, 15)); //5
