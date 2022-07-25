function seekAndDestroy(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  return arr.filter((value) => {
    if (valsToRemove.indexOf(value) < 0) {
      return value;
    }
  });
}

console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(
  seekAndDestroy(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht',
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
);
