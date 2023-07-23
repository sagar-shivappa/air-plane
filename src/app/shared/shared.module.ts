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
import { HomeComponent } from './home/home.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PassengerComponent,
    AvailableFlightsComponent,
    HomeComponent,
    PassengerDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatDialogModule,
  ],
  exports: [PassengerComponent, HomeComponent, PassengerDetailsComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class SharedModule {}
