/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/
function characterFrequency(input) {
    let result = {};
    let char = input.split("").sort();
  
    char.forEach(function (char) {
      if (!result[char]) {
        result[char] = 1;
      } else {
        result[char]++;
      }
    });
    return result;
  }
  
  console.log(characterFrequency("mississippi")); // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
  console.log(characterFrequency("miaaiaaippi")); // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
  
  