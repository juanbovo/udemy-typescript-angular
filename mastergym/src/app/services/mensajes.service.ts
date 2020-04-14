import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mensajeCorrecto(title:string, text:string){
    Swal.fire({
      title: title,
      icon: 'success',
      text: text,
      confirmButtonText: 'Bien ahí!'
    })
  }

  mensajeAdvertencia(title:string, text:string){
    Swal.fire({
      title: title,
      icon: 'info',
      text: text,
      confirmButtonText: 'Tamo, tamo...'
    })
  }

  mensajeError(title:string, text:string){
    Swal.fire({
      title: title,
      icon: 'error',
      text: text,
      confirmButtonText: 'Pero la puta madre'
    })
  }


}
