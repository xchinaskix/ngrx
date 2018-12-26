import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CAR_ACTION, AddCar, LoadCars } from './cars.action';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';

@Injectable()
export class CarsEffect {

    constructor(private actions$: Actions, public service: CarsService) {}

    @Effect() loadCar = this.actions$
    .pipe(
        ofType(CAR_ACTION.ADD_CAR),
        mergeMap((action =>
        this.service.preloadCars().pipe(
           map(data => ({type: CAR_ACTION.LOAD_CARS, payload: data})),
        )
        )
    ));

}

// switchMap((action: AddCar) => {
//     return this.service.preloadCars();
//  },
//  mergeMap((cars: Car[]) => {
//      return new LoadCars(cars);
//  })
