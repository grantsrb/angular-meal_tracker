import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'meal-display',
  template: `
    <button (click)="showAll()">Show All</button>
    <select (change)="showRange($event.target.value)">
      <option value="all">Sort By Calories</option>
      <option value="low">Low Cal</option>
      <option value="mid">Mid Cal</option>
      <option value="high">High Cal</option>
    </select>
    <label>Specify Calorie Range</label>
    <input placeholder="Lower limit" #lowerLimit>
    <input placeholder="Upper limit" #upperLimit>
    <button (click)="specifyRange(lowerLimit.value, upperLimit.value)">Show Range</button>
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

  specifyRange(lowerRange, upperRange) {
    this.showAllMeals = false;
    this.rangeLow = parseInt(lowerRange);
    this.rangeHigh = parseInt(upperRange);
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
