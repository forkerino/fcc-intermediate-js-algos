/*Sum All Primes 
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.*/

function sumPrimes(num) {
  return [...Array(num+1).keys()].slice(2).filter(isPrime).reduce((a,b) => a+b);
}

function isPrime(n){
  for (let i=2; i<=Math.sqrt(n); i++) {
      if (n % i === 0 ) return false;
  }
  return true;
}