/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

const findIntersection = (str) => {
  let arr1 = str[0].split(", ");
  let arr2 = str[1].split(", ");
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result.join(" ");
};
console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // => '1,4,13'
console.log(findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])); // => '1,9,10'
