// Check if number is prime

// Prime number - A number which can be divided by only 1 or itself

function checkPrime(num) {
  let isPrime = true;
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false;
  }

  return isPrime;
}
5;

console.log(checkPrime(7));
