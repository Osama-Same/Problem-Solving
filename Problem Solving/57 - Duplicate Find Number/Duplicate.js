// [1] Find the duplicate number on a given integer array?
// [2] Find duplicate numbers in an array if it contains multiple duplicates?
const findDuplicate = (num) => {
  let result = [];
  let sort = num.sort();
  for (let i = 0; i < sort.length - 1; i++) {
    if (sort[i + 1] === sort[i]) {
      result.push(sort[i]);
    }
  }
  return result;
};
console.log(findDuplicate([1, 2, 3, 4, 56, 4, 5, 5, 5])); //[ 4, 5, 5 ]

