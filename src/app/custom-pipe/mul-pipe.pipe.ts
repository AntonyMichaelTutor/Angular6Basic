import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mulPipe'
})
export class MulPipePipe implements PipeTransform {

  transform(value1: number, value2: number): any {
    return value1*value2;
  }

}
