import { PedidoDetalle } from './pedido-detalle'

export class Pedido {
    cliente:string
    direccion:string
    pedidoDetalle: Array<PedidoDetalle>

    constructor(){
        this.cliente = this.cliente
        this.direccion = this.direccion
        this.pedidoDetalle = new Array<PedidoDetalle>()
    }
}