// [3] How will you remove duplicate characters from a sting?
function removeDuplicateChar(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (result.indexOf(words[i]) === -1) {
      result.push(words[i]); //[ 'osama', 'text' ]
      //result += words[i]; // text
    }
  }
  return result.join(" ");
}

console.log(removeDuplicateChar("Learn more javascript dude")); // L n m o j v s c i p t u
console.log(removeDuplicateChar("osama osama")); // osama
console.log(removeDuplicateWord("osama osama text"));
console.log(removeDuplicateWord("Hello Elzero Web Web Hello School")); // Hello Elzero Web School

// [4] Remove Character From String
function removeCharFrom(word, c) {
  return word
    .split("") // Convert To Array
    .filter(function (char) {
      // Filter Small And Capital Character From Array Elements
      return char !== c.toLowerCase() && char !== c.toUpperCase();
    })
    .join(""); // Join Array Elements Again in One String
}

//console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d"));
//console.log(removeCharFrom("ElxzeroX Web Sxchool", "x"));
//console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));
