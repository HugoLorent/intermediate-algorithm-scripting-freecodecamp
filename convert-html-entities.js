function convertHTML(str) {
  const strArray = str.split('');
  for (let i = 0; i < strArray.length; i++) {
    switch (strArray[i]) {
      case '&':
        strArray.splice(i, 1, '&amp;');
        break;
      case '<':
        strArray.splice(i, 1, '&lt;');
        break;
      case '>':
        strArray.splice(i, 1, '&gt;');
        break;
      case '"':
        strArray.splice(i, 1, '&quot;');
        break;
      case `'`:
        strArray.splice(i, 1, '&apos;');
        break;
      default:
        break;
    }
  }
  return strArray.join('');
}

console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('Hamburgers < Pizza < Tacos'));
console.log(convertHTML('Sixty > twelve'));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML('<>'));
console.log(convertHTML('abc'));
