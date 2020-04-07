import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public UsuarioInyectado:UsuarioService) { }

  ngOnInit(): void {
    console.log(this.UsuarioInyectado.usuario.nombre)
    this.UsuarioInyectado.usuario.nombre
  }

}
