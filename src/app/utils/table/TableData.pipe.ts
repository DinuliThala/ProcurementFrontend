import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'TableData'
})

export class TableDataPipe implements PipeTransform {

  // This pipe class is used to extract the values
  // since arrays of types of different structures is required
  // Refer table component for usage

  // tslint:disable-next-line:typedef
  transform(obj: any) {
    const result = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }
}
