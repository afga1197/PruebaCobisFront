import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contieneDescripcion'
})
export class ContieneDescripcionPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      return data.descripcionLibro.toLowerCase().includes(query.toLowerCase());
    });
  }

}
