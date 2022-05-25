/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

const reverseEachWord = (str) => {
  let result = "";
  let word = str.split("").reverse()
  for (let i = 0; i < word.length; i++) {
    result += word[i];
      
  }
  return result.split(" ").reverse().join(" ")
};
console.log(reverseEachWord("This is a test")); // => "sihT si a tset"
