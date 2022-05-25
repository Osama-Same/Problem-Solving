// [1] Check if two Strings are anagrams of each other?

function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    return false;
  }
  let str1 = a.split("").sort().join();
  let str2 = b.split("").sort().join();
  if (str1 == str2) {
    return true;
  }
}
console.log(checkStringsAnagram("osama", "osama")); // true
console.log(checkStringsAnagram("osama", "osam")); // fales
