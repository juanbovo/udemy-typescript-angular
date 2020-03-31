import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario {
  nombre:string
  correo:string
  password:string
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent implements OnInit {
  
  formularioCreado:FormGroup

  esNuevo:boolean = true

  usuarios:Array<Usuario> = new Array<Usuario>()

  posicionEditar:number = -1 //global variable to access usuarios' user position to edit its properties. Default to -1.

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario()
  }

  crearFormulario(){
    this.formularioCreado = this.formBuilder.group({
      nombre: ['Carmen', Validators.required],
      correo: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]
    })
  }

  agregar(){
    this.usuarios.push(this.formularioCreado.value as Usuario)
    // console.log(this.formularioCreado.value)
    // console.log(this.usuarios)
    this.formularioCreado.reset()
  }

  editarUsuario(posicion:number){
    //With the following 3 lines we could access to this user's position on usuarios array and change its values (commented out)
    // this.usuarios[posicion].nombre = 'Nombre'
    // this.usuarios[posicion].correo = 'correo@pedo.com'
    // this.usuarios[posicion].password = 'password'

    //So, we use setValue is used to change input ON THE FORM and assign them current user's values (usuarios[posicion])...
    this.formularioCreado.setValue({
      nombre: this.usuarios[posicion].nombre,
      correo: this.usuarios[posicion].correo,
      password: this.usuarios[posicion].password
    })

    //... save user's position through a same scoped variable...
    this.posicionEditar = posicion
    //... and them show Editar button and hide Agregar button.
    this.esNuevo = false
  }

  editar(){
    //this function changes user's properties for those placed on the form
    this.usuarios[this.posicionEditar].nombre = this.formularioCreado.value.nombre
    this.usuarios[this.posicionEditar].correo = this.formularioCreado.value.correo
    this.usuarios[this.posicionEditar].password = this.formularioCreado.value.password

    //... then reset the form...
    this.formularioCreado.reset()
    //... then safely set edit index to -1...
    this.posicionEditar = -1
    //... and make proper button appears and hide Editar button.
    this.esNuevo = true

    console.log(this.usuarios)
  }

  eliminarUsuario(posicion:number){
    this.usuarios.splice(posicion, 1)
    console.log(this.usuarios)
  }

}
