function addTogether(x) {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') return undefined;
  }
  if (arguments.length === 1) {
    return function (y) {
      if (typeof y !== 'number') return undefined;
      return x + y;
    };
  }
  return arguments[0] + arguments[1];
}

console.log(addTogether(2, '3'));
console.log(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
console.log(addTogether('2', 3));
console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
