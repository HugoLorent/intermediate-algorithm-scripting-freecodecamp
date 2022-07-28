function sumPrimes(num) {
  let primesNumbers = [];

  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      primesNumbers.push(i);
    }
  }
  return primesNumbers.reduce((primesNbSum, primeNb) => primesNbSum + primeNb);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  const sqrt = Math.sqrt(num);

  for (var i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
