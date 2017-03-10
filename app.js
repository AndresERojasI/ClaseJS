'use strict';

// Simple Object creation
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
felix.maullar();


// Object constructor
var Perro = new Object();

Perro.patas = 4;
Perro.nombre = "Max";
Perro.ladrar = function(){
  console.log('Wooff Wooff!');
};
Perro.hablar = function(){
  console.log('Hola humanos, soy ' + this.nombre);
};

console.log(Perro);

Perro.hablar();