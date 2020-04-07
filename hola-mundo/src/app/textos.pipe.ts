import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textos'
})
export class TextosPipe implements PipeTransform {

  transform(value:string): string {
    if(value.toString().length > 140){
      value = `${value.substr(0, 140)}... (cont.)`
    }
    return value
  }

}
