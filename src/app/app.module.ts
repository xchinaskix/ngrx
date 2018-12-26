import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarsComponent } from './cars/cars.component';
import { carsReducer } from './redux/cars.reducer';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars.service';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffect } from './redux/cars.effect';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CarsEffect]),
    StoreModule.forRoot({carPage: carsReducer})
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
