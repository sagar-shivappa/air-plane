import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassengerDetailsComponent } from './passenger-list/passenger-details.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PassengerDetailsComponent, PassengerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PassengerDetailsComponent, PassengerComponent],
})
export class SharedModule {}
