import { Component } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: "meal-app",
  template: `
    <div class="jumbotron">
      <h1>Meal Track Pro</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <meal-new
            (newMealSender)="addMeal($event)"
          ></meal-new>
          <meal-display
            [childMealList] = "masterMealList"
            (deleteSender)="triggerDelete($event)"
          ></meal-display>
        </div>
        <div class="col-offset-sm-2 col-sm-5">
          <meal-by-day
            [childMealList]="masterMealList"
          ></meal-by-day>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Food[] = [
    new Food("Chili", "Chili and cornbread with cheese", 1000, "10-20-16"),
    new Food("Quesadilla", "Tortilla and cheese", 400, "10-19-16"),
    new Food("Life serial", "Surl", 600, "10-21-16")
  ];

  triggerDelete(meal: Food) {
    this.masterMealList.splice(this.masterMealList.indexOf(meal),1);
  }

  addMeal(meal: Food) {
    this.masterMealList.push(meal);
  }
}
