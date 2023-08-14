function min(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(min([]));
console.log(min([2]));
console.log(min([3, 1]));
console.log(min([7, 3, 9, 2]));
