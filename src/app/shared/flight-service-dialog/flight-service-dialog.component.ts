import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { FlightsInterface } from '../state/passenger.state';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { updateFlights } from '../state/passenger.action';

@Component({
  selector: 'app-flight-service-dialog',
  templateUrl: './flight-service-dialog.component.html',
  styleUrls: ['./flight-service-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    NgIf,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class FlightServiceDialogComponent implements OnInit {
  flightDetails: FormGroup;
  availableAncillaryServices: string[] = [];
  availableShoppingItems: string[] = [];
  flightsList: FlightsInterface[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,

    private store: Store<{
      flight: FlightsInterface;
    }>,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FlightServiceDialogComponent>
  ) {}

  ngOnInit(): void {
    this.flightDetails = this.fb.group({
      selectedAncillaryServices: [],
      providedShoppingItems: [],
      flightNo: [''],
    });
    //The below is to get the flight details from the store
    this.store.select('flight').subscribe((res: any) => {
      console.log(res);
      this.flightsList = res;
      let response: any = res.filter(
        (data: FlightsInterface) => data.flightCode == this.data.flightNo
      );

      this.flightDetails.controls['selectedAncillaryServices'].setValue(
        response[0].provisionedAncillaryServices
      );
      this.availableAncillaryServices = response[0].ancillaryServices;

      this.flightDetails.controls['providedShoppingItems'].setValue(
        response[0].provisionedShoppingItems
      );
      this.availableShoppingItems = response[0].shoppingService;

      this.flightDetails.controls['flightNo'].setValue(response[0].flightCode);
    });
  }

  updateFlightDetails() {
    let updateFlightDetails = this.flightsList.map(
      (flight: FlightsInterface) => {
        if (flight.flightCode == this.data.flightNo) {
          Object.freeze(flight);
          const objCopy = { ...flight };
          objCopy.provisionedAncillaryServices = [
            ...this.flightDetails.controls['selectedAncillaryServices'].value,
          ];
          objCopy.provisionedShoppingItems = [
            ...this.flightDetails.controls['providedShoppingItems'].value,
          ];
          return objCopy;
        }
        return flight;
      }
    );
    this.store.dispatch(updateFlights({ updateFlight: updateFlightDetails }));
    setTimeout(() => {
      //this.dialogRef.close(`Successfully Updated ${this.data.flightNo} Prefrences`);
      this.dialogRef.close('success');
    }, 500);
  }

  close() {
    //this.dialogRef.close('No Updates Done');
    this.dialogRef.close('nochange');
  }
}
