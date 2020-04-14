import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from '../services/mensajes.service';
import { Precio } from '../models/precio';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.sass']
})
export class PreciosComponent implements OnInit {

  formularioPrecios:FormGroup
  precios: Precio[] = new Array<Precio>()
  esEditable:boolean = false
  id: string

  constructor(
    private fb:FormBuilder,
    private afs: AngularFirestore,
    private msj: MensajesService) { }

  ngOnInit(): void {
    this.formularioPrecios = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tipoDuracion: ['', Validators.required]
    })

    this.mostrarPrecios()
  }

  mostrarPrecios(){
    this.afs.collection<Precio>('precios').get().subscribe( data => {

      this.precios.length = 0
      
      data.docs.forEach( doc => {
        let precio = doc.data() as Precio

        precio.id = doc.id
        precio.ref = doc.ref
        this.precios.push(precio)
      })
    })
  }

  agregar(){
    console.log(this.formularioPrecios.value)
    this.afs.collection<Precio>('precios').add(this.formularioPrecios.value)
    .then(() => {
      this.msj.mensajeCorrecto('Nuevo precio agregado', 'El nuevo precio se ha agregado correctamente.')
      this.formularioPrecios.reset()
      this.mostrarPrecios()
    })
    .catch(() => {
      this.msj.mensajeError('Hasta las manos', 'Ha ocurrido algún error agregando nuevo precio.')
    })
  }

  editarPrecio(precio:Precio){
    this.esEditable = true
    this.formularioPrecios.setValue({
      nombre: precio.nombre,
      costo: precio.costo,
      duracion: precio.duracion,
      tipoDuracion: precio.tipoDuracion
    })
    this.id = precio.id
  }

  editar(){
    this.afs.doc('precios/' + this.id).update(this.formularioPrecios.value)
    .then(() => {
      this.msj.mensajeCorrecto('Edición correcta', 'El precio se ha editado correctamente.')
      this.formularioPrecios.reset()
      this.esEditable = false
      this.mostrarPrecios()
    })
    .catch(() => {
      this.msj.mensajeError('Uy, uy, uy!', 'Pasó algo y no se pudo editar.')
    })
  }

}
