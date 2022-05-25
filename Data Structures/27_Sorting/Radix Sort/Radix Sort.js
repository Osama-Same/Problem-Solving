// Implement the Radix Sort Algorithm?

// 1. Get Max Length of Integers

getMax = (array) => {
  // O(n)
  let max = 0;
  for (let num of array) {
    max = max < num.toString().length ? num.toString().length : max;
  }
  return max;
};

// 2. Get Value at Position in Integer

getPosition = (num, place) => Math.floor(num / Math.pow(10, place)) % 10; // O(1)

// 3. Radix Sort Function

radixSort = array => { // O(nk)
	var max = getMax(array)
	for (let i = 0; i < max; i++) {
		let buckets = Array.from({length:10}, () => [])
		for (let j = 0; j < array.length; j++) {
			buckets[getPosition(array[j], i)].push(array[j])
		}
		array = [].concat(...buckets)
	}
	return array
}
var array = [8,3,5,9,1,5,9,2,3,8,4]
console.log(radixSort(array));
// 8
// 3,8
// 3,5,8
// 3,5,8,9
// 1,3,5,8,9
// 1,3,5,5,8,9
// 1,3,5,5,8,9,9
// 1,2,3,5,5,8,9,9
// 1,2,3,3,5,5,8,9,9
// 1,2,3,3,5,5,8,8,9,9
// 1,2,3,3,4,5,5,8,8,9,9