import { Component } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: "meal-app",
  template: `
    <div class="jumbotron">
      <h1>Meal Track Pro</h1>
    </div>
    <div class="container">
      <meal-new
        (newMealSender)="addMeal($event)"
      ></meal-new>
      <meal-display
        [childMealList] = "masterMealList"
        (deleteSender)="triggerDelete($event)"
      ></meal-display>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Food[] = [
    new Food("Chili", "Chili and cornbread with cheese", 1000, "10-20-16")
  ];

  triggerDelete(meal: Food) {
    this.masterMealList.splice(this.masterMealList.indexOf(meal),1);
  }

  addMeal(meal: Food) {
    this.masterMealList.push(meal);
  }
}
