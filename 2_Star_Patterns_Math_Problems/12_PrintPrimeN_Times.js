// Print all primes from 1 to N (Sieve of Eratosthenes)

function printPrime(nums) {
  for (let j = 2; j < nums; j++) {
    let isPrime = true;
    for (let i = 2; i < j; i++) {
      if (j % i == 0 && j !== i) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(j);
    }
  }
}

printPrime(30);
