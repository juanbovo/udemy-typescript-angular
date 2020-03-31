import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { UsuarioService } from '../services/usuario.service';
import { ArticulosService } from '../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  articulos:Array<Articulo> = new Array<Articulo>()

  constructor(private UsuarioInyectado:UsuarioService, private ArticuloInyectado:ArticulosService, private Ruta:Router) { }

  ngOnInit(): void {
    this.ArticuloInyectado.leerNoticias().subscribe((articulosDesdeAPI) => {
      this.articulos = articulosDesdeAPI
    })

    let articuloEnviar:Articulo = new Articulo()
    articuloEnviar.body = "Este es el body del articulo"
    articuloEnviar.title = "Titulo del articulo"
    articuloEnviar.userId = 4


    this.ArticuloInyectado.guardarArticulo(articuloEnviar).subscribe((articuloCreado) => {
      this.articulos.push(articuloCreado)
    })
  }

  irAlDetalle(articulo:Articulo){
    this.ArticuloInyectado.articulo = articulo
    this.Ruta.navigateByUrl('articulo-detalle')
  }

  borrar(id:number){
    this.ArticuloInyectado.borrarArticulo(id).subscribe((data)=>{
      console.log(data)
      console.log('Borrao!')
    })
  }

  actualizar(articulo:Articulo){
    this.ArticuloInyectado.articulo = articulo

    this.Ruta.navigateByUrl('agregar-articulo/false')
  }

}
