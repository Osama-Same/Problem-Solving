// [1] Count many vowels and consonants in a given String?
// [1] Count the occurrence of a given character in String?
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowels(sentence) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("Hello World")); //3

// [2] Takes an array as parameter and prints out all products starting with any of these letters (A,E,I,O,U)
const products = ["Apple", "Banana", "Cucumber", "Watermelon", "Ice-cream", "Orange", "Eggplant", "Egg"];

const prodectsFirstLetters = (str) => {
  // convert  array of string
  let string = str.toString().toUpperCase();
  // convert  string of array
  let letter = string.split(" ");
  let output = " ";

  for (let i = 0; i < letter.length; i++) {
    let duplicate = letter[i].match(/[aeiou]/gi);
    output = duplicate;
  }
  // remove characters duplicate
  let result = [...new Set(output)];
  // output
  return result.sort();
};

//console.log(prodectsFirstLetters(products)); // [ 'A', 'E', 'I', 'O', 'U' ]
