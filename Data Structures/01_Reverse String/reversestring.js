// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = "";
  let word = str.split("").reverse();
  for (let i = 0; i < word.length; i++) {
    result += word[i];
  }
  return result;
}
console.log(reverse('apple')) // elppa
console.log(reverse('hello')) // olleh
console.log(reverse('Greetings!')) // !sgniteerG
console.log(reverse('abcd')) // dcba
