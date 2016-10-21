import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'meal-display',
  template: `
    <button (click)="showAll()">Show All</button>
    <meal-sort
      (specificRangeSender)="specifyRange($event)"
      (generalRangeSender)="showRange($event)"
    ></meal-sort>
    <h2>Meals</h2>
    <div *ngFor="let currentMeal of childMealList | calories:showAllMeals:rangeLow:rangeHigh">
      <h3>{{currentMeal.name}}</h3>
      <h4> {{currentMeal.date}}</h4>
      <ul>
        <li>{{currentMeal.description}}</li>
        <li>{{currentMeal.caloricContent}} cal</li>
      </ul>
      <button (click)="toggleEdit(currentMeal)">Edit</button>
      <button (click)="triggerDelete(currentMeal)">Delete</button>
      <meal-edit
        [meal2Edit]="currentMeal"
        (finishEditSender)="toggleEdit($event)"
      ></meal-edit>
    </div>
  `
})

export class MealDisplayComponent {
  @Input() childMealList: Food[];
  @Output() deleteSender = new EventEmitter();

  public showAllMeals: boolean = true;
  public rangeLow: number = 0;
  public rangeHigh: number = 0;

  toggleEdit(meal: Food) {
    console.log("start");
    if(meal.edit) {
      meal.edit = false;
    } else {
      meal.edit = true;
      console.log(meal.edit);
    }
    console.log("finish");
  }

  triggerDelete(meal: Food) {
    this.deleteSender.emit(meal);
  }

  showAll() {
    this.showAllMeals = true;
  }

  specifyRange(range: number []) {
    this.showAllMeals = false;
    this.rangeLow = range[0];
    this.rangeHigh = range[1];
  }

  showRange(userInput: string) {
    this.showAllMeals = false;
    if(userInput === "high") {
      this.rangeLow = 801;
      this.rangeHigh = 10000;
    } else if(userInput === "mid") {
      this.rangeLow = 401;
      this.rangeHigh = 800;
    } else if(userInput === "low") {
      this.rangeLow = 0;
      this.rangeHigh = 400;
    } else {
      this.showAllMeals = true;
    }
  }

}
