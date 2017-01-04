import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({name: 'appIsoToFromNow'})
export class IsoToFromNowPipe implements PipeTransform {
  transform(value:string, args:string[]) : any {
    // TODO setting locale does not work somehow
    return moment(value).locale('nl').fromNow();
  }
}