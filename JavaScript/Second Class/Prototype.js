/**
 * Created by andresrojas on 3/10/17.
 */

'use strict';

/**
 * Every JavaScript object has a prototype. The prototype is also an object.
 * All JavaScript objects inherit their properties and methods from their prototype.
 */
function Fruit(shape){
  this.shape = shape;
}

Fruit.prototype.color = "red";
Fruit.prototype.name = "apple";
Fruit.prototype.sweetness = 7;

//console.log(Fruit);
//console.log(Fruit.prototype.color);


var mango = new Fruit('heart');
mango.color = "yellow";
mango.name = "mango";
mango.sweetness = 9;

console.log(mango);
console.log(mango.color);
console.log(mango['sweetness']);