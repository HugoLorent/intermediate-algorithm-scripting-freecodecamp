function translatePigLatin(word) {
  const vowelRegex = /[aeiou]/;

  if (!vowelRegex.test(word)) {
    return (word += 'ay');
  }

  if (
    word.startsWith('a') ||
    word.startsWith('e') ||
    word.startsWith('i') ||
    word.startsWith('o') ||
    word.startsWith('u')
  ) {
    return (word += 'way');
  }

  let wordArray = word.split('');
  while (
    !word.startsWith('a') &&
    !word.startsWith('e') &&
    !word.startsWith('i') &&
    !word.startsWith('o') &&
    !word.startsWith('u')
  ) {
    const consonance = wordArray.splice(0, 1);
    wordArray.push(consonance);
    word = wordArray.join('');
  }
  return (word += 'ay');
}

console.log(translatePigLatin('rhythm'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('algorithm'));
