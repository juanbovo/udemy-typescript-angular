"use strict";
var listadoDeNombres = ['María', 'Carmen', 'Sofía', 'Nina'];
for (var i = 0; i < listadoDeNombres.length; i++) {
    console.log(`Debe repetirse ${i + 1} ${i === 0 ? 'vez' : 'veces'}.`);
    console.log(`El nombre actual en la lista es ${listadoDeNombres[i]}`);
}
