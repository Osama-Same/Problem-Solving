// [3] The largest and smallest number in an unsorted integer array?

const findMaxMin = (num) => {
  let max = num[0];
  let min = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    } else if (num[i] < min) {
      min = num[i];
    }
  }
  return { min, max };
};

console.log(findMaxMin([112, 24, 31, 44, 101, 203, 33, 56]));//{ min: 24, max: 203 }
