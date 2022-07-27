function uniteUnique(arr) {
  const args = [...arguments];
  return args.reduce((finalArray, arr) => {
    arr.forEach((nb) => {
      if (finalArray.indexOf(nb) < 0) {
        finalArray.push(nb);
      }
    });
    return finalArray;
  }, []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
