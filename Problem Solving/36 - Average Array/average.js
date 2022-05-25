// [1] Calculate the average of all numbers in a given array
const average = (num) => {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
    result /= num.length;
  }
  return result;
};
console.log(average([1, 2, 3, 4, 5])); // 1.18752
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
