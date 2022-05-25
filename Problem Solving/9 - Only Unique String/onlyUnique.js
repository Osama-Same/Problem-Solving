/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/
const onlyUnique = (str) => {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
    }
  }
  return unique;
};

console.log(onlyUnique("hello there")); // => 'o tr'
console.log(onlyUnique("xyz")); // => 'xyz'
console.log(onlyUnique("iiii")); // => ''
