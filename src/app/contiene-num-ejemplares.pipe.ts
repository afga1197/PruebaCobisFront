import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contieneNumEjemplares'
})
export class ContieneNumEjemplaresPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      return data.numEjemplares.includes(query);
    });
  }
}
