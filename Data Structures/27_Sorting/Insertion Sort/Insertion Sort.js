// [2] Implement the Insertion Sort Algorithm?
function insertionSort_(array) {
    var length = array.length;
  
    for (var i = 1, j; i < length; i++) {
      var temp1 = array[i];
      for (var j = i - 1; j >= 0 && array[j] > temp1; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = temp1;
    }
    return array;
  }
console.log(insertionSort_([3, 0, 2, 5, -1, 4, 1, 400, 3993739, 32, 2, -45, 647, 84, 90, 484]));
  // [ -45, -1,0,1,2,2,3,4,5,32,  84,  90,400, 484, 647,3993739]
  
  