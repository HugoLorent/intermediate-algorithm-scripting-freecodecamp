function truthCheck(collection, predicate) {
  let checkTruth = true;
  for (let i = 0; i < collection.length; i++) {
    if (!Boolean(collection[i][predicate])) {
      return false;
    }
  }
  return checkTruth;
}

console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'isBot'
  )
);
console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'name'
  )
);
