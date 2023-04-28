import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats/seats.component';
import { CheckInRoutingModule } from './check-in-routing.module';
import { CheckinHomeComponent } from './checkin-seat-table-tab/checkin-home.component';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AirlineStaffHomeComponent } from './airline-staff-home/airline-staff-home.component';

@NgModule({
  declarations: [SeatsComponent, CheckinHomeComponent, AirlineStaffHomeComponent],
  imports: [CommonModule, CheckInRoutingModule, SharedModule, MatTabsModule],
})
export class CheckInModule {}
