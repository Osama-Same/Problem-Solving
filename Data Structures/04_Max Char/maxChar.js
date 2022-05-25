// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let maxNum = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    obj[char] = obj[char] + 1 || 1;
    if (obj[char] > maxNum) {
      maxChar = char;
      maxNum = obj[char];
    }
  }

  return "Number" + " " + maxNum + " Char " + maxChar;
}
console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
