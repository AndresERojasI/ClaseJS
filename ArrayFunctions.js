var datos = [1,2,3,4,5,6,7,8,9];
var datos2 = [];

for(let i = 0; i < datos.length; i++){
  datos2.push(datos[i] + 1);
}

if(1 < 2){
  let a = 3;
  console.log(a);
}
//console.log(a);

/**
var sumarUno = function(item, index){
  return item + 1;
};

// .map(callaback)
var datos2 = datos.map(sumarUno);

//console.log(datos2);

//
var datos3 = datos.reduce(function(acumulador, numero){
  return acumulador + numero;
});

var textos = ['Hola','mundo', 'cruel'];
var datos4 = textos.reduce(function(acumulador, texto){
  "use strict";
  return acumulador + ' ' + texto;
});

//console.log(datos4);
var datos5 = [1,2,3,14,5,11,7,8,9];
var datos6 = datos5.reduce(function(mayor, numero){
  return mayor < numero ? numero : mayor;
});


var datos7 = datos5.filter(function (item) {
  return (item % 2) === 0;
});

//console.log(datos7);

**/
