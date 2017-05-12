/**
 * Created by andresrojas on 3/10/17.
 */
'use strict';
var a = 1;



// global scope
function one() {
  console.log(a); // alerts '1'
  console.log(b);
}


function two(a) {
  console.log(a); // alerts the given argument, not the global value of '1'
}
//two();// then we add the parameter

// local scope again
function three() {
  var a = 3;
  console.log(a); // alerts '3'
}
//three();

function four() {
  if (a == 1) {
    console.log('Yes!')
    var a = 4;
  }

  console.log(a); // alerts '4', not the global value of '1'
}
//four();
var b = 2;
one();