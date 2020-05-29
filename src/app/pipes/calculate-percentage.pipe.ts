import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatePercentage'
})
export class CalculatePercentagePipe implements PipeTransform {

  transform(number: number, compare: number): string {
    if(number === 0 && compare === 0) {
      return '50%';
    }
    const percetage = (number / (number + compare))*100
    return `${Math.round(percetage)}%`;
  }
}
