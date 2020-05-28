import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatePercentage'
})
export class CalculatePercentagePipe implements PipeTransform {

  transform(number: number, compare: number): string {
    const percetage = (number / (number + compare))*100
    return `${Math.round(percetage)}%`;
  }
}
