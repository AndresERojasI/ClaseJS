/**
 * Documentation: https://github.com/lukehoban/es6features
 */

/**
function example(param) {
  console.log('Parameter is', param);
}

//example('Hello world');


var example2 = (param) => {
 console.log('The other function prints:', param);
};

//example2('Hello again!');

// Expression Bodies
var numbers = [2,4,1,4,5];
var result = numbers.map(item => item + 1);

console.log('Initial Array:', numbers);
console.log('After map:', result);

var integers = [1,2,3,4,5,6,7,8,9];
var oddNumbers = integers.filter(number => number % 2);

console.log('Initial Array:', integers);
console.log('After map:', oddNumbers);
**/

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [
    'Viviana',
    'Diana',
    'Andrea',
    'Laura'
  ],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};

bob.printFriends();
