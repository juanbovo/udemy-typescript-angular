var cantidadDeNumerosEnviados: number = 15

switch(cantidadDeNumerosEnviados){
    case 25: {
        console.log('Son 20 y 5')
        break
    }
    case 20: {
        console.log('Veinte son!')
        break
    }
    case (10+5): {
        console.log('Sono quindici')
        break
    }
    default:{
        console.log('Ninguna se cumplió')
    }
}

//---------

enum tipoMenu {
    canciones = 1,
    albumes, //no hace falta colocar el 2, TypeScript lo pone solo. Ver cómo opera en el siguiente switch!
    perfil
}

var menu: number = 2

switch(menu){
    case tipoMenu.canciones: {
        console.log('Accede a las canciones')
        break
    }
    case tipoMenu.albumes: {
        console.log('Accede a los albumes')
        break
    }
    case tipoMenu.perfil: {
        console.log('Accede al perfil')
        break
    }
    default: {
        console.log('El menú no existe')
    }
}