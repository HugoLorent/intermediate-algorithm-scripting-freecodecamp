function smallestCommons(arr) {
  const finalArray = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    finalArray.push(i);
  }
  finalArray.sort((a, b) => a - b);

  for (let i = 1; i > 0; i++) {
    if (finalArray.every((nb) => i % nb === 0)) {
      return i;
    }
  }
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
