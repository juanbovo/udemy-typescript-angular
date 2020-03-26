interface tvHostsCba {
    id:number
    name: string
    surname: string
}

var tvPeople: tvHostsCba[] = []

tvPeople.push({id: 1, name: "Ana María", surname: "Alfaro"}, {id: 2, name: "Lagarto", surname: "Guizzardi"}, {id: 3, name: "Clever", surname: "Abreu"})

tvPeople.forEach( host => console.log(host.name.split('').join('-')))

var theBest = tvPeople.find( host => host.id === 3)

console.log(`El completo number one: ${theBest?.name + ' ' + theBest?.surname}`)