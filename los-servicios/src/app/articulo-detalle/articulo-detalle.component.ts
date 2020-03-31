import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.sass']
})
export class ArticuloDetalleComponent implements OnInit {
  
  articuloDetalle: Articulo = new Articulo()
  usuario:User = new User

  constructor(private ArticuloInyectado:ArticulosService) {
    this.articuloDetalle = this.ArticuloInyectado.articulo
  }

  ngOnInit(): void {
    this.ArticuloInyectado.leerUsuario(this.articuloDetalle.userId).subscribe((usuarioDesdeApi) => {
      this.usuario = usuarioDesdeApi
    })
  }

}
