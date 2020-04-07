import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.sass']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosServicio:PedidosService) { }

  ngOnInit(): void {
    let pedido:Pedido = new Pedido()
  }

  calcularSubtotal(posicion){
    this.pedidosServicio.pedido.actualizarCantidades(posicion)
    this.pedidosServicio.guardarEnLocalStorage()
  }

  guardar(){
    this.pedidosServicio.guardarPedido()
  }

  eliminar(posicion:number){
    this.pedidosServicio.pedido.pedidoDetalle.splice(posicion, 1)
    this.pedidosServicio.guardarEnLocalStorage()
  }

}
