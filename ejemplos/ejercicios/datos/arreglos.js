"use strict";
var listadoDeNombres = ['Juana', 'María', 'Ana', 'Carmen'];
var listadoDeNumeros = [1, 2, 3, 4, 5];
console.log(listadoDeNombres);
console.log(listadoDeNumeros);
console.log(listadoDeNumeros.reduce((acc, curVal) => acc * curVal));
var listadoDeAlumnos = [
    {
        nombre: 'María',
        edad: 15
    },
    {
        nombre: 'Sofía',
        edad: 17
    },
    {
        nombre: 'Vanesa',
        edad: 18
    }
];
console.log(listadoDeAlumnos);
var laLiga = [
    {
        team: 'Barça',
        points: 58,
        championship: true
    },
    {
        team: 'Real Madrid',
        points: 56,
        championship: false
    },
    {
        team: 'Sevilla',
        points: 47,
        championship: false
    },
    {
        team: 'Real Sociedad',
        points: 46,
        championship: false
    },
    {
        team: 'Getafe',
        points: 46,
        championship: false
    }
];
console.log(laLiga[0]);
