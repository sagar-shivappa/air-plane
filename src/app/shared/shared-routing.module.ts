import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from '../shared/passenger/passenger.component';
import { PassengerDetailsComponent } from './passenger-list/passenger-details.component';

const routes: Routes = [
  { path: 'passengerdetails/:flightNo', component: PassengerDetailsComponent },
  { path: 'passengerdetails', component: PassengerDetailsComponent },
  {
    path: 'passenger/:id/:seatno/:flightNo',
    component: PassengerComponent,
  },
  {
    path: 'passenger',
    component: PassengerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
