import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noContieneCosto'
})
export class NoContieneCostoPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      return !data.costo.includes(query);
    });
  }

}
