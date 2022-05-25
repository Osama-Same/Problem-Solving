// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let revNum = 0;
  let lastDigit = 0;
  while (n !== 0) {
    lastDigit = n % 10;
    n = parseInt(n / 10);
    revNum = revNum * 10 + lastDigit;
    if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0;
  }
  return revNum;
}
console.log(reverseInt(15)); //51
console.log(reverseInt(981)); //189
console.log(reverseInt(-15)); //51
console.log(reverseInt(-90)); //-09
