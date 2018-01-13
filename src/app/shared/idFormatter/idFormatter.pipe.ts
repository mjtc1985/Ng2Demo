import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'idFormatter'
})
export class IdFormatterPipe implements PipeTransform {
  transform(id: string){
    return 'Cerveza ' + id;
  }
}