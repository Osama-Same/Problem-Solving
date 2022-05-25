
// [15] Convert a decimal number to binary in JavaScript?
const convertToBinary = (num) => {
  let binary = (num % 2).toString();
  while (num > 1) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  return binary;
};
console.log(convertToBinary(25)); // 11001
console.log(convertToBinary(8)); // 1000
console.log(convertToBinary(33)); // 100001
