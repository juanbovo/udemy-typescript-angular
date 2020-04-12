import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.sass']
})
export class AgregarClienteComponent implements OnInit {

  formularioCliente:FormGroup
  porcentajeSubida:number = 0
  urlImagen:string = ''

  constructor(private fb:FormBuilder, private storage: AngularFireStorage, private afs: AngularFirestore) { }

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
  }

  agregar(){
    this.formularioCliente.value.imgUrl = this.urlImagen
    this.formularioCliente.value.fechaNacimiento = new Date(this.formularioCliente.value.fechaNacimiento)

    this.afs.collection('clientes').add(this.formularioCliente.value).then(data => {
      console.log('registro creado')
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
