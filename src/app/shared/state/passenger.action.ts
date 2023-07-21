import { createAction, props } from '@ngrx/store';
import { FlightsInterface, passengerinterface } from './passenger.state';

export const addPassenger = createAction(
  'addpassenger',
  props<{ passenger: passengerinterface }>()
);

export const updatePassenger = createAction(
  'updatePassenger',
  props<{ updatedPassenger: any }>()
);

export const addFlights = createAction(
  'addFlights',
  props<{ flights: FlightsInterface[] }>()
);

export const updateFlights = createAction(
  'updateFlights',
  props<{ updateFlight: FlightsInterface[] }>()
);

export const flightNumber = createAction('flightNumber');
