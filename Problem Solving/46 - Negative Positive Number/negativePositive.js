// [20] Given an array of negative/positive integers, return the element in the center position of the array.
const negativePositive = (num) => {
  let negative = [];
  let Positive = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      Positive.push(num[i]);
    }
    if (num[i] < 0) {
      negative.push(num[i]);
    }
  }
  return { Positive, negative };
};
console.log(negativePositive([1, 2, 3, -1, -2])); 
//{ Positive: [ 1, 2, 3 ], negative: [ -1, -2 ] }
