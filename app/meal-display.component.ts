import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'meal-display',
  template: `
    <button (click)="showAll()">Show All</button>
    <button (click)="showRange(0,200)">Show Low Cal Foods</button>
    <button (click)="showRange(201,400)">Show Mid Cal Foods</button>
    <button (click)="showRange(401,20000)">Show High Cal Foods</button>
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

  showRange(low, high) {
    this.showAllMeals = false;
    this.rangeLow = low;
    this.rangeHigh = high;
  }

}
