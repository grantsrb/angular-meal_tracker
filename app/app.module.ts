import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MealDisplayComponent } from './meal-display.component';
import { MealEditComponent } from './meal-edit.component';
import { MealNewComponent } from './meal-new.component';
import { MealSortComponent } from './meal-sort.component';

import { CaloriesPipe } from './calories.pipe';

@NgModule ({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealDisplayComponent,
    MealEditComponent,
    MealNewComponent,
    MealSortComponent,
    CaloriesPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
