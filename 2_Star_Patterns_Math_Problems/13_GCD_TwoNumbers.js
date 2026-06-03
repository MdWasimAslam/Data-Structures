// GCD = Greatest Common Divisor — the largest number that divides both given numbers with zero remainder.
// Examples to anchor it:

// GCD(12, 8) → 4 (because 4 divides 12, 4 divides 8, and nothing bigger does both)
// GCD(15, 25) → 5
// GCD(7, 13) → 1 (no shared divisor except 1 — these are "coprime")

function getGCD(a, b) {
  let lowestNum = a < b ? a : b;

  let gcd = 0;

  for (let i = 1; i <= lowestNum; i++) {
    if (a % i === 0 && b % i == 0) {
      gcd = i;
    }
  }

  console.log(gcd);
}

getGCD(12, 8);
