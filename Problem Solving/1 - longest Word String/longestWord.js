/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

const longestWord = (sen) => {
  let result = "";
  let word = sen.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > result.length) {
      result = word[i];
    }
  }
  return result;
};
console.log(longestWord("osama need")); //osama
console.log(longestWord("lol time")); // => 'time'
console.log(longestWord("I love cats")); // => 'love'
console.log(longestWord("coding is awesome")); // => 'awesome'
console.log(longestWord("hello world")); // => 'hello'





