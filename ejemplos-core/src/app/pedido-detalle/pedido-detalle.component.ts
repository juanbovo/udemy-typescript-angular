import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoDetalle } from '../models/pedido-detalle';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.sass']
})
export class PedidoDetalleComponent implements OnInit {

  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>()
  @Output() productoEliminado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit, beibeee!')
  }

  eliminar(posicion:number){
    console.log(posicion)
    this.productoEliminado.emit({ id: posicion })
  }

  ngOnChanges(){
    console.log('ngOnChanges FTW!')
  }

}
