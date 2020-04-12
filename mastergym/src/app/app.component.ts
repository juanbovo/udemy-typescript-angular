import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth, User } from 'firebase/app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'mastergym';
  usuario:User
  cargando:boolean = true

  constructor(public auth: AngularFireAuth) {
    //this.auth.user.subscribe( usuario => console.log(usuario)) // auth is an Observable, so you can subscribe and get info from it.
      this.auth.user.subscribe( usuario => {
        this.usuario = usuario
        this.cargando = false // var used to save loading status after getting a proper user.
      }) // you can also save this user as a class property.
  }

}
