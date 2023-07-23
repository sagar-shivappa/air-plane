import { createReducer, on } from '@ngrx/store';
import {
  addFlights,
  addPassenger,
  flightNumber,
  updateFlights,
  updatePassenger,
} from './passenger.action';
import { flightsInitialState, passengerInitialState } from './passenger.state';

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

export function flightReducer(state: any, action: any) {
  return _flightsReducer(state, action);
}

// create _flightsReducer function to handle addflight action

const _flightsReducer = createReducer(
  flightsInitialState,
  on(addFlights, (state, action) => {
    console.log(state, action);
    return [...action.flights];
  }),
  on(updateFlights, (state, action) => {
    return [...action.updateFlight];
  })
);
