import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public pedidoServicio:PedidosService) { }

  ngOnInit(): void {
    this.pedidoServicio.pedido.nombreCliente
  }

}
