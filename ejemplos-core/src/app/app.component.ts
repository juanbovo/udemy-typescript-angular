import { Component, ViewChild, ElementRef } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ejemplos-core';
  
  //ViewChild using ID:
  //Need to know if static, an alias and a type.
  @ViewChild('inputNombre', {static:true}) inputNombre: ElementRef
  
  //ViewChild using component name:
  @ViewChild(HijoComponent, {static:true}) hijo:HijoComponent

  mostrar(){
    //For inputNombre:
    // console.log(this.inputNombre)
    // console.log(this.inputNombre.nativeElement.value)
    // this.inputNombre.nativeElement.style.backgroundColor = "yellow"
    // this.inputNombre.nativeElement.select()

    //For hijo
    this.hijo.titulo = "Modificado desde el padre"
  }
}
