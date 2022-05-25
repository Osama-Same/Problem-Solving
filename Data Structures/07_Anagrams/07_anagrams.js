// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // Only consider characters, not spaces or punctuation.
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  // Check to see if two provided strings are anagrams of eachother
  if (stringA.length !== stringB.length) {
    return false;
  }

  let arrB = stringB.split("");
  // One string is an anagram of another if it uses the same characters in the same quantity.
  for (let char of stringA) {
    if (!arrB.includes(char)) {
      return false;
    } else {
      arrB.splice(arrB.indexOf(char), 1);
    }
  }

  return true;
}
console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));
