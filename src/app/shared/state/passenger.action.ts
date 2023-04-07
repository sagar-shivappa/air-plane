import { createAction, props } from '@ngrx/store';
import { passengerinterface } from './passenger.state';

export const addPassenger = createAction(
  'addpassenger',
  props<{ passenger: passengerinterface }>()
);

export const updatePassenger = createAction(
  'updatePassenger',
  props<{ updatedPassenger: any }>()
);

export const flightNumber = createAction('flightNumber');
