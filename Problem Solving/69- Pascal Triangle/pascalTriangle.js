// [9] Print Pascal's triangle?
const pascalTriangle = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(arr[i - 1][j - 1] + arr[i - 1][j]);
    }
    if (i > 0) row.push(1);

    arr.push(row);
  }
  return arr;
};
//console.log(pascalTriangle(6));
// output
//[ 1 ],
//[ 1, 1 ],
//[ 1, 2, 1 ],
//[ 1, 3, 3, 1 ],
//[ 1, 4, 6, 4, 1 ],
//[ 1, 5, 10, 10, 5, 1 ]
/*
  ROW 1 = 1
  
  ROW 2 = (0+1), (1+0) = 1, 1
  
  ROW 3 = (0+1), (1+1), (1+0) = 1, 2, 1
  
  ROW 4 = (0+1), (1+2), (2+1), (1+0) = 1, 3, 3, 1
  
  ROW 5 = (0+1), (1+3), (3+3), (3+1), (1+0) = 1, 4, 6, 4, 1
  
  ROW 6 = (0+1), (1+4), (4+6), (6+4), (4+1),(1+0) = 1, 5, 10, 10, 5, 1
  
  ROW 7 = (0+1), (1+5), (5+10), (10+10), (10+5), (5+1), (1+0) = 1, 6, 15, 20, 15, 6, 1
  */
