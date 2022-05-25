// [1] Find all permutations of String ?

function permutations(str) {
  let result = [];
  if (str.length === 1) {
    result.push(str);
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remainingChars = str.slice(0, i) + str.slice(i + 1);
    for (let j = 0; j < remainingChars.length; j++) {
      result.push(char + permutations(remainingChars));
    }
  }
  return result;
}
//console.log(permutations("abc")); // [ 'abc,cb', 'abc,cb', 'bac,ca', 'bac,ca', 'cab,ba', 'cab,ba' ]

// [2] Given two strings, write a method to decide if one is a permutation of the other

const isPermutation = (str1, str2) => {
  // Get lengths of both strings
  let n1 = str1.length;
  let n2 = str2.length;

  // If length of both strings is not same,
  // then they cannot be Permutation
  if (n1 != n2) return false;

  // convert to array
  let ch1 = str1.split(" ");
  let ch2 = str2.split(" ");

  // Sort both strings
  ch1.sort();
  ch2.sort();
  // Compare sorted strings
  for (let i = 0; i < n1.length; i++) {
    if (ch1[i] !== ch2[i]) {
      return false;
    }
  }
  return true;
};
//console.log(isPermutation("asdf", "fdsa")); // returns true
//console.log(isPermutation("asdf", "fdsaa")); // returns false
//console.log(isPermutation("asdf", "fdsff")); // returns false
