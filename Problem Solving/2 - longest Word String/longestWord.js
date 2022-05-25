/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/
const longestWord_2 = (sen) => {
  let result = "";
  let word = sen.split(" ");

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > result.length) {
      result = word[i].replace(/[^a-zA-Z ]/gi, "");
    }
  }
  return result;
};
console.log(longestWord_2("lol!- time.")); // => 'time'
console.log(longestWord_2("I** love, cats")); // => 'love'
console.log(longestWord_2("coding&& is awesome")); // => 'awesome'
console.log(longestWord_2("hello|| world")); // => 'hello'

