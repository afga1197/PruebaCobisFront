import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'igualNoCosto'
})
export class IgualNoCostoPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      console.log(data);
      return data.costo.toLowerCase()!==(query.toLowerCase());
    });
  }

}
