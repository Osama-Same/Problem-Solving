// [11] Multiply two Matrices in JavaScript?

const multipleMatrix = (arr1, arr2) => {
    let row = arr1.length;
    let col = arr2.length;
    let rowNum = arr1[0].length;
    let colNum = arr2[0].length;
    let result = new Array(row);
    for (let i = 0; i < rowNum; i++) {
      result[i] = new Array(col);
      for (let j = 0; j < col; j++) {
        result[i][j] = 0;
        for (let x = 0; x < colNum; x++) {
          result[i][j] += arr1[i][x] * arr2[x][j];
        }
      }
    }
    return result;
  };

  console.log(
    multipleMatrix(
      [
        [1, 2, 3],
        [6, 1, 2],
        [5, 4, 3],
      ],
      [
        [3, 1, 3],
        [1, 1, 2],
        [2, 2, 3],
      ]
    )
  );
  
  // [ [ 11, 9, 16 ], [ 23, 11, 26 ], [ 25, 15, 32 ] ]
  
  