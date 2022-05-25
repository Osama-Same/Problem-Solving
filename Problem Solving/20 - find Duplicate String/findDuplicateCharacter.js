// [1]  Find duplicate characters in a String?
const findDuplicateCharacter = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      //result.push(words[i]);
      result += str[i];
    }
  }
  return result;
};
console.log(findDuplicateCharacter("aabbcc")); // a b c
