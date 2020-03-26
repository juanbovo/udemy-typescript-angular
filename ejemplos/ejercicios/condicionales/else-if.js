"use strict";
var cantidadPedida = 20;
if (cantidadPedida > 15) {
    console.log('aplicar descuento grande');
}
else if (cantidadPedida >= 10 && cantidadPedida <= 15) {
    console.log('aplicar descuento normal');
}
else {
    console.log('No aplicar descuento');
}
