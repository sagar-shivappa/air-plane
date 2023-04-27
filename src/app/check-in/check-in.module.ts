import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats/seats.component';
import { CheckInRoutingModule } from './check-in-routing.module';
import { CheckinHomeComponent } from './checkin-seat-table-tab/checkin-home.component';
import { SharedModule } from '../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [SeatsComponent, CheckinHomeComponent],
  imports: [CommonModule, CheckInRoutingModule, SharedModule, MatTabsModule],
})
export class CheckInModule {}
