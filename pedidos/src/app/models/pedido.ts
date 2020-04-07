import { PedidoDetalle } from './pedido-detalle'
import { Productos } from './productos'

export class Pedido {
    pedidoID:number
    clienteID:number
    nombreCliente:string
    total:number
    pedidoDetalle:Array<PedidoDetalle>

    constructor(datos? : Pedido){

        if(datos != null){
            this.pedidoID = datos.pedidoID
            this.clienteID = datos.clienteID
            this.nombreCliente = datos.nombreCliente
            this.total = datos.total
            this.pedidoDetalle = datos.pedidoDetalle
            return
        }
        this.pedidoID = this.pedidoID
        this.clienteID = this.clienteID
        this.nombreCliente = this.nombreCliente
        this.total = this.total
        this.pedidoDetalle = new Array<PedidoDetalle>()
    }

    agregarProductoAlPedido(producto:Productos){

        let pedidoDetalle:PedidoDetalle = new PedidoDetalle()
    
        pedidoDetalle.cantidad = 1
        pedidoDetalle.nombreProducto = producto.nombre
        pedidoDetalle.precio = producto.precio
        pedidoDetalle.productID = producto.productoID
        pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio

        let existe:number = this.pedidoDetalle.filter( productoEnPedido => productoEnPedido.productID == producto.productoID).length

        if(existe > 0){
            let position = this.pedidoDetalle.findIndex( productoEnPedido => productoEnPedido.productID == producto.productoID)
            this.pedidoDetalle[position].cantidad++
            this.pedidoDetalle[position].total = this.pedidoDetalle[position].cantidad * this.pedidoDetalle[position].precio
        } else {
            this.pedidoDetalle.push(pedidoDetalle)
        }

        this.actualizarTotal()
    }

    private actualizarTotal(){
        this.total = 0

        this.pedidoDetalle.forEach(productoEnPedido => {
            this.total = this.total + productoEnPedido.total
        })
    }

    public actualizarCantidades(posicion:number){
        let estePedido = this.pedidoDetalle[posicion]
        estePedido.total = estePedido.cantidad * estePedido.precio
        this.actualizarTotal()
    }
}