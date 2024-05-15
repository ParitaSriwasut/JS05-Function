function isPrime(num) {
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(`${num} is prime number`);
}
function printPrime(limit) {
  for (let n = 2; n <= limit; n++) {
    isPrime(n);
  }
}
printPrime(11);
