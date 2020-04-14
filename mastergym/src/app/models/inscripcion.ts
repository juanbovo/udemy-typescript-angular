import { DocumentReference } from '@angular/fire/firestore/interfaces'

export class Inscripcion {
    fecha: Date
    fechaFinal: Date
    cliente: DocumentReference
    precios: DocumentReference
    subTotal: number
    iva:number
    total:number

    constructor(){
        
    }
}