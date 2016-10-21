import {Input, Output, EventEmitter, Component} from '@angular/core';
import {Food} from './food.model';

@Component ({
  selector: 'meal-date-display',
  template: `
    <div class="form-group">
      <label>Display Meals by Date:</label>
      <input (change)="filterByDate($event.target.value)" type='date'>
    </div>
    <div *ngIf="mealDate">
      <h2>Meals on {{mealDate}}</h2>
      <div *ngFor="let currentMeal of childMealList | date_filter:mealDate">
        <h3>{{currentMeal.name}}</h3>
        <ul>
          <li>{{currentMeal.description}}</li>
          <li>{{currentMeal.caloricContent}} cal</li>
        </ul>
      </div>
      <h4>Total Calories: {{totalCalories}}</h4>
    </div>
  `
})

export class MealDateDisplayComponent {
  @Input() childMealList: Food[];

  public mealDate: string = null;
  public totalCalories: number = null;

  filterByDate(date: string) {
    this.mealDate = date;
    this.calculateCalories();
  }

  calculateCalories() {
    this.totalCalories = 0;
    for(var i = 0; i < this.childMealList.length; i++) {
      if(this.childMealList[i].date === this.mealDate) {
        this.totalCalories += this.childMealList[i].caloricContent;
      }
    }
  }
}
