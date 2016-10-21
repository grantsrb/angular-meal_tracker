import { Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe ({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], showAll, rangeLow, rangeHigh) {
    if(showAll)
      return input;

    var output: Food[] = [];
    if(rangeLow > rangeHigh) {
      var temp = rangeLow;
      rangeLow = rangeHigh;
      rangeHigh = temp;
    }
    for(var i = 0; i < input.length; i++) {
      if(input[i].caloricContent >= rangeLow && input[i].caloricContent <= rangeHigh){
        output.push(input[i]);
      }
    }
    return output;
  }
}
