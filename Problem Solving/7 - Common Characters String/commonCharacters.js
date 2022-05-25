/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/
//  Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
const commonCharacters = (str1, str2) => {
  let duplicateCharacter = "";
  for (let i = 0; i < str1.length; i++) {
    if (duplicateCharacter.indexOf(str1[i]) === -1) {
      if (str2.indexOf(str1[i]) !== -1) {
        duplicateCharacter += str1[i];
      }
    }
  }
  return duplicateCharacter;
};
console.log(commonCharacters("abc", "abc")); // => 'abc'
console.log(commonCharacters("What is love?", "Baby don't hurt me")); // => 'hatoe'
console.log(commonCharacters("Riding on a buffalo makes me more approachable", "so what")); // => 'oash'
