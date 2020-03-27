import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';

interface Productos {
  nombre:string,
  stock: number,
  fabricante: string,
  vencimiento: Date,
  importante: boolean
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.sass']
})
export class DirectivaComponent implements OnInit {

  constructor() { }

  cargando:boolean = true

  nombres:Array<string> = ['Mary', 'Peggy', 'Betty', 'July']

  productos: Array<Productos> = [
    {
      nombre: 'Jamaica',
      stock: 20,
      fabricante: "El Chavo del 8",
      vencimiento: new Date ('01/06/1980'),
      importante: false
    },
    {
      nombre: 'Limón',
      stock: 50,
      fabricante: "El Chavo del 8",
      vencimiento: new Date ('01/06/1980'),
      importante: false
    },
    {
      nombre: 'Tamarindo',
      stock: 33,
      fabricante: "El Chavo del 8",
      vencimiento: new Date ('01/06/1980'),
      importante: true
    }
  ]

  pestana:string = ''

  estiloBool:boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false
    }, 3000)
  }

  cambiarTab(tab:string){
    this.pestana = tab
  }

  cambiarEstilo(){
    this.estiloBool = !this.estiloBool
  }

}
