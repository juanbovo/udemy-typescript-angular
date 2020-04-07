import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../models/clientes';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  clientes:Array<Clientes> = new Array<Clientes>()

  constructor(public clientesServicio:ClientesService, public pedidosServicio:PedidosService, public route:Router) { }

  ngOnInit(): void {
    this.clientes = this.clientesServicio.clientesLocalStorage
  }

  buscarCliente(event){

    let parametros = event.target.value

    this.clientes = this.clientesServicio.clientesLocalStorage.filter( cliente => {
      return cliente.apellido.toLowerCase().includes(parametros.toLowerCase())
    })

  }

  irAProductos(cliente:Clientes){
    this.pedidosServicio.pedido.clienteID = cliente.clienteID
    this.pedidosServicio.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellido}`
    this.pedidosServicio.guardarEnLocalStorage()
    this.route.navigateByUrl("/productos")
  }

}
