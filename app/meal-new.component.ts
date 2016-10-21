import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'meal-new',
  template: `
    <button *ngIf="!display" (click)="triggerDisplay()">New Meal</button>
    <div *ngIf="display">
      <h3>New Meal:</h3>
      <div class="form-group">
        <label>Name:</label>
        <input #newName>
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input #newDescription>
      </div>
      <div class="form-group">
        <label>Caloric Content:</label>
        <input #newCaloricContent>
      </div>
      <div class="form-group">
        <label>Date Eaten:</label>
        <input #newDate type='date'>
      </div>
      <button (click)="
        submitNewMeal(newName.value, newDescription.value, newCaloricContent.value, newDate.value);
        newName.value = '';
        newDescription.value = '';
        newCaloricContent.value = '';
        newDate.value = '';
      ">Submit</button>
      <button (click)="
        cancelNewMeal();
        newName.value = '';
        newDescription.value = '';
        newCaloricContent.value = '';
        newDate.value = '';
      ">Cancel</button>
    </div>
  `
})

export class MealNewComponent {
  @Output() newMealSender = new EventEmitter();

  public display: boolean = false;

  triggerDisplay() {
    this.display = true;
  }

  submitNewMeal(name: string, description: string, caloricContent: number, date: string) {
    console.log(date);
    if(name !== '' && description !== '' && caloricContent >= 0){
      var newMeal = new Food(name, description, caloricContent, date);
      this.display = false;
      this.newMealSender.emit(newMeal);
    }
  }

  cancelNewMeal() {
    this.display = false;
  }
}
