function myReplace(str, before, after) {
  const lowerCaseRegex = /[a-z]/;
  let strArray = str.split(' ');
  const beforeIndex = strArray.findIndex((elem) => elem === before);

  if (lowerCaseRegex.test(before[0])) {
    after = after.replace(after[0], after[0].toLowerCase());
  } else {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  strArray.splice(beforeIndex, 1, after);
  return strArray.join(' ');
}

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));
console.log(myReplace('Let us go to the store', 'store', 'mall'));
