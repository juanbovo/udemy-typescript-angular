import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styleUrls: ['./seleccionar-cliente.component.sass']
})
export class SeleccionarClienteComponent implements OnInit {

  clientes:Cliente[] = new Array<Cliente>()
  @Input('nombre') nombre:string
  @Output('seleccionoCliente') seleccionoCliente = new EventEmitter()
  @Output('canceloCliente') canceloCliente = new EventEmitter()

  constructor(private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection<any>('clientes').get().subscribe((resultados) => {
      this.clientes.length = 0 
      resultados.docs.forEach((item) => {
        let cliente: any = item.data()
        cliente.id = item.id
        cliente.ref = item.ref
        cliente.visible = false

        this.clientes.push(cliente)
      })

    })
  }

  buscarClientes(searchParams:string){
    console.log(searchParams)

    this.clientes.forEach(cliente=>{
      if(cliente.nombre.toLowerCase().includes(searchParams.toLowerCase())){
        cliente.visible = true
      } else {
        cliente.visible = false
      }
    })
  }

  seleccionarCliente(cliente:Cliente){
    this.nombre = `${cliente.nombre} ${cliente.apellido}`
    //teacher also uses a forEach to hide (cliente.visible = false) remaining clients from list, but I just don't like it :)

    this.seleccionoCliente.emit(cliente)
  }

  cancelarCliente(){
    this.nombre = undefined
    this.canceloCliente.emit()
  }

}
