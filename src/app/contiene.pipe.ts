import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contiene'
})
export class ContienePipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      return data.nombreLibro.toLowerCase().includes(query.toLowerCase());
    });
  }

}
