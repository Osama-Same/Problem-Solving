// [6] How to find the maximum character in a string and how many times it appear

const maxCharTime = (str) => {
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
};
console.log(maxCharTime("aaaaa ooooo")); // Number 5 Char a
