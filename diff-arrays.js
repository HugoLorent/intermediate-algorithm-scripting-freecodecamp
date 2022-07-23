function diffArrays(arr1, arr2) {
  return arr1.concat(arr2).filter((elem) => {
    if (!arr1.includes(elem) || !arr2.includes(elem)) {
      return elem;
    }
  });
}

console.log(diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArrays(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);
