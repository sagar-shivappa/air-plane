import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinHomeComponent } from './checkin-home/checkin-home.component';
import { SeatsComponent } from './seats/seats.component';

const routes: Routes = [
  { path: 'home', component: CheckinHomeComponent },
  { path: '', component: SeatsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckInRoutingModule {}
