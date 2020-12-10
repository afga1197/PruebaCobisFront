import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'igualNumEjemplares'
})
export class IgualNumEjemplaresPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      console.log(data);
      return data.numEjemplares.toLowerCase()===(query.toLowerCase());
    });
  }

}
