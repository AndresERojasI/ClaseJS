'use strict';

var Gato = function(nombre){
	this.nombre = nombre;
	this.color;
	this.patas;

	this.maullar = function(){
		console.log('Miau Miau');
	};
};

var felix = new Gato('Felix');

felix.raza = "siames";

console.log(felix);
console.log(felix.maullar());