// [1] Check if a String contains only digits?
function checkIfStringHasOnlyDigits(str) {
  return /^[0-9]+$/.test(str);
}

console.log(checkIfStringHasOnlyDigits(123)); // true
console.log(checkIfStringHasOnlyDigits(-123)); // false
console.log(checkIfStringHasOnlyDigits(123.12)); // false
console.log(checkIfStringHasOnlyDigits("abcd123")); // false
