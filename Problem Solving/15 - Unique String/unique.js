// [1]  Implement an algorithm to determine if a string has all unique characters

function isUnique(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    var ch = str[i];
    if (obj[ch]) return false;
    obj[ch] = true;
  }
  return true;
}
//console.log(isUnique("osama")); // false
//console.log(isUnique("osam")); // true

