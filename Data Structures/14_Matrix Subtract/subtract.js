// [10]  Add or subtract two Matrices?

const subtractMatrix = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    let element = Math.abs((arr1[i] || 0) - (arr2[i] || 0));
    result[i] = element;
  }
  return result;
};
console.log(subtractMatrix([1, 2, 3, 4], [1, 2, 3, 5])); //[ 0, 0, 0, 1 ]
