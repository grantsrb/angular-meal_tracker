import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'meal-sort',
  template: `
    <select (change)="showRange($event.target.value)">
      <option value="all">Sort By Calories</option>
      <option value="low">Low Cal</option>
      <option value="mid">Mid Cal</option>
      <option value="high">High Cal</option>
    </select>
    <label>Specify Calorie Range</label>
    <input placeholder="Lower limit" #lowerLimit>
    <input placeholder="Upper limit" #upperLimit>
    <button (click)="
      specifyRange(lowerLimit.value, upperLimit.value);
      lowerLimit.value = '';
      upperLimit.value = '';
    ">Show Range</button>
  `
})

export class MealSortComponent {
  @Output() specificRangeSender = new EventEmitter();
  @Output() generalRangeSender = new EventEmitter();

  showRange(specifier: string) {
    this.generalRangeSender.emit(specifier);
  }

  specifyRange(lowerLimit, upperLimit) {
    var output: number[] = [parseInt(lowerLimit), parseInt(upperLimit)];
    this.specificRangeSender.emit(output);
  }
}
