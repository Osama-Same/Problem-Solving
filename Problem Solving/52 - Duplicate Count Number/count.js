// [1] Find Count Duplicate
const countDuplicate = (num) => {
  let result = {};
  for (let i = 0; i < num.length; i++) {
    if (result[num[i]]) {
      result[num[i]] += 1;
    } else {
      result[num[i]] = 1;
    }
  }
  return result;
};
console.log(countDuplicate([1, 2, 3, 4, 56, 4, 5, 5, 5])); //{ '1': 1, '2': 1, '3': 1, '4': 2, '5': 3, '56': 1 }
