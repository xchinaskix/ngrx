import { Component, Input } from '@angular/core';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  @Input() car: Car;

  constructor(private service: CarsService) { }


  deleteCar() {
    this.service.deleteCar(this.car);
  }

  buyCar() {
    this.car.isSold = true;
    this.service.updateCar(this.car);
  }

}
