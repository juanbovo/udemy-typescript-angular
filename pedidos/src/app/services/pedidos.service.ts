import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Productos } from '../models/productos';
import { PedidoDetalle } from '../models/pedido-detalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido:Pedido = new Pedido()

  constructor() {
    this.pedido = this.ultimoPedido
  }

  agregarProductoAlPedido(producto:Productos){

    let pedidoDetalle:PedidoDetalle = new PedidoDetalle()

    pedidoDetalle.cantidad = 1
    pedidoDetalle.nombreProducto = producto.nombre
    pedidoDetalle.precio = producto.precio
    pedidoDetalle.productID = producto.productoID
    pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio

    this.pedido.pedidoDetalle.push(pedidoDetalle)
    console.log(this.pedido)
  }

  guardarEnLocalStorage(){
    localStorage.setItem('ultimoPedido', JSON.stringify(this.pedido))
  }

  get ultimoPedido():Pedido {
    let pedidoDeLocalStorage: Pedido = new Pedido(JSON.parse(localStorage.getItem('ultimoPedido')))
    
    if(pedidoDeLocalStorage === null){
      return new Pedido()
    }
    return pedidoDeLocalStorage
  }

  guardarPedido(){
    
    let listadoPedidos:Array<Pedido> = new Array<Pedido>()
    listadoPedidos = this.listadoPedidosLocalStorage

    this.pedido.pedidoID = listadoPedidos.length + 1
    
    listadoPedidos.push(this.pedido)
    localStorage.setItem('pedidos', JSON.stringify(listadoPedidos))

    localStorage.removeItem("ultimoPedido")
    this.pedido = new Pedido(null)
  }

  get listadoPedidosLocalStorage(): Array<Pedido> {
    let pedidos: Pedido[] = JSON.parse(localStorage.getItem('pedidos'))

    if(pedidos === null){
      return new Array<Pedido>()
    }
    return pedidos.sort((a, b)=> b.pedidoID - a.pedidoID)
  }
}
