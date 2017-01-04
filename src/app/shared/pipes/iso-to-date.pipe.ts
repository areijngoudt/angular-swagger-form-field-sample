import { Pipe, PipeTransform } from '@angular/core';

// https://en.wikipedia.org/wiki/ISO_8601
// Example
//    Usage: {{ dateValue | appIsoToDate | date:'MM/dd/yyyy' }}
//    Data: 2014-01-05T18:14:18.32
//    Result: 01/05/2014
@Pipe({name: 'appIsoToDate'})
export class IsoToDatePipe implements PipeTransform {
  transform(value:string, args:string[]) : any {
    return new Date(value);
  }
}