import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.sass']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>()

  constructor(private ruta:Router) { }

  ngOnInit(): void {
    this.articulos.push(
      {
        nombre: 'TV 24 pulgadas',
        descripcion: 'Marca Dell, IPS, modelo 2017, con garantía',
        precio: 100,
        stock: 10,
        precioMayorista: 80
      },
      {
        nombre: 'PC sobremesa',
        descripcion: 'i7, 16 GB RAM, Nvidia G-Force 920',
        precio: 1000,
        stock: 5,
        precioMayorista: 800
      },
      {
        nombre: 'Macbook Pro 2019',
        descripcion: '2019, 13 pulgadas, touchbar',
        precio: 1500,
        stock: 100,
        precioMayorista: 1300
      }
    )
  }

  pasarParametros(item:Articulo){
    this.ruta.navigate(['articulo-detalle', {articulo: JSON.stringify(item)}])
  }

}
