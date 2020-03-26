"use strict";
var cantidadDeNumerosEnviados = 15;
switch (cantidadDeNumerosEnviados) {
    case 25: {
        console.log('Son 20 y 5');
        break;
    }
    case 20: {
        console.log('Veinte son!');
        break;
    }
    case (10 + 5): {
        console.log('Sono quindici');
        break;
    }
    default: {
        console.log('Ninguna se cumplió');
    }
}
//---------
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albumes"] = 2] = "albumes";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
var menu = 2;
switch (menu) {
    case tipoMenu.canciones: {
        console.log('Accede a las canciones');
        break;
    }
    case tipoMenu.albumes: {
        console.log('Accede a los albumes');
        break;
    }
    case tipoMenu.perfil: {
        console.log('Accede al perfil');
        break;
    }
    default: {
        console.log('El menú no existe');
    }
}
