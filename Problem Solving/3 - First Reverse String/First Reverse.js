/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/
const firstReverse = (str) => {
  let result = "";
  let string = str.split("").reverse().join("");
  for (let i = 0; i < string.length; i++) {
    result += string[i];
  }
  return result;
};
console.log(firstReverse("I Love Code")); // => 'edoC evoL I'
console.log(firstReverse("Hello World")); // => 'dlroW olleH'
console.log(firstReverse("How are you?")); // => '?uoy era woH'
