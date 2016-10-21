import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'meal-display',
  template: `
    <div *ngFor="let currentMeal of childMealList">
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
}
