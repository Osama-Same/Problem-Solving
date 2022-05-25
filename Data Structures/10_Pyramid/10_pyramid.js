// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let string = "";
  // External loop
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  return string
}
console.log("------------------------------------");
console.log(pyramid(1));
console.log("------------------------------------");
console.log("------------------------------------");
console.log(pyramid(2));
console.log("------------------------------------");
console.log("------------------------------------");
console.log(pyramid(3));
console.log("------------------------------------");
