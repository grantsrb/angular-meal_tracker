import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MealDisplayComponent } from './meal-display.component';
import { MealEditComponent } from './meal-edit.component';
import { MealNewComponent } from './meal-new.component';



@NgModule ({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealDisplayComponent,
    MealEditComponent,
    MealNewComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
