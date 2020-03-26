var anaMariaYLaGente:string[] = ["Ana", "María", "yla-gen-te!"]

console.log(anaMariaYLaGente)

anaMariaYLaGente.forEach((elem) => console.log(elem.toUpperCase()))

interface tvHostsCba {
    name: string
    surname: string
}

var tvPeople: tvHostsCba[] = []

tvPeople.push({name: "Ana María", surname: "Alfaro"}, {name: "Lagarto", surname: "Guizzardi"}, {name: "Clever", surname: "Abreu"})

tvPeople.forEach( host => console.log(host.name.split('').join('-')))