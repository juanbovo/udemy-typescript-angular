var tvPeople = [];
tvPeople.push({ id: 1, name: "Ana María", surname: "Alfaro" }, { id: 2, name: "Lagarto", surname: "Guizzardi" }, { id: 3, name: "Clever", surname: "Abreu" });
tvPeople.forEach(function (host) { return console.log(host.name.split('').join('-')); });
var theBest = tvPeople.find(function (host) { return host.id === 3; });
console.log("El completo number one: " + ((theBest === null || theBest === void 0 ? void 0 : theBest.name) + ' ' + (theBest === null || theBest === void 0 ? void 0 : theBest.surname)));
