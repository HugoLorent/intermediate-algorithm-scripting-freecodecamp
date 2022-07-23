function sumAll(arr) {
  const arrSorted = [].concat(arr).sort((a, b) => a - b);
  return arrSorted.reduce(
    (sum, nb) => sum + nb + getSumBetweenNumbers(arrSorted)
  );
}

function getSumBetweenNumbers(arr) {
  let arrToSum = [];
  for (let i = arr[0] + 1; i < arr[1]; i++) {
    arrToSum.push(i);
  }
  return arrToSum.reduce((sum, nb) => sum + nb);
}

console.log(getSumBetweenNumbers([1, 4]));
console.log(getSumBetweenNumbers([5, 10]));
console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));
