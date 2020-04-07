import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.sass']
})
export class TituloComponent implements OnInit {
  girlName:string = 'Sofía'
  
  cortejante: any = {
    name: 'Ángel',
    surname: 'Gris'
  }

  imagen:string = 'https://teatroseminari.boleteria.online/images/eventos/11601/bign0000.jpg'
  inputNuevo:string = 'valor predeterminado'
  inputMayusculas:string = '(La traducción aparecerá aquí)'

  email:string = 'email'
  password:string = 'password'


  constructor() { }
  
  ngOnInit(): void {
  }

  login(){
    console.log(`El ${this.cortejante.name} saluda afectuosamente a ${this.email}`)
    console.log(this.password)
  }

  dobleClick(){
    alert("D'oh... ¡te lo dije!")
  }

  mayusculas(){
    this.inputMayusculas = this.inputNuevo.toUpperCase()
  }

  escribir(event){
    let {value} = event.target
    console.log(value)
  }

  cambiar(event){
    let {style} = event.srcElement
    style.backgroundColor = 'lime'
    style.width = '250px'
  }

  print(event){
    console.log(event.key == "Enter" ? '¿Viste que funcionó?' : "Enter te dije, menso.")
  }

  print2(event){
    console.log(event.key == " " ? '¿Viste que funcionó?' : "¡Barrrraaaaa!")
  }

  australia(){
    console.log('¡Australia!')
  }

  usa(){
    console.log('¡USA!')
  }
  
}
