import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
  // Bei jeder Änderung der Daten wird die Pipe neu brerechnet. Sollte man nicht unüberlegt nutzen, da es Rechenleistung kostet.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string ): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
