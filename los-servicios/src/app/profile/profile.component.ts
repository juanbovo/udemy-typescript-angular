import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(public UsuarioInyectado:UsuarioService) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.UsuarioInyectado.usuario.nombre = "María"
  }

}
