// function isPrime(num) {
//   let prime = num != 1;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   console.log(`${num} is ` + prime);
// }
// isPrime(5);

//or another way
function isPrime(num) {
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d === 0) {
      !isPrime;
      break;
    }
  }
  console.log(`${num} is prime number`);
}
isPrime(17);
isPrime(61);
isPrime(7);
