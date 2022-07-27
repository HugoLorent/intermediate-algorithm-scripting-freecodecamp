function pairElement(str) {
  const finalArray = [];
  const strArray = str.split('');
  let arrToPush = [];

  strArray.forEach((char) => {
    arrToPush.push(char);
    switch (char) {
      case 'A':
        arrToPush.push('T');
        break;
      case 'T':
        arrToPush.push('A');
        break;
      case 'G':
        arrToPush.push('C');
        break;
      case 'C':
        arrToPush.push('G');
        break;
      default:
        break;
    }
    finalArray.push(arrToPush);
    arrToPush = [];
  });
  return finalArray;
}

console.log(pairElement('ATCGA'));
console.log(pairElement('TTGAG'));
console.log(pairElement('CTCTA'));
