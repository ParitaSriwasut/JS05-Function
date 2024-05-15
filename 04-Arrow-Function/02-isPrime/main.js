function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let d = 2; d < n; d++) {
      if (n % d === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrime(7));
