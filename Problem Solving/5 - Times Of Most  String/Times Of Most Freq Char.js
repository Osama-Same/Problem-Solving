/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

const timesOfMostFreqChar = (str) => {
  var expCounts = {};
  let maxChar = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    expCounts[char] = expCounts[char] + 1 || 1;

    if (expCounts[char] > count) {
      maxChar += char;
      count = expCounts[char];
    }
  }
  return maxChar.length;
};
console.log(timesOfMostFreqChar("hello world")); //hll => 3
console.log(timesOfMostFreqChar("hello world lol")); //hllll => 5
console.log(timesOfMostFreqChar("hello world lol woooow")); //hlllloo => 7
console.log(timesOfMostFreqChar("hello world lol wow www.com")); //hlllw => 6
