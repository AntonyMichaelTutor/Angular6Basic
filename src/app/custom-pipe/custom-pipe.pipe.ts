import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class CustomPipePipe implements PipeTransform {

  transform(number1: string, number2: string): number {
    let c:number;
    c = parseInt(number1)+parseInt(number2);
    return c;
  }

}
