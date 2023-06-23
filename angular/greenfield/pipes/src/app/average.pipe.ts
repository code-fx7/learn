import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(value: Array<number>, round:number = 2): string {
    let total = 0;

    value.forEach(element => {
      total = total + element;
    });
    let average = total / value.length;

    return average.toFixed(round);
  }

}
