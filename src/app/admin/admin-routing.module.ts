import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDetailsComponent } from '../shared/passenger-list/passenger-details.component';
import { PassengerComponent } from '../shared/passenger/passenger.component';

const routes: Routes = [
  { path: '', component: PassengerDetailsComponent },
  { path: 'passenger/:id', component: PassengerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
