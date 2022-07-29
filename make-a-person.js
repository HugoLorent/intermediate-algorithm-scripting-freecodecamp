const Person = function (firstAndLast) {
  this.getFullName = () => {
    return firstAndLast;
  };
  this.getFirstName = () => {
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = () => {
    return firstAndLast.split(' ')[1];
  };
  this.setFullName = (newFirstAndLast) => {
    firstAndLast = newFirstAndLast;
  };
  this.setFirstName = (first) => {
    let firstAndLastArray = firstAndLast.split(' ');
    firstAndLastArray[0] = first;
    firstAndLast = firstAndLastArray.join(' ');
  };
  this.setLastName = (last) => {
    let firstAndLastArray = firstAndLast.split(' ');
    firstAndLastArray[1] = last;
    firstAndLast = firstAndLastArray.join(' ');
  };
};

const bob = new Person('Bob Ross');

console.log(bob instanceof Person);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFirstName('Haskell');
console.log(bob.getFullName());

bob.setFullName('Haskell Curry');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
