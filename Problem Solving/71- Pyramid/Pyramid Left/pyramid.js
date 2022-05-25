// [14] Print a given Pyramid structure?

//let n = 5; // row or column count

const pyramidLeft = (n) => {
  // defining an empty string
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
  return string;
};
console.log(pyramidLeft(5));
/*
 *
 ***
 *****
 *******
 *********
 */
