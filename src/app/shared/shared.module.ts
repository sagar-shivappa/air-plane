import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassengerDetailsComponent } from './passenger-list/passenger-details.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AvailableFlightsComponent } from './available-flights/available-flights.component';

@NgModule({
  declarations: [PassengerDetailsComponent, PassengerComponent, AvailableFlightsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ],
  exports: [PassengerDetailsComponent, PassengerComponent],
})
export class SharedModule {}
