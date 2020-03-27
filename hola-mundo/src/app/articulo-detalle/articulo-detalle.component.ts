import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.sass']
})
export class ArticuloDetalleComponent implements OnInit {

  articulo:Articulo

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.articulo = JSON.parse( this.ruta.snapshot.params.articulo)
  }

}
