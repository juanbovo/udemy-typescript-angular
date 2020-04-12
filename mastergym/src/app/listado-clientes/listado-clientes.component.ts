import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.sass']
})
export class ListadoClientesComponent implements OnInit {

  clientes:any[] = new Array<any>()

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    // this.db.collection('clientes').valueChanges().subscribe((resultado) => { //--> Using this subscription is not possible to access document ID on db.
    //   this.clientes = resultado
    // })

    this.clientes.length = 0 //--> this sets clientes property to 0.
    this.db.collection('clientes').get().subscribe((resultado) => {

      resultado.docs.forEach((item) =>{
        
        let cliente = item.data()
        cliente.id = item.id
        cliente.ref = item.ref
        this.clientes.push(cliente)

      })

    })
  }

}
