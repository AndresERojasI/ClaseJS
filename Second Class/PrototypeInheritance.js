/**
 * Created by andresrojas on 3/10/17.
 */

'use strict';

function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

// Add the showNameAndColor to the plant prototype property
Plant.prototype.showNameAndColor = function (){
  console.log('I am a ' + this.name + ' and my color is ' + this.color);
};

function Fruit(fruitName, fruitColor){
  this.name = fruitName;
  this.color = fruitColor;
}

// Inherit everything from the Plant!!!
Fruit.prototype = new Plant();
Fruit.prototype.showNameAndColor = function() {
  console.log('No es la de planta');
};

var banana = new Fruit('banana', 'yellow');
console.log(banana.name);
banana.showNameAndColor();

