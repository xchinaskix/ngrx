import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { LoadCars, AddCar, DeleteCar, UpdateCar } from './redux/cars.action';
import { Car } from './car.model';

@Injectable()
export class CarsService {

    static BASE_URL = 'http://localhost:3000/';

    constructor(public http: HttpClient, private store: Store<AppState>) {}

    preloadCars() {
        return this.http.get(`${CarsService.BASE_URL}cars`);
    }

    loadCars(): void {
        this.http.get(`${CarsService.BASE_URL}cars`)
        .subscribe((cars: Car[]) => this.store.dispatch(new LoadCars(cars)));
    }

    addCar(car: Car): void {
        this.http.post(`${CarsService.BASE_URL}cars`, car)
        .subscribe((res: Car) => this.store.dispatch(new AddCar(res)));
    }

    deleteCar(car: Car): void {
        this.http.delete(`${CarsService.BASE_URL}cars/${car.id}`)
        .subscribe(() => this.store.dispatch(new DeleteCar(car)));
    }

    updateCar(car: Car): void {
        this.http.put(`${CarsService.BASE_URL}cars/${car.id}`, car)
        .subscribe(() => this.store.dispatch(new UpdateCar(car)));
    }
}
