import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats/seats.component';
import { CheckInRoutingModule } from './check-in-routing.module';
import { CheckinHomeComponent } from './checkin-home/checkin-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SeatsComponent, CheckinHomeComponent],
  imports: [CommonModule, CheckInRoutingModule, SharedModule],
})
export class CheckInModule {}
