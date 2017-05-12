/**
 * Created by andresrojas on 3/10/17.
 */

'use strict';

function Fruit(shape){
  this.shape = shape;
}

Fruit.prototype.color = "red";
Fruit.prototype.name = "apple";
Fruit.prototype.sweetness = 7;
Fruit.prototype.test = function(){

};

//console.log(Fruit);
//console.log(Fruit.prototype.color);


var mango = new Fruit('heart');
mango.color = "yellow";
mango.name = "mango";
mango.sweetness = 9;


// hasOwnProperty
//console.log(mango.hasOwnProperty('shape'));
//console.log(mango.hasOwnProperty('not_a_property'));


// For in
/**for (var property in mango){
  console.log('The property is', property, 'and the value is', mango[property]);
}

// Serialization and Deserialization of objects
  console.log(mango);

console.log(serializedMango);
console.log(JSON.parse(serializedMango));
 **/
var serializedMango = JSON.stringify(mango);
// typeof
console.log(typeof mango);
console.log(typeof serializedMango);
console.log(typeof JSON.parse(serializedMango));
