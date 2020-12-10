import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'igualNoDescripcion'
})
export class IgualNoDescripcionPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      console.log(data);
      return data.descripcionLibro.toLowerCase()!==(query.toLowerCase());
    });
  }

}
