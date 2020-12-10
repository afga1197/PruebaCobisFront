import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contieneFecha'
})
export class ContieneFechaPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      return data.fecha.toLowerCase().includes(query.toLowerCase());
    });
  }

}
