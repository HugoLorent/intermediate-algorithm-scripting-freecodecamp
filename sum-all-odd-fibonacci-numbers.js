function sumFibs(num) {
  const fiboNumbers = [1, 1];
  let result = fiboNumbers[1];

  for (let i = 1; result <= num; i++) {
    const fiboNbToPush = fiboNumbers[i] + fiboNumbers[i - 1];
    if (fiboNbToPush <= num) {
      fiboNumbers.push(fiboNbToPush);
    }
    result = fiboNbToPush;
  }
  return fiboNumbers
    .filter((nb) => nb % 2 !== 0)
    .reduce((sumOfNb, nb) => sumOfNb + nb, 0);
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4));
