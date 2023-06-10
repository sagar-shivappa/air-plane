import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassengerDetailsComponent } from './passenger-list/passenger-details.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { AvailableFlightsComponent } from './available-flights/available-flights.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    PassengerDetailsComponent,
    PassengerComponent,
    AvailableFlightsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,

    NgxPaginationModule,
  ],
  exports: [PassengerDetailsComponent, PassengerComponent, HomeComponent],
})
export class SharedModule {}
