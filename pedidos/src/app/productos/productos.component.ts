import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../models/productos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {

  productos:Array<Productos> = new Array<Productos>()

  constructor(public productosServicio:ProductosService, public pedidosServicio:PedidosService) { }

  ngOnInit(): void {
    this.productos = this.productosServicio.productosLocalStorage
  }

  buscarProducto(productoABuscar){
    this.productos = this.productosServicio.productosLocalStorage.filter( producto => {
      return producto.nombre.toLowerCase().includes(productoABuscar.toLowerCase())
    })
  }

  agregar(producto:Productos){
    this.pedidosServicio.pedido.agregarProductoAlPedido(producto)
    this.pedidosServicio.guardarEnLocalStorage()
    console.log(this.pedidosServicio.pedido)
  }

}
