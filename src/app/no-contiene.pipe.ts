import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noContiene'
})
export class NoContienePipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      console.log(data);
      
      return !data.nombreLibro.toLowerCase().includes(query.toLowerCase());
    });
  }

}
