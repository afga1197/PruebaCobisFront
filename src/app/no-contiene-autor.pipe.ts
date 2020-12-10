import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noContieneAutor'
})
export class NoContieneAutorPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    if(query === null || query=== undefined || query === ''){
      return value;
    }
    return value.filter(data => {
      return !data.autor.toLowerCase().includes(query.toLowerCase());
    });
  }

}
