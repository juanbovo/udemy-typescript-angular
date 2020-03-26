function multiplicar(numero1:number, numero2:number) : number {
    return numero1 * numero2
}

var numeroResultado: number = multiplicar(6, 8)

console.log(numeroResultado)

function calcularPromedio(nota1:number, nota2:number, nota3:number) : number {
    return (nota1 + nota2 + nota3) / 3
}

var promedio:number = calcularPromedio(10, 10, 9)

console.log(promedio.toFixed(2))