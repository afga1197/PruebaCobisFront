import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noContieneDescripcion'
})
export class NoContieneDescripcionPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      return !data.descripcionLibro.toLowerCase().includes(query.toLowerCase());
    });
  }

}
