// [1] Check if two String is a rotation of each other?
function isStrRotation(str1, str2) {
    for (let i = 0; i < str1.length; ++i) {
      // shift str1
      str1 = str1[str1.length - 1] + str1.substring(0, str1.length - 1);
      if (str1 === str2) {
        return true;
      }
    }
    return false;
  }
  
  //console.log(isStrRotation("abcd", "abcd")); // true
  //console.log(isStrRotation("abcd", "acdb")); // false
  //console.log(isStrRotation("abcd", "dabc")); // true
  //console.log(isStrRotation("abcd", "abcd")); // true
  