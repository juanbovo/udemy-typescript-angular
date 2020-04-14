import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';
import { Cliente } from '../models/cliente';
import { AngularFirestore } from '@angular/fire/firestore';
import { Precio } from '../models/precio';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.sass']
})
export class InscripcionComponent implements OnInit {

  inscripcion:Inscripcion = new Inscripcion()
  clienteSeleccionado:Cliente = new Cliente()
  precioSeleccionado: Precio = new Precio()
  precios: Precio[] = new Array<Precio>()
  idPrecio: string = 'null' //this property is used to set ngModel value for Precios to null.

  constructor(private afs:AngularFirestore, private msj:MensajesService) { }

  ngOnInit(): void {
    this.afs.collection('precios').get().subscribe(resultado => {
      resultado.docs.forEach(item => {
        let precio = item.data() as Precio
        precio.id = item.id
        precio.ref = item.ref

        this.precios.push(precio)
      })
    })
  }

  asignarCliente(cliente:Cliente){
    this.inscripcion.cliente = cliente.ref
    this.clienteSeleccionado = cliente
  }

  eliminarCliente(){
    this.clienteSeleccionado = new Cliente()
    this.inscripcion.cliente = undefined
  }

  guardarInscripcion(){
    if(this.inscripcion.validar().esValido){
      //Building an object to save the current inscripción
      let inscripcionActual = {
        fecha: this.inscripcion.fecha,
        fechaFinal: this.inscripcion.fechaFinal,
        cliente: this.inscripcion.cliente,
        precios: this.inscripcion.precios,
        subTotal: this.inscripcion.subTotal,
        iva: this.inscripcion.iva,
        total: this.inscripcion.total,
      }

      //calling method to save inscripción on Firebase
      this.afs.collection('inscripciones').add(inscripcionActual)
      .then(resultado => {
        this.inscripcion = new Inscripcion()
        this.clienteSeleccionado = new Cliente()
        this.precioSeleccionado = new Precio()
        this.idPrecio = 'null'
        console.log("%c Guardado", 'background: #222; color: #bada55')
        this.msj.mensajeCorrecto('Inscripción guardada', 'Se ha guardado la nueva inscripción')
      })
    } else {
      console.error(this.inscripcion.validar().mensaje)
      this.msj.mensajeAdvertencia('Cuidado', this.inscripcion.validar().mensaje)
    }
  }

  seleccionarPrecio(id:string){

    if(id != null){ //teacher uses this validation on its version... which it's OK from logic side, but I have also disabled option HTML element with "null" value on inscripcion.component.html
      this.precioSeleccionado = this.precios.find(item => item.id === id)
      this.inscripcion.precios = this.precioSeleccionado.ref
  
      //Setting dates
      this.inscripcion.fecha = new Date()
  
      if(this.precioSeleccionado.tipoDuracion == 1){
        let dias = this.precioSeleccionado.duracion
        let fechaFinalización = new Date(
          this.inscripcion.fecha.getUTCFullYear(),
          this.inscripcion.fecha.getMonth(),
          this.inscripcion.fecha.getDate() + dias
        )
        this.inscripcion.fechaFinal = fechaFinalización
      }
      if(this.precioSeleccionado.tipoDuracion == 2){
        let dias = this.precioSeleccionado.duracion * 7
        let fechaFinalización = new Date(
          this.inscripcion.fecha.getUTCFullYear(),
          this.inscripcion.fecha.getMonth(),
          this.inscripcion.fecha.getDate() + dias
        )
        this.inscripcion.fechaFinal = fechaFinalización
      }
      if(this.precioSeleccionado.tipoDuracion == 3){
        let dias = this.precioSeleccionado.duracion * 15
        let fechaFinalización = new Date(
          this.inscripcion.fecha.getUTCFullYear(),
          this.inscripcion.fecha.getMonth(),
          this.inscripcion.fecha.getDate() + dias
        )
        this.inscripcion.fechaFinal = fechaFinalización
      }
      if(this.precioSeleccionado.tipoDuracion == 4){
        let meses = this.precioSeleccionado.duracion
  
        let fechaFinalización = new Date(
          this.inscripcion.fecha.getUTCFullYear(),
          this.inscripcion.fecha.getMonth() + meses,
          this.inscripcion.fecha.getDate()
        )
        this.inscripcion.fechaFinal = fechaFinalización
      }
      if(this.precioSeleccionado.tipoDuracion == 5){
        let anios = this.precioSeleccionado.duracion
  
        let fechaFinalización = new Date(
          this.inscripcion.fecha.getUTCFullYear() + anios,
          this.inscripcion.fecha.getMonth(),
          this.inscripcion.fecha.getDate()
        )
        this.inscripcion.fechaFinal = fechaFinalización
      }
  
      //setting prices and taxes
      this.inscripcion.subTotal = this.precioSeleccionado.costo
      this.inscripcion.iva = this.inscripcion.subTotal * 0.21
      this.inscripcion.total = this.inscripcion.subTotal + this.inscripcion.iva
    }
  }

}
