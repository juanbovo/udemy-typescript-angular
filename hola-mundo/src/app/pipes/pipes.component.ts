import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {

  titulo:string = "Hola, soy el título de pipes"
  dinero:number = 48151623
  ganancias:number = 0.54
  nacimiento:Date = new Date('10-22-1982')
  textolargo:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, obcaecati architecto. Quos consequuntur, harum, odit molestias enim placeat, consequatur mollitia qui repudiandae odio minus quae velit laborum quisquam facilis ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, magni? Magni quia fugiat ab delectus, nobis, tempora natus autem vitae illum esse labore nihil voluptates error eaque, alias facere unde!"

  constructor() { }

  ngOnInit(): void {
  }

}
