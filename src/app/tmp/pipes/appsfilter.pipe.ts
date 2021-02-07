import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appsfilter'
})
export class AppsfilterPipe implements PipeTransform {

  transform(value: any[], args: string): unknown {
    if(!value || !args){
      return value
    }
    return value.filter(item => item.name.indexOf(args) !== -1);
  }

}
