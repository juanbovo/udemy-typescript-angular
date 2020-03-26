class Alumnos {
    nombre: string
    apellido: string
    edad: number

    constructor(nombre: string, apellido:string, edad:number){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    mostrarMensaje () : void{
        console.log('Hola,', this.edad)
    }

    asignar(nombreFromParameter:string, apellidoFromParameter:string, edadFromParameter:number){
        this.nombre = nombreFromParameter
        this.apellido = apellidoFromParameter
        this.edad = edadFromParameter
    }
}

//-------

var juan:Alumnos = new Alumnos('Pedro', 'Terrenal', 20)
// juan.asignar('Pedro', 'Terrenal', 20)
juan.mostrarMensaje()

var maria:Alumnos = new Alumnos('María', 'Bethania', 18)
// maria.asignar('María', 'Bethania', 18)
maria.mostrarMensaje()