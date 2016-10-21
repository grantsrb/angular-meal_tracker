import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'meal-edit',
  template: `
    <div *ngIf="meal2Edit.edit">
      <div class="form-group">
        <label>Name:</label>
        <input [(ngModel)]=meal2Edit.name>
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input [(ngModel)]=meal2Edit.description>
      </div>
      <div class="form-group">
        <label>Caloric Content:</label>
        <input [(ngModel)]=meal2Edit.caloricContent>
      </div>
      <div class="form-group">
        <label>Date Eaten:</label>
        <input [(ngModel)]=meal2Edit.date>
      </div>
      <button (click)="finishEdit(meal2Edit)">Finish Edit</button>
    </div>
  `
})

export class MealEditComponent {
  @Input() meal2Edit: Food;
  @Output() finishEditSender = new EventEmitter();

  finishEdit(meal: Food) {
    this.finishEditSender.emit(meal);
  }
}
