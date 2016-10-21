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
          <div class="panel">
            <meal-new
              (newMealSender)="addMeal($event)"
            ></meal-new>
            <meal-display
              [childMealList] = "masterMealList"
              (deleteSender)="triggerDelete($event)"
            ></meal-display>
          </div>
        </div>
        <div class="col-offset-sm-2 col-sm-5">
          <div class="panel">
            <meal-date-display
              [childMealList]="masterMealList"
            ></meal-date-display>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Food[] = [
    new Food("Chili", "Chili and cornbread with cheese", 1000, "2016-10-20"),
    new Food("Quesadilla", "Tortilla and cheese", 400, "2016-10-19"),
    new Food("Life serial", "Surl", 600, "2016-10-21")
  ];

  triggerDelete(meal: Food) {
    this.masterMealList.splice(this.masterMealList.indexOf(meal),1);
  }

  addMeal(meal: Food) {
    this.masterMealList.push(meal);
  }
}
