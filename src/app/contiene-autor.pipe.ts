import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contieneAutor'
})
export class ContieneAutorPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      return data.autor.toLowerCase().includes(query.toLowerCase());
    });
  }
}
