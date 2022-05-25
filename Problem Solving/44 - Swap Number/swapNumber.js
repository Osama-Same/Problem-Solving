// [1] swap number without temp
function swapNumb(a, b) {
  return ([a, b] = [b, a]);
}
console.log(swapNumb(1, 2));
