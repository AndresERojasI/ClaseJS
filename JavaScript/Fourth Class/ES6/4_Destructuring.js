var data = ['Test', 1, true];

var [a,b,c] = data;

console.log(a);
console.log(b);
console.log(c);

let newData = {
  prop1: 'Hello',
  prop2: 'world',
  prop3: () => {
    "use strict";
    return true;
  }
};

const {prop1,prop3} = newData;

console.log(prop1);
console.log(prop2);
console.log(prop3);