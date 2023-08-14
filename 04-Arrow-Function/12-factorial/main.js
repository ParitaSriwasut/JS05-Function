let factorial = (num) => {
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) return 1;
  //start the FOR loop with i = 4
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};
console.log(factorial(5));
