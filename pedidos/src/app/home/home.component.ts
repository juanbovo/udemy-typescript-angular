import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../models/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  clientes:Array<Clientes> = new Array<Clientes>()

  constructor(public clientesServicio:ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesServicio.clientesLocalStorage
  }

  buscarCliente(event){

    let parametros = event.target.value

    this.clientes = this.clientesServicio.clientesLocalStorage.filter( cliente => {
      return cliente.apellido.toLowerCase().includes(parametros.toLowerCase())
    })

  }

}
