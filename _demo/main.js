//test push,feed back
//update solution

function isPrime(n) {
  let isPrime = true;
  for (let d = 2; d < n; d++) {
    if (n % d == 0) {
      !isPrime;
      break;
    }
  }
  if (isPrime) {
    console.log(n);
  }
}
isPrime(7);
