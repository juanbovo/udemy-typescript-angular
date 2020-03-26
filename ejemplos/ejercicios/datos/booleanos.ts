var esNuevo:boolean = false
var deseaImprimir:boolean = true
var aceptaDescuentos:boolean = (15 + 18 === 33)

var juan:string = "juan"
var juan2:string = "Juan"
var sonNombresIguales:boolean = juan === juan2

console.log("Este booleano es: " +  aceptaDescuentos)
console.log("¿Son nombres iguales? " + sonNombresIguales)

var sonAmbosVerdaderos:boolean = aceptaDescuentos && sonNombresIguales
var algunoEsVerdadero:boolean = aceptaDescuentos || sonNombresIguales
var sonDistintas:boolean = aceptaDescuentos !== sonNombresIguales

console.log('¿Son ambos verdaderos? ' + sonAmbosVerdaderos)
console.log('¿Alguno es verdadero?', algunoEsVerdadero)
console.log('¿Son Distintos?', sonDistintas)