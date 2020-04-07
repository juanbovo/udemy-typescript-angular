import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../models/productos';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.sass']
})
export class AgregarProductosComponent implements OnInit {

  formularioAgregarProducto:FormGroup
  //producto:Productos = new Productos() //--> This is the way we use in agregar-cliente, but now we don't need it. Check "agregar()".

  constructor(private fb:FormBuilder, public productosServicio:ProductosService) { }

  ngOnInit(): void {
    this.formularioAgregarProducto = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

  agregar(){
    //this.producto = this.formularioAgregarProducto.value //--> this has been simplified, we just send the value directly.
    this.productosServicio.agregarProductoLocalStorage(this.formularioAgregarProducto.value)
    this.formularioAgregarProducto.reset()
  }

}
