interface Usuario {
    nombre:string,
    apellido:string
}

var mollejas: Array<Usuario> = [
    {
        nombre: 'Ana Cielo',
        apellido: 'Sciacia'
    },
    {
        nombre: 'Andrea',
        apellido: 'Molina'
    },
    {
        nombre: 'Flor',
        apellido: 'López'
    },
    {
        nombre: 'Nadu',
        apellido: 'Pedraza'
    }
]

for(let posicion in mollejas){
    console.log(mollejas[posicion].nombre)
    console.log(mollejas[posicion].apellido)
}