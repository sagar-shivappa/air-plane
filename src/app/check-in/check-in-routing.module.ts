import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinHomeComponent } from './checkin-seat-table-tab/checkin-home.component';
import { SeatsComponent } from './seats/seats.component';
import { PassengerComponent } from '../shared/passenger/passenger.component';
import { AirlineStaffHomeComponent } from './airline-staff-home/airline-staff-home.component';

const routes: Routes = [
  { path: '', component: CheckinHomeComponent },
  { path: 'home', component: AirlineStaffHomeComponent },

  { path: 'passenger/:id', component: PassengerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckInRoutingModule {}
