import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router'
// import Swal from 'sweetalert2'
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.sass']
})
export class AgregarClienteComponent implements OnInit {

  formularioCliente:FormGroup
  porcentajeSubida:number = 0
  urlImagen:string = ''
  esEditable:boolean = false
  id:string

  constructor(
    private fb:FormBuilder,
    private storage: AngularFireStorage,
    private afs: AngularFirestore, //tutorial teacher uses "db". I keep "afs" as AngularFire's docs sugest.
    private activatedRoute:ActivatedRoute,
    private msj:MensajesService) { }

  ngOnInit(): void {

    this.formularioCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      dni: [''],
      fechaNacimiento: ['', Validators.required],
      telefono: [''],
      imgUrl: ['', Validators.required]
    })
    
    this.id = this.activatedRoute.snapshot.params.clienteID
    if(this.id != undefined){

      this.esEditable = true

      this.afs.doc<any>('clientes/' + this.id).valueChanges().subscribe( cliente => {
        //console.log(cliente)
        
        this.formularioCliente.setValue({
          nombre: cliente.nombre,
          apellido: cliente.apellido,
          correo: cliente.correo,
          dni: cliente.dni,
          fechaNacimiento: new Date(cliente.fechaNacimiento.seconds * 1000).toISOString().substr(0, 10),
          telefono: cliente.telefono,
          imgUrl: ''
        })
  
        this.urlImagen = cliente.imgUrl
  
      })

    }

  }

  agregar(){
    this.formularioCliente.value.imgUrl = this.urlImagen
    this.formularioCliente.value.fechaNacimiento = new Date(this.formularioCliente.value.fechaNacimiento)

    this.afs.collection('clientes').add(this.formularioCliente.value).then(data => {
      console.log('registro creado')
      this.msj.mensajeCorrecto('Vamoo!', 'Nuevo usuario agregado.')
    })
  }

  editar(){
    this.formularioCliente.value.imgUrl = this.urlImagen
    this.formularioCliente.value.fechaNacimiento = new Date(this.formularioCliente.value.fechaNacimiento)
    
    this.afs.doc('clientes/' + this.id).update(this.formularioCliente.value)
    .then(() => {
      console.log('Se ha editado correctamente.')
      this.msj.mensajeAdvertencia('Editado!', 'Usuario editado correctamente')
    })
    .catch(() => {
      console.log('Hubo un error')
      this.msj.mensajeError('Hasta las bolas', 'Hubo algún error')
    })
  }

  subirImagen(event){

    if(event.target.files.length > 0){
      
      let file = event.target.files[0] //catch the image
      
      let fileName = new Date().getTime().toString()
      let fileExtension = file.name.toString().substring(file.name.toString().lastIndexOf('.'))
      
      let filePath = `clientes/${fileName + fileExtension}` // set file path
      const ref = this.storage.ref(filePath) // reference to filePath on injected storage (see constructor)
      const task = ref.put(file) // OK, upload. :)
      
      task.percentageChanges().subscribe(percentage => this.porcentajeSubida = parseInt(percentage.toString())) //getting upload percentage from Observable and updating property, which is bound to progressbar element.
      task.then((data) => {
        ref.getDownloadURL().subscribe(url => {
          this.urlImagen = url
        })
      })

    }

  }

}
