import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP'
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value:number, rate:number=25): number {
    return value * rate;
  }

}
