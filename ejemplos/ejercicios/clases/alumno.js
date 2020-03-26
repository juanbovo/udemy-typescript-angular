"use strict";
class Alumnos {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    mostrarMensaje() {
        console.log('Hola,', this.edad);
    }
    asignar(nombreFromParameter, apellidoFromParameter, edadFromParameter) {
        this.nombre = nombreFromParameter;
        this.apellido = apellidoFromParameter;
        this.edad = edadFromParameter;
    }
}
//-------
var juan = new Alumnos('Pedro', 'Terrenal', 20);
// juan.asignar('Pedro', 'Terrenal', 20)
juan.mostrarMensaje();
var maria = new Alumnos('María', 'Bethania', 18);
// maria.asignar('María', 'Bethania', 18)
maria.mostrarMensaje();
