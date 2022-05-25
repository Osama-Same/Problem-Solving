// [3] Implement the Bucket Sort Algorithm?

const bucketSortinsertionSort = (array) => {
  var length = array.length;

  for (var i = 1, j; i < length; i++) {
    var temp1 = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp1;
  }

  return array;
};
const bucketSort = (array, bucketSize) => {
  if (array.length === 0) {
    return array;
  }

  // Determine minimum and maximum values
  var i;
  var minValue = array[0];
  var maxValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  // Initialise buckets
  var default_bucket_size = 5;
  bucketSize = bucketSize || default_bucket_size;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  // Sort buckets and place back into input array
  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    bucketSortinsertionSort(buckets[i]);
    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
    }
  }

  return array;
};
var array = [3, 0, 2, 5, -1, 4, 1, 400, 2, 39739, 32, -45, 647, 84, 90, 484, -100];
var bucketSize = 4; //you can set any value depending on the distribution of elements in your array

console.log(bucketSort(array, bucketSize));
/*
  [
     -100, -45,  -1,   0,
        1,   2,   2,   3,
        4,   5,  32,  84,
       90, 400, 484, 647,
    39739
  ]
  */
