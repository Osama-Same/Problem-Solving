/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1

0! = 1
1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
*/
function factorial1(num) {
  // YOUR CODE HERE
  if (!num) {
    return 1;
  }
  return num * factorial1(num - 1);
}
console.log(factorial1(1)); // 1
console.log(factorial1(3)); // 6
console.log(factorial1(4)); // 24

function factorialize(num) {
  var result = num;
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) return 1;
  // We start the FOR loop with i = 4
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
/* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
console.log(factorialize(5)); // 120
