import { Car } from '../car.model';
import { Action } from '@ngrx/store';
import { CAR_ACTION, CarActions } from './cars.action';

const initialState = {
    cars: []
};

export function carsReducer(state = initialState, action: CarActions) {
    switch (action.type) {
        case CAR_ACTION.ADD_CAR:
        return {
            ...state,
            cars: [...state.cars, action.payload]
        };
        case CAR_ACTION.DELETE_CAR:
        return {
            ...state,
            cars: [...state.cars.filter(c => c.id !== action.payload.id)]
        };
        case CAR_ACTION.UPDATE_CAR:
        const newCars = state.cars.map(v => {
            if (v.id === action.payload.id) {
                return {...v, isSold: true};
            } else { return v; }
        });
        return {
            ...state,
            cars: newCars
        };
        case CAR_ACTION.LOAD_CARS:
        return {
            ...state,
            cars: [...action.payload]
        };
        default:
            return state;
    }
}
