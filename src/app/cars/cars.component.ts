import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  @Input() car: Car;
  @Output() delete = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

  deleteCar() {
    this.delete.emit(this.car);
  }

  buyCar() {
    this.car.isSold = true;
  }

}
