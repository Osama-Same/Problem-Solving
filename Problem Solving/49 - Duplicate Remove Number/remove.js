// [1] Remove duplicates from the given array in Javascript?

const removeDuplicates = (num) => {
  let obj = {};
  let result = [];
  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (!obj[element]) {
      result.push(element);
      obj[element] = true;
    }
  }
  return result;
};
console.log(removeDuplicates([1, 2, 3, 4, 4, 2, 1])); // [ 1, 2, 3, 4 ]
