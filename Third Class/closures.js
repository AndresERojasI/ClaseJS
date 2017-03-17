/**
 * Created by andresrojas on 3/17/17.
 */

function fullName (first, last) {
  var intro = "Your name is ";

  //This function can access the outer function variables including the params
  function combineName() {
    return intro + first + " " + last;
  }

  return combineName();
}

console.log(fullName('Andres', 'Rojas'));

/**
 * Delayed access to parameters, also can access outer global variables
 */

var backwards = true;
function fullName1 (first, last) {
  var intro = "Your name is ";

  //This function can access the outer function variables including the params
  function combineName() {
    if (backwards) {
      return intro + last + ", " + first;
    } else {
      return intro + first + " " + last;
    }
  }

  return combineName;
}

var testClosure = fullName1('Andres', 'Rojas');
console.log(testClosure());