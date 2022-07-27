function fearNotLetter(str) {
  let counter = str[0].charCodeAt();

  for (let i = 0; i < str.length; i++) {
    if (counter !== str[i].charCodeAt()) {
      return String.fromCharCode(counter);
    }
    counter++;
  }
  return undefined;
}

console.log(fearNotLetter('abce'));
console.log(fearNotLetter('abcdefghjklmno'));
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
