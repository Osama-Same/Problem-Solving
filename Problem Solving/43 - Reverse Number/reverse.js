// [1] Reverse an array in place in JavaScript?

const reverse = (num) => {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    result.unshift(num[i]);
  }
  return result;
};
console.log(reverse([1, 2, 3])); // [ 3, 2, 1 ]

// [14] Number To Reversed Array

const convert = (n) => {
  // Convert To String
  let arr = n.toString();
  // Convert To Array
  arr = arr.split("");
  // Create Empty Array
  let emptyArray = [];
  for (let i = 0; i < arr.length; i++) {
    // Convert To Number Add +
    // emptyArray.push(+arr[i]);

    // Use Unshift To Add Element In The Start
    emptyArray.unshift(+arr[i]);
  }

  // Reverse Array Order
  //let result = emptyArray.reverse();
  return emptyArray;
};
console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]
