import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pedido } from '../models/pedido';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.sass']
})
export class PedidoComponent implements OnInit {
  
  pedido:Pedido = new Pedido()

  @ViewChild('buscador', {static: true}) encuentracosas: ElementRef

  constructor() { }

  ngOnInit(): void {
    this.pedido.cliente = 'Rupert Moresculinovicci'
    this.pedido.direccion = 'Av. Padre Gervasio de la Garcha 1288'
  }

  agregarProducto(){
    this.pedido.pedidoDetalle.push({
      cantidad: 20,
      producto: 'Bananas',
      precio: 4,
      total: 80
    })
    Swal.fire({
      title: 'Producto Agregado!',
      icon: 'success',
      text: 'Avanti, machine.'
    })
  }

  eliminarProducto(evento){
    
    
    this.pedido.pedidoDetalle.splice(evento.id, 1)
    Swal.fire({
      title: 'Producto eliminado.',
      icon: 'error',
      text: `Se ha eliminado el producto ${evento.id}`
    })
  }

  ngAfterViewInit(){
    console.log('focus en el encuentracosas :)')
    this.encuentracosas.nativeElement.focus()
  }

}
