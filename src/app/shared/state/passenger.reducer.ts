import { createReducer, on } from '@ngrx/store';
import {
  addPassenger,
  flightNumber,
  updatePassenger,
} from './passenger.action';
import { passengerInitialState } from './passenger.state';

export function passengersReducer(state: any, action: any) {
  return _passengersReducer(state, action);
}

const _passengersReducer = createReducer(
  passengerInitialState,
  on(addPassenger, (state, action) => {
    console.log(state, action);
    return {
      ...state,
      passengers: [...state.passengers, action.passenger],
    };
  }),
  on(updatePassenger, (state, action) => {
    console.log(state, action);
    return {
      ...state,
      passengers: [...action.updatedPassenger],
    };
  }),
  on(flightNumber, (state, action) => {
    return {
      ...state,
      flightNumber: '20',
    };
  })
);
