/* first Non RepeatedCharacter */

/*  
[1] Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/
// [2] How could you find the first non repeating char in a string?

const firstNonRepeatedCharacter = (str) => {
  if (str === "") {
    return "sorry";
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) == i && str.indexOf(str[i] , i +1) == -1){
        result+=str[i]
    }
  }
  return result[0];
};
console.log(firstNonRepeatedCharacter("ABCDBIRDUP")); // => 'A'
console.log(firstNonRepeatedCharacter("ALABAMA")); // => 'L'
console.log(firstNonRepeatedCharacter("Uber for horses")); // => 'U'
console.log(firstNonRepeatedCharacter("")); // => 'sorry'
console.log(firstNonRepeatedCharacter("abacddbec")); // e