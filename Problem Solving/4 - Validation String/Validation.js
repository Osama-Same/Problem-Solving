/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

const usernameValidation = (str) => {
  let word = /^([a-z0-9]{5,})$/;
  //  1. The username is between 4 and 25 characters.
  if (
    (str.length >= 4 && str.length <= 25) ||
    // 2. It must start with a letter.
    str.startsWith("a") ||
    // 3. It can only contain letters, numbers, and the underscore character.
    word.test(str) ||
    // 4. It cannot end with an underscore character.
    str.match(/[A-Za-a/]/)
  ) {
    return true;
  }
  return false;
};
console.log(usernameValidation("osama", 123)); // true
console.log(usernameValidation("os", 123)); //  false
console.log(usernameValidation("osama", 123)); //  false
