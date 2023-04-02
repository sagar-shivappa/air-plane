import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinHomeComponent } from './checkin-home/checkin-home.component';
import { SeatsComponent } from './seats/seats.component';
import { PassengerComponent } from '../shared/passenger/passenger.component';

const routes: Routes = [
  { path: '', component: SeatsComponent },
  { path: 'home', component: CheckinHomeComponent },

  { path: 'passenger/:id', component: PassengerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckInRoutingModule {}
