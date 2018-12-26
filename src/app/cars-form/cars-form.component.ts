import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carName = '';
  carModel = '';

  constructor(public service: CarsService) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.carName === '' || this.carModel === '') {
      return;
    }

    const date = moment().format('DD.MM.YYYY');
    const car = new Car(this.carName, this.carModel, date);
    this.service.addCar(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    this.service.loadCars();
  }

}
