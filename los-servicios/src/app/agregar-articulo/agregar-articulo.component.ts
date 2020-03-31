import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from '../models/articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.sass']
})
export class AgregarArticuloComponent implements OnInit {

  usuariosFromApi:Array<User> = new Array<User>()

  formularioArticulo: FormGroup

  articulo: Articulo = new Articulo()

  esNuevo:Boolean = true

  titulo:string=''

  constructor(private articuloInyectado:ArticulosService, private fbGenerator:FormBuilder, private RutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.esNuevo = JSON.parse(this.RutaActiva.snapshot.params.esNuevo)

    this.titulo = this.esNuevo ? 'Agregar' : 'Editar'

    this.formularioArticulo = this.fbGenerator.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    })

    if(!this.esNuevo){
      this.articulo = this.articuloInyectado.articulo
      this.formularioArticulo.setValue({
        title: this.articulo.title,
        body: this.articulo.body,
        userId: this.articulo.userId
      })
    }

    this.articuloInyectado.leerTodosLosUsuarios().subscribe((usuariosRecibidos) => {
      this.usuariosFromApi = usuariosRecibidos
    })
  }

  agregar(){
    this.articulo = this.formularioArticulo.value as Articulo
    this.articuloInyectado.guardarArticulo(this.articulo).subscribe((ArticuloRecibido)=>{
      console.log('Artículo subido.')
      console.log(ArticuloRecibido)
      this.formularioArticulo.reset()
    })
  }

  editar(){
    //this.articulo = this.formularioArticulo.value as Articulo //--> Cant perform operation correctly because it loses article.id on the way

    this.articulo.userId = this.formularioArticulo.value.userId
    this.articulo.title = this.formularioArticulo.value.title
    this.articulo.body = this.formularioArticulo.value.body

    this.articuloInyectado.actualizarArticulo(this.articulo).subscribe((articuloRecibido) => {
      console.log(articuloRecibido)
      console.log('Editado!')
    })
  }

}
