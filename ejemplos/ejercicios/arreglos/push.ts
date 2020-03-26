var nombres: string[] = ["Juan", "Pedro", "Fasola"]

console.log(nombres)

nombres.push("Nuestrogranamigo")

console.log(nombres)

//----

var numeros: number[] = [33, 22, 48, 256]

console.log(numeros)

numeros.push(1234)

console.log(numeros)


//--

interface Person {
    name: string
    surname: string
}

var people: Person[] = []

people.push({name:"William", surname: 'Shakespeare'})

console.log(people)

var anne: Person = {name: "Anne", surname:"Hathaway"}

people.push(anne)

console.log(people)