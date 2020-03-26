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

console.log(mollejas)

for (let item of mollejas){
    console.log(item.apellido)
}