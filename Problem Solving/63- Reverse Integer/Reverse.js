// [14]  Reverse a given Integer in Java Script?
const reverseInteger = (num) => {
  const result = num.toString().split("").reverse().join("");
  return Math.sign(result) * parseInt(result);
};
console.log(reverseInteger(1234)); // 4321
