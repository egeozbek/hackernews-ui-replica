import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  private static intervalsInSeconds = {
    'year': 31536000,
    'month': 2592000,
    'week': 604800,
    'day': 86400,
    'hour': 3600,
    'minute': 60,
    'second': 1
  };

  transform(value: any, ...args: any[]): any {
    if (value) {
      const currentDate = Math. round((new Date()). getTime() / 1000)
      const givenDate = new Date(value);
      const dateDifference = +currentDate - +givenDate;
      let counter;
      for (const i in DateAgoPipe.intervalsInSeconds) {
        if(DateAgoPipe.intervalsInSeconds[i]<dateDifference){
          counter = Math.floor(dateDifference / DateAgoPipe.intervalsInSeconds[i]);
          if (counter === 1) {
            return counter + ' ' + i + ' ago';
          } else {
            return counter + ' ' + i + 's ago';
          }
        }
      }
    }
    return value;
  }

}
