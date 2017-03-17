/**
 * Created by andresrojas on 3/17/17.
 */
function celebrityIDCreator(theCelebrities) {
  var i;
  var uniqueID = 100;

  for(i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]['id'] = function () {
      return uniqueID + i;
    }
  }

  return theCelebrities;
}

var actionCelebs = [{name: 'Stallone', id : 0}, {name: 'Cruise', id : 0}, {name: 'Willis', id : 0}];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);

var stalloneId = createIdForActionCelebs[0];
console.log(stalloneId.id());


































/**
 * IIFE: Inmediately Invoked Function Expression
 */
/**function celebrityIDCreatorFixed(theCelebrities) {
  var i;
  var uniqueID = 100;

  for(i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]['id'] = function (j) {
      return function () {
        return uniqueID + j;
      } ();
    } (i);
  }

  return theCelebrities;
}

var actionCelebs = [{name: 'Stallone', id : 0}, {name: 'Cruise', id : 0}, {name: 'Willis', id : 0}];

var createIdForActionCelebs = celebrityIDCreatorFixed(actionCelebs);

var stalloneId = createIdForActionCelebs[0];
console.log(stalloneId.id);**/
