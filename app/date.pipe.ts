import { Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe ({
  name: "date_filter",
  pure: false
})

export class DatePipe implements PipeTransform {
  transform(input: Food[], dateFilter) {
    var output: Food[] = [];
    for(var i = 0; i < input.length; i++) {
      if(input[i].date === dateFilter) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
