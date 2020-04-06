import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.sass']
})
export class AgregarClientesComponent implements OnInit {

  formularioAgregarClientes: FormGroup
  cliente:Clientes = new Clientes()

  constructor( private fb:FormBuilder, public clientesServicio:ClientesService) { }

  ngOnInit(): void {
    this.formularioAgregarClientes = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  agregar(){
    this.cliente = this.formularioAgregarClientes.value as Clientes
    this.clientesServicio.agregarClienteLocalStorage(this.cliente)
    this.formularioAgregarClientes.reset()
  }

}
