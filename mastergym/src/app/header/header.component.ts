import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth, User } from 'firebase/app'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  usuario: User

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
    // this.auth.user.subscribe( usuario => {
    //   this.usuario = usuario
    // })
  }

  logout() {
    this.auth.signOut();
  }

}
