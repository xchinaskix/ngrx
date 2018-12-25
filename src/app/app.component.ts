import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ford', 'Focus', '23.12.2018', true, 1),
    new Car('Nissan', 'Leaf', '24.12.2018', false, 2)
  ];

  onAdd(car: Car) {
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(v => v.id !== car.id);
  }
}
