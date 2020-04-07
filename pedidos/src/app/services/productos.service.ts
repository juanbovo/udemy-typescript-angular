import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  agregarProductoLocalStorage(producto:Productos){
    let productosAntiguos:Productos[] = this.productosLocalStorage

    producto.productoID = productosAntiguos.length + 1
    
    productosAntiguos.push(producto)

    localStorage.setItem('productos', JSON.stringify(productosAntiguos))
  }

  get productosLocalStorage(): Productos[] {
    let productosEnLocalStorage: Productos[] = JSON.parse(localStorage.getItem('productos'))
    
    if (productosEnLocalStorage == null) {
      return new Array<Productos>()
    }
    
    return productosEnLocalStorage
  }
}
